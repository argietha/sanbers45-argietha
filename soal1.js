// soal no 1
// created by Argietha Septyani
// created date 17/06/2023

const prompt = require('prompt-sync')({sigint: true})

// Membuat Variable baru untuk input angka.
var angka;
// Syntax untuk input data angka.
let inputangka = prompt('Masukkan Angka: ', angka);

// Function if jika angka yang dimasukkan kurang dari 0
  if (inputangka<0) {
    inputangka = "Error! Tidak bisa input bilangan negatif!";
    console.log("Angka yang dimasukkan = " + inputangka);
    return // eksekusi fungsi akan berhenti dan nilai yang diinginkan akan dikembalikan ke pemanggil fungsi.
} else if (inputangka % 2 !==0){ // Function untuk membuat angka ganjil
    inputangka = "Error! Tidak bisa input bilangan ganjil!";
    console.log("Angka yang dimasukkan = " + inputangka);
    return // eksekusi fungsi akan berhenti dan nilai yang diinginkan akan dikembalikan ke pemanggil fungsi.
}

console.log("Angka yang dimasukkan = " + inputangka);

let akar = Math.sqrt(inputangka); // Function untuk melakukan kegiatan perhitungan akar.

console.log("Akar = " + akar);