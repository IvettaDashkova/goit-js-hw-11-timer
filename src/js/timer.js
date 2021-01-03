const daysText = document.querySelector('[data-value="days"]');
const hoursText = document.querySelector('[data-value="hours"]');
const minsText = document.querySelector('[data-value="mins"]');
const secsText = document.querySelector('[data-value="secs"]');


function timer() {
  //Mon Aug 09 2021 00:00:00
  const futureDate = new Date(1628456400000);
  setInterval(() => {
    const currentDate = Date.now();
    const deltaTime = futureDate - currentDate;
    timing(deltaTime);
  }, 1000);
}
function timing(time) {
 
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
daysText.textContent = `${days}`
  
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
hoursText.textContent = `${hours}`;
 
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
minsText.textContent = `${mins}`;
 
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    secsText.textContent = `${secs}`;
    
}
function pad(value) {
    return String(value).padStart(2, '0')
}


timer()