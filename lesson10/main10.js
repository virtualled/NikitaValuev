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
    this.budget = +salaryAmount.value; // записывам в бюджет введенное значение в инпут "Месячный доход", при помощи свойства  .value


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

    periodSelect.addEventListener('change', () => {

        incomePeriodValue.value = this.calcSaveMoney();

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
            this.expenses[itemExpenses] = cashExpenses;
        }
    }, this)
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
            this.income[itemIncome] = [cashIncome];
        }

    }, this);

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
            this.addExpenses.push(item);
        }
    }, this)
};
//Возможный доход
AppData.prototype.getAddIncome  = function(){
    additionalIncomeItem.forEach(function (item) {
        let itemValue = item.value.trim();
        if (item.value !== ''){
            this.addIncome.push(itemValue);
        }
    }, this)

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

    return targetAmount.value / this.budgetMonth;

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
            this.moneyDeposit = prompt('Какая сумма заложена?', 1000);
        }while (isNaN(this.moneyDeposit) || this.moneyDeposit === '' || this.moneyDeposit === null);
    }
};
AppData.prototype.calcSaveMoney = function () {
    return this.budgetMonth * this.periodSelect.value;
};

AppData.prototype.reset = function(){

    let inputTextData = document.querySelectorAll('.data input[type = text]'),
        resultInputAll = document.querySelectorAll('.result input[type = text]');

    inputTextData.forEach(function(elem){
        elem.value = '';
        elem.removeAttribute('disabled');
        periodAmount.innerHTML = periodSelect.value;
p

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
    calcButton.style.display = 'block';
    cancelButton.style.display = 'none'
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
    salaryAmount.addEventListener('input', function(){
        if(this.value !== '')
            calcButton.removeAttribute('disabled');
        else
            calcButton.setAttribute('disabled', true);
    });

};


const DomElement = function (options, text) {
    this.selector = options.selector;
    this.height = options.height;
    this.width = options.width;
    this.bg = options.bg;
    this.fontSize = options.fontSize;
    this.text = text;


};

DomElement.prototype.creatElement = function () {
    if (this.selector[0] === '.' ){
        const div = document.createElement('div');
        div.style.cssText = 'height:' + this.height +'; width:' + this.width + ';background:' + this.bg + '; font-size:' + this.fontSize;
        div.textContent = this.text;
        document.body.appendChild(div);
    }if (this.selector[0] === '#'){
        const p = document.createElement('p');
        p.style.cssText = 'height:' + this.height +'; width:' + this.width + ';background:' + this.bg + '; font-size:' + this.fontSize;
        p.textContent = this.text;
        document.body.appendChild(p);
            }
};
const   appData = new AppData();

appData.addEventListeners();

const squareOptions = {
    selector: '.yellow',
    height: '100px',
    width: '300px',
    bg: 'yellow',
    fontSize: 45
};

const squareYellow = new DomElement(squareOptions, 'Button');
squareYellow.creatElement();
console.log(appData);





// console.log(appData.addExpenses.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '));