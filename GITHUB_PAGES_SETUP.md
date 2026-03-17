# GitHub Pages 部署配置指南

## ✅ 已完成的配置

1. **GitHub Actions 工作流** - `.github/workflows/deploy.yml`
   - 自动检测代码推送
   - 自动安装依赖
   - 自动生成静态文件
   - 自动部署到 gh-pages 分支

2. **Hexo 部署配置** - `_config.yml`
   - 已配置 git 部署类型

---

## 📋 你需要做的步骤

### 第 1 步：创建 GitHub 仓库

1. 登录 GitHub
2. 创建新仓库（名字随意，比如 `my-blog`）
3. **不要**勾选"Initialize this repository with a README"
4. 记下仓库地址，格式：`https://github.com/你的用户名/仓库名.git`

### 第 2 步：修改配置文件

打开 `_config.yml`，找到 `deploy` 部分，修改：

```yaml
deploy:
  type: git
  repo: https://github.com/你的用户名/你的仓库名.git  # 改成你的仓库地址
  branch: gh-pages
```

打开 `.github/workflows/deploy.yml`，确认：

```yaml
on:
  push:
    branches:
      - main  # 如果你的默认分支是 master，改成 master
```

### 第 3 步：初始化 Git 并推送

```bash
cd /root/.openclaw/workspace/my-blog

# 初始化 git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit - Hexo blog with GitHub Pages deploy"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 第 4 步：等待自动部署

1. 推送后，GitHub Actions 会自动触发
2. 在仓库的 **Actions** 标签页查看部署进度
3. 大约 1-2 分钟后完成
4. 访问：`https://你的用户名.github.io/仓库名/`

---

## 🔧 自定义域名（可选）

如果你想用自己的域名：

1. 在 GitHub 仓库 → Settings → Pages → Custom domain
2. 输入你的域名
3. 在你的 DNS 服务商处添加 CNAME 记录

---

## 📝 后续使用

以后每次写文章后：

```bash
hexo new post "文章标题"
# 写文章...
git add .
git commit -m "新文章：文章标题"
git push
```

GitHub Actions 会自动构建和部署！

---

## ⚠️ 注意事项

1. **第一次推送前**确保 `_config.yml` 中的 `repo` 地址正确
2. **检查分支名**：你的默认分支是 `main` 还是 `master`
3. **访问地址**：部署完成后是 `https://用户名.github.io/仓库名/`
4. **国内访问**：GitHub Pages 在国内访问速度尚可，如有需要可配置 CDN

---

## 🆘 遇到问题？

- 查看 Actions 日志排查错误
- 确保 `public` 目录没有被提交（已在 .gitignore 中）
- 如遇权限问题，检查仓库 Settings → Actions 是否启用
