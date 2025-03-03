// export function getCompressedString(text) {
//     const pattern = /([A-Za-zА-Яа-яЁё]+)|([.,!?])|([^A-Za-zА-Яа-яЁё.,!?]+)/gmu;
//
//     const tokens = [];
//
//     const freqMap = new Map();
//     const firstIndexMap = new Map();
//
//     let match;
//     let wordOrder = 0;
//
//     while ((match = pattern.exec(text)) !== null) {
//         const [fullMatch, wordGroup, punctGroup, otherGroup] = match;
//
//         if (wordGroup) {
//             tokens.push({ type: 'word', value: wordGroup });
//
//             const lower = wordGroup.toLowerCase();
//             const count = freqMap.get(lower) || 0;
//             freqMap.set(lower, count + 1);
//
//             if (!firstIndexMap.has(lower)) {
//                 firstIndexMap.set(lower, wordOrder++);
//             }
//         } else if (punctGroup) {
//             tokens.push({ type: 'punct', value: punctGroup });
//         } else if (otherGroup) {
//             tokens.push({ type: 'other', value: otherGroup });
//         }
//     }
//
//     const wordsInfo = [];
//     for (const [lowerWord, frequency] of freqMap.entries()) {
//         wordsInfo.push({
//             word: lowerWord, freq: frequency, firstIndex: firstIndexMap.get(lowerWord),
//         });
//     }
//
//     wordsInfo.sort((a, b) => {
//         if (b.freq === a.freq) {
//             return a.firstIndex - b.firstIndex;
//         }
//         return b.freq - a.freq;
//     });
//
//     const wordIndexMap = new Map();
//     wordsInfo.forEach((item, index) => {
//         wordIndexMap.set(item.word, index);
//     });
//
//     let result = '';
//     for (const token of tokens) {
//         if (token.type === 'word') {
//             const lower = token.value.toLowerCase();
//             result += wordIndexMap.get(lower);
//         } else {
//             result += token.value;
//         }
//     }
//
//     return result;
// }


(function() {
    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function highlightText(element, searchTerm) {
        if (!searchTerm) return;
        const escaped = escapeRegExp(searchTerm);
        const regex = new RegExp(escaped, 'gi');
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
        const textNodes = [];
        let currentNode;

        while ((currentNode = walker.nextNode())) {
            textNodes.push(currentNode);
        }

        textNodes.forEach(textNode => {
            const parent = textNode.parentNode;
            if (!parent || parent.nodeName === 'MARK') return;

            const originalText = textNode.nodeValue;
            const newHTML = originalText.replace(regex, match =>
                '<mark style="background-color: yellow;">' + match + '</mark>'
            );

            if (newHTML !== originalText) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newHTML;
                while (tempDiv.firstChild) {
                    parent.insertBefore(tempDiv.firstChild, textNode);
                }
                parent.removeChild(textNode);
            }
        });
    }

    document.getElementById('search').addEventListener('submit', function(e) {
        e.preventDefault();

        const searchInput = document.getElementById('search-input');
        const rawSearch = searchInput.value.trim();
        const lowerSearch = rawSearch.toLowerCase();
        const listItems = document.querySelectorAll('#list li');

        listItems.forEach(li => {
            if (!li.dataset.originalHTML) {
                li.dataset.originalHTML = li.innerHTML;
            }
            li.innerHTML = li.dataset.originalHTML;

            if (!rawSearch) {
                li.style.display = '';
                return;
            }

            const textLower = li.textContent.toLowerCase();
            if (textLower.includes(lowerSearch)) {
                li.style.display = '';
                highlightText(li, rawSearch);
            } else {
                li.style.display = 'none';
            }
        });
    });
})();

const testText = "Привет, как у тебя дела? \ln" +
    "" +
    "Да, вроде, хорошо, а у тебя?";
console.log(getCompressedString(testText));

