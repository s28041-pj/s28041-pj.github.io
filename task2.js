function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = 'Wprowadź poprawne liczby';
        return;
    }

    switch (operation) {
        case 'add':
            resultElement.innerText = 'Wynik: ' + (num1 + num2);
            break;
        case 'subtract':
            resultElement.innerText = 'Wynik: ' + (num1 - num2);
            break;
        case 'multiply':
            resultElement.innerText = 'Wynik: ' + (num1 * num2);
            break;
        case 'divide':
            if (num2 === 0) {
                resultElement.innerText = 'Nie można dzielić przez zero';
            } else {
                resultElement.innerText = 'Wynik: ' + (num1 / num2);
            }
            break;
        default:
            resultElement.innerText = 'Wybierz poprawne działanie';
    }
}
