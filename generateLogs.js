import { getRandom } from './utils.js';
import {logs} from './logs.js';


const $chat = document.querySelector('.chat');

export const  generateLogs = (type, player1, player2, hitValue) => {
    const data = new Date();
    const time = data.toLocaleTimeString();

    let text, el, ranNum;

    const {name:namePlayer1, ...res1 } = player1;
    const {name:namePlayer2, hitPlayer2, ...res2} = player2;

    switch(type){

    case 'start' :
        text = logs.start
            .replace('[player2]', namePlayer2)
            .replace('[player1]', namePlayer1)
            .replace('[time]', time);
            el = `<p> ${text}</p>`;
        break;

    case 'end':
        ranNum = getRandom(logs.end.length-1);
        text = logs.end[ranNum]
            .replace('[playerLose]', namePlayer2)
            .replace('[playerWins]', namePlayer1);
            el = `<p>${text}</p>`;
        break;

    case 'hit':
        ranNum = getRandom(logs.hit.length-1);
        text = logs.hit[ranNum]
            .replace('[playerDefence]', namePlayer2)
            .replace('[playerKick]', namePlayer1);
            el = `<p>${time}, ${text} -${hitValue} [${player2.hp}/100] </p>`;
        break;

    case 'defence':
        ranNum = getRandom(logs.defence.length-1);
        text = logs.end[ranNum]
            .replace('[playerDefence]', player2.name)
            .replace('[playerKick]', namePlayer1);
            el = `<p>${time}, ${text}</p>`;
        break;

    case 'draw':
            text = logs.draw;
            el = `<p>${time}, ${text}</p>`;
            break;  
    default :
            el = `<p>hello</p>`; 

    }  
    

    
    $chat.insertAdjacentHTML('afterbegin', el);
    console.log(ranNum);
};