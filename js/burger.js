    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const closeMenu = document.querySelector('.header__nav--close');

    burger.addEventListener('click', function() {
        nav.classList.add('active');
    });

    closeMenu.addEventListener('click', function() {
        nav.classList.remove('active');
    });

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !burger.contains(event.target)) {
            nav.classList.remove('active');
        }
    });