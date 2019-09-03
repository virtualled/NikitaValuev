let money = 0,
    start = function () {

        do {
            money = prompt('Ваш ежемесячный доход?', 10000);

        } while (isNaN(money) || money === null || money === '');
    };
start();

appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    perioad: 3,
    budget: money,
    budgetDay:0,
    budgetMonth: 0,
    getExpensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Шоколадки, стиекрыБ сотки');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у Вас депозит в банке?');
    },
    getBudgetDay: function(){
        appData.budgetDay = Math.floor(budgetMonth/30);
        if (budgetDay > 0){
            return appData.budgetDay;
        }else {
            return console.log('Что-то пошло не так');
        }
    },

    getStatusIncome: function () {
        if (appData.budgetDay >= 800) {
            return ("Высокий уровень дохода");
        } else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
            return ("Средний уровень дохода");
        } else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
            return ("Низкий уровень дохода");
        } else if (appData.budgetDay < 0) {
            return ("Что то пошло не так");
        }
    },
    getExpensesMonth: function () {  //Считаем сумму издержек

        let sum = 0;

        for (let i = 0; i < 2; i++){
            if (i === 0){
                question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'House');
            }
            if (i === 1) {
                question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Food');
            }
            sum += +prompt('Во сколько это обойдется?', 3000);

            while (isNaN(sum) || sum === null || sum === '') {
                sum += +prompt('Во сколько это обойдется?', 3000);
                console.log(sum, typeof sum);
            }
        }
        return sum
    }
};

let question1,
    question2;



// let budgetDay = Math.floor(budgetMonth/30);





appData.expenses = appData.getExpensesMonth();


function getAccumulatedMonth() {  // Считаем накопления в месяц (доход - расход)

    let profit = money - appData.expenses;
    return profit;
};

let accumulatedMonth = getAccumulatedMonth();



function getTargetMonth() {   // считаем количество месяцев до цели

    let monthQuantity = Math.ceil(mission / accumulatedMonth);
    if (monthQuantity > 0){
        return console.log('Цель будет достигнута через: ' + monthQuantity + ' месяцев!');
    }else{
        return console.log('Цель не будет достигнута');
    }


}

appData.budgetMonth = money - appData.expenses;

let missionQuantityMonths = appData.mission / appData.budgetMonth;
let monthQuantity = Math.ceil(getTargetMonth());


console.log(getStatusIncome());
console.log('Накоплено за период: ' + accumulatedMonth);

//
