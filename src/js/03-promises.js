import { Notify } from 'notiflix/build/notiflix-notify-aio'
const delayInput = document.querySelector('input[name=delay]')
const stepInput = document.querySelector('input[name=step]')
const amountInput = document.querySelector('input[name=amount]')
const createBtn = document.querySelector('button')
createBtn.addEventListener('click', promiseGenerator)

function createPromise(position, delay) {
  
const promise = new Promise((resolve, reject) => {
  
   setTimeout(()=>{
     const shouldResolve = Math.random() > 0.3;
     if (shouldResolve) {
       resolve({position,delay})
     } else {
       reject({position,delay})
     }
   },delay)
   
  })
   
  promise.then(({position,delay}) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)).catch(({position,delay}) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
 
 }

function promiseGenerator(e) {
  e.preventDefault()
  let delay = delayInput.value
  const step = stepInput.value
   for(let i = 0; i < amountInput.value; i+=1 ){
    let position = i + 1
    if(i>0) {
      delay = parseInt(step) + parseInt(delay)
    }
    
      createPromise(position, delay)
    }
  
  }





