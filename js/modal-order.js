const orderBtn = document.querySelector('.order__btn');
const modalOrder = document.querySelector('.modal__order');
const modalCloseBtn = modalOrder.querySelector('.modal__order--btn');
const overlay = modalOrder.querySelector('.overlay__order');
const form = document.querySelector('.order__form');
const inputs = form.querySelectorAll('.not-empty');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[0-9]{10,14}$/;
const nameRegex = /^[A-Za-zА-Яа-я\s]+$/;

function validateInput(input) {
    if (input.value.trim() === '') {
        return false;
    }
    if (input.name === 'name' && !nameRegex.test(input.value)) {
        return false;
    }
    if (input.type === 'email' && !emailRegex.test(input.value)) {
        return false;
    }
    if (input.type === 'tel' && !phoneRegex.test(input.value)) {
        return false;
    }
    return true;
}

document.body.addEventListener('submit', function(e) {
    if (e.target.matches('.order__form')) {
        e.preventDefault();
        
    let allFieldsValid = true;

    inputs.forEach((input) => {
        const wrapper = input.closest('.order__form--item');
        
        if (!validateInput(input)) {
            allFieldsValid = false;
            input.classList.add('error');
            wrapper.classList.add('error-message');
        } else {
            input.classList.remove('error');
            wrapper.classList.remove('error-message');
        }
    });
    if (allFieldsValid) {
        modalOrder.classList.add('active');
        form.reset();
    }
    }
});

inputs.forEach((input) => {
    input.addEventListener('input', function() {
        const wrapper = this.closest('.order__form--item');
        if (validateInput(this)) {
            this.classList.remove('error');
            wrapper.classList.remove('error-message');
        }
    });
});

function closeModalOrder() {
    modalOrder.classList.remove('active');
}

modalCloseBtn.addEventListener('click', closeModalOrder);
overlay.addEventListener('click', closeModalOrder);
