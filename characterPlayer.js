
function changeHP (count){ 
    this.hp -= count;
  
    if(this.hp <= 0){
        this.hp = 0;
    }
};

function elHP () {

    const $playerLife = document.querySelector('.player'+ this.player +' .life');

    return $playerLife;

};

function renderHP (){

this.elHP().style.width = this.hp +'%';
};

export {changeHP, elHP, renderHP};