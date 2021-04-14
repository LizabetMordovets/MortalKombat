const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $formFightButton = document.querySelector('.button');
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};

const ATTACK = ['head', 'body', 'foot'];

function  getRandom(num){

    return Math.ceil(Math.random() * num);
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
    changeHP,
    elHP,
    renderHP,
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
    changeHP,
    elHP,
    renderHP,
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


function createReloadButton () {
   const $reloadWrap =  createElement('div', 'reloadWrap' );
   const $reloadButton = createElement('button', 'button' );
   $reloadButton.innerText = 'Reload';

   $reloadButton.addEventListener('click', function(){
        window.location.reload();
    });
   $reloadWrap.appendChild($reloadButton);
   $arenas.appendChild($reloadWrap);
};

$arenas.appendChild(creatPlayer(player1));
$arenas.appendChild(creatPlayer(player2));

function enemyAttak(){
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];
    
    return {
        value: getRandom( HIT[hit]),
        hit,
        defence
    }
};

$formFight.addEventListener('submit', function(e){
    e.preventDefault();
    console.dir($formFight);

    const enemy = enemyAttak();
    
    const attack ={};

    for (let item of $formFight) {
        if(item.checked && item.name === 'hit'){
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        };
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
         }

        item.checked = false;
    };
    
    if (enemy.hit !== attack.defence) {
        player1.changeHP(enemy.value);
        player1.renderHP();
      }

    if(attack.hit != enemy.defence){
        player2.changeHP(enemy.value);
        player2.renderHP();
    }

    if (player1.hp === 0 || player2.hp === 0) {
        $formFightButton.disabled = true;
        createReloadButton();
    };
    
    if (player1.hp === 0 && player1.hp < player2.hp) {

        $arenas.appendChild(playerWin(player2.name));

    } else if (player2.hp === 0 && player2.hp < player1.hp) {

        $arenas.appendChild(playerWin(player1.name));

    } else if (player1.hp === 0 && player2.hp === 0) {

        $arenas.appendChild(playerWin());
    }

        console.log('###a:', attack);
        console.log('###e:', enemy);
        console.log(enemyAttak());
        console.log(getRandom(3));
});
