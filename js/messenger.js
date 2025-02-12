document.addEventListener('DOMContentLoaded', function () {
    const messengerContainer = document.createElement('section');
    messengerContainer.classList.add('messenger-container');

    const toggleIcon = document.createElement('div');
    toggleIcon.classList.add('messenger-container__icon');
    toggleIcon.id = 'toggleIcon';

    const firstIcon = document.createElement('img');
    firstIcon.classList.add('messenger-container__icon-item');
    firstIcon.id = 'firstIcon';
    firstIcon.src = 'images/icons/chat-right-text.svg';
    firstIcon.alt = 'Иконка мессенджеров';

    const secondIcon = document.createElement('img');
    secondIcon.classList.add('messenger-container__icon-item');
    secondIcon.id = 'secondIcon';
    secondIcon.src = 'images/icons/x-lg.svg';
    secondIcon.alt = 'Иконка мессенджеров';
    secondIcon.style.display = 'none'; // скрываем вторую иконку

    toggleIcon.appendChild(firstIcon);
    toggleIcon.appendChild(secondIcon);
    messengerContainer.appendChild(toggleIcon);

    const linksContainer = document.createElement('div');
    linksContainer.classList.add('messenger-container__links');
    linksContainer.id = 'linksContainer';
    linksContainer.style.display = 'none';

    const content = document.createElement('div');
    content.classList.add('messenger-container__content');

    const title = document.createElement('p');
    title.classList.add('messenger-container__title');
    title.textContent = 'Требуется помощь?';

    const text = document.createElement('p');
    text.textContent = 'Обращайтесь к нам любым удобным для вас способом!';

    content.appendChild(title);
    content.appendChild(text);
    linksContainer.appendChild(content);

    const telegramLink = document.createElement('a');
    telegramLink.href = 'https://t.me/yourtelegram';
    telegramLink.classList.add('messenger-container__link-item');
    telegramLink.textContent = 'Telegram';

    const whatsappLink = document.createElement('a');
    whatsappLink.href = 'https://wa.me/yourwhatsapp';
    whatsappLink.classList.add('messenger-container__link-item');
    whatsappLink.textContent = 'WhatsApp';

    const phoneText = document.createElement('p');
    phoneText.classList.add('messenger-container__link-item');
    phoneText.textContent = '+7 914 662-79-11';

    linksContainer.appendChild(telegramLink);
    linksContainer.appendChild(whatsappLink);
    linksContainer.appendChild(phoneText);

    messengerContainer.appendChild(linksContainer);
    document.body.appendChild(messengerContainer);

    function toggleVisibility() {
        if (firstIcon.style.display !== 'none') {
            firstIcon.style.display = 'none';

            secondIcon.style.display = 'block';
            linksContainer.style.display = 'flex';
        } else {
            firstIcon.style.display = 'block';
            secondIcon.style.display = 'none';
            linksContainer.style.display = 'none';
        }
    }

    toggleIcon.addEventListener('click', toggleVisibility);
});
