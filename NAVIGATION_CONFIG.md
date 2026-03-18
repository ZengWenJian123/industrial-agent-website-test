# 网站导航配置

**更新时间**: 2026-03-09 00:45

---

## 📋 导航结构

### 主导航栏 (所有页面)

```
工业智能体 AI | 首页 | 关于我们 | 系统架构 | 什么是工业智能体 | 开始使用 | 联系我们
```

### 导航链接

| 名称 | 文件 | 说明 |
|------|------|------|
| 首页 | `index.html` | 主页 - 深色玻璃拟态风格 |
| 关于我们 | `about.html` | 产学研合作体系介绍 |
| 系统架构 | `architecture.html` | 架构图详解 ⭐新增 |
| 什么是工业智能体 | `industrial-agent.html` | 技术详解 + 应用场景 |
| 开始使用 | `getting-started.html` | n8n 工作流平台嵌入 |
| 联系我们 | `index.html#contact` | 联系表单 |

---

## 🎨 Logo 设计

### 新 Logo 特点

- **图标容器**: 渐变背景圆角方形 (#6366f1 → #8b5cf6)
- **悬浮效果**: 上移 + 旋转 + 光晕增强
- **文字渐变**: 靛蓝→紫色→靛蓝 流动效果
- **副标题**: "INDUSTRIAL AGENT AI" 小字

### Logo HTML 结构

```html
<a href="index.html" class="logo">
    <div class="logo-icon-wrapper">
        <span class="logo-icon">🤖</span>
    </div>
    <div class="logo-content">
        <span class="logo-text">工业智能体 AI</span>
        <span class="logo-subtitle">INDUSTRIAL AGENT AI</span>
    </div>
</a>
```

---

## 🎨 色调调整

### 主色调 - 工业靛蓝

```css
--primary: #6366f1;         /* 主色 */
--primary-light: #818cf8;   /* 浅色 */
--primary-lighter: #a5b4fc; /* 更浅 */
--primary-dark: #4f46e5;    /* 深色 */
--primary-deep: #3730a3;    /* 深靛蓝 */
```

### 辅助色 - 智能紫 + 科技青

```css
--purple: #a855f7;          /* 紫色 */
--purple-light: #c084fc;    /* 浅紫 */
--cyan: #06b6d4;            /* 青色 */
--cyan-light: #22d3ee;      /* 浅青 */
```

### 背景色 - 工业深空

```css
--bg-dark: #0a0a0f;         /* 主背景 */
--bg-darker: #050508;       /* 更深背景 */
--bg-card: rgba(20, 18, 35, 0.7);    /* 卡片背景 */
--bg-glass: rgba(30, 28, 50, 0.5);   /* 玻璃背景 */
```

### 文字颜色

```css
--text-primary: #ffffff;    /* 主文字 */
--text-secondary: #a8a2b5;  /* 次要文字 */
--text-tertiary: #817f95;   /* 第三级文字 */
--text-muted: #5a5670;      /* 弱化文字 */
```

### 渐变效果

```css
--gradient-primary: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
--gradient-industrial: linear-gradient(135deg, #6366f1 0%, #06b6d4 50%, #a855f7 100%);
--gradient-text: linear-gradient(135deg, #6366f1 0%, #c084fc 50%, #6366f1 100%);
```

---

## 📁 已更新文件

| 文件 | 状态 | 说明 |
|------|------|------|
| `index.html` | ✅ | 主页 - Logo + 导航更新 |
| `about.html` | ⏳ | 待更新导航 |
| `architecture.html` | ⏳ | 待更新导航 |
| `industrial-agent.html` | ⏳ | 待更新导航 |
| `getting-started.html` | ⏳ | 待更新导航 |
| `css/style.css` | ✅ | 色调调整 |
| `css/logo.css` | ✅ | 新 Logo 样式 |

---

## 🔧 批量更新命令

```bash
cd /home/smsd/.openclaw/workspace/industrial-agent-website

# 备份当前文件
cp about.html about.html.bak
cp architecture.html architecture.html.bak
cp industrial-agent.html industrial-agent.html.bak
cp getting-started.html getting-started.html.bak

echo "备份完成"
```

---

## ✅ 待完成事项

1. ✅ Logo 设计完成
2. ✅ 主色调调整完成
3. ✅ 主页导航更新完成
4. ⏳ 其他页面导航更新
5. ⏳ 测试所有页面链接

---

**下一步**: 批量更新所有页面的导航栏和 Logo
