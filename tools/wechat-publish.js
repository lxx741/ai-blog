#!/usr/bin/env node

/**
 * 微信公众号文章自动发布脚本
 * 
 * 使用方法：
 * 1. 修改下方的配置信息（AppID、AppSecret 等）
 * 2. 运行：node wechat-publish.js
 * 
 * 注意：
 * - 必须是服务号（订阅号无群发 API 权限）
 * - 服务号每月只有 4 次群发机会
 * - 建议先使用「预览」功能测试
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ==================== 配置区域 ====================
const CONFIG = {
  // 公众号信息
  appId: 'YOUR_APPID_HERE',        // 替换为你的 AppID
  appSecret: 'YOUR_APPSECRET_HERE', // 替换为你的 AppSecret
  
  // 文章信息
  title: '零基础教程｜10 分钟搭建你的私人 AI 助手，微信/钉钉随时聊天',
  author: '你的昵称',
  digest: '手把手教你用 OpenClaw 搭建私人 AI 助手，零基础也能搞定！',
  content: '文章内容（支持 HTML）',
  
  // 可选：封面图片（本地路径或 URL）
  thumbMediaId: null,
  
  // 群发设置
  sendType: 'preview', // 'preview' 预览 | 'sendall' 群发
  previewUser: 'YOUR_WECHAT_ID' // 预览用户的微信号
};

// ==================== 工具函数 ====================

// HTTP GET 请求
function httpGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`解析失败：${data}`));
        }
      });
    }).on('error', reject);
  });
}

// HTTP POST 请求
function httpPost(url, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`解析失败：${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(JSON.stringify(data));
    req.end();
  });
}

// ==================== 核心功能 ====================

// 1. 获取 access_token
async function getAccessToken() {
  console.log('📝 正在获取 access_token...');
  
  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${CONFIG.appId}&secret=${CONFIG.appSecret}`;
  const result = await httpGet(url);
  
  if (result.access_token) {
    console.log('✅ access_token 获取成功');
    return result.access_token;
  } else {
    throw new Error(`获取 access_token 失败：${result.errmsg}`);
  }
}

// 2. 上传封面图片（可选）
async function uploadThumbImage(accessToken, imagePath) {
  console.log('📷 正在上传封面图片...');
  
  // TODO: 实现图片上传逻辑
  // 需要使用 multipart/form-data
  console.log('⚠️  图片上传功能待实现，暂时跳过');
  return null;
}

// 3. 创建草稿
async function createDraft(accessToken, content) {
  console.log('📝 正在创建草稿...');
  
  const url = `https://api.weixin.qq.com/cgi-bin/draft/add?access_token=${accessToken}`;
  
  const articles = [{
    title: content.title,
    author: content.author,
    digest: content.digest,
    content: content.content,
    thumb_media_id: content.thumbMediaId || '',
    need_open_comment: 0, // 0=关闭评论 1=开启
    only_fans_can_comment: 0
  }];
  
  const data = {
    articles: articles
  };
  
  const result = await httpPost(url, data);
  
  if (result.media_id) {
    console.log('✅ 草稿创建成功，media_id:', result.media_id);
    return result.media_id;
  } else {
    throw new Error(`创建草稿失败：${result.errmsg}`);
  }
}

// 4. 发送预览（给指定用户）
async function sendPreview(accessToken, mediaId) {
  console.log('👀 正在发送预览...');
  
  const url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${accessToken}`;
  
  const data = {
    filter: { is_to_all: false },
    mpnews: { media_ids: [mediaId] },
    msgtype: 'mpnews',
    send_ignore_reprint: 1,
    towxname: CONFIG.previewUser
  };
  
  const result = await httpPost(url, data);
  
  if (result.errcode === 0) {
    console.log('✅ 预览发送成功');
    return true;
  } else {
    throw new Error(`发送预览失败：${result.errmsg}`);
  }
}

// 5. 群发给所有用户
async function sendAll(accessToken, mediaId) {
  console.log('📢 正在群发...');
  
  const url = `https://api.weixin.qq.com/cgi-bin/message/mass/sendall?access_token=${accessToken}`;
  
  const data = {
    filter: { is_to_all: true },
    mpnews: { media_ids: [mediaId] },
    msgtype: 'mpnews',
    send_ignore_reprint: 1
  };
  
  const result = await httpPost(url, data);
  
  if (result.errcode === 0) {
    console.log('✅ 群发成功，msg_id:', result.msg_id);
    return true;
  } else {
    throw new Error(`群发失败：${result.errmsg}`);
  }
}

// ==================== 主流程 ====================

async function main() {
  console.log('🚀 微信公众号发布脚本启动\n');
  
  // 检查配置
  if (CONFIG.appId === 'YOUR_APPID_HERE' || CONFIG.appSecret === 'YOUR_APPSECRET_HERE') {
    console.error('❌ 错误：请先修改脚本中的 AppID 和 AppSecret 配置！');
    process.exit(1);
  }
  
  try {
    // 1. 获取 access_token
    const accessToken = await getAccessToken();
    
    // 2. 上传封面（如果有）
    if (CONFIG.thumbMediaId) {
      // 已有封面 ID，跳过上传
    }
    
    // 3. 准备文章内容
    const articleContent = {
      title: CONFIG.title,
      author: CONFIG.author,
      digest: CONFIG.digest,
      content: `
        <section style="font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei UI', 'Microsoft YaHei', Arial, sans-serif;">
          <h2 style="color: #333;">🤖 想拥有一个随时待命的私人 AI 助手吗？</h2>
          <p>想象一下：</p>
          <ul>
            <li>在微信/钉钉上直接发消息，就能让 AI 帮你查天气、写代码、整理文档</li>
            <li>数据完全掌握在自己手里，不用担心隐私泄露</li>
            <li>24 小时在线，随叫随到</li>
          </ul>
          <p>今天这篇教程，手把手教你用 <strong>OpenClaw</strong> 搭建属于自己的 AI 助手。<strong>零基础也能搞定</strong>，全程大约 10 分钟！</p>
          
          <h3>📋 开始前准备</h3>
          <p><strong>你需要什么？</strong></p>
          <ol>
            <li>一台电脑（Mac、Windows、Linux 都可以）</li>
            <li>Node.js 22 或更新版本</li>
            <li>一个 AI 模型 API Key（推荐阿里云百炼、DeepSeek 等，都有免费额度）</li>
          </ol>
          
          <p><strong>不用准备什么？</strong></p>
          <ul>
            <li>❌ 不需要服务器</li>
            <li>❌ 不需要域名</li>
            <li>❌ 不需要编程基础</li>
            <li>❌ 不用花一分钱</li>
          </ul>
          
          <h3>🚀 安装步骤</h3>
          <p><strong>1. 安装 Node.js</strong></p>
          <p>访问 <a href="https://nodejs.org">nodejs.org</a> 下载并安装 LTS 版本。</p>
          
          <p><strong>2. 安装 OpenClaw</strong></p>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px;">curl -fsSL https://openclaw.ai/install.sh | bash</pre>
          
          <p><strong>3. 运行配置向导</strong></p>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px;">openclaw onboard --install-daemon</pre>
          
          <p><strong>4. 验证安装</strong></p>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 5px;">openclaw gateway status</pre>
          
          <p>访问 http://127.0.0.1:18789/ 即可使用！</p>
          
          <p style="color: #888; font-size: 12px; margin-top: 30px;">
            觉得有用？欢迎转发给需要的朋友！<br>
            更多教程请访问：https://docs.openclaw.ai
          </p>
        </section>
      `,
      thumbMediaId: CONFIG.thumbMediaId
    };
    
    // 4. 创建草稿
    const mediaId = await createDraft(accessToken, articleContent);
    
    // 5. 发送预览或群发
    if (CONFIG.sendType === 'preview') {
      await sendPreview(accessToken, mediaId);
      console.log('\n✅ 预览已发送，请在微信上查看效果！');
    } else if (CONFIG.sendType === 'sendall') {
      await sendAll(accessToken, mediaId);
      console.log('\n✅ 群发成功！');
    }
    
    console.log('\n🎉 发布流程完成！');
    
  } catch (error) {
    console.error('\n❌ 发生错误:', error.message);
    process.exit(1);
  }
}

// 运行主流程
main();
