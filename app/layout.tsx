import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ngejeep - Wisata Jeep Kota Solo',
  description: 'Pengalaman wisata jeep yang tak terlupakan di kota Solo. Jelajahi destinasi wisata menarik dengan pemandu profesional dan armada jeep modern.',
  keywords: 'wisata jeep, tour solo, jeep tour, destinasi wisata solo',
  openGraph: {
    title: 'Ngejeep - Wisata Jeep Kota Solo',
    description: 'Pengalaman wisata jeep yang tak terlupakan di kota Solo',
    url: 'https://ngejeep.my.id',
    siteName: 'Ngejeep',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-teal-50">{children}</body>
    </html>
  );
}