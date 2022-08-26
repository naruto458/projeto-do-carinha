var menino,meninoimagem;
var imagemstrada,strada;
function preload(){
meninoimagem=loadAnimation('Runner-1.png','Runner-2.png');

imagemstrada=loadImage('path.png');

  //imagens pré-carregadas
}

function setup(){
  createCanvas(400,400);
  strada=createSprite(200,200);
  strada.addImage(imagemstrada);

 menino=createSprite(200,200)

  menino.addAnimation('curupira',meninoimagem);
menino.scale=0.1;
  

}


function draw() {
  background(0);
strada.velocityY=10;
if(strada.y>=400){
  strada.y=height/2;

}
drawSprites();
}
