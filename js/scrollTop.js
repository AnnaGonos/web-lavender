let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth <= 600) {
        header.classList.add("fixed");
    } else {
        if (currentScroll > lastScrollTop) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener("DOMContentLoaded", function() {
    const clientLink = document.querySelector('.header__menu-item > .header__menu-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    clientLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener("click", function(event) {
        if (!clientLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});


