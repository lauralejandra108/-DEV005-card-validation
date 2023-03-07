const validator =  {
  isValid: function (nuValidar) {
    //console.log("estes es mi numero de entrada", nuValidar)
    //console.log(typeof nuValidar)
    const reveNum = nuValidar.split("").reverse(); // reversar mis numeros
    const card = []; 
    const sumTotal = [];
    //console.log("split",nuValidar.split(""))
    //console.log("reverse",nuValidar.split("").reverse())
    //decirle que a todos los números que ocupan una posición par se les debe multiplicar por dos
    for(let index= 0;index< reveNum.length; index++){ //va al indice del array 
      //console.log(index%2)
      //Dicir que si la posicion en diferente de cero cuando se divide por dos 
      if (index%2!==0) { 
        card.push(reveNum[index]*2)// multiplicar por 2
        //console.log("impares",reveNum[index]*2)
      }
      else{
        card.push(reveNum[index]) //sino guardar en card
      }
    }
    //console.log("Estos son los pares multipliados ", card);
    //si este número es mayor o igual a 10, debemos sumar los dígitos del resultado
    for(let i= 0;i< card.length; i++){
      if(card[i]>9){
        sumTotal.push(card[i]%10 + parseInt(card[i]/10)) // 
      }
      else if(0<=card[i]<=9){
        sumTotal.push(card[i]) // guardar los que no son mayores a diez en variable sumtotal
      }
      //console.log(sumTotal);
    }
    let resutSum = 0;
    //es valido si la suma de sus dígitos finales es un múltiplo de 10.
    for (let i= 0;i< sumTotal.length; i++) {
      const numeroConvertido=parseInt(sumTotal[i])
      resutSum = resutSum + numeroConvertido
      //console.log("ESTA ES LA SUMA TOTAL", resutSum) 
    }
    const validFinal = resutSum % 10   //es valido si la suma de sus dígitos finales es un múltiplo de 10.
    //console.log("este es el resultado final", validFinal);   
    if (validFinal === 0 ){  //si el total es multiplo de cero ... true
    
      //console.log(validFinal)
      return true
    } else { 
    //console.log(validFinal)
      return false
    }
  },
  maskify: function(numValidar){
    let nuMaski = "";
    const cuatroDigitos = numValidar.slice(-4); 
    for (let i = 0; i < numValidar.length -4; i++ ){ //se acceden desde el 0 hasta los -4 numeros 
      i < numValidar.length - 4 
      nuMaski += "#";
    }
    return nuMaski + cuatroDigitos; 
  },
};
export default validator
