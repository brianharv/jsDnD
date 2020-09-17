// import { weaponList } from "./weapons";
// import {equipWeapon} from './weaponList.js';

class BarbarianCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Barbarian";
    this.name = name;
    this.maxHP = 12 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 12;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,12,attBonus];
    this.actions = [{name: "Rage Attack", attack: 1, damage: [2,12,0], limit: 5}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Great Axe",
      lvl: 0,
      attack: 0,
      damage: [1,12,0],
      hands: 2,
      cost: 300
    };
    this.armor = {
      name: "Breastplate",
      lvl: 0,
      armorBonus: 14,
      type: "medium",
      cost: 4000
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[0];
    this.bonusPoints = 0;
  }
}

class BardCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Bard";
    this.name = name;
    this.maxHP = 8 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 8;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,6,attBonus];
    this.actions = [{name: "Seduce", attack: 1, damage: [1,200,0]}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Short Sword",
      lvl: 0,
      attack: 0,
      damage: [1,6,0],
      hands: 1,
      cost: 100
    };
    this.armor = {
      name: "Leather",
      lvl: 0,
      armorBonus: 11,
      type: "light",
      cost: 100
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[1];
    this.bonusPoints = 0;
  }
}

class ClericCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Cleric";
    this.name = name;
    this.maxHP = 8 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 8;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,6,attBonus];
    this.actions = [{name: "Turn Undead", attack: 8, damage: [2,10,0]}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Mace",
      lvl: 0,
      attack: 0,
      damage: [1,6,0],
      hands: 1,
      cost: 50
    };
    this.armor = {
      name: "Breastplate",
      lvl: 0,
      armorBonus: 14,
      type: "medium",
      cost: 4000
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[2];
    this.bonusPoints = 0;
  }
}

class DruidCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Druid";
    this.name = name;
    this.maxHP = 8 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 8;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,6,attBonus];
    this.actions = [{name: "Summon Bear", attack: 3, damage: [2,20,0]}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Quarterstaff",
      lvl: 0,
      attack: 0,
      damage: [1,6,0],
      hands: 2,
      cost: 10
    };
    this.armor = {
      name: "Hide",
      lvl: 0,
      armorBonus: 10,
      type: "medium",
      cost: 100
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[3];
    this.bonusPoints = 0;
  }
}

class FighterCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Fighter";
    this.name = name;
    this.maxHP = 10 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 10;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,8,attBonus];
    this.actions = [{name: "Flail Wildly", attack:8, damage: [2,12,0]}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Long Sword",
      lvl: 0,
      attack: 0,
      damage: [1,8,0],
      hands: 1,
      cost: 150
    };
    this.armor = {
      name: "Breastplate",
      lvl: 0,
      armorBonus: 14,
      type: "medium",
      cost: 4000
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[4];
    this.bonusPoints = 0;
  }
}

class MonkCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Monk";
    this.name = name;
    this.maxHP = 8 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 8;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,6,attBonus];
    this.actions = [{name: "Judo Chop", attack: 9999, damage: [1,4,0]}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Quarterstaff",
      lvl: 0,
      attack: 0,
      damage: [1,6,0],
      hands: 2,
      cost: 10
    };
    this.armor = {
      name: "Shirt",
      lvl: 0,
      armorBonus: 10,
      type: "light",
      cost: 10
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[5];
    this.bonusPoints = 0;
  }
}

class PaladinCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Paladin";
    this.name = name;
    this.maxHP = 10 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 10;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,6,attBonus];
    this.actions = [{name: "Smite", attack: 3, damage: [2,20,0]}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Short Sword",
      lvl: 0,
      attack: 0,
      damage: [1,6,0],
      hands: 1,
      cost: 100
    };
    this.armor = {
      name: "Breastplate",
      lvl: 0,
      armorBonus: 14,
      type: "medium",
      cost: 4000
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[6];
    this.bonusPoints = 0;
  }
}

class RangerCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Ranger";
    this.name = name;
    this.maxHP = 10 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 10;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,8,attBonus];
    this.actions = [{name: "Rapid Fire", attack: 4, damage: [2,16,0]}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Bow",
      lvl: 0,
      attack: 0,
      damage: [1,8,0],
      hands: 2,
      cost: 150
    };
    this.armor = {
      name: "Hide",
      lvl: 0,
      armorBonus: 12,
      type: "medium",
      cost: 100
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[7];
    this.bonusPoints = 0;
  }
}

class RogueCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Rogue";
    this.name = name;
    this.maxHP = 8 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 8;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,4,attBonus];
    this.actions = [{name: "Sneak Attack", attack: 2, damage: [4,6,0]}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Dagger",
      lvl: 0,
      attack: 0,
      damage: [1,4,0],
      hands: 1,
      cost: 5
    };
    this.armor = {
      name: "Studded Leather",
      lvl: 0,
      armorBonus: 12,
      type: "light",
      cost: 450
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[8];
    this.bonusPoints = 0;
  }
}

class SorcererCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Sorcerer";
    this.name = name;
    this.maxHP = 6 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 6;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,6,attBonus];
    this.actions = [{name: "Scorn of Force", attack: 9999, damage: [3,12,0], limit: 3}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Quarterstaff",
      lvl: 0,
      attack: 0,
      damage: [1,6,0],
      hands: 2,
      cost: 10
    };
    this.armor = {
      name: "Leather",
      lvl: 0,
      armorBonus: 11,
      type: "light",
      cost: 100
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[9];
    this.bonusPoints = 0;
  }
}

class WarlockCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Warlock";
    this.name = name;
    this.maxHP = 8 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 8;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,6,attBonus];
    this.actions = [{name: "Eldritch Blast", attack: 9999, damage: [8,4,0], limit: 3}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Quarterstaff",
      lvl: 0,
      attack: 0,
      damage: [1,6,0],
      hands: 2,
      cost: 10
    };
    this.armor = {
      name: "Studded Leather",
      lvl: 0,
      armorBonus: 12,
      type: "light",
      cost: 450
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[10];
    this.bonusPoints = 0;
  }
}

class WizardCharacter {
  constructor(name, armorClass, hpBonus, attBonus, statClass){
    this.playerClass = "Wizard";
    this.name = name;
    this.maxHP = 6 + hpBonus;
    this.hp = this.maxHP;
    this.hpDice = 6;
    this.armorClass = armorClass;
    this.attack = attBonus;
    this.damage = [1,6,attBonus];
    this.actions = [{name: "Fireball", attack: 9999, damage: [5,6,0], limit: 3}];
    this.charStats = statClass;
    this.lvl = 1;
    this.exp = 0;
    this.money = 100;
    this.weapon = {
      name: "Quarterstaff",
      lvl: 0,
      attack: 0,
      damage: [1,6,0],
      hands: 2,
      cost: 10
    };
    this.armor = {
      name: "Shirt",
      lvl: 0,
      armorBonus: 10,
      type: "light",
      cost: 10
    };
    this.inventory = [{healthPotion: 1}];
    this.img = imageArray[11];
    this.bonusPoints = 0;
  }
}

export class CharacterStats {
  constructor(strength, dexterity, intelligence, wisdom, charisma, constitution) {
    this.strength = strength;
    this.strBonus = this.bonusCalc(strength);
    this.dexterity = dexterity;
    this.dexBonus = this.bonusCalc(dexterity);
    this.intelligence = wisdom;
    this.intBonus = this.bonusCalc(intelligence);
    this.wisdom = wisdom;
    this.wisBonus = this.bonusCalc(wisdom);
    this.charisma = charisma;
    this.chaBonus = this.bonusCalc(charisma);
    this.constitution = constitution;
    this.conBonus = this.bonusCalc(constitution);
  }

  bonusCalc(stat) {
    let bonus = 0;
    if (stat > 17) {
      bonus = 4;
    } else if (stat > 15) {
      bonus = 3;
    } else if (stat > 13) {
      bonus = 2;
    } else if (stat > 11) {
      bonus = 1;
    } else if (stat > 9 ) {
      bonus = 0;
    } else {
      bonus = -1;
    }
    return bonus;
  }
}

export function getCharacter(name, charClass, statClass) {
  let character;
  let acBonus = statClass.dexBonus;
  let hpBonus = statClass.conBonus;
  let attBonus = statClass.strBonus;
  switch (charClass) {
  case "barbarian":
    character = new BarbarianCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "bard":
    character = new BardCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "cleric":
    character = new ClericCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "druid":
    character = new DruidCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "fighter":
    character = new FighterCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "monk":
    character = new MonkCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "paladin":
    character = new PaladinCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "ranger":
    character = new RangerCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "rogue":
    character = new RogueCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "sorcerer":
    character = new SorcererCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "warlock":
    character = new WarlockCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
    break;
  case "wizard":
    character = new WizardCharacter(name, (10 + acBonus), hpBonus, attBonus, statClass);
  }
  return character;
}

export let imageArray = [
  "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png", 
  "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png", 
  "http://howreroll.com/wp-content/uploads/2015/10/radovan.png", 
  "https://www.arcanewonders.com/wp-content/uploads/2018/10/Druid.png", 
  "https://i.imgur.com/ByV5Mul.png", 
  "https://i.pinimg.com/originals/6e/ce/fb/6ecefb67d6d50d94f49902b7e7e5848b.png", 
  "https://i2.wp.com/nerdarchy.com/wp-content/uploads/2016/03/Heroes-VI-Paladin-Haven-Hero.png", 
  "https://i.pinimg.com/originals/12/c7/b6/12c7b6b6da8bf3bcaec746e2d6cc975a.png", 
  "https://i0.wp.com/nerdarchy.com/wp-content/uploads/2018/04/rogue.png", 
  "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/485/420/618/636274643818663058.png", 
  "https://vignette.wikia.nocookie.net/forgottenrealms/images/9/9c/Sword_Coast_Legends_-_Companion_-_Hommet_Shaw.png", 
  "https://i.pinimg.com/originals/22/b0/d1/22b0d1edb14d2c4a4b629afcfae0d4ed.png"
];

export let descriptionArray = [];
