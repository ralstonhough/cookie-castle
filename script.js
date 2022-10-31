let turret = document.getElementById("turret");
let roseWindow = document.getElementById("roseWindow");
let wall = document.getElementById("wall");
let tower = document.getElementById("tower");
let imageID;
let ladyFinger;
let reesesCup;
let mincePie;
let wafer;
let castleArray = [];

function preload() {
    ladyFinger = loadImage("ladyFinger.png");
    reesesCup = loadImage("reesesCup.png");
    mincePie = loadImage("mincePie.png");
    wafer = loadImage("wafer.png");
};

function setup() {
    createCanvas(innerWidth, innerHeight);
    background('skyblue');
    ladyFinger.resize(0,200);
    reesesCup.resize(100,0);
    mincePie.resize(0,100);
    wafer.resize(0,100);
};

function draw() {
    background('skyblue');
    imageMode(CENTER);
    placeImage;
};

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
};

body.onclick = function placeImage() {
    image(imageID, mouseX, mouseY);
    let obj = {piece: imageID.valueOf(), xPos: mouseX, yPos: mouseY};
    castleArray.push(obj);
    setCookie("castleCookie", castleArray, 999);
    console.log(castleArray);
};

turret.onclick = function() {
    turret.style.textShadow = "0px 0px 10px white";
    roseWindow.style.textShadow = "0px 0px 0px";
    wall.style.textShadow = "0px 0px 0px";
    tower.style.textShadow = "0px 0px 0px";
    imageID = reesesCup;
};

roseWindow.onclick = function() {
    turret.style.textShadow = "0px 0px 0px";
    roseWindow.style.textShadow = "0px 0px 10px white";
    wall.style.textShadow = "0px 0px 0px";
    tower.style.textShadow = "0px 0px 0px";
    imageID = mincePie;
};

tower.onclick = function() {
    turret.style.textShadow = "0px 0px 0px";
    roseWindow.style.textShadow = "0px 0px 0px";
    wall.style.textShadow = "0px 0px 0px";
    tower.style.textShadow = "0px 0px 10px white";
    imageID = ladyFinger;
};

wall.onclick = function() {
    turret.style.textShadow = "0px 0px 0px";
    roseWindow.style.textShadow = "0px 0px 0px";
    wall.style.textShadow ="0px 0px 10px white";
    tower.style.textShadow = "0px 0px 0px";
    imageID = wafer;
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
};

const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
};