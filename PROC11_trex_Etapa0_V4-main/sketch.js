
var trex ,trex_running;
var edges
var piso, pisoImg, invisible;
var nubeImg, nubes;

function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");  
pisoImg=loadImage("ground2.png");
nubeImg=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running", trex_running);
 trex.scale=0.6;


 //piso
piso= createSprite(180,180,600,20);
piso.addImage(pisoImg);
invisible=createSprite(200,190,600,10)
invisible.visible=false;

 edges=createEdgeSprites();
}

function draw(){
  background("lightgray")
piso.velocityX=-2;
if(piso.x < 0){
piso.x=piso.width/2;
}

  if(keyDown("space")&& trex.y>=100){
    trex.velocityY=-10;
   
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(invisible);

  crearnNubes();
drawSprites();
}


//funcion de nubes
function crearnNubes(){
  if (frameCount % 60 === 0){
    var nube = createSprite(600,100,30,10);
    nube.addImage(nubeImg)
    nube.scale=0.5;
    nube.y=Math.round(random(10,100))
    nube.velocityX=-3;
    nube.depth=trex.depth;
    trex.depth=trex.depth+3;
  }
  
}