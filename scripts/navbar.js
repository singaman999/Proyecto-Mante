document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear la barra de navegación
    const navbar = document.createElement('nav');
    navbar.id = 'navbar-left';
    navbar.innerHTML = `
        <div class="nav-container">
            <a href="#presentacion" class="nav-button">Presentación</a>
            <a href="#introduccion" class="nav-button">Introducción</a>
            <a href="#descripcion" class="nav-button">Descripción</a>
            <a href="#comandos" class="nav-button">Guía de Comandos</a>
        </div>
    `;

    // 2. Insertar la barra al inicio del body
    document.body.insertAdjacentElement('afterbegin', navbar);

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
