let firstplayer=false;
const fightgrid=document.querySelector('.fight-grid');
const obrazki=document.querySelectorAll('.obrazki');
let FirstHP=document.querySelector('.hp1');
let FirstATK=document.querySelector('.atak1');
let SecondHP=document.querySelector('.hp2');
let SecondATK=document.querySelector('.atak2');
const walkaButton=document.querySelector('#walka');
function Red(atak,hp){
this.atak=atak;
this.hp=hp;
this.pokaz=function(){
console.log(this.atak,this.hp);    
}
}
function walka(u1,u2){ // Fight
obrazki[0].style.display='none';
fightgrid.style.opacity="1";
if(firstplayer===false){   
u2.hp=u2.hp-u1.atak; // /Hits 2nd target
red(SecondHP);
updatefightstats(u1,u2)
firstplayer=true;
}
else{
u1.hp=u1.hp-u2.atak;
red(FirstHP); // Hits 1st target
updatefightstats(u1,u2)
firstplayer=false;
}  
}
function updatefightstats(u1,u2){ //Updates stats in the fight
FirstHP.innerHTML=`HP:${u1.hp}`;
SecondHP.innerHTML=`HP:${u2.hp}`;
FirstATK.innerHTML=`Atak:${u1.atak}`;
SecondATK.innerHTML=`Atak:${u2.atak}`;
save();
if(u1.hp===0||u2.hp===0){
alert('koniecwalki')    
}
}
function save(){ // Saves the game
let save ={
hp1:wojo.hp,
hp2:wojo2.hp,    
}
localStorage.setItem('save',JSON.stringify(save));    
}
function load(){ // Loades the game
let savedstate=JSON.parse(localStorage.getItem('save'));
fightgrid.style.opacity="0";
if (savedstate!=null&&savedstate!=undefined){
wojo.hp=savedstate.hp1;
wojo2.hp=savedstate.hp2;
updatefightstats(wojo,wojo2)    
}
else{
updatefightstats(wojo,wojo2)    
}   
} 
let wojo=new Red(10,40);
let wojo2=new Red(10,50);
walkaButton.addEventListener('click',()=>{
walka(wojo,wojo2) 
})
//Reset
document.querySelector('#reset').addEventListener('click',()=>{localStorage.clear()
window.location.reload();
});
function red(myElement){
let aktualnykolor=getComputedStyle(myElement).color;
console.log(aktualnykolor);
myElement.style.color="red";
setTimeout(()=>{myElement.style.color=aktualnykolor;},1000)
}    
load();