// let money = 25;
// let income = '15';
// let addExpenses = 'Аренда, Реклама, Транспорт';
// let deposit = true;
// let mission = 21000;
// let period = 12;
// let budgetDay = money / 30;
//
// //alert('Need more money!');
// //console.log('They took my candle');
// let addExpensesLower = addExpenses.toLowerCase()
//
//
// console.log(typeof (money) + '\n', typeof (income) + '\n', typeof (deposit) + '\n');
// console.log(income.length);
// console.log('Период ' + period + ' месяцев.'+'\n\nЦель заработать ' + mission + ' рублей');
// console.log(addExpensesLower.split(','));
// console.log(budgetDay + ' Остаток от деления ' + (money % 30));
//


// lesson 6

let car = {
    model: 'mazda',
    year: 2006
};

let obj = new Object();

car.turbocharching = true;

obj.color = 'black';

car.style = obj;

car.ride = function (speed){
    console.log('Current speed is ' + speed);
}

console.log(car);

car.stop = stop;

car.ride(300);
car.stop();


function stop() {
    console.log('Car is on parking');
    
}


car['best place'] = 'Moscow';

let titleTrans = 'Transmision'
let bodyTrans = 'Automative';

car[titleTrans] = bodyTrans;


for (let key in car){
    console.log('Ключи ' + key +  ' значение ' + car[key]);
}
// Ключи model значение mazda
// Ключи year значение 2006
// Ключи turbocharching значение true
// Ключи style значение [object Object]
// Ключи ride значение function (speed)

console.log(Object.keys(car).length) // длина у объекта
delete car.year; // удаление объекта


let arr = [1, 2, 3, 4];

arr[0] = 'cat';
arr.push('dog');  // ставаит значение в конец массива
arr.unshift('mitino'); // ставит значение  в начало массива
arr.pop(); // убирает последий эллемент и возвращает его значение в pop
arr.unshift(); // убирает последнее значение и хранит
arr.sort(); // сортирует массив
arr.slice(1,3) // возвращает данные, помещая в массив
arr.splice(1, 2, 'old', 'lolipop'); // вставляет значения, забирая текующие. 1 - с какого индекса начинать заменять, 2 - сколько значений убрать
arr.join(); // возвращает строку. Через запятую по-умолчанию | |   .join(' - '); - будет разделять через тире
arr.reverse(); // возвращает массив в обратном направлении
arr.concat(['apple', 'home'], 'bear'); //объединяет массивы в один
delete arr[2]; // удаление значения по индексу



for (let i = 0; i < arr.length; i++){   // Возвращает значения
    console.log(arr[i]);
}
//8
// mitino
// cat
// lolipop
// old
// 2

arr.forEach(function (item, i, array){   // Возвращает значения и индексы
    console.log(item, i);
});
// mitino 0
// cat 1
// lolipop 2
// old 3
// 2 4


for(let item of arr){   // Возвращает значения
    console.log(item);
}
// mitino
// cat
// lolipop
// old
// 2

for(let item in arr){   // Возвращает индексы
    console.log(item);
}
// 0
// 1
// 2
// 3
// 4

console.log(arr);
console.log(arr.length);

