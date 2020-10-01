var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "white";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,50,50);
  movingRect.shapeColor = "white";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
 bounce(movingRect, fixedRect)
  drawSprites();
}
