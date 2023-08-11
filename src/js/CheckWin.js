export default class CheckWin {
  constructor(item) {
    this.item = document.querySelector(item);
    this.gclick = this.gclick.bind(this);
    this.gclick.bind(this);
    this.item.addEventListener('click', this.gclick);
    this.dead = 0;
  }

  gclick(e) {
    if (e.target.className === 'item goblin') {
      e.target.className = 'item';
      this.dead++;
    }
    if (this.dead === 5) {
      alert('WIN');
      this.dead = 0;
    }
  }
}
