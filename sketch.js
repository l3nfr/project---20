var jerryOneImg , jerryTwoImg , jerryThreeImg , jerryFourImg ;
var tomOneImg , tomTwoImg , tomThreeImg , tomFourImg ;

function preload() {
    //load the images here
    jerryOneImg = loadImage("jerryOne.png");
    jerrytwoImg = loadImage("jerryTwoImg");
    jerryThreeImg = loadImage("jerryThreeImg");
    jerryFourImg = loadImage("jerryFourImg");
    tomOneImg = loadImage("tomOne.png");
    tomTwoImg = loadImage("tomTwoImg");
    tomThreeImg = loadImage("tomThreeImg");
    tomFourImg = loadImage("tomFourImg");

}

function setup(){
    createCanvas(600,500);
    //create tom and jerry sprites here
 back = createSprite(300,250);
 
 cat = createSprite(300,100);
 
 mouse = createSprite(200,400);
 
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

}


