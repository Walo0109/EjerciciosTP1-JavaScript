let numero = Number(prompt("Por favor, ingresa un número:"));
let mensaje = "El numero " + numero + " es divisible por ";


let divisiblePorAlguno = false;

  if (numero % 2 === 0) {
    mensaje += "2";
    divisiblePorAlguno = true;
  }
  if (numero % 3 === 0) {
    if (divisiblePorAlguno) {
      mensaje += " , 3";
    } else {
      mensaje += "3";
    }
    divisiblePorAlguno = true;
  }
  if (numero % 5 === 0) {
    if (divisiblePorAlguno) {
      mensaje += " , 5";
    } else {
      mensaje += "5";
    }
    divisiblePorAlguno = true;
  }
  if (numero % 7 === 0) {
    if (divisiblePorAlguno) {
      mensaje += " y 7";
    } else {
      mensaje += "7";
    }
    divisiblePorAlguno = true;
  }

  if (divisiblePorAlguno) {
    console.log (mensaje) ;
  } else {
    console.log("El numero " + numero + " no es divisible por 2, 3, 5 ni 7.");
  }
