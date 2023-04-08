const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minutes");
const secondEL = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");
const dayEL = document.getElementById("day");

const DaysofWeek = [
  "Sunday",
  "Monday",
  "TuesDay",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function UpClock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let DayOfWeek = DaysofWeek[now.getDay()];

  let ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEL.textContent = h;
  minuteEL.textContent = m;
  secondEL.textContent = s;
  ampmEL.textContent = ampm;
  dayEL.textContent = DayOfWeek;

  requestAnimationFrame(UpClock);
}

UpClock();
