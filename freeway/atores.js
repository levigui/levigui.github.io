 function mostraVaca(){  
    image(imgVaca,xVaca,yVaca,tamanhoVaca,tamanhoVaca); }


function mostraGalinha(){ 

    
  image(imgGalinha,xGalinha,yGalinha,tamanhoGalinha,tamanhoGalinha);
      
  
}



 function movimentaVaca(){

     if (keyIsDown(UP_ARROW)){
          if( yVaca > 5  )
        yVaca -= 3;
      }
  



  if (keyIsDown(DOWN_ARROW)){
      
      if( yVaca < 370  )
      {  yVaca += 3;}
      


}
 }


function movimentaGalinha(){

      if (keyIsDown(87)){
      
          if( yGalinha > 5  )
        yGalinha -= 4;
      }
  
  if (keyIsDown(83)){
      
      if( yGalinha < 370  )
        yGalinha += 4;
      }


}


