// test.js
import { getCompressedString } from './1.1.js';

// Тест 1
const test1 = "Hello my name is Vitaliy! And what is your name?";
console.log("Тест 1:");
console.log("Ввод:", test1);
console.log("Вывод:", getCompressedString(test1));
console.log("Ожидаемый вывод: 2 3 0 1 4! 5 6 1 7 0?");
console.log("---");

// Тест 2
const test2 = "Привет, как у тебя дела?\nДа, вроде, хорошо, а у тебя?";
console.log("Тест 2:");
console.log("Ввод:", test2);
console.log("Вывод:", getCompressedString(test2));
console.log("Ожидаемый вывод: 2, 3 0 1 4?\n5, 6, 7, 8 0 1?");
console.log("---");

// Ваш собственный тест
const customTest = "This is a test. Test this function!";
console.log("Собственный тест:");
console.log("Ввод:", customTest);
console.log("Вывод:", getCompressedString(customTest));

