class Validator{
    constructor({selector, pattern, method}){
        this.form = document.querySelector(selector); // input и всякое такое
        this.pattern = pattern; //шаблоны
        this.method = method;  // настройки, какие поля должны валидироваться
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' &&
                item.type !== 'button';
        });
    }

    init(){ //Метод запуска валидации
        this.applyStyle(); // запускаем метод стилей
        this.elementsForm.forEach((elem) => elem.addEventListener('change', this.checkIt.bind(this)));

        console.log(this.form.elements)
    }

    isValid(elem){
        return true;
    }

    checkIt(event){
        const target = event.target;

        if (this.isValid(target)){
            this.showSuccess(target);
            console.log('suc');
        }else {
            this.showError(target);
            console.log('err');
        }
    }

    showError(elem){
        elem.classList.remove('success');
        elem.classList.add('error');
        if(elem.nextElementSibling.classList.contains('validator-error')){
            return;
        }
        const divError = document.createElement('div');
        divError.textContent = 'Ошибка в этом поле';
        divError.classList.add('validator-error');
        elem.insertAdjacentElement("afterend", divError); //вставляет после выбранного элемента
    }

    showSuccess(elem){
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSibling.classList.contains('validator-error')){
            elem.nextElementSibling.remove();
        }

    }

    applyStyle(){
        const style = document.createElement('style'); //создаем разметки style
        style.textContent = `
            input.success{
            border: 2px solid green
            }
            
            input.error{
            border: 2px solid red
            }
            .validator-error{
                font-size: 14;
                color: red;
            }
        `;

        document.head.appendChild(style); // вставляем стили в шапку сайта
    }
}









const valid = new Validator({
    selector: '#form1',
    pattern: {},
    method: {}
});

valid.init(); //запуск валидатора