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

    countTimer('01 january 2020');

    const toggleMenu = () =>{

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = document.querySelectorAll('ul>li');


        body.addEventListener('click', (event)=>{
            let target = event.target;
            console.log(target);
            if (target.classList.contains('close-btn') || target.tagName === 'A'|| target.closest('.menu') || !target.closest('.active-menu')){
                menu.classList.toggle('active-menu');
            }
        });


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


        popUp.addEventListener('click', (event) =>{
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popUp.style.display = 'none';
            }else{
                target = target.closest('.popup-content');
                if (!target){
                    popUp.style.display = 'none';
                }

            }

        });




    };

    togglePopUp();

    //tabs

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = document.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }

        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');

                if(target){
                    tab.forEach((item, i ) =>{
                        if(target === item){
                            toggleTabContent(i);
                        }
                    })

                }


        })

        // tabHeader.addEventListener('click', (event) => {
        //     let target = event.target;
        //     while (target !== tabHeader){
        //         if(target.classList.contains('service-header-tab')){
        //             tab.forEach((item, i ) =>{
        //                 if(target === item){
        //                     toggleTabContent(i);
        //                 }
        //             })
        //             return;
        //         }
        //         target = target.parentNode;
        //     }
        // })
    };
    tabs();

    //slider

    const slider = () =>{
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0;
        let interval;

        const addDots = () =>{
            let newDot = document.createElement('li');
            newDot.classList.add('dot');
            let portfolioDots = document.querySelector('.portfolio-dots');

            for(let i = 0; i < slide.length; i++){
                let newDot = document.createElement('li');
                newDot.classList.add('dot');
                if( i === 0){
                    newDot.classList.add('dot-active');
                }
                portfolioDots.appendChild(newDot);
            }

        };
        addDots();

        const dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) =>{
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) =>{
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () =>{
            prevSlide(dot, currentSlide, 'dot-active');
            prevSlide(slide, currentSlide,'portfolio-item-active');
            currentSlide++;
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide,'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');


        };

        const startSlide = (time = 3000) =>{
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = ()=> {
            clearInterval(interval);

        };

        slider.addEventListener('click', (event) =>{
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')){
                return;
            }

            prevSlide(dot, currentSlide, 'dot-active');
            prevSlide(slide, currentSlide,'portfolio-item-active');


            if(target.matches('#arrow-right')){
                currentSlide++;
            }else if(target.matches('#arrow-left')){
                currentSlide--;
            }else if(target.matches('.dot')){
                dot.forEach((elem,index) =>{
                    if(elem === target){
                        currentSlide = index;
                    }
                })
            }

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if (currentSlide <0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide,'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) =>{
            if(event.target.matches('.portfolio-btn') ||  event.target.matches('.dot')){
               stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) =>{
            if(event.target.matches('.portfolio-btn') ||  event.target.matches('.dot')){
                startSlide();
            }
        });

        startSlide(1000);
    };
    slider();



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