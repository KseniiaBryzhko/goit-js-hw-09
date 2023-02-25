// const refs = {
//   timerDays: document.querySelector('[data-days]'),
//   timerHours: document.querySelector('[data-hours]'),
//   timerMinutes: document.querySelector('[data-minutes]'),
//   timerSeconds: document.querySelector('[data-seconds]'),
//   timerInput: document.querySelector('#datetime-picker'),
//   timerBtn: document.querySelector('[data-start]'),
// };

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(delta) {
//   const milisecInSec = 1000;
//   const secInMin = 60;
//   const minInHour = 60;
//   const hoursInDay = 24;

//   const seconds = pad(Math.floor((delta / milisecInSec) % secInMin));
//   const minutes = pad(
//     Math.floor((delta / (milisecInSec * secInMin)) % minInHour)
//   );
//   const hours = pad(
//     Math.floor((delta / (milisecInSec * secInMin * minInHour)) % hoursInDay)
//   );
//   const days = pad(
//     Math.floor(delta / (milisecInSec * secInMin * minInHour * hoursInDay))
//   );

//   return { days, hours, minutes, seconds };
// }

// const timer = targetDate => {
//   setInterval(() => {
//     const delta = new Date(targetDate) - new Date();
//     const timeComponents = getTimeComponents(delta);

//     renderTimer(timeComponents);
//   }, 1000);
// };

// const renderTimer = ({ days, hours, minutes, seconds }) => {
//   refs.timerDays.textContent = `${days}`;
//   refs.timerHours.textContent = `${hours}`;
//   refs.timerMinutes.textContent = `${minutes}`;
//   refs.timerSeconds.textContent = `${seconds}`;
// };

// timer(new Date('2023/06/25'));
