## Prasyarat

Sebelum memulai, pastikan Anda memiliki perangkat lunak berikut terinstal di sistem Anda:

1. **Laragon:** Pastikan Laragon sudah terinstal dan berjalan. Laragon sudah otomatis menyertakan **Node.js** dan **npm** di dalamnya, yang sangat mempermudah.
    - Anda bisa mengunduhnya dari [situs resmi Laragon](https://laragon.org/download/).
    - Setelah instalasi, jalankan Laragon. Anda akan melihat jendela kontrol panelnya.
    - Anda bisa memeriksa versi Node.js dan npm yang disediakan Laragon melalui terminalnya.
2. **Editor Teks:** Anda memerlukan editor teks yang baik untuk menulis kode. Visual Studio Code (VS Code) adalah pilihan yang sangat populer dan direkomendasikan.
    - Anda bisa mengunduhnya dari [situs resmi VS Code](https://www.google.com/search?q=https://code.visualstudio.com/download/).

---

## Langkah 1: Membuka Terminal Laragon dan Verifikasi Node.js

Daripada membuka Command Prompt atau PowerShell terpisah, kita akan menggunakan Terminal bawaan Laragon yang sudah dikonfigurasi dengan *path* ke Node.js dan npm.

1. **Mulai Laragon:** Buka aplikasi Laragon. Pastikan layanan Apache/Nginx dan MySQL berjalan jika Anda memerlukannya untuk proyek lain, meskipun tidak wajib untuk Next.js.
2. **Buka Terminal Laragon:** Di jendela kontrol panel Laragon, klik tombol **"Terminal"** (ikon seperti `>_`). Ini akan membuka terminal yang sudah dikonfigurasi dengan variabel lingkungan Laragon.
3. **Verifikasi Node.js dan npm:** Di Terminal Laragon yang baru dibuka, jalankan perintah berikut untuk memastikan Node.js dan npm sudah terdeteksi:Bash
    
    `node -v
    npm -v`
    
    Anda seharusnya melihat nomor versi untuk keduanya. Ini mengkonfirmasi bahwa lingkungan Node.js sudah siap.
    

---

## Langkah 2: Membuat Proyek Next.js Baru

Kita akan menggunakan `create-next-app` melalui Terminal Laragon.

1. **Navigasi ke Direktori `www` Laragon:** Laragon memiliki folder `www` di instalasinya (misalnya, `C:\laragon\www`) yang menjadi *root* untuk proyek-proyek lokal Anda. Sangat direkomendasikan untuk membuat proyek Next.js Anda di dalam folder ini agar terorganisir.Bash
    
    `cd C:\laragon\www`
    
    (Sesuaikan *path* jika instalasi Laragon Anda berbeda).
    
2. **Jalankan Perintah `create-next-app`:**Bash
    
    `npx create-next-app@latest nama-proyek-anda`
    
    - Ganti `nama-proyek-anda` dengan nama yang Anda inginkan (misalnya, `my-portfolio-nextjs`).
    - `npx` akan menjalankan *package* tanpa instalasi global.
3. **Jawab Pertanyaan Konfigurasi (Interaktif):** Jawab pertanyaan konfigurasi seperti yang dijelaskan di dokumentasi sebelumnya. Untuk proyek portofolio, pilihan yang direkomendasikan adalah:
    - `Would you like to use TypeScript?` (y/N) → **N**
    - `Would you like to use ESLint?` (y/N) → **y**
    - `Would you like to use Tailwind CSS?` (y/N) → **N** (atau `y` jika Anda ingin menggunakannya)
    - `Would you like to use` src/ `directory?` (y/N) → **y**
    - `Would you like to use App Router? (recommended)` (y/N) → **y**
    - `Would you like to customize the default import alias?` (y/N) → **N**
    
    Biarkan proses instalasi dependensi berjalan sampai selesai.
    

---

## Langkah 3: Menjalankan Proyek Next.js Anda

Setelah proyek berhasil dibuat, kita akan menjalankannya menggunakan Terminal Laragon yang sama.

1. **Masuk ke Direktori Proyek Baru:**Bash
    
    `cd nama-proyek-anda`
    
    (Ganti dengan nama proyek Anda).
    
2. **Jalankan Development Server:**Bash
    
    `npm run dev`
    
    Perintah ini akan memulai *development server* Next.js. Anda akan melihat pesan di Terminal yang menunjukkan server berjalan, biasanya di `http://localhost:3000`.
    
3. **Buka di Browser:** Buka *web browser* Anda dan ketik alamat yang ditunjukkan (`http://localhost:3000`). Anda akan melihat halaman selamat datang Next.js.

---

## Langkah 4: Membuka Proyek di VS Code (Terintegrasi dengan Laragon)

Laragon memiliki fitur pintas yang sangat berguna untuk membuka proyek di VS Code.

1. **Di Jendela Kontrol Laragon:** Klik kanan pada tombol "Root" (biasanya ikon folder di samping "Start All").
2. **Pilih "Open in Code":** Ini akan membuka direktori proyek Anda (yang Anda buat di `www`) langsung di Visual Studio Code.
3. **Mulai Mengembangkan:** Sekarang Anda bisa mulai memodifikasi file `src/app/page.js` atau membuat halaman baru di `src/app/` seperti yang dijelaskan di panduan sebelumnya. Setiap perubahan yang Anda simpan akan otomatis di-refresh di *browser* Anda.

 Struktur Project Next.js

my-nextjs-project/
├── node_modules/              # (⛔ Jangan diubah) Semua dependency npm
├── public/                    # ✅ File statis (gambar, favicon, dll)
│   └── favicon.ico
├── src/                       # ✅ Folder utama source code
│   ├── app/                   # ✅ Routing & halaman utama (App Router)
│   │   ├── page.jsx           # ✅ Halaman utama (rute "/")
│   │   └── about/page.jsx     # ✅ Halaman "/about"
│   ├── components/            # ✅ Komponen UI reusable (opsional, kamu buat sendiri)
│   ├── styles/
│   │   └── globals.css        # ✅ CSS global
├── .gitignore                 # ✅ File yang diabaikan Git
├── package.json               # ✅ Daftar dependency, script, nama project, dsb
├── next.config.js             # ✅ Konfigurasi khusus Next.js
├── tailwind.config.js         # ✅ Konfigurasi Tailwind (jika dipakai)
├── postcss.config.js          # ✅ Untuk proses CSS Tailwind
└── [README.md](http://readme.md/)                  # 🆗 Dokumentasi proyek (opsional)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
