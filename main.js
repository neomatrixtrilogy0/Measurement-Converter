document.getElementById('submit').onclick = function() {
    let kg = document.getElementById('kg').value;
    document.getElementById('Lbs').innerHTML = kg * 2.205;
}

document.getElementById('submit2').onclick = function() {
    let inches = document.getElementById('inch').value;
    document.getElementById('ft').innerHTML = inches / 12;
}