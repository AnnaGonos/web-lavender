document.addEventListener('DOMContentLoaded', (event) => {
    const listIcon = document.getElementById('header-list');
    const cancelIcon = document.getElementById('header-cancel');
    const menuList = document.getElementById('menu-list')

    listIcon.addEventListener('click', () => {
        listIcon.style.display = 'none';
        cancelIcon.style.display = 'flex';
        menuList.style.display = 'flex';

    });

    cancelIcon.addEventListener('click', () => {
        cancelIcon.style.display = 'none';
        listIcon.style.display = 'flex';
        menuList.style.display = 'none';
    });
});