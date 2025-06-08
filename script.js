document.addEventListener('DOMContentLoaded', () => {
    // Fade-In Animation for Sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-in-out';

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 300);
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate inputs
        if (!name || !email || !message) {
            alert('Harap isi semua kolom formulir.');
            return;
        }

        // Custom WhatsApp message format
        const whatsappMessage = `Subject: Pesan Baru dari ${name}

Halo Achmad,

Kamu dapat pesan baru nih:
- Nama: ${name}
- Email: ${email}
- Pesan: ${message}

Balas secepatnya ya!`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const phoneNumber = '6281522541170'; // WhatsApp number with country code
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        try {
            window.open(whatsappUrl, '_blank');
            contactForm.reset(); // Clear form after submission
        } catch (err) {
            console.error('Failed to open WhatsApp:', err);
            alert('Gagal membuka WhatsApp. Silakan coba lagi atau hubungi secara manual di 081522541170.');
        }
    });
});