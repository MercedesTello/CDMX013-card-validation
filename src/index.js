import validator from './validator.js';
const validador= document.getElementById("botonValidar");
const resultado= document.getElementById("resultado");
    validador.addEventListener("click", function() {
        const creditCardNumber= document.getElementById("tarjeta").value; //se selecciona todo el valor dentro del elemento
        
        const validar= validator.isValid(creditCardNumber)
        if (validar==true){
            resultado.innerHTML=`<h3 class="valida"> ¡Felicidades! Tu compra es un éxito</h3>`
        }else{
            resultado.innerHTML=`<h3 class="invalida"> ¡Ups! Tu tarjeta ha sido rechazada</h3>`
        }      
    })

    validador.addEventListener("click", function() {
    let creditCardNumber= document.getElementById("tarjeta");
    let creditCardMaskify= validator.maskify(creditCardNumber.value);
    console.log (creditCardMaskify)
    creditCardNumber.value= creditCardMaskify;
    console.log(creditCardNumber);
    })