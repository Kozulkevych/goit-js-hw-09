import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

function createPromise (position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

function onResolve({ position, delay }) {
  Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
}

function onReject({ position, delay }) {
  Notify.failure(` Rejected promise ${position} in ${delay}ms`);
}

form.addEventListener('submit', (e) => {
e.preventDefault();
let firstDelay = Number(e.currentTarget.delay.value);
const delayStep = Number(e.currentTarget.step.value);
const amount = Number(e.currentTarget.amount.value);
for (let i = 0; i < amount; i += 1) {
  createPromise(i, firstDelay)
   .then(onResolve) 
   .catch(onReject)
  firstDelay += delayStep;
  form.reset();
};
})