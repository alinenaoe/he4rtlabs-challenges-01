var btnCalculate = document.getElementById('btn-calculate');
var hours = document.getElementById('input-hours');
var days = document.getElementById('input-days');
var rest = document.getElementById('input-rest');
var payment = document.getElementById('input-payment');

btnCalculate.onclick = function () {
    let hoursValue = hours.value;
    let daysValue = days.value;
    let restValue = rest.value;
    let paymentValue = payment.value;
    let resultValue = ( paymentValue / (daysValue * 4 * hoursValue) ) + (restValue * daysValue * hoursValue);
    let resultValueFixed = resultValue.toFixed(2);
    showResultMessage(resultValueFixed);
}

function showResultMessage (resultValueFixed) {
    let messageBox = document.getElementById('result');
    let resultMessage = document.createElement('p');
    resultMessage.setAttribute('id', 'resultMessage'); 
    messageBox.appendChild(resultMessage);

    resultMessage.innerHTML = "O valor da sua hora é de R$ " + resultValueFixed; 
}



