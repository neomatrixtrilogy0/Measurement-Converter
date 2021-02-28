document.getElementById('submit').onclick = function() {
    let kg = document.getElementById('kg').value;
    document.getElementById('Lbs').innerHTML = kg * 2.205;
}