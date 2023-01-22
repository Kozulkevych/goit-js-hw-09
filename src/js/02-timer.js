// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btnStart.disabled = true;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future!');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

flatpickr(inputDate, options);
// refs.btnStart.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

btnStart.addEventListener('click', () => {
  Notify.success('The countdown has started!');
  btnStart.disabled = true;

  timerId = setInterval(() => {
    let countdown = new Date(inputDate.value) - new Date();

    if (countdown <= 0) {
      Notify.success('The countdown is over!');
      clearInterval(timerId);
      return;
    }

    let timeObject = convertMs(countdown);
    days.textContent = addLeadingZero(timeObject.days);
    hours.textContent = addLeadingZero(timeObject.hours);
    minutes.textContent = addLeadingZero(timeObject.minutes);
    seconds.textContent = addLeadingZero(timeObject.seconds);
  }, 1000);
});
