const StorageController = {
    key: 'shredlog_sessions',

    getSessions() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    },

    saveSession(session) {
        const sessions = this.getSessions();
        sessions.push(session);
        localStorage.setItem(this.key, JSON.stringify(sessions));
    },

    clearAll() {
        if (confirm("¿Estás seguro de que quieres borrar todo tu progreso de Shredding?")) {
            localStorage.removeItem(this.key);
            window.location.reload();
        }
    }
};

// Funciones para el footer (comunes a todas las páginas)
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    const lastMod = document.getElementById('lastmodified');
    if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;
});