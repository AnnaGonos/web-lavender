document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('form');
    const searchInput = document.querySelector('input[type="text"]');

    const listItems = Array.from(document.querySelectorAll('ul li'));
    const originalTexts = listItems.map(item => item.textContent);

    function highlightMatches(fullText, searchQuery) {
        if (!searchQuery) return fullText;

        try {
            const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(escapedQuery, 'gi');
            return fullText.replace(regex, match => `<span style="background-color: yellow;">${match}</span>`);
        } catch (error) {
            console.error("Ошибка при создании регулярного выражения:", error);
            return fullText;
        }
    }

    function resetHighlight() {
        listItems.forEach((item, index) => {
            item.innerHTML = originalTexts[index];
        });
    }

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();

        if (!query) {
            listItems.forEach((item, index) => {
                item.style.display = '';
                item.innerHTML = originalTexts[index];
            });
            return;
        }

        listItems.forEach((item, index) => {
            const textLower = originalTexts[index].toLowerCase();

            if (textLower.includes(query)) {
                item.style.display = '';
                item.innerHTML = highlightMatches(originalTexts[index], query);
            } else {
                item.style.display = 'none';
            }
        });
    });
});


