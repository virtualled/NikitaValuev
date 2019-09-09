'use strict';

let calcButton = document.getElementById('start'),
    cancelButton = document.getElementById('cancel'),
    plusButton1 = document.getElementsByTagName("button")[0],
    plusButton2 = document.getElementsByTagName("button")[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    checkBox = document.querySelector('#deposit-check'),
    budgetDayValue = document.querySelectorAll('.budget_day-value')[0],
    budgetMonthValue = document.querySelectorAll('.budget_month-value')[0],
    expensestMonthValue = document.querySelectorAll('.expenses_month-value')[0],
    accomulatedMonthValue = document.querySelectorAll('.accumulated_month-value')[0],
    additionalIncomeValue = document.querySelectorAll('.additional_income-value')[0],
    additionalExpansesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.querySelectorAll('.income_period-value')[0],
    inputAddIncome = document.querySelectorAll('.income_period-item'),
    targetMonthValue = document.querySelectorAll('.target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('input, .income-title'),
    expensTitle = document.querySelectorAll('input .expenses-title')[1],
    expensesItem = document.querySelectorAll('.expenses-items'),
    addExpItem = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount');








let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit:0,
    period: 0,
    budget: 0,
    budgetDay:0,
    budgetMonth: 0,
    expensesMonth: 0,

    start:  function () {

        if (salaryAmount.value === ''){
            return;

        }
        appData.budget = +salaryAmount.value; // записывам в бюджет введенное значение в инпут "Месячный доход", при помощи свойства  .value
        console.log(appData.incomeMonth);

        document.querySelectorAll('.data input[type=text]').forEach(function(elements){
            elements.setAttribute('disabled', true);
            // elements.value = '';
        });
        calcButton.setAttribute('style', 'display: none');
        cancelButton.setAttribute('style', 'display: inline');

        //appData.asking();

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
    },


    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.floor(appData.budgetDay);
        expensestMonthValue.value = appData.expensesMonth;
        additionalExpansesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', '); //Возможный доход
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcSaveMoney();
        periodAmount.textContent = appData.period;

        periodSelect.addEventListener('change', function () {

            incomePeriodValue.value = appData.calcSaveMoney();
        });

        console.log(appData.budget + appData.incomeMonth - appData.expensesMonth);
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

    addIncomesBlock: function(){
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, plusButton1);
        incomeItem = document.querySelectorAll('.income-items');
        if(incomeItem.length === 3){
            plusButton1.style.display = 'none';
        }
    },
    getIncome: function(){
        incomeItem.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if (itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = [cashIncome];
            }

        });

        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key]
        }
    },

    //Возможные расходы
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },
    //Возможный доход
    getAddIncome : function(){
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (item.value !== ''){
                appData.addIncome.push(itemValue);
            }
        })

    },

    asking: function() {




    },

    // Сумма расходов за месяц
    getExpensesMonth: function() {

        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];

        }
    },

    getBudget: function(){

        appData.budgetMonth =  appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    getTargetMonth: function() {

        return targetAmount.value / appData.budgetMonth;

        // if (monthQuantity > 0) {
        //     return ('Цель будет достигнута за: ' + monthQuantity + ' месяцев!');
        // } else {
        //     return ('Цель не будет достигнута');
        // }
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

plusButton1.addEventListener('click', appData.addIncomesBlock);

periodSelect.addEventListener('change', function(event){
    periodAmount.textContent = event.target.value;
    appData.period = event.target.value;
});



// for (let key in appData){
//     console.log('Наша программа включает в себя: ' + key + ' - ' + appData[key]);
// }

appData.getInfoDeposit();



console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));