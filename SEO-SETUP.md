# SEO设置指南 - Simple Designs AI

## 网站地图文件说明

### 已创建的文件
- `sitemap.xml` - 主要网站地图文件
- `robots.txt` - 搜索引擎爬虫指导文件
- `google-verification.html` - Google Search Console验证文件
- `BingSiteAuth.xml` - Bing Webmaster Tools验证文件

## 设置步骤

### 1. 更新域名信息
在以下文件中已将域名更新为 `simpledesigns.store`：
- `sitemap.xml` ✅
- `robots.txt` ✅
- `index.html` (meta标签中的URL) ✅

### 2. Google Search Console设置

#### 步骤1: 访问Google Search Console
- 前往 [Google Search Console](https://search.google.com/search-console)
- 使用您的Google账户登录

#### 步骤2: 添加网站
- 点击"添加资源"
- 输入您的网站URL
- 选择"HTML标签"验证方法

#### 步骤3: 获取验证代码
- 复制提供的HTML标签代码
- 在 `google-verification.html` 文件中替换 `YOUR_VERIFICATION_CODE_HERE`

#### 步骤4: 提交网站地图
- 验证成功后，在左侧菜单选择"网站地图"
- 点击"添加新的网站地图"
- 输入: `https://simpledesigns.store/sitemap.xml`
- 点击"提交"

### 3. Bing Webmaster Tools设置

#### 步骤1: 访问Bing Webmaster Tools
- 前往 [Bing Webmaster Tools](https://www.bing.com/webmasters)
- 使用Microsoft账户登录

#### 步骤2: 添加网站
- 点击"添加网站"
- 输入您的网站URL
- 选择"XML文件"验证方法

#### 步骤3: 获取验证代码
- 下载提供的XML文件
- 将文件内容复制到 `BingSiteAuth.xml` 中，替换 `YOUR_BING_VERIFICATION_CODE_HERE`

#### 步骤4: 提交网站地图
- 验证成功后，在左侧菜单选择"网站地图"
- 点击"提交网站地图"
- 输入: `https://simpledesigns.store/sitemap.xml`
- 点击"提交"

## 网站地图内容说明

### 优先级设置
- **首页**: 优先级 1.0 (最高)
- **主要页面**: 优先级 0.8-0.9
- **文档页面**: 优先级 0.5
- **资源文件**: 优先级 0.3

### 更新频率
- **首页**: 每周更新
- **内容页面**: 每月更新
- **静态资源**: 每月更新

## 监控和维护

### 定期检查
- 每月检查Google Search Console的索引状态
- 监控Bing Webmaster Tools的爬取统计
- 检查网站地图是否有错误

### 更新网站地图
当网站内容发生变化时：
1. 更新 `sitemap.xml` 中的 `lastmod` 日期
2. 重新提交到搜索引擎
3. 检查robots.txt是否需要更新

## 常见问题

### Q: 网站地图提交后多久生效？
A: 通常需要几天到几周时间，取决于搜索引擎的爬取频率。

### Q: 如何知道网站地图是否被正确索引？
A: 在Google Search Console和Bing Webmaster Tools中查看索引状态和爬取统计。

### Q: 需要定期更新网站地图吗？
A: 只有当网站结构或内容发生重大变化时才需要更新。

## 联系支持
如有问题，请查看相关搜索引擎的官方文档或联系技术支持。 