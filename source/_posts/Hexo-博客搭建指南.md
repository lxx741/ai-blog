---
title: Hexo 博客搭建指南
date: 2026-03-07 12:45:00
tags: [Hexo, 博客，教程]
categories: [技术]
---

## 📦 快速搭建 Hexo 博客

本文记录使用 Hexo + Next 主题搭建个人博客的完整流程。

### 前置条件

- Node.js >= 14.0
- npm >= 6.0
- Git

### 安装步骤

```bash
# 安装 Hexo CLI
npm install -g hexo-cli

# 初始化博客
hexo init my-blog
cd my-blog

# 安装 Next 主题
npm install hexo-theme-next --save
```

### 配置主题

编辑 `_config.yml`：
```yaml
theme: next
language: zh-CN
timezone: 'Asia/Shanghai'
```

### 常用命令

```bash
# 本地预览
hexo server

# 生成静态文件
hexo generate

# 清理缓存
hexo clean

# 部署到 GitHub Pages
hexo deploy
```

### 部署到 GitHub Pages

1. 创建 GitHub 仓库 `username.github.io`
2. 安装部署插件：`npm install hexo-deployer-git --save`
3. 配置 `_config.yml`：
```yaml
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: main
```

---

*祝你搭建顺利！*
