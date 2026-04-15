document.addEventListener('DOMContentLoaded', () => {
    const sessions = StorageController.getSessions();
    const tbody = document.querySelector('#logs-table tbody');
    const filter = document.getElementById('filter-category');

    const render = (data) => {
        tbody.innerHTML = '';
        
        if (data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 20px;">No hay sesiones registradas. ¡Hora de practicar!</td></tr>';
            return;
        }

        data.forEach(s => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${s.date}</td>
                <td><strong style="color: var(--secondary-color)">${s.category}</strong></td>
                <td>${s.duration} min</td>
                <td>${s.notes}</td>
            `;
            tbody.appendChild(row);
        });
    };

    render(sessions);

    if (filter) {
        filter.addEventListener('change', (e) => {
            const val = e.target.value;
            const filtered = val === 'All' ? sessions : sessions.filter(s => s.category === val);
            render(filtered);
        });
    }
});