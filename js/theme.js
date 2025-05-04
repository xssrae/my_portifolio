let currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);
    
    // Função para alternar entre temas claro e escuro
    function toggleTheme() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }
    
    // Verificar tema preferido do usuário
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se o usuário preferir tema escuro e não tiver definido preferência ainda
        if (!localStorage.getItem('theme')) {
            document.body.setAttribute('data-theme', 'dark');
            currentTheme = 'dark';
        }
    }