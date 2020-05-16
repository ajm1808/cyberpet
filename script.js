const catdogBtn=document.querySelector(".catdog-btn");
const uniBtn=document.querySelector(".uni-btn");
const startBtn=document.querySelector(".start-btn");
const feedBtn=document.querySelector(".feed-btn");
const drinkBtn=document.querySelector(".drink-btn");
const playBtn=document.querySelector(".play-btn");
const petImage=document.getElementById("pet-image");
const hunger=document.getElementById("hunger-level");
const thirst=document.getElementById("thirst-level");
const sad=document.getElementById("sad-level");
const fun=document.getElementById("fun-level");
const petType=document.querySelector(".pet-type");

let decayInt;
let gamePlaying=false;


class Pet{
    constructor (name){
    this._name = name;
    this._hunger = 10;
    this._thirst = 10;
    this._happy=10;
    this._sad=0;
    }
    get name(){
    return this._name;
    }
    get hunger(){
    return this._hunger;
    }
    get thirst(){
    return this._thirst;
    }
    play(){
    this._happy ++; 
    this._sad --;   
    }
    eat(){
    this._hunger--;
    }
    drink(){
    this._thirst--;
    } 
    
}


function start() {
    gamePlaying=true;

    petImage.style.visibility="hidden";
    petType.textContent="";
    feedBtn.style.visibility="visible";
    drinkBtn.style. visibility="visible";
    playBtn.style.visibility="visible";
    hunger.textContent=5;
    thirst.textContent=5;
    sad.textContent=5;
    fun.textContent=5;
    decayInt=setInterval(decay,3000);

}



startBtn.addEventListener("click",start);


function decay(){
    if (gamePlaying=true);
    hunger.textContent++;
    thirst.textContent++;
    sad.textContent++;
    fun.textContent--;
    if(hunger.textContent==10||thirst.textContent==10){
        gamePlaying=false;
        petType.textContent="Yo pet died!";
        gameOver();
        
    }
    else {
        gamePlaying=true;
        
    }
    
}


// start();

feedBtn.addEventListener("click",feeding);

function feeding (){
    hunger.textContent--;
    thirst.textContent++;
    sad.textContent--;
    fun.textContent++;
}

drinkBtn.addEventListener("click",drinking);

function drinking (){
    hunger.textContent--;
    thirst.textContent--;
    sad.textContent--;
    fun.textContent--;
}

playBtn.addEventListener("click",playing);

function playing (){
    thirst.textContent++;
    sad.textContent--;
    fun.textContent++;
    
}

function gameOver(){
    gamePlaying=false;
    hunger.textContent=0;
    thirst.textContent=0;
    sad.textContent=0;
    fun.textContent=0;
    clearInterval(decayInt);
    feedBtn.style.visibility="hidden";
    drinkBtn.style. visibility="hidden";
    playBtn.style.visibility="hidden";
}
