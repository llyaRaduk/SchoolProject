

document.querySelector('.menu__box').onclick = function (event) {

    event.target.nextSibling.nextSibling.firstChild.nextSibling.classList.toggle('open');

};





let clock = document.querySelector('.date_clock');

function getCurrentTimeString() {
    return new Date().toTimeString().replace(/ .*/, '');
}

setInterval(
    () => clock.innerHTML = getCurrentTimeString(),
    1000

);

function leftTime() {
    let fullTimeFromDate = new Date().toTimeString().replace(/ .*/, '');
    let hoursFromDate = parseInt(new Date().getHours());
    let minutesFromDate = parseInt(new Date().getMinutes());
    let arrayTegsClock = document.querySelectorAll('.timeToLessons');
    for (let i = 0; i < arrayTegsClock.length; i++){
        let Time = arrayTegsClock[i].innerHTML;
        let hours = parseInt(Time.slice(0,2));
        let minutes = parseInt(Time.slice(3,5));
        if(hours==hoursFromDate){
            arrayTegsClock[i].parentNode.classList.add('activeClock') ;
        }
    }
}

setInterval(
    () => leftTime(),
    10000
);




