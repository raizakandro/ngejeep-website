import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="gradient-teal text-white py-12 px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl font-bold max-w-6xl mx-auto">Kebijakan Privasi</h1>
        </div>

        <article className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">1. Pendahuluan</h2>
          <p className="text-gray-700 mb-4">
            Ngejeep berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda.
          </p>

          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">2. Informasi yang Kami Kumpulkan</h2>
          <p className="text-gray-700 mb-4">Kami mungkin mengumpulkan informasi tentang Anda dengan cara berikut:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Informasi yang Anda berikan secara langsung (nama, email, nomor telepon, alamat)</li>
            <li>Informasi tentang kunjungan dan aktivitas Anda di website kami</li>
            <li>Informasi pembayaran untuk pemesanan wisata</li>
          </ul>

          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">3. Penggunaan Informasi</h2>
          <p className="text-gray-700 mb-4">Kami menggunakan informasi yang dikumpulkan untuk:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Memberikan layanan wisata yang Anda pesan</li>
            <li>Mengirimkan konfirmasi dan pemberitahuan</li>
            <li>Meningkatkan kualitas layanan kami</li>
            <li>Mengirimkan promosi dan penawaran khusus (dengan persetujuan Anda)</li>
            <li>Memenuhi kewajiban hukum</li>
          </ul>

          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">4. Keamanan Data</h2>
          <p className="text-gray-700 mb-4">
            Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang tepat untuk melindungi informasi pribadi Anda dari akses, perubahan, pengungkapan, atau penghapusan yang tidak sah.
          </p>

          <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4">5. Kontak Kami</h2>
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