document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.getElementById('toggleIcon');
    const firstIcon = document.getElementById('firstIcon');
    const secondIcon = document.getElementById('secondIcon');
    const linksContainer = document.getElementById('linksContainer');

    const toggleVisibility = () => {
        if (firstIcon.style.display !== 'none') {
            firstIcon.style.display = 'none';
            secondIcon.style.display = 'block';
            linksContainer.style.display = 'flex';
        } else {
            firstIcon.style.display = 'block';
            secondIcon.style.display = 'none';
            linksContainer.style.display = 'none';
        }
    };

    if (toggleIcon && firstIcon && secondIcon && linksContainer) {
        toggleIcon.addEventListener('click', toggleVisibility);

    } else {
        console.error('Один или несколько элементов не найдены');
    }
});
