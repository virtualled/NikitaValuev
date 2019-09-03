'use strict'

let money,

    start = function () {

        do {
            money = prompt('Ваш ежемесячный доход?', 10000);

        } while (isNaN(money) || money === null || money === '');
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay:0,
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Шоколадки, стиекрыБ сотки');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у Вас депозит в банке?');

        let question1,
            question2;

        for (let i = 0; i < 2; i++) {

            question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');

            do {
                question2 = +prompt('Во сколько это обойдется?');
            }

            while(isNaN(question2) || question2 == '' || question2 === null);

            appData.expenses[question1] = +question2;
        }
    },

    // Сумма расходов за месяц
    getExpensesMonth: function() {

        for (let key in appData.expenses){
            appData.expensesMonth += appData.expenses[key];

        }
    },

    getBudget: function(){

        appData.budgetMonth =  appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function() {

        let monthQuantity =  Math.floor(appData.mission / appData.budgetMonth);

        if (monthQuantity > 0) {
            return ('Цель будет достигнута за: ' + monthQuantity + ' месяцев!');
        } else {
            return ('Цель не будет достигнута');
        }
    },

    getStatusIncome: function () {
        if (appData.budgetDay >= 800) {
            return ("Высокий уровень дохода");
        } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
            return ("Средний уровень дохода");
        } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
            return ("Низкий уровень дохода");
        } else {
            return ("Что то пошло не так");
        }
    }

};
appData.asking();

appData.getExpensesMonth();
console.log(appData.expensesMonth);
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

for (let key in appData){
    console.log('Наша программа включает в себя: ' + key + ' - ' + appData[key]);
}