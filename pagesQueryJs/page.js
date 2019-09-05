'use strict';

//DOM
//BOM
// HTTP request

console.log(document.parentElement); // Проверка, кто родитель этого элемента
console.log(document.children); // Дети этого элемента
console.log(document.getElementById('hd')); //получить элемент по индентификатор
console.log(document.getElementsByClassName('desk')); //получаем коллекцию всех элементов по классу
console.log(document.getElementsByClassName('html')[1]); //получаем конкретный элемент
console.log(document.getElementsByTagName('p'));


console.log(document.querySelector('h1'));
console.log(document.querySelector('.html')); // ставим точку если надо по классу, как в CSS. Кроме псевод элементов
console.log(document.querySelectorAll('.html')); // все элементы


let myElem =  document.querySelector('#hd');
myElem.setAttribute('style', 'font-size: 70px'); // добавляем атрибут
console.log(myElem.getAttribute('id'));// получаем значение в ID
console.log(myElem.className); // получаем все классы у этого ID
myElem.classList.add('js'); // Добавлям класс
console.log(myElem.classList); // получаем коллекцию классов, можем делать операции над классами
myElem.classList.remove('desk');    // удаляем класс
console.log(myElem.classList); // получаем коллекцию классов, можем делать операции над классами



let myMain =  document.querySelector('h1');
myMain.title = 'Lets do it'; // присваиваем новое значение атрибуту
console.log(myMain.title); //получаем значение утрибута



let collect = document.querySelectorAll('.collections'),
    elem = document.querySelectorAll('.elem');

    console.log(collect, elem);
    collect[0].removeChild(elem[3]); // удаляем элемент
    collect[1].appendChild(elem[3]); // перемещает элемент
    collect[1].appendChild(elem[1]); // перемещает элемент
    collect[1].appendChild(elem[5]); // перемещает элемент
    collect[1].insertBefore(elem[3], elem[5]); // вставить элемент перед каким-то. Первое значение - какое элемент вставляем, второе - перед каким вставляем
    collect[1].insertBefore(elem[3], null); // если null, то вставляется вконец
    //collect[0].replaceChild(elem[4], elem[0] ); // заменяем 4 элемент на место 0. 0 - возврщается

    let elemRep = collect[0].replaceChild(elem[4], elem[0] ); // заменяем 4 элемент на место 0. 0 - возврщается
    collect[1].appendChild(elemRep); // помещаем в другое место замещенный элемент

    let elemClone = elem[4].cloneNode();
    collect[1].appendChild(elemClone); //копирует только li, без его значения, если передать параметр true в cloneNode(true), то передастся занчение
    console.log(collect, elem);


    console.log(collect[0].innerHTML); //передает разметку, чтобы ее менять
    /*

        <li class="elem elem-5">Элемент 5</li>

        <li class="elem elem-3">Элемент 3</li>
     */

    console.log(collect[0].textContent); //передает текст, не можем менять разметку
    /*
        Элемент 5

        Элемент 3


     */


    let newElem = document.createElement('li'); //принимает название Тэга
    newElem.textContent = 'Новый элемент'; // добавляем значение новому li
    collect[0].appendChild(newElem); // добавляем на сайт



let ol = document.querySelector('ol');
ol.setAttribute('style', 'color: orange');





