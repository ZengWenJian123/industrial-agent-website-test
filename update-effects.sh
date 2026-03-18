#!/bin/bash
# 批量添加全局特效到所有页面

cd /home/smsd/.openclaw/workspace/industrial-agent-website

# 页面列表
pages="about.html architecture.html industrial-agent.html getting-started.html"

for page in $pages; do
    if [ -f "$page" ]; then
        echo "处理 $page..."
        
        # 添加 effects.css 引用
        sed -i 's|<link rel="stylesheet" href="css/logo.css">|<link rel="stylesheet" href="css/logo.css">\n    <link rel="stylesheet" href="css/effects.css">|g' "$page"
        
        # 替换背景 div
        sed -i 's|<!-- 背景光晕 -->|<!-- 动态渐变背景 -->\n    <div class="dynamic-bg"></div>\n    \n    <!-- 浮动光斑 -->\n    <div class="floating-orbs">\n        <div class="orb orb-1"></div>\n        <div class="orb orb-2"></div>\n        <div class="orb orb-3"></div>\n        <div class="orb orb-4"></div>\n    </div>\n    \n    <!-- 粒子背景画布 -->|g' "$page"
        sed -i 's|<div class="gradient-bg">|<canvas id="particles-canvas"></canvas>\n    <div class="gradient-bg"|g' "$page"
        
        # 添加 effects.js 引用
        sed -i 's|<script src="js/main.js"></script>|<script src="js/main.js"></script>\n    <script src="js/effects.js"></script>|g' "$page"
        sed -i 's|<script src="js/main-new.js"></script>|<script src="js/main-new.js"></script>\n    <script src="js/effects.js"></script>|g' "$page"
        
        echo "✅ $page 更新完成"
    fi
done

echo ""
echo "所有页面特效添加完成！"
