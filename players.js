import Player from './Player/index.js';

export const player1 = new Player({
    player:1,
    name:'Skorpion',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    rootSelector: 'arenas',
});
   
export const player2 = new Player({
    player:2,
    name:'SUB-ZERO',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    rootSelector: 'arenas',
    
});




