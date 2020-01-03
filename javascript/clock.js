function parseDateTime(data) {
  return (data < 10) ? ("0" + data) : data;
};

function parseHours(hrs) {
  hrs = (hrs > 12) ? hrs - 12 : hrs;
  hrs = (hrs === 0) ? 12 : hrs;
  return (hrs < 10) ? ("&nbsp;" + hrs) : hrs;
};

function setMonth() {
  let month = new Date().getMonth() + 1;
  month = parseDateTime(month)
  document.querySelector('.month').textContent = month;
};

function setDate() {
  let date = new Date().getDate();
  date = parseDateTime(date);
  document.querySelector('.date').textContent = date;
};

function setDay() {
  let days = Array.from(document.getElementsByClassName('day'));
  let dayIdx = new Date().getDay();

  days.forEach((day, idx) => {
    (idx === dayIdx) ? day.classList.add('active') : day.classList.remove('active');
  })
};

function setAmPm() {
  const am = document.querySelector('.am');
  const pm = document.querySelector('.pm');
  const hrs = new Date().getHours();

  if (hrs < 12) {
    pm.classList.remove('active');
    am.classList.add('active');
  } else {
    pm.classList.add('active');
    am.classList.remove('active');
  }
};

function isTwelve(hrs, mins, secs) {
  return (hrs % 12 === 0 && mins === 0 && secs === 0);
}

function setTime() {
  const time = document.querySelector('.time');
  const date = new Date();
  
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  if (isTwelve(hrs, mins, secs)) {
    setMonth();
    setDate();
    setDay();
    setAmPm();
  }
  
  hrs = parseHours(hrs);
  mins = parseDateTime(mins);
  secs = parseDateTime(secs);
  
  time.innerHTML = `${hrs}:${mins}:${secs}`;
};

document.addEventListener("DOMContentLoaded", () => {
  setMonth();
  setDate();
  setDay();
  setAmPm();
  setTime();
  setInterval(() => setTime(), 1000);
});
