function foo(a) {
   const b =  a.trim();
    if (typeof b !== 'string') {
        console.log('Введены не строковые данные!')
    }else
        if (b.length > 30){
            let c = b.substr(0, 30) + '...';
            console.log(c);
        }

}
foo('    dcdcdcdc wdjqowjd;oijqw;dj;qwjdio;qwjd;jqwdjq;oiwjd    ');
