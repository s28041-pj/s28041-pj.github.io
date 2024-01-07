function addDiv() {
    var newDiv = document.createElement('div');
    document.getElementById('task1').appendChild(newDiv);
}

function removeDiv() {
    var divs = document.getElementById('task1').getElementsByTagName('div');
    if (divs.length > 0) {
        divs[0].remove();
    }
}

function changeColor() {
    var divs = document.getElementById('task1').getElementsByTagName('div');
    if (divs.length >= 3) {
        divs[2].style.backgroundColor = 'yellow';
    }
}

function changeText() {
    var divs = document.getElementById('task1').getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].innerText = 'nowy tekst';
    }
}
