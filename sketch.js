const Engine=Matter. Engine;
const World= Matter. World;
const Bodies=Matter. Bodies; 
var engine, world;
var ground
var ball
function setup() {
createCanvas(800,800);
var static={
isStatic:true
}
var notStatic={
restitution:2
}
console.log(ball);
engine=Engine.create()
world=engine.world;
ground=Bodies.rectangle(400,700,800,50, static)
ball=Bodies.circle(200,400,30,notStatic)
World.add(world,ground)
World.add(world,ball)
}

function draw() {
  
  background(0,0,0);  
 Engine.update(engine); 

  rectMode(CENTER); 
  rect (ground.position.x,ground.position.y,800,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}
