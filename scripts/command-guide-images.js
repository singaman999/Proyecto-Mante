document.addEventListener('DOMContentLoaded', () => {
    // Mapeo de comandos e imágenes (personalizable)
    const commandMap = {
        'ls': 'ls.jpg',
        'cd': 'cd.jpg',
        'mkdir': 'mkdir.jpg',
        'rmdir': 'rmdir.jpg',
        'cp': 'cp.jpg',
        'mv': 'mv.jpg',
        'rm': 'rm.jpg',
        'touch': 'touch.jpg',
        'nano': 'nano.jpg',
        'grep': 'grep.jpg',
        'sort': 'sort.jpg',
        'uniq': 'uniq.jpg',
        'head': 'head-tail.jpg',
        'tail': 'head-tail.jpg',
        'dir': 'dir.jpg',
        'md': 'md.jpg',
        'rd': 'rd.jpg',
        'copy': 'copy.jpg',
        'move': 'move.jpg',
        'del': 'del.jpg',
        'type': 'type.jpg',
        'edit': 'edit.jpg',
        'findstr': 'findstr.jpg',
        'ifconfig': 'ifconfig.jpg',
        'route': 'route.jpg',
        'ping': 'ping.png',
        'traceroute': 'traceroute.jpg',
        'nslookup': 'nslookup.png',
        'iptables': 'iptables.jpg',
        'ipconfig': 'ipconfig.jpg',
        'netstat': 'netstat.jpg',
        'tracert': 'tracert.jpg',
        'netsh': 'netsh.jpg',
        'dmesg': 'dmesg.png',
        'top': 'top.jpg',
        'ps': 'ps.jpg',
        'free': 'free.jpg',
        'df': 'df.jpg',
        'eventvwr': 'eventvwr.jpg',
        'taskmgr': 'taskmgr.jpg',
        'perfmon': 'perfmon.jpg',
        'msinfo32': 'msinfo32.jpg',
        'useradd': 'useradd.jpg',
        'usermod': 'usermod.jpg',
        'userdel': 'userdel.jpg',
        'groupadd': 'groupadd.jpg',
        'groupmod': 'groupmod.jpg',
        'groupdel': 'groupdel.jpg',
        'net user': 'net-user.jpg',
        'net localgroup': 'net-localgroup.jpg'
    };

    // Modificar la función mostrarInfo para usar las imágenes locales
    const originalMostrarInfo = window.mostrarInfo;
    
    window.mostrarInfo = function(comando, sistema, descripcion, sintaxis, ejemplo, imagenUrl) {
        // Verificar si tenemos una imagen local para este comando
        const localImage = commandMap[comando] || commandMap[`${sistema.toLowerCase()} ${comando}`];
        
        // Usar la imagen local si existe, de lo contrario usar el placeholder
        const finalImageUrl = localImage ? `imagenes/${localImage}` : imagenUrl;
        
        // Llamar a la función original con la URL de imagen actualizada
        originalMostrarInfo(comando, sistema, descripcion, sintaxis, ejemplo, finalImageUrl);
    };
});
