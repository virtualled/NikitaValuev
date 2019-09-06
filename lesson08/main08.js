'use strict';

let calcButton = document.getElementById('start'),
    plusButton1 = document.getElementsByTagName("button")[0],
    plusButton2 = document.getElementsByTagName("button")[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    checkBox = document.querySelector('#deposit-check'),
    budgetDayValue = document.querySelectorAll('budget_day-value')[0],
    budgetMonthValue = document.querySelectorAll('budget_month-value')[0],
    expensestMonthValue = document.querySelectorAll('expenses_month-value')[0],
    accomulatedMonthValue = document.querySelectorAll('accumulated_month-value')[0],
    additionalIncomeValue = document.querySelectorAll('additional_income-value')[0],
    additionalExpansesValue = document.querySelectorAll('additional_expanses-value')[0],
    incomePeriodValue = document.querySelectorAll('income_period-value')[0],
    inputAddIncome = document.querySelectorAll('.income_period-item'),
    targetMonthValue = document.querySelectorAll('target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensTitle = document.querySelectorAll('.expenses-title')[1],
    expensesItem = document.querySelectorAll('.expenses-items'),
    addExpItem = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('additional_expenses-item');


        /// 20.30 остановился








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
    budget: 0,
    budgetDay:0,
    budgetMonth: 0,
    expensesMonth: 0,

    start:  function () {

        if (salaryAmount.value === ''){
            alert('Месячный доход должен быть заполнен');
            return; // зачем тут ретерн? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }
        appData.budget = salaryAmount.value; // записывам в бюджет введенное значение в инпут "Месячный доход", при помощи свойства  .value
        console.log("salary:", salaryAmount.value);
        //appData.asking();
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getBudget();
        appData.getAddExpenses();
        appData.showResult();
    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensestMonthValue.value = appData.expensesMonth;
        additionalExpansesValue.value = appData.addExpenses.join(', ');

    },

    addExpensesBlock: function(){     //функция для плюсиков

      //  let expensesItem = document.querySelectorAll('.expenses-items'); // блок с двуми инпутами
        console.log(expensesItem.parentNode); // выявляем родителя для expenses-items
        let cloneExpensesItem = expensesItem[0].cloneNode(true);
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem, plusButton2);
        expensesItem = document.querySelectorAll('.expenses-items');
        if(expensesItem.length === 3){
            plusButton2.style.display = 'none';
        }
    },

    getExpenses: function(){
        expensesItem.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        })
    },

    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },

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

};  // конец объекта


//Привязываем кнопку рассчитать
calcButton.addEventListener('click', appData.start);

//Привязываем кнопку "+" для расходов
plusButton2.addEventListener('click', appData.addExpensesBlock);




// for (let key in appData){
//     console.log('Наша программа включает в себя: ' + key + ' - ' + appData[key]);
// }

appData.getInfoDeposit();



console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));