const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });


  function checkStoreStatus() {
    const now = new Date();
    const hour = now.getHours();
    const statusEl = document.getElementById('store-status');
    
    // Jam Operasional: 08:00 sampai 22:00
    if (hour >= 8 && hour < 22) {
      statusEl.innerText = "🟢 Buka Sekarang (08.00 - 22.00)";
      statusEl.className = "status-badge status-open";
    } else {
      statusEl.innerText = "🔴 Tutup (Buka Jam 08.00)";
      statusEl.className = "status-badge status-closed";
    }
  }
  
  // Jalankan fungsi saat halaman dimuat
  checkStoreStatus();


  // Fungsi Logika Geser Testimoni
  function slideTesti(direction) {
    const container = document.getElementById('testiContainer');
    const scrollAmount = 300; // Jarak geser dalam piksel
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }


  // Logika Filter Menu + Pelacakan Google Analytics
function filterMenu(category, categoryName) {
  // 1. Kirim event filter ke Google Analytics
  if (typeof gtag === 'function') {
    gtag('event', 'filter_menu', { 'category_name': categoryName });
  }

  // 2. Ubah tampilan tombol aktif
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // 3. Sembunyikan atau tampilkan kartu menu sesuai kategori
  const cards = document.querySelectorAll('.menu-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}