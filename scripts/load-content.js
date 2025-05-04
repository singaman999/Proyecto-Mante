document.addEventListener('DOMContentLoaded', () => {
    // Datos del documento organizados en secciones
    const contenido = {
        presentacion: `
            <h1>Presentación</h1>
            <h2>Jefferson Anchia Vargas y Emanuel Cordero Arias 12-3</h2>
            <p><strong>Configuración y soporte a redes de comunicación y sistemas operativos.</strong></p>
            <p><strong>CTP Platanares</strong></p>
            <p><strong>Administración y Soporte a las Computadoras</strong></p>
           <div class="contact-info">
                <p>&lt;janchiav@ctpplatanares.ed.cr&gt; / &lt;ecorderoa@ctpplatanares.ed.cr&gt;</p>
        `,
        descripcion: `
            <h2>Descripción del Proyecto</h2>
            <p>Resumen: Este proyecto busca crear una guía digital e interactiva que enseñe de forma clara y práctica el uso de comandos básicos de red en sistemas operativos tipo Linux y Windows.</p>
            <h3>Objetivos:</h3>
            <ul>
                <li>Enseñar los comandos básicos esenciales para configurar desde la terminal.</li>
                <li>Servir como material de consulta para estudiantes.</li>
                <li>Fomentar el aprendizaje práctico con ejemplos.</li>
            </ul>
        `,
        metodologia: `
            <h2>Metodología</h2>
            <p>Se recopilaron los comandos de red más utilizados mediante las indicaciones dadas. Luego, se diseñó una guía educativa con explicaciones claras, ejemplos visuales. Finalmente, se creó la página web donde se instaló la guía. </p>
        `,
        resultados: `
            <h2>Resultados</h2>
            <p>Se desarrolló una guía interactiva que contiene:</p>
            <ul>
                <li>50-60 comandos explicados con ejemplos</li>
                <li>Capturas de pantalla de terminal</li>
                <li>Mejora comprobada en el aprendizaje</li>
            </ul>
            <h3>Conclusiones</h3>
            <p>El uso de una guía interactiva facilita el aprendizaje de conceptos técnicos complejos.</p>
        `
    };

    // Crear contenedor principal
    const contentContainer = document.createElement('div');
    contentContainer.id = 'dynamic-content';
    
    // Añadir cada sección
    Object.entries(contenido).forEach(([id, html]) => {
        const section = document.createElement('section');
        section.id = id;
        section.className = 'content-section';
        section.innerHTML = html;
        contentContainer.appendChild(section);
    });

    // Insertar después de la barra de navegación
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.insertAdjacentElement('afterend', contentContainer);
    } else {
        document.body.prepend(contentContainer);
    }

    // Scroll suave (compatible con tu barra existente)
    document.querySelectorAll('#navbar .nav-button').forEach(button => {
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
