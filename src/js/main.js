import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import {getCharacter} from './player.js';
import {Monster} from './monsters.js';
import {Battle} from './battle.js';
import { getMonster } from './monsters.js';
import {getLoot} from './lootTable.js';
import { statRoll } from './roleFunctions.js';

function displayStats(battle) {
  $("#player-health").text(battle.character.hp);
  $("#numHealthPot").text(battle.character.inventory[0].healthPotion);
  let endBattle = false;
  let monsterHealth = "";
  if (player.hp < 1) {
    endBattle = true;
  }
  let percentHP = battle.monster.healthPoints / battle.monster.maxHP;
  if (percentHP > 0.75) {
    monsterHealth = "Tip-top Condition";
  } else if (percentHP > 0.5) {
    monsterHealth = "Wounded";
  } else if (percentHP > 0.25) {
    monsterHealth = "Weak";
  } else if (percentHP > 0) {
    monsterHealth = "Dying";
  } else {
    monsterHealth = "OOO you know he dead";
    endBattle = true;
  }
  $("#monster-health").text(monsterHealth);
  return endBattle;
}

function charStatListeners() {
  $('#bonus-points').text(statRoll());
  $('.stat-plus').click(function(event) {
    event.preventDefault();
    let fieldName = $(this).attr('field');
    let currentVal = parseInt($(`input[name=${fieldName}]`).val());
    if (!isNaN(currentVal) && currentVal >= 8 && currentVal < 18) {
      let bp = parseInt($('#bonus-points').text());
      if (bp >= 1) {
        $(`input[name=${fieldName}]`).val(currentVal + 1);
        $('#bonus-points').text(bp - 1);
      }
    } else if (currentVal === 18) {
      false;
    } else {
      $(`input[name=${fieldName}]`).val(8);
    }
  });
  $(".stat-minus").click(function(event) {
    event.preventDefault();
    let fieldName = $(this).attr('field');
    let currentVal = parseInt($(`input[name=${fieldName}]`).val());
    if (!isNaN(currentVal) && currentVal > 8) {
      let bp = parseInt($('#bonus-points').text());
      $(`input[name=${fieldName}]`).val(currentVal - 1);
      $('#bonus-points').text(bp + 1);
    } else {
      $(`input[name=${fieldName}]`).val(8);
    }
  });
  $(function () {
    $('[data-toggle="popover"]').popover()
  })
  $('.popover-dismiss').popover({
    trigger: 'focus'
  });
}
function attachListeners() {
  let monster;
  let battle;
  $("button#explore").on("click", function() {
    let chosenMonsterURLPIC = getMonster(player.lvl-5,player.lvl+1);
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.dnd5eapi.co${chosenMonsterURLPIC.url}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(response) {
      let monsterAPIObject = JSON.parse(response);
      monster = new Monster (monsterAPIObject,chosenMonsterURLPIC.pic);
      battle = new Battle (player, monster);
      $("#monster-img").html(`<img class=display-img src=${monster.img}>`);
      $("#monster-name").text(monster.name);
      $("#monster-health").text("Healthy");
      $("#battle-buttons").toggle();
      $("button#explore").toggle();
      displayStats(battle);
    });
  });
  $(`button#melee-attack`).on("click", function() {
    let message = battle.meleeAttack();
    $("#message-board").prepend(message);
    let endBattle = displayStats(battle);
    let turn = 0;
    if (endBattle === false) {
      message = battle.endTurn();
      $("#message-board").prepend(message);
      endBattle = displayStats(battle);
      turn = 1;
    }
    if (endBattle === true) {
      getLoot(monster.challengeRating, player);
      $("#battle-buttons").toggle();
      $("#monster-img").html("");
      $("#monster-name").text("NPC");
      $("#monster-health").text("");
      $("button#explore").toggle();
      if (turn === 0) {
        $("#message-board").prepend(`You beat the ${battle.monster.name}<br>`);
      } else {
        $("#message-board").prepend(`The ${battle.monster.name} has defeated you!<br>`);  // return to character creation?
        $("#player-img").html("<img class=player-img src=https://www.pngitem.com/pimgs/m/23-238931_skull-logo-free-skull-and-cross-bones-svg.png>");
        $("#player-name").text("You Are Dead");
        $("#start-over").show();
        $("button#explore").hide();
      }
    }
  });
  $(`button#flee`).on("click", function() {
    battle.flee();
    $("#monster-img").html("");
    $("#monster-name").text("NPC");
    $("#monster-health").text("");
    $("#battle-buttons").toggle();
    $("button#explore").toggle();
    $("#message-board").prepend("You flee<br>");
  });
  $(`button#healthPotion`).on("click", function() {
    if (battle.character.hp === battle.character.maxHP) {
      $("#message-board").prepend("You are already max hp you dingus<br>");
    } else {
      let temp = battle.useHealthPotion();
      if (temp === false) {
        $("#message-board").prepend("You don't have any health potions to use!<br>");
      } else {
        $("#message-board").prepend("SUSTENANCE<br>");
      }
    }
    displayStats(battle);
  });
  $(`button#inventory`).on("click", function() {
    $("#displayInventory").toggle();
    $("#displayInventory").text("");
    $("#displayInventory").append(player.inventory);
  });
  $(`#action-buttons`).on("click", "#rage", function() {
    let message = battle.rageAttack();
    $("#message-board").prepend(message);
    let endBattle = displayStats(battle);
    let turn = 0;
    if (endBattle === false) {
      message = battle.endTurn();
      $("#message-board").prepend(message);
      endBattle = displayStats(battle);
      turn = 1;
    }
    if (endBattle === true) {
      getLoot(monster.challengeRating, player);
      $("#battle-buttons").toggle();
      $("#monster-img").html("");
      $("#monster-name").text("NPC");
      $("#monster-health").text("");
      $("button#explore").toggle();
      if (turn === 0) {
        $("#message-board").prepend(`You beat the ${battle.monster.name}<br>`);
      } else {
        $("#message-board").prepend(`The ${battle.monster.name} has defeated you!<br>`);
      }
    }
  });
}

let player;

$(document).ready(function() {
  charStatListeners();
  attachListeners();
  $("form#character").submit(function(event) {
    event.preventDefault();
    const name = $(`#name`).val();
    const charClass = $(`#character-class`).val();
    const acBonus = 0;
    const hpBonus = 0;
    const attBonus = 0;
    player = getCharacter(name, charClass, acBonus, hpBonus, attBonus);
    $("#player-name").text(name);
    $("#player-img").html(`<img class=display-img src=${player.img}>`);
    $("#player-health").text(player.hp);
    $("#character-creation").hide();
    $("#gameplay").show();
    $("#message-board").prepend(`Welcome ${name}, You can start your adventure by exploring and battle monsters.<br>`);
    let buttons = $("#action-buttons");
    buttons.empty();
    player.actions.forEach(function(action) {
      buttons.append(`<button class="btn btn-info col-4 m-3" id='${action.name}'>${action.name}</button>`);
    });
  });
});