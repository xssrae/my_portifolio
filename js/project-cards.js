lucide.createIcons();

// Lógica para alternância de tema
const themeIcon = document.getElementById('theme-icon');
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeIcon.setAttribute('data-lucide', 'moon');
    } else {
        themeIcon.setAttribute('data-lucide', 'sun');
    }
    lucide.createIcons(); // Recria os ícones do Lucide após a mudança de tema
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

// Aplica o tema salvo ou o tema preferido do sistema ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(savedTheme || preferredTheme);
});

// Atualiza o ano no rodapé
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Animação Typewriter para o <p> no cabeçalho
const textProjectsTypewriter = "Junior Software Engineer";
let iProjectsTypewriter = 0;
function projectsTypeWriterEffect() {
    const element = document.querySelector(".typewriter");
    if (!element) return;

    if (iProjectsTypewriter < textProjectsTypewriter.length) {
        element.textContent += textProjectsTypewriter.charAt(iProjectsTypewriter);
        iProjectsTypewriter++;
        setTimeout(projectsTypeWriterEffect, 80);
    }
}
// Intersection Observer para '.reveal' (animação de scroll)
const observerProjects = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Animação Ripple para botões com a classe 'ripple'
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

// Executa animações após o carregamento completo da página
window.addEventListener("load", () => {
    // Inicia o typewriter
    projectsTypeWriterEffect();

    // Aplica o observer aos elementos .reveal
    document.querySelectorAll('.reveal').forEach(el => {
        if (el) observerProjects.observe(el);
    });

    // Animação de carregamento dos cards de projeto
    document.querySelectorAll('.project-card').forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, i * 150);
    });
});