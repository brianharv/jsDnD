export function diceRoll(num, side) {      // diceRoll(1, 6);
  let roll = 0;
  for (let i = 0; i < num; i++) {
    roll += Math.ceil(Math.random() * side);
  }
  return roll;                      // roll total
}

export function statRoll() {
  let rolls = [];
  let total = 0;
  for (let i = 0; i < 4; i++) {
    for (let e = 0; e < 10; e++) {
      let a = 0;
      a = diceRoll(1, 6);
      if (a > 1) {
        rolls.push(a);
        e = 10;
      } else {
        e = 0;
      }
    }
  }
  rolls.sort();
  rolls.pop();
  rolls.forEach(function(e) {
    total += e;
  });
  return total;
}

export function diceRollDMG(num, side, mod) {      // diceRoll(1, 6);
  let roll = 0;
  for (let i = 0; i < num; i++) {
    roll += Math.ceil(Math.random() * side) + mod;
  }
  return roll;                      // roll total
}

export function addExp(player, monXP) {
  player.exp += monXP;
  let newPlayer = checkPoints(player);
  return newPlayer;
}

function checkPoints(player) {
  let exp = player.exp;
  let lvl = player.lvl;
  let newLvl = 0;
  let expArray = [300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000];
  let levelArray = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  for (let i = 0; i < expArray; i++) {
    if (expArray[i] > exp) {
      newLvl = levelArray[i];
    }
  }
  newLvl++;
  if (newLvl > lvl) {
    let dif = newLvl - lvl;
    player.lvl = newLvl;
    player.bonusPoints += dif;
  }
  return player;
}