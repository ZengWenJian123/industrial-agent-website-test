// 工业智能体 AI 官网通用交互

document.addEventListener("DOMContentLoaded", () => {
    setupCounterAnimation();
    setupScrollAnimations();
    setupFormHandler();
    setupTerminalTyping();
});

function setupCounterAnimation() {
    const counters = document.querySelectorAll(".stat-value");
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number.parseInt(counter.getAttribute("data-target") || "0", 10);
            const duration = 1600;
            const start = performance.now();

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                counter.textContent = String(Math.floor(target * eased));

                if (progress < 1) {
                    requestAnimationFrame(tick);
                } else {
                    counter.textContent = String(target);
                }
            };

            requestAnimationFrame(tick);
            observer.unobserve(counter);
        });
    }, { threshold: 0.45 });

    counters.forEach((counter) => observer.observe(counter));
}

function setupScrollAnimations() {
    const elements = document.querySelectorAll(
        ".glass-card, .stat-item, .workflow-step, .guide-step, .layer, .scenario-card, .module-card, .advantage-card, .advantage-item, .use-case-card, .resource-card, .org-card, .business-item"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -48px 0px"
    });

    elements.forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(24px)";
        element.style.transition = `opacity 0.55s ease ${index * 0.04}s, transform 0.55s ease ${index * 0.04}s`;
        observer.observe(element);
    });
}

function setupFormHandler() {
    const form = document.querySelector(".contact-form form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("感谢您的留言，我们会尽快与您联系。");
        form.reset();
    });
}

function setupTerminalTyping() {
    const terminal = document.querySelector(".terminal-body");
    if (!terminal) return;

    const lines = Array.from(terminal.querySelectorAll(".terminal-line"));
    lines.forEach((line) => {
        line.style.opacity = "0";
        line.style.transform = "translateX(-10px)";
    });

    lines.forEach((line, index) => {
        window.setTimeout(() => {
            line.style.transition = "opacity 0.28s ease, transform 0.28s ease";
            line.style.opacity = "1";
            line.style.transform = "translateX(0)";
        }, 500 + index * 240);
    });
}
