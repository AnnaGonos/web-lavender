function solution(input) {
    // разделю входные данные на правила и последовательности
    const [rulesSection, sequencesSection] = input.split('\n\n');

    //ьправила сортировки
    const rules = rulesSection.split('\n').map(rule => rule.split('|').map(Number));

    // последовательности чисел
    const sequences = sequencesSection.split('\n').map(seq => seq.split(', ').map(Number));

    function isSequenceValid(sequence) {
        const indexMap = new Map();
        sequence.forEach((num, idx) => indexMap.set(num, idx));

        // Проверяем каждое правило
        for (const [x, y] of rules) {
            if (indexMap.has(x) && indexMap.has(y)) {
                if (indexMap.get(x) > indexMap.get(y)) {
                    return false;
                }
            }
        }
        return true;
    }

    let validCount = 0;
    for (const sequence of sequences) {
        if (isSequenceValid(sequence)) {
            validCount++;
        }
    }

    return validCount;
}

module.exports = solution;
