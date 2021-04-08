const player1 = {
    name:'Skorpion',
    hp:50,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['knife', 'bow', 'pistol', 'sword'],
    attack: function(){
        console.log(player1.name + "" + "fight");
    }
};  
   
const player2 = {
    name:'SUB-ZERO',
    hp:60,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['knife', 'bow', 'pistol', 'sword'],
    attack: function(){
        console.log(player1.name + "" + "fight");
    }
};


function creatPlayer(player, obj){
    const $arenas = document.querySelector('.arenas');

    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${obj.hp}%`;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = obj.name;

    const $character  = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = obj.img;


    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

   
};

creatPlayer('player1', player1  );
creatPlayer('player2', player2 );