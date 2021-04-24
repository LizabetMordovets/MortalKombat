const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');


import {player1, player2} from './players.js';
import {changeHP, renderHP} from './players.js';
import {createElement} from './utils.js';
import {showResult, playerWin} from './utils.js';
import {enemyAttak, playerAttack} from './attack.js';
import {generateLogs} from './generateLogs.js';


const  startLog = () => {
    generateLogs('start', player2, player1, 0);
}
window.onload = startLog;


const  creatPlayer = (obj) => {

    const $player = createElement('div', 'player'+obj.player);

    const $progressbar = createElement('div', 'progressbar');

    const $life = createElement('div', 'life');
    $life.style.width = `${obj.hp}%`;

    const $name = createElement('div', 'name');
    $name.innerText = obj.name;

    const $character  = createElement('div', 'character');

    const $img = createElement('img');
    $img.src = obj.img;


    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

   return $player;
};

$arenas.appendChild(creatPlayer(player1));
$arenas.appendChild(creatPlayer(player2));



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
    console.log('Skorpion', player1.hp);
    console.log('Super-ZEREO',player2.hp);
    
});
