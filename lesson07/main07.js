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
    percentDeposit: 0,
    moneyDeposit:0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay:0,
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function() {

        if (confirm('Есть ли у вас дополнительный заработок?')){
            let itemIncome,
                cashIncome;
            do{
                itemIncome = prompt('Какой у вас дополнительный заработок? ', 'Таксую');
            }while (!isNaN(itemIncome) || itemIncome === null || itemIncome === '');



            //Проверяем ввод числа на дополнительный заработок
            do{
                cashIncome = +prompt('Сколько вы на этом зарабатываете?', 10000);
            }while (isNaN(cashIncome) || cashIncome === null || cashIncome === '');

            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'шоколадки, стикеры, сотки');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у Вас депозит в банке?');

        let question1,
            question2;

        for (let i = 0; i < 2; i++) {

            do{
                question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'home');
            }while (!isNaN(question1) || question1 === '' || question1 === null);

            do {
                question2 = +prompt('Во сколько это обойдется?', 444);
            }

            while(isNaN(question2) || question2 === '' || question2 === null);

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
    },

    getInfoDeposit: function () {
        if (appData.deposit){
            do {
                appData.percentDeposit = prompt('какой годовой процент?', '10');

            }while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);

            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 1000);
            }while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
        }
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
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

appData.getInfoDeposit();



console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));