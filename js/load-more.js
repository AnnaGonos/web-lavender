let offset = 16; // Начальное смещение после первых 16 товаров
const limit = 16; // Количество товаров для загрузки

async function loadMoreProducts() {
    try {
        const response = await fetch(`/florist/catalog?limit=${limit}&offset=${offset}`);
        const data = await response.json();

        if (data.products.length === 0) {
            alert('Больше товаров нет');
            document.getElementById('load-more-button').style.display = 'none'; // Скрываем кнопку
            return;
        }

        const container = document.getElementById('products-container');

        // Добавляем новые товары в контейнер
        data.products.forEach(product => {
            const article = document.createElement('article');
            article.className = 'product__item';
            article.innerHTML = `
                <a href="/florist/products/${product.id}">
                    <img class="product__image" src="${product.imageUrl}" alt="${product.imageDescription || 'Картинка к товару'}">
                </a>
                <div class="product__description">
                    <p class="product__name">${product.name}</p>
                    <span class="product__price">${product.price} РУБ</span>
                </div>
            `;
            container.appendChild(article);
        });

        offset += limit; // Увеличиваем смещение
    } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
    }
}