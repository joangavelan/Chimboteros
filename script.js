const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu')

hamburger.addEventListener('click', () => {
 if(menu.classList.contains('h-0')) {
    menu.classList.remove('h-0');
    menu.classList.add('h-auto');
  } else {
    menu.classList.remove('h-auto');
    menu.classList.add('h-0');
  }

    // if(menu.style.maxHeight) {
    //     hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
    //     menu.style.maxHeight = null;
    //     menu.style.marginTop = 0;
    // }

    // else {
    //     menu.style.maxHeight = menu.scrollHeight + 'px';
    //     hamburger.innerHTML = `<i class="fas fa-times"></i>`;
    //     menu.style.marginTop = '24px';
    // }
})

// console.log(hamburger)
// console.log(menu)