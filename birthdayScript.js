const uiDay = document.querySelector(".number1");
const uiHour = document.querySelector(".number2");
const uiMin = document.querySelector(".number3");
const uiSec = document.querySelector(".number4");

const countDown = () => {
  let curretnYear = 2022;
  const countDate = new Date(`October 8, ${curretnYear} 00:00:00`).getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const remainingDay = Math.floor(gap / day);
  const remainingHour = Math.floor((gap % day) / hour);
  const remainingMin = Math.floor((gap % hour) / min);
  const remainingSec = Math.floor((gap % min) / sec);

  if (gap >= 0) {
    uiDay.textContent = remainingDay;
    uiHour.textContent = remainingHour;
    uiMin.textContent = remainingMin;
    uiSec.textContent = remainingSec;
  } 
  else{
    uiDay.textContent = "Happy";
    uiHour.textContent = "Birth";
    uiMin.textContent = "Day";
    uiSec.textContent = "My LOVE ❤";
  }
};
setInterval(countDown, 1000);