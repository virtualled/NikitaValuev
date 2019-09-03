let money = 0,
    start = function () {

        do {
            money = prompt('Ваш ежемесячный доход?', 10000);

        } while (isNaN(money) || money === null || money === '');
    };
    start();



let income = '15';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у Вас депозит в банке?');
let mission = 21000;
let period = 12;


let addExpensesLower = addExpenses.toLowerCase();

let question1,
    question2;



// let budgetDay = Math.floor(budgetMonth/30);
function getBudgetDay(){
    let budgetDay = Math.floor(budgetMonth/30);
    if (budgetDay > 0){
        return budgetDay;
    }else {
        return console.log('Что-то пошло не так');
    }
}





function showTypeof(data) {  // выводим тип данных

    console.log(data, typeof (data));
}

function getStatusIncome() {
    if (budgetDay >= 800) {
        return ("Высокий уровень дохода");
    } else if (budgetDay >= 300 && budgetDay < 800) {
        return ("Средний уровень дохода");
    } else if (budgetDay >= 0 && budgetDay < 300) {
        return ("Низкий уровень дохода");
    } else if (budgetDay < 0) {
        return ("Что то пошло не так");
    }
}

function getExpensesMonth() {  //Считаем сумму издержек

    let sum = 0;

    for (let i = 0; i < 2; i++){
        if (i === 0){
            question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'House');
        }
        if (i === 1) {
            question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Food');
        }
        sum += +prompt('Во сколько это обойдется?', 3000);

        while (isNaN(sum) || sum === null || sum === '') {
            sum += +prompt('Во сколько это обойдется?', 3000);
            console.log(sum, typeof sum);
        }
    }
    return sum
}
let expenses = getExpensesMonth();


function getAccumulatedMonth() {  // Считаем накопления в месяц (доход - расход)

    let profit = money - expenses;
    return profit;
};

let accumulatedMonth = getAccumulatedMonth();



function getTargetMonth() {   // считаем количество месяцев до цели

    let monthQuantity = Math.ceil(mission / accumulatedMonth);
    if (monthQuantity > 0){
        return console.log('Цель будет достигнута через: ' + monthQuantity + ' месяцев!');
    }else{
        return console.log('Цель не будет достигнута');
    }


}

let budgetMonth = money - expenses;
let budgetDay = getBudgetDay();
let missionQuantityMonths = mission / budgetMonth;
let monthQuantity = Math.ceil(getTargetMonth());

showTypeof(money);
showTypeof(income);
showTypeof(deposit);
console.log(getStatusIncome());
console.log('Накоплено за период: ' + accumulatedMonth);

//
