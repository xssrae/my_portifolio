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

window.addEventListener("load", () => {
    document.querySelectorAll('.project-card').forEach((el, i) => {
    setTimeout(() => {
        el.classList.add('visible');
    }, i * 150);
    });
});