const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');


const player1 = {
    player:1,
    name:'Skorpion',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['knife', 'bow', 'pistol', 'sword'],
    attack: function(){
        console.log(player1.name + "" + "fight");
    }
};  
   
const player2 = {
    player:2,
    name:'SUB-ZERO',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['knife', 'bow', 'pistol', 'sword'],
    attack: function(){
        console.log(player1.name + "" + "fight");
    }
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


function changeHP(playerOne, playerTwo){
    const $playerLife = document.querySelector('.player'+ playerOne.player +' .life');
    playerOne.hp -= random(20);
    $playerLife.style.width = playerOne.hp + '%';
    console.log("###",playerOne.hp);
    if(playerOne.hp <= 0){
        $playerLife.style.width = 0;
        $arenas.appendChild(playerWin(playerTwo.name));
        $randomButton.disabled = true;
    }

};

function playerWin(name){
    const $loseTitle = createElement('div','winTitle');
    $loseTitle.innerText = name + ' Win';
    return $loseTitle;
}


function random(num){
    return Math.ceil(Math.random() * num);
};

$randomButton.addEventListener('click', function(){
    console.log("###",'Click Random Button');

    changeHP(player1,player2);
    changeHP(player2,player1);
});

$arenas.appendChild(creatPlayer(player1));
$arenas.appendChild(creatPlayer(player2));
creatPlayer('player2', player2 );