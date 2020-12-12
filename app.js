const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-menu')

hamburger.addEventListener('click', () => {
    if(menu.style.maxHeight) {
        hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
        menu.style.maxHeight = null;
        menu.style.marginTop = 0;
    }

    else {
        menu.style.maxHeight = menu.scrollHeight + 'px';
        hamburger.innerHTML = `<i class="fas fa-times"></i>`;
        menu.style.marginTop = '24px';
    }
})