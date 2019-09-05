let collect = document.querySelector('aside'),
    book = document.querySelectorAll('.book');

    collect.insertBefore(book[1], book[0]);
    collect.insertBefore(book[2], null);
    collect.insertBefore(book[4], book[3]);

document.querySelector('body').setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)'); // меняем фоновое изображение


let h2 = document.getElementsByTagName('a')[2]; // меняем заголовок в 3 книге
h2.textContent = 'Книга 3. this и Протопипы Объектов';

document.querySelector('.adv').remove();//удаляем рекламу

let list = document.querySelectorAll('ul');
let elemLi = document.querySelectorAll('li');

list[1].insertBefore(elemLi[8], elemLi[16]);
list[1].insertBefore(elemLi[14], elemLi[10]);
list[1].insertBefore(elemLi[12], elemLi[14]);
list[4].insertBefore(elemLi[45], elemLi[39]);
list[4].insertBefore(elemLi[38], elemLi[42]);
list[4].insertBefore(elemLi[41], elemLi[44]);


let elemLi8 = document.createElement('li');
elemLi8.textContent = 'Глава 8: За пределами ES6';
list[5].appendChild(elemLi8);
console.log(elemLi, list);





console.log( h2);