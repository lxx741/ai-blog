---
title: 零基础教程｜10 分钟搭建你的私人 AI 助手，微信/钉钉随时聊天
date: 2026-03-07 13:00:00
tags: [OpenClaw, AI, 教程，效率工具]
categories: [技术教程]
cover: /images/openclaw-cover.png
---

## 🤖 想拥有一个随时待命的私人 AI 助手吗？

想象一下：
- 在微信/钉钉上直接发消息，就能让 AI 帮你查天气、写代码、整理文档
- 数据完全掌握在自己手里，不用担心隐私泄露
- 24 小时在线，随叫随到

今天这篇教程，手把手教你用 **OpenClaw** 搭建属于自己的 AI 助手。**零基础也能搞定**，全程大约 10 分钟！

---

## 📋 开始前准备

### 你需要什么？

1. **一台电脑**（Mac、Windows、Linux 都可以）
2. **Node.js 22 或更新版本**（没有的话后面会教安装）
3. **一个 AI 模型 API Key**（推荐阿里云百炼、DeepSeek 等，都有免费额度）

### 不用准备什么？

- ❌ 不需要服务器
- ❌ 不需要域名
- ❌ 不需要编程基础
- ❌ 不用花一分钱（用免费额度就够了）

---

## 🚀 第一步：安装 Node.js

Node.js 是运行 OpenClaw 的基础环境。

### Windows 用户

1. 访问 [nodejs.org](https://nodejs.org)
2. 下载 **LTS 版本**（长期支持版）
3. 双击安装包，一路「下一步」即可

安装完成后，打开 **命令提示符**（Win+R 输入 `cmd`），输入：
```bash
node --version
```
看到版本号（如 `v22.x.x`）就说明安装成功了！

### Mac 用户

打开「终端」，输入：
```bash
brew install node@22
```

没有 Homebrew？先安装它：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Linux 用户

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## 🔧 第二步：安装 OpenClaw

打开终端（Mac/Linux）或 命令提示符（Windows），输入：

### Mac / Linux
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### Windows（PowerShell）
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

等待安装完成，你会看到类似这样的提示：
```
✅ OpenClaw installed successfully!
```

---

## 🎯 第三步：运行配置向导

安装完成后，运行：
```bash
openclaw onboard --install-daemon
```

这会启动一个**交互式配置向导**，跟着提示走就行：

### 1️⃣ 选择 AI 模型

向导会让你选择 AI 提供商，推荐：
- **阿里云百炼**（国内访问快，有免费额度）
- **DeepSeek**（性价比高）
- **Moonshot**（月之暗面）

选择后，输入你的 API Key（没有的话先去官网注册领取）

### 2️⃣ 配置工作区

直接按回车，使用默认位置：`~/.openclaw/workspace`

### 3️⃣ 网关设置

保持默认即可：
- 端口：18789
- 认证方式：Token（自动生成）

### 4️⃣ 连接聊天软件（可选）

如果你想通过微信/钉钉/AI 助手聊天，可以在这里配置：
- Telegram
- WhatsApp
- Discord
- 钉钉

**暂时不配置也没关系**，后面可以随时添加。

### 5️⃣ 安装守护进程

选择「是」，这样 OpenClaw 会开机自启动，不用每次都手动运行。

---

## ✅ 第四步：验证安装

配置完成后，运行：
```bash
openclaw gateway status
```

看到 `running` 就说明一切正常！

然后打开浏览器，访问：
```
http://127.0.0.1:18789/
```

就能看到 OpenClaw 的控制面板了！🎉

---

## 💬 第五步：开始聊天

### 方式一：网页控制面板

直接在上面打开的网页里就能和 AI 对话，适合快速测试。

### 方式二：连接钉钉/微信

如果想通过聊天软件使用，需要额外配置：

#### 钉钉配置
1. 在钉钉开放平台创建一个机器人
2. 获取 Webhook 地址
3. 运行：
```bash
openclaw channels add dingtalk
```
4. 按提示输入 Webhook 地址

配置完成后，给机器人发消息，AI 就会回复你！

---

## 🛠️ 常见问题

### Q1：安装时提示「权限不足」怎么办？

**Mac/Linux**：在命令前加 `sudo`
```bash
sudo curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows**：右键「以管理员身份运行」PowerShell

### Q2：API Key 在哪里获取？

推荐几个平台（都有免费额度）：
- 阿里云百炼：https://bailian.console.aliyun.com
- DeepSeek：https://platform.deepseek.com
- Moonshot：https://platform.moonshot.cn

### Q3：安装后找不到命令？

关闭终端/命令提示符，重新打开再试。

### Q4：网关启动失败？

检查端口是否被占用：
```bash
# Mac/Linux
lsof -i :18789

# Windows
netstat -ano | findstr 18789
```

有占用的话，换个端口：
```bash
openclaw gateway --port 18790
```

### Q5：能用在生产环境吗？

可以！但建议：
- 使用更强的 API Key 认证
- 配置 HTTPS
- 设置访问白名单
- 定期备份配置

---

## 📚 进阶玩法

搭建完成后，你可以：

1. **安装技能包**
```bash
# 浏览技能市场
clawhub search "calendar"

# 安装技能
clawhub install <skill-name>
```

2. **设置定时任务**
```bash
# 每天早上 8 点提醒看天气
openclaw cron add "0 8 * * *" "weather Beijing"
```

3. **连接更多服务**
- Gmail 邮件通知
- 日历事件提醒
- GitHub 动态推送
- 自定义 Webhook

---

## 🎁 小结

恭喜你！现在你已经拥有了一个：
- ✅ 完全私有的 AI 助手
- ✅ 可以通过聊天软件随时访问
- ✅ 数据掌握在自己手里
- ✅ 可以无限扩展功能

**下一步建议：**
1. 试试在网页控制面板和 AI 聊聊天
2. 配置一个聊天软件，体验随时随地调用 AI
3. 探索技能市场，安装实用的功能包

---

## 📞 遇到问题？

- 官方文档：https://docs.openclaw.ai
- 社区 Discord：https://discord.com/invite/clawd
- 技能市场：https://clawhub.ai

---

*觉得有用？欢迎转发给需要的朋友！*

*有任何问题，在评论区留言，我会尽力解答～*

---

**相关文章：**
- [Hexo 博客搭建指南](/blog/2026/03/07/Hexo-博客搭建指南/)
- [欢迎来到我的博客](/blog/2026/03/07/hello-world/)
