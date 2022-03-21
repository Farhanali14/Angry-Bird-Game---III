const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;

var ground;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var bird;
var pig1, pig2, pig3;
var backgroundImg;

function preload()
{
  backgroundImg = loadImage("assets/bg.png");
}

function setup()
{
  createCanvas(1200,400)

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);


  box1 = new Box(700,320,70,70); 
  box2 = new Box(920,320,70,70); 
  box3 = new Box(700,240,70,70); 
  box4 = new Box(920,240,70,70); 
  box5 = new Box(810,160,70,70); 
   
  log1 = new Log(810,260,300, PI/2); 
  log2 = new Log(810,180,300, PI/2); 
  log3 = new Log(760,120,150, PI/7); 
  log4 = new Log(870,120,150, -PI/7); 

  bird = new Bird(200,50);

  pig1 = new Pig(810, 350); 
  pig2 = new Pig(810, 220); 
  pig3 = new Pig(810, 480); 



}
    
function draw()
{
  background(backgroundImg);

  Engine.update(engine);

  ground.show();

  box1.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();

  bird.show();

  pig1.show();
  pig2.show();
  pig3.show();

  log1.show();
  log2.show();
  log3.show();
  log4.show();



}