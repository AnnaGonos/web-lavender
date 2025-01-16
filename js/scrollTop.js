let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // прокрутка вниз
        header.classList.add("hidden");
    } else {
        // прокрутка вверх
        header.classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener("DOMContentLoaded", function() {
    const clientLink = document.querySelector('.header__menu-item > .header__menu-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    clientLink.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block'; // Переключение видимости подменю
    });

    // document.addEventListener("click", function(event) {
    //     if (!clientLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
    //         dropdownMenu.style.display = 'none'; // Скрыть подменю, если кликнули вне его
    //     }
    // });
});

