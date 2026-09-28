// Berat memiliki berat yang sama/standar => 10kg
// tarif per kilogram berdasarkan kota tujuan
// kota tujuan => Bogor, maka 2000 per kg
// kota tujuan => Depok, maka 4000 per kg
// kota tujuan != Bogor dan Depok, maka 6000 per kg

// perhitungan hasil => biaya pengiriman = berat paket x tarif per kg
// setelah tombol cek tarif ditekan, sistem harus menampilkan "Tarifnya adalah sebesar 20000"

// =======================================================

// input : Nama Kota Tujuan
let kota_tujuan_pertama = "Bogor";
// let kota_tujuan_kedua = "Depok";
// let kota_tujuan_ketiga = "Bandung";

// Proses : berat paket (10 kg) x tarif per kg
if (kota_tujuan_pertama === "Depok"){
  // Output : Kalimat beserta hasil
  console.log(`Tarifnya adalah sebesar ${10 * 4000}`);
}else if(kota_tujuan_pertama === "Bogor"){
  // Output : Kalimat beserta hasil
  console.log(`Tarifnya adalah sebesar ${10 * 2000}`);
}else{
  // Output : Kalimat beserta hasil
  console.log(`Tarifnya adalah sebesar ${10 * 6000}`);
}

// function biaya_pengiriman(nama_kota_tujuan){
//     tujuan_kota = {"Bogor" : 2000,
//         "Depok" : 4000
//     }
//     let hasil = ((nama_kota_tujuan !== "Depok") || (nama_kota_tujuan !== "Bogor")) ? 10 * 6000 : 10 * tujuan_kota
// }