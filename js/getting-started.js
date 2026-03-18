// 开始使用页面专用交互脚本

// 隐藏加载动画
function hideLoading() {
    const loading = document.getElementById('embed-loading');
    if (loading) {
        loading.style.display = 'none';
    }
}

// 显示错误
function showError() {
    const loading = document.getElementById('embed-loading');
    const error = document.getElementById('embed-error');
    const iframe = document.getElementById('n8n-frame');
    
    if (loading) loading.style.display = 'none';
    if (iframe) iframe.style.display = 'none';
    if (error) error.style.display = 'block';
}

// 重试加载
function retryLoad() {
    const error = document.getElementById('embed-error');
    const iframe = document.getElementById('n8n-frame');
    const loading = document.getElementById('embed-loading');
    
    if (error) error.style.display = 'none';
    if (loading) loading.style.display = 'flex';
    if (iframe) {
        iframe.style.display = 'block';
        iframe.src = iframe.src; // 重新加载 iframe
    }
}

// 全屏模式
function openFullscreen() {
    const container = document.querySelector('.platform-embed');
    const iframe = document.getElementById('n8n-frame');
    
    // 创建全屏覆盖层
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    overlay.innerHTML = '<button class="fullscreen-close" onclick="closeFullscreen()">✕ 退出全屏</button>';
    
    document.body.appendChild(overlay);
    document.body.classList.add('fullscreen-mode');
    
    // 点击覆盖层关闭
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeFullscreen();
        }
    });
    
    // ESC 键关闭
    document.addEventListener('keydown', handleEscKey);
}

// 关闭全屏
function closeFullscreen() {
    const overlay = document.querySelector('.fullscreen-overlay');
    if (overlay) {
        overlay.remove();
    }
    document.body.classList.remove('fullscreen-mode');
    document.removeEventListener('keydown', handleEscKey);
}

// ESC 键处理
function handleEscKey(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
}

// 页面加载时检查 iframe 可访问性
document.addEventListener('DOMContentLoaded', function() {
    checkIframeAccessibility();
    
    // 添加快捷键提示
    console.log('💡 提示：按 ESC 键可退出全屏模式');
});

// 检查 iframe 可访问性
function checkIframeAccessibility() {
    const iframe = document.getElementById('n8n-frame');
    if (!iframe) return;
    
    // 设置超时检查
    const timeout = setTimeout(() => {
        const loading = document.getElementById('embed-loading');
        // 如果 10 秒后还在加载，显示错误
        if (loading && loading.style.display !== 'none') {
            console.warn('⚠️ iframe 加载超时，可能无法访问');
        }
    }, 10000);
    
    iframe.addEventListener('load', () => {
        clearTimeout(timeout);
        hideLoading();
    });
    
    iframe.addEventListener('error', () => {
        clearTimeout(timeout);
        showError();
    });
}

// 添加 iframe 加载超时处理
window.addEventListener('message', function(event) {
    // 处理来自 iframe 的消息（如果需要）
    console.log('收到 iframe 消息:', event);
});

// 平滑滚动到嵌入区域
document.addEventListener('DOMContentLoaded', function() {
    const embedSection = document.querySelector('.platform-embed');
    if (embedSection) {
        // 自动滚动到嵌入区域
        setTimeout(() => {
            embedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 500);
    }
});

// 添加使用案例卡片的点击效果
document.addEventListener('DOMContentLoaded', function() {
    const useCaseCards = document.querySelectorAll('.use-case-card');
    
    useCaseCards.forEach(card => {
        card.addEventListener('click', function() {
            // 可以添加点击后的交互，比如显示详细信息
            console.log('点击使用案例:', this.querySelector('h3').textContent);
        });
        
        card.style.cursor = 'pointer';
    });
});

// 资源卡片悬浮效果增强
document.addEventListener('DOMContentLoaded', function() {
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--primary-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
        });
    });
});

// 页面可见性变化时暂停/恢复
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('📄 页面已隐藏');
    } else {
        console.log('📄 页面已显示');
    }
});

console.log('🚀 开始使用页面已加载');
console.log('🔧 n8n 工作流平台地址：http://192.168.10.22:5678');
