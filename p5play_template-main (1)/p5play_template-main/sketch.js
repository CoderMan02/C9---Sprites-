var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);

  if(keyDown("w") || keyDown("UP_ARROW")) {
    box.y = box.y-5;
  }
  
  if(keyDown("a") || keyDown("LEFT_ARROW")) {
    box.x = box.x-5;
  }
  
  if(keyDown("s") || keyDown("DOWN_ARROW")) {
    box.y = box.y+5;
  }
  
  if(keyDown("d") || keyDown("RIGHT_ARROW")) {
    box.x = box.x+5;
  }
  

  drawSprites();
}


