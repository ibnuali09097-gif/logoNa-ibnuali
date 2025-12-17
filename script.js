// Inisialisasi AOS Animation
AOS.init({
    duration: 1000,
    once: true,
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Handle Form Submission (Langsung kirim ke WhatsApp)
const form = document.getElementById('logoForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Ambil data dari form
    const brandName = form.querySelector('input[placeholder="Contoh: Kopi Senja"]').value;
    const type = form.querySelector('select').value;
    const desc = form.querySelector('textarea').value;

    // Nomor WA Admin (Ganti dengan nomor Anda, mulai dengan 62)
    const phoneNumber = "+6285812801300"; 

    // Format Pesan
    const text = `Halo, saya ingin memesan logo.%0A%0A*Nama Brand:* ${brandName}%0A*Jenis Logo:* ${type}%0A*Keterangan:* ${desc}`;

    // Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
});

// Smooth Scroll untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.remove('active'); // Tutup menu mobile jika diklik

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});