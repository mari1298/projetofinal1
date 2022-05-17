var bgfloresta, raposa, imraposa, floresta;

function preload(){
  bgfloresta = loadImage("assets/flore.jpg")
  imraposa = loadImage("assets/raposa.png")
}

function setup(){
  createCanvas(1000,550)
  //imagem de plano de fundo
  floresta = createSprite(500,275);
  floresta.addImage(bgfloresta);
  floresta.scale = 0.9

  //criando canto superior e inferior
  bottomGround = createSprite(200,390,800,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,800,20);
  topGround.visible = false;
        
  //criando o balão     
  raposa = createSprite(150,200,20,50);
  raposa.addImage(imraposa);
  raposa.scale = 0.2;

}

function draw() {
  
  background("black");
        
  //fazendo o balão de ar quente pular
  if(keyDown("space")) {
    raposa.velocityY = -6 ;
  }

  //adicionando gravidade
  raposa.velocityY = raposa.velocityY + 2;
   
  drawSprites();
        
}
