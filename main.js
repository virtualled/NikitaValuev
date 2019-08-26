let money = 25;
let income = '15';
let addExpenses = 'Аренда, Реклама, Транспорт';
let deposit = true;
let mission = 21000;
let period = 12;
let budgetDay = money / 30;

//alert('Need more money!');
//console.log('They took my candle');
let addExpensesLower = addExpenses.toLowerCase()


console.log(typeof (money) + '\n', typeof (income) + '\n', typeof (deposit) + '\n');
console.log(income.length);
console.log('Период ' + period + ' месяцев.'+'\n\nЦель заработать ' + mission + ' рублей');
console.log(addExpensesLower.split(','));
console.log(budgetDay + ' Остаток от деления ' + (money % 30));

