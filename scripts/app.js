//TODO Dodac zapiswanie sklepu | Dodac zapisywanie aktualnej ilosci expa
//const { followCursor } = require("tippy.js");
//const { default: tippy } = require("tippy.js")
//const Flatted = require("flatted");
//const Flatted = require("flatted");
//const Flatted = require("flatted");
//window.addEventListener("contextmenu", e => e.preventDefault());
let firstplayer=false;
let stage=[1,1];
let nroffight=1;
let level=1;
let freepoints=5;
let gold={
display:document.querySelector('.goldamount'),
amount:Number(0),
}
const freepointsdisplay=document.querySelector('.wolnepkt');
const bazowestatystyki=document.querySelectorAll('.statynr');
const dodajstatystyki=document.querySelectorAll('.addpoint');
let itemicons=document.querySelectorAll('.sklepitem');
let magia=5;
let astrologia=5;
let enemiesarray=new Array()
for(let i=1;i<12;i++){
if(i>=10){
enemiesarray.push(`img/enemies/x2 size/${i}.png`)    
enemiesarray.push(`img/enemies/x2 size/${i}b.png`)    
}
else{
    enemiesarray.push(`img/enemies/x2 size/0${i}.png`)    
    enemiesarray.push(`img/enemies/x2 size/0${i}b.png`)    
}    
}
function ChooseARandomEnemie(){
let rand=generateRandomNumber(0,21)
return enemiesarray[rand]; 
}
let turnsbeforepotion=0;
const healingpotiondisplay=document.querySelector('.healthpotion')
const stagedisplay=document.querySelector('.stage');
const leveldispay=document.querySelector('.level');
const xpvalue=document.querySelector('.xpvalue')
const elem = document.getElementById("myBar");
const fightgrid=document.querySelectorAll('.fight-grid');
const obrazki=document.querySelector('.obrazki');
const FirstHP=document.querySelector('.hp1');
const FirstATK=document.querySelector('.atak1');
const SecondHP=document.querySelector('.hp2');
const SecondATK=document.querySelector('.atak2');
const kulki=document.querySelectorAll('.kolka');
let inventoryarray=[];
let wearingarray=[];
let tytułymiecz=[['Tępy','Moczymordy','Obszczymura','Denata','Parobka','Zjeba','Orła Jabola'],
['Ostry','Rzezimieszka','Twojego taty','Syna koleżanki twojej starej','Rycerza','Kamila Z','Blowjobsa'],
['Epicki','Syna Kowala','Księcia','Odkrywcy','Korisa','Twojego Wujka','Miśka z nadarzyna'],
['Legendarny','Kasteta THC','Smoka','Diabła','Korisa Starego','Jarka Lichwaly','Tadka z Firmy'],]
let tytułyzbroja=[['Stary','Moczymordy','Obszczymura','Denata','Parobka','Zjeba','Orła Jabola'],
['Utwardzony','Rzezimieszka','Twojego taty','Syna koleżanki twojej starej','Rycerza','Kamila Z','Blowjobsa'],
['Epicki','Syna Kowala','Księcia','Odkrywcy','Korisa','Twojego Wujka','Miśka z nadarzyna'],
['Legendarny','Kasteta THC','Smoka','Diabła','Korisa Starego','Jarka Lichwaly','Tadka z Firmy'],]
const tytułyring=[['Podniszczony','Moczymordy','Obszczymura','Denata','Parobka','Zjeba','Orła Jabola'],
['Błyszczący','Rzezimieszka','Twojego taty','Syna koleżanki twojej starej','Rycerza','Kamila Z','Blowjobsa'],
['Epicki','Syna Kowala','Księcia','Odkrywcy','Korisa','Twojego Wujka','Miśka z nadarzyna'],
['Legendarny','Kasteta THC','Smoka','Diabła','Korisa Starego','Jarka Lichwaly','Tadka z Firmy'],]
let NrPerFloor=0;
let wearing=document.querySelectorAll('.sloty');
const walkaButton=document.querySelector('#walka');
const swordloot=['img/swords1.png','img/swords2.png','img/swords3.png'];
const chestloot=['img/Body-armor.svg','img/Raseone_Armor_2.svg','img/armor.svg']
const ringloot=['img/ring1.png','img/ring2.png','img/ring3.png']
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
function wylosujlootsword(){
let index=generateRandomNumber(0,2);
return swordloot[index];
}
function wylosujlootchestplate(){
let index=generateRandomNumber(0,2);
return chestloot[index];
}
function wylosujlootring(){
let index=generateRandomNumber(0,2);
return ringloot[index];
}
function Player(atak,hp,astrologia,magia){
this.atak=atak;
this.hp=hp;
this.astrologia=astrologia;
this.magia=magia;
}
function Monster(atak,hp){
this.atak=atak;
this.hp=hp;
this.generujnowego=function(){
    const randatak=Math.floor(Math.random()*5)+1;    
    const randhp=Math.floor(Math.random()*30)+10;
this.atak=randatak;
this.hp=randhp;
obrazki.src=ChooseARandomEnemie();   
}    
}
function ProgressBar() {
    let i = 0;
    this.xp=1000;
    this.basexp=0;
    this.przelicznik=Math.floor(this.xp/100);
    this.gainedxp=false;
    this.move=function(xp,przelicznik,basexp){
        if (i == 0) {
        i = 1;
        var width;
        width=1;
        var id = setInterval(frame, 500);
        function frame() {
            if(bar.gainedxp){
            let rand=generateRandomNumber(6,8);
            basexp+=Math.floor(xp/rand);
            bar.gainedxp=false;    
            }

            percentage=Math.floor(basexp/przelicznik);
            width=percentage;
            if (width >= 100) {
            clearInterval(id);
            elem.style.width='1%';
            elem.innerHTML='1%';
            i=0;
            bar.rerender();
            xpvalue.innerHTML=basexp+'/'+xp;
            } else{
            xpvalue.innerHTML=Math.floor(basexp)+'/'+Math.floor(xp);
            elem.style.width = width + "%";
            elem.innerHTML = Math.floor(width) + "%";
            }
        }
        }
    }
    this.rerender=function(){
    clearInterval(timer);
    Math.floor(this.xp=this.xp*1.06);
    this.basexp=1;
    this.przelicznik=Math.floor(this.xp/100);
    level++;
    freepoints+=2;
    checkforpoint();
    updatenumbers();
    updatelevel();
    this.move(this.xp,this.przelicznik,this.basexp); 
    }
    this.loadlevel=function(){
    for(let i=1;i<level;i++){
        Math.floor(this.xp=this.xp*1.06);
        this.basexp=1;
        this.przelicznik=Math.floor(this.xp/100); 
    }
    this.move(this.xp,this.przelicznik,this.basexp); 
    }
    let timer=setInterval(() => {
    this.move(this.xp,this.przelicznik,this.basexp);
    }, 1000);    
}
let bar=new ProgressBar();
class Miecz {
    constructor() {
        let rand = generateRandomNumber(1, 5);
        this.type='sword';
        this.identyfikator = NrPerFloor;
        this.icon = wylosujlootsword();
        this.wylosujstatystyki=function(MIN,MAX){
            this.losowa = generateRandomNumber(MIN,MAX);
        if (this.losowa < 65) {
            this.atak = generateRandomNumber(1, 5);
            this.price= generateRandomNumber(11,20);
            this.rarity = "Common";
            this.kolor = "gray";
            this.title = `${tytułymiecz[0][0]} miecz ${tytułymiecz[0][rand]}`;
        }
        else if (this.losowa >= 65 && this.losowa <= 95) {
            this.atak = generateRandomNumber(6, 9);
            this.price= generateRandomNumber(35,60);
            this.rarity = "Rare";
            this.kolor = "blue";
            this.title = `${tytułymiecz[1][0]} miecz ${tytułymiecz[1][rand]}`;
        }
        else if (this.losowa > 95 && this.losowa < 100) {
            this.atak = generateRandomNumber(9, 12);
            this.price= generateRandomNumber(120,150);
            this.rarity = "Epic";
            this.kolor = "purple";
            this.title = `${tytułymiecz[2][0]} miecz ${tytułymiecz[2][rand]}`;
        }
        else if (this.losowa === 100) {
            this.atak = generateRandomNumber(12, 16);
            this.price= generateRandomNumber(300,450);
            this.rarity = "Legendary";
            this.kolor = "orange";
            this.title = `${tytułymiecz[3][0]} miecz ${tytułymiecz[3][rand]}`;
        }
    }
        this.nazwa = this.identyfikator;
        this.opis = function (parent) {
            this.nazwa = tippy(parent, {
                theme: 'informacja',
                allowHTML: true,
                content: `
        ${this.title}<br>
        Atak: ${this.atak}<br>
        <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
        Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
        `,
            });
        };
        this.usunopis = function () {
            this.nazwa.destroy();
        };
    }
}
class Chestplate {
    constructor() {
        let rand = generateRandomNumber(1, 5);
        this.type='chestplate';
        this.identyfikator = NrPerFloor;
        this.icon = wylosujlootchestplate();
        this.wylosujstatystyki=function(MIN,MAX){
            this.losowa = generateRandomNumber(MIN,MAX);
        if (this.losowa < 65) {
            this.hp = generateRandomNumber(5, 30);
            this.price= generateRandomNumber(11,20);
            this.rarity = "Common";
            this.kolor = "gray";
            this.title = `${tytułyzbroja[0][0]} napiersnik ${tytułyzbroja[0][rand]}`;
        }
        else if (this.losowa >= 65 && this.losowa <= 95) {
            this.hp = generateRandomNumber(31, 55);
            this.price= generateRandomNumber(20,35);
            this.rarity = "Rare";
            this.kolor = "blue";
            this.title = `${tytułyzbroja[1][0]} napiersnik ${tytułyzbroja[1][rand]}`;
        }
        else if (this.losowa > 95 && this.losowa < 100) {
            this.hp = generateRandomNumber(56, 79);
            this.price= generateRandomNumber(120,150);
            this.rarity = "Epic";
            this.kolor = "purple";
            this.title = `${tytułyzbroja[2][0]} napiersnik ${tytułyzbroja[2][rand]}`;
        }
        else if (this.losowa === 100) {
            this.hp = generateRandomNumber(80, 115);
            this.price= generateRandomNumber(300,450);
            this.rarity = "Legendary";
            this.kolor = "orange";
            this.title = `${tytułyzbroja[3][0]} napiersnik ${tytułyzbroja[3][rand]}`;
        }
    }
        this.nazwa = this.identyfikator; // Moze byc blad
        this.opis = function (parent) {
            this.nazwa = tippy(parent, {
                theme: 'informacja',
                allowHTML: true,
                content: `
        ${this.title}<br>
        HP: ${this.hp}<br>
        <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
        Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
        `,
            });
        };
        this.usunopis = function () {
            this.nazwa.destroy();
        };
    }
}
class Ring {
    constructor() {
        let rand = generateRandomNumber(1, 5);
        this.type='ring';
        this.identyfikator = NrPerFloor;
        this.icon = wylosujlootring();
        this.wylosujstatystyki=function(MIN,MAX){
        this.losowa = generateRandomNumber(MIN,MAX);
        if (this.losowa < 65) {
            this.astrologia = generateRandomNumber(5,15);
            this.magia = generateRandomNumber(5,15);
            this.price= generateRandomNumber(11,20);
            this.rarity = "Common";
            this.kolor = "gray";
            this.title = `${tytułyring[0][0]} pierscien ${tytułyring[0][rand]}`;
        }
        else if (this.losowa >= 65 && this.losowa <= 95) {
            this.astrologia = generateRandomNumber(15,25);
            this.magia = generateRandomNumber(15,25);
            this.price= generateRandomNumber(35,60);
            this.rarity = "Rare";
            this.kolor = "blue";
            this.title = `${tytułyring[1][0]} pierscien ${tytułyring[1][rand]}`;
        }
        else if (this.losowa > 95 && this.losowa < 100) {
            this.astrologia = generateRandomNumber(25,40);
            this.magia = generateRandomNumber(25,40);
            this.price= generateRandomNumber(120,150);
            this.rarity = "Epic";
            this.kolor = "purple";
            this.title = `${tytułyring[2][0]} pierscien ${tytułyring[2][rand]}`;
        }
        else if (this.losowa === 100) {
            this.astrologia = generateRandomNumber(40,55);
            this.magia = generateRandomNumber(40,55);
            this.price= generateRandomNumber(300,450);
            this.rarity = "Legendary";
            this.kolor = "orange";
            this.title = `${tytułyring[3][0]} pierscien ${tytułyring[3][rand]}`;
        }
    }
        this.nazwa = this.identyfikator; // Moze byc blad
        this.opis = function (parent) {
            this.nazwa = tippy(parent, {
                theme: 'informacja',
                allowHTML: true,
                content: `
        ${this.title}<br>
        Astrologia: ${this.astrologia}<br>
        Magia: ${this.magia}<br>
        <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
        Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
        `,
            });
        };
        this.usunopis = function () {
            this.nazwa.destroy();
        };
    }
    
}
class Eqslot {
    constructor(visualslot, item) {
        this.hasitem = false;
        this.slot = visualslot;
        this.item = item;
        //To pod tym skraca ekwipowanie bo tam sie duzo kodu powtarza ale tutaj to bierze 2 parametry przec co kod jest suchy
        this.shortequip = function (wearslot) {
            this.hasitem = false;
            this.item.usunopis();
            wearslot.item = this.item;
            wearslot.item.opis(wearslot.slot);
            switch (wearslot.item.type) {
                case 'chestplate':
                    gracz.hp += this.item.hp;
                    break;
                case 'sword':
                    gracz.atak += this.item.atak;
                    break;
                case 'ring':
                    gracz.astrologia += this.item.astrologia;
                    gracz.magia += this.item.magia;
                    break;
            }
            updatefightstats(gracz, currentMonster);
            this.item = undefined;
            setURL(wearslot.slot, wearslot.item.icon);
            wearslot.hasitem = true;
            event.target.style.backgroundImage = "none";
            updatenumbers();
            save();
        };
        this.swapitems = function (waeringslot) {
            let placeholder = waeringslot.item;
            switch (waeringslot.item.type) {
                case 'sword':
                    gracz.atak -= waeringslot.item.atak;
                    break;
                case 'chestplate':
                    gracz.hp -= waeringslot.item.hp;
                    break;
                case 'ring':
                    gracz.astrologia -= waeringslot.item.astrologia;
                    gracz.magia -= waeringslot.item.magia;
                    break;
            }
            this.item.usunopis();
            waeringslot.item.usunopis();
            waeringslot.item = this.item;
            switch (waeringslot.item.type) {
                case 'sword':
                    gracz.atak += waeringslot.item.atak;
                    break;
                case 'chestplate':
                    gracz.hp += waeringslot.item.hp;
                    break;
                case 'ring':
                    gracz.astrologia += waeringslot.item.astrologia;
                    gracz.magia += waeringslot.item.magia;
                    break;
            }
            waeringslot.item.opis(waeringslot.slot);
            setURL(waeringslot.slot, this.item.icon);
            this.item = placeholder;
            this.item.opis(this.slot);
            setURL(this.slot, placeholder.icon);
            save();
            updatenumbers();
            updatefightstats(gracz, currentMonster);
        };
        this.equip = function () {
            switch (this.item.type) {
                case 'chestplate':
                    this.shortequip(wearingarray[1]);
                    break;
                case 'sword':
                    this.shortequip(wearingarray[0]);
                    break;
                case 'ring':
                    this.shortequip(wearingarray[2]);
                    break;
            }
        };
        this.slot.addEventListener('click', () => {
            if (this.item != undefined) {
                switch (this.item.type) {
                    case 'chestplate':
                        if (wearingarray[1].hasitem === true) {
                            this.swapitems(wearingarray[1]);
                        }
                        else {
                            this.equip();
                        }
                        break;
                    case 'sword':
                        if (wearingarray[0].hasitem === true) {
                            this.swapitems(wearingarray[0]);
                        }
                        else {
                            this.equip();
                        }
                        break;
                    case 'ring':
                        if (wearingarray[2].hasitem === true) {
                            this.swapitems(wearingarray[2]);
                        }
                        else {
                            this.equip();
                        }
                        break;
                }
            }
        });
    }
    SellItems(){
    this.slot.addEventListener('contextmenu',()=>{
        if(shop.isopen&&this.hasitem){
            this.item.usunopis();
            this.hasitem=false;
            event.target.style.backgroundImage='none';
            gold.amount+=this.item.price;
            gold.display.innerHTML=`<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
            delete this.item;
            save();
        }
    })  //Stad trza ruszyc    
    }
}
class Wearslot {
    constructor(visualslot, item) {
        this.hasitem = false;
        this.slot = visualslot;
        this.item = item;
        this.addlistenforunequip = function () {
            this.slot.addEventListener('click', () => {
                this.unequip();
            });
        };
        this.unequip = function () {
            if (this.hasitem === true) {
                for (const i of inventoryarray) {
                    if (i.hasitem === false) {
                        this.item.usunopis();
                        this.hasitem = false;
                        i.item = this.item;
                        i.hasitem = true;
                        i.item.opis(i.slot);
                        setURL(i.slot, i.item.icon);
                        switch (this.item.type) {
                            case 'sword':
                                event.target.style.backgroundImage = 'url("img/protest.svg")';
                                gracz.atak -= this.item.atak;
                                break;
                            case 'chestplate':
                                event.target.style.backgroundImage = 'url("img/defaultchest.svg")';
                                gracz.hp -= this.item.hp;
                                break;
                            case 'ring':
                                event.target.style.backgroundImage = 'url("img/defaultring.svg")';
                                gracz.magia -= this.item.magia;
                                gracz.astrologia -= this.item.astrologia;
                                break;
                        }
                        updatefightstats(gracz, currentMonster);
                        this.item = undefined;
                        break;
                    }
                }
                save();
                updatenumbers();
            }
        };
    }
}
class HealingPotion{
    constructor(){
        this.canheal=true;
        this.display=document.querySelector('.healthpotion');
        this.usageinfo='Ready to use';
        this.tippyinstance=tippy(this.display, {
        theme: 'informacjapotka',
        allowHTML: true,
        content: `Healing Potion<br>
        Heals you for 25% of your HP.<br>
        Can be used every 4 turns.<br>
        Turns Left: ${this.usageinfo}
        `,
    });
    this.display.addEventListener('click',this.Heal.bind(this),false)
    }
    Odswiezinstancje(){
        this.tippyinstance.setContent(`Healing Potion<br>
        Heals you for 25% of your HP.<br>
        Can be used every 4 turns.<br>
        Turns Left: ${this.usageinfo}
        `);     
    }
    Heal(){
        if(this.canheal){
        gracz.hp+=liczmaxhp()*0.25;
        this.canheal=false;
        turnsbeforepotion=0;
        this.usageinfo=`Turns left: ${turnsbeforepotion}`;
        this.Odswiezinstancje();
        }
    save();
    updatefightstats(gracz,currentMonster);
    updatenumbers();
    }
    CheckforHeal(){
    if(turnsbeforepotion===4){
    this.usageinfo='Ready to use';
    this.canheal=true;
    this.Odswiezinstancje();
    }
    else if(turnsbeforepotion===0&&this.canheal){
        this.Odswiezinstancje();
    }
    else {
        this.usageinfo=`Turns left: ${turnsbeforepotion}`;
        this.Odswiezinstancje();    
    } 
    }
}
class Shopslot{
constructor(visualslot,item){
this.hasitem=false;
this.icon=visualslot;
this.item=item;
this.icon.addEventListener('click',()=>{
if(gold.amount>=this.item.price){ //! Zmieniono na mniejsze napraw later on
for (const i of inventoryarray) {
console.log(i);
if(i.hasitem===false){
gold.amount-=this.item.price;
gold.display.innerHTML=`${gold.amount} Yangow`;
this.hasitem=false;
i.hasitem=true;
i.item=this.item;
this.item.usunopis();
setURL(i.slot,this.item.icon)
this.icon.style.backgroundImage='none';
i.item.price=Math.floor(i.item.price/3)
i.item.opis(i.slot)
this.item=undefined;
zapiszeq();
save();
break;
}   
}
}
}
)}}
console.log(inventoryarray)
class Shop{
constructor(){
this.icon=document.querySelector('.sklepicon');
this.grid=document.querySelector('.sklep');
this.items=new Array();
this.shopslotarray=new Array();
this.isopen=false;
this.grid.style.display='none';
this.icon.addEventListener('click',this.openshop.bind(this));
this.additems=function(){
for(const i of itemicons){
const cointoss=generateRandomNumber(1,3);
switch (cointoss){
    case 1:
            this.items.push(new Miecz);
            this.shopslotarray.push(new Shopslot(i,this.items[this.items.length-1]));
            break;
    case 2:
            this.items.push(new Chestplate);
            this.shopslotarray.push(new Shopslot(i,this.items[this.items.length-1]));
            break;
    case 3:
            this.items.push(new Ring);
            this.shopslotarray.push(new Shopslot(i,this.items[this.items.length-1]));
            break;
}
let inx=this.items.length-1;
setURL(this.shopslotarray[inx].icon,this.shopslotarray[inx].item.icon)
this.shopslotarray[inx].item.wylosujstatystyki(65,100);
this.shopslotarray[inx].item.price*=3;
this.shopslotarray[inx].hasitem=true;
this.shopslotarray[inx].item.opis(this.shopslotarray[inx].icon)
}
}
}
openshop(){
if(this.isopen===false){
    this.isopen=true;
    clearInterval(fightishappening);
    this.grid.style.display='flex';
    obrazki.src='img/rpgshop.gif';
    obrazki.style.marginBottom="3%"
    document.querySelector('main').classList.add('zmientlo');
    setTimeout(() => { // ? Asynchronicznie musi wywolac to gowno bo inaczej window object staje sie sraka
        this.CloseShop();  
    }, 100);
    inventoryarray.forEach(item=>item.SellItems())
}
}
CloseShopFunction(){
    const blokwalki=document.querySelector('main');
    if(event.target!==blokwalki){
        document.querySelector('.sklep').style.display='none';
        obrazki.style.marginBottom="0%"
        obrazki.src=ChooseARandomEnemie();
        shop.isopen=false;
        blokwalki.classList.remove('zmientlo');
        shop.CloseShop();
        window.removeEventListener('click',this.CloseShopFunction)
        }  
}
CloseShop(){
if(this.isopen){
window.addEventListener('click',this.CloseShopFunction)
}
else{
window.removeEventListener('click',this.CloseShopFunction)
}
} 
}
const shop=new Shop();
shop.additems();
const Healpot=new HealingPotion();
let slot1=new Eqslot(inventoryslots[0])
let slot2=new Eqslot(inventoryslots[1])
let slot3=new Eqslot(inventoryslots[2])
let slot4=new Eqslot(inventoryslots[3])
let slot5=new Eqslot(inventoryslots[4])
let weaponslot=new Wearslot(wearing[0]);
let chestslot=new Wearslot(wearing[1]);
let ringslot=new Wearslot(wearing[2]);
inventoryarray.push(slot1,slot2,slot3,slot4,slot5);   
wearingarray.push(weaponslot,chestslot,ringslot);
function updatestage(){
stagedisplay.innerHTML=`Stage: ${stage[0]}-${stage[1]}`
}
function updatelevel(){
leveldispay.innerHTML=`Level: ${level}`;
}
function walka(u1,u2){ // Fight
fightgrid[0].style.opacity="1";
fightgrid[1].style.opacity="1";
if(Healpot.canheal===false){turnsbeforepotion++};
Healpot.CheckforHeal();
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
bar.gainedxp=true;
for (const i of kulki) {
if(i.classList.contains('wypelnione')){
if(nroffight===5){
stage[1]++;
for (let i of kulki) {
i.classList.remove('wypelnione');    
}
updatestage();
nroffight=1;
break;
}
continue;   
}
else{
nroffight++;
i.classList.add('wypelnione');
break;
}
} 
NrPerFloor++;
const somerandomnumber=generateRandomNumber(1,3);
switch(somerandomnumber){
case 1:
    bronie.push(new Chestplate());
    break
case 2:
    bronie.push(new Miecz());
    break;
case 3:
    bronie.push(new Ring());
    break; 
}
for(let i=0;i<inventoryarray.length;i++){
if(inventoryarray[i].hasitem===false){
            setURL(inventoryarray[i].slot,bronie[bronie.length-1].icon)
            bronie[bronie.length-1].wylosujstatystyki(1,100);
            inventoryarray[i].item=bronie[bronie.length-1];
            inventoryarray[i].item.opis(inventoryarray[i].slot);
            inventoryarray[i].hasitem=true;
            break;     
        }
} 
u2.generujnowego();   
}
}
function updatefightstats(u1,u2){ //Updates stats in the fight
FirstHP.innerHTML=`HP:${Math.floor(u1.hp)}`;
SecondHP.innerHTML=`HP:${u2.hp}`;
FirstATK.innerHTML=`Atak:${u1.atak}`;
SecondATK.innerHTML=`Atak:${u2.atak}`;
save();
}
let ftime=false;
let ftimeeq=false;
function save(){ // Saves the game
let save ={
gold:gold.amount,
healingpotioncanheal:Healpot.canheal,
turnsbeforepotion:turnsbeforepotion,
spendedonhealth:spendedonhealth,
freepunkty:freepoints,
graczatak:gracz.atak,
graczmagia:gracz.magia,
graczastro:gracz.astrologia,
hp1:gracz.hp,
hp2:currentMonster.hp,
levelsaved:level,
stagesaved:stage,
basexp:bar.basexp,
}
let eq=zapiszeq();
let equbrane=zapiszubrane();
if(inventoryarray[0].item!=undefined){
    ftime=true;
    localStorage.setItem('ftime',ftime);    
}
if(wearingarray[0].item||wearingarray[1].item||wearingarray[2].item){
ftimeeq=true;
localStorage.setItem('ftimeeq',ftimeeq);    
}
localStorage.setItem('eqsave',Flatted.stringify(eq));
localStorage.setItem('save',JSON.stringify(save));  
localStorage.setItem('equbrane',Flatted.stringify(equbrane))  
}
function load(){ // Loades the game
let savedstate=JSON.parse(localStorage.getItem('save'));
ftime=localStorage.getItem('ftime');
ftimeeq=localStorage.getItem('ftimeeq');
if(ftime){
var savedeq=Flatted.parse(localStorage.getItem('eqsave'));
}
if(savedeq!=undefined){
    for (let i=0;i<savedeq.length;i++){
    inventoryarray[i].item=savedeq[i];
    setURL(inventoryarray[i].slot,inventoryarray[i].item.icon);
        switch(inventoryarray[i].item.type){
        case 'sword':    
        inventoryarray[i].item.opis=function(parent){
            this.nazwa=tippy(parent,{ // Tu bedzie bug
                theme:'informacja',
                allowHTML:true,
                content:`
                ${this.title}<br>
                Atak: ${this.atak}<br>
                <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
                Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
                `,})}
        break;
        case 'chestplate':
            inventoryarray[i].item.opis=function(parent){
                this.nazwa=tippy(parent,{ // Tu bedzie bug
                    theme:'informacja',
                    allowHTML:true,
                    content:`
                    ${this.title}<br>
                    HP: ${this.hp}<br>
                    <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
                    Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
                    `,})}
        break;
        case 'ring':
            inventoryarray[i].item.opis=function(parent){
                this.nazwa=tippy(parent,{ // Tu bedzie bug
                    theme:'informacja',
                    allowHTML:true,
                    content:`
                    ${this.title}<br>
                    Astrologia: ${this.astrologia}<br>
                    Magia: ${this.magia}<br>
                    <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
                    Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
                    `,})} 
        }
            inventoryarray[i].item.usunopis=function(){
                this.nazwa.destroy();
        }   
        inventoryarray[i].hasitem=true;
        inventoryarray[i].item.opis(inventoryarray[i].slot);
    }
}
if(ftimeeq){
var savedubrane=Flatted.parse(localStorage.getItem('equbrane'));
if(savedubrane!=undefined){
    for (let i=0;i<savedubrane.length;i++){
        var inx;
        switch(savedubrane[i].type){
        case 'sword':
            inx=0;
            break;
        case 'chestplate':
            inx=1;
            break;
        case 'ring':
            inx=2;
            break;
        }
        wearingarray[inx].item=savedubrane[i];
        setURL(wearingarray[inx].slot,wearingarray[inx].item.icon);
        switch(wearingarray[inx].item.type){
            case 'sword':    
            wearingarray[inx].item.opis=function(parent){
                this.nazwa=tippy(parent,{ // Tu bedzie bug
                    theme:'informacja',
                    allowHTML:true,
                    content:`
                    ${this.title}<br>
                    Atak: ${this.atak}<br>
                    <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
                    Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
                    `,})}
            break;
            case 'chestplate':
                wearingarray[inx].item.opis=function(parent){
                    this.nazwa=tippy(parent,{ // Tu bedzie bug
                        theme:'informacja',
                        allowHTML:true,
                        content:`
                        ${this.title}<br>
                        HP: ${this.hp}<br>
                        <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
                        Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
                        `,})}
            break;
            case 'ring':
                wearingarray[inx].item.opis=function(parent){
                    this.nazwa=tippy(parent,{ // Tu bedzie bug
                        theme:'informacja',
                        allowHTML:true,
                        content:`
                        ${this.title}<br>
                        Astrologia: ${this.astrologia}<br>
                        Magia: ${this.magia}<br>
                        <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
                        Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
                        `,})}
                        break;
            }
                wearingarray[inx].item.usunopis=function(){
                    this.nazwa.destroy();
            }   
                updatefightstats(gracz,currentMonster)
                wearingarray[inx].hasitem=true;
                wearingarray[inx].item.opis(wearing[inx]);
        }    
}
}
fightgrid[0].style.opacity="0";
fightgrid[1].style.opacity="0";
if (savedstate!=null&&savedstate!=undefined){
gold.amount=savedstate.gold;
Healpot.canheal=savedstate.healingpotioncanheal;
Healpot.canheal=savedstate.healingpotioncanheal;
turnsbeforepotion=savedstate.turnsbeforepotion;
gracz.hp=savedstate.hp1;
currentMonster.hp=savedstate.hp2;
bar.basexp=savedstate.basexp;
gracz.atak=savedstate.graczatak;
gracz.astrologia=savedstate.graczastro;
gracz.magia=savedstate.graczmagia;
freepoints=savedstate.freepunkty;
level=savedstate.levelsaved;
spendedonhealth=savedstate.spendedonhealth;
bar.loadlevel();
updatelevel();
if(savedstate.stage!=undefined){
stage=savedstate.stagesaved;
updatelevel();
updatestage();
}
updatefightstats(gracz,currentMonster)    
}
else{
updatefightstats(gracz,currentMonster)    
} 
}
let gracz=new Player(5,100,5,5);
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
let empty=false;
function zapiszeq(){
    let arrayforsave=[];
    for (let i = 0; i < inventoryarray.length; i++) {
    if(inventoryarray[i].item!=undefined){
    arrayforsave.push(inventoryarray[i].item)
    }
}
    return arrayforsave;
};
function zapiszubrane(){
    let arrayforsaveubrane=[];
    for (let i = 0; i <wearing.length; i++) {
    if(wearingarray[i].item!=undefined){
    arrayforsaveubrane.push(wearingarray[i].item)
    }
}
    return arrayforsaveubrane;
};
 /*function zapiszsklep(){
    shop.shopslotarray.map(item=>{
    return item.hasitem===false;
    })
}; */ 
function addbasestats(){
checkforpoint();
for (let i=0; i < dodajstatystyki.length; i++){
switch(i){
case 0:{
dodajstatystyki[0].addEventListener('click',()=>{
if(freepoints>0){
    gracz.atak+=2;
    updatefightstats(gracz,currentMonster);
    freepoints--;
    save();
    updatenumbers();
}
})
break;    
}  
case 1:{
dodajstatystyki[1].addEventListener('click',()=>{
if(freepoints>0){
    spendedonhealth++;
    gracz.hp+=10;
    updatefightstats(gracz,currentMonster);
    freepoints--;
    save();
    updatenumbers();
}
})
break;    
}  
case 2:{
dodajstatystyki[2].addEventListener('click',()=>{
if(freepoints>0){
    gracz.magia+=2;
    updatefightstats(gracz,currentMonster);
    freepoints--;
    save();
    updatenumbers();
}
})
break;    
}  
case 3:{
dodajstatystyki[3].addEventListener('click',()=>{
if(freepoints>0){
    gracz.astrologia+=2;
    updatefightstats(gracz,currentMonster);
    freepoints--;
    save();
    updatenumbers();
}
})
break;    
}  
}
}
}
function checkforpoint(){
    if(freepoints<=0){
        dodajstatystyki.forEach(item=>item.disabled=true)
}
else{
dodajstatystyki.forEach(item=>item.disabled)
}
save();
}
function updatenumbers(){
    freepointsdisplay.innerHTML=`Wolne punkty: ${freepoints}`;
    bazowestatystyki[0].innerHTML=`Atak: ${gracz.atak}`
    bazowestatystyki[1].innerHTML=`Health: ${Math.floor(liczmaxhp())}`
    bazowestatystyki[2].innerHTML=`Magia: ${gracz.magia}`
    bazowestatystyki[3].innerHTML=`Astro: ${gracz.astrologia}`
}
let spendedonhealth=Number(0);
function liczmaxhp(){
let valueofklata;
if(wearingarray[1].item!==undefined){
    valueofklata=wearingarray[1].item.hp;
    }
else{
valueofklata=Number(0);    
}
const maxhp=100+valueofklata+(spendedonhealth*10);
return maxhp
}
load(); 
Healpot.CheckforHeal();
if(gold.amount!=undefined){
gold.display.innerHTML=`<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
}
updatenumbers();
addbasestats();
const fightishappening=setInterval(() => {
walka(gracz,currentMonster);    
}, 5000);
wearingarray.forEach(item=>item.addlistenforunequip())
