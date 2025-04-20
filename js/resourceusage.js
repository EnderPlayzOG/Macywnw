function updateResourceUsage() {
    document.querySelectorAll('.resource-bar').forEach((bar, index) => {
        let fill = bar.querySelector('.resource-fill');
        let label = bar.previousElementSibling.querySelector('.resource-label'); 
        let currentWidth = parseFloat(fill.style.width) || 50; 
        let change = (Math.random() * 5 - 2.5); 
        let newWidth = Math.max(10, Math.min(90, currentWidth + change)); 
        fill.style.width = newWidth + '%';

        if (index === 0) {
            label.textContent = Math.round(newWidth) + "%"; 
        } else if (index === 1) {
            let totalRAM = 16; 
            let usedRAM = Math.round((newWidth / 100) * totalRAM);
            label.textContent = `${usedRAM}GB / ${totalRAM}GB`; 
        } else if (index === 2) {
            let totalDisk = 40; 
            let usedDisk = Math.round((newWidth / 100) * totalDisk);
            label.textContent = `${usedDisk}GB / ${totalDisk}GB`;
        }
    });
}

function startRandomUpdates() {
    document.querySelectorAll('.resource-bar').forEach((bar, index) => {
        function update() {
            updateResourceUsage();
            let delay = Math.random() * (6000 - 3000) + 3000; 
            setTimeout(update, delay);
        }
        update();
    });
}

startRandomUpdates(); 
