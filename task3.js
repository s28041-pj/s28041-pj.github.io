var cars = [
    { rok: 2020, przebieg: 15000, cena_wyjsciowa: 30000, cena_koncowa: 27000 },
    { rok: 2019, przebieg: 20000, cena_wyjsciowa: 28000, cena_koncowa: 25000 },
    // Dodaj więcej obiektów według potrzeb
];

var table = document.getElementById('carTable');

// Add header row
var headerRow = table.insertRow(0);
for (var key in cars[0]) {
    var headerCell = headerRow.insertCell(-1);
    headerCell.innerHTML = key;
}

// Add data rows
for (var i = 0; i < cars.length; i++) {
    var row = table.insertRow(-1);
    for (var key in cars[i]) {
        var cell = row.insertCell(-1);
        cell.innerHTML = cars[i][key];
    }
}
