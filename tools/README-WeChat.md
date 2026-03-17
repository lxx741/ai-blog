# 微信公众号自动发布脚本使用说明

## 📋 前置要求

1. **公众号类型**：必须是**服务号**（订阅号没有群发 API 权限）
2. **开发者权限**：你的微信号需要绑定为公众号开发者
3. **Node.js**：已安装 Node.js 14+

---

## 🔑 获取必要信息

### 1. 获取 AppID 和 AppSecret

1. 登录 [微信公众号后台](https://mp.weixin.qq.com)
2. 点击左侧菜单「开发」→「基本配置」
3. 复制以下信息：
   - **AppID(应用 ID)**
   - **AppSecret(应用密钥)**

### 2. 配置服务器 IP 白名单

在「基本配置」页面：
1. 找到「IP 白名单」
2. 添加你的服务器公网 IP
3. 如果是本地测试，可以用 [ifconfig.me](https://ifconfig.me) 查看当前 IP

---

## ⚙️ 配置脚本

打开 `wechat-publish.js`，修改以下配置：

```javascript
const CONFIG = {
  // 公众号信息
  appId: 'YOUR_APPID_HERE',        // 替换为你的 AppID
  appSecret: 'YOUR_APPSECRET_HERE', // 替换为你的 AppSecret
  
  // 文章信息
  title: '文章标题',
  author: '你的昵称',
  digest: '文章摘要',
  
  // 群发设置
  sendType: 'preview', // 'preview' 预览 | 'sendall' 群发
  previewUser: 'YOUR_WECHAT_ID' // 预览用户的微信号
};
```

---

## 🚀 使用方法

### 方式一：发送预览（推荐先测试）

```bash
cd /root/.openclaw/workspace/my-blog
node tools/wechat-publish.js
```

预览会发送到指定的微信号，可以在微信上查看效果。

### 方式二：直接群发

修改配置：
```javascript
sendType: 'sendall'
```

然后运行：
```bash
node tools/wechat-publish.js
```

---

## ⚠️ 注意事项

1. **服务号每月只有 4 次群发机会**，请谨慎使用
2. **预览不限次数**，建议先预览再群发
3. **access_token 有效期 2 小时**，脚本会自动获取
4. **图片上传**：当前版本暂不支持自动上传封面图，可手动在后台设置

---

## 🐛 常见错误

| 错误信息 | 原因 | 解决方法 |
|---------|------|---------|
| 40013 | AppID 无效 | 检查 AppID 是否正确 |
| 40125 | AppSecret 错误 | 检查 AppSecret 是否正确 |
| 40164 | IP 不在白名单 | 在公众号后台添加 IP |
| 45009 | 达到群发次数上限 | 服务号每月只有 4 次 |
| 40002 | 不支持订阅号 | 只有服务号可以调用 API |

---

## 📚 相关文档

- [微信公众号 API 文档](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html)
- [草稿箱 API](https://developers.weixin.qq.com/doc/offiaccount/Draft_Box/Add_draft.html)
- [群发 API](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html)

---

## 💡 进阶功能

如需支持：
- 自动上传封面图片
- 从 Markdown 文件读取内容
- 定时发布
- 多图文消息

可以在此基础上扩展脚本。
