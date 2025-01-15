document.getElementById('toggle-theme').addEventListener('click', () => {
    const htmlElement = document.documentElement;
    const theme = htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', theme);
  
    const toggleButton = document.getElementById('toggle-theme');
    toggleButton.textContent = theme === 'dark' ? 'Modo Claro' : 'Modo Escuro';
  });
  