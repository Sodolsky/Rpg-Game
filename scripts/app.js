//TODO Dodac zapisywanie aktualnej ilosci expa <-Najlepiej zmienic to gowno na jakas libke || Wincyj spelli
//const { followCursor } = require("tippy.js");
//const { default: tippy } = require("tippy.js")
//const Flatted = require("flatted");
//const Flatted = require("flatted");
//const Flatted = require("flatted");
//const Flatted = require("flatted");
window.addEventListener("contextmenu", e => e.preventDefault());
let fightlock=false;
let muted=false;
let firstplayer=false;
let stage=[1,1];
let nroffight=1;
let level=1;
let freepoints=5;
let bossloot=false;
let gold={
display:document.querySelector('.goldamount'),
amount:Number(0),
}
let mods={
    buffmoddmg:1,
    enemymodhp:1,
    enemymodatak:1,
    eqmod:stage[1]/10,
    }
console.log('fst');
let BackArrowCopy;
const freepointsdisplay=document.querySelector('.wolnepkt');
const activebuffs=document.querySelector('.activebuffs');
document.querySelector('.mutebutton').addEventListener('click',muteAudio);
const bazowestatystyki=document.querySelectorAll('.statynr');
const dodajstatystyki=document.querySelectorAll('.addpoint');
const RefreshShop=document.querySelector('.refreshshopwrapper')
const RefreshShopButton=document.querySelector('.odswiezsklep')
const buffslots=document.querySelectorAll('.buff');
const goldsound=document.querySelector('.goldsound');
const goldsound2=document.querySelector('.goldsound2');
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
const ManaLeftDisplay=document.querySelector('.Mana-Left');
let inventoryarray=[];
let wearingarray=[];
const tytułymiecz=[['Tępy','Moczymordy','Obszczymura','Denata','Parobka','Zjeba','Orła Jabola'],
['Ostry','Rzezimieszka','Twojego taty','Syna koleżanki twojej starej','Rycerza','Kamila Z','Blowjobsa'],
['Epicki','Syna Kowala','Księcia','Odkrywcy','Korisa','Twojego Wujka','Miśka z nadarzyna'],
['Legendarny','Kasteta THC','Smoka','Diabła','Korisa Starego','Jarka Lichwaly','Tadka z Firmy'],]
const tytułyzbroja=[['Stary','Moczymordy','Obszczymura','Denata','Parobka','Zjeba','Orła Jabola'],
['Utwardzony','Rzezimieszka','Twojego taty','Syna koleżanki twojej starej','Rycerza','Kamila Z','Blowjobsa'],
['Epicki','Syna Kowala','Księcia','Odkrywcy','Korisa','Twojego Wujka','Miśka z nadarzyna'],
['Legendarny','Kasteta THC','Smoka','Diabła','Korisa Starego','Jarka Lichwaly','Tadka z Firmy'],]
const tytułyring=[['Podniszczony','Moczymordy','Obszczymura','Denata','Parobka','Zjeba','Orła Jabola'],
['Błyszczący','Rzezimieszka','Twojego taty','Syna koleżanki twojej starej','Rycerza','Kamila Z','Blowjobsa'],
['Epicki','Syna Kowala','Księcia','Odkrywcy','Korisa','Twojego Wujka','Miśka z nadarzyna'],
['Legendarny','Kasteta THC','Smoka','Diabła','Korisa Starego','Jarka Lichwaly','Tadka z Firmy'],]
let NrPerFloor=0;
let wearing=document.querySelectorAll('.sloty');
const swordloot=['img/swords1.png','img/swords2.png','img/swords3.png'];
const chestloot=['img/Body-armor.svg','img/Raseone_Armor_2.svg','img/armor.svg']
const ringloot=['img/ring1.png','img/ring2.png','img/ring3.png']
let inventoryslots=document.querySelectorAll('.inventory-slots');
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
class Player {
    constructor(atak, hp, astrologia, magia) {
        this.atak = atak;
        this.hp = hp;
        this.astrologia = astrologia;
        this.magia = magia;
        this.mana=this.magia;
        this.MieczIkona=document.querySelector('#AtakMieczem');
        this.MagiaIkona=document.querySelector('#AtakMagia');
        this.AstrologiaIkona=document.querySelector('#AtakAstrologia');
        this.AtakiDisplay=document.querySelector('.ataki');
        this.AtakiIcons=document.querySelectorAll('.akcjawalka');
        this.BackIcon=document.querySelector('.akcjawalkaB');
        this.AtakiImg=document.querySelectorAll('.akcjaobrazki');
        this.MieczIkona.addEventListener('click',this.AtakMieczem.bind(this))
        this.MagiaIkona.addEventListener('click',this.AtakMagiczny.bind(this))
        this.AstrologiaIkona.addEventListener('click',this.AtakAstrologia.bind(this))
        this.AtakMieczemSound=document.querySelector('.swordsound');
        this.MagicOrAstrologySelected=false;
    }
    AtakMieczem(){
    if(this.MagicOrAstrologySelected===false){
    walka(gracz,currentMonster,'normal');
    this.AtakMieczemSound.play();
    setTimeout(function() {
        walka(gracz,currentMonster);
    }, 1000);
    Buff.BuffsArray.forEach(item=>item.TickBuff());    
    }
    }
    AtakMagiczny(){
        if(this.MagicOrAstrologySelected===false){
        this.MagicOrAstrologySelected=true;
        this.AtakiDisplay.classList.add('showmoreoptionsMagic');
        this.AtakiIcons.forEach(item=>FadeOutandIn(item))
        this.AtakiImg.forEach(item=>item.src='img/yeti.png'); // ! Yeti to placeholder
        this.BackIcon.style.display="block"; 
        // ! JAK POPRAWNIE DODAĆ THIS DO EVENT LISTENERA
        BackArrowCopy=this.BackArrow.bind(this);
        this.BackIcon.addEventListener('click',BackArrowCopy,true);
    }
    }
    AtakAstrologia(){
    if(this.MagicOrAstrologySelected===false){
    this.MagicOrAstrologySelected=true;
    this.AtakiDisplay.classList.add('showmoreoptionsAstrology')
    this.AtakiIcons.forEach(item=>item.classList.add('hideandshow')) 
    this.AtakiImg.forEach(item=>item.src='img/yeti.png'); // ! Yeti to placeholder
    this.BackIcon.style.display="block"; 
        // ! JAK POPRAWNIE DODAĆ THIS DO EVENT LISTENERA
        BackArrowCopy=this.BackArrow.bind(this);
        this.BackIcon.addEventListener('click',BackArrowCopy,true);
    }
}
BackArrow(){
    this.AtakiImg[0].src='img/walkamiecz.svg';    
    this.AtakiImg[1].src='img/magic-wand.svg';    
    this.AtakiImg[2].src='img/alchemy.svg';
    this.AtakiIcons.forEach(item=>FadeOutandIn(item))
    this.BackIcon.style.display='none';
    this.AtakiDisplay.classList.remove('showmoreoptionsAstrology');
    this.AtakiDisplay.classList.remove('showmoreoptionsMagic');
    this.BackIcon.removeEventListener('click',BackArrowCopy,true);
    this.MagicOrAstrologySelected=false;
    }
}
class Monster {
    constructor(atak, hp) {
        this.atak = atak;
        this.hp = hp;
        this.bossExist=false;
        this.sounds=document.querySelectorAll('.monstersound');
        this.dzwiek=this.losujdzwiek();
    }
    generujnowego(){
        if(this.bossExist===false){
            updatefightstats(gracz,currentMonster)
            const randatak=generateRandomNumber(8,15)+mods.enemymodatak;    
            const randhp=generateRandomNumber(65,100)+mods.enemymodhp;
        this.atak=randatak;
        this.hp=randhp;
        this.dzwiek=this.losujdzwiek();
        obrazki.src=ChooseARandomEnemie(); 
        updatefightstats(gracz,currentMonster)  
        }
    }
    generujbossa(){
        if(nroffight===6){
            this.bossExist=true;
            const randatak=generateRandomNumber(20,25)+(mods.enemymodatak*2)    
            const randhp=generateRandomNumber(200,250)+(mods.enemymodatak*5);
            this.atak=randatak;
            this.hp=randhp;
            updatefightstats(gracz,currentMonster)
            kulki.forEach(item=>item.classList.add('kolorowekolka'));
            obrazki.src='img/enemies/boss1.png'
        }
    }
    wyczyscpobossie(){
        bossloot=true;
        if(this.hp<=0&&this.bossExist===true){
            stage[1]++;
            for (let i of kulki) {
            i.classList.remove('wypelnione'); 
            i.classList.remove('kolorowekolka');   
            }
            updatestage();
            this.bossExist=false;
            this.generujnowego();
            nroffight=1;
    }
}
    losujdzwiek(){
        const rand = generateRandomNumber(0,2);
        return this.sounds[rand];
    }
}
let gracz=new Player(5,100,5,5);
let currentMonster=new Monster(15,80);
class Spell {
    constructor(iconinmodal,cost,minimummagic,castsound){
    this.MagicModal=document.querySelector('#MagiaModal');
    this.icon=iconinmodal;
    this.minimummagic=minimummagic;
    this.cost=cost;
    this.pinicon=this.icon.children[0].children[1];
    this.ispinned=false;
    this.pinicon.addEventListener('click',this.Pin)
    this.CastSound=castsound;
}
    static SpellsArray=[];
    Pin(){
        if(this.ispinned===false){

        }
    }
}
class Buff{
    constructor(DOMtarget,turns,description,img,exactspell){
        this.opis = function (DOMtarget) {
            this.nazwa = tippy(DOMtarget, {
                theme: 'informacja',
                allowHTML: true,
                content: `
        Turns Left: ${turns}<br>
        ${description}
        `,
            });
        };
        this.exactspell=exactspell;
        this.turnsleft=turns;
        this.opis(DOMtarget)
        this.description=description;
        Buff.BuffsArray.push(this);
        this.DOMtarget=DOMtarget;
        DOMtarget.style.backgroundImage=setURL(DOMtarget,img)
    }
    static BuffsArray=[];
    RemoveBuff(){
        if(this.turnsleft===0){
            this.nazwa.destroy();
            this.DOMtarget.style.backgroundImage='';
            Spell.SpellsArray.forEach(item=>{
            if(item.hasOwnProperty('ownbuff')){
            item.ownbuff=1;
            }
            mods.buffmoddmg=medytacja.ownbuff;
            })
            this.exactspell.iscasted=false;
            Spell.SpellsArray.forEach(item=>item.RecalculateDmg());
            this.Usun();
        }
        else{
        this.nazwa.setContent(`Turns Left: ${this.turnsleft}<br>
        ${this.description}
        `)
        }
    }
    TickBuff(){
        this.turnsleft--;
        this.RemoveBuff();
    }
    Usun(){
    const index=Buff.BuffsArray.indexOf(this);
    Buff.BuffsArray.splice(index,1);
    }
}
class Fireball extends Spell {
    constructor(iconinmodal,cost,minimummagic,castsound){
        super(iconinmodal,cost,minimummagic,castsound)
        this.CastCopy=this.Cast.bind(this);
        Spell.SpellsArray.push(this); // Odloty.pl
        this.icon.addEventListener('click',this.CastCopy)
        this.dmg=10+(Math.floor(gracz.magia/2)); // Możliwy refactor
        document.querySelector('.fireballdmg').innerHTML=Math.round(this.dmg*mods.buffmoddmg);
    }
    Cast(){
    if(gracz.mana>=this.cost){
        $('#MagiaModal').modal('hide');
        this.RecalculateDmg();
        gracz.mana-=this.cost;
        ManaLeftDisplay.innerHTML=`${gracz.mana} `;
        this.CastSound.play();
        walka(gracz,currentMonster,'magic',this.dmg);
        setTimeout(function() {
            walka(gracz,currentMonster,'magic',this.dmg);
        }, 1000);
        Buff.BuffsArray.forEach(item=>item.TickBuff());
    }
    
    }
    RecalculateDmg(){
    this.dmg=10+(Math.floor(gracz.magia/2));
    document.querySelector('.fireballdmg').innerHTML=Math.round(this.dmg*mods.buffmoddmg);  
    }
}
class Meditation extends Spell{
    constructor(iconinmodal,cost,minimummagic,castsound){
        super(iconinmodal,cost,minimummagic,castsound)
        Spell.SpellsArray.push(this);
        this.CastCopy=this.Cast.bind(this);
        this.icon.addEventListener('click',this.CastCopy);
        this.dmg=0;
        this.img=this.icon.children[0].children[0].children[0].src;
        this.turns=4+(Math.floor(gracz.magia/10));
        document.querySelector('.MeditationTurns').innerHTML=` ${this.turns-1} `;
        this.ownbuff=1;
        this.iscasted=false;
    }
    Cast(){
        if(gracz.mana>=this.cost){
                if(this.iscasted===false){
            $('#MagiaModal').modal('hide');
            gracz.mana-=this.cost;
            ManaLeftDisplay.innerHTML=` ${gracz.mana}`;
            this.CastSound.play();
            walka(gracz,currentMonster,'magic',this.dmg);
            this.ownbuff=1.25;
            mods.buffmoddmg=this.ownbuff;
            this.AddBuff();
            Spell.SpellsArray.forEach(item=>item.RecalculateDmg());
            setTimeout(function() {
                walka(gracz,currentMonster,'magic',this.dmg);
            }, 1000); 
            Buff.BuffsArray.forEach(item=>item.TickBuff());
        }
        }
        }
        RecalculateDmg(){
            this.turns=4+(Math.floor(gracz.magia/10));
            document.querySelector('.MeditationTurns').innerHTML=` ${this.turns-1}`; 
            }
        AddBuff(){ 
        for (const i of buffslots) {
            if(i.style.backgroundImage===''){
                    this.iscasted=true;
                    this.currentBuff=new Buff(i,this.turns,'Boosts your DMG by 25%',this.img,this)
                    break;
            }
        }
        }
}
const kulaognista = new Fireball(document.querySelector('#fireball'),2,5,document.querySelector('#fireboltaudio'));
const medytacja = new Meditation(document.querySelector('#meditation'),10,10,document.querySelector('#MeditationAudio'))
kulaognista.Pin();
function FadeOutandIn(target){
    target.classList.add('hideandshow')
    setTimeout(()=>target.classList.remove('hideandshow'),1500)}
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
            this.atak = Math.round(generateRandomNumber(1, 5)*(1+mods.eqmod));
            this.price= generateRandomNumber(11,20);
            this.rarity = "Common";
            this.kolor = "gray";
            this.title = `${tytułymiecz[0][0]} miecz ${tytułymiecz[0][rand]}`;
        }
        else if (this.losowa >= 65 && this.losowa <= 95) {
            this.atak = Math.round(generateRandomNumber(6, 9)*(1+mods.eqmod));
            this.price= generateRandomNumber(35,60);
            this.rarity = "Rare";
            this.kolor = "blue";
            this.title = `${tytułymiecz[1][0]} miecz ${tytułymiecz[1][rand]}`;
        }
        else if (this.losowa > 95 && this.losowa < 100) {
            this.atak = Math.round(generateRandomNumber(9, 12)*(1+mods.eqmod));
            this.price= generateRandomNumber(120,150);
            this.rarity = "Epic";
            this.kolor = "purple";
            this.title = `${tytułymiecz[2][0]} miecz ${tytułymiecz[2][rand]}`;
        }
        else if (this.losowa === 100) {
            this.atak = Math.round(generateRandomNumber(12, 16)*(1+mods.eqmod));
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
            this.hp = Math.round(generateRandomNumber(5, 30)*(1+mods.eqmod));
            this.price= generateRandomNumber(11,20);
            this.rarity = "Common";
            this.kolor = "gray";
            this.title = `${tytułyzbroja[0][0]} napiersnik ${tytułyzbroja[0][rand]}`;
        }
        else if (this.losowa >= 65 && this.losowa <= 95) {
            this.hp = Math.round(generateRandomNumber(31,55)*(1+mods.eqmod));
            this.price= generateRandomNumber(20,35);
            this.rarity = "Rare";
            this.kolor = "blue";
            this.title = `${tytułyzbroja[1][0]} napiersnik ${tytułyzbroja[1][rand]}`;
        }
        else if (this.losowa > 95 && this.losowa < 100) {
            this.hp = Math.round(generateRandomNumber(56, 79)*(1+mods.eqmod));
            this.price= generateRandomNumber(120,150);
            this.rarity = "Epic";
            this.kolor = "purple";
            this.title = `${tytułyzbroja[2][0]} napiersnik ${tytułyzbroja[2][rand]}`;
        }
        else if (this.losowa === 100) {
            this.hp = Math.round(generateRandomNumber(80, 115)*(1+mods.eqmod));
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
            this.astrologia = Math.round(generateRandomNumber(5, 15)*(1+mods.eqmod));
            this.magia = Math.round(generateRandomNumber(5, 15)*(1+mods.eqmod));
            this.price= generateRandomNumber(11,20);
            this.rarity = "Common";
            this.kolor = "gray";
            this.title = `${tytułyring[0][0]} pierscien ${tytułyring[0][rand]}`;
        }
        else if (this.losowa >= 65 && this.losowa <= 95) {
            this.astrologia = Math.round(generateRandomNumber(15, 25)*(1+mods.eqmod));
            this.magia = Math.round(generateRandomNumber(15, 25)*(1+mods.eqmod));
            this.price= generateRandomNumber(35,60);
            this.rarity = "Rare";
            this.kolor = "blue";
            this.title = `${tytułyring[1][0]} pierscien ${tytułyring[1][rand]}`;
        }
        else if (this.losowa > 95 && this.losowa < 100) {
            this.astrologia = Math.round(generateRandomNumber(25, 40)*(1+mods.eqmod));
            this.magia = Math.round(generateRandomNumber(25, 40)*(1+mods.eqmod));
            this.price= generateRandomNumber(120,150);
            this.rarity = "Epic";
            this.kolor = "purple";
            this.title = `${tytułyring[2][0]} pierscien ${tytułyring[2][rand]}`;
        }
        else if (this.losowa === 100) {
            this.astrologia = Math.round(generateRandomNumber(40, 55)*(1+mods.eqmod));
            this.magia = Math.round(generateRandomNumber(40, 55)*(1+mods.eqmod));
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
class Book{
    constructor(){
        this.type='book';
        this.identyfikator=NrPerFloor;
        this.icon='img/book.svg';
        this.price=50;
        this.wylosujstatystyki=function(MIN,MAX){
            this.losowa = generateRandomNumber(MIN,MAX);
            if (this.losowa < 25) {
                this.whatgives='Atak'
            }
            else if (this.losowa >= 25 && this.losowa < 50) {
                this.whatgives='Health'
            }
            else if (this.losowa >=50  && this.losowa < 75) {
                this.whatgives='Magia'
            }
            else if (this.losowa >= 75 && this.losowa <= 100) {
                this.whatgives='Astrology'
            }
        }
        this.opis = function (parent) {
            this.nazwa = tippy(parent, {
                theme: 'informacja',
                allowHTML: true,
                content: `
        Book of knowledge<br>
        Grants 1 point into: ${this.whatgives}<br>
        <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span>
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
                    Spell.SpellsArray.forEach(item=>item.RecalculateDmg())
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
                    Spell.SpellsArray.forEach(item=>item.RecalculateDmg())
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
                    Spell.SpellsArray.forEach(item=>item.RecalculateDmg())
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
                    case 'book':
                        switch (this.item.whatgives) {
                            case 'Atak':
                                gracz.atak+=2;
                                break;
                            case 'Health':
                                gracz.hp+=10;
                                break;
                            case 'Magia':
                                gracz.magia+=2;
                                break;
                            case 'Astrology':
                                gracz.astrologia+=2;
                                break;
                        }
                        liczmaxhp();
                        updatenumbers();
                        updatefightstats(gracz,currentMonster);
                        this.item.usunopis();
                        this.slot.style.backgroundImage='';
                        delete this.item
                        this.hasitem=false;
                        Spell.SpellsArray.forEach(item=>item.RecalculateDmg());
                        save();
                        
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
            goldsound.play();
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
                                Spell.SpellsArray.forEach(item=>item.RecalculateDmg())
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
if(this.hasitem){
if(gold.amount>=this.item.price){
for (const i of inventoryarray) {
if(i.hasitem===false){
gold.amount-=this.item.price;
gold.display.innerHTML=`<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
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
shop.Saveshop();
save();
break;
}   
}
}
}
}
)}}
class Shop{
constructor(){
this.icon=document.querySelector('.sklepicon');
this.grid=document.querySelector('.sklep');
this.items=new Array();
this.shopslotarray=new Array();
this.isopen=false;
this.firstGenerate=localStorage.getItem('firstGenerateItems') ?? false;
if(this.firstGenerate===false){
this.additems();
this.Saveshop();
this.firstGenerate=true;    
localStorage.setItem('firstGenerateItems',this.firstGenerate);
}
this.grid.style.display='none';
this.icon.addEventListener('click',this.openshop.bind(this));
}
additems(){
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
    this.shopslotarray[inx].item.price*=2;
    this.shopslotarray[inx].hasitem=true;
    this.shopslotarray[inx].item.opis(this.shopslotarray[inx].icon)
    }
    }
openshop(){
if(this.isopen===false){
    gracz.AtakiDisplay.style.display='none';
    this.isopen=true;
    this.grid.style.display='flex';
    obrazki.src='img/rpgshop.gif';
    obrazki.style.marginBottom="3%"
    RefreshShop.style.display='flex';
    RefreshShopButton.addEventListener('click',this.RefreshShopForGold);
    fightgrid[1].style.opacity=0;
    document.querySelector('main').classList.add('zmientlo');
    setTimeout(() => { // ? Asynchronicznie musi wywolac to gowno bo inaczej window object staje sie sraka
        this.CloseShop();  
    }, 100);
    inventoryarray.forEach(item=>item.SellItems())
}
}
CloseShopFunction(event){
    const blokwalki=document.querySelector('main');
    const dzieci=shop.grid.children;
    if(event.target!==RefreshShopButton
        &&event.target!==blokwalki
        &&event.target!==dzieci[0]
        &&event.target!==dzieci[1]
        &&event.target!==dzieci[2]
        &&event.target!==dzieci[3]
        &&event.target!==dzieci[4]
        &&event.target!==dzieci[5]
        &&event.target!==dzieci[6]
        &&event.target!==dzieci[7]
        &&event.target!==dzieci[8]
        &&event.target!==dzieci[9]
        ){
        document.querySelector('.sklep').style.display='none';
        gracz.AtakiDisplay.style.display='flex';
        if(gracz.MagicOrAstrologySelected===true){
        gracz.AtakiDisplay.classList.remove('showmoreoptionsAstrology');   
        gracz.AtakiDisplay.classList.remove('showmoreoptionsMagic');
        gracz.AtakiImg[0].src='img/walkamiecz.svg';    
        gracz.AtakiImg[1].src='img/magic-wand.svg';    
        gracz.AtakiImg[2].src='img/alchemy.svg';
        gracz.AtakiIcons.forEach(item=>FadeOutandIn(item))
        gracz.BackIcon.style.display='none';
        gracz.AtakiDisplay.classList.remove('showmoreoptionsAstrology');
        gracz.BackIcon.removeEventListener('click',BackArrowCopy,true);
        gracz.MagicOrAstrologySelected=false;   
        }
        obrazki.style.marginBottom="0%"
        if(currentMonster.bossExist===true){
        obrazki.src='img/enemies/boss1.png'
        }
        else{
        obrazki.src=ChooseARandomEnemie();    
        }
        shop.isopen=false;
        blokwalki.classList.remove('zmientlo');
        RefreshShop.style.display='none';
        fightgrid.forEach(item=>item.style.opacity='1');
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
RefreshShopForGold(){
if(gold.amount>=50){
gold.amount-=50;
gold.display.innerHTML=gold.display.innerHTML=`<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
shop.SwapOutItems(); 
}
}
SwapOutItems(){
    this.shopslotarray.forEach(iteminarray=>{
if(iteminarray.hasitem){
iteminarray.hasitem=false;
iteminarray.item.usunopis();
iteminarray.icon.style.backgroundImage='none';
delete iteminarray.item 
}
})
this.shopslotarray.length=0;
this.items.length=0;  
this.additems();
this.Saveshop();
}
Saveshop(){
let shoparrayforsave=this.shopslotarray.filter(item=>{
return item.hasitem===true;    
})
localStorage.setItem('shopsave',Flatted.stringify(shoparrayforsave));
}
}
const shop=new Shop();
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
function walka(u1,u2,type,dmg){ // Fight
if(currentMonster.hp<=0){
currentMonster.generujnowego();
updatefightstats(u1,u2);
addGoldAfterKillingEnemy();
gracz.mana=gracz.magia;
ManaLeftDisplay.innerHTML=`${gracz.mana} `    
}
fightgrid[0].style.opacity="1";
fightgrid[1].style.opacity="1";
if(Healpot.canheal===false){turnsbeforepotion++};
Healpot.CheckforHeal();
if(firstplayer===false){
    switch(type){
        case 'normal':
        Math.round(u2.hp-=u1.atak*mods.buffmoddmg);
        break;
    case 'magic':
        Math.round(u2.hp-=dmg*mods.buffmoddmg);
        break;
}
    red(SecondHP);
    updatefightstats(u1,u2)
    if(currentMonster.hp<=0){
        addGoldAfterKillingEnemy();
        gracz.mana=gracz.magia;
        ManaLeftDisplay.innerHTML=`${gracz.mana} `    
        }
    firstplayer=true;
}
else{
currentMonster.dzwiek.play();
u1.hp=u1.hp-u2.atak;
red(FirstHP); // Hits 1st target
updatefightstats(u1,u2)
firstplayer=false;
}
if(gracz.hp<=0){
document.querySelector('.gameoversound').play();
setTimeout(function() {
localStorage.clear();
window.location.reload();  
}, 3000);  
}
if(currentMonster.hp<=0){
updatefightstats(u1,u2);
gracz.mana=gracz.magia;
ManaLeftDisplay.innerHTML=`${gracz.mana} ` 
bar.gainedxp=true;
for (const i of kulki) {
if(i.classList.contains('wypelnione')){
if(nroffight===6){
currentMonster.wyczyscpobossie();
currentMonster.generujbossa();
break;
}
} 
else{
nroffight++;
i.classList.add('wypelnione');
break;
}
} 
NrPerFloor++;
const somerandomnumber=generateRandomNumber(1,4);
console.log(bossloot);
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
case 4:
    bronie.push(new Book())
    break; 
}
for(let i=0;i<inventoryarray.length;i++){
if(inventoryarray[i].hasitem===false){
            setURL(inventoryarray[i].slot,bronie[bronie.length-1].icon)
            if(bossloot){
                bronie[bronie.length-1].wylosujstatystyki(95,100);
                bossloot=false;
            }
            else{
                bronie[bronie.length-1].wylosujstatystyki(1,100);
            }
            inventoryarray[i].item=bronie[bronie.length-1];
            inventoryarray[i].item.opis(inventoryarray[i].slot);
            inventoryarray[i].hasitem=true;
            break;     
        }
}
u2.generujnowego();   
}
}
let ftime=false;
let ftimeeq=false;
function updatefightstats(u1,u2){ //Updates stats in the fight
FirstHP.innerHTML=`HP:${Math.round(u1.hp)}`;
SecondHP.innerHTML=`HP:${Math.round(u2.hp)}`;
FirstATK.innerHTML=`Atak:${Math.round(u1.atak*mods.buffmoddmg)}`;
SecondATK.innerHTML=`Atak:${Math.round(u2.atak)}`;
save();
}
function save(){ // Saves the game
let save ={
gold:gold.amount,
stageprimary:stage[0],
stagesecondary:stage[1],
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
obrazki.src=ChooseARandomEnemie();
ManaLeftDisplay.innerHTML=`${gracz.mana} `;
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
                    break;
        case 'book':
            inventoryarray[i].item.opis = function (parent) {
                this.nazwa = tippy(parent, {
                    theme: 'informacja',
                    allowHTML: true,
                    content: `
            Book of knowledge<br>
            Grants 1 point into: ${this.whatgives}<br>
            <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span>
            `,
                });
            };
            this.usunopis = function () {
                this.nazwa.destroy();
            };
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
if(shop.firstGenerate==='true'){
let savedshop=Flatted.parse(localStorage.getItem('shopsave'));
savedshop.forEach((item,counter=0)=>{
    shop.shopslotarray.push(new Shopslot(itemicons[counter],item.item))
    setURL(itemicons[counter],item.item.icon)
    shop.shopslotarray[counter].hasitem=true;
    switch(shop.shopslotarray[counter].item.type){
        case 'sword':    
        shop.shopslotarray[counter].item.opis=function(parent){
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
            shop.shopslotarray[counter].item.opis=function(parent){
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
            shop.shopslotarray[counter].item.opis=function(parent){
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
    shop.shopslotarray[counter].item.usunopis=function(){
            this.nazwa.destroy();
    }
    shop.shopslotarray[counter].item.opis(itemicons[counter])
    counter++;
    })
}
if (savedstate!=null&&savedstate!=undefined){
gold.amount=savedstate.gold;
Healpot.canheal=savedstate.healingpotioncanheal;
Healpot.canheal=savedstate.healingpotioncanheal;
turnsbeforepotion=savedstate.turnsbeforepotion;
gracz.hp=savedstate.hp1;
stage[0]=savedstate.stageprimary;
stage[1]=savedstate.stagesecondary;
currentMonster.hp=savedstate.hp2;
bar.basexp=savedstate.basexp;
gracz.atak=savedstate.graczatak;
gracz.astrologia=savedstate.graczastro;
gracz.magia=savedstate.graczmagia;
gracz.mana=gracz.magia;
Spell.SpellsArray.forEach(item=>item.RecalculateDmg()) 
ManaLeftDisplay.innerHTML=`${gracz.mana} `;
freepoints=savedstate.freepunkty;
level=savedstate.levelsaved;
spendedonhealth=savedstate.spendedonhealth;
bar.loadlevel();
updatelevel();
updatestage();
updatefightstats(gracz,currentMonster)
//mods.enemymodhp=stage[0]*x
mods.enemymodhp=stage[1]*12;
mods.enemymodatak=stage[1]*2;
mods.eqmod=stage[1]/10
}
else{
updatefightstats(gracz,currentMonster)    
}
} 
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
    gracz.mana+=2;
    Spell.SpellsArray.forEach(item=>item.RecalculateDmg())
    ManaLeftDisplay.innerHTML=`${gracz.mana} `;
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
dodajstatystyki.forEach(item=>item.disabled=false)
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
function muteAudio(){
const audio=document.querySelectorAll('audio');
audio.forEach(item=>{
if(muted===false){
item.pause();
item.muted=true;
}
else{
item.muted=false;    
}
})
if(muted===false){muted=true;}
else{muted=false}
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
function addGoldAfterKillingEnemy(){
const rand = generateRandomNumber(10,25);
gold.amount+=rand;
goldsound2.play();
gold.display.innerHTML=`<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
}
load(); 
Healpot.CheckforHeal();
if(gold.amount!=undefined){
gold.display.innerHTML=`<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
}
updatenumbers();
addbasestats();
wearingarray.forEach(item=>item.addlistenforunequip())
if(currentMonster.hp<=0){
    currentMonster.generujnowego();
    updatefightstats(gracz,currentMonster);    
    }

