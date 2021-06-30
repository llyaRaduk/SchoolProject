

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
    let hoursFromDate = new Date().getHours();
    let minutesFromDate = new Date().getMinutes();
    let checkDateTime = parseInt(hoursFromDate.toString() + minutesFromDate.toString());
    let arrayTegsClock = document.querySelectorAll('.timeToLessons');
    let arrayTegsLeftTime = document.querySelectorAll('.leftTime_item');
    for (let i = 0; i < arrayTegsClock.length; i++) {
        let Time = arrayTegsClock[i].innerHTML;
        let firstHours = Time.slice(0, 2);
        let firstMinutes = Time.slice(3, 5);
        let firstCheckTime = parseInt(firstHours + firstMinutes);
        let lastHours = Time.slice(6, 8);
        let lastMinutes = Time.slice(9, 11);
        let lastCheckTime = parseInt(lastHours + lastMinutes);
        if (checkDateTime >= firstCheckTime) {
            if (checkDateTime<lastCheckTime) {
                for (let i = 0; i < arrayTegsClock.length; i++) {
                    arrayTegsClock[i].parentNode.classList.remove('activeClock')
                    arrayTegsLeftTime[i].classList.remove('leftTime_item_active')
                }
                arrayTegsLeftTime[i].innerHTML= "ост. "+(60-minutesFromDate+parseInt(lastMinutes)).toString()+" мин";
                arrayTegsClock[i].parentNode.classList.add('activeClock');
                arrayTegsLeftTime[i].classList.add('leftTime_item_active');

            }
            if (checkDateTime==lastCheckTime) {
                for (let i = 0; i < arrayTegsClock.length; i++) {
                    arrayTegsClock[i].parentNode.classList.remove('activeClock')
                    arrayTegsLeftTime[i].classList.remove('leftTime_item_active')
                }
            }
        }
        
    }
}

setInterval(
    () => leftTime(),
    2000
);




