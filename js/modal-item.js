const modal = document.querySelectorAll('.modal');
const modalBtn = document.querySelectorAll('.goods__item--btn');
const modalClose = document.querySelectorAll('.modal__btn--close');
const modalOverlay = document.querySelectorAll('.overlay');


function openModal(index) {
    const scrollbarWidth = getScrollbarWidth();
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    document.documentElement.classList.add('modal-open');
    modal[index].classList.add('active');
}

function closeModal(index) {
    modal[index].classList.remove('active');
    const scrollPosition = window.scrollY;
    setTimeout(() => {
        document.documentElement.classList.remove('modal-open');
        document.documentElement.style.removeProperty('--scrollbar-width');
        window.scrollTo(0, scrollPosition);
    }, 450);
}

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

modalBtn.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(index);
    });
});

modalClose.forEach((item, index) => {
    item.addEventListener('click', () => closeModal(index));
});

modalOverlay.forEach((item, index) => {
    item.addEventListener('click', () => closeModal(index));
});
