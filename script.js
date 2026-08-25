document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const actionBtn = document.getElementById('action-btn');
    const feedbackMsg = document.getElementById('feedback-msg');
    const htmlElement = document.documentElement;

    // Verificar preferência salva no navegador
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonText(savedTheme);

    // Alternador de Tema
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButtonText(newTheme);
    });

    function updateThemeButtonText(theme) {
        themeToggleBtn.textContent = theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro';
    }

    // Aprimoramento de feedback interativo
    actionBtn.addEventListener('click', () => {
        actionBtn.textContent = 'Ação Realizada com Sucesso! 🎉';
        actionBtn.style.backgroundColor = '#10b981';
        feedbackMsg.textContent = 'O botão foi acionado com sucesso.';

        setTimeout(() => {
            actionBtn.textContent = 'Clique para Interagir';
            actionBtn.style.backgroundColor = '';
            feedbackMsg.textContent = '';
        }, 2500);
    });
});
