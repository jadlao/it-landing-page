function openMenu() {
    //console.log('click');
    var d = document.getElementById('mob-menu');
    d.classList.remove('close');
    d.className += ' open';
}

function closeMenu() {
    //console.log('click');
    var d = document.getElementById('mob-menu');
    d.classList.remove('open');
    d.className += ' close';
}