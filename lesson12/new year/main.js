let hello = document.querySelector('#hello'),
    day = document.querySelector('#day'),
    date = document.querySelector('#date'),
    newYear = document.querySelector('#new-year');

let curentDate = new Date();

function showHello() {
    let hour = curentDate.getHours();
    console.log(hour);
    if (hour >= 6 && hour <= 7) {
        hello.textContent = "Доброе утро!"
    } else if (hour >= 13 && hour <= 21) {
        hello.textContent = 'Добрый день!'
    } else {
        hello.textContent = 'Доброй ночи'
    }
}

showHello();

let week = curentDate.getDay();
switch (week) {
    case 0:
        day.textContent = 'Сегодня: воскресеье';
        break;
    case 1:
        day.textContent = 'Сегодня: Понедельник';
        break;
    case 2:
        day.textContent = 'Сегодня: Вторник';
        break;
    case 3:
        day.textContent = 'Сегодня: Среда';
        break;
    case 4:
        day.textContent = 'Сегодня: Четверг';
        break;
    case 5:
        day.textContent = 'Сегодня: Пятница';
        break;
    case 6:
        day.textContent = 'Сегодня: Воскресеье';
        break;
}

date.textContent = curentDate.toLocaleTimeString('en-US');

const yearDate = new Date('01 january 2020');
let timeRemaining = yearDate.getTime() - curentDate.getTime();
newYear.textContent = 'До Нового года осталось: ' + Math.floor(timeRemaining / 60 / 60 / 24 / 1000);


