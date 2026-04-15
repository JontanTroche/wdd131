/*Dashboard Logic*/
document.addEventListener('DOMContentLoaded', () => {
    const sessions = StorageController.getSessions();
    
    const totalMinutesEl = document.getElementById('total-minutes');
    const sessionCountEl = document.getElementById('session-count');
    const favCategoryEl = document.getElementById('fav-category');

    if (sessions.length > 0) {
        const totalMinutes = sessions.reduce((total, s) => total + s.duration, 0);
        const totalSessions = sessions.length;
        const categoryCounts = {};
        sessions.forEach(s => {
            categoryCounts[s.category] = (categoryCounts[s.category] || 0) + 1;
        });

        const topCategory = Object.keys(categoryCounts).reduce((a, b) => 
            categoryCounts[a] > categoryCounts[b] ? a : b
        );

        if (totalMinutesEl) totalMinutesEl.textContent = totalMinutes;
        if (sessionCountEl) sessionCountEl.textContent = totalSessions;
        if (favCategoryEl) favCategoryEl.textContent = topCategory;
        
    } else {
        if (totalMinutesEl) totalMinutesEl.textContent = "0";
        if (sessionCountEl) sessionCountEl.textContent = "0";
        if (favCategoryEl) favCategoryEl.textContent = "---";
    }
});