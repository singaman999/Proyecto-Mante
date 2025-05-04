document.addEventListener('DOMContentLoaded', () => {
    // 1. Buscar el botón "Guía de Comandos" en la barra de navegación
    const commandButtons = Array.from(document.querySelectorAll('.nav-button')).filter(btn => 
        btn.textContent.includes('Guía de Comandos')
    );

    // 2. Buscar la sección objetivo (por texto o ID)
    const sections = Array.from(document.querySelectorAll('h2, h3')).filter(heading => 
        heading.textContent.includes('Guía de Comandos del Sistema de Red')
    );

    if (commandButtons.length > 0 && sections.length > 0) {
        const targetSection = sections[0].closest('section') || sections[0].parentElement;
        
        // 3. Asignar ID único si no existe
        if (!targetSection.id) {
            targetSection.id = 'guia-comandos-red';
        }

        // 4. Modificar el href del botón
        commandButtons.forEach(button => {
            button.href = `#${targetSection.id}`;
            
            // 5. Añadir scroll suave
            button.addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById(targetSection.id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }
});
