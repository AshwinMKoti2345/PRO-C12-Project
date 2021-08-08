//all the variables named
var gonnablast;
var gottacollect;
var boostupmylives;
var thepathforrunning;
var boostupmypower;
var goottarunquickly;
var alreadyexhausted; 
var runningforever;
var anicepath;
var baghmilkhabagh;
var malamal;
var choriburibaathhai;
var fatafatlootnahoga;
var rb;
var lb;


function preload(){
  //pre-load images
  gonnablast = loadImage("bomb.png");
  gottacollect = loadImage("coin.png");
  boostupmylives = loadImage("energyDrink.png");
  thepathforrunning = loadImage("path.png");
  boostupmypower = loadImage("power.png");
  gottarunquickly = loadImage("Runner-1.png");
  alreadyexhausted = loadImage("Runner-2.png");

  //preload animations
  runningforever = loadAnimation("gottarunquickly","alreadyexhausted");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  anicepath = createSprite("200,200");
  anicepath.addImage("thepathforrunning");
  anicepath.velocityY = 5;
  anicepath.Y = anicepath.height/30;

  baghmilkhabagh = createSprite("180,340,50,170");
  baghmilkhabagh.addAnimation("running", runningforever);

  malamal = createSprite("200,200,80,90");
  malamal.addImage("gottacollect");
  malamal.scale = 0.3;

  choriburibaathhai = createSprite("100,200,80,90");
  choriburibaathhai.addImage("gottacollect");
  choriburibaathhai.scale = 0.3;

  fatafatlootnahoga = createSprite("300,200,80,90");
  fatafatlootnahoga.addImage("gottacollect");
  fatafatlootnahoga.scale = 0.3;

  rb = createSprite("390,300,80,600");
  lb = createSprite("0,300,100,600");

  rb.visible = "false";
  lb.visible = "false";



}

function draw() {
  background(0);
  textSize(20);
  text ('Coin Score', 1,200);
  textSize(20);
  text ('0', 20,230);
  anicepath.velocityY = 5;
  baghmilkhabagh.x = World.mousex;

  if (anicepath.y>400) {
    anicepath.y = height/2;

  if (baghmilkhabagh.isTouching(malamal) || baghmilkhabagh.isTouching(choriburibaathhai) || baghmilkhabagh.isTouching(fatafatlootnahoga)) {
    CoinScore = CoinScore +1;

  }
}

baghmilkhabagh.collide(rb);
baghmilkhabagh.collide(lb);

edges = createEdgeSprites();
baghmilkhabagh.collide(edges[3]);

 drawSprites();
}

