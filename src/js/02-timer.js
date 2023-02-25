import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
  timerInput: document.querySelector('#datetime-picker'),
  timerBtn: document.querySelector('[data-start]'),
};

refs.timerBtn.disabled = true;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    dataChecking(selectedDates);
  },
};

flatpickr(refs.timerInput, options);

function dataChecking(selectedDates) {
  const selectedDate = selectedDates[0].getTime();
  const currentDate = new Date().getTime();
  if (selectedDate < currentDate) {
    Notiflix.Report.failure(
      'Ooops, wrong date',
      'Please choose a date in the future',
      'OK :)'
    );
    // window.alert('Please choose a date in the future');
  } else {
    refs.timerBtn.disabled = false;
    refs.timerBtn.addEventListener('click', () => {
      setInterval(() => {
        renderTimer(convertMs(selectedDate - new Date().getTime()));
      }, 1000);
    });
    refs.timerInput.disabled = true;
  }
}

const renderTimer = ({ days, hours, minutes, seconds }) => {
  refs.timerDays.textContent = `${days}`;
  refs.timerHours.textContent = `${hours}`;
  refs.timerMinutes.textContent = `${minutes}`;
  refs.timerSeconds.textContent = `${seconds}`;
};
