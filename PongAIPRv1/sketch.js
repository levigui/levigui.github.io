let tocouMinhaRaquete = false;
let tocouRaqueteOponente = false;

let alturaTela = 600;
let larguraTela = 1200;
let metadeTela = larguraTela/2;
let aumentoDeVelocidade = 1.5;

//Variaveis em JS da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2;
let velocidadeX = 10;
let velocidadeY = 10;
let velocidadeRaquete = 15;


//Variaveis em JS das raquetes./
let alturaRaquete = 110;
let larguraRaquete = 10;

let xMinhaRaquete = larguraTela - larguraRaquete;
let yMinhaRaquete = alturaTela/2 - alturaRaquete;

let xRaqueteOponente = 0;
let yRaqueteOponente = 145;
let value = 0;

//Placar
let meuPlacar = 0;
let placarOponente = 0;


function preload(){
 
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
 
}

function setup() {
  createCanvas(larguraTela, alturaTela);
  altura = height;
  largura = width;
  console.log("Largura = " +largura);
  console.log("Altura = " +altura);
}

//Um loping sempre, desenha o que tem dentro
function draw() {
  background("tomato");
  stroke("white");
  strokeWeight(3);
  line(metadeTela,0,metadeTela,alturaTela)
    if(frameCount< 400){
    telaInicial();
  } else{
    jogar();
  }
 

}// Fim da Função Draw


function telaInicial(){

  fill("steelBlue");
  rect(larguraTela/4, 0, metadeTela, alturaTela);
  textAlign(CENTER);
  fill("white")
  textSize(20);
  text("Ping Pong do Programador", metadeTela, alturaTela/2);

 

}

function jogar(){
 if(meuPlacar < 5 && placarOponente < 5){
  mostraBolinha();
  movimentaBolinha();
  detectaColisao();
  mostraRaquetes();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  detectaColisaoBolinhaRaquetes();
  mostraPlacar();

}
  else{
  if(meuPlacar == 5){
 setasVenceu();
   
 
       
     
  } else{
 
    teclasVenceu();    
  }

}
}

function setasVenceu(){
  fill("white")
  rect(metadeTela, 0, larguraTela, alturaTela)
  textSize(40);
  fill("red");
  textAlign(CENTER);
  text("Setas venceu", metadeTela + metadeTela/2, alturaTela/2);

}

function teclasVenceu(){

  fill("lime")
  rect(0, 0, metadeTela, alturaTela)
  textSize(40);
  fill("red");
  textAlign(CENTER);
  text("Letras venceu", metadeTela/2, alturaTela/2);
}

function mostraPlacar(){
  fill("red")
  stroke("white")
  textSize(30);
  text(meuPlacar, 3/4 * larguraTela, 30);
  text(placarOponente, larguraTela/4, 30);
 
  if (xBolinha + raio >= largura){
 
    placarOponente += 1;
    somPonto.play();
    velocidadeX -= aumentoDeVelocidade;
    velocidadeY -= aumentoDeVelocidade;
  }
 
    if (xBolinha - raio < 1){
 
    meuPlacar += 1;
      somPonto.play();
    velocidadeX += aumentoDeVelocidade;
    velocidadeY += aumentoDeVelocidade;
  }

}

function detectaColisaoBolinhaRaquetes(){
//Colisao minha raquete
  tocouMinhaRaquete = collideRectCircle(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);

  if(tocouMinhaRaquete){
    //Impede gol contra
    if(xBolinha > metadeTela && velocidadeX > 0){
      velocidadeX *= -1
      somRaquetada.play();
    }
     
  }

  tocouRaqueteOponente =
    collideRectCircle(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
 
 
    if(tocouRaqueteOponente){
       if(xBolinha < metadeTela && velocidadeX < 0){
      velocidadeX *= -1
       somRaquetada.play();
       }
         
    }
     
}


function movimentaRaqueteOponente(){
   if (keyIsDown(87)) {
   if(yRaqueteOponente > 0)
    yRaqueteOponente -= velocidadeRaquete;
  }
  if (keyIsDown(83)) {
    if(yRaqueteOponente < (alturaTela - alturaRaquete ))
  yRaqueteOponente += velocidadeRaquete;
  }
    if (keyIsDown(65)) {
      if(xRaqueteOponente > 0)
    xRaqueteOponente -= velocidadeRaquete;
  }
    if (keyIsDown(68)) {
      if(xRaqueteOponente < (metadeTela - larguraRaquete))
    xRaqueteOponente += velocidadeRaquete;
  }
}


function movimentaMinhaRaquete(){
   if (keyIsDown(UP_ARROW)){
     if(yMinhaRaquete > 0)//Teto
    yMinhaRaquete -= velocidadeRaquete;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(yMinhaRaquete < (alturaTela - alturaRaquete ))//Chão
    yMinhaRaquete += velocidadeRaquete;
  }
    if (keyIsDown(LEFT_ARROW)) {
    if(xMinhaRaquete > metadeTela)//Parede esquerda
    xMinhaRaquete -= velocidadeRaquete;
  }
    if (keyIsDown(RIGHT_ARROW)) {
      if(xMinhaRaquete < (larguraTela - larguraRaquete))// Borda direita
    xMinhaRaquete += velocidadeRaquete;
  }
}

function mostraRaquetes(){
fill("lightblue");
rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
fill("pink")
rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);

}




function mostraBolinha(){
  fill("lime");
  noStroke();
  circle(xBolinha, yBolinha, diametro);
 
}// Fim mostra bolinha

function movimentaBolinha(){
  yBolinha += velocidadeY;
  xBolinha += velocidadeX;
 
}//Fim movimenta bolinha

function detectaColisao(){
  //Colisão com as Bordas laterais
    if (xBolinha + raio >= largura || xBolinha - raio <= 0){
       
      velocidadeX *= -1;
     
    }
   
  //Colisão com as Bordas superior e inferior
  if (yBolinha + raio >= altura || yBolinha - raio <= 0)
  {
       
      velocidadeY *= -1;
  }
 

}// Fim detecta Colisão
