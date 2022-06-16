var currentNumberWrapper = document.getElementById('current-number');
var alerta = document.getElementById('alert')
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    alerta.innerHTML = "";
}

function decrement(){
    if(currentNumberWrapper.innerText > 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        alerta.innerHTML = "";
    } else {
       alerta.innerHTML = "Não permitimos subtrair de zero";
    }
}