let atropelaVaca = false;
let atropelaGalinha = false;

function atropelamento(){

  for(let i=0; i<imgCarro.length; i++){
    
    atropelaVaca = collideRectRect(xVaca, yVaca, tamanhoVaca, tamanhoVaca, xCarro[i], yCarro[i],larguraCarro, alturaCarro)
    
      if(atropelaVaca){
        //Vaca Atropelada
        
        yVaca = 366;
        batida.play();
        if(meuPlacar > 0){
        meuPlacar -= 1;}
        
          
      
      }      
    
    atropelaGalinha = collideRectRect(xGalinha, yGalinha, tamanhoGalinha, tamanhoGalinha, xCarro[i], yCarro[i],larguraCarro, alturaCarro)
    
    
     if(atropelaGalinha){
        //Galinha Atropelada
        
        yGalinha = 366;
       batida.play();
         if(placarGalinha > 0){
          placarGalinha -= 1;}
      }      
  
  }//for
  
  

}//function



