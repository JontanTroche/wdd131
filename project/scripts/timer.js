let seconds = 0;
let timerId = null;

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const form = document.getElementById('session-form');

    startBtn.addEventListener('click', () => {
        if (timerId) clearInterval(timerId);
        
        timerId = setInterval(() => {
            seconds++;
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = seconds % 60;
            display.textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        }, 1000);
        
        startBtn.disabled = true;
        stopBtn.disabled = false;
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(timerId);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const durationMinutes = Math.floor(seconds / 60);

        if (seconds < 60) {
            alert("¡La sesión debe durar al menos 1 minuto para ser registrada!");
            return;
        }

        const session = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            category: document.getElementById('category').value,
            duration: durationMinutes,
            notes: document.getElementById('notes').value || "Sin notas."
        };

        StorageController.saveSession(session);
        
        alert(`¡Excelente sesión! Has registrado ${durationMinutes} minutos de práctica.`);
        
        window.location.href = 'logs.html';
    });
});