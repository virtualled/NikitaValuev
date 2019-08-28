let arr = ['23', '14', '666', '104', '47', '1111', '377'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});

for (let i = 1; i <= 40; i++) {
    for (let j = 1; j < i; j++) {
        if (i % j == 0) break;
        console.log(j);
    }
    console.log(i + ' делится на 1 и ' + i);
}