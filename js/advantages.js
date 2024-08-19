const tabs = document.querySelector('.advantages__tabs');
const content = document.querySelectorAll('.advantages__content--item');
const tabIcon = document.querySelectorAll('.advantages__tab--img');
const advantagesSection = document.querySelector('.advantages');

function changeClass(element) {
    Array.from(tabs.children).forEach((tab) => {
        tab.classList.remove('active');
    });
    element.classList.add('active');
}

tabs.addEventListener('click', function(e) {
    const clickedTab = e.target.closest('[data-btn]');
    if (!clickedTab) return;

    const currentTab = clickedTab.dataset.btn;
    changeClass(clickedTab);

    content.forEach((item) => {
        item.classList.toggle('active', item.dataset.content === currentTab);
    });

    if (currentTab === 'nature') {
        advantagesSection.style.backgroundColor = '#f4f4f4';
    } else {
        advantagesSection.style.backgroundColor = '#ddd0c8';
    }

    tabIcon.forEach((item) => {
        item.classList.toggle('active', item.dataset.icon === currentTab);
    });
});