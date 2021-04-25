
import {player1, player2} from '../players.js';
import {createElement} from '../utils.js';
import {showResult, playerWin} from '../utils.js';
import {enemyAttak, playerAttack} from '../attack.js';
import {generateLogs} from '../generateLogs.js';
import Player from '../Player/index.js';

class Game extends Player{

   start = () =>{
        player1.creatPlayer();
        player2.creatPlayer();
        generateLogs('start', player2, player1, 0);
       };
}

export default Game;