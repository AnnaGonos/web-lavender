const snowflakesContainer = document.querySelector('.snowflakes');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflakes__item';
    snowflake.innerText = '❄';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
    snowflake.style.opacity = Math.random();

    snowflakesContainer.appendChild(snowflake);


    setTimeout(() => {

        snowflake.remove();
    }, 8000);
}

setInterval(createSnowflake, 300);