document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear la barra de navegación
    const navbar = document.createElement('nav');
    navbar.id = 'navbar';
    navbar.innerHTML = `
        <div class="nav-container">
            <a href="#presentacion" class="nav-button">Presentación</a>
            <a href="#introduccion" class="nav-button">Introducción</a>
            <a href="#descripcion" class="nav-button">Descripción</a>
            <a href="#comandos" class="nav-button">Guía de Comandos</a>
        </div>
    `;

    // 2. Insertar la barra DEBAJO del título (h1)
    const pageTitle = document.querySelector('h1'); // Busca el título de tu página
    if (pageTitle) {
        pageTitle.insertAdjacentElement('afterend', navbar); // Coloca la barra después del título
    } else {
        document.body.insertAdjacentElement('afterbegin', navbar); // Fallback si no hay h1
    }

    // 3. Scroll suave al hacer clic
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
