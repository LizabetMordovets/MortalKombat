import {createElement} from '../utils.js';
class Player{
    constructor(props) {
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.player = props.player;
        this.selector = `player${this.player}`;
        this.rootSelector = props.rootSelector;
    }
    elHP = () => {
        return document.querySelector(`.${this.selector} .life`);
    
    }

    changeHP = (count) => { 
        this.hp -= count;
      
        if(this.hp <= 0){
            this.hp = 0;
        }
    }    
    
   renderHP = () => {
     this.elHP().style.width = this.hp +'%';
    }

    attack = () => {
        console.log(`${this.name} fight`);
    }

    creatPlayer = () => {

        const $player = createElement('div',  this.selector);
    
        const $progressbar = createElement('div', 'progressbar');
    
        const $life = createElement('div', 'life');
        $life.style.width = `${this.hp}%`;
    
        const $name = createElement('div', 'name');
        $name.innerText = this.name;
    
        const $character  = createElement('div', 'character');
    
        const $img = createElement('img');
        $img.src = this.img;
    
    
        $player.appendChild($progressbar);
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);
        $player.appendChild($character);
        $character.appendChild($img);

        const $root = document.querySelector(`.${this.rootSelector}`);
        $root.appendChild($player);
    
       return $player;
    };

    
}

export default Player;