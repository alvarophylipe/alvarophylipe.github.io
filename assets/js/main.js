/* not added item alert */
function not_added_item(){
    alert('Not Added Item!');
}

/* Capturar a resolução da tela */
function autoResize () {
    screenWidth = screen.width;
    windowWidth = window.innerWidth;
    const resolution = document.querySelector('#css');
    if (windowWidth <= 1366 || screenWidth <= 1366) {
        resolution.href = 'assets/css/desktopHD.css';
    }
    else if (windowWidth <= 1920 || screenWidth <= 1920) {
        resolution.href = 'assets/css/desktopFULLHD.css';
    }
};

/* Alterar a resolução da página */
window.addEventListener('resize', function(){;
    autoResize();
});


