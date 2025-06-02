lucide.createIcons();

const themeIcon = document.getElementById('theme-icon');
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
    themeIcon.setAttribute('data-lucide', 'moon');
    } else {
    themeIcon.setAttribute('data-lucide', 'sun');
    }
    lucide.createIcons();
}

function toggleTheme() {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    if (!currentTheme) {
    currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(savedTheme || preferredTheme);
});

const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const textResumeTypewriter = "Junior Software Engineer"; 
let iResumeTypewriter = 0;
function resumeTypeWriterEffect() {
    const element = document.querySelector(".typewriter");
    if (!element) return;

    if (iResumeTypewriter < textResumeTypewriter.length) {
    element.textContent += textResumeTypewriter.charAt(iResumeTypewriter);
    iResumeTypewriter++;
    setTimeout(resumeTypeWriterEffect, 80);
    }
}
window.addEventListener("load", resumeTypeWriterEffect);

const observerResume = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => {
    if(el) observerResume.observe(el);
});

document.querySelectorAll(".ripple").forEach(btn => {
    btn.addEventListener("click", function (e) {
    const existingRipple = this.querySelector(".ripple-circle");
    if (existingRipple) {
        existingRipple.remove();
    }
    const circle = document.createElement("span");
    const rect = this.getBoundingClientRect();
    circle.className = "ripple-circle";
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
    });
});

window.addEventListener("load", () => {
    const elementsToAnimate = document.querySelectorAll('.experience-list li, .skills-list li, .download-btn');
    elementsToAnimate.forEach((el, i) => {
    setTimeout(() => {
        el.classList.add('visible');
    }, i * 100);
    });
});