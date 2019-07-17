



  function myFunction() {


    document.getElementById("demo").innerHTML = "Paragrafo Mudado...";   // uso comun para saida de dados

    console.log("Olha eu só Apareço ao pressionar F12 :3 ");      //uso comun para a depuração de codigo
    window.alert("Um alerta ai ó")               //é um alerta ainda, alerta é alerta pô
  }



  function funcao2() {
    
    if (document.getElementById("demo1").innerHTML.length === 0)   {
          //se vasio escreve dentro dele
      document.getElementById("demo1").innerHTML = "<em>pipipipopopopo</em>";
      document.getElementById("demo2").innerHTML = "cuida da sua vida <strong>OTARIX</strong>";
      documnt.getElementById("centro").style.border = " border: 2px dashed  deepskyblue;"


    }

          else{

            document.getElementById("demo1").innerHTML = "";
            document.getElementById("demo2").innerHTML = "";
                  //se não apaga seu testo pipipi pppopopo
            document.querySelector("#centro").style.border = "none"
          }

  
  }