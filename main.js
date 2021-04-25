const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');


import {player1, player2} from './players.js';
import {createElement} from './utils.js';
import {showResult, playerWin} from './utils.js';
import {enemyAttak, playerAttack} from './attack.js';
import {generateLogs} from './generateLogs.js';
import Game from '../Game/index.js';




$formFight.addEventListener('submit', function(e){
    e.preventDefault();
    const enemy = enemyAttak();
    const player = playerAttack();
    console.log(player1.hp);
    console.log(player2.hp);

    
    
    if ( player.defence !== enemy.hit) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1, enemy.value);
    } else {
        generateLogs('defence', player2, player1, enemy.value);
    }

    if(enemy.defence !== player.hit){
        player2.changeHP(enemy.value);
        player2.renderHP();
        generateLogs('hit', player1, player2, enemy.value);
    } else {
        generateLogs('defence', player1, player2, enemy.value);
    }
    showResult();

});



/*function init(){
    player1.creatPlayer();
    player2.creatPlayer();

    generateLogs('start', player2, player1, 0);
   };
   
init();*/

const game = new Game();
game.start();