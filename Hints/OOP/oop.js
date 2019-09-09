

let car = {
    doors: 4,
    turbochargind: false,
    ride: function () {
        console.log('Машина едет');
    }
};


let newCar = Object.create(car); // создали пустую копию объека car, но свойства car помещены в прототип newCar

newCar.model = 'mazda 3';
console.log(newCar.hasOwnProperty('model')); //проверяет, есть ли такое свойство у объекта. НЕ ВИДИТ прототипы свойств
// true
console.log(newCar.hasOwnProperty('doors')); //проверяет, есть ли такое свойство у объекта. НЕ ВИДИТ прототипы свойств
//false

console.log(newCar.__proto__.hasOwnProperty('model')); // проверяет, есть ли такое свойство у прототипа объека
// false
console.log(newCar.__proto__.hasOwnProperty('doors')); // проверяет, есть ли такое свойство у прототипа объека
//  true


console.log(car.isPrototypeOf(newCar));  // проверяет, является ли car прототипом для newCar
// true



// Конструкторы - обычная функции, которая имеет локальные переменные, но  используется для описания какой-то сущности.

function Car(model, color) {
    this.model = model;
    this.color = color;
}

Car.prototype.ride = function(){   //   Добавляем в прототип констпуктора функцию ride
    console.log('Есхать');
};

let car1 = new Car('Mazda', 'red');
console.log(car1);
// Любую функцию можно вызвать припомощи оператора new
//  new - пораждает новый пустой объек, хранит его в память
//        после вызывает фугкцию Car
//        прототип функции становится прототипом объекта
//        this будет являться ссылкой на новый объект this.model == car1 == model


// КЛАСС - обстрактная единица, описывающая объект

function Car(brand, model, options) {
    this.brand = brand;
    this.model = model;
    options = options || {};
    this.color = options.color;
    this.transmission = options.transmission;

};

Car.prototype.move = function(){
    console.log((this.brand + ' ' + this.model + ' поехала'))
};

console.dir(Car);
let car3 = new Car('mazda', '3', {color: 'blue'});
let car4 = new Car('BMW', 'X3', {ABS: true});

car3.move();
car4.move();


console.log(Car.prototype.isPrototypeOf(car3));
console.log(car4 instanceof Car); // // проверяет, является ли car4 прототипом для Car