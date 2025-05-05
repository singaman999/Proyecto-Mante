// Configuración centralizada de imágenes para todos los comandos
const commandData = {
    // ============ COMANDOS LINUX ============
    'cd': {
        img: 'https://drive.google.com/thumbnail?id=14GOUOcAzxSd6_J09mBsoxEwaNwTMfAuW&sz=w800',
        download: 'https://drive.google.com/uc?export=download&id=14GOUOcAzxSd6_J09mBsoxEwaNwTMfAuW',
        desc: 'Navegación entre directorios'
    },
    'cp': {
        img: 'https://drive.google.com/thumbnail?id=1VkEtozkPdHAWR1GqvFBrUynuHKD08Zvj&sz=w800',
        download: 'https://drive.google.com/uc?export=download&id=1VkEtozkPdHAWR1GqvFBrUynuHKD08Zvj',
        desc: 'Copia de archivos'
    },
    'df': {
        img: 'https://drive.google.com/thumbnail?id=1TfW8_Ayxpjn62HH7ic5wSr1V5gVAiJ7R&sz=w800',
        download: 'https://drive.google.com/uc?export=download&id=1TfW8_Ayxpjn62HH7ic5wSr1V5gVAiJ7R',
        desc: 'Espacio en disco'
    },
    // ... (todos los comandos Linux que proporcionaste)
    
    // ============ COMANDOS WINDOWS ============
    'dir': {
        img: 'https://drive.google.com/thumbnail?id=1TPWwaRERsKLoccjK2b5dqb8IO3drMr40&sz=w800',
        download: 'https://drive.google.com/uc?export=download&id=1TPWwaRERsKLoccjK2b5dqb8IO3drMr40',
        desc: 'Listar directorios (Windows)'
    },
    'ipconfig': {
        img: 'https://drive.google.com/thumbnail?id=1TiR8YrlPtZrCStr5epjEKQ6VeI08iO9T&sz=w800',
        download: 'https://drive.google.com/uc?export=download&id=1TiR8YrlPtZrCStr5epjEKQ6VeI08iO9T',
        desc: 'Configuración de red (Windows)'
    },
    'tracert': {
        img: 'https://drive.google.com/thumbnail?id=1LqfbfqomqoDucbYctLa2sqYZVjTieHvc&sz=w800',
        download: 'https://drive.google.com/uc?export=download&id=1LqfbfqomqoDucbYctLa2sqYZVjTieHvc',
        desc: 'Rastreo de ruta (Windows)'
    }
    // ... (todos los comandos Windows que proporcionaste)
};

// Exportar para uso global
window.commandData = commandData;
