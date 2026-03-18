#!/bin/bash
# 批量统一所有页面的导航栏和页脚

cd /home/smsd/.openclaw/workspace/industrial-agent-website

echo "开始统一所有页面..."

# 页面列表
pages="index.html about.html architecture.html industrial-agent.html getting-started.html"

for page in $pages; do
    if [ -f "$page" ]; then
        echo "处理 $page..."
        
        # 1. 添加 global-nav.css 引用
        sed -i 's|<link rel="stylesheet" href="css/style.css">|<link rel="stylesheet" href="css/style.css">\n    <link rel="stylesheet" href="css/global-nav.css">|g' "$page"
        
        # 2. 添加 global-nav.js 引用（在 effects.js 之前）
        sed -i 's|<script src="js/effects.js"></script>|<script src="js/global-nav.js"></script>\n    <script src="js/effects.js"></script>|g' "$page"
        
        # 3. 统一导航栏类名为 navbar-glass
        sed -i 's|<nav class="navbar">|<nav class="navbar-glass">|g' "$page"
        
        # 4. 统一导航链接（移除各个页面的 active 类）
        sed -i 's|<li><a href="#home" class="active">首页</a></li>|<li><a href="index.html">首页</a></li>|g' "$page"
        sed -i 's|<li><a href="about.html" class="active">关于我们</a></li>|<li><a href="about.html">关于我们</a></li>|g' "$page"
        sed -i 's|<li><a href="architecture.html" class="active">系统架构</a></li>|<li><a href="architecture.html">系统架构</a></li>|g' "$page"
        sed -i 's|<li><a href="industrial-agent.html" class="active">什么是工业智能体</a></li>|<li><a href="industrial-agent.html">什么是工业智能体</a></li>|g' "$page"
        sed -i 's|<li><a href="getting-started.html" class="active">开始使用</a></li>|<li><a href="getting-started.html">开始使用</a></li>|g' "$page"
        
        echo "✅ $page 更新完成"
    fi
done

echo ""
echo "所有页面统一完成！"
echo ""
echo "更新内容:"
echo "  ✓ 添加 global-nav.css"
echo "  ✓ 添加 global-nav.js"
echo "  ✓ 统一导航栏类名 (navbar-glass)"
echo "  ✓ 移除各页面的 active 类（由 JS 动态设置）"
