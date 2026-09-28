// Syarat siswa lulus :
// 1. nilai teori 75
// 2. Nilai praktek minimal 80
// 3. kehadiran minimal 90%
// 4. tidak memiliki pelanggaran berat = true dan false
// ketentuan :
// rata-rata > 90 maka lulus dengan predikat "sangat baik"
// rata-rata > 85 Lulus dengan predikat "baik"
// selain itu "lulus"

// kehadiran < 90% tidak lulus (kehadiran kurang)
// nilai teori kurang dari 75 tidak lulus (teori kurang)
// nilai praktek kurang dari 80 tidak lulus(praktek kurang)
// jika ada pelanggaran berat, tidak lulus (pelanggaran disiplin)

// (nilaiteori + nilai praktek) /2

let nilaiTeori = 67;
let nilaiPraktek = 70;

let rata_rata = (nilaiPraktek + nilaiTeori) / 2; // hasil rata-rata praktek dan hasil
let pelanggaran_berat = false; // input pelanggaran berat
let kehadiran = 65; // input kehadiran

// Flow Rerata nilai
console.log(`Nilai rata-rata = ${rata_rata}`);
if (rata_rata > 90){
    status_kelulusan = "Sangat Baik";
    console.log("Sangat Baik");
}else if((rata_rata > 85) && (rata_rata < 90)){
    status_kelulusan = "Baik"
    console.log("Baik");
}else if(rata_rata < 85){
    status_kelulusan = "Tidak Lulus";
    console.log("Tidak Lulus")
}

// Flow nilai teori dan praktek
if (nilaiTeori < 75){
    console.log("Teori Kurang");
}
if(nilaiPraktek < 80){
    console.log("Praktek Kurang");
}

// Flow Kehadiran dan pelanggaran berat
if(kehadiran < 90){
    console.log("Kehadiran kurang");
}

if(pelanggaran_berat == true){
    console.log("Pelanggaran disiplin");
}

// Output
let nama = "Tri Adhy Yulianto";

console.log("========================================")
console.log(`Nama: ${nama}`);
console.log(`Rata-rata: ${rata_rata}`);
console.log(`Status: ${status_kelulusan}`)