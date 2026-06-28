import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Home() {
  const packages = [
    {
      id: 1,
      name: 'Paket Wisata 2 Jam',
      duration: '2 Jam',
      price: 'Rp 250.000',
      pax: '4 Orang',
      destinations: ['Pasar Gede', 'Pasar Klewer'],
      description: 'Paket singkat untuk menjelajahi pusat perdagangan kota Solo dengan pemandu profesional.',
    },
    {
      id: 2,
      name: 'Paket Wisata 4 Jam',
      duration: '4 Jam',
      price: 'Rp 450.000',
      pax: '4 Orang',
      destinations: ['Pasar Gede', 'Pasar Klewer', 'Kraton Solo'],
      description: 'Jelajahi destinasi ikonik Solo dengan waktu yang lebih lama dan lebih santai.',
    },
    {
      id: 3,
      name: 'Paket Wisata Seharian',
      duration: 'Seharian',
      price: 'Rp 750.000',
      pax: '4 Orang',
      destinations: ['Pasar Gede', 'Pasar Klewer', 'Kraton Solo', 'Kampung Batik Laweyan'],
      description: 'Paket lengkap untuk pengalaman wisata Solo yang mendalam dengan semua destinasi utama.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="gradient-teal text-white pt-20 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow">
            ✦ Ngejeep
          </h1>
          <p className="text-lg md:text-xl text-teal-50 mb-6 max-w-2xl mx-auto">
            Jelajahi keindahan Kota Solo dengan pengalaman wisata jeep yang tak terlupakan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#packages"
              className="gradient-amber text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow"
            >
              Lihat Paket Wisata
            </Link>
            <Link
              href="#contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6">Tentang Ngejeep</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 text-lg">
                Ngejeep adalah penyedia layanan wisata jeep terpercaya di Kota Solo. Kami menawarkan pengalaman wisata yang autentik, aman, dan menyenangkan dengan pemandu wisata berpengalaman dan armada jeep yang terawat dengan baik.
              </p>
              <p className="text-gray-700 text-lg">
                Setiap perjalanan dirancang untuk memberikan pengalaman tak terlupakan dengan mengunjungi destinasi-destinasi menarik dan ikonik di Solo.
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border-2 border-teal-600">
              <h3 className="text-xl font-bold text-teal-600 mb-4">Keunggulan Kami</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2">✓</span>
                  <span>Pemandu wisata profesional dan berpengalaman</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2">✓</span>
                  <span>Armada jeep modern dan terawat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2">✓</span>
                  <span>Harga terjangkau dan transparan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2">✓</span>
                  <span>Keselamatan sebagai prioritas utama</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-bold mr-2">✓</span>
                  <span>Fleksibel dalam rute dan jadwal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section-padding bg-teal-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-12 text-center">Paket Wisata Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border-t-4 border-amber-600">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-600 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                  <div className="bg-teal-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 text-sm">Durasi</span>
                      <span className="font-bold text-teal-600">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 text-sm">Kapasitas</span>
                      <span className="font-bold text-teal-600">{pkg.pax}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">Harga</span>
                      <span className="font-bold text-amber-600 text-lg">{pkg.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Destinasi:</p>
                    <ul className="space-y-1">
                      {pkg.destinations.map((dest, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center">
                          <span className="text-amber-600 mr-2">📍</span>
                          {dest}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full gradient-amber text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-12 text-center">Hubungi Kami</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-teal-600 mb-2">Alamat</h3>
                <p className="text-gray-700">Kota Solo, Jawa Tengah, Indonesia</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-teal-600 mb-2">Telepon</h3>
                <p className="text-gray-700">
                  <a href="tel:+6281234567890" className="hover:text-amber-600 transition-colors">
                    +62 812 3456 7890
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-teal-600 mb-2">WhatsApp</h3>
                <p className="text-gray-700">
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">
                    +62 812 3456 7890
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-teal-600 mb-2">Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@ngejeep.my.id" className="hover:text-amber-600 transition-colors">
                    info@ngejeep.my.id
                  </a>
                </p>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:outline-none focus:border-teal-600"
              />
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:outline-none focus:border-teal-600"
              />
              <textarea
                placeholder="Pesan Anda"
                rows={4}
                className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:outline-none focus:border-teal-600"
              ></textarea>
              <button
                type="submit"
                className="w-full gradient-amber text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}