

function mostraPlacar(){
  textSize(30);
  
   fill("DeepPink");
  text(meuPlacar, 500, 30);
  
   fill("Tomato");
  text(placarGalinha, 75, 30);
  

}


function placar(){

  if(yVaca <= 15){
  
      meuPlacar += 1
      yVaca = 400
    ponto.play();
    
    
  
  }
  
  if(yGalinha <= 15){
  
      placarGalinha += 1
      yGalinha = 400
     ponto.play();
    
    
  
  }
  






}

