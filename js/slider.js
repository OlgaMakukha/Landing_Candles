const items = document.querySelectorAll('.goods__item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');
let index = 0;
console.log(items);

function activeSlide(n) {
    items.forEach((item) => {
        item.classList.remove('active');
    })
    items[n].classList.add('active');
}

function activeDot(n) {
    dots.forEach((dot) => {
        dot.classList.remove('active');
    })
    dots[n].classList.add('active');
}

function prepearCurrentSlide(n) {
    activeSlide(n);
    activeDot(n);
}

function nextSlide() {
    if (index === items.length - 1) {
        index = 0;
        prepearCurrentSlide(index);
    } else {
        index ++;
        prepearCurrentSlide(index);
    }
}

function prevSlide() {
    if (index === 0) {
        index = items.length - 1;
        prepearCurrentSlide(index);
    } else {
        index --;
        prepearCurrentSlide(index);
    }
}

dots.forEach(function(item, indexDot) {
    item.addEventListener('click', function() {
        index = indexDot;
        prepearCurrentSlide(index);
    })
})

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

