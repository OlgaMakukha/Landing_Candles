const modal = document.querySelectorAll('.modal');
const modalBtn = document.querySelectorAll('.goods__item--btn');
const modalClose = document.querySelectorAll('.modal__btn--close');
const modalOverlay = document.querySelectorAll('.overlay');

modalBtn.forEach((item, index) => {
    item.addEventListener('click', function() {
        modal[index].classList.add('active');
    });
});

function closeModal(index) {
    modal[index].classList.remove('active');
}

modalClose.forEach((item, index) => {
    item.addEventListener('click', function() {
        closeModal(index);
    });
});

modalOverlay.forEach((item, index) => {
    item.addEventListener('click', function() {
        closeModal(index);
    });
});