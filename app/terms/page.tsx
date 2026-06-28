import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="gradient-teal text-white py-12 px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl font-bold max-w-6xl mx-auto">Syarat & Ketentuan</h1>
        </div>

        <article className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">1. Penerimaan Syarat</h2>
          <p className="text-gray-700 mb-4">
            Dengan mengakses dan menggunakan website Ngejeep, Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan penggunaan ini.
          </p>

          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">2. Pemesanan dan Pembayaran</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Semua pemesanan harus dilakukan melalui website Ngejeep</li>
            <li>Pembayaran harus diselesaikan sebelum tanggal wisata</li>
            <li>Semua harga sudah termasuk pajak yang berlaku</li>
          </ul>

          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">3. Pembatalan dan Pengembalian Dana</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Pembatalan 7 hari atau lebih sebelum tanggal wisata: pengembalian dana 100%</li>
            <li>Pembatalan 3-7 hari sebelumnya: pengembalian dana 50%</li>
            <li>Pembatalan kurang dari 3 hari: tidak ada pengembalian dana</li>
          </ul>

          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">4. Tanggung Jawab Peserta</h2>
          <p className="text-gray-700 mb-4">Peserta setuju untuk:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Tiba di lokasi berangkat tepat waktu</li>
            <li>Mengikuti instruksi pemandu wisata</li>
            <li>Mematuhi semua peraturan keselamatan</li>
            <li>Memiliki asuransi perjalanan atau kesehatan yang memadai</li>
          </ul>

          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">5. Hukum yang Berlaku</h2>
          <p className="text-gray-700 mb-4">
            Syarat dan ketentuan ini diatur oleh hukum Indonesia. Semua perselisihan akan diputuskan di pengadilan yang berwenang di Kota Solo, Indonesia.
          </p>

          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">6. Kontak</h2>
          <p className="text-gray-700">
            Email: <a href="mailto:info@ngejeep.my.id" className="text-amber-600 hover:underline">info@ngejeep.my.id</a>
          </p>
          <p className="text-gray-700">
            WhatsApp: <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">+62 812 3456 7890</a>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}