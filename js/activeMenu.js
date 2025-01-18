document.addEventListener("DOMContentLoaded", function() {
    const currentUrl = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.header__menu-link, .dropdown-link');

    links.forEach(link => {
        const linkUrl = link.getAttribute('href');
        if (linkUrl === currentUrl) {
            link.classList.add('active');

            if (link.parentElement.closest('.dropdown-menu')) {
                const parentItem = link.closest('.dropdown-menu').previousElementSibling;
                parentItem.classList.add('active');
            }
        }
    });
});