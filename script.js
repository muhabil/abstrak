/* Ini adalah file JavaScript untuk interaktivitas */

// Kita pakai 'DOMContentLoaded' untuk memastikan
// HTML-nya sudah selesai di-load semua sebelum kita apa-apain.
document.addEventListener('DOMContentLoaded', function () {
  
  // 1. FUNGSI UNTUK GANTI MODE TAMPILAN (Rapi/Berantakan)
  // 
  const toggleButton = document.getElementById('toggleModeButton');
  const body = document.body;

  toggleButton.addEventListener('click', function () {
    // Cukup tukar class 'mode-rapi' dan 'mode-berantakan' di body
    body.classList.toggle('mode-rapi');
    body.classList.toggle('mode-berantakan');
  });


  // 2. FUNGSI UNTUK SEMBUNYIKAN/TAMPILKAN KONTEN
  // 
  const semuaJudul = document.querySelectorAll('.judul-subbagian');

  // Kita loop setiap judul h3 yang kita temukan
  semuaJudul.forEach(function (judul) {
    
    judul.addEventListener('click', function () {
      
      // 'this' merujuk ke 'judul' (h3) yang diklik
      // Kita cari elemen '.konten-jawaban' yang posisinya persis setelah h3
      const konten = this.nextElementSibling;

      // Cek apakah kontennya sedang tersembunyi atau tidak
      const isHidden = konten.classList.contains('konten-tersembunyi');

      // Siapkan pesan konfirmasi yang dinamis
      let pesan;
      if (isHidden) {
        pesan = 'Konten ini sedang tersembunyi. Apakah Anda ingin menampilkannya?';
      } else {
        pesan = 'Apakah Anda ingin menyembunyikan konten ini?'; // 
      }
      
      // Tampilkan popup confirm() 
      const konfirmasi = confirm(pesan);

      // Jika pengguna klik "Ya" (OK) 
      if (konfirmasi) {
        // Toggle class-nya (kalau ada, hapus. kalau tidak ada, tambahkan)
        konten.classList.toggle('konten-tersembunyi');
      }
      // Jika "Tidak", kita tidak melakukan apa-apa 
      
    });
  });

});