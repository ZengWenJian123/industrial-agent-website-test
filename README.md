# 工业智能体 AI 官网

一个现代化的工业智能体 AI 项目官方介绍网站，用于介绍 AI 驱动的工业自动化解决方案。

## 📁 项目结构

```
industrial-agent-website/
├── index.html          # 主页 HTML
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript 交互
├── images/             # 图片资源（待添加）
├── server.py           # Python 本地服务器
└── README.md           # 项目说明
```

## 🚀 快速开始

### 方法一：使用 Python 服务器（推荐）

```bash
# 进入项目目录
cd ./industrial-agent-website-test

# 启动服务器
python3 server.py
```

服务器启动后会自动在浏览器中打开网站，访问地址：`http://localhost:8000`

### 方法二：直接打开 HTML 文件

直接在浏览器中打开 `index.html` 文件即可预览（部分功能可能受限）。

### 方法三：使用其他 HTTP 服务器

```bash
# Python 3
python3 -m http.server 8000

# Node.js (需要安装 http-server)
npx http-server -p 8000
```

## 🎨 网站特性

- ✅ **响应式设计** - 适配桌面、平板、手机
- ✅ **现代 UI** - 渐变色彩、卡片布局、动画效果
- ✅ **平滑滚动** - 导航锚点平滑过渡
- ✅ **交互动画** - 滚动触发动画效果
- ✅ **联系表单** - 内置表单提交处理

## 📄 页面内容

### 1. 首页横幅
- 项目标题和标语
- CTA 按钮（了解更多、预约演示）
- AI 神经网络视觉元素

### 2. 项目愿景
- 介绍 AI 驱动的工业自动化理念
- 核心能力概览（可落地工作流、开源工具链、云地协同、数据可视化）

### 3. 核心能力
- 大语言模型集成
- 开源工具链
- 工作流引擎
- 数据处理管道
- 云地协同部署
- 安全与合规

### 4. 工作流程
- 5 步 AI 驱动流程：数据采集 → 智能处理 → 工作流编排 → 可视化展示 → 持续优化

### 5. 部署方案
- 本地部署（数据私有化）
- 云端部署（推荐，弹性扩展）
- 混合部署（最佳成本效益）

### 6. 演示环境
- 即将上线的演示功能预告
- 模拟数据流、可视化编排、实时仪表盘、AI 决策展示

### 7. 联系我们
- 联系信息
- 在线咨询表单

## 🛠️ 自定义修改

### 修改颜色主题

编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #2563eb;      /* 主色调 */
    --secondary-color: #06b6d4;    /* 辅助色 */
    --accent-color: #8b5cf6;       /* 强调色 */
}
```

### 添加图片

将图片放入 `images/` 目录，然后在 HTML 中引用：

```html
<img src="images/your-image.png" alt="描述">
```

### 修改联系信息

编辑 `index.html` 中的联系部分：

```html
<div class="contact-details">
    <div class="contact-item">
        <span class="icon">📧</span>
        <span>your-email@example.com</span>
    </div>
</div>
```

## 📱 浏览器兼容性

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11+ (部分动画可能不支持)

## 📝 后续优化建议

1. **添加真实图片** - 替换神经网络动画为实际产品截图
2. **集成分析工具** - 添加 Google Analytics 或其他统计工具
3. **SEO 优化** - 添加 meta 标签、Open Graph 等
4. **表单后端** - 连接实际的邮件发送服务
5. **多语言支持** - 添加中英文切换
6. **博客/新闻** - 添加项目更新和行业动态

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 技术支持

如有问题或建议，请联系：
- 📧 zengwenjian@innotitan.com
- 📍 广东东莞松山湖

---

**构建时间**: 2026-03-08  
**版本**: 1.0.0
