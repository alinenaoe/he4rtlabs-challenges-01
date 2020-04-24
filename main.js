var btnCalculate = document.getElementById('btn-calculate');
var btnRestart = document.getElementById('btn-restart');
var hours = document.getElementById('input-hours');
var days = document.getElementById('input-days');
var rest = document.getElementById('input-rest');
var payment = document.getElementById('input-payment');

btnCalculate.onclick = function () {
    if(hours.checkValidity()) {
        let hoursValue = hours.value;
        let daysValue = days.value;
        let restValue = rest.value;
        let paymentValue = payment.value;
        let resultValue = ( paymentValue / (daysValue * 4 * hoursValue) ) + (restValue * daysValue * hoursValue);
        let resultValueFixed = resultValue.toFixed(2);
        showResultMessage(resultValueFixed);
    } else {
        showErrorMessage();
    };
}

function showResultMessage (resultValueFixed) {
    let resultMessage = document.getElementById('resultMessage');
    resultMessage.innerHTML = "O valor da sua hora é de R$ " + resultValueFixed; 
}

function showErrorMessage(){
    let resultMessage = document.getElementById('resultMessage');

    resultMessage.innerHTML = "Preencha todos os valores corretamente para podermos calcular o valor da sua hora :)"; 
}

btnRestart.onclick = function () {
    hours.value = "";
    days.value = "";
    rest.value = "";
    payment.value = "";
    document.getElementById('resultMessage').innerHTML = "";
}

