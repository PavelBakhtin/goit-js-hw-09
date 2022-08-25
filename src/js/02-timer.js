import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import { Notify } from 'notiflix/build/notiflix-notify-aio'
const startBtn = document.querySelector('[data-start]')
const counterDays = document.querySelector('[data-days]')
const counterHours = document.querySelector('[data-hours]')
const counterMinutes = document.querySelector('[data-minutes]')
const counterSeconds = document.querySelector('[data-seconds]')

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
  startBtn.disabled = true
  let chosenTime 
const input = document.querySelector('#datetime-picker')
const options = {
     enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] <= Date.now()) {
        startBtn.disabled = true
        Notify.warning("Please choose a date in the future")
        return
      }
      startBtn.disabled = false
     
      
      
    },
    onStart(selectedDates) {
       return setInterval(() => {
        chosenTime = selectedDates[0] 
        let currentTime = Date.now()
        let diff = convertMs(chosenTime - currentTime)
        const{days, hours, minutes, seconds} = diff
        counterDays.textContent = days
        counterHours.textContent = hours
        counterMinutes.textContent = minutes
        counterSeconds.textContent = seconds

       
      }, 1000)
      
      
    
     
    }
  };
  
const dateInput = flatpickr(input, options
)
console.log()
startBtn.addEventListener('click', ()=> {
  options.onStart()
 } )

