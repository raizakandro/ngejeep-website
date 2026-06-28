# Ngejeep Website

Website resmi untuk layanan wisata jeep Ngejeep di Kota Solo.

## Fitur

- 🎨 Desain modern dengan teal (#0D9488) dan amber (#F59E0B)
- 📱 Responsive untuk semua perangkat
- 🚀 Built dengan Next.js 15 dan Tailwind CSS
- 🔍 SEO-friendly
- 📄 Halaman Kebijakan Privasi dan Syarat & Ketentuan
- 💬 Form kontak
- 📍 Informasi paket wisata lengkap

## Setup Lokal

### Prerequisites
- Node.js 18+
- npm atau yarn

### Instalasi

1. Clone repository:
```bash
git clone https://github.com/raizakandro/ngejeep-website.git
cd ngejeep-website
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Buka http://localhost:3000 di browser

## Build untuk Production

```bash
npm run build
npm start
```

## Deploy ke Vercel

1. Push project ke GitHub
2. Buka https://vercel.com
3. Import repository
4. Click Deploy
5. Configure custom domain ngejeep.my.id

## Struktur Project

```
ngejeep-website/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.ts
└── vercel.json
```

## License

© 2024 Ngejeep. All rights reserved.