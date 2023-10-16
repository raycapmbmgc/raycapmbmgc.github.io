let roboAmarelo = "roboamarelo.png";
let roboBranco = "robobranco.png";
let roboRosa = "roborosa.png";
let roboVermelho = "robovermelho.png";
let roboAzul = "roboazul.png";
let roboPreto = "robopreto.png"


function trocarcor() {
    document.getElementById("imagemrobo").src= roboAzul;
    let cor = roboAzul;
    roboAzul =  roboRosa;
    roboRosa =  roboVermelho ;
    roboVermelho =  roboPreto;
    roboPreto = roboBranco;
    roboPreto = roboAmarelo;
    roboAmarelo = cor;
  }

  function voltaCor() {
    let volta = trocarcor();
  }
