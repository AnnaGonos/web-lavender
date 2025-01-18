const productList = document.getElementById('product-list');
const categories = document.querySelectorAll('.catalog-filter__item');
let selectedCategory = 'Все букеты';


const products = [
    {
        name: "Букет №1",
        price: 3000,
        priceSale: 2500,
        date: new Date("2023-10-01"),
        image: "images/flowers/14.27.49_d377ab60.jpg",
        element: null,
        category: "Цветочные композиции"
    },
    {
        name: "Букет №2",
        price: 3600,
        priceSale: 3100,
        date: new Date("2023-09-28"),
        image: "images/flowers/11.30.52_36899588.jpg",
        element: null,
        category: "Свадебные"
    },
    {
        name: "Букет №3",
        price: 3700,
        priceSale: 0,
        date: new Date("2023-10-02"),
        image: "images/flowers/14.30.51_eb61f2da.jpg",
        element: null,
        category: "Комнатные цветы"
    },
];

const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');

function updateActiveCategory() {
    categories.forEach(category => {
        category.classList.remove('active');
        if (category.dataset.category === selectedCategory) {
            category.classList.add('active');
        }
    });
}

function getCurrentPrice(product) {
    return product.priceSale || product.price;
}

function setPriceRange() {
    const currentPrices = products.map(getCurrentPrice);
    const minPrice = Math.min(...currentPrices);
    const maxPrice = Math.max(...currentPrices);

    if (!minPriceInput.value) {
        minPriceInput.value = minPrice;
    }
    if (!maxPriceInput.value) {
        maxPriceInput.value = maxPrice;
    }
}


function sortProducts(productArray, criterion) {
    productArray.sort((a, b) => {
        const priceA = getCurrentPrice(a);
        const priceB = getCurrentPrice(b);
        switch (criterion) {
            case 'priceAsc':
                return priceA - priceB;
            case 'priceDesc':
                return priceB - priceA;
            case 'new':
                return b.date - a.date;
            case 'old':
                return a.date - b.date;
            default:
                return 0;
        }
    });
}

function renderProducts(productArray) {
    const errorMessageContainer = document.getElementById('error-message');
    errorMessageContainer.innerHTML = '';
    productList.innerHTML = '';

    if (productArray.length === 0) {
        const errorParagraph = document.createElement('p');
        errorParagraph.textContent = "Ничего не нашли. Попробуйте другие категории или фильтры";
        errorMessageContainer.appendChild(errorParagraph);
        updatePriceRange(0, 0);
        return;
    }

    const countMessage = document.createElement('p');
    countMessage.textContent = `Найдено: ${productArray.length}`;
    countMessage.className = 'count-message';
    errorMessageContainer.appendChild(countMessage);

    productArray.forEach(product => {
        const item = document.createElement('article');
        item.className = 'product__item';
        item.setAttribute('data-date', product.date.toISOString().split('T')[0]);
        item.innerHTML = `
                <div class="product__image-container">
                    <img class="product__image" alt="Картинка товара" src="${product.image}">
                </div>
                <div class="product__description">
                    <p class="product__name">${product.name}</p>
                    <div class="product__prices">
                        ${product.priceSale ? `<p class="product__price product__price--sale">${product.priceSale}</p>
                        <p class="product__price product__price--original">${product.price}</p>` :
            `<p class="product__price">${product.price}</p>`}
                    </div>
                </div>
            `;
        productList.appendChild(item);
    });
    setPriceRange();
}

function updatePriceRange(minPrice, maxPrice) {
    minPriceInput.value = minPrice;
    maxPriceInput.value = maxPrice;
}

function filterProducts() {
    let filteredProducts = products;
    if (selectedCategory !== 'Все букеты') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
    return filteredProducts.filter(product => {
        const currentPrice = getCurrentPrice(product);
        return currentPrice >= minPrice && currentPrice <= maxPrice;
    });
}

function updateProductList() {
    const filteredProducts = filterProducts();
    const sortCriterion = document.getElementById('sort').value;
    sortProducts(filteredProducts, sortCriterion);
    renderProducts(filteredProducts);
}

document.getElementById('filter-button').addEventListener('click', function() {
    const minPriceInputVal = parseFloat(minPriceInput.value);
    const maxPriceInputVal = parseFloat(maxPriceInput.value);

    if (!isNaN(minPriceInputVal) && !isNaN(maxPriceInputVal) && minPriceInputVal >= 0 && maxPriceInputVal >= 0) {
        products.forEach(product => {
            const currentPrice = getCurrentPrice(product);
            if (currentPrice >= minPriceInputVal && currentPrice <= maxPriceInputVal) {
                product.price = currentPrice;
            }
        });
    }

    updateProductList();
});

categories.forEach(category => {
    category.addEventListener('click', () => {
        selectedCategory = category.dataset.category;
        updateActiveCategory();
        updateProductList();
        history.pushState({}, '', `catalog.html?category=${encodeURIComponent(selectedCategory)}`);
    });
});

document.getElementById('all-bouquets').addEventListener('click', () => {
    selectedCategory = 'Все букеты';
    updateActiveCategory();
    minPriceInput.value = '';
    maxPriceInput.value = '';
    renderProducts(products);
    history.pushState({}, '', `catalog.html?category=Все букеты`);
});

document.getElementById('sort').addEventListener('change', function() {
    updateProductList();
});

window.onload = function() {
    const queryParams = new URLSearchParams(window.location.search);
    selectedCategory = queryParams.get('category') || 'Все букеты';
    updateActiveCategory();
    updateProductList();
};

document.getElementById('toggle-price').addEventListener('click', function() {
    const priceRange = document.getElementById('price-range');
    priceRange.style.display = priceRange.style.display === 'none' || priceRange.style.display === '' ? 'flex' : 'none';
});