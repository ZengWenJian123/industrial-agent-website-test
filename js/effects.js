/**
 * 全局特效脚本
 * 包含：粒子系统、物理效果、毛玻璃交互
 */

class GlobalEffects {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.animationId = null;
        
        this.init();
    }
    
    // 初始化
    init() {
        this.setupCanvas();
        this.createParticles();
        this.addEventListeners();
        this.animate();
        this.setupScrollEffects();
        this.setupPhysicalElements();
    }
    
    // 设置画布
    setupCanvas() {
        this.canvas = document.getElementById('particles-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    // 调整画布尺寸
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createParticles();
    }
    
    // 创建粒子
    createParticles() {
        this.particles = [];
        const particleCount = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 20000));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                hue: Math.random() * 60 + 220 // 蓝紫色系
            });
        }
    }
    
    // 添加事件监听
    addEventListeners() {
        // 鼠标移动
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            
            // 创建鼠标轨迹粒子
            if (Math.random() > 0.7) {
                this.createMouseParticle(e.clientX, e.clientY);
            }
        });
        
        // 鼠标离开
        document.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
        
        // 点击效果
        document.addEventListener('click', (e) => {
            this.createClickParticles(e.clientX, e.clientY);
        });
        
        // 滚动效果
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }
    
    // 创建鼠标轨迹粒子
    createMouseParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'physics-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = (Math.random() * 10 + 5) + 'px';
        particle.style.height = particle.style.width;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
    }
    
    // 创建点击粒子爆发效果
    createClickParticles(x, y) {
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'physics-particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = (Math.random() * 8 + 4) + 'px';
            particle.style.height = particle.style.width;
            
            // 随机方向
            const angle = (Math.PI * 2 * i) / 12;
            const velocity = Math.random() * 50 + 30;
            particle.style.setProperty('--tx', Math.cos(angle) * velocity + 'px');
            particle.style.setProperty('--ty', Math.sin(angle) * velocity + 'px');
            
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 2000);
        }
    }
    
    // 绘制粒子
    drawParticles() {
        this.particles.forEach(particle => {
            // 更新位置
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // 鼠标交互
            if (this.mouse.x && this.mouse.y) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    particle.x -= Math.cos(angle) * force * 2;
                    particle.y -= Math.sin(angle) * force * 2;
                    particle.opacity = Math.min(1, particle.opacity + 0.02);
                }
            }
            
            // 边界检测
            if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;
            
            // 绘制
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
            this.ctx.fill();
        });
    }
    
    // 连接粒子
    connectParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 - distance / 800})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    }
    
    // 动画循环
    animate() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawParticles();
        this.connectParticles();
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    // 滚动效果
    setupScrollEffects() {
        const navbar = document.querySelector('.navbar-glass');
        if (!navbar) return;
        
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 初始检查
    }
    
    // 物理元素效果
    setupPhysicalElements() {
        // 卡片悬浮物理效果
        const cards = document.querySelectorAll('.glass-card, .stat-item');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
        
        // 按钮光扫效果
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.className = 'sweep-light';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                btn.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 1500);
            });
        });
    }
    
    // 处理滚动
    handleScroll() {
        // 视差滚动效果
        const parallaxElements = document.querySelectorAll('.glow, .orb');
        parallaxElements.forEach((el, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(window.scrollY * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    // 清理
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas) {
            this.canvas.remove();
        }
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.globalEffects = new GlobalEffects();
    console.log('✨ 全局特效已加载：动态背景 + 粒子系统 + 物理效果');
});

// 页面卸载时清理
window.addEventListener('beforeunload', () => {
    if (window.globalEffects) {
        window.globalEffects.destroy();
    }
});
