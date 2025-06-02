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

const textContactTypewriter = "Junior Software Engineer"; 
let iContactTypewriter = 0;
function contactTypeWriterEffect() {
    const element = document.querySelector(".typewriter");
    if (!element) return;

    if (iContactTypewriter < textContactTypewriter.length) {
    element.textContent += textContactTypewriter.charAt(iContactTypewriter);
    iContactTypewriter++;
    setTimeout(contactTypeWriterEffect, 80);
    }
}
window.addEventListener("load", contactTypeWriterEffect);

const observerContact = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
    });
}, { threshold: 0.1 }); 
document.querySelectorAll('.reveal').forEach(el => {
    if(el) observerContact.observe(el);
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
    const elementsToAnimate = document.querySelectorAll('.social-list li');
    elementsToAnimate.forEach((el, i) => {
    setTimeout(() => {
        el.classList.add('visible'); 
    }, i * 120); 
    });
});