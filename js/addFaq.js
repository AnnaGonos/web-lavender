document.querySelectorAll('.faq__title').forEach((title) => {
    title.addEventListener('click', function() {
        const content = title.nextElementSibling; // Получаем следующий элемент (ответ)

        // Проверяем текущее состояние видимости индикатора
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'flex'; // Показываем ответ
        } else {
            content.style.display = 'none'; // Скрываем ответ
        }
    });
});

