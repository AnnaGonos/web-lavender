document.getElementById('toggle-postcards').addEventListener('click', function() {
    const addList = document.querySelector('.product-item__add-list');
    if (addList.style.display === 'none' || addList.style.display === '') {
        addList.style.display = 'flex';
    } else {
        addList.style.display = 'none';
    }
});
