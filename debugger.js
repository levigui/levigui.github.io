window.onload = function(){ 
   // alert("Konichiua");
  /* concatenação de strings com o símbolo + */
    console.log("se quiser me ver, Pressione F12 - Console...")
    console.log("a = "+ a + " b = " + b);
    console.log("a + b =" +  parseInt(a+b) );


};
/* Variavel Global */
var  a = 2;
var  b = 2;

var entradas = document.querySelectorAll('input');
var resposta = document.querySelector('.resposta')
var botao = document.querySelector("#btn_somar")




/* monitoramento do click no botão */
/* quando o botão for clicado a funçao "somar " sera chamada */


pegaNumero01 = function(){
return entradas[0].value;

};


  pegaNumero02 = function(){

    return entradas[1].value;

  };


  testarEntradasVazias = function(){

    if(pegaNumero01() === "" || pegaNumero02() === "")
    return true;
    
    else

    return false;

  }




  somar = function(){
    if(testarEntradasVazias()){
    resposta.textContent = "Erro: Preencha os dois campos Numéricos";
    resposta.classList.remove('correta');
    resposta.classList.add('errada');
    return false;
    }
    else{
    atualizarResposta();
    resposta.classList.remove('errada');
    resposta.classList.add('correta');
    }
    }
    
    atualizarResposta = function(){
    let num1 = pegaNumero01();
    let num2 = pegaNumero02();
    var soma = num1 + num2;
    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
    }


  botao.addEventListener('click',somar);
/* monitoramento do click no botão */
/* quando o botão for clicado a funçao "somar " sera chamada */