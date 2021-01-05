
class CountdownTimer {
  constructor({ selector, targetDate, name }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.name = name;
    this.currentDate;
    this.deltaTime;
    this.currentDate;
  }
  insertName() {
    const name = document.querySelector('#insert-name');
    name.textContent = `До Дня Рождения ${this.name} осталось:`;
    this.getIdDate();
  }
  getIdDate() {
    this.targetDate = new Date(this.targetDate).getTime();
    this.getTimer();
  }
  getTimer() {
    setInterval(() => {
      this.currentDate = Date.now();
      this.deltaTime = this.targetDate - this.currentDate;
      this.timing(this.deltaTime);
    }, 1000);
  }
  timing() {
    const daysText = document.querySelector('[data-value="days"]');
    const hoursText = document.querySelector('[data-value="hours"]');
    const minsText = document.querySelector('[data-value="mins"]');
    const secsText = document.querySelector('[data-value="secs"]');

    const days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
    daysText.textContent = `${days}`;

    const hours = this.pad(
      Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    hoursText.textContent = `${hours}`;

    const mins = this.pad(
      Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
    );
    minsText.textContent = `${mins}`;

    const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
    secsText.textContent = `${secs}`;
  }

  pad(time) {
    return String(time).padStart(2, '0');
  }
}

const hbIvetta = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 09, 2021'),
  name: 'Ivetta'
});
//hbIvetta.insertName();

const hbEd = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 24, 2021'),
  name: 'Ed'
})
hbEd.insertName()