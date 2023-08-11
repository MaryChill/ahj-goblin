export default class Goblin {
  constructor() {
    this.counter = 5;
    this.time = 1000;
  }

  goblinOn(newGoblin) {
    if (newGoblin && this.counter > 0) {
      const goblin = document.getElementById(`item${newGoblin}`);
      goblin.className = 'item goblin';
    }
  }

  goblinOff() {
    const goblinOld = document.querySelector('.goblin');
    if (goblinOld != null) {
      goblinOld.className = 'item';
    }
    this.counter -= 1;
    if (this.counter === 0) {
      alert('GAME OVER!');
      this.counter = 5;
    }
  }
}
