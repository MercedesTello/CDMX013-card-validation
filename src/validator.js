const validator = {
  isValid: function (creditCardNumber) {
    let arrCreditCardNumberReverse = creditCardNumber.split("").reverse();
    let sum = 0;
    for (let i = 0; i < arrCreditCardNumberReverse.length; i++) {
      // 4356
      // 0123
      const numberString = arrCreditCardNumberReverse[i];
      let number = 0;
      //los impares
      if (i % 2 == 0) {
        number = parseInt(numberString);
      }
      // aca van los pares
      else {
        number = parseInt(numberString) * 2;
        if (number >= 10) {
          let strNumber = number.toString()
          number = parseInt(strNumber[0]) + parseInt(strNumber[1])
        }
      }
      sum = sum + number
    }
    if ((sum % 10) == 0) {
      return true
    } else {
      return false
    }
    
  },
  maskify:function (tarjeta){
    if(tarjeta.length <=4){ 
      return tarjeta
    }
    else{//transformar de tarjeta los 12 primeros digitos en # y concatenarlo con los ultimos 4 números
      let guardar= tarjeta.slice(-4)
      let masked= tarjeta.slice(0, -4)
      let cat= ""
      for (let i=0; i< masked.length;i++){
      cat+="#" 
      }

      return cat+=guardar
    }
  }
  }


//validator.isValid('4137894711755904'); // true

export default validator;