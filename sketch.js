var tom,tomImage;
var jery,jeryImage;
var ground;



function preload() {
tomImage=loadAnimation('images/tomTwo.png');
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(800,550,20,20);
tom.addAnimation(tomImage);
tom.scale = 0.2;
ground=createSprite(50,600,10000,10);
jerry=createSprite(100,550,20,20);
}

function draw() {

    background(225);
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}