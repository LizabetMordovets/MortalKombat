const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

function random(num){

    return Math.ceil(Math.random() * num);
};

function elHP (){

    const $playerLife = document.querySelector('.player'+ this.player +' .life');

    return $playerLife;

};

function renderHP (){

    $playerLife2 = this.elHP();
    $playerLife2.style.width = this.hp +'%';
};

function changeHP (count){ 
    this.hp -= count;
  
    if(this.hp <= 0){
        this.hp = 0;
    }

    this.renderHP();
};


function playerWin(name){
    const $WinTitle = createElement('div','winTitle');
    if (name) {
        $WinTitle.innerText = name + ' wins';
    } else {
        $WinTitle.innerText =' draw';

    }

    return $WinTitle;
}




const player1 = {
    player:1,
    name:'Skorpion',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['knife', 'bow', 'pistol', 'sword'],
    attack: function(){
        console.log(player1.name + "" + "fight");
    },
    changeHP : changeHP,
    elHP : elHP,
    renderHP : renderHP,
};  
   
const player2 = {
    player:2,
    name:'SUB-ZERO',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['knife', 'bow', 'pistol', 'sword'],
    attack: function(){
        console.log(player1.name + "" + "fight");
    },
    changeHP : changeHP,
    elHP : elHP,
    renderHP : renderHP,
};


function createElement(tag, className){
    const $tag = document.createElement(tag);
    if(className){
        $tag.classList.add(className);
    }
   
    return $tag;
};

function creatPlayer(obj){

    const $player = createElement('div', 'player'+obj.player);

    const $progressbar = createElement('div', 'progressbar');

    const $life = createElement('div', 'life');
    $life.style.width = `${obj.hp}%`;

    const $name = createElement('div', 'name');
    $name.innerText = obj.nam;

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


function createReloadButton () {
   $reloadWrap =  createElement('div', 'reloadWrap' );
   $reloadButton = createElement('button', 'button' );
   $reloadButton.innerText = 'Restart';
   $reloadWrap.appendChild($reloadButton);
   $arenas.appendChild($reloadWrap);
   $reloadButton.style.display = 'none';
};
createReloadButton();

$reloadButton.addEventListener('click', function(){
    window.location.reload();
});

$randomButton.addEventListener('click', function(){
    
    player1.changeHP(random(20));
    player2.changeHP(random(20));

    if(player1.hp ===0 || player2.hp ===0){
        $randomButton.disabled = true;
        $reloadButton.style.display = 'block';
        
    };

    if(player1.hp === 0 && player1.hp < player2.hp) {

        $arenas.appendChild(playerWin(player2.name));

    } else if (player2.hp === 0 && player2.hp < player1.hp) {

        $arenas.appendChild(playerWin(player1.name));

    } else if (player1.hp ===0 && player2.hp ===0) {
        $arenas.appendChild(playerWin());
    };
});

$arenas.appendChild(creatPlayer(player1));
$arenas.appendChild(creatPlayer(player2));

creatPlayer('player2', player2 );
