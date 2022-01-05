#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist
git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin git@github.com:wujinghaoyyds/document-website-vitepress.git
git push -f -u origin main:gh-pages
cd -