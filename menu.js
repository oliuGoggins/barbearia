const abrirmenu = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

function ToggleMenu(event) {
    if (event.type ==='touchstart') event.preventDefault();
    nav.classList.toggle('active');
    
}

abrirmenu.addEventListener('click', ToggleMenu);
abrirmenu.addEventListener('touchstart', ToggleMenu);