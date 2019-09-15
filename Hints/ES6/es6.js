
// преобразование в массив неизвестных данных
function    test(...arr){

    console.log(arr);

}

test('red', 34, 22, 'black', [], true, 9);

function    test1(a, b, c, ...arr){

    console.log(arr);
    console.log(a,b,c);

}

test1('red', 34, 22, 'black', [], true, 9);


//получение данных из массива
const  mass = ['red', 34, 22 ];
const  mass2 = ['black', true ];

function    test2(a, b, c,d , e){

    console.log(a,b,c);
    console.log(d,e);

}
test2(...mass, ...mass2);


// объединить массивы

const mass3 = [...mass, ...mass2];

// преобразовние элементов дом в массив

const allImg = document.querySelectorAll('img');

const newImg = [...allImg];

// деструктуризация объекта
const car = {
    brand: 'mazda',
    model: 3,
    color: 'red'
};

//раньше

const brand = car.brand;
const model = car.model;
const color = car.color;

// сейчас
const {brand, model, color} = car;

const car = {
    brand: 'mazda',
    model: 3,
    color: 'red'б
    options: {
        abs: true,
        doors: 2
    }
};
const {options: {abs: absCar, doors: doorsCar}} = car;
const {options: {abs: absCar, doors = 4} = {}} = car; // задать по-умолчанию



//

const mazda = {
    model: 3,
    year: 2006
};

//назначения свойства для объекта
Object.defineProperty(mazda, 'color',{
    value: 'red',
    writable: false,
    configurable: false,
    enumerable: false
});

const car = {
    model: 3,
    year: 2006
};

Object.defineProperty(car, 'fullTitle'){
    get: function(){
        return this.brand + '' + this.model;
    }
});




