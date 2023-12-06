function hitungluas() {
    
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    
    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Masukkan angka yang valid untuk alas dan tinggi.');
        return;
    }

    
    var luas = 0.5 * alas * tinggi;

    
    document.getElementById('rumus').innerHTML = 'Luas = 1/2 * alas * tinggi';
    document.getElementById('rumus2').innerHTML = 'Luas: 1/2 * ' + alas + ' * ' + tinggi;
    document.getElementById('result').innerHTML = 'Luas Segitiga: ' + luas;
}
function hitungkel() {
    
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);

    
    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert('Masukkan angka yang valid untuk sisi-sisi segitiga.');
        return;
    }

    var keliling = sisiA + sisiB + sisiC;

    document.getElementById('rumus1').innerHTML = 'Keliling = Sisi A * Sisi B * Sisi C';
    document.getElementById('rumus3').innerHTML = 'Keliling = '+sisiA +' * '+ sisiB + ' * ' + sisiC;
    document.getElementById('resultkel').innerHTML = 'Keliling Segitiga: ' + keliling;
}

function resetHasil() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('rumus').innerHTML = '';
}
function resetkel() {
    document.getElementById('resultkel').innerHTML = '';
    document.getElementById('rumus1').innerHTML = '';
}

