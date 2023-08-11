import Goblin from './goblin';
import CheckWin from './CheckWin';

let newGoblin;
const goblin = new Goblin();
const click = new CheckWin('.field');
setInterval(() => {
  newGoblin = Math.floor(Math.random() * 16) + 1;
  goblin.goblinOff();
  goblin.goblinOn(newGoblin);
}, 1000);
