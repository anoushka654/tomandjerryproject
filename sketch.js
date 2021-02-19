var backdropImg;
var mouseTeasing, mouseStopping;
var catStart, catWalking, catSitting;
var mouse, cat;

function preload() {
    backdropImg = loadImage ("garden.png");

    catStart = loadImage ("cat1.png");
    catWalking = loadAnimation ("cat2.png", "cat3.png");
    catSitting = loadImage ("cat4.png");

    mouseTeasing = loadAnimation ("mouse1.png", "mouse2.png", "mouse3.png");
    mouseStopping = loadImage ("mouse4");
}

function setup(){
    createCanvas(800,800);
    
    mouse = createSprite (250, 200);
    mouse.addAnimation (mouseTeasing);
    
    cat = createSprite (500, 200);
    cat.addImage (catStart);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_ARROW) {
      cat.velocity = -4;
      cat.addAnimation ("catWalking", catWalking);
      cat.changeAnimation ("catWalking");
  }


}
