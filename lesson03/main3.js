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


console.log(addExpensesLower.split(','));
console.log(typeof (money) + '\n', typeof (income) + '\n', typeof (deposit) + '\n');
console.log(Math.ceil(missionQuantityMonths));
console.log(budgetDay);
// console.log(income.length);
// console.log('Период ' + period + ' месяцев.'+'\n\nЦель заработать ' + mission + ' рублей');

if (budgetDay >= 800) {
    console.log("Высокий уровень дохода");
} else if (budgetDay >= 300 && budgetDay < 800) {
    console.log("Средний уровень дохода");
} else if (budgetDay >= 0 && budgetDay < 300) {
    console.log("Низкий уровень дохода");
} else if (budgetDay < 0) {
    console.log("Что то пошло не так");
}