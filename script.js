const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");

const countDown = () => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countTo = new Date("November 30, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countTo - now;

  const dayText = Math.floor(gap / day);
  const hourText = Math.floor((gap % day) / hour);
  const minuteText = Math.floor((gap % hour) / minute);
  const secondText = Math.floor((gap % minute) / second);

  days.innerHTML = dayText;
  hours.innerHTML = hourText;
  minutes.innerHTML = minuteText;
  seconds.innerHTML = secondText;
};

countDown();

setInterval(countDown, 1000);

const menu = document.querySelector(".menu");
const navItems = document.querySelector(".list");
console.log(menu);
console.log(navItems);

menu.addEventListener("click", function () {
  navItems.classList.toggle("toggle");
});
