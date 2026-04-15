document.addEventListener('DOMContentLoaded', () => {
    const sessions = StorageController.getSessions();
    const tbody = document.querySelector('#logs-table tbody');
    const filter = document.getElementById('filter-category');
    const clearBtn = document.getElementById('clear-btn');

    //button functinoability
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            StorageController.clearAll();
        });
    }

    const render = (data) => {
        tbody.innerHTML = '';
        
        if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="4" class="empty-msg">No hay sesiones registradas.</td></tr>`;
        return;
        }

        data.forEach(s => {
            tbody.innerHTML += `
                <tr>
                    <td>${s.date}</td>
                    <td><strong class="category-highlight">${s.category}</strong></td>
                    <td>${s.duration} min</td>
                    <td>${s.notes}</td>
                </tr>`;
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