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

            addZero(timerHours, time.hours);
            addZero(timerMinutes, time.minutes);
            addZero(timerSeconds, time.seconds);

            console.log(timerMinutes.textContent.length);
            if(time.timeRemain > 0){
                setInterval(updateClock, 1000);
            }else {
                timerHours.textContent = '0';
                timerMinutes.textContent = '0';
                timerSeconds.textContent = '0';
            }

            function addZero(timerData, timeData) {
                if(timerData.textContent.length < 2){
                    timerData.textContent = '0' + timeData;

                }else{
                    timerData.textContent = timeData;
                }
            }

        }

        updateClock();
    }

    countTimer('18 september 2019');

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