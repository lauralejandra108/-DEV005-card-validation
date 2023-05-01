import validator from './validator.js';

//console.log(validator);
const numsTarjeta = document.getElementById("inputNumero");
const respuesta = document.getElementById("respuesta");
// llamar los numero ingresados
const boton = document.getElementById("botton");
boton.addEventListener("click", function(){ 
  const resultadoValida = validator.isValid(numsTarjeta.value);
  if (resultadoValida === true){ 
    respuesta.innerHTML = "Tarjeta valida";
    //console.log("respuesta valida", resultadoValida);
  } else { 
    respuesta.innerHTML = "Tarjeta invalida";
    //console.log("respuesta incorrecta", resultadoValida);
  }
  const encrypt = validator.maskify(numsTarjeta.value)
  //console.log(encrypt)
  
  //numsTarjeta.innerHTML = encrypt
  const button = document.getElementById("botton");
  button.addEventListener("click", doChange);
  function doChange() {  
    document.getElementById('inputNumero').value = encrypt;  
  }  
})
numsTarjeta.addEventListener("keyup", (e)=>{
  const numTarj = e.target.value;
  //console.log(e)
  numsTarjeta.value = numTarj
    .replace(/\s/g, "")
    .replace(/\D/g, "") 
    .replace(/([0-9]{4})/g, "$1 ")
  //console.log(numsTarjeta)
})


