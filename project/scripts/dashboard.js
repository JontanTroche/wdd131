/**
 * Lógica del Dashboard (index.html)
 */
document.addEventListener('DOMContentLoaded', () => {
    // Obtenemos las sesiones desde el StorageController definido en storage.js
    const sessions = StorageController.getSessions();
    
    // Referencias a los elementos del DOM (IDs corregidos según tu HTML)
    const totalMinutesEl = document.getElementById('total-minutes');
    const sessionCountEl = document.getElementById('session-count');
    const favCategoryEl = document.getElementById('fav-category');

    if (sessions.length > 0) {
        // 1. Sumar total de minutos usando reduce
        const totalMinutes = sessions.reduce((total, s) => total + s.duration, 0);
        
        // 2. Contar sesiones
        const totalSessions = sessions.length;

        // 3. Encontrar la categoría top (la que más se repite)
        const categoryCounts = {};
        sessions.forEach(s => {
            categoryCounts[s.category] = (categoryCounts[s.category] || 0) + 1;
        });

        // Ordenamos las categorías por frecuencia y tomamos la mayor
        const topCategory = Object.keys(categoryCounts).reduce((a, b) => 
            categoryCounts[a] > categoryCounts[b] ? a : b
        );

        // Actualizamos el DOM
        if (totalMinutesEl) totalMinutesEl.textContent = totalMinutes;
        if (sessionCountEl) sessionCountEl.textContent = totalSessions;
        if (favCategoryEl) favCategoryEl.textContent = topCategory;
        
    } else {
        // Estado por defecto si no hay datos
        if (totalMinutesEl) totalMinutesEl.textContent = "0";
        if (sessionCountEl) sessionCountEl.textContent = "0";
        if (favCategoryEl) favCategoryEl.textContent = "---";
    }
});