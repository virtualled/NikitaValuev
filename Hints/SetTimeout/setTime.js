setTimeout(function () {   // Функция выщовется через 3 секунды
    console.log('Hello')
}, 3000);

setInterval(function () {  //Каждые две секунды вызывается функция
    console.log('Bye');
}, 2000);





let idInterval = setInterval(function () {  //Каждые две секунды вызывается функция
    console.log('Bye');
}, 2000);

setTimeout(function () {
    clearInterval(idInterval);      //Останавливает интервал
}, 5000);



let getMessage = function (name) {
    console.log('hi' + name);
};

let id2 = setInterval(getMessage, 2000, 'Василий'); //Третим параметром передает значение
clearInterval(id2);


let id3 = setTimeout(getMessage, 2000, 'Иван'); //Третим параметром передает значение
clearTimeout(id3);



let wormDown = function () {
    count++;
    worm.style.top = count + 'px';
    if(count < 350){
        setTimeout(wormDown, 10);
    }
};

wormDown()


let wormDown = function () {
    count++;
    if(count < 350){

        worm.style.top = count + 'px';
        airplane.style.top = count * 2  + 'px';
    }else if ( count < 500){
        airplane.style.top = count * 2  + 'px';
    }else{
        clearInterval(id4)
    }
};

let id4 = setInterval(wormDown, 10);


//  requestanimationframe

let flyInterval ;

let flyAnimate = function () {
    flyInterval = requestAnimationFrame(flyAnimate);
    count++;
    if(count < 350){

        worm.style.top = count + 'px';
        airplane.style.top = count * 2  + 'px';
    }else if ( count < 500){
        airplane.style.top = count * 2  + 'px';
    }else{
        cancelAnimationFrame(flyAnimate());
    }
};

flyInterval = requestAnimationFrame(flyAnimate);



let date = new Date('10 march 2991');
let date = new Date(2981, 2, 10,43,12,15);


date.getFullYear() // Год
date.getMonth() + 1 // Месяц
date.getDate()  // День месяца
date.getDay()   //День недели   начинается с 0 - воскресенье
date.getHours()  // Часы
date.getMinutes()   //Минуты
date.getSeconds()   //Секунды

date.setFullYear(2000,12,13,);
date.setDate(9)
date.setMonth(2)



let date2 = new Date(); // Current date
date2.setDate(date.getDate() + 100);    // К текущей дате прибавляем 100 дней и получаем, какое это будет число


date2.toTimeString()
date2.toDateString()
date2.toLocaleTimeString('en')
date2.toLocaleDateString('ru')
date.toISOString().substr(0,10);

date.now(); // время с момента