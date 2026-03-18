// 工业智能体页面专用交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // FAQ 折叠/展开
    setupFAQ();
    
    // 架构层动画
    setupLayerAnimation();
    
    // 工作流程步骤动画
    setupWorkflowAnimation();
});

// FAQ 折叠/展开
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // 初始状态：收起答案
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease, padding 0.3s ease';
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';
        
        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight !== '0px';
            
            // 关闭所有其他 FAQ
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherAnswer !== answer) {
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.style.paddingTop = '0';
                    otherAnswer.style.paddingBottom = '0';
                }
            });
            
            // 切换当前 FAQ
            if (isOpen) {
                answer.style.maxHeight = '0';
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.paddingTop = '15px';
                answer.style.paddingBottom = '15px';
            }
        });
    });
}

// 架构层动画
function setupLayerAnimation() {
    const layers = document.querySelectorAll('.layer');
    
    const observerOptions = {
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const layer = entry.target;
                layer.style.opacity = '0';
                layer.style.transform = 'translateX(-30px)';
                
                setTimeout(() => {
                    layer.style.transition = 'all 0.6s ease';
                    layer.style.opacity = '1';
                    layer.style.transform = 'translateX(0)';
                }, 100);
                
                observer.unobserve(layer);
            }
        });
    }, observerOptions);
    
    layers.forEach((layer, index) => {
        observer.observe(layer);
    });
}

// 工作流程步骤动画
function setupWorkflowAnimation() {
    const steps = document.querySelectorAll('.workflow-step-detail');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const step = entry.target;
                
                step.style.opacity = '0';
                step.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    step.style.transition = 'all 0.6s ease';
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(step);
            }
        });
    }, observerOptions);
    
    steps.forEach(step => observer.observe(step));
}

// 代码块打字机效果
function typeWriterEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 为技术标签添加悬浮效果
document.addEventListener('DOMContentLoaded', () => {
    const techTags = document.querySelectorAll('.tech-item, .layer-tech span');
    
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function(e) {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(37, 99, 235, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: techRipple 0.6s linear;
                pointer-events: none;
                left: ${x}px;
                top: ${y}px;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
            `;
            
            e.target.style.position = 'relative';
            e.target.style.overflow = 'hidden';
            e.target.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// 添加涟漪动画
const style = document.createElement('style');
style.textContent = `
    @keyframes techRipple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 数字滚动动画
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 页面加载时触发动画
window.addEventListener('load', () => {
    console.log('🤖 工业智能体页面已加载');
    console.log('✨ FAQ 交互已启用');
    console.log('📐 架构动画已启用');
});
