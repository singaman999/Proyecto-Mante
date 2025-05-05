function showCommand(command) {
    const container = document.getElementById('command-container');
    if (!commandData[command]) {
        container.innerHTML = `<p class="error">Comando "${command}" no encontrado</p>`;
        return;
    }

    const { img, desc, download } = commandData[command];
    
    container.innerHTML = `
        <div class="command-card">
            <div class="command-header">
                <h2>${command}</h2>
                <a href="${download}" class="download-btn" download>
                    ⭳ Descargar Captura
                </a>
            </div>
            <img src="${img}" alt="${desc}" loading="lazy">
            <p class="command-desc">${desc}</p>
        </div>
    `;
}

// Inicializar botones dinámicos
document.addEventListener('DOMContentLoaded', () => {
    // Crear botones para cada comando
    const buttonsContainer = document.getElementById('command-buttons');
    
    Object.keys(commandData).forEach(command => {
        const btn = document.createElement('button');
        btn.className = 'command-btn';
        btn.textContent = command;
        btn.onclick = () => showCommand(command);
        buttonsContainer.appendChild(btn);
    });
});
