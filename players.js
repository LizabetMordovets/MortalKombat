
export const player1 = {
    player:1,
    name:'Skorpion',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['knife', 'bow', 'pistol', 'sword'],
    attack: function(){
        console.log(player1.name + "" + "fight");
    },
    changeHP,
    elHP,
    renderHP,
};  


   
export const player2 = {
    player:2,
    name:'SUB-ZERO',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['knife', 'bow', 'pistol', 'sword'],
    attack: function(){
        console.log(player1.name + "" + "fight");
    },
    changeHP,
    elHP,
    renderHP,
};

function changeHP (count){ 
    this.hp -= count;
  
    if(this.hp <= 0){
        this.hp = 0;
    }
};

function elHP (){

    const $playerLife = document.querySelector('.player'+ this.player +' .life');

    return $playerLife;

};

function renderHP (){

this.elHP().style.width = this.hp +'%';
};

export {changeHP, renderHP};
