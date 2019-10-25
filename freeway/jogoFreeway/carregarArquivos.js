// Variaveis de Set Para Imagens
let imgEstrada;
let imgVaca;
let imgCarro = [];
let imgGalinha

//Variaveis de movimentação no Plano Cartesiano 

//Vetores 
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 215, 270, 325];
let velocidadeCarro = [3, 5 , 7, 3, 5, 7];

let xVaca = 380 ;
let yVaca = 369 ;
let yGalinha = 360;
let xGalinha = 150;
let tamanhoVaca = 30;
let tamanhoGalinha = 45;




// Variaveis De Tela
let alturaDaTela = 600 ;
let larguraDaTela = 400;


//variaveis de Pontuação
let meuPlacar = 0 ;
let placarGalinha = 0;

//Variaves de Colisão
let larguraCarro = 45;
let alturaCarro  = 30;




// Preload "Precarregamento de Imagens"
function preload(){
    
  imgEstrada =loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  imgCarro[3] = loadImage('imagens/carroVirado1.png');
  imgCarro[4] = loadImage('imagens/carroVirado2.png');
  imgCarro[5] = loadImage('imagens/carroVirado3.png');
  imgGalinha = loadImage('imagens/chicken_PNG2148.png');

  trilha = loadSound('sons/trilha.mp3');
  ponto = loadSound('sons/pontos.wav');
  batida = loadSound('sons/colidiu.mp3');
 


} 
