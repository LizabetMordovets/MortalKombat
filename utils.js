import {player1, player2} from './players.js';
import { generateLogs} from './generateLogs.js';


const $arenas = document.querySelector('.arenas');
const $formFightButton = document.querySelector('.button');

export const  getRandom = (num) => {
    return Math.ceil(Math.random() * num);
}

 export const createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if(className){
        $tag.classList.add(className);
    }
   
    return $tag;
};


export const createReloadButton =  () => {
    const $reloadWrap =  createElement('div', 'reloadWrap' );
    const $reloadButton = createElement('button', 'button' );
    $reloadButton.innerText = 'Reload';
 
    $reloadButton.addEventListener('click', function(){
         window.location.reload();
     });

    $reloadWrap.appendChild($reloadButton);
    $arenas.appendChild($reloadWrap);
 };
 
 
 export const showResult = () => {
    if (player1.hp === 0 || player2.hp === 0) {

        $formFightButton.disabled = true;
        createReloadButton();
        if(player1.hp == 0 && player2.hp!=0){
            generateLogs('end', player2, player1, 0);
        }else if (player2.hp == 0 && player1.hp!=0){
            generateLogs('end', player1, player2, 0);
        }else {
            generateLogs('draw', player1, player2, 0); 
        }
        
    };
    
    if (player1.hp === 0 && player1.hp < player2.hp) {

        $arenas.appendChild(playerWin(player2.name));

    } else if (player2.hp === 0 && player2.hp < player1.hp) {

        $arenas.appendChild(playerWin(player1.name));

    } else if (player1.hp === 0 && player2.hp === 0) {

        $arenas.appendChild(playerWin());
    }

};

 export const playerWin = (name) => {
    const $WinTitle = createElement('div','winTitle');
    if (name) {
        $WinTitle.innerText = name + ' wins';
    } else {
        $WinTitle.innerText =' draw';

    }

    return $WinTitle;
}