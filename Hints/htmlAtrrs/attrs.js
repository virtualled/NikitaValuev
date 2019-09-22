// link.hasAttribute();
// link.getAttribute();
// link.setAttribute('alt', 'lgogotype');
// link.removeAttribute('alt');
//
// link.className = 'new_link second_class';
// link.classList.add('class');
// link.classList.remove('class');
// link.classList.toggle('class'); // добавлять удалять класс
// link.classList.contains('new_link'); //true
//
// link.dataset.aboutHeader = 'HEader';
//


/// Регулярные выражения

const reg = /hello/;
const reg2 = new RegExp('Hello');
reg.test('всем привет, добро пожаловать!'); // Ищет слово "привет", и возвращает тру или фолс
/hello/.test('всем hello, добро пожаловать!'); // Ищет слово "привет", и возвращает тру или фолс
/^hello/.test('привет, добро пожаловать!'); // Ищет слово "привет", и возвращает тру или фолс
/hello$/.test('всем , добро пожаловать! hello'); // Ищет слово "привет", и возвращает тру или фолс

console.log(/hello$/.test('всем , добро пожаловать! hello'));

const string = `HELLO my friend, welcome, come in`;
const result = string.match(/e/ig); // i  и g - флаги, мжно вместе испобзовать, так и раздельно. i - игнорирует регистр, g - ищет все и везде
const strin2 = `спецсимволы: + * . : $ [] {} () ? /`;
const result2 = string.match(/\./g); // надо экоранировать, чтобы получить этот символ. "." - получить все символы
const result2 = string.match(/[А-Яа-яЁё]/g); // все русские буквы
const result2 = string.match(/[0-9]/g); // все цифры \d
const result2 = string.match(/[^0-9]/g); // всё кроме цифр  \D
const result2 = string.match(/[\s]/g); // все отступы и запятые
const result2 = string.match(/[\S]/g); // все БЕЗ отступы и запятые
const result2 = string.match(/телефона | домофона/g); // все БЕЗ отступы и запятые
const result2 = string.match(/(теле|домо)фона/g); // все БЕЗ отступы и запятые
const result2 = string.match(/номера?/g); // может содержать "а", может нет
const result2 = string.match(/номера+/g); // обязательно содержит а
const result2 = string.match(/номера{2}/g); // соклько раз может содержать буква "а"
const result2 = string.match(/<.+>/g); // получить весь див
const result2 = string.match(/<.+?>/g); // получить весь див
const result2 = string.match(/номер(?= домофона)/g); // найдет "номер" перед словом домофон
const result2 = string.match(/номер(?! домофона)/g); // найдет "номер" перед которым НЕТ словом домофон
const result2 = string.search(/номер(?! домофона)/g); // возвращает индекс первого символа
const email = string.match(/\w+@w+\.\w{2,3}/); // поиск почты
const mobile = string.match(/\+?[78]([-()]*\d){10}/g); // поиск телефона
const array = string.match(/[\s,]+/); // получить каждое слово в массив

const res = result.replace(/номер(?= домофона)/g, 'pin-code')
