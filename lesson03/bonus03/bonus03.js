
let lang = 'ru';

if (lang == 'ru') console.log('Понедельник, Вторник, Среда, Четверг, Пятница');
if (lang == 'en') console.log('Monday, Tuesday, Wednesday, Thursday, Friday');

switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday');
        break;
    default:
        console.log('wrong language');
}

let arr = {
    'ru': ['Понедельник, Вторник, Среда, Четверг, Пятница'],
    'en': ['Monday, Tuesday, Wednesday, Thursday, Friday']
};
console.log(arr[lang]);






let namePerson = 'Андрей';

let position  = (namePerson === 'Андрей') ? 'Директор' :
                (namePerson === 'Максим') ? 'Преподаватель':
                'Студент';
console.log(position);