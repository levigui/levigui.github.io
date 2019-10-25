
//Função de Criação de Tela

function setup() {
  createCanvas(600, 400);
 // trilha.setVolume(0.2);
  //trilha.loop();
 
}


// Função draw "Sempre"
function draw() {
 
  
  if(frameCount > 400) { // +/- 8s

    if(meuPlacar < 5 && placarGalinha < 5)
    
    jogar();
    
    
  else{ verificarVencedor();}
    }else{
      
      //tela inicial
      
      telaInicial();
         
      
       
}
}

function jogar(){ 

  
    background(imgEstrada);
// Funções  
    movimentaVaca();
    movimentaCarros();
    mostraVaca();
    mostraCarros()
    mostraPlacar();
    placar();
   mostraGalinha();
    movimentaGalinha();
   atropelamento();


}

function telaInicial(){
      
      
        background("purple");
        textStyle(BOLD);
        textAlign(CENTER);
        textSize(48);
        fill("white")
      
        text(" Avenida 1° de Maio ",300,190);
          textSize(24);
        text(" Desenvolvido Por Guilherme 'LeviGui'  Camargo",300,230);
  
  
      
      }



 function verificarVencedor(){
 
     if(meuPlacar >= 5){
       vacaVencedora();
      
     }
   else{    galinhaVencedora(); }
 
 }





function vacaVencedora(){
      
      
        background("purple");
        textStyle(BOLD);
        textAlign(CENTER);
        textSize(48);
        fill("white")
      
        text(" Vaca Venceu MUU!",300,90);
          
        
          image(imgVaca, 200, 100 ,200, 200);
  
      
      }


function galinhaVencedora(){
      
      
        background("purple");
        textStyle(BOLD);
        textAlign(CENTER);
        textSize(48);
        fill("white")
      
        text(" A Galinha Venceu Pópó!",300,90);
          
        
          image(imgGalinha, 200, 100 ,200, 200);
           
              
  
      
      }





