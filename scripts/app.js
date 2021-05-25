//const { followCursor } = require("tippy.js");
//const { default: tippy } = require("tippy.js")
//const Flatted = require("flatted");
//const Flatted = require("flatted");
let firstplayer=false;
const fightgrid=document.querySelectorAll('.fight-grid');
const obrazki=document.querySelectorAll('.obrazki');
let FirstHP=document.querySelector('.hp1');
let FirstATK=document.querySelector('.atak1');
let SecondHP=document.querySelector('.hp2');
let SecondATK=document.querySelector('.atak2');
let tytuły=[['Tępy','Moczymordy','Obszczymura','Denata','Parobka','Zjeba'],
['Ostry','Rzezimieszka','Twojego taty','Syna koleżanki twojej starej','Rycerza','Kamila Z'],
['Epicki','Syna Kowala','Księcia','Odkrywcy','Korisa','Twojego Wujka'],
['Legendarny','Kasteta THC','Smoka','Diabła','Korisa Starego','Jarka Lichwaly'],]
let NrPerFloor=0;
let instance;
let wearing=document.querySelectorAll('.sloty');
const walkaButton=document.querySelector('#walka');
let loot=['img/swords1.png','img/swords2.png','img/swords3.png'];
let inventoryslots=document.querySelectorAll('.inventory-slots');
let equipment=[false,false,false,false,false];
let equipmentweapons=[];
let bronie=[];
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setURL(styleof,geticon){
return styleof.style.backgroundImage="url("+geticon+")"
}
function wylosujloot(){
let index=Math.floor(Math.random()*3);
return loot[index];
}
function Player(atak,hp){
this.atak=atak;
this.hp=hp;
}
function Monster(atak,hp){
this.atak=atak;
this.hp=hp;
this.generujnowego=function(){
    const randatak=Math.floor(Math.random()*5)+1;    
    const randhp=Math.floor(Math.random()*30)+10;
this.atak=randatak;
this.hp=randhp;    
}    
}
function Miecz(){
let rand=generateRandomNumber(1,5);
this.losowa=generateRandomNumber(1,100);
let index=Math.floor(Math.random()*3);
this.identyfikator=NrPerFloor;
this.icon=loot[index];
if(this.losowa<65){
this.atak=generateRandomNumber(1,5);
this.rarity="Common"; 
this.kolor="gray";
this.penis=function(){
console.log(this.atak);    
}
this.title=`${tytuły[0][0]} miecz ${tytuły[0][rand]}`  
}
else if(this.losowa>=65&&this.losowa<=95){
this.atak=generateRandomNumber(6,9)
this.rarity="Rare";
this.kolor="blue";
this.title=`${tytuły[1][0]} miecz ${tytuły[1][rand]}`    
}
else if(this.losowa>95&&this.losowa<100){
this.atak=generateRandomNumber(9,12)
this.rarity="Epic";
this.kolor="purple";
this.title=`${tytuły[2][0]} miecz ${tytuły[2][rand]}`   
}
else if(this.losowa===100){
this.atak=generateRandomNumber(12,16);
this.rarity="Legendary";
this.kolor="orange";
this.title=`${tytuły[3][0]} miecz ${tytuły[3][rand]}`    
}
this.nazwa=this.identyfikator;
this.opis=function(parent){
    this.nazwa=tippy(parent,{
        theme:'informacja',
        allowHTML:true,
        content:`
        ${this.title}<br>
        Atak: ${this.atak}<br>
        Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
        `,})}
        this.usunopis=function(){
        this.nazwa.destroy();
}   
}
function walka(u1,u2){ // Fight
obrazki[0].style.display='none';
fightgrid[0].style.opacity="1";
fightgrid[1].style.opacity="1";
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
if(currentMonster.hp<=0){
NrPerFloor++;
bronie.push(new Miecz());
    for(let i=0;i<equipment.length;i++){
        if(equipment[i]===false){
            setURL(inventoryslots[i],bronie[bronie.length-1].icon)
            inventoryslots[i].przypisane=bronie[bronie.length-1];
            inventoryslots[i].przypisane.opis(inventoryslots[i]);
            console.log(inventoryslots[i].przypisane)
            equipment[i]=true;
            //test();
            break;    
        }
}
//inventoryslots[0].style.backgroundImage="url("+sword.icon+")";
u2.generujnowego();   
}
}
function updatefightstats(u1,u2){ //Updates stats in the fight
FirstHP.innerHTML=`HP:${u1.hp}`;
SecondHP.innerHTML=`HP:${u2.hp}`;
FirstATK.innerHTML=`Atak:${u1.atak}`;
SecondATK.innerHTML=`Atak:${u2.atak}`;
save();
}
let ftime=false;
function save(){ // Saves the game
let save ={
hp1:gracz.hp,
hp2:currentMonster.hp,
}
let eq=zapiszeq();
if(inventoryslots[0].przypisane!=undefined){
    ftime=true;
    localStorage.setItem('ftime',ftime);    
}
localStorage.setItem('eqsave',Flatted.stringify(eq));
localStorage.setItem('save',JSON.stringify(save));    
}
function load(){ // Loades the game
let savedstate=JSON.parse(localStorage.getItem('save'));
ftime=localStorage.getItem('ftime');
if(ftime){
var savedeq=Flatted.parse(localStorage.getItem('eqsave'));
}
if(savedeq!=undefined){
    for (let i=0;i<savedeq.length;i++){
    inventoryslots[i].przypisane=savedeq[i];
    setURL(inventoryslots[i],inventoryslots[i].przypisane.icon);
    inventoryslots[i].przypisane.opis=function(parent){
        this.nazwa=tippy(parent,{
            theme:'informacja',
            allowHTML:true,
            content:`
            ${this.title}<br>
            Atak: ${this.atak}<br>
            Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
            `,})}
            inventoryslots[i].przypisane.usunopis=function(){
                this.nazwa.destroy();
        }   
        equipment[i]=true;
        console.log(equipment);
            inventoryslots[i].przypisane.opis(inventoryslots[i]);
    }
}
fightgrid[0].style.opacity="0";
fightgrid[1].style.opacity="0";
if (savedstate!=null&&savedstate!=undefined){
gracz.hp=savedstate.hp1;
currentMonster.hp=savedstate.hp2;
updatefightstats(gracz,currentMonster)    
}
else{
updatefightstats(gracz,currentMonster)    
}   
} 
let gracz=new Player(5,100);
let currentMonster=new Monster(3,25);
walkaButton.addEventListener('click',()=>{
walka(gracz,currentMonster) 
})
//Reset
document.querySelector('#reset').addEventListener('click',()=>{localStorage.clear()
window.location.reload();
});
function red(myElement){
let aktualnykolor=getComputedStyle(myElement).color;
myElement.style.color="red";
setTimeout(()=>{myElement.style.color=aktualnykolor;},1000)
}  
load();
for (let i=0;i<inventoryslots.length;i++){
inventoryslots[i].addEventListener('click',()=>{
if(inventoryslots[i].przypisane!=undefined){
    if(inventoryslots[i].przypisane!=undefined&&wearing[0].przypisane!=undefined){
    let placeholder=wearing[0].przypisane;
    gracz.atak-=wearing[0].przypisane.atak;
    inventoryslots[i].przypisane.usunopis();
    wearing[0].przypisane.usunopis();
    wearing[0].przypisane=inventoryslots[i].przypisane;
    wearing[0].przypisane.opis(wearing[0]);
    setURL(wearing[0],inventoryslots[i].przypisane.icon)
    gracz.atak+=wearing[0].przypisane.atak;
    inventoryslots[i].przypisane=placeholder;
    inventoryslots[i].przypisane.opis(inventoryslots[i]);
    setURL(inventoryslots[i],placeholder.icon)
    //test();
    updatefightstats(gracz,currentMonster);
    }
else{
    inventoryslots[i].przypisane.usunopis()
    wearing[0].przypisane=inventoryslots[i].przypisane;
    wearing[0].przypisane.opis(wearing[0]);
    setURL(wearing[0],inventoryslots[i].przypisane.icon)
    event.target.przypisane=undefined;
    event.target.style.backgroundImage="none";
    equipment[i]=false;
    //test();
    equipitem();
    updatefightstats(gracz,currentMonster);
}
}
})
}
function equipitem(){
for(let i=0;i<wearing.length;i++){
if(wearing[i].przypisane!=undefined){
gracz.atak+=wearing[i].przypisane.atak;   
}    
}
}
function unequiptitem(){
    for(let i=0;i<wearing.length;i++){
    wearing[i].addEventListener('click',()=>{ //Zamienia item tutja?
        if(wearing[i].przypisane!=undefined){
            if(equipment[i]===false){
                setURL(inventoryslots[i],wearing[i].przypisane.icon)
                wearing[0].przypisane.usunopis();
                inventoryslots[i].przypisane=wearing[i].przypisane;
                inventoryslots[i].przypisane.opis(inventoryslots[i]);
                equipment[i]=true;
                //test();    
            }
            else if(equipment[i]===true){ 
            let x=equipment.indexOf(false);
            setURL(inventoryslots[x],wearing[i].przypisane.icon)
            wearing[0].przypisane.usunopis();
            inventoryslots[x].przypisane=wearing[i].przypisane;
            inventoryslots[x].przypisane.opis(inventoryslots[x]);
            equipment[x]=true;
            //test();
            }
            gracz.atak-=wearing[i].przypisane.atak;
            updatefightstats(gracz,currentMonster)   
            event.target.przypisane=undefined;
        event.target.style.backgroundImage='url("img/protest.svg")';
        }    
    })
}
}
let empty=false;
unequiptitem();
function zapiszeq(){
    let arrayforsave=[];
    for (let i = 0; i < inventoryslots.length; i++) {
    if(inventoryslots[i].przypisane!=undefined){
    arrayforsave.push(inventoryslots[i].przypisane)
    }
}
    return arrayforsave;
};