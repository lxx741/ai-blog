---
title: 零基础教程：10 分钟搭建你的私人 AI 助手
tags: [OpenClaw, AI, 人工智能，自动化，效率工具]
date: 2026-03-17
---

# 零基础教程：10 分钟搭建你的私人 AI 助手（微信/钉钉随时聊天）

---

## 前言

想拥有一个 24 小时在线的私人 AI 助手吗？

- 在微信/钉钉上发消息，就能让 AI 帮你查天气、写代码、整理文档
- 数据完全私有，不用担心隐私泄露
- 零成本，用免费 API 额度就够了

本文手把手教你用 **OpenClaw** 搭建属于自己的 AI 助手。零基础也能搞定，全程约 10 分钟！

---

## 环境准备

### 硬件要求

- 一台电脑（Mac/Windows/Linux 均可）
- 能上网就行

### 软件要求

| 软件 | 版本 | 用途 |
|------|------|------|
| Node.js | 22+ | 运行环境 |
| AI API Key | - | 调用 AI 模型 |

### 获取 API Key

推荐平台（注册即送免费额度）：

1. **阿里云百炼**：https://bailian.console.aliyun.com
2. **DeepSeek**：https://platform.deepseek.com
3. **Moonshot**：https://platform.moonshot.cn

---

## 安装教程

### 步骤 1：安装 Node.js

**Windows：**
1. 访问 https://nodejs.org
2. 下载 LTS 版本
3. 双击安装

验证：
```cmd
node --version
```

**Mac：**
```bash
brew install node@22
```

**Linux：**
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

### 步骤 2：安装 OpenClaw

**Mac/Linux：**
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows（PowerShell）：**
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

---

### 步骤 3：配置向导

```bash
openclaw onboard --install-daemon
```

按向导提示操作：

1. **选择 AI 提供商** → 输入 API Key
2. **工作区位置** → 直接回车（默认即可）
3. **网关端口** → 保持 18789
4. **聊天软件** → 可选配置
5. **守护进程** → 选择「是」

---

### 步骤 4：验证

```bash
openclaw gateway status
```

看到 `running` 即成功。

浏览器访问：http://127.0.0.1:18789/

---

## 使用指南

### 方式一：网页控制

直接在浏览器和控制面板对话。

### 方式二：聊天软件

以钉钉为例：

1. 钉钉开放平台创建机器人
2. 获取 Webhook
3. 运行 `openclaw channels add dingtalk`
4. 输入 Webhook 地址

---

## 常见问题

**Q：安装提示权限不足？**

Mac/Linux 加 `sudo`，Windows 用管理员权限运行。

**Q：网关启动失败？**

检查端口占用：
```bash
lsof -i :18789  # Mac/Linux
netstat -ano | findstr 18789  # Windows
```

**Q：能用于生产吗？**

可以，建议配置 HTTPS 和白名单。

---

## 进阶功能

### 安装技能包
```bash
clawhub search "calendar"
clawhub install <skill-name>
```

### 定时任务
```bash
openclaw cron add "0 8 * * *" "weather Beijing"
```

### 更多集成
- Gmail 邮件
- 日历提醒
- GitHub 推送

---

## 总结

OpenClaw 让你拥有：
- ✅ 私有 AI 助手
- ✅ 聊天软件调用
- ✅ 数据自主
- ✅ 无限扩展

**资源：**
- 文档：https://docs.openclaw.ai
- 技能市场：https://clawhub.ai

---

**欢迎评论区交流！**

*作者：AI 助手开发者*
*转载请注明出处*
