//TODO DODAC SPELLE DALEJ
//const { followCursor } = require("tippy.js");
//const { default: tippy } = require("tippy.js")
//const Flatted = require("flatted");
//const Flatted = require("flatted");
//const Flatted = require("flatted");
//constFlatted = require("flatted");
window.addEventListener("contextmenu", (e) => e.preventDefault());
let fightlock = false;
let muted = false;
let firstplayer = false;
let stage = [1, 1];
let nroffight = 1;
let level = 1;
let freepoints = 5;
let bossloot = false;
let RP = false;
let gold = {
  display: document.querySelector(".goldamount"),
  amount: Number(0),
};
let mods = {
  buffmoddmg: 1,
  enemymodhp: 1,
  enemymodatak: 1,
  eqmod: stage[1] / 10,
  RecalculateMods: () => {
    let calc;
    stage[0] === 1 ? (calc = 0) : (calc = (stage[0] - 1) * 10);
    mods.eqmod = (calc + stage[1]) / 10;
    mods.enemymodhp = (calc + stage[1]) * 25;
    mods.enemymodatak = (calc + stage[1]) * 4;
  },
};
let bossesbeaten = {
  First: false,
  Second: false,
  Third: false,
  Fourth: false,
  Fifth: false,
};
let BackArrowCopy;
const freepointsdisplay = document.querySelector(".wolnepkt");
const activebuffs = document.querySelector(".activebuffs");
document.querySelector(".mutebutton").addEventListener("click", muteAudio);
const bazowestatystyki = document.querySelectorAll(".statynr");
const dodajstatystyki = document.querySelectorAll(".addpoint");
const RefreshShop = document.querySelector(".refreshshopwrapper");
const RefreshShopButton = document.querySelector(".odswiezsklep");
const buffslots = document.querySelectorAll(".buff");
const goldsound = document.querySelector(".goldsound");
const goldsound2 = document.querySelector(".goldsound2");
let itemicons = document.querySelectorAll(".sklepitem");
let magia = 5;
let astrologia = 5;
let enemiesarray = new Array();
for (let i = 1; i < 12; i++) {
  if (i >= 10) {
    enemiesarray.push(`img/enemies/x2 size/${i}.png`);
    enemiesarray.push(`img/enemies/x2 size/${i}b.png`);
  } else {
    enemiesarray.push(`img/enemies/x2 size/0${i}.png`);
    enemiesarray.push(`img/enemies/x2 size/0${i}b.png`);
  }
}
function ChooseARandomEnemie() {
  let rand = generateRandomNumber(0, 21);
  return enemiesarray[rand];
}
let turnsbeforepotion = 0;
const healingpotiondisplay = document.querySelector(".healthpotion");
const stagedisplay = document.querySelector(".stage");
const leveldispay = document.querySelector(".level");
const xpvalue = document.querySelector(".xpvalue");
const elem = document.getElementById("myBar");
const fightgrid = document.querySelectorAll(".fight-grid");
const obrazki = document.querySelector(".obrazki");
const FirstHP = document.querySelector(".hp1");
const FirstATK = document.querySelector(".atak1");
const SecondHP = document.querySelector(".hp2");
const SecondATK = document.querySelector(".atak2");
const kulki = document.querySelectorAll(".kolka");
const ManaLeftDisplay = document.querySelector(".Mana-Left");
let inventoryarray = [];
let wearingarray = [];
const tytułymiecz = [
  [
    "Tępy",
    "Moczymordy",
    "Obszczymura",
    "Denata",
    "Parobka",
    "Zjeba",
    "Orła Jabola",
  ],
  [
    "Ostry",
    "Rzezimieszka",
    "Twojego taty",
    "Syna koleżanki twojej starej",
    "Rycerza",
    "Kamila Z",
    "Blowjobsa",
  ],
  [
    "Epicki",
    "Syna Kowala",
    "Księcia",
    "Odkrywcy",
    "Korisa",
    "Twojego Wujka",
    "Miśka z nadarzyna",
  ],
  [
    "Legendarny",
    "Kasteta THC",
    "Smoka",
    "Diabła",
    "Korisa Starego",
    "Jarka Lichwaly",
    "Tadka z Firmy",
  ],
];
const tytułyzbroja = [
  [
    "Stary",
    "Moczymordy",
    "Obszczymura",
    "Denata",
    "Parobka",
    "Zjeba",
    "Orła Jabola",
  ],
  [
    "Utwardzony",
    "Rzezimieszka",
    "Twojego taty",
    "Syna koleżanki twojej starej",
    "Rycerza",
    "Kamila Z",
    "Blowjobsa",
  ],
  [
    "Epicki",
    "Syna Kowala",
    "Księcia",
    "Odkrywcy",
    "Korisa",
    "Twojego Wujka",
    "Miśka z nadarzyna",
  ],
  [
    "Legendarny",
    "Kasteta THC",
    "Smoka",
    "Diabła",
    "Korisa Starego",
    "Jarka Lichwaly",
    "Tadka z Firmy",
  ],
];
const tytułyring = [
  [
    "Podniszczony",
    "Moczymordy",
    "Obszczymura",
    "Denata",
    "Parobka",
    "Zjeba",
    "Orła Jabola",
  ],
  [
    "Błyszczący",
    "Rzezimieszka",
    "Twojego taty",
    "Syna koleżanki twojej starej",
    "Rycerza",
    "Kamila Z",
    "Blowjobsa",
  ],
  [
    "Epicki",
    "Syna Kowala",
    "Księcia",
    "Odkrywcy",
    "Korisa",
    "Twojego Wujka",
    "Miśka z nadarzyna",
  ],
  [
    "Legendarny",
    "Kasteta THC",
    "Smoka",
    "Diabła",
    "Korisa Starego",
    "Jarka Lichwaly",
    "Tadka z Firmy",
  ],
];
let NrPerFloor = 0;
let wearing = document.querySelectorAll(".sloty");
const swordloot = ["img/swords1.png", "img/swords2.png", "img/swords3.png"];
const chestloot = [
  "img/Body-armor.svg",
  "img/Raseone_Armor_2.svg",
  "img/armor.svg",
];
const ringloot = ["img/ring1.png", "img/ring2.png", "img/ring3.png"];
let inventoryslots = document.querySelectorAll(".inventory-slots");
let equipmentweapons = [];
let bronie = [];
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setURL(styleof, geticon) {
  return (styleof.style.backgroundImage = "url(" + geticon + ")");
}
function wylosujlootsword() {
  let index = generateRandomNumber(0, 2);
  return swordloot[index];
}
function wylosujlootchestplate() {
  let index = generateRandomNumber(0, 2);
  return chestloot[index];
}
function wylosujlootring() {
  let index = generateRandomNumber(0, 2);
  return ringloot[index];
}
function changeBackgroundImage(path, time = 0) {
  setTimeout(() => {
    document.body.style.backgroundImage = `url("${path}")`;
  }, time);
}
class Player {
  constructor(atak, hp, astrologia, magia) {
    this.atak = atak;
    this.hp = hp;
    this.astrologia = astrologia;
    this.magia = magia;
    this.mana = this.magia;
    this.MieczIkona = document.querySelector("#AtakMieczem");
    this.MagiaIkona = document.querySelector("#AtakMagia");
    this.AstrologiaIkona = document.querySelector("#AtakAstrologia");
    this.AtakiDisplay = document.querySelector(".ataki");
    this.AtakiIcons = document.querySelectorAll(".akcjawalka");
    this.BackIcon = document.querySelector(".akcjawalkaB");
    this.AtakiImg = document.querySelectorAll(".akcjaobrazki");
    this.MieczIkona.addEventListener("click", this.AtakMieczem.bind(this));
    this.MagiaIkona.addEventListener("click", this.AtakMagiczny.bind(this));
    this.AstrologiaIkona.addEventListener(
      "click",
      this.AtakAstrologia.bind(this)
    );
    this.AtakMieczemSound = document.querySelector(".swordsound");
    this.MagicOrAstrologySelected = false;
  }
  AtakMieczem() {
    if (this.MagicOrAstrologySelected === false) {
      walka(gracz, currentMonster, "normal");
      walka(gracz, currentMonster, "normal");
      this.AtakMieczemSound.play();
      Buff.BuffsArray.forEach((item) => item.TickBuff());
      Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
    }
  }
  AtakMagiczny() {
    if (this.MagicOrAstrologySelected === false) {
      this.MagicOrAstrologySelected = true;
      this.AtakiDisplay.classList.add("showmoreoptionsMagic");
      this.AtakiIcons.forEach((item) => FadeOutandIn(item));
      this.AtakiImg.forEach((item, counter = 0) => {
        function ForListen() {
          if (this.MagicOrAstrologySelected === true) {
            Spell.PinnedSpells[counter - 1].Cast();
          }
        }
        ForListen = ForListen.bind(this);
        if (Spell.PinnedSpells[counter] === undefined) {
          item.src = "img/yeti.png";
        } else {
          item.src = Spell.PinnedSpells[counter].spellicon.src;
          item.onclick = ForListen;
        }
        counter++;
      });
      this.BackIcon.style.display = "block";
      // ! JAK POPRAWNIE DODAĆ THIS DO EVENT LISTENERA
      BackArrowCopy = this.BackArrow.bind(this);
      this.BackIcon.addEventListener("click", BackArrowCopy, true);
    }
  }
  AtakAstrologia() {
    if (this.MagicOrAstrologySelected === false) {
      this.MagicOrAstrologySelected = true;
      this.AtakiDisplay.classList.add("showmoreoptionsAstrology");
      this.AtakiIcons.forEach((item) => item.classList.add("hideandshow"));
      this.AtakiImg.forEach((item) => (item.src = "img/yeti.png")); // ! Yeti to placeholder
      this.BackIcon.style.display = "block";
      // ! JAK POPRAWNIE DODAĆ THIS DO EVENT LISTENERA
      BackArrowCopy = this.BackArrow.bind(this);
      this.BackIcon.addEventListener("click", BackArrowCopy, true);
    }
  }
  BackArrow() {
    this.AtakiImg.forEach((item) => (item.onclick = ""));
    this.AtakiImg[0].src = "img/walkamiecz.svg";
    this.AtakiImg[1].src = "img/magic-wand.svg";
    this.AtakiImg[2].src = "img/alchemy.svg";
    this.AtakiIcons.forEach((item) => FadeOutandIn(item));
    this.BackIcon.style.display = "none";
    this.AtakiDisplay.classList.remove("showmoreoptionsAstrology");
    this.AtakiDisplay.classList.remove("showmoreoptionsMagic");
    this.BackIcon.removeEventListener("click", BackArrowCopy, true);
    this.MagicOrAstrologySelected = false;
  }
}
class Monster {
  constructor(atak, hp) {
    this.atak = atak;
    this.hp = hp;
    this.maxhp = this.hp;
    this.bossExist = false;
    this.sounds = document.querySelectorAll(".monstersound");
    this.dzwiek = this.losujdzwiek();
    this.bosstype = "Normal";
  }
  generujnowego() {
    if (this.bossExist === false) {
      updatefightstats(gracz, currentMonster);
      const randatak = generateRandomNumber(8, 15) + mods.enemymodatak;
      const randhp = generateRandomNumber(65, 100) + mods.enemymodhp;
      this.atak = randatak;
      this.hp = randhp;
      this.maxhp = this.hp;
      this.dzwiek = this.losujdzwiek();
      obrazki.src = ChooseARandomEnemie();
      updatefightstats(gracz, currentMonster);
    }
  }
  generujbossa() {
    if (nroffight === 6) {
      if (stage[0] === 1 && stage[1] === 10) {
        this.generujUFO();
      } else {
        this.bossExist = true;
        const randatak = generateRandomNumber(20, 25) + mods.enemymodatak * 2;
        const randhp = generateRandomNumber(200, 250) + mods.enemymodatak * 5;
        this.atak = randatak;
        this.hp = randhp;
        this.maxhp = this.hp;
        updatefightstats(gracz, currentMonster);
        kulki.forEach((item) => item.classList.add("kolorowekolka"));
        obrazki.src = "img/enemies/boss1.png";
      }
    }
  }
  MajorBoss() {
    this.bossExist = true;
    RP = true;
    updatefightstats(gracz, currentMonster);
    kulki.forEach((item) => item.classList.add("kolorowekolka"));
    document.querySelector(".website").classList.toggle("Blackout"); // 2S Animacji
    setTimeout(() => obrazki.classList.toggle("FadeOut"), 2000); // 1S Animacji
    setTimeout(
      () =>
        (document.body.style.backgroundImage = 'url("img/UfoBackground.jpg")'),
      2500
    );
  }
  static wascasted = false;
  static stolendmg = 0;
  bossSpecialAtk(type) {
    if (this.hp >= Math.round(this.maxhp / 2)) {
      return;
    }
    if (type === "UFO") {
      if (Monster.wascasted === false) {
        Monster.wascasted = true;
        Dialog.PokazNapis(
          `*UFO zaczyna wydawac dziwne dzwieki, czujesz nagłe przyciąganie nie możesz się oprzeć.* UFO zabiera ci ${Math.floor(
            gracz.atak * 0.3
          )} Ataku`
        );
        setTimeout(() => {
          RP = true;
          Monster.stolendmg = Math.floor(gracz.atak * 0.3);
          animateValue(
            FirstATK,
            gracz.atak,
            gracz.atak - Monster.stolendmg,
            500
          );
          animateValue(
            SecondATK,
            currentMonster.atak,
            currentMonster.atak + Monster.stolendmg,
            500
          );
          gracz.atak -= Monster.stolendmg;
          currentMonster.atak += Monster.stolendmg;
        }, 2500);
        Dialog.PokazNapisMain("PORWANIE");
        Dialog.UkryjNapis(10000);
        setTimeout(() => {
          RP = false;
        }, 6000);
      }
    }
  }
  generujUFO() {
    this.MajorBoss(); // 3 sekundy za dialogami
    this.bosstype = "UFO";
    Dialog.PokazNapis(
      "*Przeszukales cala jaskinie jednak po Piotrku nie ma ani sladu, widzisz wyjscie z jaskinii, jednak przy wyjsciu zauwazasz dziwne metalowe drzwi*",
      3000
    );
    Dialog.UkryjNapis(10000);
    Dialog.PokazNapis(
      "*Nagle do jaskinii od wejścia wlatuje UFO. Przypominasz sobie To jest UFO którym przyleciał Jarek Lichwala. Aby cie uratować.*",
      12000
    );
    Dialog.UkryjNapis(22000);
    Dialog.PokazNapis(
      "*UFO Podlatuje do ciebie Agresywnie, Kiedy jestes zajęty z drzwi wybiega Lichwala.*-Lichwala Stoj! *Zdaje sie ciebie ignorowac Ufo Wystrzeliwuje laser. Pokonaj Je!*",
      24000
    );
    Dialog.UkryjNapis(34000);
    setTimeout(() => {
      Dialog.PokazNapisMain("UFO Lichwaly");
      document.querySelector(".website").classList.toggle("Blackout");
    }, 36000);
    setTimeout(() => {
      obrazki.classList.add("FadeIn");
      obrazki.src = "img/enemies/UfoLichwaly.png";
      setTimeout(() => {
        obrazki.classList.remove("FadeOut");
        obrazki.classList.remove("FadeIn");
      }, 2000);
      this.atak = 60;
      this.hp = 1000;
      this.maxhp = this.hp;
      RP = false;
      firstplayer = false;
      updatefightstats(gracz, currentMonster);
    }, 38000);
    setTimeout(() => {
      Dialog.MainDisplay.classList.toggle("FadeIn");
      Dialog.MainDisplay.classList.toggle("FadeOut");
    }, 42000);
  }
  wyczyscpobossie() {
    if (this.bosstype === "UFO") {
      if (this.hp <= 0 && this.bossExist === true) {
        console.log("tu?");
        obrazki.classList.add("FadeOut");
        gracz.atak += Monster.stolendmg;
        animateValue(FirstATK, gracz.atak, gracz.atak + Monster.stolendmg, 500);
        this.bosstype = "Normal";
        stage[0]++;
        stage[1] = 1;
        mods.RecalculateMods();
        updatestage();
        for (let i of kulki) {
          i.classList.remove("wypelnione");
          i.classList.remove("kolorowekolka");
          this.bossExist = false;
          nroffight = 1;
          bossloot = true;
        }
        ZmienPoziom(); //TODO Dodac nowe poziomy
        save();
      }
    }
    if (this.bosstype === "Normal") {
      if (this.hp <= 0 && this.bossExist === true) {
        stage[1]++;
        updatestage();
        mods.RecalculateMods();
        for (let i of kulki) {
          i.classList.remove("wypelnione");
          i.classList.remove("kolorowekolka");
          this.bossExist = false;
          nroffight = 1;
          bossloot = true;
        }
        this.generujnowego();
        save();
      }
    }
    bossloot = true;
  }
  losujdzwiek() {
    const rand = generateRandomNumber(0, 2);
    return this.sounds[rand];
  }
}
function ZmienPoziom() {
  RP = true;
  document.querySelector(".website").classList.toggle("Blackout");
  changeBackgroundImage("img/Controlroom.jpg", 1500);
  obrazki.classList.add("FadeOut");
  setTimeout(() => {
    if (stage[0] === 2) {
      setTimeout(() => {
        Dialog.PokazNapis(
          "*UFO kupiło dużo czasu, otwierasz drzwi w których znajduje się pokój, nigdy nie widziales takiej technologii. znajdujesz na nim dziwnie wyglądającą broń. Lichwala zostawil swoj replikator atomomowy*"
        );
        setTimeout(function () {
          document.querySelector(".website").classList.toggle("Blackout");
        }, 6000);
        Dialog.UkryjNapis(10000);
        Dialog.PokazNapis(
          "*Wychodzisz z pomieszczenia, Zastanawisz sie gdzie się udał Jarosław Lichwała, dziwnie się zachowywał, wychodząć z  Jaskinii czujesz się dziwnie, to nie jest zwyczajny las. Czujesz się wyjątkowo nieswojo. *",
          11000
        );
        setTimeout(() => {
          AddItem(ReplikatorAtomowy);
        }, 8000);
        Dialog.UkryjNapis(20000);
        setTimeout(() => {
          document.querySelector(".website").classList.toggle("Blackout");
          changeBackgroundImage("img/Forest.jpg", 2000);
        }, 17000);
        setTimeout(() => {
          document.querySelector(".website").classList.toggle("Blackout");
          obrazki.classList.remove("FadeOut");
          RP = false;
          firstplayer = false;
          bossesbeaten.First = true;
          save();
        }, 20000);
      });
    }
  }, 3000);
}
let gracz = new Player(5, 100, 5, 5);
let currentMonster = new Monster(15, 80);
class Spell {
  constructor(iconinmodal, cost, minimummagic, castsound) {
    this.MagicModal = document.querySelector("#MagiaModal");
    this.icon = iconinmodal;
    this.minimummagic = minimummagic;
    this.cost = cost;
    this.pinicon = this.icon.children[0].children[1];
    this.spellicon = this.icon.children[0].children[0].children[0];
    this.ispinned = false;
    this.Pin = this.Pin.bind(this);
    this.RemovePin = this.RemovePin.bind(this);
    this.pinicon.addEventListener("contextmenu", this.Pin);
    this.CastSound = castsound;
  }
  static SpellsArray = [];
  static PinnedSpells = [];
  static pinnedamount = 0;
  Pin() {
    if (this.ispinned === false && Spell.pinnedamount < 3) {
      this.pinicon.removeEventListener("contextmenu", this.Pin);
      this.pinicon.addEventListener("contextmenu", this.RemovePin);
      this.ispinned = true;
      Spell.pinnedamount++;
      this.pinicon.style.transform = "rotate(-45deg)";
      Spell.PinnedSpells = Spell.SpellsArray.filter((el) => {
        return el.ispinned === true;
      });
      console.log(Spell.PinnedSpells);
    }
  }
  RemovePin() {
    this.ispinned = false;
    this.pinicon.removeEventListener("contextmenu", this.RemovePin);
    Spell.pinnedamount--;
    this.pinicon.style.transform = "rotate(0deg)";
    Spell.PinnedSpells = Spell.SpellsArray.filter((el) => {
      return el.ispinned === true;
    });
    console.log(Spell.PinnedSpells);
    this.pinicon.addEventListener("contextmenu", this.Pin);
  }
}
class Buff {
  constructor(DOMtarget, turns, description, img, exactspell) {
    this.opis = function (DOMtarget) {
      this.nazwa = tippy(DOMtarget, {
        theme: "informacja",
        allowHTML: true,
        content: `
        Turns Left: ${turns}<br>
        ${description}
        `,
      });
    };
    this.exactspell = exactspell;
    this.turnsleft = turns;
    this.opis(DOMtarget);
    this.description = description;
    Buff.BuffsArray.push(this);
    this.DOMtarget = DOMtarget;
    DOMtarget.style.backgroundImage = setURL(DOMtarget, img);
  }
  static BuffsArray = [];
  RemoveBuff() {
    if (this.turnsleft === 0) {
      this.nazwa.destroy();
      this.DOMtarget.style.backgroundImage = "";
      Spell.SpellsArray.forEach((item) => {
        if (item.hasOwnProperty("ownbuff")) {
          item.ownbuff = 1;
        }
        mods.buffmoddmg = medytacja.ownbuff;
      });
      Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
      this.exactspell.iscasted = false;
      this.Usun();
    } else {
      this.nazwa.setContent(`Turns Left: ${this.turnsleft}<br>
        ${this.description}
        `);
    }
  }
  TickBuff() {
    this.turnsleft--;
    this.RemoveBuff();
  }
  Usun() {
    const index = Buff.BuffsArray.indexOf(this);
    Buff.BuffsArray.splice(index, 1);
  }
}
class Fireball extends Spell {
  constructor(iconinmodal, cost, minimummagic, castsound) {
    super(iconinmodal, cost, minimummagic, castsound);
    this.CastCopy = this.Cast.bind(this);
    Spell.SpellsArray.push(this); // Odloty.pl
    this.icon.addEventListener("click", this.CastCopy);
    this.dmg = 10 + Math.floor(gracz.magia / 3); // Możliwy refactor
    document.querySelector(".fireballdmg").innerHTML = Math.round(
      this.dmg * mods.buffmoddmg
    );
  }
  Cast() {
    if (gracz.mana >= this.cost) {
      $("#MagiaModal").modal("hide");
      this.RecalculateDmg();
      gracz.mana -= this.cost;
      ManaLeftDisplay.innerHTML = `${gracz.mana} `;
      this.CastSound.play();
      walka(gracz, currentMonster, "magic", this.dmg);
      walka(gracz, currentMonster, "magic", this.dmg);
      Buff.BuffsArray.forEach((item) => item.TickBuff());
    }
  }
  RecalculateDmg() {
    this.dmg = 10 + Math.floor(gracz.magia / 3);
    document.querySelector(".fireballdmg").innerHTML = Math.round(
      this.dmg * mods.buffmoddmg
    );
  }
}
class Meditation extends Spell {
  constructor(iconinmodal, cost, minimummagic, castsound) {
    super(iconinmodal, cost, minimummagic, castsound);
    Spell.SpellsArray.push(this);
    this.CastCopy = this.Cast.bind(this);
    this.icon.addEventListener("click", this.CastCopy);
    this.dmg = 0;
    this.img = this.icon.children[0].children[0].children[0].src;
    this.turns = 4 + Math.floor(gracz.magia / 10);
    document.querySelector(".MeditationTurns").innerHTML = ` ${
      this.turns - 1
    } `;
    this.ownbuff = 1;
    this.iscasted = false;
  }
  Cast() {
    if (gracz.mana >= this.cost) {
      if (this.iscasted === false) {
        $("#MagiaModal").modal("hide");
        gracz.mana -= this.cost;
        ManaLeftDisplay.innerHTML = ` ${gracz.mana}`;
        this.CastSound.play();
        this.ownbuff = 1.25;
        mods.buffmoddmg = this.ownbuff;
        this.AddBuff();
        Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
        walka(gracz, currentMonster, "magic", this.dmg);
        walka(gracz, currentMonster, "magic", this.dmg);
        Buff.BuffsArray.forEach((item) => item.TickBuff());
      }
    }
  }
  RecalculateDmg() {
    this.turns = 4 + Math.floor(gracz.magia / 10);
    document.querySelector(".MeditationTurns").innerHTML = ` ${this.turns - 1}`;
  }
  AddBuff() {
    for (const i of buffslots) {
      if (i.style.backgroundImage === "") {
        this.iscasted = true;
        this.currentBuff = new Buff(
          i,
          this.turns,
          "Boosts your DMG by 25%",
          this.img,
          this
        );
        break;
      }
    }
  }
}
class Spark extends Spell {
  constructor(iconinmodal, cost, minimummagic, castsound) {
    super(iconinmodal, cost, minimummagic, castsound);
    this.CastCopy = this.Cast.bind(this);
    Spell.SpellsArray.push(this); // Odloty.pl
    this.icon.addEventListener("click", this.CastCopy);
    this.dmg = 40 + Math.floor(gracz.magia / 1); // Możliwy refactor
    document.querySelector(".sparkdmg").innerHTML = Math.round(
      this.dmg * mods.buffmoddmg
    );
  }
  Cast() {
    if (gracz.mana >= this.cost) {
      $("#MagiaModal").modal("hide");
      this.RecalculateDmg();
      gracz.mana -= this.cost;
      ManaLeftDisplay.innerHTML = `${gracz.mana} `;
      this.CastSound.play();
      walka(gracz, currentMonster, "magic", this.dmg);
      walka(gracz, currentMonster, "magic", this.dmg);
      Buff.BuffsArray.forEach((item) => item.TickBuff());
    }
  }
  RecalculateDmg() {
    this.dmg = 40 + Math.floor(gracz.magia / 1);
    document.querySelector(".sparkdmg").innerHTML = Math.round(
      this.dmg * mods.buffmoddmg
    );
  }
}
class Splash extends Spell {
  constructor(iconinmodal, cost, minimummagic, castsound) {
    super(iconinmodal, cost, minimummagic, castsound);
    this.CastCopy = this.Cast.bind(this);
    Spell.SpellsArray.push(this);
    this.icon.addEventListener("click", this.CastCopy);
    this.dmg = 20 + Math.floor(gracz.magia / 2);
    document.querySelector(".splashdmg").innerHTML = Math.round(
      this.dmg * mods.buffmoddmg
    );
  }
  Cast() {
    if (gracz.mana >= this.cost) {
      $("#MagiaModal").modal("hide");
      this.RecalculateDmg();
      gracz.mana -= this.cost;
      ManaLeftDisplay.innerHTML = `${gracz.mana} `;
      this.CastSound.play();
      walka(gracz, currentMonster, "magic", this.dmg);
      walka(gracz, currentMonster, "magic", this.dmg);
      Buff.BuffsArray.forEach((item) => item.TickBuff());
    }
  }
  RecalculateDmg() {
    this.dmg = 20 + Math.floor(gracz.magia / 2);
    document.querySelector(".splashdmg").innerHTML = Math.round(
      this.dmg * mods.buffmoddmg
    );
  }
}
class Heal extends Spell {
  constructor(iconinmodal, cost, minimummagic, castsound) {
    super(iconinmodal, cost, minimummagic, castsound);
    Spell.SpellsArray.push(this);

    this.CastCopy = this.Cast.bind(this);
    this.icon.addEventListener("click", this.CastCopy);
    this.dmg = 0;
    this.img = this.icon.children[0].children[0].children[0].src;
    this.turns = 3;
    document.querySelector(".MeditationTurns").innerHTML = ` ${
      this.turns - 1
    } `;
    this.iscasted = false;
  }
  Cast() {
    if (gracz.mana >= this.cost) {
      if (this.iscasted === false) {
        $("#MagiaModal").modal("hide");
        gracz.mana -= this.cost;
        ManaLeftDisplay.innerHTML = ` ${gracz.mana}`;
        this.CastSound.play();
        gracz.hp += liczmaxhp() * 0.5;
        walka(gracz, currentMonster, "magic", this.dmg);
        walka(gracz, currentMonster, "magic", this.dmg);
        this.AddBuff();
        Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
        Buff.BuffsArray.forEach((item) => item.TickBuff());
      }
    }
  }
  RecalculateDmg() {
    if (this.iscasted) {
      gracz.hp += liczmaxhp() * 0.1;
    }
    this.cost = Math.round(5 + gracz.magia * 0.5);
    document.querySelector("#healcost").innerHTML = this.cost;
  }
  AddBuff() {
    for (const i of buffslots) {
      if (i.style.backgroundImage === "") {
        this.iscasted = true;
        this.currentBuff = new Buff(
          i,
          this.turns,
          "Heals you for 10%",
          this.img,
          this
        );
        break;
      }
    }
  }
}
class BloodMagic extends Spell {
  constructor(iconinmodal, cost, minimummagic, castsound) {
    super(iconinmodal, cost, minimummagic, castsound);
    this.CastCopy = this.Cast.bind(this);
    Spell.SpellsArray.push(this);
    this.icon.addEventListener("click", this.CastCopy);
    this.dmg = 35 + Math.floor(gracz.magia / 2);
    document.querySelector(".blooddmg").innerHTML = Math.round(
      this.dmg * mods.buffmoddmg
    );
  }
  Cast() {
    this.cost = Math.floor(gracz.hp * 0.25);
    if (gracz.hp >= this.cost) {
      $("#MagiaModal").modal("hide");
      this.RecalculateDmg();
      animateValue(FirstHP, gracz.hp, gracz.hp - this.cost, 200);
      gracz.hp -= this.cost;
      ManaLeftDisplay.innerHTML = `${gracz.mana} `;
      this.CastSound.play();
      walka(gracz, currentMonster, "magic", this.dmg);
      walka(gracz, currentMonster, "magic", this.dmg);
      Buff.BuffsArray.forEach((item) => item.TickBuff());
    }
  }
  RecalculateDmg() {
    this.dmg = 35 + Math.floor(gracz.magia / 2);
    document.querySelector(".blooddmg").innerHTML = Math.round(
      this.dmg * mods.buffmoddmg
    );
  }
}
const kulaognista = new Fireball(
  document.querySelector("#fireball"),
  2,
  5,
  document.querySelector("#fireboltaudio")
);
const medytacja = new Meditation(
  document.querySelector("#meditation"),
  10,
  10,
  document.querySelector("#MeditationAudio")
);
const iska = new Spark(
  document.querySelector("#spark"),
  25,
  25,
  document.querySelector(".Electricsound")
);
const chlapniecie = new Splash(
  document.querySelector("#splash"),
  10,
  10,
  document.querySelector("#SplashAudio")
);
const leczenie = new Heal(
  document.querySelector("#Heal"),
  5,
  5,
  document.querySelector("#HealAudio")
);
const MagiaKrwi = new BloodMagic(
  document.querySelector("#BloodMagic"),
  Math.floor(gracz.hp * 0.25),
  Math.floor(gracz.hp * 0.25),
  document.querySelector("#BloodSound")
);
function FadeOutandIn(target) {
  target.classList.add("hideandshow");
  setTimeout(() => target.classList.remove("hideandshow"), 1500);
}
function ProgressBar() {
  let i = 0;
  this.xp = 1000;
  this.basexp = 0;
  this.przelicznik = Math.floor(this.xp / 100);
  this.move = function (xp, przelicznik, basexp) {
    if (i == 0) {
      i = 1;
      var width;
      width = 1;
      this.gainedxp = false;
      var id = setInterval(frame, 500);
      function frame() {
        if (bar.gainedxp) {
          let rand = generateRandomNumber(6, 8);
          basexp += Math.floor(xp / rand);
          bar.basexp = basexp;
          save();
          bar.gainedxp = false;
        }
        percentage = Math.floor(basexp / przelicznik);
        width = percentage;
        if (width >= 100) {
          clearInterval(id);
          elem.style.width = "1%";
          elem.innerHTML = "1%";
          i = 0;
          bar.rerender();
          xpvalue.innerHTML = basexp + "/" + xp;
        } else {
          xpvalue.innerHTML = Math.floor(basexp) + "/" + Math.floor(xp);
          elem.style.width = width + "%";
          elem.innerHTML = Math.floor(width) + "%";
        }
      }
    }
  };
  this.rerender = function () {
    clearInterval(timer);
    Math.floor((this.xp = this.xp * 1.06));
    this.basexp = 1;
    this.przelicznik = Math.floor(this.xp / 100);
    level++;
    freepoints += 2;
    checkforpoint();
    updatenumbers();
    updatelevel();
    this.move(this.xp, this.przelicznik, this.basexp);
  };
  this.loadlevel = function () {
    const placeholder = bar.basexp;
    for (let i = 1; i < level; i++) {
      Math.floor((this.xp = this.xp * 1.06));
      this.basexp = 1;
      this.przelicznik = Math.floor(this.xp / 100);
    }
    this.basexp = placeholder;
    this.move(this.xp, this.przelicznik, this.basexp);
  };
  let timer = setInterval(() => {
    this.move(this.xp, this.przelicznik, this.basexp);
  }, 1000);
}
let bar = new ProgressBar();
class Miecz {
  constructor() {
    let rand = generateRandomNumber(1, 5);
    this.type = "sword";
    this.subtype = "sword";
    this.identyfikator = NrPerFloor;
    this.icon = wylosujlootsword();
    this.wylosujstatystyki = function (MIN, MAX) {
      this.losowa = generateRandomNumber(MIN, MAX);
      if (this.losowa < 65) {
        this.atak = Math.round(generateRandomNumber(3, 8) * (2 + mods.eqmod));
        this.price = generateRandomNumber(11, 20);
        this.rarity = "Common";
        this.kolor = "gray";
        this.title = `${tytułymiecz[0][0]} miecz ${tytułymiecz[0][rand]}`;
      } else if (this.losowa >= 65 && this.losowa <= 95) {
        this.atak = Math.round(generateRandomNumber(9, 12) * (2 + mods.eqmod));
        this.price = generateRandomNumber(35, 60);
        this.rarity = "Rare";
        this.kolor = "blue";
        this.title = `${tytułymiecz[1][0]} miecz ${tytułymiecz[1][rand]}`;
      } else if (this.losowa > 95 && this.losowa < 100) {
        this.atak = Math.round(generateRandomNumber(13, 18) * (2 + mods.eqmod));
        this.price = generateRandomNumber(120, 150);
        this.rarity = "Epic";
        this.kolor = "purple";
        this.title = `${tytułymiecz[2][0]} miecz ${tytułymiecz[2][rand]}`;
      } else if (this.losowa === 100) {
        this.atak = Math.round(generateRandomNumber(20, 25) * (2 + mods.eqmod));
        this.price = generateRandomNumber(300, 450);
        this.rarity = "Legendary";
        this.kolor = "orange";
        this.title = `${tytułymiecz[3][0]} miecz ${tytułymiecz[3][rand]}`;
      }
    };
    this.nazwa = this.identyfikator;
    this.opis = function (parent) {
      this.nazwa = tippy(parent, {
        theme: "informacja",
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
class Staff {
  constructor() {
    let rand = generateRandomNumber(1, 5);
    this.type = "sword";
    this.subtype = "staff";
    this.identyfikator = NrPerFloor;
    this.icon = this.wylosujlootstaff();
    this.wylosujstatystyki = function (MIN, MAX) {
      this.losowa = generateRandomNumber(MIN, MAX);
      if (this.losowa < 65) {
        this.magia = Math.round(
          generateRandomNumber(20, 25) * (1 + mods.eqmod)
        );
        this.astrologia = Math.round(
          generateRandomNumber(20, 25) * (1 + mods.eqmod)
        );
        this.price = generateRandomNumber(11, 20);
        this.rarity = "Common";
        this.kolor = "gray";
        this.title = `${tytułymiecz[0][0]} kostur ${tytułymiecz[0][rand]}`;
      } else if (this.losowa >= 65 && this.losowa <= 95) {
        this.magia = Math.round(
          generateRandomNumber(26, 41) * (1 + mods.eqmod)
        );
        this.astrologia = Math.round(
          generateRandomNumber(26, 41) * (1 + mods.eqmod)
        );
        this.price = generateRandomNumber(35, 60);
        this.rarity = "Rare";
        this.kolor = "blue";
        this.title = `${tytułymiecz[1][0]} kostur ${tytułymiecz[1][rand]}`;
      } else if (this.losowa > 95 && this.losowa < 100) {
        this.magia = Math.round(
          generateRandomNumber(42, 65) * (1 + mods.eqmod)
        );
        this.astrologia = Math.round(
          generateRandomNumber(42, 65) * (1 + mods.eqmod)
        );
        this.price = generateRandomNumber(120, 150);
        this.rarity = "Epic";
        this.kolor = "purple";
        this.title = `${tytułymiecz[2][0]} kostur ${tytułymiecz[2][rand]}`;
      } else if (this.losowa === 100) {
        this.magia = Math.round(
          generateRandomNumber(66, 90) * (1 + mods.eqmod)
        );
        this.astrologia = Math.round(
          generateRandomNumber(66, 90) * (1 + mods.eqmod)
        );
        this.price = generateRandomNumber(300, 450);
        this.rarity = "Legendary";
        this.kolor = "orange";
        this.title = `${tytułymiecz[3][0]} kostur ${tytułymiecz[3][rand]}`;
      }
    };
    this.nazwa = this.identyfikator;
    this.opis = function (parent) {
      this.nazwa = tippy(parent, {
        theme: "informacja",
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
  wylosujlootstaff() {
    const rand = generateRandomNumber(0, 2);
    const arrayoficons = ["staff1.svg", "staff2.svg", "staff3.svg"];
    return `img/${arrayoficons[rand]}`;
  }
}
class Chestplate {
  constructor() {
    let rand = generateRandomNumber(1, 5);
    this.type = "chestplate";
    this.identyfikator = NrPerFloor;
    this.icon = wylosujlootchestplate();
    this.wylosujstatystyki = function (MIN, MAX) {
      this.losowa = generateRandomNumber(MIN, MAX);
      if (this.losowa < 65) {
        this.hp = Math.round(generateRandomNumber(5, 30) * (2 + mods.eqmod));
        this.price = generateRandomNumber(11, 20);
        this.rarity = "Common";
        this.kolor = "gray";
        this.title = `${tytułyzbroja[0][0]} napiersnik ${tytułyzbroja[0][rand]}`;
      } else if (this.losowa >= 65 && this.losowa <= 95) {
        this.hp = Math.round(generateRandomNumber(31, 55) * (2 + mods.eqmod));
        this.price = generateRandomNumber(20, 35);
        this.rarity = "Rare";
        this.kolor = "blue";
        this.title = `${tytułyzbroja[1][0]} napiersnik ${tytułyzbroja[1][rand]}`;
      } else if (this.losowa > 95 && this.losowa < 100) {
        this.hp = Math.round(generateRandomNumber(56, 79) * (2 + mods.eqmod));
        this.price = generateRandomNumber(120, 150);
        this.rarity = "Epic";
        this.kolor = "purple";
        this.title = `${tytułyzbroja[2][0]} napiersnik ${tytułyzbroja[2][rand]}`;
      } else if (this.losowa === 100) {
        this.hp = Math.round(generateRandomNumber(80, 115) * (2 + mods.eqmod));
        this.price = generateRandomNumber(300, 450);
        this.rarity = "Legendary";
        this.kolor = "orange";
        this.title = `${tytułyzbroja[3][0]} napiersnik ${tytułyzbroja[3][rand]}`;
      }
    };
    this.nazwa = this.identyfikator; // Moze byc blad
    this.opis = function (parent) {
      this.nazwa = tippy(parent, {
        theme: "informacja",
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
    this.type = "ring";
    this.identyfikator = NrPerFloor;
    this.icon = wylosujlootring();
    this.wylosujstatystyki = function (MIN, MAX) {
      this.losowa = generateRandomNumber(MIN, MAX);
      if (this.losowa < 65) {
        this.astrologia = Math.round(
          generateRandomNumber(5, 15) * (1 + mods.eqmod)
        );
        this.magia = Math.round(generateRandomNumber(5, 15) * (1 + mods.eqmod));
        this.price = generateRandomNumber(11, 20);
        this.rarity = "Common";
        this.kolor = "gray";
        this.title = `${tytułyring[0][0]} pierscien ${tytułyring[0][rand]}`;
      } else if (this.losowa >= 65 && this.losowa <= 95) {
        this.astrologia = Math.round(
          generateRandomNumber(15, 25) * (1 + mods.eqmod)
        );
        this.magia = Math.round(
          generateRandomNumber(15, 25) * (1 + mods.eqmod)
        );
        this.price = generateRandomNumber(35, 60);
        this.rarity = "Rare";
        this.kolor = "blue";
        this.title = `${tytułyring[1][0]} pierscien ${tytułyring[1][rand]}`;
      } else if (this.losowa > 95 && this.losowa < 100) {
        this.astrologia = Math.round(
          generateRandomNumber(25, 40) * (1 + mods.eqmod)
        );
        this.magia = Math.round(
          generateRandomNumber(25, 40) * (1 + mods.eqmod)
        );
        this.price = generateRandomNumber(120, 150);
        this.rarity = "Epic";
        this.kolor = "purple";
        this.title = `${tytułyring[2][0]} pierscien ${tytułyring[2][rand]}`;
      } else if (this.losowa === 100) {
        this.astrologia = Math.round(
          generateRandomNumber(40, 55) * (1 + mods.eqmod)
        );
        this.magia = Math.round(
          generateRandomNumber(40, 55) * (1 + mods.eqmod)
        );
        this.price = generateRandomNumber(300, 450);
        this.rarity = "Legendary";
        this.kolor = "orange";
        this.title = `${tytułyring[3][0]} pierscien ${tytułyring[3][rand]}`;
      }
    };
    this.nazwa = this.identyfikator; // Moze byc blad
    this.opis = function (parent) {
      this.nazwa = tippy(parent, {
        theme: "informacja",
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
class Book {
  constructor() {
    this.type = "book";
    this.identyfikator = NrPerFloor;
    this.icon = "img/book.svg";
    this.price = 50;
    this.wylosujstatystyki = function (MIN, MAX) {
      this.losowa = generateRandomNumber(MIN, MAX);
      if (this.losowa < 25) {
        this.whatgives = "Atak";
      } else if (this.losowa >= 25 && this.losowa < 50) {
        this.whatgives = "Health";
      } else if (this.losowa >= 50 && this.losowa < 75) {
        this.whatgives = "Magia";
      } else if (this.losowa >= 75 && this.losowa <= 100) {
        this.whatgives = "Astrology";
      }
    };
    this.opis = function (parent) {
      this.nazwa = tippy(parent, {
        theme: "informacja",
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
class ReplikatorAtomowy {
  constructor() {
    this.type = "sword";
    this.identyfikator = NrPerFloor;
    this.subtype = "Special";
    this.icon = "img/space-gun.svg";
    this.price = 1200;
    this.atak = 100;
    this.magia = 30;
    this.astrologia = 30;
    this.hp = 50;
    this.wylosujstatystyki = function () {
      return;
    };
    this.opis = function (parent) {
      this.nazwa = tippy(parent, {
        theme: "special",
        allowHTML: true,
        content: `
        Replikator Atomowy<br>
        *To ten sam model którym Jarek Lichwała zreplikował atomy Małego Korisa.*<br>
        Rarity:<span class='Special'> Special</span><br>
        Atak: ${this.atak}<br>
        HP: ${this.hp}<br>
        Astrologia: ${this.astrologia}<br>
        Magia: ${this.magia}<br>
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
        case "chestplate":
          AddOrRemoveItemStats(this.item, "+");
          break;
        case "sword":
          AddOrRemoveItemStats(this.item, "+");
          break;
        case "ring":
          AddOrRemoveItemStats(this.item, "+");
          break;
      }
      Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
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
        case "sword":
          AddOrRemoveItemStats(waeringslot.item, "-");
          break;
        case "chestplate":
          AddOrRemoveItemStats(waeringslot.item, "-");
          break;
        case "ring":
          AddOrRemoveItemStats(waeringslot.item, "-");
          Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
          break;
      }
      this.item.usunopis();
      waeringslot.item.usunopis();
      waeringslot.item = this.item;
      switch (waeringslot.item.type) {
        case "sword":
          AddOrRemoveItemStats(waeringslot.item, "+");
          break;
        case "chestplate":
          AddOrRemoveItemStats(waeringslot.item, "+");
          break;
        case "ring":
          AddOrRemoveItemStats(waeringslot.item, "+");
          Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
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
        case "chestplate":
          this.shortequip(wearingarray[1]);
          break;
        case "sword":
          this.shortequip(wearingarray[0]);
          break;
        case "ring":
          this.shortequip(wearingarray[2]);
          break;
      }
    };
    this.slot.addEventListener("click", () => {
      if (this.item != undefined) {
        switch (this.item.type) {
          case "chestplate":
            if (wearingarray[1].hasitem === true) {
              this.swapitems(wearingarray[1]);
            } else {
              this.equip();
            }
            break;
          case "sword":
            if (wearingarray[0].hasitem === true) {
              this.swapitems(wearingarray[0]);
            } else {
              this.equip();
            }
            break;
          case "ring":
            if (wearingarray[2].hasitem === true) {
              this.swapitems(wearingarray[2]);
            } else {
              this.equip();
            }
            break;
          case "book":
            switch (this.item.whatgives) {
              case "Atak":
                gracz.atak += 2;
                break;
              case "Health":
                gracz.hp += 15;
                break;
              case "Magia":
                gracz.magia += 2;
                break;
              case "Astrology":
                gracz.astrologia += 2;
                break;
            }
            liczmaxhp();
            updatenumbers();
            updatefightstats(gracz, currentMonster);
            this.item.usunopis();
            this.slot.style.backgroundImage = "";
            delete this.item;
            this.hasitem = false;
            Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
            save();
        }
      }
    });
  }
  SellItems() {
    this.slot.addEventListener("contextmenu", () => {
      if (shop.isopen && this.hasitem) {
        this.item.usunopis();
        this.hasitem = false;
        event.target.style.backgroundImage = "none";
        gold.amount += this.item.price;
        gold.display.innerHTML = `<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
        delete this.item;
        goldsound.play();
        save();
      }
    }); //Stad trza ruszyc
  }
}
class Wearslot {
  constructor(visualslot, item) {
    this.hasitem = false;
    this.slot = visualslot;
    this.item = item;
    this.addlistenforunequip = function () {
      this.slot.addEventListener("click", () => {
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
              case "sword":
                event.target.style.backgroundImage = 'url("img/protest.svg")';
                AddOrRemoveItemStats(this.item, "-");
                break;
              case "chestplate":
                event.target.style.backgroundImage =
                  'url("img/defaultchest.svg")';
                AddOrRemoveItemStats(this.item, "-");
                break;
              case "ring":
                event.target.style.backgroundImage =
                  'url("img/defaultring.svg")';
                AddOrRemoveItemStats(this.item, "-");
                Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
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
function AddOrRemoveItemStats(item, operation) {
  if (operation === "-") {
    gracz.atak -= item.atak ?? 0;
    gracz.hp -= item.hp ?? 0;
    gracz.astrologia -= item.astrologia ?? 0;
    gracz.magia -= item.magia ?? 0;
  } else if (operation === "+") {
    gracz.atak += item.atak ?? 0;
    gracz.hp += item.hp ?? 0;
    gracz.astrologia += item.astrologia ?? 0;
    gracz.magia += item.magia ?? 0;
  } else {
    throw Error(console.log("Blad"));
  }
}
class HealingPotion {
  constructor() {
    this.canheal = true;
    this.display = document.querySelector(".healthpotion");
    this.usageinfo = "Ready to use";
    this.tippyinstance = tippy(this.display, {
      theme: "informacjapotka",
      allowHTML: true,
      content: `Healing Potion<br>
        Heals you for 25% of your HP.<br>
        Can be used every 4 turns.<br>
        Turn count: ${this.usageinfo}
        `,
    });
    this.display.addEventListener("click", this.Heal.bind(this), false);
  }
  Odswiezinstancje() {
    this.tippyinstance.setContent(`Healing Potion<br>
        Heals you for 25% of your HP.<br>
        Can be used every 4 turns.<br>
        ${this.usageinfo}
        `);
  }
  Heal() {
    if (this.canheal) {
      gracz.hp += liczmaxhp() * 0.25;
      this.canheal = false;
      turnsbeforepotion = 0;
      this.usageinfo = `Turn count: ${turnsbeforepotion}`;
      this.Odswiezinstancje();
    }
    save();
    updatefightstats(gracz, currentMonster);
    updatenumbers();
  }
  CheckforHeal() {
    if (turnsbeforepotion === 4) {
      this.usageinfo = "Ready to use";
      this.canheal = true;
      this.Odswiezinstancje();
    } else if (turnsbeforepotion === 0 && this.canheal) {
      this.Odswiezinstancje();
    } else {
      this.usageinfo = `Turn count: ${turnsbeforepotion}`;
      this.Odswiezinstancje();
    }
  }
}
class Shopslot {
  constructor(visualslot, item) {
    this.hasitem = false;
    this.icon = visualslot;
    this.item = item;
    this.icon.addEventListener("click", () => {
      if (this.hasitem) {
        if (gold.amount >= this.item.price) {
          for (const i of inventoryarray) {
            if (i.hasitem === false) {
              gold.amount -= this.item.price;
              gold.display.innerHTML = `<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
              this.hasitem = false;
              i.hasitem = true;
              i.item = this.item;
              this.item.usunopis();
              setURL(i.slot, this.item.icon);
              this.icon.style.backgroundImage = "none";
              i.item.price = Math.floor(i.item.price / 3);
              i.item.opis(i.slot);
              this.item = undefined;
              zapiszeq();
              shop.Saveshop();
              save();
              break;
            }
          }
        }
      }
    });
  }
}
class Shop {
  static enemyimg = obrazki.src;
  constructor() {
    this.icon = document.querySelector(".sklepicon");
    this.grid = document.querySelector(".sklep");
    this.items = new Array();
    this.shopslotarray = new Array();
    this.isopen = false;
    this.firstGenerate = localStorage.getItem("firstGenerateItems") ?? false;
    if (this.firstGenerate === false) {
      this.additems();
      this.Saveshop();
      this.firstGenerate = true;
      localStorage.setItem("firstGenerateItems", this.firstGenerate);
    }
    this.grid.style.display = "none";
    this.icon.addEventListener("click", this.openshop.bind(this));
  }
  additems() {
    for (const i of itemicons) {
      const cointoss = generateRandomNumber(1, 3);
      switch (cointoss) {
        case 1:
          const rand = generateRandomNumber(1, 2);
          if (rand === 1) {
            this.items.push(new Staff());
          } else {
            this.items.push(new Miecz());
          }
          this.shopslotarray.push(
            new Shopslot(i, this.items[this.items.length - 1])
          );
          break;
        case 2:
          this.items.push(new Chestplate());
          this.shopslotarray.push(
            new Shopslot(i, this.items[this.items.length - 1])
          );
          break;
        case 3:
          this.items.push(new Ring());
          this.shopslotarray.push(
            new Shopslot(i, this.items[this.items.length - 1])
          );
          break;
      }
      let inx = this.items.length - 1;
      setURL(this.shopslotarray[inx].icon, this.shopslotarray[inx].item.icon);
      this.shopslotarray[inx].item.wylosujstatystyki(85, 100);
      this.shopslotarray[inx].item.price *= 2;
      this.shopslotarray[inx].hasitem = true;
      this.shopslotarray[inx].item.opis(this.shopslotarray[inx].icon);
    }
  }
  openshop() {
    if (this.isopen === false) {
      gracz.AtakiDisplay.style.display = "none";
      this.isopen = true;
      gracz.AtakiImg.forEach((item) => (item.onclick = ""));
      Shop.enemyimg = obrazki.src;
      this.enemyimg = obrazki.src;
      this.grid.style.display = "flex";
      obrazki.src = "img/rpgshop.gif";
      obrazki.style.marginBottom = "3%";
      RefreshShop.style.display = "flex";
      RefreshShopButton.addEventListener("click", this.RefreshShopForGold);
      fightgrid[1].style.opacity = 0;
      document.querySelector("main").classList.add("zmientlo");
      setTimeout(() => {
        // ? Asynchronicznie musi wywolac to gowno bo inaczej window object staje sie sraka
        this.CloseShop();
      }, 100);
      inventoryarray.forEach((item) => item.SellItems());
    }
  }
  CloseShopFunction(event) {
    const blokwalki = document.querySelector("main");
    const dzieci = shop.grid.children;
    if (
      event.target !== RefreshShopButton &&
      event.target !== blokwalki &&
      event.target !== dzieci[0] &&
      event.target !== dzieci[1] &&
      event.target !== dzieci[2] &&
      event.target !== dzieci[3] &&
      event.target !== dzieci[4] &&
      event.target !== dzieci[5] &&
      event.target !== dzieci[6] &&
      event.target !== dzieci[7] &&
      event.target !== dzieci[8] &&
      event.target !== dzieci[9]
    ) {
      document.querySelector(".sklep").style.display = "none";
      gracz.AtakiDisplay.style.display = "flex";
      if (gracz.MagicOrAstrologySelected === true) {
        gracz.AtakiDisplay.classList.remove("showmoreoptionsAstrology");
        gracz.AtakiDisplay.classList.remove("showmoreoptionsMagic");
        gracz.AtakiImg[0].src = "img/walkamiecz.svg";
        gracz.AtakiImg[1].src = "img/magic-wand.svg";
        gracz.AtakiImg[2].src = "img/alchemy.svg";
        gracz.AtakiIcons.forEach((item) => FadeOutandIn(item));
        gracz.BackIcon.style.display = "none";
        gracz.AtakiDisplay.classList.remove("showmoreoptionsAstrology");
        gracz.BackIcon.removeEventListener("click", BackArrowCopy, true);
        gracz.MagicOrAstrologySelected = false;
      }
      obrazki.style.marginBottom = "0%";
      obrazki.src = Shop.enemyimg;
      shop.isopen = false;
      blokwalki.classList.remove("zmientlo");
      RefreshShop.style.display = "none";
      fightgrid.forEach((item) => (item.style.opacity = "1"));
      shop.CloseShop();
      window.removeEventListener("click", this.CloseShopFunction);
    }
  }
  CloseShop() {
    if (this.isopen) {
      window.addEventListener("click", this.CloseShopFunction);
    } else {
      window.removeEventListener("click", this.CloseShopFunction);
    }
  }
  RefreshShopForGold() {
    if (gold.amount >= 50) {
      gold.amount -= 50;
      gold.display.innerHTML =
        gold.display.innerHTML = `<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
      shop.SwapOutItems();
    }
  }
  SwapOutItems() {
    this.shopslotarray.forEach((iteminarray) => {
      if (iteminarray.hasitem) {
        iteminarray.hasitem = false;
        iteminarray.item.usunopis();
        iteminarray.icon.style.backgroundImage = "none";
        delete iteminarray.item;
      }
    });
    this.shopslotarray.length = 0;
    this.items.length = 0;
    this.additems();
    this.Saveshop();
  }
  Saveshop() {
    let shoparrayforsave = this.shopslotarray.filter((item) => {
      return item.hasitem === true;
    });
    localStorage.setItem("shopsave", Flatted.stringify(shoparrayforsave));
  }
}
const shop = new Shop();
const Healpot = new HealingPotion();
let slot1 = new Eqslot(inventoryslots[0]);
let slot2 = new Eqslot(inventoryslots[1]);
let slot3 = new Eqslot(inventoryslots[2]);
let slot4 = new Eqslot(inventoryslots[3]);
let slot5 = new Eqslot(inventoryslots[4]);
let weaponslot = new Wearslot(wearing[0]);
let chestslot = new Wearslot(wearing[1]);
let ringslot = new Wearslot(wearing[2]);
inventoryarray.push(slot1, slot2, slot3, slot4, slot5);
wearingarray.push(weaponslot, chestslot, ringslot);
function updatestage() {
  stagedisplay.innerHTML = `Stage: ${stage[0]}-${stage[1]}`;
  if (bossesbeaten.Fifth === true) {
    //
  } else if (bossesbeaten.Fourth === true) {
  } else if (bossesbeaten.Third === true) {
  } else if (bossesbeaten.Second === true) {
  } else if (bossesbeaten.First === true) {
    changeBackgroundImage("img/Forest.jpg", 0);
  } else {
    return;
  }
}
function updatelevel() {
  leveldispay.innerHTML = `Level: ${level}`;
}
function walka(u1, u2, type, dmg) {
  if (currentMonster.hp <= 0) {
    currentMonster.generujnowego();
    updatefightstats(u1, u2);
    addGoldAfterKillingEnemy();
    gracz.mana = gracz.magia;
    ManaLeftDisplay.innerHTML = `${gracz.mana} `;
  }
  fightgrid[0].style.opacity = "1";
  fightgrid[1].style.opacity = "1";
  if (Healpot.canheal === false) {
    turnsbeforepotion++;
  }
  Healpot.CheckforHeal();
  if (RP === false) {
    if (firstplayer === false) {
      switch (type) {
        case "normal":
          animateValue(
            SecondHP,
            currentMonster.hp,
            Math.round(currentMonster.hp - gracz.atak * mods.buffmoddmg),
            200
          );
          Math.round(Number((u2.hp -= u1.atak * mods.buffmoddmg)));
          break;
        case "magic":
          animateValue(
            SecondHP,
            currentMonster.hp,
            Math.round(currentMonster.hp - dmg * mods.buffmoddmg),
            200
          );
          Math.round(Number((u2.hp -= dmg * mods.buffmoddmg)));
          break;
        default:
          console.log("ERROR");
          break;
      }
      red(SecondHP);
      updatefightstats(u1, u2);
      if (currentMonster.hp <= 0) {
        addGoldAfterKillingEnemy();
        gracz.mana = gracz.magia;
        ManaLeftDisplay.innerHTML = `${gracz.mana} `;
      }
      firstplayer = true;
    } else {
      if (currentMonster.bosstype !== "Normal") {
        currentMonster.bossSpecialAtk(currentMonster.bosstype);
      }
      currentMonster.dzwiek.play();
      animateValue(FirstHP, u1.hp, u1.hp - u2.atak, 200);
      u1.hp = u1.hp - u2.atak;
      red(FirstHP); // Hits 1st target
      updatefightstats(u1, u2);
      firstplayer = false;
    }
    if (gracz.hp <= 0) {
      document.querySelector(".gameoversound").play();
      setTimeout(function () {
        localStorage.clear();
        window.location.reload();
      }, 3000);
    }
    if (currentMonster.hp <= 0) {
      updatefightstats(u1, u2);
      gracz.mana = gracz.magia;
      ManaLeftDisplay.innerHTML = `${gracz.mana} `;
      bar.gainedxp = true;
      for (const i of kulki) {
        if (i.classList.contains("wypelnione")) {
          if (nroffight === 6) {
            currentMonster.wyczyscpobossie();
            currentMonster.generujbossa();
            break;
          }
        } else {
          nroffight++;
          i.classList.add("wypelnione");
          break;
        }
      }
      NrPerFloor++;
      const somerandomnumber = generateRandomNumber(1, 4);
      switch (somerandomnumber) {
        case 1:
          AddItem(Chestplate);
          break;
        case 2:
          const rand = generateRandomNumber(1, 2);
          if (rand === 1) {
            AddItem(Staff);
          } else {
            AddItem(Miecz);
          }
          break;
        case 3:
          AddItem(Ring);
          break;
        case 4:
          AddItem(Book);
          break;
      }
      u2.generujnowego();
    }
  }
}
let ftime = false;
let ftimeeq = false;
function updatefightstats(u1, u2) {
  //Updates stats in the fight
  FirstHP.innerHTML = `HP:${Math.round(u1.hp)}`;
  SecondHP.innerHTML = `HP:${Math.round(u2.hp)}`;
  FirstATK.innerHTML = `Atak:${Math.round(u1.atak * mods.buffmoddmg)}`;
  SecondATK.innerHTML = `Atak:${Math.round(u2.atak)}`;
  save();
}
function save() {
  // Saves the game
  let save = {
    bossesbeaten: bossesbeaten,
    gold: gold.amount,
    stageprimary: stage[0],
    stagesecondary: stage[1],
    healingpotioncanheal: Healpot.canheal,
    turnsbeforepotion: turnsbeforepotion,
    spendedonhealth: spendedonhealth,
    freepunkty: freepoints,
    graczatak: gracz.atak,
    graczmagia: gracz.magia,
    graczastro: gracz.astrologia,
    hp1: gracz.hp,
    hp2: currentMonster.hp,
    levelsaved: level,
    basexp: bar.basexp,
  };
  let eq = zapiszeq();
  let equbrane = zapiszubrane();
  if (inventoryarray[0].item != undefined) {
    ftime = true;
    localStorage.setItem("ftime", ftime);
  }
  if (wearingarray[0].item || wearingarray[1].item || wearingarray[2].item) {
    ftimeeq = true;
    localStorage.setItem("ftimeeq", ftimeeq);
  }
  localStorage.setItem("firstvisit", firstvisit);
  localStorage.setItem("eqsave", Flatted.stringify(eq));
  localStorage.setItem("save", JSON.stringify(save));
  localStorage.setItem("equbrane", Flatted.stringify(equbrane));
}
function load() {
  // Loades the game
  let savedstate = JSON.parse(localStorage.getItem("save"));
  ftime = localStorage.getItem("ftime");
  ftimeeq = localStorage.getItem("ftimeeq");
  obrazki.src = ChooseARandomEnemie();
  ManaLeftDisplay.innerHTML = `${gracz.mana} `;
  if (ftime) {
    var savedeq = Flatted.parse(localStorage.getItem("eqsave"));
  }
  if (savedeq != undefined) {
    for (let i = 0; i < savedeq.length; i++) {
      inventoryarray[i].item = savedeq[i];
      setURL(inventoryarray[i].slot, inventoryarray[i].item.icon);
      switch (inventoryarray[i].item.type) {
        case "sword":
          if (inventoryarray[i].item.subtype === "staff") {
            DodajOpis(inventoryarray[i], "sword", "staff");
          } else if (inventoryarray[i].item.subtype === "sword") {
            DodajOpis(inventoryarray[i], "sword", "sword");
          } else if (inventoryarray[i].item.subtype === "Special") {
            console.log(inventoryarray[i]);
            DodajOpis(inventoryarray[i], "sword", "Special");
          }
          break;
        case "chestplate":
          DodajOpis(inventoryarray[i], "chestplate", "chestplate");
          break;
        case "ring":
          DodajOpis(inventoryarray[i], "ring", "ring");
          break;
        case "book":
          DodajOpis(inventoryarray[i], "book", "book");
          break;
        default:
          console.log("Error");
          break;
      }
      inventoryarray[i].hasitem = true;
      console.log(inventoryarray[i]);
      inventoryarray[i].item.opis(inventoryarray[i].slot);
    }
  }
  if (ftimeeq) {
    var savedubrane = Flatted.parse(localStorage.getItem("equbrane"));
    if (savedubrane != undefined) {
      for (let i = 0; i < savedubrane.length; i++) {
        var inx;
        switch (savedubrane[i].type) {
          case "sword":
            inx = 0;
            break;
          case "chestplate":
            inx = 1;
            break;
          case "ring":
            inx = 2;
            break;
        }
        wearingarray[inx].item = savedubrane[i];
        setURL(wearingarray[inx].slot, wearingarray[inx].item.icon);
        switch (wearingarray[inx].item.type) {
          case "sword":
            if (wearingarray[inx].item.subtype === "staff") {
              DodajOpis(wearingarray[inx], "sword", "staff");
            } else if (wearingarray[inx].item.subtype === "sword") {
              DodajOpis(wearingarray[inx], "sword", "sword");
            } else {
              DodajOpis(wearingarray[inx], "sword", "Special");
            }
            break;
          case "chestplate":
            DodajOpis(wearingarray[inx], "chestplate", "chestplate");
            break;
          case "ring":
            DodajOpis(wearingarray[inx], "ring", "chestringplate");
            break;
        }
        updatefightstats(gracz, currentMonster);
        wearingarray[inx].hasitem = true;
        wearingarray[inx].item.opis(wearing[inx]);
      }
    }
  }
  if (shop.firstGenerate === "true") {
    let savedshop = Flatted.parse(localStorage.getItem("shopsave"));
    savedshop.forEach((item, counter = 0) => {
      shop.shopslotarray.push(new Shopslot(itemicons[counter], item.item));
      setURL(itemicons[counter], item.item.icon);
      shop.shopslotarray[counter].hasitem = true;
      switch (shop.shopslotarray[counter].item.type) {
        case "sword":
          if (shop.shopslotarray[counter].item.subtype === "staff") {
            DodajOpis(shop.shopslotarray[counter], "sword", "staff");
          } else {
            DodajOpis(shop.shopslotarray[counter], "sword", "sword");
          }
          break;
        case "chestplate":
          DodajOpis(shop.shopslotarray[counter], "chestplate", "chestplate");
          break;
        case "ring":
          DodajOpis(shop.shopslotarray[counter], "ring", "ring");
          break;
      }
      shop.shopslotarray[counter].item.opis(itemicons[counter]);
      counter++;
    });
  }
  if (savedstate != null && savedstate != undefined) {
    gold.amount = savedstate.gold;
    Healpot.canheal = savedstate.healingpotioncanheal;
    Healpot.canheal = savedstate.healingpotioncanheal;
    turnsbeforepotion = savedstate.turnsbeforepotion;
    gracz.hp = savedstate.hp1;
    stage[0] = savedstate.stageprimary ?? 1;
    stage[1] = savedstate.stagesecondary ?? 1;
    currentMonster.hp = savedstate.hp2;
    bar.basexp = savedstate.basexp;
    gracz.atak = savedstate.graczatak;
    gracz.astrologia = savedstate.graczastro;
    gracz.magia = savedstate.graczmagia;
    gracz.mana = gracz.magia;
    Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
    ManaLeftDisplay.innerHTML = `${gracz.mana} `;
    freepoints = savedstate.freepunkty;
    level = savedstate.levelsaved;
    spendedonhealth = savedstate.spendedonhealth;
    bossesbeaten = savedstate.bossesbeaten;
    bar.loadlevel();
    updatelevel();
    updatestage();
    updatefightstats(gracz, currentMonster);
    //mods.enemymodhp=stage[0]*x
    mods.RecalculateMods();
  } else {
    updatefightstats(gracz, currentMonster);
  }
}
//Reset
document.querySelector("#reset").addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});
function red(myElement) {
  let aktualnykolor = getComputedStyle(myElement).color;
  myElement.style.color = "red";
  setTimeout(() => {
    myElement.style.color = aktualnykolor;
  }, 1000);
}
let empty = false;
function zapiszeq() {
  let arrayforsave = [];
  for (let i = 0; i < inventoryarray.length; i++) {
    if (inventoryarray[i].item != undefined) {
      arrayforsave.push(inventoryarray[i].item);
    }
  }
  return arrayforsave;
}
function zapiszubrane() {
  let arrayforsaveubrane = [];
  for (let i = 0; i < wearing.length; i++) {
    if (wearingarray[i].item != undefined) {
      arrayforsaveubrane.push(wearingarray[i].item);
    }
  }
  return arrayforsaveubrane;
}
function addbasestats() {
  checkforpoint();
  for (let i = 0; i < dodajstatystyki.length; i++) {
    switch (i) {
      case 0: {
        dodajstatystyki[0].addEventListener("click", () => {
          if (freepoints > 0) {
            gracz.atak += 2;
            updatefightstats(gracz, currentMonster);
            freepoints--;
            save();
            updatenumbers();
          }
        });
        break;
      }
      case 1: {
        dodajstatystyki[1].addEventListener("click", () => {
          if (freepoints > 0) {
            spendedonhealth++;
            gracz.hp += 10;
            updatefightstats(gracz, currentMonster);
            freepoints--;
            save();
            updatenumbers();
          }
        });
        break;
      }
      case 2: {
        dodajstatystyki[2].addEventListener("click", () => {
          if (freepoints > 0) {
            gracz.magia += 2;
            gracz.mana += 2;
            Spell.SpellsArray.forEach((item) => item.RecalculateDmg());
            ManaLeftDisplay.innerHTML = `${gracz.mana} `;
            updatefightstats(gracz, currentMonster);
            freepoints--;
            save();
            updatenumbers();
          }
        });
        break;
      }
      case 3: {
        dodajstatystyki[3].addEventListener("click", () => {
          if (freepoints > 0) {
            gracz.astrologia += 2;
            updatefightstats(gracz, currentMonster);
            freepoints--;
            save();
            updatenumbers();
          }
        });
        break;
      }
    }
  }
}
function checkforpoint() {
  if (freepoints <= 0) {
    dodajstatystyki.forEach((item) => (item.disabled = true));
  } else {
    dodajstatystyki.forEach((item) => (item.disabled = false));
  }
  save();
}
function updatenumbers() {
  freepointsdisplay.innerHTML = `Wolne punkty: ${freepoints}`;
  bazowestatystyki[0].innerHTML = `Atak: ${gracz.atak}`;
  bazowestatystyki[1].innerHTML = `Health: ${Math.floor(liczmaxhp())}`;
  bazowestatystyki[2].innerHTML = `Magia: ${gracz.magia}`;
  bazowestatystyki[3].innerHTML = `Astro: ${gracz.astrologia}`;
}
function muteAudio() {
  const audio = document.querySelectorAll("audio");
  audio.forEach((item) => {
    if (muted === false) {
      item.pause();
      item.muted = true;
    } else {
      item.muted = false;
    }
  });
  if (muted === false) {
    muted = true;
  } else {
    muted = false;
  }
}
let spendedonhealth = Number(0);
function liczmaxhp() {
  let valueofklata;
  if (wearingarray[1].item !== undefined) {
    valueofklata = wearingarray[1].item.hp;
  } else {
    valueofklata = Number(0);
  }
  const maxhp = 100 + valueofklata + spendedonhealth * 10;
  return maxhp;
}
function addGoldAfterKillingEnemy() {
  if (RP === false) {
    const rand = generateRandomNumber(10, 25);
    gold.amount += rand;
    goldsound2.play();
    gold.display.innerHTML = `<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
  }
}
class Dialog {
  static isactive = false;
  static display = document.querySelector("#fabulanapis");
  static MainDisplay = document.querySelector("#AttackName");
  static PokazNapis(napis, time) {
    time = time + 1500 ?? 0;
    setTimeout(() => {
      this.display.innerHTML = napis;
      this.display.style.opacity = "1";
    }, time);
  }
  static PokazNapisMain(napis, time) {
    this.MainDisplay.innerHTML = napis;
    time = time + 1000 ?? 0; // 1000 Bo tutaj uzywam innej metody FadeIn
    setTimeout(() => {
      this.MainDisplay.classList.add("FadeIn");
    }, time);
  }
  static UkryjNapis(time) {
    setTimeout(() => {
      this.display.style.opacity = 0;
    }, time);
    setTimeout(() => {
      this.display.innerHTML = "";
    }, time + 1000);
  }
}
let firstvisit = localStorage.getItem("firstvisit") ?? true;
if (firstvisit == true) {
  Dialog.PokazNapis(
    "*Planujesz Zemste na Piotrku Sodolskim który zabił Korisa Starego idąc jego tropem natrafiasz na dziwną jaskinie w której pachnie grzybami postanawiasz tam wejść i poszukać go. Słyszysz odgłosy małych dzieci*"
  );
  Dialog.UkryjNapis(8000);
  Dialog.PokazNapis(
    "? W Grze zdobywaj przedmioty i je zakladaj lewym przyciskiem myszy bądź otwieraj sklep i je sprzedawaj Prawym przyciskiem myszy. Build jest dowolny! Pamiętaj o używaniu mikstury! Celem jest dotarcie do jak nawyższego stage oraz poznanie tajemnicy Piotrka Sodolskiego ?",
    10000
  );
  Dialog.UkryjNapis(25000);
  Dialog.PokazNapis(
    "? Do dyspozycji na środku ekranu masz szybkie Menu do którego możesz przypinac umiejętności z Magii oraz Astrologii aby to zrobić kliknij na Pinezke W Menu Prawym Przyciskiem Myszy ?",
    26000
  );
  Dialog.UkryjNapis(40000);
  firstvisit = false;
  save();
}
function animateValue(obiekt, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = obiekt;
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = `HP:${Math.round(current)}`;
    if (current == end || current === 0 || current < 0) {
      clearInterval(timer);
      updatefightstats(gracz, currentMonster);
    }
  }, stepTime);
}
load();
Healpot.CheckforHeal();
if (gold.amount != undefined) {
  gold.display.innerHTML = `<img src="img/coins.svg" alt="Amount of money">${gold.amount} Yangow`;
}
updatenumbers();
addbasestats();
wearingarray.forEach((item) => item.addlistenforunequip());
if (currentMonster.hp <= 0) {
  currentMonster.generujnowego();
  updatefightstats(gracz, currentMonster);
}
// document.querySelector("#UFO").addEventListener("click", () => {
//   stage[0] = 1;
//   stage[1] = 10;
//   gracz.hp = 1000000000;
//   gracz.atak = 500;
//   nroffight = 5;
//   save();
// });
function DodajOpis(ArrayItem, type, subtype) {
  if (type === "sword") {
    if (subtype === "staff") {
      ArrayItem.item.opis = function (parent) {
        this.nazwa = tippy(parent, {
          theme: "informacja",
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
    } else if (subtype === "sword") {
      ArrayItem.item.opis = function (parent) {
        this.nazwa = tippy(parent, {
          // Tu bedzie bug
          theme: "informacja",
          allowHTML: true,
          content: `
                ${this.title}<br>
                Atak: ${this.atak}<br>
                <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
                Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
                `,
        });
      };
    } else if (subtype === "Special") {
      ArrayItem.item.opis = function (parent) {
        this.nazwa = tippy(parent, {
          theme: "special",
          allowHTML: true,
          content: `
          Replikator Atomowy<br>
          *To ten sam model którym Jarek Lichwała zreplikował atomy Małego Korisa.*<br>
          Rarity:<span class='Special'> Special</span><br>
          Atak: ${this.atak}<br>
          HP: ${this.hp}<br>
          Astrologia: ${this.astrologia}<br>
          Magia: ${this.magia}<br>
          <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span>
          `,
        });
      };
    }
  } else if (type === "chestplate") {
    ArrayItem.item.opis = function (parent) {
      this.nazwa = tippy(parent, {
        // Tu bedzie bug
        theme: "informacja",
        allowHTML: true,
        content: `
              ${this.title}<br>
              HP: ${this.hp}<br>
              <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span><br>
              Rarity: <span style="color:${this.kolor};">${this.rarity}</span>
              `,
      });
    };
  } else if (type === "ring") {
    ArrayItem.item.opis = function (parent) {
      this.nazwa = tippy(parent, {
        // Tu bedzie bug
        theme: "informacja",
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
  } else if (type === "book") {
    ArrayItem.item.opis = function (parent) {
      this.nazwa = tippy(parent, {
        theme: "informacja",
        allowHTML: true,
        content: `
        Book of knowledge<br>
        Grants 1 point into: ${this.whatgives}<br>
        <span class='coins'><img src='img/coins.svg'>${this.price} Yangow</span>
        `,
      });
    };
  }
  ArrayItem.item.usunopis = function () {
    this.nazwa.destroy();
  };
}
function AddItem(itemobject) {
  bronie.push(new itemobject());
  for (let i = 0; i < inventoryarray.length; i++) {
    if (inventoryarray[i].hasitem === false) {
      setURL(inventoryarray[i].slot, bronie[bronie.length - 1].icon);
      if (itemobject.subtype !== "Special") {
        if (bossloot === true) {
          bronie[bronie.length - 1].wylosujstatystyki(95, 100);
          bossloot = false;
        } else {
          bronie[bronie.length - 1].wylosujstatystyki(1, 100);
        }
      }
      inventoryarray[i].item = bronie[bronie.length - 1];
      inventoryarray[i].item.opis(inventoryarray[i].slot);
      inventoryarray[i].hasitem = true;
      break;
    }
  }
}
