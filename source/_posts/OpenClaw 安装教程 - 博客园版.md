# 零基础教程：10 分钟搭建私人 AI 助手

**分类：** 人工智能 > AI 应用  
**标签：** OpenClaw, AI, 教程，自动化

---

## 🎯 教程目标

用 10 分钟时间，搭建一个完全私有的 AI 助手，支持：
- 通过微信/钉钉等聊天工具调用
- 数据完全掌握在自己手里
- 24 小时在线，随叫随到
- 零成本（使用免费 API 额度）

---

## 📦 准备工作

### 必需项

| 项目 | 说明 | 获取方式 |
|------|------|----------|
| 电脑 | Mac/Windows/Linux | - |
| Node.js | 22 或更新版本 | https://nodejs.org |
| API Key | AI 模型调用凭证 | 阿里云/DeepSeek 等 |

### 推荐 API 平台

1. **阿里云百炼** - 国内访问快，模型丰富
2. **DeepSeek** - 性价比高，效果好
3. **Moonshot** - 长文本处理强

---

## 🚀 安装流程

### 1️⃣ 安装 Node.js

**Windows 用户：**
- 访问 https://nodejs.org
- 下载并安装 LTS 版本
- 验证：`node --version`

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

### 2️⃣ 安装 OpenClaw

**Mac/Linux：**
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows：**
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

---

### 3️⃣ 配置向导

运行：
```bash
openclaw onboard --install-daemon
```

**配置步骤：**

| 步骤 | 操作 | 建议 |
|------|------|------|
| 1 | 选择 AI 模型 | 阿里云百炼/DeepSeek |
| 2 | 输入 API Key | 提前注册获取 |
| 3 | 工作区位置 | 默认即可 |
| 4 | 网关端口 | 保持 18789 |
| 5 | 聊天软件 | 可选配置 |
| 6 | 守护进程 | 建议选择「是」 |

---

### 4️⃣ 验证安装

```bash
openclaw gateway status
```

看到 `running` 表示成功。

浏览器访问：http://127.0.0.1:18789/

---

## 💡 使用方法

### 网页控制

直接在浏览器打开的控制面板中与 AI 对话。

### 聊天软件集成

**钉钉配置示例：**

1. 创建钉钉机器人
2. 获取 Webhook 地址
3. 运行配置命令
4. 测试发送消息

---

## ❓ 常见问题

### 权限问题

**Mac/Linux：**
```bash
sudo curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows：** 以管理员身份运行 PowerShell

### 端口占用

```bash
# 检查端口
lsof -i :18789

# 更换端口
openclaw gateway --port 18790
```

---

## 🔧 进阶玩法

### 技能扩展

```bash
# 搜索技能
clawhub search "calendar"

# 安装技能
clawhub install <skill-name>
```

### 定时任务

```bash
openclaw cron add "0 8 * * *" "weather Beijing"
```

### 服务集成

- Gmail 邮件通知
- 日历事件提醒
- GitHub 动态推送
- 自定义 Webhook

---

## 📚 学习资源

- **官方文档**：https://docs.openclaw.ai
- **技能市场**：https://clawhub.ai
- **社区**：https://discord.com/invite/clawd

---

## ✅ 总结

通过本教程，你已经：
- ✅ 搭建了私有 AI 助手
- ✅ 配置了聊天软件集成
- ✅ 掌握了基本使用方法
- ✅ 了解了进阶扩展方向

**下一步：**
1. 尝试在网页面板与 AI 对话
2. 配置一个聊天软件
3. 探索技能市场

---

*觉得有帮助？欢迎点赞、收藏、评论！*

*作者：AI 助手开发者*  
*专注自托管 AI 与自动化*
