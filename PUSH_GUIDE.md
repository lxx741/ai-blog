# 📤 手动推送指南

由于网络原因，自动推送失败了。请按以下步骤手动推送（很简单！）

---

## ✅ 已完成的配置

- ✅ GitHub Actions 工作流已创建
- ✅ _config.yml 已配置仓库地址
- ✅ Git 仓库已初始化
- ✅ 所有文件已提交

---

## 📍 你需要执行的命令

打开终端，依次执行：

```bash
# 1. 进入博客目录
cd /root/.openclaw/workspace/my-blog

# 2. 推送代码到 GitHub
git push -u origin main
```

如果提示需要认证：
- 用户名：`lxx741`
- 密码：使用 **Personal Access Token**（不是 GitHub 登录密码）

### 创建 Token 的方法：

1. 访问：https://github.com/settings/tokens
2. 点 "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 点 "Generate token"
5. 复制生成的 token（只显示一次！）
6. 推送时用作密码

---

## 🎯 推送成功后

1. 访问 https://github.com/lxx741/ai-blog/actions
2. 会看到 "Deploy Hexo Blog to GitHub Pages" 正在运行
3. 等待 1-2 分钟变绿 ✅
4. 访问：https://lxx741.github.io/ai-blog/

---

## 💡 如果还是推送失败

可以用 GitHub Desktop 或 VSCode 的 Git 插件：
1. 打开 VSCode
2. 打开 `/root/.openclaw/workspace/my-blog` 文件夹
3. 点 Source Control
4. 点 "..." → Push

---

**推送完成后告诉我，我帮你验证部署状态！**
