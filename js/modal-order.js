const orderBtn = document.querySelector('.order__btn');
const modalOrder = document.querySelector('.modal__order');
const modalCloseBtn = modalOrder.querySelector('.modal__order--btn');
const overlay = modalOrder.querySelector('.overlay__order');
const form = document.querySelector('.order__form');
const inputs = form.querySelectorAll('input[required]');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let allField = true;

    inputs.forEach((input) => {
        if (input.value === '') {
            allField = false;
        }
    });
    if (allField) {
        modalOrder.classList.add('active');
        form.reset();
    } else {
        alert('Пожалуйста, заполните все обязательные поля');
    }
});

function closeModalOrder() {
    modalOrder.classList.remove('active');
}

modalCloseBtn.addEventListener('click', closeModalOrder);
overlay.addEventListener('click', closeModalOrder);