document.addEventListener("DOMContentLoaded", function() {
    const firstSection = document.querySelector('.file-explorer, .Version-Manager, .Server-Settings, .Plugin-Manager');
    if (firstSection) {
        firstSection.style.display = 'block';
        setTimeout(() => firstSection.classList.add('fade-up'), 10); 
    }
});
function showSection(section) {
    document.querySelectorAll('.file-explorer, .Version-Manager, .Server-Settings, .Plugin-Manager')
        .forEach(el => {
            el.style.display = 'none';
            el.classList.remove('fade-up'); 
        });
    const selectedSection = document.getElementById(section + '-section');
    selectedSection.style.display = 'block';
    setTimeout(() => {
        selectedSection.classList.add('fade-up');
    }, 10); 
    document.querySelectorAll('.control-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

