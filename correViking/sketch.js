var viking;
let xViking = 120;
let yViking = 300;
let teto = 0;
let fundo;
let vilao = 0;
let velocidadeflecha = 8;
let xFlecha = 0;
let yFlecha = 300;
let flecha1;
let flecha2;
let flecha3;
let flecha4;
let flecha5;
let tamanhoFlecha = 50;
let meuPlacar = 0;
let vivo = 0;
let lFlecha = 45;
let aFlecha = 10 ;
let tamanhoShuriken = 40;
let lViking = 25;
let aViking = 40;
let gameOver;
let cena;
let play = 0 ;
let trilha;
let pulo;
let vidas = 30;
let coracoes;
let xFundo = 0;
let yFundo = 0;
let senai;


function preload() {
 
  flecha1 = loadImage('imagensFlecha/flecha.png');
  flecha2 = loadImage('imagensFlecha/flechaLVL2.png');
  flecha3 = loadImage('imagensFlecha/flechaLVL3.png');    
  flecha4 = loadImage('imagensFlecha/flechaLVL5.png');    
  flecha5 = loadImage('imagensFlecha/flechaNinja.png');
  gameOver = loadImage('imagens/gameOver.png');
  cena = loadImage('imagens/cenario.jpg');
  trilha = loadSound('sons/trilha.mp3');
  pulo = loadSound('sons/salto.wav');
  skyrim = loadSound('sons/sk.mp3');
    coracoes = loadImage('imagens/co.png');
   senai = loadImage('imagens/indice.png');
  
  
  
   
  
  
  
  viking = loadAnimation('imagens/run1.png', 'imagens/run2.png', 'imagens/run3.png', 'imagens/run4.png', 'imagens/run5.png', 'imagens/run6.png', 'imagens/run7.png', 'imagens/run8.png');

   
  fundo = loadImage ('imagensFundo/fundo2.jpg');
  
  

}

function setup() {
  createCanvas(600, 400);
   
 
  somDeFundo();

}

function draw() {
  
 
  
        image(cena,0,0,600,400);
  

  fill("Teal");
        rect(135,10,400,100
            );
  
  
    
  
  fill("Teal");
        rect(10,330,500,50
            );
  
  
  
  fill("White");
  textSize(13);
  text("Desenvolvido por: Julio C. Becker, Guilherme S. Camargo e Estevão D. Torresani", 20, 360);
  
  
  
  fill("White");
   textSize(50);
  text(" Corre Viking!!   ", 150, 75);
  
  
  image(senai,0,0,130,55);
  
  if(frameCount > 50) {
    
  
    
    
       colide();
  
      
  
  if(vivo == 0){
    
  
    
  background(0);
  image(fundo,xFundo,yFundo, 1920, 500)
  movimentaFundo()
  pula();
  ar();
  queda();
  chao();
  carroTeto();
  pontos();
  mostraPlacar();
  mostraInimigos();
  aumentoDeVelocidae();
  movimentaInimigo();
  mostraVidas();
  animation(viking, xViking, yViking); 
  }
  
  if(vivo ==  1)    
  { background("BLACK"); 
  
   
     
     image(gameOver,125,10,350,250);
  
   
   fill("WHITE");
    textSize(25);
  text("Pontuação:" + " " + meuPlacar, 220, 280);
    
   skyrim.stop();

 
    


   
  
  

  
  
  
  
  }


  }
 





    

}//fim do Draw



function movimentaFundo(){
   
  xFundo -= 5;
  if(xFundo < -1350){
      
      xFundo = 0 
    
     } 

}
   function mostraVidas(){
     
     if(vidas >= 10)
        {image(coracoes,15,10,40,40);}
     
     if(vidas >= 20){
    image(coracoes,55,10,40,40);}

      if(vidas >= 30){
     image(coracoes,95,10,40,40);}
   
   
   
   
   }




function somDeFundo(){
  
  
  if(vivo == 0){
  skyrim.setVolume(0.5);  
 skyrim.play();}
     

}








function colide(){
  
 if(collideRectRect(xFlecha, yFlecha, lFlecha, aFlecha, xViking, yViking, lViking, aViking )){
           
       
     vidas -= 1;
   
   
     if(vidas < 10)
     {vivo = 1 ;}
   
 
 } //if
  
  
  
  
  
}// final

   

  


    function aumentoDeVelocidae(){
    
    
    
          if(meuPlacar == 500){
                velocidadeflecha += 2;
          }
    
      
       if(meuPlacar == 1000){
                velocidadeflecha += 5;
          }
      
      
       if(meuPlacar == 3500){
                velocidadeflecha += 7;
          }
      
      
      
             if(meuPlacar == 5000){
                velocidadeflecha += 10;
          }
      
      
    
    }








  function pontos(){
      
        
               
          meuPlacar += 1 ;
    
    
    
         
         }
       
       

    
  

  


function mostraPlacar(){
 
  
   fill("WHITE");
  rect(260,15,100,60);
  
  
  fill("BLACK");
  rect(265,20,90,50);
  
  
  textSize(30);
  
   fill("WHITE");
  text(meuPlacar, 270, 55);
  
  
 
    

}







function movimentaInimigo(){
  

 xFlecha -= velocidadeflecha;

}

function carroTeto(){

 if(xFlecha < -26){
         xFlecha = 599; 
 
  vilao = ceil(random(1,6));
    
   
 
                 }
  

  


}

function mostraInimigos(){
   if(vilao == 2){
  
         
image(flecha1,xFlecha,yFlecha,tamanhoFlecha,tamanhoFlecha); }     



if(vilao == 3){
  
       
image(flecha2,xFlecha,yFlecha,tamanhoFlecha,tamanhoFlecha); }     
  
  if(vilao == 4){
  
       
image(flecha3,xFlecha,yFlecha,tamanhoFlecha,tamanhoFlecha); }     
  
  
   if(vilao == 5){
  
       
image(flecha4,xFlecha,yFlecha,tamanhoFlecha,tamanhoFlecha); }     

  
    if(vilao == 6){
  
    
image(flecha5,xFlecha,yFlecha,tamanhoShuriken,tamanhoShuriken); }    
  
  
}


function chao(){
  if(yViking == 300){
    teto = 0  
  }
}

function queda(){

  if(teto){
    for (let i = 0; i < 0.3; i++) 
    {yViking += 5;}
  }
  
}

function ar(){
  if(yViking <= 250){
    
    teto = 1
  }
  
}


function pula(){
  
  if(teto  == false){
  
  if(keyIsDown(32) || keyIsDown(UP_ARROW)){
    
    pulo.play();
    for (let i = 0; i < 16; i++)
    {yViking -= i;}

  
  }}
}
