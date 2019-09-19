window.addEventListener('DOMContentLoaded', function () {
   'use strict';

   //Timer
    function countTimer(deadline){
        let timerHours =document.querySelector('#timer-hours'),
            timerMinutes =document.querySelector('#timer-minutes'),
            timerSeconds =document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemain = (dateStop - dateNow) / 1000, // Делим на 1000, чтобы из миллисекунд получить секнды
                seconds = Math.floor(timeRemain % 60).toString(),
                minutes = Math.floor((timeRemain / 60) % 60).toString(),
                hours = Math.floor(timeRemain / 60/ 60 ).toString();
                return {timeRemain, hours, minutes, seconds};

        }


        function updateClock() {
            let time = getTimeRemaining();


            if(time.timeRemain > 0){
                addZero(timerHours, time.hours);
                addZero(timerMinutes, time.minutes);
                addZero(timerSeconds, time.seconds);
            }else {
                timerHours.textContent = '0';
                timerMinutes.textContent = '0';
                timerSeconds.textContent = '0';
            }

            function addZero(timerData, timeData) {
                if(String(timeData).length < 2){
                    timerData.textContent = '0' + timeData;

                }else{
                    timerData.textContent = timeData;
                }
            }

        }
        setInterval(updateClock, 1000);

    }

    countTimer('19 september 2019');

    const toggleMenu = () =>{

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = document.querySelectorAll('ul>li');


        const handlerMenu = ()=>{
            // if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
            //     menu.style.transform = `translate(100%)`;
            // } else{
            //     menu.style.transform = `translate(-100%)`;
            // }
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };
    toggleMenu();

//popUp

    const togglePopUp =() =>{
        const popUp =document.querySelector('.popup'),
            popUpBtn = document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close'),
            popUpContent = document.querySelector('.popup .popup-content')  ;
        let screenWidth = document.documentElement.clientWidth;

        let a = 0;
        let id1;
        let popUpAppear = function () {
            if (a <= 1){
                a += 0.1;
                popUp.style.opacity = a;
            }else{
                clearInterval(id1);

                a = 0;
            }
        };
        popUpBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popUp.style.display = 'block';

                 if(window.innerWidth > 417){
                     popUp.style.opacity = '0';
                     id1 = setInterval(popUpAppear, 100);
                 }else{
                     popUp.style.opacity = '1';
                 }

            });

        });

        popUpClose.addEventListener('click', ()=>{
            popUp.style.display = 'none';
            popUp.style.opacity = '0';



        });




    };

    togglePopUp();

});



// function countTimer(deadline){
//     let timerHours =document.querySelector('#timer-hours'),
//         timerMinutes =document.querySelector('#timer-minutes'),
//         timerSeconds =document.querySelector('#timer-seconds'),
//         dateStop = new Date(deadline).getTime(),
//         dateNow = new Date().getTime(),
//         timeRemain = (dateStop - dateNow) / 1000, // Делим на 1000, чтобы из миллисекунд получить секнды
//         seconds = Math.floor(timeRemain % 60),
//         minutes = Math.floor((timeRemain / 60) % 60),
//         hours = Math.floor(timeRemain / 60/ 60 );
//     // hours = Math.floor((timeRemain / 60/ 60 ) % 24),
//     // day = Math.floor(timeRemain / 60 /60 /24)
//
//
//     timerHours.textContent = hours;
//     timerMinutes.textContent = minutes;
//     timerSeconds.textContent = seconds;
//
//
//     console.log(hours, minutes, seconds);
//
//
// }
// //countTimer();
// setInterval(countTimer, 1000, '18 september 2019')
// });