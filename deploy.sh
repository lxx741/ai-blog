#!/bin/bash
# 博客部署脚本

echo "🚀 开始部署博客..."

# 1. 清理并生成
echo "📝 生成静态文件..."
hexo clean && hexo generate

# 2. 复制到 Web 目录
echo "📦 复制文件到 Web 目录..."
rm -rf /var/www/html/*
cp -r public/* /var/www/html/

# 3. 重载 Nginx
echo "🔄 重载 Nginx..."
/usr/sbin/nginx -s reload

echo "✅ 部署完成！"
echo "📍 访问地址：http://101.37.239.5/"
