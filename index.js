const monthsDiv = document.getElementById('months');
const daysDiv = document.getElementById('days');
const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('minutes');

const olympicsDate = new Date("July 26, 2024 00:00:00").getTime();

const setCounterText = () => {
    console.log("counter sett");
    const now = new Date().getTime();
    const distance = olympicsDate - now;
  
    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    monthsDiv.innerText = months;
    daysDiv.innerText = days;
    hoursDiv.innerText = hours;
    minutesDiv.innerText = minutes;
  
    const timerText = `${months} Months ${days} Days ${hours} Hours ${minutes} Minutes`;
  
    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Paris Olympics 2024 has started!";
    }
}

document.addEventListener('DOMContentLoaded', setCounterText);

const countdown = setInterval(function() {
    setCounterText();
}, 1000);