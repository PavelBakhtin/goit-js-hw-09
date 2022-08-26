import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import { Notify } from 'notiflix/build/notiflix-notify-aio'
const startBtn = document.querySelector('[data-start]')
const counterDays = document.querySelector('[data-days]')
const counterHours = document.querySelector('[data-hours]')
const counterMinutes = document.querySelector('[data-minutes]')
const counterSeconds = document.querySelector('[data-seconds]')
function padStart(number) {
  return number.toString().padStart(2,'0')
}
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

  startBtn.disabled = true
  
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
     
      startBtn.addEventListener('click', ()=> {
        setInterval(() => {
          startBtn.disabled = true
          let chosenTime = selectedDates[0] 
          let currentTime = Date.now()
          let timeDiff = convertMs(chosenTime - currentTime)
          const{days, hours, minutes, seconds} = timeDiff
          counterDays.textContent = padStart(days)
          counterHours.textContent =  padStart(hours)
          counterMinutes.textContent =  padStart(minutes)
          counterSeconds.textContent =  padStart(seconds)
  
        }, 1000)
       } )
      
    }
   
}
const dateInput = flatpickr(input, options
)



