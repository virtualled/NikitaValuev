'use strict';

let calcButton = document.getElementById('start'),
    cancelButton = document.getElementById('cancel'),
    plusButton1 = document.getElementsByTagName("button")[0],
    plusButton2 = document.getElementsByTagName("button")[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
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
    periodAmount = document.querySelector('.period-amount'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent =document.querySelector('.deposit-percent');




const AppData =  function() {

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

AppData.prototype.check =  () =>  {
    if (salaryAmount.value !== '' ){
        calcButton.removeAttribute('Disable');
    }
};

AppData.prototype.start = function() {

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
    this.getInfoDeposit();
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

AppData.prototype.addBlocks = function(item, button, className){     //функция для плюсиков

    let cloneExpensesItem = item[0].cloneNode(true);
    item[0].parentNode.insertBefore(cloneExpensesItem, button);
    item = document.querySelectorAll(className);
    if(item.length === 3){
        button.style.display = 'none';
    }
};


AppData.prototype.getExpenses = function(){
    expensesItem.forEach( (item) => {
        const itemExpenses = item.querySelector('.expenses-title').value;
        const cashExpenses = item.querySelector('.expenses-amount').value;

        if(itemExpenses !== '' && cashExpenses !== ''){
            this.expenses[itemExpenses] = cashExpenses;
        }
    })
};

AppData.prototype.getIncome = function(){
    incomeItem.forEach( (item) => {
        const itemIncome = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;

        if (itemIncome !== '' && cashIncome !== ''){
            this.income[itemIncome] = [cashIncome];
        }

    });

    for (let key in this.income){
        this.incomeMonth += +this.income[key]
    }
};

//Возможные расходы
AppData.prototype.getAddExpenses = function(){
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
        item = item.trim();
        if(item !== ''){
            this.addExpenses.push(item);
        }
    })
};
//Возможный доход
AppData.prototype.getAddIncome  = function(){
    additionalIncomeItem.forEach( (item) => {
        let itemValue = item.value.trim();
        if (item.value !== ''){
            this.addIncome.push(itemValue);
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

    this.budgetMonth =  this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
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


AppData.prototype.getInfoDeposit = function() {
    if (this.deposit){
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;

    }
};

AppData.prototype.calcSaveMoney = function() {
    return this.budgetMonth * periodSelect.value;
};

AppData.prototype.reset = function(){

    const inputTextData = document.querySelectorAll('.data input[type = text]'),
          resultInputAll = document.querySelectorAll('.result input[type = text]');

    inputTextData.forEach((elem) => {
        elem.value = '';
        elem.removeAttribute('disabled');
        periodAmount.innerHTML = periodSelect.value;


    });

    resultInputAll.forEach( (elem) => {

        elem.value = '';
    });

    for (let i = 1; incomeItem.length - 1 >= i; i++ ){
        incomeItem[i].remove();
        plusButton1.style.display = 'block';
    }
    for (let i = 1; incomeItem.length - 1 >= i; i++ ){
        incomeItem[i].remove();

    } plusButton1.style.display = 'block';

    calcButton.style.display = 'block';
    cancelButton.style.display = 'none'
};

AppData.prototype.addEventListeners = function(){

    calcButton.addEventListener('click', this.start.bind(this));
    cancelButton.addEventListener('click', this.reset.bind(this));

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
    plusButton1.addEventListener('click', () => {
        this.addBlocks(incomeItem, plusButton1, '.income-items');
    });
    plusButton2.addEventListener('click', ()=>{
        this.addBlocks(expensesItem, plusButton2, '.expenses-items');
    });
    depositCheck.addEventListener('change', () => {
        if(depositCheck.checked === true){
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change', function(){
                let selectIndex = this.options[this.selectedIndex].value;
                if(selectIndex === 'other'){
                    depositPercent.style.display = 'inline-block';
                   depositPercent.value = '';
                }else{
                    depositPercent.style.display = 'none';
                    depositPercent.value = selectIndex;
                }
            });
        }else{
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositAmount.value = '';
            this.deposit = false;
        }
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
    }else if (this.selector[0] === '#'){
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