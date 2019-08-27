let money = +prompt('Ваш ежемесячный доход?');
let income = '15';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у Вас депозит в банке?');
let mission = 21000;
let period = 12;
let budgetDay = money / 30;

let addExpensesLower = addExpenses.toLowerCase()

let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    question3 = prompt('Во сколько это обойдется?'),
    question4 = prompt('Во сколько это обойдется?');

let budgetMonth = money - (question3 + question4);
let missionQuantityMonths = mission / budgetMonth;

console.log(typeof (money) + '\n', typeof (income) + '\n', typeof (deposit) + '\n');
console.log(income.length);
console.log('Период ' + period + ' месяцев.'+'\n\nЦель заработать ' + mission + ' рублей');
console.log(addExpensesLower.split(','));
