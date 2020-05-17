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



let decayInt;
gamePlaying=false;

function stasis(){
if(hunger.textContent<=0){   gamePlaying=false;   
    hunger.textContent==0;

}
else if(hunger.textContent>=10){
    gamePlaying=false;
    hunger.textContent==10;
};

if(thirst.textContent<=0){  
    gamePlaying=false;
    thirst.textContent==0;
}
else if(thirst.textContent>=10){
    gamePlaying=false;
    thirst.textContent==10;
};

if(sad.textContent<=0){
    gamePlaying=false;
    sad.textContent==0
}
else if(sad.textContent>=10){
    gamePlaying=false;
    sad.textContent==10
};

if(fun.textContent<=0){
    gamePlaying=false;
    fun.textContent==0
}
else if(fun.textContent>=10){
    gamePlaying=false;
    fun.textContent==10
};
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
    header.textContent=" ";
    feedBtn.style.visibility="visible";
    drinkBtn.style. visibility="visible";
    playBtn.style.visibility="visible";
    hunger.textContent=3;
    thirst.textContent=5;
    sad.textContent=4;
    fun.textContent=6;
    decayInt=setInterval(decay,6000);
    stasis();
    
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
        header.textContent="Yo pet died!";
        gameOver();
        
    }
    else if(sad.textContent>=10||fun.textContent<=0){
        gamePlaying=false;
        header.textContent="Yo pet died!";
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
    clearInterval(decayInt);
    feedBtn.style.visibility="hidden";
    drinkBtn.style. visibility="hidden";
    playBtn.style.visibility="hidden";
    setTimeout(reset(),9000);
}

function reset(){
    petImage.src="";
    header.textContent="Pick your pet and look after it well...";
}

