function hitungluas() {
    // Ambil nilai dari input
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    // Validasi input
    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Masukkan angka yang valid untuk alas dan tinggi.');
        return;
    }

    // Hitung luas segitiga
    var luas = 0.5 * alas * tinggi;

    // Tampilkan hasil
    document.getElementById('rumus').innerHTML = 'Luas = 1/2 * alas * tinggi';
    document.getElementById('rumus2').innerHTML = 'Luas: 1/2 * ' + alas + ' * ' + tinggi;
    document.getElementById('result').innerHTML = 'Luas Segitiga: ' + luas;

    var rumusText = 'Rumus: 1/2 * ' + alas + ' * ' + tinggi;
    document.getElementById('rumuss').innerHTML = rumusText;
}
function hitungkel() {
    // Ambil nilai dari input
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);

    // Validasi input
    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert('Masukkan angka yang valid untuk sisi-sisi segitiga.');
        return;
    }

    // Hitung keliling segitiga
    var keliling = sisiA + sisiB + sisiC;

    // Tampilkan hasil
    document.getElementById('rumus1').innerHTML = 'Keliling = Sisi A * Sisi B * Sisi C';
    document.getElementById('rumus3').innerHTML = 'Keliling = '+sisiA +' * '+ sisiB + ' * ' + sisiC;
    document.getElementById('resultkel').innerHTML = 'Keliling Segitiga: ' + keliling;
}

function resetHasil() {
    // Menghapus hasil pada elemen dengan id 'result'
    document.getElementById('result').innerHTML = '';
    document.getElementById('rumus').innerHTML = '';
}
function resetkel() {
    // Menghapus hasil pada elemen dengan id 'result'
    document.getElementById('resultkel').innerHTML = '';
    document.getElementById('rumus1').innerHTML = '';
}

