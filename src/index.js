import validator from './validator.js';

//console.log(validator);
const numsTarjeta = document.getElementById("inputNumero");
const respuesta = document.getElementById("respuesta");
//let validarNu = validator.IsValid(nuValidar);
// llamar los numero ingresados

const boton = document.getElementById("botton");
boton.addEventListener("click", function(){
  const resultadoValida = validator.isValid(numsTarjeta.value);
  if (resultadoValida === true){ 
    respuesta.innerHTML = "Tarjeta valida";
    console.log("respuesta valida", resultadoValida);
  } else { 
    respuesta.innerHTML = "Tarjeta invalida";
    console.log("respuesta incorrecta", resultadoValida);
  }
})
numsTarjeta.addEventListener("keyup", (e)=>{
  const numeros = e.target.value;
  console.log(numeros);
});