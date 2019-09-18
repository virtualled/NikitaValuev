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