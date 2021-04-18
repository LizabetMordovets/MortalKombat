const $arenas = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $formFightButton = document.querySelector('.button');
const $chat = document.querySelector('.chat');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};
const ATTACK = ['head', 'body', 'foot'];
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

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


function playerAttack(){
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
    return attack;
};

function showResult(){
    if (player1.hp === 0 || player2.hp === 0) {

        
        $formFightButton.disabled = true;
        createReloadButton();
        if(player1.hp == 0){
            generateLogs('end', player2, player1, 0);
        }else{
            generateLogs('end', player1, player2, 0);

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

function generateLogs(type, player1, player2, hitValue){
    const data = new Date();
    const time = data.toLocaleTimeString();

    let text, el, ruNam;

    switch(type){

    case 'start' :
        text = logs.start
            .replace('[player2]', player2.name)
            .replace('[player1]', player1.name)
            .replace('[time]', time);
            el = `<p> ${text}</p>`;
        break;

    case 'end':
        ranNum = getRandom(logs.end.length-1);
        text = logs.end[ranNum]
            .replace('[playerLose]', player2.name)
            .replace('[playerWins]', player1.name);
            el = `<p>${text}</p>`;
        break;

    case 'hit':
        ranNum = getRandom(logs.hit.length-1);
        text = logs.hit[ranNum]
            .replace('[playerDefence]', player2.name)
            .replace('[playerKick]', player1.name);
            el = `<p>${time}, ${text} -${hitValue} [${player2.hp}/100] </p>`;
        break;

    case 'defence':
        ranNum = getRandom(logs.defence.length-1);
        text = logs.end[ranNum]
            .replace('[playerDefence]', player2.name)
            .replace('[playerKick]', player1.name);
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

function startLog() {
    generateLogs('start', player2, player1, 0);
}
window.onload = startLog;


$formFight.addEventListener('submit', function(e){
    e.preventDefault();
    const enemy = enemyAttak();
    const player = playerAttack();
    console.log(player1.hp);
    console.log(player2.hp);

    
    
    if ( player.defence !== enemy.hit) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1, enemy.value);
    } else {
        generateLogs('defence', player2, player1, enemy.value);
    }

    if(enemy.defence !== player.hit){
        player2.changeHP(enemy.value);
        player2.renderHP();
        generateLogs('hit', player1, player2, enemy.value);
    } else {
        generateLogs('defence', player1, player2, enemy.value);
    }
    showResult();
    console.log('Skorpion', player1.hp);
    console.log('Super-ZEREO',player2.hp);
    

});
