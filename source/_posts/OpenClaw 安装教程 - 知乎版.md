# 零基础教程｜10 分钟搭建你的私人 AI 助手，微信/钉钉随时聊天

> 💡 **导读**：想拥有一个 24 小时在线的私人 AI 助手吗？本文手把手教你用 OpenClaw 搭建属于自己的 AI 助手，数据完全私有，支持微信/钉钉等聊天工具调用。零基础也能搞定，全程约 10 分钟！

---

## 一、什么是 OpenClaw？

OpenClaw 是一个**自托管的 AI 网关**，可以连接 WhatsApp、Telegram、Discord、钉钉等聊天工具，让你通过消息应用随时调用 AI 能力。

**核心优势：**
- 📱 用聊天软件就能调用 AI
- 🔒 数据完全掌握在自己手里
- ⚡️ 24 小时在线，随叫随到
- 💰 零成本（用免费 API 额度）

---

## 二、开始前准备

### 2.1 你需要什么？

| 物品 | 说明 |
|------|------|
| 一台电脑 | Mac、Windows、Linux 都可以 |
| Node.js 22+ | 运行环境（后面会教安装） |
| AI API Key | 阿里云百炼、DeepSeek 等（都有免费额度） |

### 2.2 不用准备什么？

- ❌ 不需要服务器
- ❌ 不需要域名
- ❌ 不需要编程基础
- ❌ 不用花一分钱

---

## 三、详细安装步骤

### 3.1 安装 Node.js

**Windows 用户：**

1. 访问 [nodejs.org](https://nodejs.org)
2. 下载 **LTS 版本**（长期支持版）
3. 双击安装包，一路「下一步」

验证安装：
```bash
node --version
```
看到 `v22.x.x` 即成功。

**Mac 用户：**
```bash
brew install node@22
```

**Linux 用户：**
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

### 3.2 安装 OpenClaw

**Mac / Linux：**
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows（PowerShell）：**
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

看到 `✅ OpenClaw installed successfully!` 即成功。

---

### 3.3 运行配置向导

```bash
openclaw onboard --install-daemon
```

这会启动交互式配置向导，跟着提示操作：

**步骤 1：选择 AI 模型**

推荐选择（都有免费额度）：
- 阿里云百炼（国内访问快）
- DeepSeek（性价比高）
- Moonshot（长文本强）

**步骤 2：配置工作区**

直接回车，使用默认位置。

**步骤 3：网关设置**

保持默认：
- 端口：18789
- 认证方式：Token

**步骤 4：连接聊天软件（可选）**

可配置 Telegram、WhatsApp、Discord、钉钉等，暂时不配也可以。

**步骤 5：安装守护进程**

选择「是」，开机自启动。

---

### 3.4 验证安装

```bash
openclaw gateway status
```

看到 `running` 即成功。

然后浏览器访问：
```
http://127.0.0.1:18789/
```

就能看到控制面板了！

---

## 四、开始使用

### 4.1 网页控制面板

直接在浏览器打开的网页里和 AI 对话，适合快速测试。

### 4.2 连接钉钉（示例）

1. 钉钉开放平台创建机器人
2. 获取 Webhook 地址
3. 运行：
```bash
openclaw channels add dingtalk
```
4. 输入 Webhook 地址

配置完成后，给机器人发消息，AI 就会回复！

---

## 五、常见问题解答

### Q1：安装提示「权限不足」？

**Mac/Linux：**
```bash
sudo curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows：** 右键「以管理员身份运行」PowerShell

---

### Q2：API Key 在哪里获取？

推荐平台（都有免费额度）：
- 阿里云百炼：https://bailian.console.aliyun.com
- DeepSeek：https://platform.deepseek.com
- Moonshot：https://platform.moonshot.cn

---

### Q3：网关启动失败？

检查端口占用：
```bash
# Mac/Linux
lsof -i :18789

# Windows
netstat -ano | findstr 18789
```

换端口：
```bash
openclaw gateway --port 18790
```

---

### Q4：能用在生产环境吗？

可以！建议：
- 使用强 API Key 认证
- 配置 HTTPS
- 设置访问白名单
- 定期备份配置

---

## 六、进阶玩法

### 6.1 安装技能包

```bash
# 浏览技能市场
clawhub search "calendar"

# 安装技能
clawhub install <skill-name>
```

### 6.2 设置定时任务

```bash
# 每天早上 8 点提醒看天气
openclaw cron add "0 8 * * *" "weather Beijing"
```

### 6.3 连接更多服务

- Gmail 邮件通知
- 日历事件提醒
- GitHub 动态推送
- 自定义 Webhook

---

## 七、小结

恭喜！你现在拥有：
- ✅ 完全私有的 AI 助手
- ✅ 可通过聊天软件随时访问
- ✅ 数据掌握在自己手里
- ✅ 可无限扩展功能

**下一步建议：**
1. 在网页控制面板和 AI 聊聊天
2. 配置一个聊天软件
3. 探索技能市场

---

## 八、资源链接

- 官方文档：https://docs.openclaw.ai
- 社区 Discord：https://discord.com/invite/clawd
- 技能市场：https://clawhub.ai

---

**觉得有用？欢迎点赞、收藏、关注三连支持！**

有任何问题，欢迎在评论区留言讨论～

---

*本文作者：AI 助手开发者*
*专注自托管 AI 解决方案和自动化工具研究*

*版权声明：本文原创，转载请注明出处。*
