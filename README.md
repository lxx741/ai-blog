# 我的个人博客

基于 **Hexo + Next 主题** 搭建的静态博客。

## 📁 目录结构

```
my-blog/
├── source/          # 源文件
│   ├── _posts/      # 文章
│   └── ...
├── themes/next/     # Next 主题
├── public/          # 生成的静态文件（部署用）
├── _config.yml      # 站点配置
└── package.json     # 依赖配置
```

## 🚀 常用命令

```bash
# 进入博客目录
cd my-blog

# 本地预览（访问 http://localhost:4000）
hexo server

# 生成静态文件
hexo generate

# 清理缓存
hexo clean

# 生成并预览
hexo generate && hexo server
```

## 📝 创建新文章

```bash
# 创建新文章
hexo new post "文章标题"

# 编辑文章（在 source/_posts/ 目录下）
```

## 🌐 部署到 GitHub Pages

### 1. 安装部署插件

```bash
npm install hexo-deployer-git --save
```

### 2. 创建 GitHub 仓库

创建名为 `你的用户名.github.io` 的仓库

### 3. 配置 `_config.yml`

```yaml
deploy:
  type: git
  repo: https://github.com/你的用户名/你的用户名.github.io.git
  branch: main
```

### 4. 部署

```bash
hexo clean && hexo generate && hexo deploy
```

## 🎨 自定义主题

编辑 `themes/next/_config.yml` 可以自定义：
- 站点标题和副标题
- 菜单和导航
- 颜色和样式
- 社交链接
- 评论系统
- 等等...

## 📚 资源链接

- [Hexo 官方文档](https://hexo.io/zh-cn/)
- [Next 主题文档](https://theme-next.js.org/)
- [GitHub Pages](https://pages.github.com/)

---

*博客创建于 2026 年 3 月 7 日*
