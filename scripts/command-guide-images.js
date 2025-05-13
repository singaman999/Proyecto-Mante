document.addEventListener('DOMContentLoaded', () => {
    // 1. Localizar la sección "Guía de Comandos Básicos"
    const guideSection = Array.from(document.querySelectorAll('h2, h3')).find(el => 
        el.textContent.includes('Guía de Comandos Básicos')
    );

    if (!guideSection) return;

    // 2. Mapeo de comandos e imágenes (personalizable)
    const commandMap = {
        'uniq': 'uniq.jpg',
        'head': 'head-tail.jpg',
        'tail': 'head-tail.jpg',
        'ping': 'ping.png',
        'traceroute': 'traceroute.jpg',
        'nslookup': 'nslookup.png',
        'iptables': 'iptables.jpg',
        'dmesg': 'dmesg.png',
        // Añade más comandos según necesites
    };

    // 3. Buscar elementos hermanos posteriores al título
    let nextElement = guideSection.nextElementSibling;
    
    while (nextElement) {
        // 4. Detectar si el elemento contiene un comando
        const elementText = nextElement.textContent.toLowerCase();
        const foundCommand = Object.keys(commandMap).find(cmd => 
            elementText.includes(cmd.toLowerCase())
        );

        if (foundCommand) {
            // 5. Crear contenedor de imagen
            const imgContainer = document.createElement('div');
            imgContainer.className = 'command-image-container';
            
            imgContainer.innerHTML = `
                <img src="imagenes/${commandMap[foundCommand]}" 
                     alt="Ejemplo de ${foundCommand}" 
                     class="command-image">
                <p class="image-caption">Ejemplo práctico: <code>${foundCommand}</code></p>
            `;

            // 6. Insertar antes del siguiente elemento
            nextElement.parentNode.insertBefore(imgContainer, nextElement.nextSibling);
        }

        nextElement = nextElement.nextElementSibling;
    }
});
