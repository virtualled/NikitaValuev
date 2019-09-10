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
    incomeTitle = document.querySelector('.income-title'),
    expensTitle = document.querySelectorAll('.expenses-title')[1],
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
    period: 1,
    budget: 0,
    budgetDay:0,
    budgetMonth: 0,
    expensesMonth: 0,

    check: function (){
        if (salaryAmount.value !== '' ){
            calcButton.removeAttribute('Disable');

        }
    },

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
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = Math.floor(this.budgetDay);
        expensestMonthValue.value = this.expensesMonth;
        additionalExpansesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', '); //Возможный доход
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcSaveMoney();
        periodAmount.textContent = this.period;

        periodSelect.addEventListener('change', function () {

            incomePeriodValue.value = appData.calcSaveMoney();
        });


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

        for (let key in this.income){
            this.incomeMonth += +this.income[key]
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


    // Сумма расходов за месяц
    getExpensesMonth: function() {

        for (let key in this.expenses){
            this.expensesMonth += +this.expenses[key];

        }
    },

    getBudget: function(){

        this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },

    getTargetMonth: function() {

        return targetAmount.value / appData.budgetMonth;

        // if (monthQuantity > 0) {
        //     return ('Цель будет достигнута за: ' + monthQuantity + ' месяцев!');
        // } else {
        //     return ('Цель не будет достигнута');
        // }
    },


    getInfoDeposit: function () {
        if (this.deposit){
            do {
                this.percentDeposit = prompt('какой годовой процент?', '10');

            }while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null);

            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 1000);
            }while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);
        }
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
    },
    
    reset: function () {
        
        let inputTextData = document.querySelectorAll('.data input[type = text]'),
            resultInputAll = document.querySelectorAll('.result input[type = text]');

        inputTextData.forEach(function(elem){
            elem.value = '';
            elem.removeAttribute('disabled');
            periodAmount.innerHTML = periodSelect.value;


        });

        resultInputAll.forEach(function (elem) {

            elem.value = '';
        });

        for (let i = 1; 1 < incomeItem.length; i++ ){
            incomeItem[i].parentNode.removeChild(incomeItem[i]);
            plusButton1.style.display = 'block';
        }
        for (let i = 1; 1 < expensesItem.length; i++){
            expensesItem[i].parentNode.removeChild(expensesItem[i]);
            plusButton2.style.display = 'block';
        }
    }

};  // конец объекта

calcButton.addEventListener('click', appData.start.bind(appData));
cancelButton.addEventListener('click', appData.reset.bind(appData));

//Привязываем кнопку рассчитать



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