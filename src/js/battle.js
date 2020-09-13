import { diceRoll } from './roleFunctions';

export class Battle {
  constructor(character, monster) {
    this.character = character;
    this.monster = monster;
  }

  meleeAttack() {
    let message;
    let attackRoll = this.character.attack + diceRoll(1,20);
    if (attackRoll > this.monster.armorClass) {
      let damageRoll = diceRoll(this.character.damage[0],this.character.damage[1]);
      this.monster.healthPoints -= diceRoll(this.character.damage[0],this.character.damage[1]);
      message = `You hit for ${damageRoll}<br>`;
    } else {
      message = `You missed!<br>`;
    }
    return message;
  }

  flee() {
    this.character = "";
    this.monster = "";    
  }

  endTurn() {
    let message;
    let damageRoll;
    let actionLength = this.monster.actions.length;
    actionLength < 1 ? actionLength = 0 : false;
    let ran =  Math.floor(Math.random() * actionLength);

    for (let i = 0; i < 4; i++){
      if (this.monster.actions[ran].name === "Multiattack") {
        ran = Math.round(Math.random() * actionLength);
      } else {
        i = 4;
      }
    }

    let attackRoll = this.monster.actions[ran].attack_bonus + diceRoll(1,20);
    if (attackRoll > this.character.armorClass) {
      for (let i = 0; i < this.monster.actions[ran].damage.length; i++) {
        let damageRollArray = this.sortAPIDice(this.monster.actions[ran].damage[i].damage_dice);
        damageRoll = diceRoll(damageRollArray[0],damageRollArray[1]) + damageRollArray[2];
        isNaN(damageRoll) ? damageRoll = 1 : false;
        this.character.hp -= damageRoll;
      }
      message = `The ${this.monster.name} used ${this.monster.actions[ran].name} and hit you for ${damageRoll}!<br>`;
    } else {
      message = `The ${this.monster.name} missed!<br>`;
    }
    return message;
  }

  sortAPIDice(dice) {
    let diceArray = dice.replace(/\D/g,'');
    diceArray = diceArray.split("");
    
    /[-]/g.test(dice) ? diceArray[2] = "-" + diceArray[2] : false;
    diceArray.forEach(function(n) {
      diceArray[n] = parseInt(n);
    });
    return diceArray;       // diceArray = [1, 6, 1] or [1, 6, -1]
  }
}