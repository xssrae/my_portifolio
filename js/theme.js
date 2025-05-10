let currentTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', currentTheme);

function updateThemeIcon() {
    const iconElement = document.getElementById('theme-icon');
    if (!iconElement) return;

    // Mostrar ícone oposto ao tema atual (sugere ação)
    iconElement.setAttribute('data-lucide', currentTheme === 'dark' ? 'sun' : 'moon');
    lucide.createIcons();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

// Se o sistema preferir escuro e não houver tema salvo, aplicar escuro
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (!localStorage.getItem('theme')) {
        document.body.setAttribute('data-theme', 'dark');
        currentTheme = 'dark';
    }
}

updateThemeIcon();
