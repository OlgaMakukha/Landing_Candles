    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const closeMenu = document.querySelector('.header__nav--close');
    
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    const menuItems = document.querySelectorAll('.header__menu li a');
    menuItems.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
    });
});

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !burger.contains(event.target)) {
            burger.classList.remove('active');
            nav.classList.remove('active');
        }
    });