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
const header=document.getElementById("header");
const att=document.getElementsByClassName(".score");

let decayInt;
gamePlaying=false;

function stasis(){
if(att.textContent==11||att.textContent==-1){
    gamePlaying=false;
    gameOver();
}
}

catdogBtn.addEventListener("click",()=>{
    petImage.src="img/catdog.png";
})

uniBtn.addEventListener("click",()=>{
    petImage.src="img/unicorn.png";

})

function checkP(){
    if(petImage.src="img/catdog.png"){
    return true;
    }
    else if (petImage.src="img/unicorn.png"){
    return true;
    }
    else{
    return false;
    }
    
}

function start() {
    gamePlaying=true;
    petImage.style.visibility="visible";
    header.textContent="Don't forget to play with it!";
    feedBtn.style.visibility="visible";
    drinkBtn.style. visibility="visible";
    playBtn.style.visibility="visible";
    hunger.textContent=3;
    thirst.textContent=5;
    sad.textContent=4;
    fun.textContent=6;
    decayInt=setInterval(decay,6000);
};



startBtn.addEventListener("click",()=>{
    if(checkP=true){
        start();
    }
    else{
        gamePlaying=false
    }

});


function decay(){
    if (gamePlaying=true);
    hunger.textContent++;
    thirst.textContent++;
    sad.textContent++;
    fun.textContent--;
    if(hunger.textContent>=10||thirst.textContent>=10){
        gamePlaying=false;
        gameOver();
        
    }
    else if(sad.textContent>=10||fun.textContent<=0){
        gamePlaying=false;
        
        gameOver();
    }    
    else{
        gamePlaying=true;
        
    }
    
}

feedBtn.addEventListener("click",feeding);

function feeding (){
    if(gamePlaying=true){
    hunger.textContent--;
    thirst.textContent++;
    sad.textContent--;
    fun.textContent++;
    stasis();
    header.textContent="Let's burn off those calories";
    }
    else{
        gameOver();
    }
}

drinkBtn.addEventListener("click",drinking);

function drinking (){
    if(gamePlaying=true){
    
    thirst.textContent--;
    sad.textContent--;
    
    stasis();
    header.textContent="Food goes well with beer!";
    }
    else{
        gameOver();
    }
}

playBtn.addEventListener("click",playing);

function playing (){
    if(gamePlaying=true){
    thirst.textContent++;
    sad.textContent--;
    fun.textContent++;
    stasis();
    header.textContent="Playing makes me thirsty";
    }
    else{
        gameOver();
    }
}

function gameOver(){
    gamePlaying=false;
    hunger.textContent=0;
    thirst.textContent=0;
    sad.textContent=0;
    fun.textContent=0;
    header.textContent="Dammmmmmnnn, Yo pet died!";
    clearInterval(decayInt);
    feedBtn.style.visibility="hidden";
    drinkBtn.style. visibility="hidden";
    playBtn.style.visibility="hidden";
    setTimeout(()=>{
        petImage.src="";
        header.textContent="Pick your pet and look after it well...";
    },9000);
}



