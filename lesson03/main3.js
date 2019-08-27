let money = +prompt('Ваш ежемесячный доход?');
let income = '15';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у Вас депозит в банке?');
let mission = 21000;
let period = 12;


let addExpensesLower = addExpenses.toLowerCase()

let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    question3 = +prompt('Во сколько это обойдется?'),
    question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    question4 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - (question3 + question4);
let budgetDay = Math.floor(budgetMonth/30);
let missionQuantityMonths = mission / budgetMonth;




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

    let expenses = question4 + question3;
    return expenses
}
let expenses = getExpensesMonth();

function getAccumulatedMonth() {  // Считаем накопления в месяц (доход - расход)

    let profit = money - expenses;
    return profit;
};

let accumulatedMonth = getAccumulatedMonth();



function getTargetMonth() {   // считаем количество месяцев до цели

    let monthQuantity = mission / accumulatedMonth;
    return monthQuantity;
    
}
let monthQuantity = Math.ceil(getTargetMonth());

showTypeof(money);
showTypeof(income);
showTypeof(deposit);
console.log(getStatusIncome());
console.log('Накоплено за период: ' + accumulatedMonth);
console.log('Цель будет достигнута через: ' + monthQuantity + ' месяцев!');

