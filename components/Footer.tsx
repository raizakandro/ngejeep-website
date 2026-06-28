import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-teal text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">✦ Ngejeep</h3>
            <p className="text-teal-100 text-sm">
              Penyedia layanan wisata jeep terpercaya di Kota Solo dengan armada modern dan pemandu profesional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-teal-100 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-amber-400 transition-colors">
                  Paket Wisata
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-400 transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-teal-100 text-sm">
              <li>
                <a href="tel:+6281234567890" className="hover:text-amber-400 transition-colors">
                  📞 +62 812 3456 7890
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:info@ngejeep.my.id" className="hover:text-amber-400 transition-colors">
                  ✉️ info@ngejeep.my.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-500 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-teal-100 text-sm text-center md:text-left">
              © {currentYear} Ngejeep. Semua hak dilindungi.
            </p>
            <div className="flex gap-6 text-teal-100 text-sm">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                Privasi
              </Link>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}