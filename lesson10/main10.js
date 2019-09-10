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




const AppData = function () {

    this.budget = 0;
    this.budgetDay =0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit =0;
    this.addExpenses = [];
    this.period = 1;

};

AppData.prototype.check = function (){
    if (salaryAmount.value !== '' ){
        calcButton.removeAttribute('Disable');

    }
};

AppData.prototype.start = function () {

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



    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();

};

AppData.prototype.showResult = function(){
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


};

AppData.prototype.addExpensesBlock = function(){     //функция для плюсиков

    //  let expensesItem = document.querySelectorAll('.expenses-items'); // блок с двуми инпутами
    console.log(expensesItem.parentNode); // выявляем родителя для expenses-items
    let cloneExpensesItem = expensesItem[0].cloneNode(true);
    expensesItem[0].parentNode.insertBefore(cloneExpensesItem, plusButton2);
    expensesItem = document.querySelectorAll('.expenses-items');
    if(expensesItem.length === 3){
        plusButton2.style.display = 'none';
    }
};

AppData.prototype.getExpenses = function(){
    expensesItem.forEach(function (item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;

        if(itemExpenses !== '' && cashExpenses !== ''){
            appData.expenses[itemExpenses] = cashExpenses;
        }
    })
};

AppData.prototype.addIncomesBlock = function(){
    let cloneIncomeItem = incomeItem[0].cloneNode(true);
    incomeItem[0].parentNode.insertBefore(cloneIncomeItem, plusButton1);
    incomeItem = document.querySelectorAll('.income-items');
    if(incomeItem.length === 3){
        plusButton1.style.display = 'none';
    }
};
AppData.prototype.getIncome = function(){
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
};

//Возможные расходы
AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            appData.addExpenses.push(item);
        }
    })
};
//Возможный доход
AppData.prototype.getAddIncome  = function(){
    additionalIncomeItem.forEach(function (item) {
        let itemValue = item.value.trim();
        if (item.value !== ''){
            appData.addIncome.push(itemValue);
        }
    })

};


// Сумма расходов за месяц
AppData.prototype.getExpensesMonth = function() {

    for (let key in this.expenses){
        this.expensesMonth += +this.expenses[key];

    }
};

AppData.prototype.getBudget = function(){

    this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function() {

    return targetAmount.value / appData.budgetMonth;

    // if (monthQuantity > 0) {
    //     return ('Цель будет достигнута за: ' + monthQuantity + ' месяцев!');
    // } else {
    //     return ('Цель не будет достигнута');
    // }
};


AppData.prototype.getInfoDeposit = function () {
    if (this.deposit){
        do {
            this.percentDeposit = prompt('какой годовой процент?', '10');

        }while (isNaN(this.percentDeposit) || this.percentDeposit === '' || this.percentDeposit === null);

        do {
            appData.moneyDeposit = prompt('Какая сумма заложена?', 1000);
        }while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);
    }
};
AppData.prototype.calcSaveMoney = function () {
    return appData.budgetMonth * appData.period;
};

AppData.prototype.reset = function () {

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
};

AppData.prototype.addEventListeners = function (){

    calcButton.addEventListener('click', this.start.bind(this));
    cancelButton.addEventListener('click', this.reset.bind(this));
    plusButton2.addEventListener('click', this.addExpensesBlock);
    plusButton1.addEventListener('click', this.addIncomesBlock);

    periodSelect.addEventListener('change', function(event){
        periodAmount.textContent = event.target.value;
        this.period = event.target.value;
    });

};


const DomElement = function () {
    this.selector = 0;
    this.height = 0 ;
    this.wigth = 0;
    this.bg = 0;
    this.fontSize = 0;


};

DomElement.prototype.creatElement = function () {
    if (selector.contains('.')){

    }
}
const   appData = new AppData();
appData.addEventListeners();

console.log(appData);




// calcButton.addEventListener('click', appData.start.bind(appData));
// cancelButton.addEventListener('click', appData.reset.bind(appData));
// plusButton2.addEventListener('click', appData.addExpensesBlock);
// plusButton1.addEventListener('click', appData.addIncomesBlock);
//
// periodSelect.addEventListener('change', function(event){
//      periodAmount.textContent = event.target.value;
//      appData.period = event.target.value;
// });
//
//
// let addExp = [];
// for (let i = 0; i < appData.addExpenses.length; i++){
//     let element = appData.addExpenses[i].trim();
//     element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
//     addExp.push(element);
// }
//
// console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));