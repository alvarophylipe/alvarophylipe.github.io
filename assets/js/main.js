function not_added_item(){
    alert('Not Added Item!');
}

function size_of_screen () {
    var screenWidth = window.innerWidth;
    var screenHeight = screen.height;
    const resolution = document.querySelector('#css');
    document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight + resolution.href;
}

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

window.addEventListener('resize', function(){;
    autoResize();
});


