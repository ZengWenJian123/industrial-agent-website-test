/**
 * 全局导航脚本
 * 统一处理所有页面的导航栏交互
 */

// 移动端菜单切换
function toggleMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        navLinks.classList.toggle('mobile-active');
        menuBtn.classList.toggle('active');
    }
}

// 导航栏滚动效果
function setupNavbarScroll() {
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

// 设置当前页面导航激活状态
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const normalizedHref = href ? href.split('#')[0] : '';
        if (normalizedHref === currentPage || (currentPage === '' && normalizedHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 平滑滚动到锚点
function setupSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    setupNavbarScroll();
    setActiveNavLink();
    setupSmoothScroll();

    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            if (navLinks) {
                navLinks.classList.remove('mobile-active');
            }
            if (menuBtn) {
                menuBtn.classList.remove('active');
            }
        });
    });
    
    console.log('✨ 全局导航已加载');
});
