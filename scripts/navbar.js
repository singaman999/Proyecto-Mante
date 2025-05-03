
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.createElement('nav');
    navbar.id = 'dynamic-navbar';
    navbar.innerHTML = `
        <div class="nav-container">
            <a href="#presentacion" class="nav-button">Presentación</a>
            <a href="#introduccion" class="nav-button">Introducción</a>
            <a href="#descripcion" class="nav-button">Descripción</a>
            <a href="#comandos" class="nav-button">Guía de Comandos</a>
        </div>
    `;

    const header = document.querySelector('h1') || document.body;
    header.insertAdjacentElement('afterend', navbar);

    navbar.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href');
            document.querySelector(targetId)?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    });
});
