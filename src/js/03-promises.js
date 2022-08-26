const delay = document.querySelector('delay')

const step = document.querySelector('step')

const amount = document.querySelector('amount')

const createBtn = document.querySelector('submit')

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


