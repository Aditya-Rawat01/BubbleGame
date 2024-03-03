var numW=document.querySelector(".numbers").offsetWidth;
var numH=document.querySelector(".numbers").offsetHeight;
var numbers=document.querySelector(".numbers");
var hit=document.querySelector(".hit");
var Timer=document.querySelector(".timer");
var Score=document.querySelector(".Score");
var nbtn=0;
var Scorenum=0;
var samay=60;
for (let j=0; j<Math.floor((numH)/70); j++) {

for (let i=0;i<Math.floor((numW)/60);i++) {
    numbers.innerHTML+=`<button></button>`;
    nbtn++;}}
numbers.style.height="fit-content";

var btn=document.querySelectorAll("button");

function changenum(){
    btn.forEach(function(val){
        val.innerHTML=Math.floor(Math.random()*20);
        
    });
    hit.innerHTML=btn[(Math.floor(Math.random()*nbtn))].textContent;
    Score.textContent=Scorenum;Scorenum++;
};

changenum();

function Gameover(){
    numbers.style.display="flex";
            numbers.style.justifyContent="center";
            numbers.style.alignItems="center";
            numbers.innerHTML="<h1>GAME OVER :[</h1>";
            clearInterval(counter);
};
var counter;
function Time(){
    counter=setInterval(function() {
       samay--;Timer.textContent=samay;
       if (Timer.textContent>=35){Timer.style.color="rgb(8, 189, 8)";}
       else if (Timer.textContent>=10) {Timer.style.color="rgb(238, 133, 13)";}
       else {Timer.style.color="red";}
       if (Timer.textContent==0){Gameover();}},1000);
       
    }
Time();


btn.forEach(function(val){
    val.addEventListener("click",function(){
        if (val.textContent==hit.textContent){
            changenum();
            }
        else {
            Gameover();
            
        }    
        
    }
    
    )
});
btn.forEach(function(val){
    val.addEventListener("mousedown",function(){
        if (val.textContent==hit.textContent){
            val.style.backgroundColor="rgb(8, 246, 28)";
            Score.style.backgroundColor="rgb(8, 246, 28)";
            Score.style.color="white";
            setTimeout(function(){
                val.style.backgroundColor="White";
                Score.style.backgroundColor="White"; 
                Score.style.color="black";
            },200)
            }
            else {
                val.style.backgroundColor="Red";
            }
    })})



