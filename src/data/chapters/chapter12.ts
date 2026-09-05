import type { Chapter } from "../types"

// ============================================================================
// BAB 12: CORETAX & UPDATE PAJAK 2026 (FINALE)
// ============================================================================

export const chapter12: Chapter = {
  id: "ch12",
  slug: "coretax-update-pajak-2026",
  number: 12,
  title: "Coretax & Update Pajak 2026",
  shortTitle: "Coretax 2026",
  description:
    "Bab pamungkas! Coretax (1 Jan 2025) yang gabungin DJP Online + e-Faktur + e-Bupot + e-Filing jadi satu sistem, plus recap lengkap update pajak 2026: PPN 12% efektif 11%, PPh OP 5 lapis, PPh badan 22%, MIR 0,6%/bln (KMK 35/MK/EF.2/2026), Carbon Tax Rp 30/kg CO2e, Pillar Two UTPR 2026, PPh 22 marketplace ditunda PENG-46/PJ.09/2026, EV incentive H2 2026.",
  icon: "Cpu",
  color: "sky",
  difficulty: "menengah",
  estimatedMinutes: 200,
  objectives: [
    "Paham latar belakang Coretax & sejarah migrasi sistem perpajakan Indonesia (DJP Online → Coretax 1 Jan 2025)",
    "Kenal vendor & fase implementasi Coretax (BMF TCS), plus pengalaman transisi awal yang berat",
    "Hafal fitur utama Coretax 2026: registrasi real-time, SPT pre-populated, matching bukti potong, e-billing built-in, role-based access (Signer, Approver, Pengirim)",
    "Bisa jelasin dampak Coretax buat WP: lebih gampang lapor tapi lebih ketat, transparansi data, perubahan peran konsultan pajak",
    "Hafal ringkasan update pajak 2026: tarif PPh OP/Badan, PPN 12% via DPP 11/12, MIR 0,6%/bln + multiplier per Pasal, Carbon Tax, Pillar Two UTPR, PPh 22 marketplace ditunda, EV incentive, PPS belum ada program baru",
    "Siap menghadapi ujian Brevet AB dengan materi paling update 2026",
  ],
  lessons: [
    // =========================================================================
    // LESSON 1: APA ITU CORETAX & SEJARAHNYA
    // =========================================================================
    {
      id: "ch12-l01",
      slug: "apa-itu-coretax",
      title: "Apa Itu Coretax & Sejarahnya: Dari Ribuan Sistem Jadi Satu",
      subtitle:
        "Latar belakang: DJP Online + e-SPT + e-Filing + e-Bupot + e-Faktur digabung jadi Coretax; vendor BMF TCS; fase implementasi; launching 1 Januari 2025; pengalaman transisi awal yang berat",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 22,
      content: `# 🖥️ Apa Itu Coretax & Kenapa Indonesia Butuh Sistem Baru?

Selamat datang di bab pamungkas, sobat Brevet AB! 🎉 Di bab ini kita bakal bahas dua hal sekaligus: (1) **Coretax** — sistem perpajakan baru Indonesia yang udah live sejak 1 Januari 2025, dan (2) **recap update pajak 2026** yang bakal jadi amunisi kamu buat ujian dan dunia kerja nyata.

Yuk, kita mulai dari pertanyaan paling dasar: **kenapa sih Indonesia harus ganti sistem?** Bukannya DJP Online udah jalan bertahun-tahun? Nah, di lesson ini kita bakal bahas sejarahnya, kenapa Coretax dibikin, siapa vendornya, dan pengalaman pahit transisi awal yang bikin hampir semua konsultan pajak di Indonesia pusing setengah mati.

## 🔍 Sebelum Coretax: Tumpukan Sistem yang Berantakan

Bakal gampang paham Coretax kalau kamu tahu dulu "kanan-kirinya" apa aja. Sebelum 2025, sistem perpajakan Indonesia itu **tersebar di banyak aplikasi terpisah**. Bayangin kamu WP yang mau lapor pajak, harus log in ke 5-6 aplikasi berbeda:

| No | Sistem Lama | Fungsinya | Tahun Launching |
|----|-------------|-----------|-----------------|
| 1 | DJP Online | Portal utama WP (dashboard, profil, SPT Tahunan) | ~2011 |
| 2 | e-SPT | Aplikasi desktop buat bikin SPT (offline, lalu upload) | 2008 (modernisasi bertahap) |
| 3 | e-Filing | Pelaporan SPT Tahunan orang pribadi online | 2003 (perdana) |
| 4 | e-Bupot | Aplikasi buku potong PPh 21/23/26 + e-SPT Masa | 2014 |
| 5 | e-Faktur | Aplikasi buat bikin & lapor Faktur Pajak PPN | 2010 (versi pra-online), 2014 (online) |
| 6 | e-Bupot Unifikasi | Gabungan e-Bupot versi 2023 (mulai nyatu) | 2023 |
| 7 | SIDJP | Sistem Informasi Direktorat Jenderal Pajak (internal) | lama |

> **Paham kan** kenapa repot? Tiap aplikasi punya log in sendiri (kadang beda password!), tampilan beda, bahasa user interface beda, dan — paling nyebelin — **datanya nggak sinkron**. Kamu bisa update profil di DJP Online, tapi e-Faktur masih nunjukkin profil lama. Bayangin deh WP korporasi yang punya 50 cabang, harus kelola semua sistem ini manual.

## 💡 Ide Coretax: Satu Sistem Buat Semua

Di sekitar tahun 2014-2016, DJP sadar kalau sistem yang berantakan ini bikin:

1. **Pengalaman WP buruk** — banyak yang kapok lapor sendiri, akhirnya bayar konsultan
2. **Data nggak terintegrasi** — DJP susah cross-check antara SPT badan vs bukti potong karyawan vs faktur pajak
3. **Audit manual & lambat** — fiskus harus periksa berkas fisik, ekspor-import data antar sistem
4. **Potensi kebocoran tinggi** — WP "nakal" bisa exploit celah sinkronisasi data

Maka lahirlah ide **Coretax** (Core Tax Administration System / CTAS): satu sistem terpadu yang nyatet **semua proses perpajakan**, dari:

- 📋 Registrasi WP (NPWP, NPPKP)
- 🧾 Pelaporan SPT (Masa & Tahunan, semua jenis pajak)
- 💳 Pembayaran pajak (e-Billing / SSP)
- 📑 Penerbitan & pelaporan Faktur Pajak PPN (e-Faktur built-in)
- 📂 Buku potong PPh 21/22/23/26 (e-Bupot built-in)
- 🔍 Pemeriksaan pajak (audit)
- 💰 Restitusi & tagihan pajak
- 📊 Pelaporan & analitik

> **Analogi gampang:** Bayangin kamu dulu harus buka 7 aplikasi bank berbeda buat lihat semua saldo rekening kamu. Sekarang, semua jadi satu aplikasi — itu Coretax. Pusingnya sekali, tapi sekalinya jalan, semuanya gampang di-monitor.

## 🏗️ Vendor & Fase Implementasi

Siapa yang bangun Coretax? Ini bagian yang sering keluar di ujian karena unik.

### Vendor: Bankeer Malhotra TCS (BMF TCS)

Vendor pemenang tender Coretax adalah **BMF TCS** (singkatan dari *Bankeer Malhotra & Associates* dengan partner teknologi **Tata Consultancy Services** — TCS, perusahaan IT raksasa asal India). TCS dikenal sebagai salah satu vendor sistem perpajakan terbesar dunia, dan sudah bangun sistem serupa di banyak negara.

> **Catatan ujian:** "Vendor Coretax" → jawabannya **BMF TCS** (kadang disebut TCS saja). Jangan tertukar dengan vendor DJP Online lama yang lokal.

### Fase Implementasi (4 Tahap)

Coretax dibangun & dirilis bertahap. Berikut fase-fasenya:

| Fase | Periode | Aktivitas |
|------|---------|-----------|
| **Fase 1: Perencanaan & Tender** | 2014–2019 | Studi feasibilitas, tender, kontrak vendor |
| **Fase 2: Pengembangan** | 2019–2024 | Coding, testing, integrasi modul |
| **Fase 3: Migrasi & Launching** | **1 Januari 2025** | **Go-live Coretax**, DJP Online dipensiunkan |
| **Fase 4: Stabilisasi & Pengembangan Lanjut** | 2025–2026+ | Bug fixing, fitur tambahan, optimasi |

> **Tip ujian:** Tanggal **1 Januari 2025** itu udah kayak tanggal kemerdekaan sistem perpajakan Indonesia. Wajib hafal. Sehari sebelumnya (31 Desember 2024) masih DJP Online, sehari sesudahnya (1 Januari 2025) udah Coretax. Simple.

## 🚀 Launching 1 Januari 2025: Hari Bersejarah (yang Penuh Drama)

Di tanggal 1 Januari 2025, Coretax resmi go-live. Konsepnya indah: **satu sistem, satu log in, semua pajak**. Tapi realitanya?

### Apa yang Berjalan Mulus?

- ✅ Migrasi data 40+ juta WP dari DJP Online ke Coretax (data master: NPWP, nama, alamat)
- ✅ Registrasi WP baru via Coretax (akses real-time NPWP)
- ✅ e-Billing built-in (bayar pajak langsung dari sistem, nggak perlu bouncing bank)
- ✅ e-Faktur built-in (bikin faktur pajak langsung di Coretax)
- ✅ e-Bupot built-in (bikin bukti potong langsung di Coretax)
- ✅ SPT Masa PPN & PPh mulai bisa dilapor via Coretax

### Apa yang Berjalan "Berat"?

Dan inilah bagian yang **sering ditanya di seminar Brevet** karena pengalaman teman-teman konsultan pajak yang langsung kena dampaknya:

| Masalah | Dampak |
|---------|--------|
| Server lambat / down di jam sibuk | WP nggak bisa lapor SPT tepat waktu, seminggu pertama hampir every day ada down |
| Bukti potong nggak sinkron | Bukti potong PPh 21 yang dipotong employer, di SPT karyawan nggak muncul → warning |
| Faktur pajak "hilang" saat migrasi | Sebagian faktur pajak lama nggak ikut pindah, harus re-input manual |
| Error validasi tanggal | Format tanggal beda (DD/MM/YYYY vs YYYY-MM-DD), bikin SPT ke-reject |
| Login error / akun terkunci | Banyak WP lupa password baru, sistem ke-lockout, harus reset via email |
| Helpdesk overwhelmed | Tiket support yang biasanya 1-2 hari, jadi 1-2 minggu |
| SPT ditolak tanpa alasan jelas | Tampilan error code yang nggak user-friendly |

> **Kasus nyata:** Salah satu konsultan pajak besar di Jakarta cerita, di bulan pertama Coretax (Januari 2025), dari 100 SPT Masa yang dia lapor, **hanya 30 yang berhasil first-time-right**. Sisanya 70 harus diulang, diperbaiki, atau nunggu sistem stabil. Bayangin berapa jam lembur yang harus dia keluarin.

### Bagaimana DJP Menghadapi Komplain?

DJP (terutama Direktur Jenderal Pajak saat itu) mengakui transisi memang berat. Beberapa langkah yang diambil:

1. **Perpanjangan deadline SPT** — Untuk beberapa jenis SPT Masa di Januari 2025, deadline diperpanjang 7-14 hari tanpa sanksi.
2. **Helpdesk 24/7** — Tambah jam operasional call center, plus live chat di Coretax.
3. **Bug bounty & feedback loop** — Tim TCS on-site 24/7 di kantor DJP Jakarta, fix bug prioritas tinggi.
4. **Sosialisasi masif** — Workshop, webinar, tutorial video, infografis di media sosial DJP.
5. **Penyesuaian regulasi** — Beberapa PMK diterbitkan untuk akomodasi transisi (misal toleransi sanksi pasal 7 KUP untuk telat lapor akibat error sistem).

## 📈 Status Coretax per Agustus 2026: Stabil & Tumbuh

Setelah setahun lebih go-live, status Coretax per Agustus 2026 udah jauh lebih stabil:

- ✅ **Sistem stabil** — down time < 1% (sebelumnya bisa 5-10% di awal 2025)
- ✅ **Maintenance terjadwal** — biasanya weekend (misal 8-9 Agustus 2026 ada maintenance window)
- ✅ **Fitur tambahan terus dirilis** — antara lain:
  - Role "Signer SPT PPh Pasal 21/26 Induk" — bisa sign SPT tapi nggak bisa lihat detail
  - Penghapusan bukti potong oleh DJP (WP diminta koreksi SPT jika ada yang salah)
  - Kode jenis setoran pajak baru (untuk akomodasi UU HPP & update lainnya)
- 🔄 **Dalam pengembangan:** fitur status Pillar Two (GloBE) proposal — DJP bilang masih dalam development per Agustus 2026

> **Peringatan:** Walaupun udah stabil, **bug masih ada**. Jangan pernah lapor SPT di menit-menit terakhir deadline. Selalu siapkan 3-7 hari buffer buat antisipasi error. Ini nasihat dari praktisi.

## 🎯 Mengapa Coretax Itu "Game Changer"?

Untuk Brevet AB, kamu harus paham **WHY** di balik Coretax, bukan cuma **WHAT**. Ini 4 alasan strategis:

### 1. Integrasi Data Antar Pihak (Transparansi)

Dulu, employer potong PPh 21 dari gaji karyawan, lapor ke DJP. Karyawan juga lapor SPT Tahunan sendiri. **Dua-duanya manual, nggak otomatis sinkron**. WP bisa laporkan gaji lebih kecil dari yang dilaporkan employer → "lolos".

Coretax bikin **otomatis sinkron**: begitu employer lapor bukti potong, data langsung muncul di SPT karyawan (pre-populated). WP nggak bisa lagi "lupa" gajinya berapa. Transparansi penuh.

### 2. Cross-Check Otomatis (Audit Lebih Cepat)

DJP bisa langsung lihat di dashboard: "Bukti potong karyawan X = Rp 100jt, tapi SPT badan Y catat biaya gaji Rp 150jt. Selisih Rp 50jt dari mana?" Audit jadi cepat, nggak perlu surat-menyurat.

### 3. Pengalaman WP Lebih Baik (Long-Term)

Walau awalnya berat, target akhirnya pengalaman WP jadi **lebih gampang**. Bayangin lapor SPT tinggal klik "Submit" karena 80% data udah pre-populated. Tinggal review & sign. Bisa dari hape, nggak perlu install aplikasi desktop (e-SPT dulu harus install, crash di OS tertentu).

### 4. Daya Saing Internasional

Negara tetangga (Singapura, Malaysia) udah punya sistem terintegrasi sejak lama. Indonesia ketinggalan. Coretax bikin Indonesia "catch-up" dan lebih siap menghadapi **BEPS 2.0 / Pillar Two** yang butuh data lintas negara.

## 🧮 Kasus Nyata: Konsultan Pajak di Bulan Pertama Coretax

Bu Rina, konsultan pajak di Jakarta, punya 50 klien korporasi yang harus lapor SPT Masa PPN per 20 Februari 2025. Inilah pengalamannya:

**Minggu 1 (1-7 Februari):**
- 30 klien dicoba lapor → 25 gagal karena error validasi (NPWP format baru vs lama)
- 5 berhasil setelah retry 3-4 kali
- Helpdesk respons 5-7 hari

**Minggu 2 (8-14 Februari):**
- 20 klien tersisa dicoba → 12 berhasil, 8 masih error
- Beberapa faktur pajak "missing" → harus re-input manual
- Bu Rina lembur tiap malam sampai 11 malam

**Minggu 3 (15-21 Februari, deadline):**
- 8 klien terakhir → 6 berhasil di hari terakhir, 2 harus minta perpanjangan
- Total jam kerja 3 minggu: ~180 jam (normalnya ~120 jam)
- Stress level: maksimum 😅

**Pelajaran:** Bulan-bulan pertama Coretax, siapkan waktu 2x lipat normal. Backup data, dokumentasi proses, dan **jangan lapor di deadline**.

## 📋 Recap Lesson 1

Sebelum lanjut, coba deh kamu jawab singkat:

- Apa itu Coretax? *(Sistem administrasi pajak terintegrasi yang gabungin semua proses perpajakan Indonesia)*
- Kapan Coretax launching? *(1 Januari 2025)*
- Siapa vendornya? *(BMF TCS — TCS = Tata Consultancy Services)*
- Apa yang diganti Coretax? *(DJP Online, e-SPT, e-Filing, e-Bupot, e-Faktur — semua jadi satu)*
- Kenapa ada transisi yang berat? *(Migrasi data jutaan WP, bug sistem, sinkronisasi belum sempurna)*

Kalau kamu udah bisa jawab 5 hal di atas, kamu siap ke lesson berikutnya tentang **fitur-fitur utama Coretax 2026**! 🚀`,
      keyPoints: [
        "Coretax = Core Tax Administration System (CTAS), sistem terintegrasi yang gabungin DJP Online + e-SPT + e-Filing + e-Bupot + e-Faktur jadi satu",
        "Launching resmi 1 Januari 2025 — tanggal wajib hafal buat ujian",
        "Vendor Coretax: BMF TCS (Tata Consultancy Services, perusahaan IT India)",
        "4 fase implementasi: Perencanaan (2014-2019) → Pengembangan (2019-2024) → Migrasi & Launching (1 Jan 2025) → Stabilisasi (2025-2026+)",
        "Alasan dibuat: integrasi data antar pihak, cross-check otomatis, pengalaman WP lebih baik, daya saing internasional (BEPS/Pillar Two)",
        "Transisi awal berat: server down, bukti potong nggak sinkron, faktur hilang, login error — DJP akomodasi via perpanjangan deadline & sosialisasi",
        "Status per Agustus 2026: stabil (downtime < 1%), fitur tambahan terus dirilis (role Signer SPT, kode setoran baru), Pillar Two proposal masih dalam development",
        "Strategi WP: jangan lapor di menit terakhir, siapkan buffer 3-7 hari, backup data",
      ],
      quiz: [
        {
          id: "ch12-l01-q1",
          question: "Kapan Coretax resmi go-live menggantikan DJP Online?",
          options: [
            "1 Januari 2024",
            "1 Januari 2025",
            "1 Januari 2026",
            "1 Juli 2024",
          ],
          correctIndex: 1,
          explanation:
            "Coretax resmi go-live 1 Januari 2025. Sehari sebelumnya (31 Des 2024) masih DJP Online, sehari sesudahnya udah Coretax.",
          difficulty: "mudah",
        },
        {
          id: "ch12-l01-q2",
          question: "Vendor pemenang tender yang membangun sistem Coretax adalah?",
          options: [
            "Microsoft Corporation",
            "IBM Indonesia",
            "BMF TCS (Tata Consultancy Services)",
            "Oracle Indonesia",
          ],
          correctIndex: 2,
          explanation:
            "Vendor Coretax = BMF TCS. TCS = Tata Consultancy Services, perusahaan IT raksasa asal India yang sudah bangun sistem perpajakan di banyak negara.",
          difficulty: "sedang",
        },
        {
          id: "ch12-l01-q3",
          question: "Berikut sistem yang DIGABUNG jadi Coretax, KECUALI:",
          options: [
            "DJP Online",
            "e-SPT",
            "e-Faktur",
            "Sistem Perbankan Core (Core Banking)",
          ],
          correctIndex: 3,
          explanation:
            "Coretax gabungin DJP Online + e-SPT + e-Filing + e-Bupot + e-Faktur. Sistem Perbankan Core (Core Banking) nggak ada hubungannya — itu sistem bank, bukan pajak.",
          difficulty: "sedang",
        },
        {
          id: "ch12-l01-q4",
          question: "Salah satu masalah utama transisi Coretax di bulan pertama (Januari 2025) adalah:",
          options: [
            "Tidak ada WP yang bisa log in sama sekali",
            "Bukti potong PPh 21 yang dipotong employer tidak muncul di SPT karyawan",
            "Semua data WP lama terhapus permanen",
            "Coretax menolak semua format pembayaran pajak",
          ],
          correctIndex: 1,
          explanation:
            "Masalah utama: sinkronisasi bukti potong belum sempurna. Bukti potong PPh 21 dari employer kadang nggak muncul otomatis di SPT karyawan, harus input manual atau nunggu sync.",
          difficulty: "sulit",
        },
        {
          id: "ch12-l01-q5",
          question: "Salah satu alasan strategis Indonesia membangun Coretax adalah:",
          options: [
            "Menghapus pajak untuk WP orang pribadi",
            "Meningkatkan transparansi & cross-check data antar pihak (WP, employer, fiskus)",
            "Mengganti Self Assessment System dengan Official Assessment",
            "Menghapus kebutuhan konsultan pajak",
          ],
          correctIndex: 1,
          explanation:
            "Coretax dibangun untuk transparansi: data employer, karyawan, dan WP otomatis sinkron, sehingga DJP bisa cross-check cepat. Self Assessment tetap dipertahankan, konsultan pajak masih dibutuhkan (tapi perannya berubah).",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Konsultan Pajak di Bulan Pertama Coretax",
        description:
          "Bu Rina, konsultan pajak dengan 50 klien korporasi, harus lapor SPT Masa PPN per 20 Februari 2025 (bulan pertama Coretax). Dari 50 klien, hanya 6 yang berhasil first-time-right. Sisanya gagal karena error validasi NPWP format baru, faktur missing, dan helpdesk respons lambat. Bagaimana strategi yang benar untuk Bu Rina?",
        solution:
          "Strategi yang benar: (1) Jangan lapor di deadline — siapkan buffer 3-7 hari, (2) Backup semua data lokal (excel/PDF) sebelum input ke Coretax, (3) Test dengan 1-2 klien kecil dulu buat kenalin sistem, baru scale up, (4) Dokumentasi setiap error code & solusi untuk knowledge base internal, (5) Komunikasi proaktif dengan klien tentang potensi delay, (6) Manfaatkan perpanjangan deadline resmi dari DJP jika ada, (7) Tetap tenang — sistem akan stabil dalam beberapa bulan. Bulan-bulan berikutnya (Maret-April 2025), Bu Rina melaporkan 90%+ SPT-nya berhasil first-time-right setelah sistem stabil dan dia paham workaround error umum.",
      },
      tags: [
        "Coretax",
        "DJP Online",
        "BMF TCS",
        "sistem perpajakan",
        "transisi sistem",
        "e-Faktur",
        "e-Bupot",
        "launching 2025",
      ],
    },

    // =========================================================================
    // LESSON 2: FITUR UTAMA CORETAX 2026
    // =========================================================================
    {
      id: "ch12-l02",
      slug: "fitur-coretax-2026",
      title: "Fitur Utama Coretax 2026: Lebih dari Sekedar Lapor SPT Online",
      subtitle:
        "Registrasi terintegrasi real-time; SPT pre-populated; pencocokan bukti potong PPh 21; e-billing & e-Faktur & e-Bupot built-in; status real-time; role-based access (Signer, Approver, Pengirim); reporting dashboard",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 28,
      content: `# ⚙️ Fitur Utama Coretax 2026: Apa Aja yang Bisa Dilakuin?

Di lesson 1 kita udah bahas sejarah Coretax. Sekarang, kita masuk ke bagian yang **paling teknis & paling sering keluar di ujian Brevet AB**: fitur-fitur utamanya. Paham fitur = paham gimana ngelola pajak di 2026.

Yuk, kita bedah satu-satu. Siapkan kopi dulu ya, lesson ini bakal agak panjang tapi penting banget! ☕

## 🆕 Fitur 1: Registrasi WP Real-Time (NPWP & NPPKP Instan)

Di zaman DJP Online, kalau kamu daftar NPWP online, biasanya nunggu **2-5 hari kerja** buat dapet NPWP-nya. Biasanya harus dateng ke KPP buat verifikasi dokumen (KTP, dll).

Di Coretax, registrasi jadi **real-time** (hampir instan):

| Fitur | DJP Online (Lama) | Coretax 2026 |
|-------|-------------------|--------------|
| Approval NPWP | 2-5 hari kerja | Real-time (hitungan menit) |
| NPPKP (untuk PKP) | 7-14 hari | Real-time setelah dokumen lengkap |
| Verifikasi KTP | Manual di KPP | Foto + OCR + e-Kematian verification |
| Cetak kartu NPWP | Fisik (ambil di KPP) | Digital (download PDF) |
| Update profil | Manual, perlu ke KPP | Online, auto-verified via Dukcapil |

> **Tip:** WP orang pribadi yang udah punya e-KTP bisa daftar NPWP lewat Coretax dalam **< 30 menit** (jika sistem lancar). Nggak perlu dateng ke KPP lagi!

### Cara Daftar NPWP di Coretax (Langkah Ringkas)

1. Buka **coretaxdjp.pajak.go.id** (atau link resmi DJP)
2. Klik "Daftar" → pilih jenis WP (Orang Pribadi / Badan)
3. Input NIK + tanggal lahir → verifikasi via Dukcapil
4. Lengkapi data: alamat (sesuai KTP), email, no HP
5. Upload dokumen pendukung (untuk WP badan: akta, SK Kemenkumham)
6. Sistem generate NPWP **real-time**
7. Download kartu NPWP digital

> **Catatan:** Untuk WP badan, biasanya butuh verifikasi tambahan (sk OJK/Kemenkeu untuk finance company, dll). Tapi NPWP tetap dikeluarkan real-time; verifikasi tambahan hanya untuk aktivasi fitur tertentu.

## 📝 Fitur 2: SPT Pre-Populated (Auto-Fill dari Pihak Ketiga)

Ini fitur **paling revolusioner** Coretax, dan yang paling bikin konsultan pajak "wah". Di Coretax, SPT kamu udah **diisi otomatis** oleh DJP berdasarkan data dari pihak ketiga.

### Sumber Data Pre-Populated

| Jenis Data | Sumber (Pihak Ketiga) |
|------------|----------------------|
| Gaji & bukti potong PPh 21 | Employer (pemberi kerja) |
| Honor & bukti potong PPh 22 | BUMN, instansi pemerintah, importir |
| Bunga deposito & bukti potong PPh 20 | Bank |
| Dividen & bukti potong PPh 23 | Emiten / perusahaan |
| Royalti | Pemberi royalti |
| Sewa tanah & bangunan | Penyewa (pemotong PPh final) |
| Transaksi BKP/JKP sebagai pembeli | Faktur pajak dari penjual |
| Ekspor-impor | Data Bea Cukai (CEISA) |
| Pembayaran dengan kartu kredit | Data bank penerbit kartu |

### Contoh Nyata SPT Pre-Populated

Pak Joko, karyawan swasta, mau lapor SPT Tahunan PPh OP 2025. Begitu dia log in ke Coretax & buka SPT 1770, ini yang muncul:

\`\`\`
SPT Tahunan PPh OP - Pak Joko (NPWP: 12.3456.789.0-123.000)
Tahun Pajak 2025

Bagian A: Penghasilan dari Pekerjaan (otomatis dari bukti potong 1721-A1)
- Gaji PT Maju Jaya (NPWP: 01.2345.678.9-012.000): Rp 240.000.000
- Bukti potong: 1721-A1-XX.123-2025, tanggal 28 Feb 2026
- PPh 21 dipotong: Rp 8.500.000

Bagian B: Penghasilan dari Bunga Deposito (otomatis dari Bank ABC)
- Bunga Deposito Bank ABC: Rp 5.000.000
- PPh Final 20% dipotong: Rp 1.000.000

Bagian C: Penghasilan dari Sewa Rumah (otomatis dari penyewa)
- Sewa rumah ke PT XYZ: Rp 60.000.000/thn
- PPh Final 10% dipotong: Rp 6.000.000

[Tombol: Review SPT]  [Tombol: Submit]
\`\`\`

Pak Joko tinggal **review & submit**. Nggak perlu input manual gajinya berapa, berapa bunga deposito, dll — semua udah ada. Cuma tinggal cek apakah datanya bener, lalu klik Submit.

> **Tip ujian:** Fitur SPT pre-populated ini yang bikin Coretax disebut "**mengubah permainan**" (game changer). WP tinggal verifikasi & submit. Konsultan pajak yang dulu kerjanya "input data", sekarang harus geser ke **"advisory"** (memberi nasihat).

### Tapi Hati-Hati: Bisa Salah Juga!

Walaupun pre-populated, **tetap harus dicek manual**. Contoh kesalahan yang sering terjadi:

1. **Bukti potong dobel** — Employer lapor 2x karena error sistem → SPT kamu catat gaji 2x lipat dari aktual
2. **Bukti potong salah orang** — Karena mirip NPWP / NIK, bukti potong masuk ke WP lain
3. **Bukti potong lapor tahun salah** — Tahun 2024 masuk ke SPT 2025
4. **Bukti potong dari WP yang bukan kamu kenal** — Bisa karena penyalahgunaan NPWP (NPWP kamu dipake orang lain!)

> **Peringatan penting:** Sistem Coretax **otomatis kirim warning** kalau ada inkonsistensi. Misal: gaji di bukti potong employer = Rp 240jt, tapi di SPT kamu tulis Rp 200jt. Sistem bakal flag merah, dan DJP bisa panggil kamu buat klarifikasi. **Selalu review data pre-populated sebelum submit!**

## 🔗 Fitur 3: Pencocokan Otomatis (Auto-Matching) Bukti Potong vs SPT

Ini fitur yang **paling ditakuti** WP nakal. Coretax otomatis **nyocokin** bukti potong yang dilaporkan pihak ketiga dengan SPT yang kamu lapor. Mekanismenya:

### Cara Kerja Auto-Matching

\`\`\`
[Employer lapor bukti potong PPh 21]
       ↓
[Coretax nyatet: Karyawan X dapat Rp 240jt, dipotong PPh Rp 8.5jt]
       ↓
[Karyawan X lapor SPT 1770]
       ↓
[Coretax bandingkan otomatis:]
       - Bukti potong: Rp 240jt
       - SPT karyawan: Rp ??? 
       ↓
   Kalau SAMA → ✅ Status "Matched"
   Kalau BEDA  → ⚠️ Status "Mismatch" → Warning ke WP & DJP
\`\`\`

### Tabel Pencocokan yang Dilakukan Coretax

| Jenis Pajak | Sumber Bukti Potong | Dicocokkan dengan |
|-------------|--------------------|--------------------|
| PPh 21 | Bukti potong 1721-A1 dari employer | SPT 1770 (OP) / SPT Induk 1771 (Badan) |
| PPh 22 | Bukti potong dari BUMN, importir | SPT badan (biaya) |
| PPh 23 | Bukti potong jasa/bunga | SPT OP/Badan |
| PPh 26 | Bukti potong WPLN | SPT badan OP/Badan |
| PPN | Faktur pajak keluaran (penjual) vs masukan (pembeli) | SPT Masa PPN |
| PPh Final sewa | Bukti potong dari penyewa | SPT OP/Badan |

> **Konsekuensi mismatch:** DJP bisa terbitkan **Surat Paksa (SP)** untuk klarifikasi, atau langsung terbitkan **SKPKB** (Surat Ketetapan Pajak Kurang Bayar). Kalau ketemu selisih besar & ada unsur kelalaian, bisa kena sanksi Pasal 8 KUP (1.02%/bln × masa, max 24 bln).

## 💳 Fitur 4: e-Billing Built-In (Pembayaran Pajak Langsung di Coretax)

Dulu, buat bayar pajak, kamu harus:
1. Generate kode billing di DJP Online
2. Catat kode billing-nya
3. Pergi ke bank (atau via internet banking) buat bayar
4. Dapatkan NTPN (Nomor Transaksi Penerimaan Negara)
5. Input NTPN ke SPT

Di Coretax, semua itu **built-in**:

### Alur Pembayaran Pajak di Coretax

\`\`\`
[WP buat SPT Masa PPN]
       ↓
[Sistem hitung pajak terutang: Rp 11.000.000]
       ↓
[Klik "Bayar" → e-Billing otomatis generate ID]
       ↓
[Pilih metode pembayaran: Virtual Account bank / payment gateway]
       ↓
[Pembayaran langsung terkonfirmasi di Coretax (real-time)]
       ↓
[NTPN otomatis tercatat di SPT — nggak perlu input manual]
       ↓
[Status SPT berubah jadi "Lunas & Terkirim"]
\`\`\`

> **Perubahan paradigma:** SSP (Surat Setoran Pajak) lama itu dokumen fisik/bisa di-print. Di Coretax, pembayaran itu udah jadi "**pemindahbukuan**" ke akun WP di sistem DJP. Konsepnya mirip **e-wallet pajak**: kamu top up, lalu dibayarikan ke SPT tertentu.

### Kode Jenis Setoran (Updated 2026)

Coretax punya **kode jenis setoran** yang harus kamu pilih saat bayar. Beberapa yang sering dipakai:

| Kode | Jenis Setoran |
|------|---------------|
| 100 | PPh OP Pasal 25 |
| 104 | PPh OP Final |
| 200 | PPh Badan |
| 211 | PPh Badan Bumi Manusia (lainnya) |
| 300 | PPh 21 |
| 320 | PPh 22 Impor |
| 321 | PPh 22 BUMN |
| 411 | PPh 23 Jasa |
| 412 | PPh 23 Sewa |
| 511 | PPh 26 |
| 100/200/300 series | Beragam sub-kode |
| 901 | PPN |
| 902 | PPnBM |

> **Tip:** Salah kode setoran = pembayaran nggak ter-apply ke SPT yang benar. Sistem bakal catat "pembayaran tidak ter-aloikasi". Pastikan pilih kode yang benar!

## 🧾 Fitur 5: e-Faktur Built-In (Faktur Pajak PPN)

Salah satu perubahan besar: e-Faktur yang dulu aplikasi terpisah (desktop, lalu cloud), sekarang **built-in di Coretax**.

### Cara Bikin Faktur Pajak di Coretax

1. Login ke Coretax → menu "Faktur Pajak" → "Buat Baru"
2. Pilih jenis: Faktur Pajak Keluaran (sebagai penjual) / Masukan (sebagai pembeli)
3. Input data transaksi:
   - NPWP pembeli/penjual (auto-fill dari database)
   - Nama, alamat
   - Jenis BKP/JKP
   - Jumlah, harga satuan
   - Tarif PPN (12% / 11% efektif via DPP 11/12)
4. Sistem hitung otomatis: DPP, PPN, PPnBM (jika ada)
5. Klik "Submit" → Faktur terbit dengan **Nomor Faktur Pajak** otomatis
6. Faktur langsung **terkirim** ke Coretax pembeli (otomatis muncul di SPT Masa PPN pembeli sebagai masukan)

### Keuntungan e-Faktur Built-In

- ✅ Nggak perlu install aplikasi terpisah
- ✅ NPWP auto-verify (valid atau nggak langsung kelihatan)
- ✅ Pembeli otomatis dapat masukan PPN, nggak perlu input manual
- ✅ Validasi real-time: jika NPWP penjual nggak valid, faktur ditolak
- ✅ Cross-check otomatis dengan SPT Masa PPN kedua belah pihak

> **Warning:** Faktur pajak yang dibuat di Coretax nggak bisa diedit setelah submit. Kalau salah, harus dibuat **faktur pengganti** atau **faktur pembatalan**. Prosesnya agak ribet, jadi teliti dulu sebelum submit.

## 📂 Fitur 6: e-Bupot Built-In (Bukti Potong PPh 21/22/23/26)

Sama seperti e-Faktur, e-Bupot juga **built-in** di Coretax. Employer / pemotong bisa langsung bikin bukti potong di sistem.

### Cara Bikin Bukti Potong di Coretax

1. Login → menu "Bukti Potong" → pilih jenis (PPh 21, 22, 23, 26)
2. Input data penerima penghasilan:
   - NPWP (auto-fill nama & alamat)
   - Jenis penghasilan
   - Jumlah bruto
   - Tarif
   - PPh dipotong
3. Generate bukti potong → nomor otomatis
4. Bukti potong **otomatis masuk** ke SPT penerima (pre-populated)

### Jenis Bukti Potong yang Bikin di Coretax

| Form | Jenis |
|------|-------|
| 1721-A1 | Bukti potong PPh 21 (karyawan tetap) |
| 1721-A2 | Bukti potong PPh 21 (pensiunan) |
| 1721-V | Bukti potong PPh 21 (karyawan tidak tetap / tenaga ahli) |
| 1721-VV | Bukti potong PPh 21 (bukan karyawan) |
| 1-CPP | Bukti potong PPh 22 (impor / BUMN / Pertamina) |
| 1-CPU | Bukti potong PPh 23 (jasa, bunga, dll) |
| 1-CPT | Bukti potong PPh 26 (WPLN) |

## 📊 Fitur 7: Status Real-Time & Dashboard

Coretax punya **dashboard real-time** yang nampilin status perpajakan WP:

### Yang Bisa Dilihat di Dashboard

- ✅ Status SPT: sudah lapor / belum / dalam proses / ditolak
- ✅ Status pembayaran: lunas / kurang bayar / lebih bayar
- ✅ Status restitusi: diajukan / dalam proses audit / approved / ditolak
- ✅ Tunggakan pajak (jika ada)
- ✅ Bukti potong masuk (pre-populated) — bisa di-verify sebelum lapor SPT
- ✅ Faktur pajak masukan / keluaran
- ✅ Notifikasi: deadline SPT, surat dari DJP, dll

### Notifikasi Otomatis

Coretax kirim notifikasi (email + push notification) untuk:

- ⏰ Deadline SPT 7 hari sebelum jatuh tempo
- ⚠️ Warning kalau ada bukti potong masuk tapi nggak kamu kenal
- 📧 Surat dari DJP (SP, SKP, STP, dll) — semuanya elektronik
- ✅ Konfirmasi pembayaran & SPT terkirim

> **Game changer:** WP nggak perlu lagi nabung surat fisik dari pos. Semua surat DJP dikirim elektronik via Coretax. Tapi **hati-hati**: surat yang masuk ke Coretax dianggap **sah diterima** dalam waktu tertentu (misal 3-7 hari), walaupun kamu nggak baca. Selalu cek dashboard secara berkala!

## 👥 Fitur 8: Role-Based Access Control (RBAC)

Ini fitur yang **penting banget buat WP korporasi**. Dulu, satu akun WP = satu orang yang bisa akses semua. Sekarang, Coretax bikin **role terpisah**:

### Role Standar di Coretax

| Role | Hak Akses |
|------|-----------|
| **Administrator** | Manage user, atur role, akses penuh |
| **Pengirim SPT / Preparer** | Input & edit SPT, tapi belum bisa submit |
| **Approver** | Review SPT yang sudah diinput, approve/reject |
| **Signer** | Sign SPT secara elektronik (tanda tangan digital) — perlu sertifikat elektronik |
| **Viewer / Auditor** | Lihat saja, nggak bisa edit |

### Contoh Alur Lapor SPT Badan

\`\`\`
[Accounting staff (Pengirim)] → Input SPT 1771 → Submit ke Approver
       ↓
[Finance Manager (Approver)] → Review SPT → Approve / Reject
       ↓ (jika approved)
[Director (Signer)] → Sign dengan sertifikat elektronik → SPT terkirim ke DJP
\`\`\`

### Fitur Baru: "Signer SPT PPh 21/26 Induk"

Salah satu fitur yang **baru dirilis di 2026** adalah role **Signer SPT PPh Pasal 21/26 Induk**. Role ini unik karena:

- ✅ Bisa **sign** SPT Induk PPh 21/26
- ❌ **Tidak bisa melihat detail** SPT (alasan privasi / departemental)

> **Use case:** Perusahaan besar yang punya payroll di vendor terpisah (outsourced payroll). Vendor input SPT PPh 21, tapi yang sign harus Direktur client. Direktur nggak harus lihat detail gaji semua karyawan — cukup sign aja. Privasi karyawan lebih terjaga.

## 📈 Fitur 9: Reporting Dashboard & Analytics

Coretax punya modul **reporting & analytics** yang powerful:

### Yang Bisa Di-generate

- 📊 Laporan SPT masa & tahunan (history 5 tahun terakhir)
- 📈 Laporan pembayaran pajak (per jenis pajak, per periode)
- 📉 Laporan tunggakan (jika ada)
- 🧾 Laporan faktur pajak (masukan vs keluaran)
- 💰 Laporan restitusi (status, riwayat audit)
- 📋 Laporan bukti potong (yang dikeluarkan & diterima)
- 🔍 Laporan matching status (matched / mismatched)

### Untuk WP Korporasi

- 📑 Laporan PPh 21 per karyawan (untuk keperluan internal HR)
- 📑 Laporan PPh 22 dari supplier (untuk verifikasi biaya)
- 📑 Laporan PPN masukan vs keluaran (untuk audit internal)

> **Manfaat:** WP bisa monitoring posisi pajaknya real-time, nggak harus nunggu akhir tahun. Konsultan pajak bisa pakai dashboard ini buat **advisory** — "Pak, bulan ini PPh 21 WP-nya kurang bayar Rp 5jt, mungkin perlu setor PPh 25 tambahan."

## 🎯 Recap Fitur Utama Coretax 2026

| No | Fitur | Dampak untuk WP |
|----|-------|-----------------|
| 1 | Registrasi real-time | NPWP instan, nggak perlu ke KPP |
| 2 | SPT pre-populated | Tinggal review & submit |
| 3 | Auto-matching bukti potong | Transparansi, nggak bisa bohong |
| 4 | e-Billing built-in | Bayar langsung dari sistem |
| 5 | e-Faktur built-in | Nggak perlu aplikasi terpisah |
| 6 | e-Bupot built-in | Bukti potong otomatis masuk SPT |
| 7 | Status real-time & dashboard | Monitoring kapan saja |
| 8 | Role-based access | Signer bisa beda dari preparer |
| 9 | Reporting & analytics | Audit internal lebih gampang |

## 🧮 Kasus Nyata: Perusahaan IT Pakai Coretax End-to-End

PT TechNusantara, perusahaan IT dengan 200 karyawan, omzet Rp 50M/thn. Begini alur pajak mereka di Coretax per bulan:

**Awal bulan:**
1. HR generate bukti potong PPh 21 via e-Bupot built-in → 200 karyawan otomatis dapat bukti potong di akun Coretax masing-masing
2. Finance bikin faktur pajak PPN untuk penjualan bulan lalu via e-Faktur built-in → otomatis masuk ke Coretax pembeli
3. Finance catat faktur masukan (dari supplier) → otomatis muncul karena supplier udah bikin di Coretax mereka

**Pertengahan bulan:**
4. Setor PPh 21 (deadline tgl 10 bulan berikutnya) via e-Billing → pembayaran real-time, NTPN otomatis tercatat
5. Setor PPN (deadline tgl 20 bulan berikutnya) via e-Billing

**Akhir bulan:**
6. Accounting staff (Pengirim SPT) input data SPT Masa → submit ke Finance Manager
7. Finance Manager (Approver) review → approve
8. Direktur (Signer) sign dengan sertifikat elektronik → SPT terkirim ke DJP

**Setahun sekali:**
9. SPT Tahunan PPh Badan disiapkan — sebagian besar data udah pre-populated dari SPT Masa
10. Approver review → Signer sign → submit

> **Hasil:** Waktu yang dulu 5-7 hari kerja per bulan buat lapor pajak, sekarang 1-2 hari kerja saja. Efisiensi 80%. Konsultan pajak nggak lagi input data, tapi fokus **strategi perpajakan**: optimasi PPh, perencanaan restitusi, dll.

## 📋 Ringkasan Akhir Lesson 2

Coba deh kamu jawab singkat:

- Apa 9 fitur utama Coretax 2026? *(Registrasi real-time, SPT pre-populated, auto-matching bukti potong, e-billing, e-faktur, e-bupot built-in, status real-time, role-based access, reporting)*
- Apa itu SPT pre-populated? *(SPT yang udah diisi otomatis DJP berdasarkan data pihak ketiga)*
- Apa konsekuensi mismatch bukti potong vs SPT? *(Warning, panggilan klarifikasi, atau SKPKB)*
- Apa peran Signer di Coretax? *(Tanda tangan elektronik SPT, biasanya Direktur untuk WP badan)*
- Sebutkan role yang ada di Coretax? *(Administrator, Pengirim, Approver, Signer, Viewer)*

Kalau udah bisa jawab, mari lanjut ke lesson 3: dampak Coretax buat Wajib Pajak! 🚀`,
      keyPoints: [
        "Registrasi NPWP real-time: WP orang pribadi bisa daftar NPWP < 30 menit, nggak perlu ke KPP",
        "SPT pre-populated: SPT diisi otomatis DJP dari data pihak ketiga (employer, bank, penyewa, dll) — WP tinggal review & submit",
        "Auto-matching: Coretax otomatis nyocokin bukti potong (employer/pemotong) vs SPT (WP) — mismatch = warning/SKPKB",
        "e-Billing built-in: bayar pajak langsung dari Coretax via virtual account, NTPN otomatis tercatat di SPT",
        "e-Faktur & e-Bupot built-in: faktur pajak PPN & bukti potong PPh dibikin langsung di Coretax, nggak perlu aplikasi terpisah",
        "Role-based access: Administrator, Pengirim (Preparer), Approver, Signer, Viewer — pemisahan tugas untuk kontrol internal",
        "Fitur baru 2026: Signer SPT PPh 21/26 Induk (bisa sign tanpa lihat detail SPT)",
        "Status real-time & dashboard: WP bisa monitoring pajaknya kapan saja, surat DJP elektronik",
        "Reporting & analytics: laporan SPT, pembayaran, faktur, bukti potong — untuk audit internal & advisory",
      ],
      quiz: [
        {
          id: "ch12-l02-q1",
          question: "Apa yang dimaksud dengan SPT pre-populated di Coretax?",
          options: [
            "SPT yang diisi manual oleh WP",
            "SPT yang sudah diisi otomatis DJP berdasarkan data pihak ketiga (employer, bank, dll)",
            "SPT yang sudah disetujui fiskus sebelum diisi",
            "SPT khusus untuk WP orang pribadi saja",
          ],
          correctIndex: 1,
          explanation:
            "SPT pre-populated = SPT yang udah diisi otomatis DJP berdasarkan data dari pihak ketiga (employer, bank, penyewa, dll). WP tinggal review & submit. Ini fitur paling revolusioner Coretax.",
          difficulty: "mudah",
        },
        {
          id: "ch12-l02-q2",
          question: "Apa yang terjadi jika bukti potong PPh 21 dari employer TIDAK SINKRON dengan SPT karyawan di Coretax?",
          options: [
            "Tidak terjadi apa-apa, sistem hanya catat",
            "Sistem kirim warning/mismatch, DJP bisa panggil WP buat klarifikasi atau terbitkan SKPKB",
            "SPT otomatis di-approve asal ada NPWP",
            "Karyawan otomatis dijadikan WP luar negeri",
          ],
          correctIndex: 1,
          explanation:
            "Coretax auto-match bukti potong vs SPT. Kalau mismatch, sistem kirim warning, DJP bisa panggil WP untuk klarifikasi, atau terbitkan SKPKB dengan sanksi Pasal 8 KUP (1.02%/bln × masa, max 24 bln).",
          difficulty: "sedang",
        },
        {
          id: "ch12-l02-q3",
          question: "Role di Coretax yang bertugas menandatangani SPT secara elektronik disebut?",
          options: ["Administrator", "Pengirim SPT", "Approver", "Signer"],
          correctIndex: 3,
          explanation:
            "Signer = role yang berhak menandatangani SPT secara elektronik dengan sertifikat elektronik. Biasanya Direktur untuk WP badan. Signer bisa beda orang dengan Pengirim (yang input) dan Approver (yang review).",
          difficulty: "mudah",
        },
        {
          id: "ch12-l02-q4",
          question: "Berikut adalah BENAR tentang e-Billing di Coretax, KECUALI:",
          options: [
            "Pembayaran langsung dari Coretax via virtual account bank",
            "NTPN otomatis tercatat di SPT tanpa input manual",
            "Konsepnya seperti pemindahbukuan ke akun WP di sistem DJP",
            "Harus datang ke kantor pos untuk konfirmasi pembayaran",
          ],
          correctIndex: 3,
          explanation:
            "Tidak perlu ke kantor pos. e-Billing Coretax full elektronik: bayar via virtual account bank atau payment gateway, konfirmasi real-time, NTPN otomatis tercatat di SPT. Nggak ada lagi urusan fisik.",
          difficulty: "sedang",
        },
        {
          id: "ch12-l02-q5",
          question: "Fitur baru Coretax 2026 'Signer SPT PPh 21/26 Induk' memungkinkan:",
          options: [
            "Signer bisa edit detail gaji karyawan sebelum sign",
            "Signer bisa menandatangani SPT tanpa melihat detail (privasi karyawan terjaga)",
            "Signer harus selalu Direktur Utama, tidak bisa di-delegasikan",
            "Signer hanya berlaku untuk WP orang pribadi",
          ],
          correctIndex: 1,
          explanation:
            "Fitur Signer SPT PPh 21/26 Induk memungkinkan Signer menandatangani SPT tanpa melihat detail (misal detail gaji karyawan). Use case: payroll outsourced, Direktur client cukup sign tanpa lihat gaji semua karyawan. Privasi karyawan terjaga.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: PT TechNusantara Optimasi Pajak dengan Coretax",
        description:
          "PT TechNusantara (200 karyawan, omzet Rp 50M/thn) sebelum Coretax butuh 5-7 hari kerja per bulan untuk lapor pajak (input manual, validasi, koordinasi antar tim). Setelah Coretax, dengan role Pengirim (Accounting) → Approver (Finance Manager) → Signer (Direktur), plus SPT pre-populated & e-Billing built-in, waktu lapor turun jadi 1-2 hari kerja. Apa faktor kunci sukses mereka?",
        solution:
          "Faktor kunci sukses: (1) Set up role-based access dari awal — Accounting staff input, Finance Manager approve, Direktur sign, masing-masing fokus pada tugasnya; (2) Manfaatkan SPT pre-populated untuk PPh 21 (data dari HR otomatis masuk SPT badan); (3) e-Billing built-in menghilangkan double input NTPN manual; (4) e-Faktur & e-Bupot built-in menyatukan semua aktivitas pajak di satu sistem; (5) Dashboard real-time bikin Finance Manager bisa monitor outstanding task; (6) Konsultan pajak dialihkan dari 'input data' ke 'advisory' (strategi perpajakan, perencanaan restitusi); (7) Sertifikat elektronik Direktur disiapkan dari awal untuk Signer role. Hasil: efisiensi 80%, biaya kepatuhan pajak turun signifikan, konsultan pajak bisa fokus nilai tambah strategis.",
      },
      tags: [
        "Coretax fitur",
        "SPT pre-populated",
        "auto-matching",
        "e-Billing",
        "e-Faktur built-in",
        "e-Bupot",
        "role-based access",
        "Signer SPT",
      ],
    },

    // =========================================================================
    // LESSON 3: DAMPAK CORETAX BAGI WAJIB PAJAK
    // =========================================================================
    {
      id: "ch12-l03",
      slug: "dampak-coretax-bagi-wp",
      title: "Dampak Coretax buat Wajib Pajak: Lebih Gampang, Tapi Lebih Ketat",
      subtitle:
        "Mudah lapor tapi ketat; data tidak sinkron = warning; transparansi gaji; audit cross-check otomatis; peran konsultan berubah; bug awal; siapa harus waspada (gaji fiktif, biaya fiktif, SPT tidak akurat)",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 26,
      content: `# 🎯 Dampak Coretax buat Wajib Pajak: Pisau Bermata Dua

Sobat Brevet, di lesson 1 kita udah bahas sejarah Coretax, di lesson 2 fitur-fiturnya. Sekarang, kita masuk ke pertanyaan yang **paling sering ditanya praktisi**: "Gimana dampaknya buat WP sih, sebenernya?"

Jawabannya bisa disebut **pisau bermata dua**: lebih gampang lapor SPT, **TAPI** jauh lebih ketat soal data. WP yang jujur bakal seneng, WP yang "akal-akalan" bakal kerepotan. Yuk, kita bedah satu-satu.

## ⚖️ Dampak 1: Lebih Mudah Lapor SPT, Tapi Lebih Ketat Soal Data

Ini paradox Coretax yang harus kamu paham. Di satu sisi, lapor SPT jadi **jauh lebih gampang** (pre-populated, built-in, real-time). Di sisi lain, validasi data jadi **jauh lebih ketat** (auto-matching, warning, cross-check).

### Tabel: Sebelum vs Sesudah Coretax

| Aspek | DJP Online (Lama) | Coretax 2026 |
|-------|-------------------|--------------|
| Input data SPT | Manual, mudah "lupa" / "selip" | Pre-populated, nggak bisa "lupa" |
| Validasi bukti potong | Manual, perlu cross-check sendiri | Auto-matching, sistem yang cek |
| Pembayaran | Multi-step (billing → bank → NTPN → input) | One-click (built-in) |
| Tanda tangan | Fisik / scan ttd basah | Sertifikat elektronik (Signer) |
| Audit | Surat-menyurat, bisa berbulan | Dashboard real-time, langsung kelihatan |
| Koreksi SPT | Bisa diam-diam "lupa" | Semua koreksi tercatat, audit trail |

> **Analogi:** Bayangin kamu dulu ujian pakai buku terbuka, dosen keliling-keliling tapi nggak ketelitian. Itu DJP Online. Sekarang, kamu ujian pakai komputer yang otomatis ngecek jawaban kamu real-time + kamera yang ngawasin kamu. Itu Coretax. Lebih gampang soalnya, tapi nggak bisa nyontek.

## ⚠️ Dampak 2: Data Tidak Sinkron = Warning Otomatis

Ini yang **paling ditakuti** WP yang selama ini "akal-akalan". Coretax punya sistem auto-match yang langsung flag kalau ada inkonsistensi.

### Skenario: Pak Joko dan Gaji "Lebih Kecil"

**Skenario:** Pak Joko gaji Rp 20jt/bulan (Rp 240jt/thn) dari PT Maju. Employer (PT Maju) lapor bukti potong PPh 21 di Coretax: gaji Rp 240jt, PPh dipotong Rp 8.5jt.

Saat Pak Joko lapor SPT Tahunan, dia **sengaja tulis gaji Rp 200jt** (mau ngurangin pajak). Apa yang terjadi?

\`\`\`
[Coretax cek:]
- Bukti potong PT Maju (employer): Rp 240jt
- SPT Pak Joko: Rp 200jt
- Selisih: Rp 40jt ⚠️

[Action otomatis:]
1. Status SPT Pak Joko: "MATCH WARNING" (merah)
2. Notifikasi ke Pak Joko: "Ada selisih data gaji, mohon klarifikasi"
3. Notifikasi ke DJP: flag WP untuk review
4. DJP bisa langsung terbitkan:
   - Surat Paksa (SP) untuk klarifikasi
   - SKPKB (Surat Ketetapan Pajak Kurang Bayar) dengan sanksi
\`\`\`

### Konsekuensi Hukum

Kalau Pak Joko nggak bisa jelasin selisih, dia bisa kena:

- **SKPKB Pasal 8(2) KUP** — dengan bunga 1.02%/bln × masa (max 24 bln) berdasarkan MIR 0.6%/bln Agustus 2026 × multiplier 1.7
- **Sanksi kelalaian Pasal 13(2)** — 1.85%/bln (max 24 bln)
- **Sanksi pidana Pasal 38 KUP** — kalau ada unsur sengaja mengemplang pajak, bisa 6 bulan-6 tahun penjara + denda 4-10x pajak

> **Pelajaran:** Di era Coretax, **nggak ada lagi "bohong kecil-kecilan"**. Semua data cross-check otomatis. WP jujur seneng, WP nakal harus tobat.

## 👁️ Dampak 3: Transparansi Data Antar Pihak (Gaji Karyawan Bocor ke DJP)

Ini dampak yang **bikin sebagian karyawan & employer "tidak nyaman"**: data gaji karyawan otomatis terlihat di DJP.

### Sebelum Coretax: "Rahasia Perusahaan"

Dulu, data gaji karyawan cuma diketahui HR, karyawan itu sendiri, dan atasannya. DJP baru tahu kalau ada audit. Karyawan bisa "tidak jujur" di SPT (lapor gaji lebih kecil), selama employer juga tidak lapor bukti potong dengan benar.

### Setelah Coretax: "Data Gaji Real-Time di DJP"

Sekarang, setiap bulan employer wajib lapor bukti potong PPh 21 via e-Bupot di Coretax. **DJP langsung punya data gaji seluruh karyawan Indonesia**, real-time.

### Implikasi:

1. **Gaji "off the books" (under-reported)** — karyawan yang gajinya dipotong PPh 21 kecil (di lapor employer rendah) bakal konflik sama data BPJS / bank (kalau masuk rekening)
2. **Karyawan dengan gaji fiktif** — kalau perusahaan catat "karyawan" yang nggak ada, untuk mengurangi laba kena pajak → bakal ketahuan (karyawan fiktif nggak punya NPWP / BPJS)
3. **THR / bonus "di luar gaji"** — kalau employer catat bonus sebagai "biaya lain-lain", bukan gaji → bakal ketahuan dari data bank

> **Warning buat HRD:** Coretax + auto-match data bank = "no more hiding". Pastikan setiap karyawan yang digaji, dilaporkan sesuai data bank. Jangan ada "double bookkeeping" (catatan akuntansi beda dengan pajak).

### Kasus: Karyawan yang Gajinya Dilaporkan "Penuh" tapi Diterima "Lebih Kecil"

Skenario: Pak Budi resmi gaji Rp 15jt/bulan (di bukti potong), tapi cuma terima Rp 12jt (sisanya "dipotong" untuk hal lain yang nggak resmi). Saat lapor SPT, Coretax menunjukkan gaji Pak Budi = Rp 15jt (dari bukti potong), padahal dia cuma terima Rp 12jt.

- **Dampak buat Pak Budi**: PPh 21 dihitung dari Rp 15jt (gaji resmi), padahal cuma terima Rp 12jt → overpaid pajak
- **Dampak buat employer**: Kalau selisih Rp 3jt/bulan nggak dijelaskan, bisa diduga "potong gaji tanpa dasar hukum" → sengketa ketenagakerjaan + pajak

> **Saran:** employer harus transparan dengan karyawan tentang gaji yang dilaporkan ke DJP. Jangan ada perbedaan "yang dilaporkan" vs "yang diterima".

## 🔍 Dampak 4: Implikasi Audit — DJP Bisa Cross-Check Otomatis

Ini dampak yang **mengubah cara audit pajak di Indonesia**. Dulu, audit itu proses manual yang bisa berbulan-bulan, surat-menyurat, ekspor-import data. Sekarang, audit jadi cepat & otomatis.

### Sebelum Coretax: Audit Manual & Lambat

- Fiskus kirim Surat Pemberitahuan Pemeriksaan (SPP)
- WP kirim dokumen fisik (bukti potong, faktur, laporan keuangan)
- Fiskus periksa satu-satu, manual, butuh waktu 2-12 bulan
- Cross-check ke pihak ketiga perlu surat resmi, bisa nunggu berbulan

### Setelah Coretax: Audit Dashboard Real-Time

- Fiskus buka dashboard WP → semua data sudah tampil: SPT, pembayaran, bukti potong dari pihak ketiga, faktur pajak
- Sistem otomatis flag anomali (misal: biaya gaji vs bukti potong mismatch, faktur pajak masukan dari WP yang "tidak aktif")
- Cross-check ke pihak ketiga real-time (database DJP sendiri sudah punya datanya)
- Audit bisa selesai dalam **minggu** bukan **bulan**

### Contoh: Audit SPT Badan PT Maju Jaya 2025

\`\`\`
[Fiskus buka dashboard PT Maju Jaya:]
- Omzet: Rp 50M (dari SPT)
- Biaya gaji: Rp 12M (dari SPT)
- Bukti potong PPh 21 dari employer: Rp 12M ✅ MATCH
- Biaya sewa: Rp 5M (dari SPT)
- Bukti potong PPh Final sewa: Rp 5M ✅ MATCH
- Biaya jasa: Rp 8M (dari SPT)
- Bukti potong PPh 23 jasa: Rp 6M ⚠️ SELISIH Rp 2jt!
- Pembelian BKP: Rp 20M
- Faktur masukan: Rp 18M ⚠️ SELISIH Rp 2jt!

[Sistem otomatis flag:]
- 2 potensi selisih, total Rp 4jt
- Fiskus bisa langsung kirim Surat Paksa untuk klarifikasi
\`\`\`

> **Implikasi:** Audit jadi cepat & murah buat DJP. Konsekuensinya, **frekuensi audit bakal naik**. WP yang dulu "aman-aman saja" karena audit jarang, sekarang harus siap di-audit kapan saja.

## 📊 Dampak 5: Peran Konsultan Pajak Berubah (dari Input Data ke Advisory)

Ini dampak **paling besar buat industri konsultan pajak**, termasuk buat kamu yang bakal ambil Brevet AB!

### Sebelum Coretax: Konsultan = "Tukang Ketik Pajak"

Banyak konsultan pajak — terutama level junior / klerikal — kerjanya:

- Input data SPT (gaji karyawan, faktur pajak, dll) ke aplikasi e-SPT / e-Faktur
- Rekap bukti potong manual
- Hitung pajak pakai excel
- Cek & double-cek kesalahan input
- Bawa berkas ke KPP

Hasil: 80% waktu habis buat **input data**. Cuma 20% buat advisory.

### Setelah Coretax: Konsultan = "Strategist Pajak"

Dengan Coretax, input data jadi otomatis (pre-populated). Kerjaan konsultan geser ke:

- **Tax planning** — Strategi minimasi pajak yang legal (misal: pilihan tarif PPh UMKM vs PPh badan)
- **Advisory transaksi** — Struktur transaksi yang efisien pajaknya (merger, akuisisi, rest rukturisasi)
- **Audit defense** — Pendamping saat DJP audit, negosiasi, keberatan, banding
- **Compliance review** — Review SPT yang sudah pre-populated, pastikan nggak ada error
- **Risk management** — Identifikasi risiko pajak sebelum DJP ketemu
- **International tax** — Pindah ke BEPS 2.0 / Pillar Two, transfer pricing, P3B

Hasil: 20% waktu buat compliance, 80% buat **value-added services**.

### Apa yang Harus Dilakuin Konsultan Muda?

Kalau kamu lagi ambil Brevet AB & mau kerja di konsultan pajak, ini skill yang harus kamu kejar:

1. **Paham dalam UU Pajak** — HPP, KUP, PPN, PPh final, PPh 26, P3B (Brevet AB = pondasi)
2. **Paham Coretax teknis** — Bisa operasional sistem (input, sign, resolve warning)
3. **Tax planning** — Strategi minimasi pajak yang legal
4. **Audit defense** — Skill negosiasi dengan fiskus
5. **Transfer pricing & international** — Untuk klien korporasi besar

> **Peluang:** Konsultan yang nggak bisa adapt = kehilangan pekerjaan. Konsultan yang adapt = naik kelas jadi strategic advisor, fee lebih besar.

## 🐛 Dampak 6: Bug Awal & Komplain Transisi (Yang Masih Terasa Sampai 2026)

Walau Coretax udah stabil per Agustus 2026, masih ada beberapa bug/komplain yang sering muncul:

### Bug yang Masih Ada per 2026

| Bug | Dampak | Workaround |
|-----|--------|------------|
| Format tanggal beda di modul berbeda | SPT ke-reject kalau format salah | Pakai format YYYY-MM-DD konsisten |
| Validasi NPWP terlalu ketat | NPWP valid kadang dianggap invalid | Cek di DJP Online lama, atau hubungi KPP |
| Bukti potong "hilang" saat refresh | Kadang perlu clear cache / log out-in | Restart browser, atau pakai incognito |
| Faktur pajak menumpuk | Daftar faktur bisa lambat di-load | Filter berdasarkan tanggal, jangan load semua |
| Sertifikat elektronik kadang error | Sign SPT gagal | Update driver sertifikat, atau re-install |
| Helpdesk respons lambat (3-7 hari) | Untuk masalah teknis kompleks | Gabung komunitas praktisi (Ortax, forum konsultan) |

### Komplain yang Paling Sering Muncul

Berdasarkan feedback komunitas konsultan pajak Indonesia (Ortax.org, forum praktisi):

1. **"Sistem lambat di jam sibuk"** — mendekati deadline SPT, server overwhelmed
2. **"Tutorial nggak jelas"** — dokumentasi resmi DJP kadang minim, banyak trial-error
3. **"Sanksi pasal 7 KUP (telat lapor) tetap berlaku walau karena sistem"** — DJP kadang nggak akomodasi sanksi walau error sistem
4. **"Update sistem mendadak"** — fitur berubah tanpa sosialisasi cukup
5. **"API untuk integrasi ERP belum stabil"** — untuk perusahaan besar yang mau otomasi

> **Strategi praktisi:** (1) Lapor SPT jauh sebelum deadline (min 7 hari), (2) Backup data lokal, (3) Join komunitas praktisi buat update workaround, (4) Dokumentasi setiap error code buat knowledge base internal.

## 🚨 Dampak 7: Siapa yang Harus Waspada?

Dengan Coretax, beberapa kategori WP harus **ekstra waspada**:

### 1. WP dengan Gaji Fiktif (Karyawan Bohongan)

Perusahaan yang catat "biaya gaji" untuk karyawan yang nggak ada (untuk ngurangin laba kena pajak) → **bakal ketahuan** karena:

- Karyawan fiktif nggak punya NPWP / BPJS yang valid
- Bukti potong PPh 21 yang dibuat nggak akan match dengan SPT "karyawan" tersebut (karena nggak ada)
- Bank data: gaji yang dibayar harus masuk rekening seseorang

### 2. WP dengan Biaya Fiktif (Nota Palsu)

Perusahaan yang catat "biaya operasional" dengan nota palsu (untuk ngurangin laba) → **bakal ketahuan** karena:

- Nota palsu nggak punya faktur pajak PPN yang valid (faktur harus terdaftar di Coretax)
- PPh 23 atas jasa yang dibayar harus dipotong & dilaporkan → kalau nggak ada bukti potong, biaya ditolak
- Matching faktur masukan vs SPT pembeli → kalau mismatch, flag

### 3. WP dengan SPT Tidak Akurat

WP yang lapor SPT dengan data yang nggak akurat (misal: nggak masukin semua penghasilan) → **bakal ketahuan** karena:

- SPT pre-populated dari data pihak ketiga → kalau WP "lupa" masukin penghasilan, sistem flag
- Cross-check antara SPT OP dengan SPT badan (gaji karyawan vs biaya gaji employer)

### 4. WP dengan Transaksi "Off the Books"

Bisnis yang punya penjualan "off the books" (nggak di-faktur / nggak di-catat) → **bakal ketahuan** karena:

- Penjualan via rekening bank bisa di-cross-check (data DJP dari bank)
- Penjualan via e-commerce / marketplace bisa di-cross-check (data dari platform)
- Penjualan via kartu kredit bisa di-cross-check (data dari bank penerbit kartu)

### 5. WP yang Belum Adaptasi Coretax

WP yang masih konservatif (makai cara lama, manual, "nanti kalau diaudit baru urus") → **bakal ketinggalan** karena:

- Tidak manfaatkan pre-populated → bisa double input / salah
- Tidak aware atas warning auto-match → missed deadline klarifikasi
- Tidak siap audit dashboard → kaget saat DJP panggil

> **Tip Brevet AB:** Ingat! Di era Coretax, **transparansi adalah kunci**. WP yang transparan & jujur akan dipermudah, WP yang "akal-akalan" akan kerepotan.

## 📈 Dampak Positif Coretax yang Sering Luput

Walau banyak bahas dampak negatif/beban, Coretax juga bawa dampak positif yang signifikan:

1. **WP jujur lebih ringan** — Lapor SPT jadi cepat & murah
2. **Restitusi lebih cepat** — Bagi WP yang berhak restitusi, proses jadi lebih transparan (asal SPT match & data lengkap)
3. **Audit lebih adil** — Bukan subjektif fiskus, tapi data-driven
4. **Kepatuhan sukarela naik** — Sistem yang gampang = lebih banyak WP yang lapor sukarela
5. **Penerimaan negara naik** — Target pajak 2026 tembus Rp 2.800T+ karena kebocoran berkurang
6. **Daya saing Indonesia naik** — Sistem perpajakan modern → investor lebih percaya

> **Filosofi:** Coretax bukan musuh WP, tapi **partner transparansi**. WP jujur = sistem teman. WP nakal = sistem polisi.

## 🧮 Kasus Nyata: Restauran yang "Lupa" Lapor 1 Cashier

Bu Ani punya 3 cabang restoran. Di salah satu cabang, kasirnya "ngumpulin" uang cash tanpa di-faktur (untuk ngurangin omzet yang dilaporkan). Sebelum Coretax, ini aman-aman saja (DJP nggak punya data real-time).

Setelah Coretax, begini ceritanya:

**Bulan 1-3:**
- Bu Ani lapor SPT Masa PPN dengan omzet cabang "rendah"
- Coretax auto-match data bank: ada deposit harian Rp 5-7jt ke rekening restoran, tapi omzet yang dilaporkan cuma Rp 3-4jt
- Sistem flag: "Potensi under-reporting"
- DJP panggil Bu Ani untuk klarifikasi

**Bulan 4:**
- Bu Ani terpaksa akui ada cashier "off the books"
- DJP terbitkan SKPKB untuk 3 bulan terakhir + sanksi kelalaian Pasal 13(2) (1.85%/bln × 3 bln × pajak kurang bayar)
- Plus sanksi Pasal 8(2) bunga 1.02%/bln × 3 bln
- Total sanksi: ~50% dari pajak yang kurang bayar

**Pelajaran:** Di era Coretax, **uang yang masuk rekening = data yang dilihat DJP**. Restoran yang masih ada "cashier off the books" harus segera rapihkan sistem.

## 📋 Ringkasan Akhir Lesson 3

Coba deh kamu jawab singkat:

- Apa paradox Coretax buat WP? *(Lebih gampang lapor, tapi lebih ketat soal data)*
- Apa konsekuensi mismatch bukti potong vs SPT? *(Warning, panggilan klarifikasi, atau SKPKB)*
- Bagaimana transparansi data gaji karyawan di Coretax? *(Gaji karyawan otomatis terlihat DJP real-time)*
- Apa dampak Coretax buat peran konsultan pajak? *(Geser dari input data ke advisory/strategi)*
- Siapa WP yang harus waspada? *(Gaji fiktif, biaya fiktif, SPT tidak akurat, transaksi off the books)*

Kalau udah bisa jawab, ayo ke lesson terakhir: **recap update pajak 2026**! Ini bab pamungkas yang nyatuin semua materi Brevet AB kamu. 🎓`,
      keyPoints: [
        "Coretax = pisau bermata dua: lebih gampang lapor SPT, tapi lebih ketat soal data (auto-matching, warning)",
        "Mismatch bukti potong vs SPT = warning otomatis + DJP bisa panggil/SKPKB + sanksi Pasal 8/13 KUP",
        "Transparansi data gaji: data gaji karyawan otomatis terlihat DJP real-time (via e-Bupot employer)",
        "Audit jadi cepat & otomatis: fiskus lihat dashboard real-time, cross-check ke pihak ketiga langsung",
        "Peran konsultan pajak berubah: dari input data (80%) jadi advisory/strategi (80%)",
        "Bug awal masih ada per 2026: format tanggal, validasi NPWP, sertifikat elektronik error — workaround = lapor sebelum deadline + backup data",
        "WP yang harus waspada: gaji fiktif, biaya fiktif (nota palsu), SPT tidak akurat, transaksi off the books",
        "Dampak positif: WP jujur lebih ringan, restitusi lebih cepat, audit adil (data-driven), penerimaan negara naik",
        "Filosofi: Coretax = partner transparansi buat WP jujur, polisi buat WP nakal",
      ],
      quiz: [
        {
          id: "ch12-l03-q1",
          question: "Apa paradox utama dampak Coretax buat Wajib Pajak?",
          options: [
            "Lebih sulit lapor SPT, tapi lebih longgar soal data",
            "Lebih mudah lapor SPT, tapi lebih ketat soal data (auto-matching)",
            "Lebih mudah lapor SPT, dan lebih longgar soal data",
            "Lebih sulit lapor SPT, dan lebih ketat soal data",
          ],
          correctIndex: 1,
          explanation:
            "Paradox Coretax: lebih gampang lapor (pre-populated, built-in), TAPI lebih ketat soal data (auto-matching bukti potong vs SPT). WP jujur seneng, WP nakal kerepotan.",
          difficulty: "mudah",
        },
        {
          id: "ch12-l03-q2",
          question: "Apa yang terjadi jika Pak Joko melaporkan gaji Rp 200jt di SPT, padahal bukti potong dari employer-nya adalah Rp 240jt?",
          options: [
            "Tidak terjadi apa-apa, sistem tidak mengecek",
            "Coretax otomatis flag 'MATCH WARNING' dan DJP bisa panggil klarifikasi atau terbitkan SKPKB",
            "SPT otomatis di-approve dengan gaji yang dilaporkan Pak Joko",
            "Coretax menghapus bukti potong dan pakai data Pak Joko",
          ],
          correctIndex: 1,
          explanation:
            "Coretax auto-match: kalau SPT vs bukti potong beda, sistem kirim warning, DJP bisa panggil klarifikasi atau terbitkan SKPKB dengan sanksi Pasal 8(2) KUP (1.02%/bln) dan/atau Pasal 13(2) (1.85%/bln).",
          difficulty: "sedang",
        },
        {
          id: "ch12-l03-q3",
          question: "Bagaimana dampak Coretax terhadap peran konsultan pajak?",
          options: [
            "Peran konsultan pajak dihapuskan total",
            "Konsultan pajak hanya boleh bekerja untuk WP badan",
            "Geser dari 'input data' (80%) menjadi 'advisory/strategi' (80%)",
            "Konsultan pajak tidak boleh menggunakan Coretax",
          ],
          correctIndex: 2,
          explanation:
            "Karena SPT pre-populated & input otomatis, kerjaan konsultan geser dari input data ke advisory (tax planning, audit defense, transfer pricing, international tax). Nilai tambah konsultan naik kelas.",
          difficulty: "sedang",
        },
        {
          id: "ch12-l03-q4",
          question: "Berikut kategori WP yang HARUS EKSTRA WASPADA di era Coretax, KECUALI:",
          options: [
            "WP dengan gaji fiktif (karyawan bohongan)",
            "WP dengan biaya fiktif (nota palsu)",
            "WP orang pribadi yang lapor SPT dengan benar",
            "WP dengan transaksi off the books (penjualan tidak di-faktur)",
          ],
          correctIndex: 2,
          explanation:
            "WP yang lapor SPT dengan benar justru DIPERMUDAH di Coretax (SPT pre-populated, status real-time). Yang harus waspada = gaji fiktif, biaya fiktif, SPT tidak akurat, transaksi off the books. Coretax auto-match akan ketahuan.",
          difficulty: "sulit",
        },
        {
          id: "ch12-l03-q5",
          question: "Restoran Bu Ani melakukan 'cashier off the books' (penjualan cash tidak di-faktur). Apa yang paling mungkin menyebabkan hal ini ketahuan di Coretax?",
          options: [
            "Tetangga melaporkan ke DJP",
            "Auto-match data bank: deposit harian ke rekening vs omzet yang dilaporkan tidak sinkron",
            "Coretax tidak memeriksa data bank",
            "Hanya bisa ketahuan kalau ada audit fisik di lokasi",
          ],
          correctIndex: 1,
          explanation:
            "Coretax bisa cross-check data bank (deposit ke rekening restoran) dengan omzet SPT yang dilaporkan. Kalau deposit harian Rp 5-7jt tapi omzet dilaporkan Rp 3-4jt, sistem flag 'potensi under-reporting' dan DJP panggil WP.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Restoran Bu Ani & Cashier Off the Books",
        description:
          "Bu Ani punya 3 cabang restoran. Salah satu cabang melakukan 'cashier off the books' (penjualan cash tidak di-faktur untuk mengurangi omzet yang dilaporkan). Sebelum Coretax aman-aman saja, tapi setelah Coretax, dalam 3 bulan Bu Ani sudah dapat panggilan DJP. Apa yang seharusnya Bu Ani lakukan?",
        solution:
          "Yang seharusnya Bu Ani lakukan: (1) Segera rapikan semua cashier — semua penjualan (termasuk cash) harus di-faktur & dicatat; (2) Lapor SPT yang benar untuk periode sebelumnya (voluntary disclosure) sebelum DJP terbitkan SKPKB; (3) Siapkan dana untuk bayar pajak kurang bayar + bunga Pasal 8(2) 1.02%/bln × masa + sanksi kelalaian Pasal 13(2) 1.85%/bln × masa; (4) Konsultasi dengan konsultan pajak buat strategi mitigasi (mungkin bisa negosiasi sanksi kalau voluntary disclosure sebelum DJP ketemu); (5) Implementasi POS (point of sale) system yang terintegrasi dengan Coretax buat semua cabang; (6) Training staff cashier tentang kepatuhan pajak. Pelajaran: di era Coretax, transparansi data bank + auto-match = hampir mustahil hide. Lebih baik proaktif rapihin daripada nunggu ketahuan DJP.",
      },
      tags: [
        "dampak Coretax",
        "auto-matching",
        "transparansi data",
        "WP nakal",
        "peran konsultan",
        "audit pajak",
        "gaji fiktif",
        "off the books",
      ],
    },

    // =========================================================================
    // LESSON 4: RINGKASAN UPDATE PAJAK 2026 (FINALE)
    // =========================================================================
    {
      id: "ch12-l04",
      slug: "update-pajak-2026",
      title: "Ringkasan Update Pajak 2026: Semua yang Wajib Kamu Hafal!",
      subtitle:
        "Recap lengkap update pajak 2026: PPN 12%/11% via DPP Nilai Lain; PPh OP 5 lapis 5-35%; PPh badan 22%/19%/11%; PTKP TK/0=54jt; biaya jabatan max 6jt/thn; UMKM 0.5%; bea materai Rp 10.000; bunga MIR 0.6%/bln (KMK 35/MK/EF.2/2026); Carbon Tax Rp 30/kg CO2e; Pillar Two UTPR 2026; PPh 22 marketplace ditunda PENG-46/PJ.09/2026; PPS belum ada program baru; EV incentive H2 2026",
      type: "ringkasan",
      difficulty: "mahir",
      estimatedMinutes: 32,
      content: `# 🎓 Ringkasan Update Pajak 2026: Cheat Sheet Brevet AB!

Selamat! Kamu udah sampai di **lesson terakhir** seluruh materi Brevet AB! 🎉 Di lesson ini, kita bakal rekap **semua update pajak 2026** yang udah kamu pelajari di bab-bab sebelumnya. Pelajari ini baik-baik, ini adalah **cheat sheet** buat ujian & dunia kerja nyata.

Yuk, kita mulai dari yang paling penting!

## 💰 1. PPN (Pajak Pertambahan Nilai) 2026

PPN 2026 punya cerita yang **bikin heboh** awal tahun ini. Banyak yang ngira tarifnya naik jadi 12%, tapi ternyata pemerintah pakai trik "DPP Nilai Lain" biar efektif tetep 11%.

### Tarif PPN 2026

| Aspek | Tarif | Dasar Hukum |
|-------|-------|-------------|
| Tarif headline (UU) | 12% | UU HPP 7/2021 Pasal 7 |
| DPP Nilai Lain | 11/12 | PP implementasi |
| **Tarif efektif (mayoritas BKP/JKP)** | **11%** | 12% × 11/12 = 11% |
| Tarif penuh (barang mewah tertentu) | 12% | Contoh: mobil mewah, rumah mewah |
| Tarif minimum (bisa diturunkan ke) | 5% | Dengan persetujuan DPR |
| Tarif maksimum (bisa dinaikkan ke) | 15% | Dengan persetujuan DPR |

### Cara Hitung PPN Efektif

\`\`\`
PPN = Tarif PPN × DPP
PPN = 12% × (11/12 × Harga Jual)
PPN = 11% × Harga Jual

Contoh: Harga jual Rp 1.000.000
PPN efektif = 11% × 1.000.000 = Rp 110.000
Total dibayar pembeli = Rp 1.110.000
\`\`\`

### Untuk Barang Mewah (Tarif Penuh 12%)

\`\`\`
PPN = 12% × Harga Jual (tanpa DPP Nilai Lain)

Contoh: Mobil mewah Rp 1.000.000.000
PPN = 12% × 1M = Rp 120.000.000
Plus PPnBM (tergantung jenis): 10%-95%
\`\`\`

### Yang 0% (Dibebaskan)

- Ekspor BKP
- Ekspor JKP / BKP tak berwujud
- Penyerahan BKP ke Kawasan Ekonomi Khusus (KEK) tertentu

### Yang Tidak Kena PPN (Bukan Objek)

- Hasil pertanian/perikanan/perkebunan (belum diproses)
- Kebutuhan pokok (beras, jagung, kedelai, gandum, gula pasir)
- Air dari sumbernya
- Makanan & minuman yang disajikan di hotel/restoran (kena Pajak Daerah)
- Emas batangan & perhiasan
- Jasa kesehatan, pendidikan, asuransi, keagamaan, transportasi umum, perhotelan, parkir

> **Tip ujian:** PPN 12% adalah **tarif headline**, tapi **efektif 11%** buat mayoritas. Ini sering bikin salah di ujian. Selalu cek: "tarif PPN" vs "tarif efektif PPN".

## 👤 2. PPh Orang Pribadi 2026 (5 Lapis)

PPh OP 2026 masih pakai 5 lapis progresif sesuai UU HPP 7/2021 (sejak 2022, nggak berubah sampai 2026).

### Tabel Tarif PPh OP 2026

| Lapisan | Penghasilan Kena Pajak (PKP)/Tahun | Tarif |
|---------|------------------------------------|-------|
| I | s/d Rp 60.000.000 | 5% |
| II | Rp 60.000.001 - Rp 250.000.000 | 15% |
| III | Rp 250.000.001 - Rp 500.000.000 | 25% |
| IV | Rp 500.000.001 - Rp 5.000.000.000 | 30% |
| V | di atas Rp 5.000.000.000 | 35% |

### Contoh Hitung PPh OP

Pak Andi, TK/0, penghasilan neto setahun Rp 300.000.000.

\`\`\`
PTKP TK/0 = Rp 54.000.000
PKP = 300.000.000 - 54.000.000 = Rp 246.000.000

PPh terutang:
- Lapisan I: 5% × 60.000.000 = Rp 3.000.000
- Lapisan II: 15% × 186.000.000 = Rp 27.900.000
(sisa PKP 186jt masih di lapis II karena < 250jt)

Total PPh terutang = Rp 30.900.000
\`\`\`

### PTKP 2026 (TIDAK BERUBAH dari 2016!)

| Status | PTKP/Tahun |
|--------|------------|
| TK/0 (lajang) | Rp 54.000.000 |
| K/0 (kawin tanpa tanggungan) | Rp 58.500.000 |
| K/1 | Rp 63.000.000 |
| K/2 | Rp 67.500.000 |
| K/3 (maksimal) | Rp 72.000.000 |

> **Penting:** Walaupun UU HPP 7/2021 (Pasal 31A) ada bahasa "PTKP bisa menpertimbangkan UMK", tapi implementing regulation-nya **belum terbit** per 2026. PTKP masih flat, nggak region-based.

### Biaya Jabatan 2026

- 5% dari penghasilan bruto bulanan
- Maksimum Rp 500.000/bulan = **Rp 6.000.000/tahun**

\`\`\`
Contoh: Gaji Rp 10.000.000/bulan
Biaya jabatan = 5% × 10.000.000 = Rp 500.000/bulan (capped)
Per tahun = Rp 6.000.000
\`\`\`

> **Hafal:** Biaya jabatan MAX = Rp 6jt/thn. Bukan Rp 6jt/bulan!

## 🏢 3. PPh Badan 2026

| Jenis WP Badan | Tarif |
|----------------|-------|
| Standar | 22% |
| Perusahaan go-public (≥40% saham di IDX) | 19% (efektif, -3% diskon) |
| Badan kecil (omzet ≤ Rp 50M, proporsional sampai omzet Rp 4,8M) | 11% (efektif, 50% diskon) |
| UMKM (omzet ≤ Rp 4,8M/thn) | 0,5% Final PPh 4(3) |

### Khusus UMKM 0,5% Final

- Tarif: 0,5% dari omzet bruto per bulan
- Dasar hukum: PP 23/2018 (sementara), dibuat permanen oleh UU HPP 7/2021
- Pengecualian: WP orang pribadi UMKM tidak kena PPh atas omzet bruto sampai Rp 500jt dalam satu tahun

\`\`\`
Contoh: Toko kelontong omzet Rp 30jt/bulan = Rp 360jt/thn
PPh Final = 0,5% × 30jt = Rp 150.000/bulan
Per tahun = Rp 1.800.000 (sangat ringan!)
\`\`\`

### Loss Carry-Forward

- 5 tahun maksimum (umum)
- 10 tahun untuk industri perintis tertentu (tax holiday)
- Tidak ada carry-back

## 🧾 4. PPh 21 (Pegawai) 2026

- Menggunakan tarif progresif 5 lapis PPh OP (sama dengan di atas)
- Biaya jabatan: 5% max Rp 500K/bulan = Rp 6jt/thn
- PTKP: sesuai status (TK/0, K/0, K/1, K/2, K/3)

### PPh 21 Harian (PMK 168/PMK.03/2023)

- Upah harian ≤ Rp 450K: 0% (jika kumulatif tahunan < PTKP)
- Upah harian > Rp 450K: progresif 5 lapis

### Pisah Penerimaan Kerja (Final, jika dibayar sekaligus/2 tahun)

| Penerimaan | Tarif Final |
|------------|-------------|
| s/d Rp 50jt | 0% |
| Rp 50jt - Rp 100jt | 5% |
| Rp 100jt - Rp 500jt | 15% |
| di atas Rp 500jt | 25% |

## 💸 5. PPh 22, 23, 26 — 2026

### PPh 22 (Pemungut Pihak Ketiga)

| Kegiatan | Tarif |
|----------|-------|
| Impor barang tertentu (end-customer) | 10% / 7,5% |
| Impor kedelai, gandum, tepung terigu | 0,5% |
| Impor lainnya (dengan API) | 2,5% |
| Impor lainnya (tanpa API) | 7,5% |
| Pembelian BUMN / Pemerintah | 1,5% |
| Bahan bakar SPBU dari Pertamina | 0,25% |
| Bahan bakar SPBU non-Pertamina | 0,3% |

### PPh 23 (WHT Domestik)

| Objek | Tarif |
|-------|-------|
| Jasa (umum) | 2% |
| Bunga, royalti, hadiah | 15% |
| Sewa mesin/alat (non-tanah/bangunan) | 2% |

### PPh 26 (WHT Non-Resident)

| Objek | Tarif |
|-------|-------|
| Tarif umum | 20% |
| Bunga obligasi (tanpa PE) | 10% |
| Tarif P3B (Pajak Pertukaran Barang) | Beragam, tergantung negara |

> **Penting:** Tanpa Certificate of Domicile (CoD), tarif 20% berlaku regardless of P3B. WP LN harus selalu siapkan CoD!

## 🏗️ 6. PPh Final 4(3) — 2026

| Jenis Penghasilan | Tarif Final |
|-------------------|-------------|
| Sewa tanah & bangunan | 10% |
| Sewa aset lain (mesin, dll) | 2% (kredit, bukan final) |
| Pengalihan hak tanah & bangunan | 2,5% |
| Konstruksi — kecil | 1,75% |
| Konstruksi — sedang | 2,65% |
| Konstruksi — besar | 4% |
| Konsultasi konstruksi — kecil | 3,5% |
| Konsultasi konstruksi — besar | 6% |
| Bunga deposito & SBI | 20% |
| Bunga obligasi | 10% |
| Penjualan saham di IDX | 0,1% (founder IPO: 0,5%) |
| Hadiah undian | 25% |
| **UMKM (omzet ≤ Rp 4,8M/thn)** | **0,5%** |
| Dividen (WP OP DN, tidak reinvest) | 10% |

## 🏛️ 7. PBB & BPHTB 2026

### PBB (Pajak Bumi & Bangunan)

- Tarif maksimum: 0,5%
- DPP: NJOP × 20%-100% (ditetapkan Pemda)
- NJOP tidak kena pajak minimum: Rp 10.000.000
- PBB P2 (Perdesaan & Perkotaan) dipungut Pemda Kab/Kota
- PBB Perkebunan/Perhutani/Pertambangan terpisah

### BPHTB (Bea Perolehan Hak Tanah & Bangunan)

- Tarif maksimum: 5%
- DPP: max(harga transaksi, NPOP) - NPOPTKP
- NPOPTKP minimum: Rp 80.000.000 (umum), Rp 300.000.000 (warisan)

## 📑 8. Bea Materai 2026

| Aspek | Ketentuan |
|-------|-----------|
| Dasar hukum | UU 10/2020 (efektif 1 Jan 2021) |
| Tarif | **Rp 10.000/dokumen** (fixed, tidak lagi Rp 3K/6K) |
| Dokumen yang kena | Dokumen dengan nilai > Rp 5jt, perjanjian, kontrak, laporan keuangan, MoU, dll |
| Bea materai elektronik | Berlaku sejak 1 Jan 2022 (e-Stamp) |

> **Hafal:** Bea Materai 2026 = **Rp 10.000 per dokumen**. Tidak ada lagi tier Rp 3.000/Rp 6.000 seperti UU lama 13/1985.

## 📉 9. Bunga MIR (Monthly Interest Rate) 2026

Bunga MIR/bulan Agustus 2026: **0,6%/bulan** (dasar: **KMK 35/MK/EF.2/2026**, berlaku 1-31 Agustus 2026). Ini base rate buat hitung sanksi & bunga pajak.

### Tabel Sanksi & Bunga per Pasal KUP (Multiplier MIR)

| Pasal KUP | Deskripsi | Multiplier | Tarif/Bulan |
|-----------|-----------|------------|-------------|
| 19(1), 19(2), 19(3) | Telat bayar pajak | 1× | **0,6%** |
| 8(2), 8(2a), 9(2a), 9(2b), 14(3) | SKPKB (kurang bayar) | 1,7× | **1,02%** |
| 8(5) | SKPKB kasus khusus | 2,4× | **1,44%** |
| 13(2), 13(2a) | Sanksi kelalaian | ~3,083× | **1,85%** |
| 13(3b) | Sanksi pengemplangan (voluntary disclosure) | ~3,783× | **2,27%** |
| 11(3), 17B(3), 17B(4), 27B(4) | Imbalan bunga (overpaid/refund ke WP) | 1× | **0,6%** |

### Sanksi Telat Lapor (Pasal 7 KUP, Fixed Amount)

| Jenis SPT | Sanksi |
|-----------|--------|
| SPT Masa PPN | Rp 500.000 |
| SPT Masa lainnya (PPh 21, 22, 23, 26, dll) | Rp 100.000 |
| SPT Tahunan PPh Badan | Rp 1.000.000 |
| SPT Tahunan PPh OP | Rp 100.000 |

### Cap Bunga MIR

- Maksimum: **24 bulan** (akumulasi)
- Sebagian bulan dihitung 1 bulan penuh
- Setelah 24 bulan: bisa kena sanksi pidana

### Statute of Limitations

- Pemeriksaan & penetapan pajak: **5 tahun** (umum)
- Lebih dari 5 tahun: jarang bisa di-audit (kecuali ada indikasi pidana)

## 🌡️ 10. Carbon Tax (Pajak Karbon) 2026

Carbon Tax diatur di UU HPP 7/2021 Pasal 13-17.

| Aspek | Ketentuan 2026 |
|-------|-----------------|
| Tarif minimum | **Rp 30/kg CO2e** (atau harga kredit karbon di pasar domestik, ambil yang lebih rendah) |
| Implementasi cap-and-trade | Hanya **PLTU** (Pembangkit Listrik Tenaga Uap berbahan batubara) — efektif sejak 2022 |
| Implementasi pembelian barang karbon | Belum diimplementasi (dijadwalkan tapi belum jalan) |
| Self-remittance & annual reporting | Belum diimplementasi |
| Ekspansi sektor (PP 40/2025) | **Roadmap** di PP 40/2025 (Kebijakan Energi Nasional): transportasi, industri non-power, dll — bergantung kesiapan sektor |

> **Tip ujian:** Carbon Tax saat ini **hanya berlaku untuk PLTU**. Sektor lain belum, tapi **PP 40/2025** sudah siapkan roadmap ekspansi.

## 🌍 11. Pillar Two (BEPS 2.0 / GloBE) — 2026

Pillar Two = kerangka OECD buat MNC (Multinational Corporation) dengan konsolidasi omzet ≥ EUR 750M.

### Timeline Implementasi

| Aturan | Efektif Sejak |
|--------|---------------|
| QDMTT (Qualified Domestic Minimum Top-up Tax) | **1 Januari 2025** |
| IIR (Income Inclusion Rule) | **1 Januari 2025** |
| **UTPR (Undertaxed Profits Rule)** | **1 Januari 2026** |
| STTR (Subject-to-Tax Rule) | MLI signed 19 Sep 2024, 29 treaties (pending ratifikasi) |

### Dampak buat MNC di Indonesia

- MNC dengan konsolidasi omzet ≥ EUR 750M harus hitung Effective Tax Rate (ETR) per yurisdiksi
- Kalau ETR < 15%, ada top-up tax
- Tax Holiday recipients: sekarang kena top-up tax domestic (mulai 9 Okt 2024)

> **Penting 2026:** **UTPR efektif 1 Januari 2026** — kewajiban baru buat MNC, fitur GloBE proposal di Coretax masih dalam development (per Agustus 2026).

## 🛒 12. PPh 22 Marketplace (E-commerce WHT) — DITUNDA 2026

PPh 22 atas transaksi marketplace sempat **ditunda beberapa kali** di 2026.

| Tanggal | Status | Dasar Hukum |
|---------|--------|-------------|
| Awal 2026 | Direncanakan efektif | PMK asli |
| Pertengahan 2026 | Ditunda (PMK penundaan disiapkan) | — |
| **5 Agustus 2026** | **Ditunda lagi** | **PENG-46/PJ.09/2026** |

> **Status per Agustus 2026:** Belum efektif. PMK penundaan terus diperpanjang. WP marketplace (Tokopedia, Shopee, dll) belum wajib memungut PPh 22 sampai ada PMK baru yang menetapkan tanggal efektif.

## 🚗 13. EV Tax Incentive (Insentif Kendaraan Listrik) — H2 2026

Pemerintah sedang **menyiapkan insentif pajak untuk kendaraan listrik** (mobil dan motor listrik) di semester kedua (H2) 2026.

- Bentuk: kemungkinan diskon PPN, PPnBM, atau PPh
- Tujuan: percepat adopsi kendaraan listrik (BEP target)
- Status per Agustus 2026: dalam pembahasan, detail PMK belum final

> **Perkiraan:** Insentif bakal mirip dengan program KBH (Kendaraan Bermotor Hemat Energi) sebelumnya, dengan kombinasi: PPN DTP 0%, PPnBM diskon, atau PPh diskon.

## 🤝 14. PPS (Program Pengungkapan Sukarela) — Belum Ada Program Baru 2026

Status per Agustus 2026: **belum ada program PPS baru**.

| Program PPS | Periode | Tarif |
|-------------|---------|-------|
| Tax Amnesty 2016 | 2016 | 0,5%-4% |
| PPS 2022 (PMK 143/PMK.03/2022) | 1 Jan - 30 Jun 2023 | 12,5%-15% (regular), 12,5%-18% (PE-foreign) |
| **PPS 2026** | **Belum ada** | **Belum ada** |

> **Catatan:** Walau belum ada PPS nasional baru, beberapa daerah punya pemutihan pajak daerah (PKB/BBN-KB) — misal Bangka Belitung sampai Oktober 2026, Jatim untuk ojek online di Agustus 2026.

## 🏛️ 15. BUMN Consolidation Tax Exemption (Danantara) — Agustus 2026

Pemerintah memberikan **exemption pajak konsolidasi BUMN selama 3 tahun** untuk mempercepat transformasi Danantara (sovereign wealth fund). Tujuan: BUMN bisa konsolidasi tanpa beban pajak transaksi antar-entitas.

## 💱 16. Kurs KMK (Currency Exchange Rate) — Agustus 2026

Berdasarkan KMK 36/MK/EF.2/2026 (5-11 Agustus 2026):

- **1 USD = Rp 18.062**
- Update mingguan oleh Kemenkeu
- Dipakai untuk: konversi transaksi valuta asing, laporan SPT WP LN/BUT, dll

## 📅 17. Deadline SPT 2026 (PENTING!)

| Jenis SPT | Deadline |
|-----------|----------|
| SPT Masa PPh (21, 22, 23, 26) | Tanggal 20 bulan berikutnya |
| SPT Masa PPN | Tanggal 20 bulan berikutnya (jika PKP) |
| SPT Tahunan PPh OP | **31 Maret** (untuk tahun pajak sebelumnya) |
| SPT Tahunan PPh Badan | **30 April** (untuk tahun pajak sebelumnya) |

> **Hafal:** OP = 31 Maret, Badan = 30 April. Lebih dari itu → kena sanksi Pasal 7 KUP.

## 📋 TABEL RINGKASAN SANGAT PENTING — TARIF 2026

| Pajak | Tarif / Jumlah | Dasar Hukum |
|-------|----------------|-------------|
| PPh OP top marginal | 35% | UU HPP 7/2021 |
| PPh OP lapisan | 5% / 15% / 25% / 30% / 35% | UU HPP 7/2021 |
| PTKP TK/0 | Rp 54.000.000 | UU HPP 7/2021 |
| PTKP K/3 (maks) | Rp 72.000.000 | UU HPP 7/2021 |
| Biaya Jabatan | 5%, max Rp 500K/bln = Rp 6jt/thn | UU HPP 7/2021 |
| PPh Badan standar | 22% | UU HPP 7/2021 |
| PPh Badan go-public (≥40%) | 19% (efektif, -3% diskon) | UU HPP 7/2021 |
| PPh Badan kecil (≤Rp 50M) | 11% (efektif, 50% diskon) | UU HPP 7/2021 |
| UMKM Final PPh | 0,5% Final | PP 23/2018 + UU HPP |
| PPN headline | 12% | UU HPP 7/2021 |
| **PPN efektif (DPP 11/12)** | **11%** | PP implementasi |
| PPN barang mewah | 12% (penuh) | PP implementasi |
| PPnBM (LST) | 10%-95% | UU PPN/PPnBM |
| PPh 22 impor (dengan API) | 2,5% | PMK terkait |
| PPh 22 BUMN/Govt | 1,5% | PMK terkait |
| PPh 22 Pertamina SPBU | 0,25% | PMK terkait |
| PPh 23 jasa | 2% | PMK terkait |
| PPh 23 bunga/royalti | 15% | PMK terkait |
| PPh 26 umum | 20% | UU PPh |
| PPh Final sewa tanah/bangunan | 10% | UU PPh |
| PPh Final pengalihan tanah/bangunan | 2,5% | PP 79/2024 dst |
| PPh Final konstruksi kecil | 1,75% | UU PPh |
| PPh Final konstruksi besar | 4% | UU PPh |
| PPh Final bunga deposito | 20% | UU PPh |
| PPh Final saham IDX | 0,1% | UU PPh |
| PBB maksimal | 0,5% | UU HKPD 1/2022 |
| BPHTB maksimal | 5% | UU HKPD 1/2022 |
| NPOPTBP BPHTB minimum | Rp 80jt (umum), Rp 300jt (warisan) | UU HKPD 1/2022 |
| **Bea Materai** | **Rp 10.000/dokumen** | UU 10/2020 |
| **Carbon Tax floor** | **Rp 30/kg CO2e** | UU HPP 7/2021 |
| Bunga MIR Agustus 2026 | **0,6%/bulan** | **KMK 35/MK/EF.2/2026** |
| Sanksi Pasal 19 (telat bayar) | 0,6%/bln | MIR × 1 |
| Sanksi Pasal 8(2) (SKPKB) | 1,02%/bln | MIR × 1,7 |
| Sanksi Pasal 13(2) (kelalaian) | 1,85%/bln | MIR × ~3,083 |
| Telat lapor SPT PPN | Rp 500.000 | Pasal 7 KUP |
| Telat lapor SPT Tahunan Badan | Rp 1.000.000 | Pasal 7 KUP |
| Telat lapor SPT Masa lainnya | Rp 100.000 | Pasal 7 KUP |
| Statute of limitations | 5 tahun | KUP |
| Loss carry-forward | 5 tahun (umum), 10 tahun (pioneer) | UU PPh |
| Pillar Two QDMTT | 1 Jan 2025 | UU HPP |
| Pillar Two IIR | 1 Jan 2025 | UU HPP |
| **Pillar Two UTPR** | **1 Jan 2026** | UU HPP |
| Coretax live | 1 Jan 2025 | DJP |

## 🎯 KASUS NYATA INTEGRATIF: Hitung Pajak PT Maju Jaya 2026

PT Maju Jaya adalah perusahaan manufaktur dengan data 2026:
- Omzet: Rp 50M (di bawah Rp 4,8M? TIDAK. Lebih dari Rp 4,8M. Jadi bukan UMKM)
- Laba sebelum pajak: Rp 8M
- Karyawan: 50 orang, total gaji setahun Rp 1,5M
- PPh 21 dipotong dari karyawan: Rp 100jt total
- Pembelian BKP: Rp 30M (semua ada faktur pajak)
- Penjualan BKP: Rp 50M (semua di-faktur)
- Punya 5 unit kendaraan operasional
- Sewa kantor Rp 200jt/thn

### Hitung PPh Badan

\`\`\`
Laba sebelum pajak: Rp 8.000.000.000
PTKP badan: Rp 0 (badan tidak punya PTKP)
PKP = Rp 8M (asumsi tidak ada koreksi)

PPh Badan = 22% × 8.000.000.000 = Rp 1.760.000.000
\`\`\`

### Hitung PPN

\`\`\`
PPN Keluaran (dari penjualan): 11% × 50.000.000.000 = Rp 5.500.000.000
PPN Masukan (dari pembelian): 11% × 30.000.000.000 = Rp 3.300.000.000
PPN Terutang = 5.500.000.000 - 3.300.000.000 = Rp 2.200.000.000
\`\`\`

### Hitung PPh Final Sewa Kantor

\`\`\`
PPh Final sewa = 10% × 200.000.000 = Rp 20.000.000
(dipotong penyewa, langsung disetor)
\`\`\`

### Hitung PPh 21 (Employer-side)

\`\`\`
Total gaji karyawan: Rp 1.500.000.000
PPh 21 dipotong: Rp 100.000.000
(sudah dipotong per karyawan tiap bulan, disetor via Coretax e-Bupot)
\`\`\`

### Total Pajak PT Maju Jaya 2026

| Jenis Pajak | Jumlah |
|-------------|--------|
| PPh Badan | Rp 1.760.000.000 |
| PPN | Rp 2.200.000.000 |
| PPh Final sewa | Rp 20.000.000 |
| PPh 21 (dipotong karyawan) | Rp 100.000.000 (disetor) |
| **Total** | **Rp 4.080.000.000** |

Plus PBB kantor (daerah), BPHTB (kalau ada transaksi), Bea Materai (kalau ada kontrak/dokumen).

## 🏆 SELAMAT! Kamu Sudah Selesai Brevet AB!

Sobat Brevet AB, **SELAMAT**! 🎉 Kamu udah menyelesaikan seluruh 12 bab materi:

1. ✅ **KUP** — Ketentuan Umum Perpajakan
2. ✅ **Cipta Kerja & HPP** — Tarif baru, asas baru
3. ✅ **PPS** — Program Pengungkapan Sukarela
4. ✅ **PPh OP** — 5 lapis progresif
5. ✅ **PPh Badan** — 22% standar + diskon
6. ✅ **PPh 21** — Pegawai & profesi
7. ✅ **PPh 22, 23, 26** — Pemungutan pihak ketiga
8. ✅ **PPN, PPnBM & PMSE** — Konsumsi & digital
9. ✅ **PBB & BPHTB** — Pajak properti
10. ✅ **Bea Materai & Cukai** — Dokumen & barang konsumsi
11. ✅ **Pajak Daerah & Retribusi** — Pemda
12. ✅ **Coretax & Update Pajak 2026** — Bab pamungkas ini!

### Yang Harus Kamu Lakukan Setelah Ini:

1. **Latihan soal** — Kerjakan soal-soal Brevet AB tahun-tahun sebelumnya
2. **Praktik Coretax** — Coba log in (kalau kamu WP), eksplor dashboard
3. **Update berita pajak** — Follow Ortax.org, DJP social media, akun konsultan pajak terpercaya
4. **Networking** — Join komunitas praktisi pajak
5. **Simulasi ujian** — Time yourself, kerjakan tanpa lihat catatan
6. **Continuing education** — Setelah Brevet AB, lanjut Brevet C (jika perlu), atau pelajari transfer pricing, international tax, Pillar Two

### Pesan Penutup

> "Pajak bukan cuma soal angka & aturan. Pajak adalah soal **integritas, transparansi, dan kontribusi** ke negara. Coretax 2026 bikin kita semua harus lebih jujur — tapi juga lebih efisien. Jadi konsultan pajak (atau WP) yang jujur, paham, dan strategis. Indonesia butuh praktisi pajak yang seperti itu."

Sampai jumpa di ujian! Semoga lulus dengan hasil memuaskan! 💪🇮🇩`,
      keyPoints: [
        "PPN 2026: headline 12% tapi efektif 11% via DPP Nilai Lain (11/12) buat mayoritas; 12% penuh buat barang mewah",
        "PPh OP 2026: 5 lapis progresif 5% (≤60jt) / 15% / 25% / 30% / 35% (>5M)",
        "PTKP 2026 tidak berubah: TK/0 = Rp 54jt, K/3 = Rp 72jt; Biaya Jabatan 5% max Rp 6jt/thn",
        "PPh Badan 2026: 22% standar, 19% go-public (≥40% saham IDX), 11% badan kecil (≤Rp 50M omzet proporsional ≤Rp 4.8M)",
        "UMKM Final 0.5% dari omzet bruto (≤ Rp 4.8M/thn)",
        "Bea Materai Rp 10.000/dokumen (UU 10/2020, sejak 1 Jan 2021)",
        "Bunga MIR Agustus 2026 = 0.6%/bln (KMK 35/MK/EF.2/2026); Pasal 19 = 0.6%, Pasal 8(2) = 1.02%, Pasal 13(2) = 1.85%",
        "Carbon Tax: Rp 30/kg CO2e floor; hanya PLTU yang implementasi, ekspansi via PP 40/2025 (transportasi, industri)",
        "Pillar Two UTPR efektif 1 Jan 2026; IIR & QDMTT sejak 1 Jan 2025",
        "PPh 22 marketplace DITUNDA LAGI per 5 Agustus 2026 (PENG-46/PJ.09/2026)",
        "EV Tax Incentive H2 2026 — dalam pembahasan, detail PMK belum final",
        "PPS: belum ada program baru 2026 (terakhir PPS 2022, selesai 30 Jun 2023)",
        "Deadline SPT: OP 31 Maret, Badan 30 April; SPT Masa tgl 20 bulan berikutnya",
        "Coretax live 1 Jan 2025, vendor BMF TCS",
      ],
      quiz: [
        {
          id: "ch12-l04-q1",
          question: "Berapa tarif PPN efektif untuk mayoritas barang/jasa kena pajak di 2026?",
          options: ["10%", "11%", "12%", "15%"],
          correctIndex: 1,
          explanation:
            "PPN efektif 11% (12% × 11/12 via DPP Nilai Lain) untuk mayoritas BKP/JKP. Tarif 12% penuh hanya untuk barang mewah tertentu.",
          difficulty: "mudah",
        },
        {
          id: "ch12-l04-q2",
          question: "Berapa PTKP TK/0 (lajang, tanpa tanggungan) di tahun 2026?",
          options: [
            "Rp 36.000.000",
            "Rp 54.000.000",
            "Rp 63.000.000",
            "Rp 72.000.000",
          ],
          correctIndex: 1,
          explanation:
            "PTKP TK/0 = Rp 54.000.000 (tidak berubah sejak 2016, walau UU HPP 7/2021 ada bahasa UMK-based tapi implementing regulation belum terbit).",
          difficulty: "mudah",
        },
        {
          id: "ch12-l04-q3",
          question: "Bunga MIR (Monthly Interest Rate) per Agustus 2026 berdasarkan KMK 35/MK/EF.2/2026 adalah:",
          options: [
            "0.5%/bulan",
            "0.6%/bulan",
            "1.02%/bulan",
            "1.85%/bulan",
          ],
          correctIndex: 1,
          explanation:
            "MIR Agustus 2026 = 0.6%/bulan (base rate KMK 35/MK/EF.2/2026). Sanksi Pasal 19 (telat bayar) = MIR × 1 = 0.6%/bln. Pasal 8(2) SKPKB = MIR × 1.7 = 1.02%/bln. Pasal 13(2) kelalaian = MIR × ~3.083 = 1.85%/bln.",
          difficulty: "sedang",
        },
        {
          id: "ch12-l04-q4",
          question: "Sanksi telat lapor SPT Masa PPN per Pasal 7 KUP (2026) adalah:",
          options: [
            "Rp 100.000",
            "Rp 500.000",
            "Rp 1.000.000",
            "1.02%/bulan dari pajak",
          ],
          correctIndex: 1,
          explanation:
            "Sanksi telat lapor (Pasal 7 KUP) adalah fixed amount, BUKAN persentase: SPT Masa PPN = Rp 500.000; SPT Tahunan Badan = Rp 1.000.000; SPT Masa/SPT Tahunan OP lainnya = Rp 100.000.",
          difficulty: "sedang",
        },
        {
          id: "ch12-l04-q5",
          question: "Carbon Tax di Indonesia saat ini (2026) baru diimplementasikan untuk sektor:",
          options: [
            "Transportasi (kendaraan bermotor)",
            "Industri non-power generation",
            "PLTU (Pembangkit Listrik Tenaga Uap batubara)",
            "Semua sektor sudah diimplementasi",
          ],
          correctIndex: 2,
          explanation:
            "Carbon Tax 2026 baru diimplementasikan untuk PLTU (sejak 2022). Sektor lain belum, tapi PP 40/2025 (Kebijakan Energi Nasional) sudah siapkan roadmap ekspansi ke transportasi dan industri non-power.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus Integratif: Hitung Pajak PT Maju Jaya 2026",
        description:
          "PT Maju Jaya (manufaktur) di 2026: omzet Rp 50M, laba sebelum pajak Rp 8M, 50 karyawan total gaji Rp 1.5M/thn, pembelian BKP Rp 30M (ada faktur), penjualan BKP Rp 50M (di-faktur), sewa kantor Rp 200jt/thn. Hitung total pajak yang harus disetor PT Maju Jaya 2026.",
        solution:
          "Hitung pajak PT Maju Jaya 2026: (1) PPh Badan = 22% × Rp 8M (asumsi tanpa koreksi) = Rp 1.760.000.000; (2) PPN = PPN Keluaran - PPN Masukan = (11% × 50M) - (11% × 30M) = 5.5M - 3.3M = Rp 2.200.000.000; (3) PPh Final sewa kantor = 10% × 200jt = Rp 20.000.000 (dipotong penyewa); (4) PPh 21 dipotong karyawan Rp 100jt (sudah disetor via Coretax e-Bupot); (5) Plus PBB kantor (daerah), BPHTB (kalau ada transaksi properti), Bea Materai (kalau ada kontrak >Rp 5jt). Total pajak inti: Rp 1.760.000.000 (PPh Badan) + Rp 2.200.000.000 (PPN) + Rp 20.000.000 (PPh sewa) = Rp 3.980.000.000 (belum termasuk PPh 21 yang disetor via pemotongan dari karyawan). Di Coretax, semua ini bisa dilapor & disetor via sistem terintegrasi (e-Billing built-in, e-Faktur built-in, e-Bupot built-in).",
      },
      tags: [
        "update pajak 2026",
        "PPN 12%",
        "PPh OP 5 lapis",
        "PPh badan 22%",
        "MIR 0.6%",
        "KMK 35/MK/EF.2/2026",
        "Carbon Tax",
        "Pillar Two UTPR",
        "Coretax 2026",
        "Brevet AB",
      ],
    },
  ],
  exam: [
    {
      id: "ch12-e1",
      question: "Kapan Coretax resmi go-live menggantikan DJP Online?",
      options: [
        "1 Januari 2024",
        "1 Januari 2025",
        "1 Januari 2026",
        "1 Juli 2025",
      ],
      correctIndex: 1,
      explanation:
        "Coretax resmi go-live 1 Januari 2025. Sistem lama (DJP Online, e-SPT, e-Filing, e-Bupot, e-Faktur) digabung jadi satu sistem terintegrasi.",
      difficulty: "mudah",
    },
    {
      id: "ch12-e2",
      question: "Vendor yang membangun sistem Coretax adalah:",
      options: [
        "Microsoft Corporation",
        "IBM Indonesia",
        "BMF TCS (Tata Consultancy Services)",
        "Oracle Indonesia",
      ],
      correctIndex: 2,
      explanation:
        "BMF TCS (Tata Consultancy Services), perusahaan IT raksasa asal India, adalah vendor pemenang tender Coretax.",
      difficulty: "sedang",
    },
    {
      id: "ch12-e3",
      question: "Fitur SPT pre-populated di Coretax berarti:",
      options: [
        "SPT yang diisi manual oleh WP dengan template dari DJP",
        "SPT yang sudah diisi otomatis DJP berdasarkan data pihak ketiga (employer, bank, dll)",
        "SPT yang sudah diproses fiskus sebelum WP submit",
        "SPT khusus untuk WP yang sudah pensiun",
      ],
      correctIndex: 1,
      explanation:
        "SPT pre-populated = SPT yang sudah diisi otomatis DJP berdasarkan data pihak ketiga (employer lapor bukti potong PPh 21, bank lapor bunga deposito, dll). WP tinggal review & submit.",
      difficulty: "mudah",
    },
    {
      id: "ch12-e4",
      question: "Tarif PPN efektif untuk mayoritas barang/jasa kena pajak di 2026 adalah:",
      options: ["10%", "11%", "12%", "15%"],
      correctIndex: 1,
      explanation:
        "PPN headline 12% (UU HPP) tapi efektif 11% untuk mayoritas BKP/JKP karena pemerintah menerapkan DPP Nilai Lain 11/12. Tarif 12% penuh hanya untuk barang mewah tertentu.",
      difficulty: "sedang",
    },
    {
      id: "ch12-e5",
      question: "Bunga MIR (Monthly Interest Rate) per Agustus 2026 berdasarkan KMK 35/MK/EF.2/2026 adalah:",
      options: [
        "0.5%/bulan",
        "0.6%/bulan",
        "1.02%/bulan",
        "1.85%/bulan",
      ],
      correctIndex: 1,
      explanation:
        "MIR Agustus 2026 = 0.6%/bulan (KMK 35/MK/EF.2/2026). Ini adalah base rate; sanksi Pasal 19 = 0.6%/bln (1× MIR), Pasal 8(2) = 1.02%/bln (1.7× MIR), Pasal 13(2) = 1.85%/bln (~3.083× MIR).",
      difficulty: "sedang",
    },
    {
      id: "ch12-e6",
      question: "Sanksi telat lapor SPT Tahunan PPh Badan (Pasal 7 KUP) adalah:",
      options: [
        "Rp 100.000",
        "Rp 500.000",
        "Rp 1.000.000",
        "Rp 5.000.000",
      ],
      correctIndex: 2,
      explanation:
        "Sanksi telat lapor SPT Tahunan PPh Badan = Rp 1.000.000. SPT Masa PPN = Rp 500.000; SPT Masa/SPT Tahunan PPh OP lainnya = Rp 100.000.",
      difficulty: "sedang",
    },
    {
      id: "ch12-e7",
      question: "Carbon Tax di Indonesia (2026) saat ini baru diimplementasikan untuk sektor:",
      options: [
        "Transportasi (kendaraan bermotor)",
        "Industri non-power generation",
        "PLTU (Pembangkit Listrik Tenaga Uap batubara)",
        "Semua sektor sudah",
      ],
      correctIndex: 2,
      explanation:
        "Carbon Tax 2026 baru diimplementasikan untuk PLTU (sejak 2022) dengan mekanisme cap-and-trade. Sektor lain belum, tapi PP 40/2025 (Kebijakan Energi Nasional) sudah siapkan roadmap ekspansi ke transportasi dan industri non-power. Tarif floor Rp 30/kg CO2e.",
      difficulty: "sulit",
    },
    {
      id: "ch12-e8",
      question: "Pillar Two UTPR (Undertaxed Profits Rule) efektif sejak:",
      options: [
        "1 Januari 2024",
        "1 Januari 2025",
        "1 Januari 2026",
        "1 Januari 2027",
      ],
      correctIndex: 2,
      explanation:
        "UTPR efektif 1 Januari 2026. QDMTT & IIR efektif 1 Januari 2025. STTR via MLI ditandatangani 19 September 2024. MNC dengan konsolidasi omzet ≥ EUR 750M wajib hitung ETR per yurisdiksi.",
      difficulty: "sulit",
    },
    {
      id: "ch12-e9",
      question: "PPh 22 atas transaksi marketplace (e-commerce) di 2026:",
      options: [
        "Sudah efektif sejak 1 Januari 2026",
        "Ditunda lagi, terakhir via PENG-46/PJ.09/2026 (5 Agustus 2026)",
        "Dihapuskan permanen",
        "Hanya berlaku untuk WP luar negeri",
      ],
      correctIndex: 1,
      explanation:
        "PPh 22 marketplace terus ditunda di 2026. Terbaru, ditunda lagi via PENG-46/PJ.09/2026 (5 Agustus 2026). Sampai PMK baru menetapkan tanggal efektif, WP marketplace belum wajib memungut PPh 22.",
      difficulty: "sedang",
    },
    {
      id: "ch12-e10",
      question: "Dampak Coretax bagi peran konsultan pajak adalah:",
      options: [
        "Peran konsultan pajak dihapuskan total",
        "Konsultan hanya boleh bekerja untuk WP orang pribadi",
        "Geser dari 'input data' (80%) menjadi 'advisory/strategi' (80%)",
        "Konsultan pajak tidak boleh menggunakan Coretax",
      ],
      correctIndex: 2,
      explanation:
        "Coretax mengubah peran konsultan pajak: dari input data (yang sekarang otomatis via SPT pre-populated) menjadi advisory/strategi (tax planning, audit defense, transfer pricing, international tax). Nilai tambah konsultan naik kelas, fee bisa lebih besar.",
      difficulty: "sedang",
    },
  ],
}
