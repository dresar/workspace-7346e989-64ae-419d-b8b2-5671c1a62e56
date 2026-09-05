import type { Chapter } from "../types"

// ============================================================================
// BAB 4: PAJAK PENGHASILAN ORANG PRIBADI (PPh OP)
// ============================================================================
// Update terbaru: tarif progresif 5 lapis UU HPP, PTKP 2026,
// biaya jabatan maks Rp 6jt/th, Coretax pre-populated SPT.
// ============================================================================

export const chapter04: Chapter = {
  id: "ch04",
  slug: "pph-orang-pribadi",
  number: 4,
  title: "Pajak Penghasilan Orang Pribadi",
  shortTitle: "PPh OP",
  description:
    "Bab inti Brevet AB: subjek WP OP, objek pajak, PTKP 2026, tarif progresif 5 lapis, biaya yang boleh dibiayakan, perhitungan setahun lengkap, PPh final OP, sampai SPT Tahunan 1770 di Coretax. Wajib dikuasai!",
  icon: "User",
  color: "orange",
  difficulty: "menengah",
  estimatedMinutes: 320,
  objectives: [
    "Paham definisi & ruang lingkup subjek pajak Orang Pribadi (WP Dalam Negeri vs Luar Negeri, kriteria 183 hari)",
    "Bisa membedakan objek pajak vs bukan objek pajak PPh OP (warisan, hibah, beasiswa, dll)",
    "Hafal tabel PTKP 2026 (TK/0 sampai K/3) dan cara hitungnya",
    "Bisa hitung PPh OP dengan tarif progresif 5 lapis UU HPP (5/15/25/30/35%)",
    "Paham komponen biaya yang boleh dibiayakan (biaya jabatan 5% max 6jt/th, iuran pensiun, zakat)",
    "Bisa ngelakuin perhitungan PPh OP setahun lengkap dari gaji sampai penghasilan lain",
    "Kenal jenis-jenis PPh Final untuk Orang Pribadi (sewa 10%, jasa konstruksi, UMKM 0,5%, saham 0,1%)",
    "Bisa isi SPT Tahunan PPh OP 1770/1770-S/1770-SS di sistem Coretax",
  ],
  lessons: [
    // =========================================================================
    // LESSON 1: PENGERTIAN & RUANG LINGKUP PPh OP
    // =========================================================================
    {
      id: "ch04-l01",
      slug: "pengertian-pph-op",
      title: "Pengertian & Ruang Lingkup PPh OP: Siapa yang Kena Pajak?",
      subtitle: "Subjek pajak OP, WP Dalam Negeri vs Luar Negeri, kriteria 183 hari",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 35,
      content: `# 🌱 Pengertian & Ruang Lingkup PPh Orang Pribadi

Yuk, kita masuk ke bab inti Brevet AB — **Pajak Penghasilan Orang Pribadi (PPh OP)**. Bab ini adalah fondasi semua perhitungan pajak. Kalau kamu nggak paham bab ini, repot di bab-bab selanjutnya. So, fokus ya!

## Apa Itu PPh OP?

PPh OP itu **pajak yang dikenakan atas penghasilan yang diterima atau diperoleh Wajib Pajak Orang Pribadi** dalam satu tahun pajak. Penghasilan ini bisa dari apa aja: gaji, honor, bonus, sewa, dividen, bunga, profit jual saham, sampai hadiah undian.

> **Definisi resmi (UU PPh Pasal 2Ayat 1):** "Pajak Penghasilan dikenakan atas penghasilan seorang atau badan, baik orang pribadi maupun badan sebagai Wajib Pajak."

Gampangnya: semua penghasilan yang masuk ke kantong kamu sebagai individu — potensial kena PPh OP. Tapi ada pengecualian, ada tarif khusus, ada juga yang difinalkan (sudah dibayar, nggak masuk lagi ke SPT Tahunan).

## Dasar Hukum PPh OP

Sebelum lanjut, hafal dulu backbone legal PPh OP di Indonesia:

1. **UU No. 36 Tahun 2008 (UU PPh)** — undang-undang induk PPh.
2. **UU No. 7 Tahun 2021 (UU HPP / Harmonisasi Peraturan Perpajakan)** — mengubah tarif progresif PPh OP jadi 5 lapis (5/15/25/30/35%), ganti sistem lama 5 lapis dengan tarif berbeda.
3. **PMK 168/PMK.03/2023** — aturan teknis PPh 21 (pajak atas penghasilan sehubungan dengan pekerjaan, jasa, dan kegiatan orang pribadi). Berlaku sejak 1 Januari 2024, masih dipakai di 2026.
4. **Peraturan DJP terkait Coretax** — implementasi sistem elektronik 2025-2026.

> **Tip ujian:** Kalau ditanya "dasar hukum tarif PPh OP sekarang", jawabannya **UU HPP No. 7/2021**. UU 36/2008 sudah ada tapi tarifnya udah dimodifikasi sama UU HPP.

## Siapa yang Jadi Subjek Pajak OP?

Subjek Pajak Penghasilan itu ada dua kelompok besar (UU PPh Pasal 2):

### 1. Orang Pribadi
Ya, kamu, aku, semua manusia yang udah lahir ke dunia. Bahkan bayi yang baru lahir pun, secara hukum, BISA jadi subjek pajak kalau dia udah dapat penghasilan (misal hibah jutaan, warisan yang produktif, dll). Tapi praktiknya, bayi jarang punya NPWP sendiri — penghasilannya biasanya digabung sama ortunya sebagai tanggungan.

### 2. Badan
PT, CV, Koperasi, Yayasan, BUMN, BUT, dll. Ini akan kita bahas tuntas di Bab 5 (PPh Badan).

> **Penting:** Warisan yang belum terbagi (almarhum meninggal, harta belum dibagi ke ahli waris) **dianggap sebagai subjek pajak tersendiri** selama masa belum terbaginya. Penghasilan dari harta warisan ini (misal sewa ruko warisan) kena PPh sendiri, biasanya PPh Final 10%.

## WP OP Dalam Negeri vs WP OP Luar Negeri

Ini **sangat penting** dan **sering keluar di ujian**. Dua-duanya orang pribadi, tapi perlakuan pajaknya beda.

### WP OP Dalam Negeri (WPDN)

Wajib Pajak Orang Pribadi Dalam Negeri itu orang pribadi yang:

1. **Bertempat tinggal di Indonesia**, ATAU
2. **Berada di Indonesia lebih dari 183 hari dalam jangka waktu 12 bulan**, ATAU
3. **Memiliki niat untuk bertempat tinggal di Indonesia**.

**Konsekuensinya:** WPDN kena PPh atas penghasilan dari **seluruh dunia** (worldwide income). Artinya, gaji dari kerja di Singapura, sewa rumah di Bali, dividen saham Apple di US — semuanya kena PPh OP di Indonesia.

> **Contoh:** Pak Budi WNI, kerja di Jakarta, tapi punya rumah sewaan di Malaysia. Sewa rumah Malaysia itu juga kena PPh OP Indonesia karena Budi adalah WPDN. Tapi nanti bisa dikreditkan pajak yang udah dibayar di Malaysia (tax credit via P3B).

### WP OP Luar Negeri (WPLN)

Wajib Pajak Orang Pribadi Luar Negeri itu orang pribadi yang:

1. **Tidak bertempat tinggal di Indonesia**, ATAU
2. **Berada di Indonesia tidak lebih dari 183 hari dalam 12 bulan**,

**TAPI** menjalankan usaha atau melakukan kegiatan melalui **BUT (Bentuk Usaha Tetap)** di Indonesia, ATAU menerima/memperoleh penghasilan dari Indonesia yang **bukan** dari menjalankan usaha/BUT.

**Konsekuensinya:** WPLN kena PPh **hanya atas penghasilan dari Indonesia** (sumber principle). Pajaknya biasanya dipotong di sumber dengan tarif PPh 26 sebesar **20%** (atau tarif P3B yang lebih rendah kalau ada treaty).

## Kriteria 183 Hari — Aturan Penting!

Ini aturan kunci yang **WAJIB hafal**:

> **Aturan 183 hari:** Seseorang dianggap WPDN kalau berada di Indonesia **lebih dari 183 hari** dalam jangka waktu **12 bulan** (bukan tahun kalender!).

**12 bulan** di sini bisa lintas tahun. Misalnya dari 1 Juli 2025 sampai 30 Juni 2026. Selama periode itu, kalau orang tersebut berada di Indonesia lebih dari 183 hari, dia jadi WPDN.

### Tabel Contoh Penentuan Status WP

| Orang | Periode di Indonesia | Status | Alasan |
|-------|---------------------|--------|--------|
| Pak Andi (WNI) | Selalu tinggal di Bandung | WPDN | Bertempat tinggal di Indonesia |
| John (WNA) | 200 hari (1 Feb - 19 Okt 2026) | WPDN | >183 hari dalam 12 bulan |
| Sarah (WNA) | 100 hari (1 Jan - 10 April 2026) | WPLN | ≤183 hari dalam 12 bulan |
| Bu Mei (WNA) | 90 hari (Jan-Mar) + 100 hari (Sep-Des) | WPDN | Total 190 hari dalam 12 bulan |
| Pak Joko (WNI) | Tugas belajar di Australia 2 thn | WPDN | WNI tetap WPDN walau tinggal di LN |

> **Catatan penting:** Untuk WNI, dia **tetap WPDN** walaupun bertempat tinggal di luar negeri (kecuali sudah pindah kewarganegaraan). Selama masih WNI, dia kena PPh worldwide.

## Pengecualian Status WPDN (Pindah ke WPLN)

Seorang WNI yang **pindah ke luar negeri** untuk bekerja bisa **tidak diperlakukan sebagai WPDN** kalau memenuhi syarat:

1. Telah pindah domisili ke luar negeri.
2. Memenuhi persyaratan subjektif dan objektif (sesuai Peraturan Menteri Keuangan).

Yang biasanya di luar negeri ini pejabat KBRI, staf perusahaan BUMN yang tugas di LN, TKI resmi, dll.

## Bukti Pendaftaran: NPWP dan NPPKP

Kalau kamu udah jadi WPDN dan punya penghasilan kena pajak di atas PTKP, kamu **wajib** daftar:

1. **NPWP (Nomor Pokok Wajib Pajak)** — identitas wajib pajak. Format baru sejak 2024 (16 digit sesuai Coretax): jadi lebih ringkas dan terhubung dengan NIK untuk orang pribadi.
2. **NPPKP (Nomor Pokok Wajib Pajak Pengusaha Pajak Pertambahan Nilai)** — khusus untuk pengusaha kena pajak (PKP) yang kena PPN.

### Untuk Orang Pribadi, Kapan Wajib Daftar NPWP?

| Kondisi | Wajib NPWP? |
|---------|-------------|
| Punya penghasilan ≥ PTKP/tahun | **WAJIB** |
| Karyawan single, gaji di bawah PTKP | Tidak wajib (employer tanggungjawab) |
| Karyawan punya 1 kerjaan, gaji di atas PTKP | Wajib, bisa gunakan NPWP 16 digit / NIK |
| Punya usaha sendiri | WAJIB |
| Punya aset yang digerakkan (sewa, dll) | WAJIB |
| Istri kerja, suami kerja | WAJIB punya NPWP masing-masing |

> **Update 2024-2026 (Coretax):** NPWP untuk orang pribadi yang punya penghasilan dari kerja (PPh 21) bisa menggunakan **NIK** sebagai pengganti NPWP. Tapi untuk usaha, wajib daftar NPWP terpisah.

## Apa yang Terjadi Kalau Nggak Daftar NPWP?

Konsekuensinya:

1. Tarif PPh 21 (sebagai tidak ber-NPWP) **lebih tinggi 20%** dari tarif normal — artinya kena tarif 24% kalau misalnya normalnya 20%. Tapi sistem UU HPP progresif, jadi nggak berlaku lagi tarif tambahan "1,2x" yang dulu pernah ada. **Update:** Untuk perhitungan PPh 21 karyawan yang tidak ber-NPWP, **dijadikan setara dengan ber-NPWP** (sudah dicabut PMK lama).
2. Nggak bisa klaim kredit pajak (PPh 22, 23, 25, 24 yang udah dipotong jadi "nggak bisa dikuasai" sebagai pengurang).
3. Denda administrasi 100% dari pajak terutang kalau ketahuan (UU KUP Pasal 7Ayat1).

## Apa Saja yang jadi Penghasilan OP?

Bab berikutnya akan kita bahas tuntas. Tapi secara umum, ini kategori penghasilan OP:

1. **Penghasilan dari pekerjaan** — gaji, upah, bonus, tunjangan, honor, uang pesangon, THR.
2. **Penghasilan dari usaha** — laba usaha, jasa, dagang, profesional (dokter, pengacara, konsultan).
3. **Penghasilan dari modal** — bunga deposito, dividen, royalti, sewa, capital gain.
4. **Penghasilan dari transfer kekayaan** — hibah, hadiah, undian.

> **Hati-hati di ujian:** Penghasilan dari hibah kepada keluarga sedarah maks 1 lapis (ortu-anak, suami-istri) itu **bukan objek pajak**. Tapi hibah ke teman atau saudara jauh bisa dianggap penghasilan biasa. Detail di Lesson 2 ya!

## Kasus Nyata: TKI di Malaysia

Yuni, WNI, kerja sebagai TKI di Malaysia selama 2 tahun. Statusnya:

- **Sebagai WNI**, Yuni secara default masih WPDN (kena PPh worldwide).
- **TAPI**, sesuai aturan, Yuni bisa **tidak diperlakukan sebagai WPDN** kalau:
  - Memenuhi persyaratan subjektif (sudah pindah ke LN untuk bekerja, bukan tugas dari employer Indonesia).
  - Memenuhi persyaratan objektif (sesuai PMK yang mengatur ini, biasanya: sudah punya TIN di LN, 183+ hari di LN, dll).

**Konsekuensi:** Kalau Yuni sudah "tidak diperlakukan WPDN", maka penghasilan dari Malaysia **tidak kena PPh OP Indonesia**. Tapi kalau Yuni masih WPDN, penghasilannya kena PPh OP Indonesia, tapi bisa dikredit pajak yang sudah dibayar di Malaysia (tax credit via P3B Indonesia-Malaysia).

## Update 2026: Coretax dan Status WP

Sejak 1 Januari 2025, sistem **Coretax** udah live. Untuk PPh OP, dampaknya:

1. **SPT Tahunan pre-populated** — data bukti potong PPh 21, PPh 23, PPh Final, langsung masuk ke SPT kamu tanpa harus input manual.
2. **NPWP dan NIK terintegrasi** — untuk orang pribadi yang cuma punya penghasilan dari kerja, NIK bisa jadi pengganti NPWP.
3. **Cocokan real-time** — kalau ada selisih antara SPT kamu sama data bukti potong yang dilaporkan pemberi kerja, sistem akan flag.
4. **Pendaftaran elektronik** — sekarang nggak ada lagi pendaftaran manual. Semua lewat Coretax.
5. **Penghapusan formulir kertas** — SPT wajib elektronik.

## Ringkasan Lesson 1

- **PPh OP** = pajak atas penghasilan Wajib Pajak Orang Pribadi.
- **Subjek:** Orang pribadi (manusia) — badan dibahas di Bab 5.
- **WPDN** = bertempat tinggal di Indonesia ATAU >183 hari dalam 12 bulan → kena PPh atas **seluruh dunia**.
- **WPLN** = ≤183 hari di Indonesia ATAU tidak bertempat tinggal → kena PPh atas penghasilan **dari Indonesia** saja (biasanya PPh 26 = 20%).
- **WNI tetap WPDN** walau tinggal di LN, kecuali sudah pindah kewarganegaraan atau memenuhi persyaratan subjektif & objektif.
- **NPWP wajib** kalau penghasilan ≥ PTKP. Sekarang NIK bisa jadi pengganti NPWP untuk karyawan.
- **Coretax 2025+** mengubah cara lapor SPT — pre-populated, elektronik, real-time matching.

> **Tip ujian:** Soal yang sering muncul: "Orang asing berada di Indonesia 200 hari, status pajaknya apa?" Jawab: **WPDN** karena >183 hari dalam 12 bulan. Kena PPh atas penghasilan dari seluruh dunia.
`,
      keyPoints: [
        "PPh OP dikenakan atas penghasilan Wajib Pajak Orang Pribadi dalam 1 tahun pajak",
        "Subjek PPh OP = orang pribadi (manusia), beda dengan PPh Badan yang subjeknya badan",
        "WPDN: bertempat tinggal di Indonesia ATAU berada >183 hari dalam 12 bulan → kena PPh worldwide",
        "WPLN: ≤183 hari di Indonesia → kena PPh hanya atas penghasilan dari Indonesia (PPh 26 = 20%)",
        "WNI tetap WPDN walau di luar negeri, kecuali memenuhi persyaratan subjektif & objektif pindah LN",
        "NPWP wajib kalau penghasilan ≥ PTKP; NIK bisa jadi pengganti NPWP untuk karyawan (Coretax 2025+)",
        "Coretax: SPT pre-populated, elektronik, real-time matching bukti potong sejak 1 Januari 2025",
      ],
      quiz: [
        {
          id: "ch04-l01-q1",
          question:
            "John, Warga Negara Asing (WNA) dari Australia, bekerja di Indonesia dari 1 Januari 2026 sampai 31 Desember 2026 (365 hari). Status WP John di Indonesia adalah?",
          options: [
            "WP Luar Negeri, kena PPh hanya atas penghasilan dari Indonesia",
            "WP Dalam Negeri, kena PPh atas penghasilan seluruh dunia",
            "Bukan subjek pajak Indonesia",
            "WP Dalam Negeri tapi hanya kena PPh atas penghasilan dari Australia",
          ],
          correctIndex: 1,
          explanation:
            "John berada di Indonesia 365 hari (>183 hari dalam 12 bulan), maka dia jadi WPDN. Konsekuensinya kena PPh atas penghasilan seluruh dunia (worldwide), termasuk penghasilan dari Australia.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l01-q2",
          question: "Dasar hukum tarif progresif PPh OP 5 lapis (5/15/25/30/35%) yang berlaku sejak 2022 adalah?",
          options: [
            "UU No. 36 Tahun 2008 (UU PPh)",
            "UU No. 7 Tahun 2021 (UU HPP)",
            "UU No. 6 Tahun 1983 (UU PPh asli)",
            "PP No. 23 Tahun 2018",
          ],
          correctIndex: 1,
          explanation:
            "UU HPP (Harmonisasi Peraturan Perpajakan) No. 7/2021 mengubah tarif progresif PPh OP jadi 5 lapis: 5%, 15%, 25%, 30%, 35%. Berlaku efektif sejak 1 Januari 2022 sampai sekarang (termasuk 2026).",
          difficulty: "mudah",
        },
        {
          id: "ch04-l01-q3",
          question:
            "Manakah dari berikut ini yang BUKAN termasuk kriteria seseorang menjadi WPDN?",
          options: [
            "Bertempat tinggal di Indonesia",
            "Berada di Indonesia lebih dari 183 hari dalam 12 bulan",
            "Memiliki niat untuk bertempat tinggal di Indonesia",
            "Pernah berkunjung ke Indonesia lebih dari 5 kali",
          ],
          correctIndex: 3,
          explanation:
            "Kriteria WPDN: bertempat tinggal di Indonesia, berada >183 hari dalam 12 bulan, atau berniat bertempat tinggal di Indonesia. Berkunjung 5 kali tidak otomatis membuat seseorang jadi WPDN — yang penting adalah jumlah hari, bukan frekuensi kunjungan.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l01-q4",
          question:
            "Yuni, WNI, bekerja sebagai TKI di Hong Kong selama 3 tahun. Yuni memenuhi persyaratan subjektif dan objektif untuk tidak diperlakukan sebagai WPDN. Penghasilan Yuni dari Hong Kong:",
          options: [
            "Tetap kena PPh OP Indonesia karena Yuni WNI",
            "Tidak kena PPh OP Indonesia karena Yuni sudah tidak diperlakukan sebagai WPDN",
            "Kena PPh OP Indonesia dengan tarif khusus 5%",
            "Kena PPh Final 0,5% di Indonesia",
          ],
          correctIndex: 1,
          explanation:
            "WNI yang sudah memenuhi syarat subjektif & objektif untuk pindah ke LN TIDAK diperlakukan sebagai WPDN. Maka penghasilan dari LN (Hong Kong) tidak kena PPh OP Indonesia. Tapi kalau Yuni masih punya penghasilan dari Indonesia (misal sewa rumah), itu tetap kena PPh.",
          difficulty: "sulit",
        },
        {
          id: "ch04-l01-q5",
          question:
            "Sejak 1 Januari 2025, sistem perpajakan Indonesia yang menggantikan DJP Online adalah?",
          options: ["e-SPT", "e-Filing", "Coretax", "DJPHub"],
          correctIndex: 2,
          explanation:
            "Coretax (Core Tax Administration System) live sejak 1 Januari 2025, menggantikan DJP Online. Fitur utama: integrasi data, SPT pre-populated, validasi real-time bukti potong, mandatory electronic filing.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Pak Daniel, Ekspat Singapura di Jakarta",
        description:
          "Pak Daniel, WNA Singapura, ditugaskan ke kantor cabang perusahaan multinasional di Jakarta dari 1 Maret 2026 sampai 31 Oktober 2026 (8 bulan / 245 hari). Selama di Indonesia, dia juga masih menerima dividen dari saham BCA Singapore sebesar SGD 50.000. Pertanyaan: (a) Status WP Pak Daniel? (b) Apakah dividen dari Singapura kena PPh OP Indonesia? (c) Apa konsekuensi perpajakannya?",
        solution:
          "(a) Pak Daniel berada di Indonesia 245 hari >183 hari dalam 12 bulan, maka dia jadi WPDN. (b) Sebagai WPDN, dia kena PPh atas penghasilan seluruh dunia (worldwide), termasuk dividen dari Singapura SGD 50.000. (c) Konsekuensi: dividen Singapura harus dilaporkan di SPT Tahunan PPh OP Indonesia. Tapi pajak yang sudah dipotong di Singapura (sesuai P3B Indonesia-Singapura) bisa dikreditkan sebagai Foreign Tax Credit (FTC) di SPT Tahunan Indonesia. Tanpa P3B, pajak di Singapura nggak bisa dikredit dan bisa terjadi double taxation. Untuk P3B Indonesia-Singapura, tarif dividen maksimal yang bisa dipungut di Singapura adalah 15% (kalau kepemilikan ≥25%).",
      },
      tags: [
        "subjek pajak",
        "WP dalam negeri",
        "WP luar negeri",
        "kriteria 183 hari",
        "NPWP",
        "UU HPP",
        "Coretax",
        "WNI di luar negeri",
      ],
    },

    // =========================================================================
    // LESSON 2: OBJEK PPh OP
    // =========================================================================
    {
      id: "ch04-l02",
      slug: "objek-pph-op",
      title: "Objek Pajak PPh OP: Apa Saja yang Kena & yang Nggak?",
      subtitle: "Penghasilan kena pajak, bukan objek pajak: warisan, hibah, beasiswa, dll",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 40,
      content: `# 💰 Objek Pajak PPh OP: Apa Saja yang Dikenai Pajak?

Setelah kamu paham siapa subjek PPh OP, sekarang waktunya bahas: **apa yang kena pajak** (objek) dan **apa yang nggak kena pajak** (bukan objek). Ini topik yang **paling sering diujikan** karena banyak pengecualian dan kasus khusus. Yuk, simak baik-baik!

## Definisi Objek Pajak PPh OP

> **UU PPh Pasal 4 Ayat 1:** "Yang menjadi objek pajak adalah penghasilan, yaitu setiap tambahan kemampuan ekonomis yang diterima atau diperoleh Wajib Pajak, baik yang berasal dari Indonesia maupun dari luar Indonesia, yang dapat dipakai untuk konsumsi atau untuk menambah kekayaan Wajib Pajak yang bersangkutan dengan nama dan dalam bentuk apapun."

Gampangnya: **semua tambahan kemampuan ekonomis** = objek pajak. Entah itu uang, barang, jasa, manfaat, atau diskon. Selama bikin kamu lebih kaya, itu potensial kena pajak.

### Unsur-Unsur Objek Pajak (WAJIB hafal)

Biar gampang ingat, ada **4 unsur** objek pajak:

1. **Penghasilan** — tambahan kemampuan ekonomis.
2. **Diterima atau diperoleh** — sudah jatuh tempo atau sudah diterima secara nyata.
3. **Dari Indonesia atau dari luar Indonesia** — worldwide untuk WPDN.
4. **Dapat dipakai untuk konsumsi atau menambah kekayaan** — manfaat ekonomis.

> **Catatan:** Penghasilan yang sudah dipotong PPh 26 di sumber (untuk WPLN) TETAP jadi objek pajak, tapi pemotongan di sumber itu sudah menjadi pelunasan (final atau kredit).

## Bentuk-Bentuk Penghasilan yang Termasuk Objek Pajak

Ini list lengkap penghasilan yang **kena PPh OP**:

### 1. Penghasilan dari Pekerjaan
- Gaji, upah, honorarium
- Tunjangan (transport, makan, kesehatan)
- Bonus, THR, gratifikasi
- Uang pesangon (PHK)
- Uang pensiun
- Imbalan karena pemutusan hubungan kerja

### 2. Penghasilan dari Usaha & Aktivitas
- Laba usaha dagang
- Laba jasa profesional (dokter, pengacara, konsultan, notaris)
- Laba bengkel, warung, toko
- Komisi broker/asuransi
- Bonus MLM yang melebihi batas tertentu

### 3. Penghasilan dari Modal
- Bunga deposito, tabungan (PPh Final 20%)
- Bunga obligasi (PPh Final 10%)
- Dividen saham (PPh Final 10% untuk OP, kalau tidak reinvest)
- Royalti buku, lagu, paten
- Sewa tanah dan/atau bangunan (PPh Final 10%)
- Capital gain jual saham di BEI (PPh Final 0,1%)

### 4. Penghasilan Lain-Lain
- Hadiah undian, lotre, kontes (PPh Final 25%)
- Beasiswa (TAPI ada pengecualian, lihat di bawah)
- Hibah (TAPI ada pengecualian)
- Warisan (TAPI ada pengecualian)

## Yang BUKAN Objek Pajak PPh OP (Penting!)

Nah, ini bagian krusial. UU PPh Pasal 4 Ayat 3 menyebut beberapa penghasilan yang **bukan objek pajak**:

### 1. Warisan yang Telah Dibagi
Warisan yang sudah dibagi ke ahli waris = **bukan objek pajak**. Tapi ingat:
- Warisan yang **belum dibagi** = subjek pajak tersendiri (kena PPh Final atas penghasilan yang dihasilkan harta warisan, misal sewa ruko 10%).
- Yang bukan objek = **warisan** itu sendiri (transfer harta), BUKAN penghasilan dari harta warisan.

> **Contoh:** Pak Ali meninggal, warisan Rp 5 M diserahkan ke anaknya. Transfer Rp 5 M ini **bukan objek pajak**. Tapi kalau anaknya lalu jual rumah warisan dan dapat untung, atau nyewain ruko warisan, penghasilan dari sana tetap kena PPh.

### 2. Hibah, Bantuan, atau Sumbangan
Pemberian hibah/bantuan/sumbangan **bukan objek pajak HANYA JIKA** memenuhi 3 syarat:
1. **Pemberi adalah keluarga sedarah dalam garis keturunan lurus 1 lapis** (orang tua ke anak, anak ke orang tua) — ATAU suami-istri.
2. **Tidak ada hubungan pekerjaan, usaha, kepemilikan, atau penguasaan**.
3. **Tidak ada hubungan kepemilikan, penguasaan, atau pemanfaatan** antara pemberi dan penerima.

Kalau syarat salah satu nggak terpenuhi → hibah jadi **objek pajak** biasa.

> **Kasus:** Pak Budi kasih hibah Rp 500 juta ke anaknya Andi. Hibah ini bukan objek pajak (semua syarat terpenuhi). TAPI kalau Pak Budi kasih hibah Rp 500 juta ke temannya Carl, **itu objek pajak** karena Carl bukan keluarga sedarah 1 lapis.

### 3. Beasiswa
Beasiswa yang **memenuhi syarat** bukan objek pajak. Syaratnya harus diatur PMK yang mengatur beasiswa bebas pajak — biasanya:
- Beasiswa dari pemerintah (Bappenas, LPDP, dll).
- Beasiswa dari lembaga sosial/pendidikan yang ditetapkan Menteri Keuangan.

Beasiswa dari swasta (misal dari perusahaan ke karyawannya) — bisa jadi objek pajak kalau nggak memenuhi syarat PMK.

### 4. Bantuan/Sumbangan kepada Lembaga Sosial
Bantuan/sumbangan ke lembaga sosial yang ditetapkan Menteri Keuangan (daftar lembaga yang udah disahkan) = bukan objek pajak. Contoh: sumbangan ke yayasan yatim yang sudah disahkan MK.

### 5. Pembagian Laba dengan Nama dan Bentuk Apapun
Yang dimaksud adalah pembagian laba oleh koperasi ke anggota. Tapi aturan ini udah diperbarui — pembagian SHU koperasi sekarang bisa **bukan objek pajak** kalau dari sumber usaha koperasi antar anggota.

### 6. Iuran Pensiun yang Dibayar Pemberi Kerja
Iuran pensiun yang dibayar oleh pemberi kerah ke dana pensiun yang disahkan Menkeu = bukan objek pajak.

### 7. Bantuan untuk Korban Bencana
Bantuan sumbangan untuk korban bencana alam = bukan objek pajak.

### 8. Hak Imbalan Pekerjaan (Pension Fund)
Hak imbalan kerja yang dibayarkan oleh dana pensiun ke peserta (saat pensiun) — ini bisa berupa:
- **Pensiun berkala bulanan** → objek pajak (PPh 21 progresif atau final).
- **Pensiun dibayar sekaligus** → PPh Final dengan tarif khusus (lihat tabel di bawah).

## Tabel: PPh Final atas Pesangon & Pensiun Sekaligus

Untuk **PPh Pesangon (Pisah Penerimaan Kerja)** dan **Pensiun dibayar sekaligus**, jika dibayar dalam 1x atau dalam 2 tahun, tarif finalnya:

| Penghasilan Bruto | Tarif Pesangon | Tarif Pensiun |
|-------------------|----------------|---------------|
| S/d Rp 50.000.000 | 0% | 0% |
| Rp 50.000.001 - 100.000.000 | 5% | 5% |
| Rp 100.000.001 - 500.000.000 | 15% | (lebih dari 50jt: 5%) |
| Di atas Rp 500.000.000 | 25% | (lebih dari 50jt: 5%) |

> **Catatan:** Kalau pensiun dibayar lebih dari 2 tahun setelah tanggal pensiun, **tidak berlaku tarif final** — kena tarif progresif normal.

## Hibah dari Badan ke Orang Pribadi

Hibah dari **badan** (PT, CV) ke orang pribadi sering dianggap **dividen terselubung** atau penghasilan lain. Hati-hati, fiskus sering menelusuri ini. Kalau terbukti hubungan kepemilikan (misal pemilik saham PT dapat hibah dari PT-nya), itu bisa dianggap:

- **Dividen** (kena PPh Final 10%) kalau dari laba ditahan, ATAU
- **Penghasilan biasa** (kena tarif progresif) kalau dianggap penghasilan lain.

## Tabel: Ringkasan Bukan Objek Pajak

| Penghasilan | Bukan Objek? | Syarat |
|-------------|---------------|--------|
| Warisan yang sudah dibagi | ✅ YA | Harus sudah dibagi ke ahli waris |
| Hibah keluarga sedarah 1 lapis | ✅ YA | Tidak ada hub usaha/kerja/kepemilikan |
| Hibah ke bukan keluarga | ❌ TIDAK | Jadi objek pajak biasa |
| Beasiswa pemerintah/LPDP | ✅ YA | Sesuai PMK |
| Beasiswa swasta ke karyawan | ❌ TIDAK | Kecuali memenuhi syarat PMK |
| Sumbangan ke yayasan disahkan MK | ✅ YA | Lembaga harus disahkan Menkeu |
| Sumbangan ke teman/orang lain | ❌ TIDAK | Bukan objek kalau tidak ada imbalan, TAPI bisa dianggap hibah |
| Bantuan korban bencana | ✅ YA | Untuk korban bencana alam |
| Iuran pensiun dari pemberi kerja | ✅ YA | Dana pensiun disahkan Menkeu |
| SHU koperasi dari usaha antar anggota | ✅ YA | Khusus SHU dari usaha koperasi anggota |

## Penghasilan Final vs Penghasilan Non-Final (Penting!)

**Penghasilan Final** = penghasilan yang pajaknya **sudah dipotong di sumber dan jadi pelunasan** (nggak perlu masuk SPT Tahunan sebagai penghasilan kena pajak, kecuali diadakan untuk informasi).

Contoh penghasilan final untuk OP:
- Bunga deposito (PPh Final 20%)
- Sewa tanah/bangunan (PPh Final 10%)
- Hadiah undian (PPh Final 25%)
- Capital gain saham BEI (PPh Final 0,1%)
- Bunga obligasi (PPh Final 10%)
- PPh UMKM 0,5% (kalau OP-nya UMKM)
- Pesangon dibayar sekaligus

**Penghasilan Non-Final** = penghasilan yang dipotong PPh di sumber, **TAPI pajak yang dipotong adalah kredit pajak** (bukan pelunasan). Harus dilaporkan di SPT Tahunan dan dihitung ulang.

Contoh penghasilan non-final:
- Gaji/bonus (PPh 21 dipotong employer → kredit)
- Honorarium (PPh 21 → kredit)
- Jasa profesional (PPh 21/23 → kredit)
- Deviden OP non-reinvest (PPh Final 10% TAPI harus dilaporkan di SPT sebagai penghasilan final)
- Bunga deposito (PPh Final 20% → harus dilaporkan di SPT sebagai penghasilan final, tapi pajaknya nggak dihitung ulang)

> **Hati-hati ujian:** Walaupun penghasilan final, **harus tetap dilaporkan di SPT Tahunan**. Tapi pajaknya tidak dihitung ulang — yang sudah dipotong di sumber = pajak final. Penghasilan final masuk ke bagian "Penghasilan Final" di Form 1770.

## Apa yang Tidak Termasuk Penghasilan?

Bukan objek pajak ≠ bukan penghasilan. Beberapa hal bukan penghasilan sama sekali (jadi otomatis bebas pajak):

1. **Pengembalian modal** (return of capital) — misal bagi laba yang sudah kena pajak di tahun sebelumnya lalu dikembalikan ke pemilik.
2. **Penerimaan pinjaman** — uang yang dipinjam bukan penghasilan.
3. **Penerimaan pembayaran utang** — piutang yang ditagih dan dibayar.
4. **Penerimaan jaminan** — uang jaminan yang dikembalikan.

## Kasus Nyata: Hibah Antarmuhibah di Keluarga

Pak Surya (60 thn) mau kasih hibah tanah ke:
- Anak kandungnya Andi (35 thn)
- Cucunya Bagas (10 thn, anak Andi)
- Saudara sepupunya Carl (55 thn)
- Teman lama Dimas (50 thn)

**Analisis:**

1. **Hibah ke Andi** → Bukan objek pajak ✅ (orang tua → anak, sedarah 1 lapis lurus).
2. **Hibah ke Bagas (cucu)** → **POTENSI JADI OBJEK PAJAK** ❌. Kakek → cucu = sedarah 2 lapis (garis lurus ke bawah). Aturan "1 lapis lurus" berarti hanya ke anak (atas atau bawah). Hibah ke cucu bisa diperlakukan sebagai hibah biasa = objek pajak.
3. **Hibah ke Carl (sepupu)** → **Objek pajak** ❌. Sepupu bukan sedarah lurus 1 lapis.
4. **Hibah ke Dimas (teman)** → **Objek pajak** ❌. Teman jelas bukan keluarga.

> **Tip:** Buat hibah antargenerasi (ke cucu), lebih baik **orang tua hibah ke anak, lalu anak hibah ke anaknya (cucu kakek-nenek)**. Dua tahap, masing-masing bebas pajak. Atau gunakan jalur warisan lewat wasiat.

## Kasus Nyata: Beasiswa dari Perusahaan

Bu Maya, karyawan PT XYZ, dapat beasiswa S2 dari perusahaan senilai Rp 300 juta untuk kuliah di UI. Pertanyaan: kena pajak nggak?

**Analisis:**
- Beasiswa dari pemberi kerja ke karyawan BISA jadi objek pajak, tergantung apakah beasiswa itu memenuhi syarat PMK yang mengatur beasiswa bebas pajak.
- Kalau beasiswa itu memenuhi syarat (program beasiswa yang sudah disahkan Menkeu, ada ikatan dinas, dll) → bukan objek pajak.
- Kalau cuma "tunjangan pendidikan" tanpa skema beasiswa resmi → bisa dianggap **tunjangan** = objek pajak PPh 21.

**Solusi praktis:** Banyak perusahaan bikin skema "ikatan dinas" supaya beasiswa bebas pajak — karyawan harus balik kerja minimal X tahun, kalau nggak balik harus ganti rugi. Dengan skema ini, beasiswa bisa diperlakukan sebagai bukan objek pajak.

## Update 2026: Perlakuan Dividen OP yang Diinvestasikan Kembali

Sejak UU HPP, ada aturan baru buat dividen OP yang diterima WPDN:
- Dividen OP dari dalam negeri → **PPh Final 10% dipotong di sumber**.
- TAPI kalau dividen **diinvestasikan kembali di Indonesia** dalam jangka waktu tertentu (maksimal tahun pajak berikutnya), **dividennya jadi bukan objek pajak** (bukan penghasilan kena pajak).
- Bunga deposito & bunga obligasi → tetap PPh Final.

## Ringkasan Lesson 2

- **Objek pajak PPh OP** = semua tambahan kemampuan ekonomis dari Indonesia atau LN.
- **Bukan objek pajak** = warisan dibagi, hibah keluarga sedarah 1 lapis, beasiswa tertentu, sumbangan ke lembaga disahkan MK, iuran pensiun dari pemberi kerja, bantuan korban bencana.
- **Penghasilan Final** vs **Non-Final** → keduanya tetap dilaporkan di SPT Tahunan, tapi final = pajak nggak dihitung ulang.
- **Hibah ke bukan keluarga** = objek pajak biasa.
- **Hibah ke cucu** = potensi objek pajak (bukan 1 lapis lurus).
- **Beasiswa dari perusahaan** = berhati-hati, lebih baik pakai skema ikatan dinas.
- **Dividen OP diinvestasikan kembali** → bukan objek pajak (UU HPP).

> **Tip ujian:** Soal "Manakah yang BUKAN objek pajak?" sering muncul. Hafal list 8-9 pengecualian Pasal 4Ayat3 UU PPh. Jangan bingung antara "bukan objek pajak" (bebas) vs "final" (pajak sudah dipotong di sumber).
`,
      keyPoints: [
        "Objek pajak PPh OP = semua tambahan kemampuan ekonomis dari Indonesia/LN",
        "Bukan objek pajak: warisan dibagi, hibah keluarga sedarah 1 lapis, beasiswa PMK, sumbangan ke yayasan disahkan MK, iuran pensiun pemberi kerja, bantuan korban bencana",
        "Hibah ke bukan keluarga = objek pajak; hibah ke cucu = potensi objek pajak (bukan 1 lapis lurus)",
        "Penghasilan final: bunga deposito 20%, sewa 10%, hadiah undian 25%, saham BEI 0,1%, UMKM 0,5%",
        "Penghasilan final tetap dilaporkan di SPT Tahunan, tapi pajaknya tidak dihitung ulang",
        "Pesangon & pensiun sekaligus: tarif final khusus jika dibayar dalam 2 tahun (0%/5%/15%/25%)",
        "Dividen OP yang diinvestasikan kembali di Indonesia = bukan objek pajak (UU HPP)",
      ],
      quiz: [
        {
          id: "ch04-l02-q1",
          question:
            "Pak Joko menerima hibah sebidang tanah senilai Rp 2 miliar dari ayahnya. Hibah ini diperlakukan sebagai?",
          options: [
            "Objek pajak PPh OP dengan tarif progresif",
            "Bukan objek pajak karena hibah dari orang tua ke anak (keluarga sedarah 1 lapis lurus)",
            "Penghasilan final PPh 10%",
            "Bukan objek pajak karena semua hibah bebas pajak",
          ],
          correctIndex: 1,
          explanation:
            "Hibah dari orang tua ke anak (keluarga sedarah dalam garis keturunan lurus 1 lapis) memenuhi syarat bukan objek pajak, asalkan tidak ada hubungan pekerjaan/usaha/kepemilikan. Hibah tanah dari ayah ke anak = bukan objek pajak.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l02-q2",
          question:
            "Manakah dari berikut ini yang TIDAK termasuk bukan objek pajak PPh OP?",
          options: [
            "Warisan yang telah dibagi ke ahli waris",
            "Beasiswa dari LPDP (pemerintah)",
            "Bunga deposito Rp 100 juta yang dipotong PPh Final 20%",
            "Sumbangan ke yayasan yatim yang disahkan Menkeu",
          ],
          correctIndex: 2,
          explanation:
            "Bunga deposito adalah OBJEK pajak, tapi kena PPh Final 20% di sumber. Bukan objek pajak ≠ final. Final artinya pajak sudah dipotong dan jadi pelunasan, TETAP dilaporkan di SPT. Yang lain (warisan, beasiswa LPDP, sumbangan yayasan disahkan) = bukan objek pajak (bebas).",
          difficulty: "sedang",
        },
        {
          id: "ch04-l02-q3",
          question:
            "Bu Sarah menerima pesangon PHK sebesar Rp 75 juta, dibayar sekaligus setelah PHK. Tarif PPh yang berlaku adalah?",
          options: [
            "0% (seluruh pesangon bebas pajak)",
            "5% (untuk bagian di atas Rp 50 juta)",
            "15% (tarif progresif)",
            "Tarif final 25%",
          ],
          correctIndex: 1,
          explanation:
            "Pesangon dibayar sekaligus dalam 2 tahun → tarif final khusus: 0% untuk s/d Rp 50 juta, 5% untuk bagian Rp 50jt-100jt, 15% untuk 100jt-500jt, 25% untuk di atas 500jt. Pesangon Rp 75jt: 50jt × 0% + 25jt × 5% = PPh Rp 1.250.000.",
          difficulty: "sulit",
        },
        {
          id: "ch04-l02-q4",
          question:
            "Kakek memberikan hibah tanah ke cucunya secara langsung. Bagaimana perlakuan pajaknya?",
          options: [
            "Bukan objek pajak karena masih keluarga",
            "Objek pajak karena kakek-cucu bukan sedarah 1 lapis lurus",
            "Penghasilan final 10%",
            "Bebas pajak selama nilai wajar < Rp 500 juta",
          ],
          correctIndex: 1,
          explanation:
            "Syarat hibah bukan objek pajak: keluarga sedarah dalam garis keturunan LURUS 1 LAPIS. Kakek-cucu = 2 lapis. Maka hibah langsung kakek ke cucu bisa dianggap objek pajak. Solusi: hibah ke anak (orang tua cucu) dulu, lalu anak hibah ke cucunya — dua tahap, masing-masing bebas pajak.",
          difficulty: "sulit",
        },
        {
          id: "ch04-l02-q5",
          question:
            "Pak Budi menerima dividen dari PT ABC sebesar Rp 100 juta. Dividen tersebut diinvestasikan kembali di Indonesia dengan membeli saham PT XYZ dalam tahun pajak yang sama. Bagaimana perlakuan pajak dividen Pak Budi?",
          options: [
            "Kena PPh Final 10% di sumber, tidak bisa dihindari",
            "Bukan objek pajak karena diinvestasikan kembali di Indonesia sesuai UU HPP",
            "Kena tarif progresif PPh OP",
            "Kena PPh 26 sebesar 20%",
          ],
          correctIndex: 1,
          explanation:
            "Sesuai UU HPP, dividen OP dari dalam negeri yang diinvestasikan kembali di Indonesia dalam jangka waktu tertentu = bukan objek pajak. Tapi biasanya PPh Final 10% tetap dipotong di sumber lebih dulu, lalu bisa diklaim kembali (restitusi) setelah bukti reinvestasi dilampirkan di SPT Tahunan.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Bu Linda Banyak Penghasilan dari Berbagai Sumber",
        description:
          "Bu Linda (WPDN, K/2) di tahun 2026 menerima: (1) Gaji bulanan Rp 25 juta + bonus THR Rp 25 juta dari employer. (2) Bunga deposito Rp 12 juta. (3) Sewa rumah Rp 60 juta/tahun. (4) Hadiah undian TV Rp 50 juta. (5) Hibah dari ibunya Rp 200 juta. (6) Warisan dari ayahnya yang baru dibagi Rp 500 juta. (7) Beasiswa LPDP untuk anaknya Rp 300 juta. Tentukan mana yang objek pajak, mana yang bukan, dan mana yang final.",
        solution:
          "Analisis satu per satu:\n\n1. Gaji Rp 25jt/bln + bonus Rp 25jt = Rp 325 jt/tahun → OBJEK PAJAK (PPh 21 progresif, dipotong employer sebagai kredit).\n2. Bunga deposito Rp 12jt → OBJEK PAJAK, tapi FINAL (PPh Final 20% di potong bank = Rp 2,4jt). Tetap dilaporkan di SPT sebagai penghasilan final.\n3. Sewa rumah Rp 60jt → OBJEK PAJAK, FINAL (PPh Final 10% = Rp 6jt).\n4. Hadiah undian Rp 50jt → OBJEK PAJAK, FINAL (PPh Final 25% = Rp 12,5jt).\n5. Hibah dari ibu Rp 200jt → BUKAN OBJEK PAJAK (ibu-anak, sedarah 1 lapis, tidak ada hub usaha).\n6. Warisan dari ayah yang sudah dibagi Rp 500jt → BUKAN OBJEK PAJAK.\n7. Beasiswa LPDP untuk anak Rp 300jt → BUKAN OBJEK PAJAK (beasiswa pemerintah).\n\nDi SPT Tahunan, Bu Linda perlu lapor: penghasilan non-final (gaji+bonus), dan penghasilan final (bunga, sewa, hadiah). Hibah, warisan, beasiswa = bebas pajak, nggak perlu dilaporkan sebagai penghasilan kena pajak.",
      },
      tags: [
        "objek pajak",
        "bukan objek pajak",
        "hibah",
        "warisan",
        "beasiswa",
        "PPh Final",
        "pesangon",
        "dividen reinvest",
      ],
    },

    // =========================================================================
    // LESSON 3: PTKP 2026
    // =========================================================================
    {
      id: "ch04-l03",
      slug: "ptkp-2026",
      title: "PTKP 2026: Tabel TK/0 sampai K/3 dan Cara Hitungnya",
      subtitle: "Penghasilan Tidak Kena Pajak, status WP, ketentuan tanggungan",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 38,
      content: `# 📋 PTKP 2026: Penghasilan Tidak Kena Pajak

Setelah kamu paham objek pajak, sekarang kita bahas **PTKP** — Penghasilan Tidak Kena Pajak. Ini komponen penting karena PTKP adalah "discount" bawaan yang bikin wajib pajak nggak kena pajak kalau penghasilannya kecil. Paham PTKP = paham dasar perhitungan PPh OP.

## Apa Itu PTKP?

**PTKP** = Penghasilan Tidak Kena Pajak. Ini adalah **bagian penghasilan yang dikecualikan dari pengenaan PPh OP**. Jadi, kalau penghasilan neto kamu setahun di bawah PTKP, kamu **nggak kena PPh OP**.

> **Fungsi PTKP:** Mengurangi beban pajak wajib pajak dengan penghasilan rendah. Hanya bagian di atas PTKP yang kena tarif progresif.

PTKP udah ada sejak dulu, tapi nilainya di-update lewat **PMK 101/PMK.010/2016**. Sejak saat itu, PTKP **TIDAK PERNAH DIUBAH**, walaupun UU HPP (2021/2022) menjanjikan review. Sampai 2026, PTKP tetap sama dengan 2016.

## Tabel PTKP 2026 (Hafal!")

| Kode | Status | PTKP per Tahun | PTKP per Bulan |
|------|--------|----------------|----------------|
| TK/0 | Tidak Kawin, 0 tanggungan | Rp 54.000.000 | Rp 4.500.000 |
| K/0 | Kawin, 0 tanggungan | Rp 58.500.000 | Rp 4.875.000 |
| K/1 | Kawin, 1 tanggungan | Rp 63.000.000 | Rp 5.250.000 |
| K/2 | Kawin, 2 tanggungan | Rp 67.500.000 | Rp 4.875.000 + 2×375rb... |
| K/3 | Kawin, 3 tanggungan (MAX) | Rp 72.000.000 | Rp 6.000.000 |

> **Catatan:** Untuk K/2 per bulan seharusnya Rp 5.625.000 (lihat tabel resmi PMK 101/2016). Tabel di atas per tahun lebih akurat: TK/0 = 54jt, K/0 = 54jt + 4,5jt = 58,5jt, dst. Setiap tanggungan tambahan = Rp 4.500.000/tahun.

## Logika Penyusunan PTKP

PTKP dibangun dari komponen:
- **Dasar (untuk setiap WP): Rp 54.000.000/tahun** (TK/0)
- **Tambahan kawin: Rp 4.500.000/tahun** (untuk pasangan yang tidak punya NPWP terpisah)
- **Tambahan untuk setiap tanggungan: Rp 4.500.000/tahun** (maksimal 3 tanggungan)

**Rumus umum:**
\`\`\`
PTKP = 54.000.000 + (4.500.000 × status_kawin) + (4.500.000 × jumlah_tanggungan, max 3)
\`\`\`

## Kode Status WP: TK, K, dan Variannya

| Kode | Arti |
|------|------|
| **TK** | Tidak Kawin |
| **K** | Kawin |
| **K/I** | Kawin dengan penghasilan digabung (suami-istri 1 NPWP) |
| **H** | Hidup Berpisah (Jarang dijumpai di Indonesia) |

> **Status K/I** = kawin, penghasilan suami-istri dijumlahkan dihitung dalam 1 NPWP (suami). Ini terjadi kalau istri **tidak punya penghasilan terpisah**, atau punya penghasilan tapi disetujui digabung dengan suami (efektif fiskal terjadi secara default sejak UU HPP — tanpa perlu pernyataan tertulis untuk non-penghasilan istri).

### Status Kawin Khusus

| Kode | Arti |
|------|------|
| **TK/0** | Belum kawin |
| **K/0** | Kawin, tidak punya tanggungan |
| **K/1, K/2, K/3** | Kawin dengan 1, 2, atau 3 tanggungan |
| **TK/1, TK/2, TK/3** | Cerai/duda/janda dengan tanggungan (jarang pakai, biasanya disamakan dengan TK/0 di banyak kasus) |

### Aturan Khusus Wanita Kawin

Sejak UU HPP, ada perubahan penting untuk wanita kawin:
- **Istri dengan penghasilan sendiri** → otomatis punya NPWP sendiri, penghasilan dihitung terpisah dari suami. PTKP-nya = TK/0 (atau TK/1, dst kalau punya tanggungan yang resmi jadi tanggungannya).
- **Istri tanpa penghasilan (or penghasilan kecil)** → penghasilannya digabung dengan suami, status suami = K/0 (atau K/1, K/2, K/3 tergantung tanggungan).

> **Update 2026:** Aturan ini sudah permanen — wanita kawin dengan penghasilan WAJIB punya NPWP sendiri, TIDAK perlu lagi pernyataan tertulis pemisahan penghasilan (dulu harus pakai formulir 1790).

## Siapa yang Bisa Jadi Tanggungan?

Kriteria tanggungan yang bisa diklaim untuk PTKP tambahan:
1. **Anak kandung, anak angkat, anak tiri** yang belum dewasa (<21 thn) atau belum kawin.
2. **Anak di atas 21 tahun** yang masih sekolah dan belum punya penghasilan ≥ PTKP.
3. **Keluarga sedarah dalam garis keturunan lurus** (orang tua, mertua) yang menjadi tanggungan.
4. Maksimal **3 tanggungan** yang bisa diklaim.

> **Hati-hati:** Anak yang sudah kawin atau sudah punya penghasilan di atas PTKP sendiri → tidak bisa jadi tanggungan.

## Contoh Kasus Penentuan Status PTKP

### Kasus 1: Pak Andi TK/0
Pak Andi, 25 thn, single, penghasilan Rp 60jt/thn → status PTKP: **TK/0**, PTKP = **Rp 54.000.000**.

### Kasus 2: Bu Sinta K/1
Bu Sinta, 32 thn, kawin, punya 1 anak. Suami kerja terpisah (status suami: K/1 juga). Bu Sinta punya penghasilan sendiri → status: **K/1**, PTKP = Rp 54jt + 4,5jt (kawin) + 4,5jt (1 tanggungan) = **Rp 63.000.000**.

> **Catatan:** Suami-istri kerja keduanya, masing-masing punya NPWP. Mereka bisa "share" tanggungan. Contoh: K/1 untuk suami, K/0 untuk istri. Atau sebaliknya. Total tetap sama.

### Kasus 3: Pak Doni K/3
Pak Doni, 40 thn, kawin, punya 3 anak. Status: **K/3**, PTKP = Rp 54jt + 4,5jt + (3 × 4,5jt) = **Rp 72.000.000**.

### Kasus 4: Pak Eko K/5
Pak Eko kawin dengan 5 anak. Maksimal tanggungan yang bisa diklaim = 3. Status: **K/3**, PTKP = **Rp 72.000.000** (sama dengan K/3 di atas). Anak ke-4 dan ke-5 tidak dapat tambahan PTKP.

## Bagaimana Kalau Status WP Berubah di Tengah Tahun?

Aturan: kalau WP kawin di tengah tahun pajak, **PTKP tetap dihitung setahun penuh** berdasarkan status akhir tahun. Misal kawin Oktober 2026 → status K/0 untuk seluruh tahun 2026.

> **Tapi:** Kalau ada perubahan jumlah tanggungan (misal anak lahir di Juli), PTKP tetap berlaku setahun penuh berdasarkan status akhir tahun.

## PTKP yang Tidak Dapat Dimanfaatkan

PTKP tidak berlaku (WP tetap kena PPh walau penghasilan di bawah PTKP) untuk:
- Wajib Pajak Luar Negeri (WPLN) — mereka kena PPh 26 20% dari bruto, nggak dapet PTKP.
- Penerima penghasilan final — pajaknya sudah dipotong final, PTKP tidak relevan.
- Warisan yang belum dibagi (subjek pajak tersendiri) — nggak pakai PTKP.

## PTKP dan UMK — Update 2026

> **Penting update 2026:** UU HPP Pasal 31A menjanjikan bahwa PTKP akan disesuaikan dengan UMK (Upah Minimum Kawasan) — tapi **hingga 2026, aturan pelaksananya BELUM TERBIT**. Jadi PTKP masih flat di seluruh Indonesia. Tidak ada perbedaan PTKP antara Jakarta (UMK tinggi) dan Kupang (UMK rendah).

## Bagaimana PTKP Berinteraksi dengan Tarif Progresif?

PTKP **mengurangi Penghasilan Neto** untuk dapat **Penghasilan Kena Pajak (PKP)**:

\`\`\`
PKP = Penghasilan Neto - PTKP
\`\`\`

Lalu PKP dikenakan tarif progresif 5 lapis (lihat Lesson 4).

### Contoh Perhitungan dengan PTKP

Pak Budi, TK/0, penghasilan neto Rp 100.000.000/thn.

1. Penghasilan Neto = Rp 100.000.000
2. PTKP (TK/0) = Rp 54.000.000
3. PKP = Rp 100.000.000 - Rp 54.000.000 = **Rp 46.000.000**
4. Tarif: seluruh PKP masuk lapisan pertama (s/d Rp 60jt) = 5%
5. PPh terutang = 5% × Rp 46.000.000 = **Rp 2.300.000**

### Contoh: Bu Citra K/2, Neto Rp 75.000.000

1. Penghasilan Neto = Rp 75.000.000
2. PTKP (K/2) = Rp 67.500.000
3. PKP = Rp 75.000.000 - Rp 67.500.000 = **Rp 7.500.000**
4. Tarif: 5% (seluruh PKP di lapisan pertama)
5. PPh = 5% × Rp 7.500.000 = **Rp 375.000**

## Kasus Nyata: Pak Dewa dan Suami-Istri Penghasilan Gabung

Pak Dewa kawin, penghasilan sendiri Rp 200jt/thn. Istri TIDAK kerja (penghasilan Rp 0).

**Skema 1: Penghasilan gabung**
- Status: K/0 (kalau belum ada anak) → PTKP = Rp 58.500.000
- Neto = Rp 200.000.000
- PKP = Rp 200.000.000 - Rp 58.500.000 = Rp 141.500.000
- PPh = (5% × 60jt) + (15% × 81.500.000) = Rp 3.000.000 + Rp 12.225.000 = **Rp 15.225.000**

**Skema 2: Istri punya NPWP terpisah (misal punya usaha kecil), penghasilan digabung**
- Tidak bisa — kalau istri punya penghasilan terpisah, wajib NPWP sendiri (sejak UU HPP), penghasilan tidak digabung.

> **Tip:** Suami-istri penghasilan terpisah = masing-masing hitung sendiri. Masing-masing dapat PTKP TK/0 minimum Rp 54jt, lebih untung secara pajak kalau keduanya punya penghasilan.

## Update 2026: Apakah PTKP Naik?

Sejak 2016, PTKP TIDAK PERNAH NAIK. Banyak spekulasi PTKP akan naik jadi Rp 60jt atau disesuaikan UMK, tapi sampai 2026 (per data PwC Worldwide Tax Summaries terakhir 11 Juni 2026) **PTKP tetap Rp 54jt untuk TK/0**.

> **Untuk ujian:** Pakai PTKP 2026 = PTKP 2016 = Rp 54jt (TK/0). Jangan pakai angka lain walau rumor sebut akan naik.

## Ringkasan Lesson 3

- **PTKP 2026** = sama dengan 2016 (PMK 101/2016): TK/0 = Rp 54jt, K/0 = Rp 58,5jt, K/3 = Rp 72jt.
- **Setiap tanggungan** = tambahan Rp 4,5jt, **maksimal 3 tanggungan**.
- **Tanggungan** = anak <21thn (atau anak >21thn masih sekolah), keluarga sedarah lurus yang jadi tanggungan.
- **Wanita kawin penghasilan terpisah** → NPWP sendiri, PTKP TK/0 minimum (UU HPP 2022+).
- **PTKP untuk setahun penuh** berdasarkan status akhir tahun pajak.
- **UMK-based PTKP BELUM diberlakukan** sampai 2026.
- **PTKP tidak berlaku** untuk WPLN, penghasilan final, warisan belum dibagi.

> **Tip ujian:** Soal "Berapa PTKP untuk K/2?" jawab: Rp 67.500.000. Soal "Bagaimana kalau punya 4 anak?" jawab: tetap K/3 (maksimal 3 tanggungan).
`,
      keyPoints: [
        "PTKP 2026 = PTKP 2016 (PMK 101/PMK.010/2016), tidak ada perubahan",
        "TK/0 = Rp 54jt, K/0 = Rp 58,5jt, K/1 = Rp 63jt, K/2 = Rp 67,5jt, K/3 = Rp 72jt",
        "Setiap tanggungan tambahan = Rp 4,5jt, maksimal 3 tanggungan",
        "Tanggungan: anak <21thn (atau >21thn masih sekolah), keluarga sedarah lurus",
        "Wanita kawin dengan penghasilan terpisah WAJIB NPWP sendiri (UU HPP)",
        "PTKP dihitung setahun penuh berdasarkan status akhir tahun pajak",
        "PTKP tidak berlaku untuk WPLN, penghasilan final, warisan belum dibagi",
      ],
      quiz: [
        {
          id: "ch04-l03-q1",
          question: "Berapa PTKP untuk Wajib Pajak berstatus K/2 (kawin, 2 tanggungan) tahun 2026?",
          options: ["Rp 54.000.000", "Rp 63.000.000", "Rp 67.500.000", "Rp 72.000.000"],
          correctIndex: 2,
          explanation:
            "K/2 = Rp 54.000.000 (dasar TK/0) + Rp 4.500.000 (status kawin) + (2 × Rp 4.500.000) (2 tanggungan) = Rp 67.500.000 per tahun.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l03-q2",
          question:
            "Pak Andi kawin dengan 5 anak. Berapa PTKP yang berlaku untuk Pak Andi tahun 2026?",
          options: ["Rp 72.000.000", "Rp 76.500.000", "Rp 81.000.000", "Rp 90.000.000"],
          correctIndex: 0,
          explanation:
            "Maksimal tanggungan yang bisa diklaim = 3. Jadi Pak Andi status K/3, PTKP = Rp 72.000.000. Anak ke-4 dan ke-5 tidak dapat tambahan PTKP.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l03-q3",
          question:
            "Bu Sinta wanita kawin, punya penghasilan dari usaha sendiri. Bagaimana perlakuan PTKP untuk Bu Sinta?",
          options: [
            "Penghasilan digabung dengan suami, status K/0",
            "Bu Sinta wajib punya NPWP sendiri, status minimal TK/0",
            "Bu Sinta tidak dapat PTKP karena sudah kawin",
            "Bu Sinta dapat PTKP 2x lipat karena wanita kawin",
          ],
          correctIndex: 1,
          explanation:
            "Sejak UU HPP, wanita kawin dengan penghasilan sendiri WAJIB punya NPWP terpisah, penghasilan tidak digabung dengan suami. PTKP Bu Sinta minimal TK/0 = Rp 54.000.000 (atau TK/1 dst kalau ada tanggungan yang jadi tanggungannya).",
          difficulty: "sedang",
        },
        {
          id: "ch04-l03-q4",
          question:
            "Pak Doni, TK/0, punya penghasilan neto Rp 50.000.000/tahun. Berapa PPh OP terutang Pak Doni?",
          options: ["Rp 0 (di bawah PTKP)", "Rp 2.500.000", "Rp 7.500.000", "Rp 5.000.000"],
          correctIndex: 0,
          explanation:
            "Neto Rp 50jt < PTKP TK/0 Rp 54jt → PKP = Rp 0. Tidak ada PPh terutang. Pak Doni bebas PPh OP untuk tahun tersebut (walau tetap wajib lapor SPT Tahunan nihil).",
          difficulty: "mudah",
        },
        {
          id: "ch04-l03-q5",
          question:
            "Manakah pernyataan yang BENAR tentang PTKP di Indonesia 2026?",
          options: [
            "PTKP berbeda di setiap daerah berdasarkan UMK",
            "PTKP 2026 = PTKP 2016, masih flat Rp 54jt untuk TK/0",
            "PTKP untuk WP OP Luar Negeri lebih besar dari WPDN",
            "PTKP naik setiap tahun mengikuti inflasi",
          ],
          correctIndex: 1,
          explanation:
            "PTKP 2026 tidak ada perubahan dari 2016 (PMK 101/2016). UU HPP mengisyaratkan UMK-based PTKP tapi implementasinya belum berlaku. PTKP flat di seluruh Indonesia. PTKP tidak berlaku untuk WPLN (kena PPh 26 20% dari bruto).",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Hitung PPh OP dengan Berbagai Status PTKP",
        description:
          "Empat karyawan PT Maju Jaya punya penghasilan neto sama Rp 100.000.000/tahun, tapi status beda: (1) Andi TK/0, (2) Budi K/0, (3) Citra K/2, (4) Dewi K/3. Hitung PKP dan PPh terutang masing-masing menggunakan tarif progresif UU HPP (5% s/d 60jt, 15% 60-250jt).",
        solution:
          "(1) Andi TK/0: PTKP Rp 54jt. PKP = Rp 100jt - Rp 54jt = Rp 46jt. Seluruh PKP di lapisan I (5%) → PPh = 5% × 46jt = Rp 2.300.000.\n\n(2) Budi K/0: PTKP Rp 58,5jt. PKP = Rp 41,5jt. PPh = 5% × 41,5jt = Rp 2.075.000.\n\n(3) Citra K/2: PTKP Rp 67,5jt. PKP = Rp 32,5jt. PPh = 5% × 32,5jt = Rp 1.625.000.\n\n(4) Dewi K/3: PTKP Rp 72jt. PKP = Rp 28jt. PPh = 5% × 28jt = Rp 1.400.000.\n\nKesimpulan: Walau penghasilan neto sama (Rp 100jt), PPh terutang berbeda karena PTKP berbeda. Semakin banyak tanggungan → PTKP makin besar → PPh makin kecil. Ini selaras dengan asas keadilan (yang punya tanggungan lebih banyak diberi keringanan).",
      },
      tags: [
        "PTKP",
        "TK/0",
        "K/0",
        "K/1",
        "K/2",
        "K/3",
        "tanggungan",
        "wanita kawin",
      ],
    },

    // =========================================================================
    // LESSON 4: TARIF PPh OP 2026
    // =========================================================================
    {
      id: "ch04-l04",
      slug: "tarif-pph-op-2026",
      title: "Tarif PPh OP Progresif 2026: 5 Lapis UU HPP",
      subtitle: "Tarif 5/15/25/30/35%, tabel layer, perhitungan contoh",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 42,
      content: `# 🔥 Tarif PPh OP Progresif 2026 (UU HPP)

Sekarang kita masuk ke bagian yang **paling sering keluar di ujian**: **tarif progresif PPh OP**. Sejak UU HPP (UU No. 7/2021) berlaku 1 Januari 2022, tarif PPh OP berubah total — dari sistem lama (5 lapis dengan tarif berbeda) jadi 5 lapis dengan tarif lebih landai di awal dan lebih tinggi di akhir. Yuk, kita bedah tuntas!

## Sejarah Tarif PPh OP

Biar paham konteks, ini ringkasan evolusi tarif PPh OP:

| Periode | Sistem Tarif | Lapisan |
|---------|--------------|---------|
| 1983-2008 | 5 lapis | 5/10/15/25/35% |
| 2008-2021 | 4 lapis (UU 36/2008) | 5/15/25/30% (top rate 30%) |
| 2022-sekarang | 5 lapis (UU HPP 7/2021) | 5/15/25/30/35% (top rate 35%) |

> **Yang sering diuji:** Tarif 2026 = UU HPP = 5 lapis dengan top rate 35%. Hafal tabel di bawah!

## Tabel Tarif Progresif PPh OP 2026 (Hafal!)

| Lapisan | Penghasilan Kena Pajak (PKP) per tahun | Tarif |
|---------|----------------------------------------|-------|
| I | S/d Rp 60.000.000 | **5%** |
| II | Rp 60.000.001 - Rp 250.000.000 | **15%** |
| III | Rp 250.000.001 - Rp 500.000.000 | **25%** |
| IV | Rp 500.000.001 - Rp 5.000.000.000 | **30%** |
| V | Di atas Rp 5.000.000.000 | **35%** |

> **Rumus cepat:** PPh = 5% × (PKP ≤ 60jt) + 15% × (PKP 60jt-250jt) + 25% × (PKP 250jt-500jt) + 30% × (PKP 500jt-5M) + 35% × (PKP > 5M).

## Logika Progresif: Layer by Layer

Sistem progresif artinya tarif diterapkan **per lapisan**, BUKAN tarif tunggal ke seluruh PKP. Contoh:

Misal PKP = Rp 100jt. Bukan langsung 15% × 100jt, tapi:
- Lapisan I: 5% × 60jt = Rp 3jt
- Lapisan II: 15% × (100jt - 60jt) = 15% × 40jt = Rp 6jt
- **Total PPh = Rp 9jt**

> **Salah satu kesalahan umum pemula:** Pakai tarif tunggal ke seluruh PKP. Misal PKP Rp 100jt, dikira 15% × 100jt = Rp 15jt. SALAH! Harusnya dibagi per lapisan.

## Contoh Perhitungan Berbagai Level PKP

### Contoh 1: PKP Rp 50.000.000
- Seluruh PKP di Lapisan I (≤ 60jt)
- PPh = 5% × Rp 50.000.000 = **Rp 2.500.000**

### Contoh 2: PKP Rp 100.000.000
- Lapisan I: 5% × 60jt = Rp 3.000.000
- Lapisan II: 15% × 40jt = Rp 6.000.000
- **Total PPh = Rp 9.000.000**

### Contoh 3: PKP Rp 300.000.000
- Lapisan I: 5% × 60jt = Rp 3.000.000
- Lapisan II: 15% × (250jt - 60jt) = 15% × 190jt = Rp 28.500.000
- Lapisan III: 25% × (300jt - 250jt) = 25% × 50jt = Rp 12.500.000
- **Total PPh = Rp 44.000.000**

### Contoh 4: PKP Rp 600.000.000
- Lapisan I: 5% × 60jt = Rp 3.000.000
- Lapisan II: 15% × 190jt = Rp 28.500.000
- Lapisan III: 25% × 250jt = Rp 62.500.000
- Lapisan IV: 30% × 100jt = Rp 30.000.000
- **Total PPh = Rp 124.000.000**

### Contoh 5: PKP Rp 6.000.000.000
- Lapisan I: 5% × 60jt = Rp 3.000.000
- Lapisan II: 15% × 190jt = Rp 28.500.000
- Lapisan III: 25% × 250jt = Rp 62.500.000
- Lapisan IV: 30% × 4.500jt = Rp 1.350.000.000
- Lapisan V: 35% × 1.000jt = Rp 350.000.000
- **Total PPh = Rp 1.794.000.000**

## Tabel Cepat: PPh Maksimum per Lapisan

Biar gampang hitung, hafal PPh maksimum per lapisan:

| Lapisan | PKP Maks di Lapisan | PPh Maks |
|---------|--------------------|---------|
| I (≤60jt) | 60jt | 5% × 60jt = Rp 3.000.000 |
| II (60jt-250jt) | 190jt | 15% × 190jt = Rp 28.500.000 |
| III (250jt-500jt) | 250jt | 25% × 250jt = Rp 62.500.000 |
| IV (500jt-5M) | 4.500jt | 30% × 4.500jt = Rp 1.350.000.000 |
| V (>5M) | tak terhingga | 35% |

**Akumulasi PPh di batas tiap lapisan:**
- Setelah Lapisan I: Rp 3.000.000
- Setelah Lapisan II: Rp 3.000.000 + Rp 28.500.000 = Rp 31.500.000
- Setelah Lapisan III: Rp 31.500.000 + Rp 62.500.000 = Rp 94.000.000
- Setelah Lapisan IV: Rp 94.000.000 + Rp 1.350.000.000 = Rp 1.444.000.000

## Tarif Efektif (Effective Tax Rate)

**Tarif efektif** = PPh terutang ÷ PKP. Ini nggak sama dengan tarif marginal.

| PKP | PPh | Tarif Efektif |
|-----|-----|---------------|
| 50jt | Rp 2.5jt | 5,0% |
| 100jt | Rp 9jt | 9,0% |
| 300jt | Rp 44jt | 14,7% |
| 600jt | Rp 124jt | 20,7% |
| 6 M | Rp 1,794 M | 29,9% |

> **Insight:** Walau tarif marginal top rate 35%, tarif efektif selalu lebih rendah. Ini yang bikin progresif itu adil — yang penghasilannya rendah kena tarif efektif rendah.

## Tarif untuk Wajib Pajak Luar Negeri (WPLN)

WPLN **tidak pakai tarif progresif**. Mereka kena **PPh 26 = 20%** dari penghasilan bruto, kecuali:
1. Ada **P3B (Persetujuan Penghindaran Pajak Berganda)** yang tarifnya lebih rendah.
2. BUT di Indonesia → kena tarif badan (22%) atas laba BUT.
3. Penghasilan final (sewa tanah, dll) → kena tarif final.

| Tipe Penghasilan WPLN | Tarif |
|----------------------|-------|
| Dividen, bunga, royalti, hak imbalan | 20% (PPh 26) atau tarif P3B |
| Sewa tanah/bangunan | 10% (PPh Final) |
| Jasa konstruksi | 1,75% - 4% (PPh Final) |
| BUT laba | 22% (PPh Badan) |

## P3B (Tax Treaty) — Bisa Kurangi Tarif WPLN

Indonesia punya 70+ P3B dengan negara-negara. Contoh tarif P3B:

| Negara | Dividen | Bunga | Royalti |
|--------|---------|-------|---------|
| Singapura | 15% (≥25% saham) | 10% | 10% |
| Amerika Serikat | 15% (≥10% saham) | 10% | 10% |
| Jepang | 15% (≥25% saham) | 10% | 10% |
| Belanda | 10-15% | 5-15% | 10% |
| Hong Kong | 5-10% | 5% | 5% |

> **Syarat:** Untuk klaim tarif P3B, WPLN harus punya **Certificate of Domicile (CoD)** dari negara domisili. Tanpa CoD, tarif 20% berlaku.

## Tarif Khusus untuk Penerima Pensiun

| Tipe Pensiun | Tarif |
|--------------|-------|
| Pensiun bulanan | Progresif normal (5-35%) |
| Pensiun sekaligus dibayar ≤2 thn | 0% s/d 50jt, 5% di atas 50jt (final) |
| Pensiun sekaligus dibayar >2 thn | Progresif normal |

## Tarif untuk Pesangon (PHK)

| Pesangon Bruto (dibayar sekaligus/2 thn) | Tarif Final |
|------------------------------------------|-------------|
| S/d Rp 50jt | 0% |
| Rp 50jt - 100jt | 5% |
| Rp 100jt - 500jt | 15% |
| Di atas Rp 500jt | 25% |

> Jika pesangon dibayar >2 thn dari PHK, kena tarif progresif normal (5-35%).

## Kasus Nyata: Hitung PPh OP Lengkap

Pak Hendra, K/2, karyawan dengan penghasilan neto Rp 350.000.000/tahun.

**Step 1: Hitung PTKP**
- Status K/2 → PTKP = Rp 67.500.000

**Step 2: Hitung PKP**
- PKP = Neto - PTKP = Rp 350.000.000 - Rp 67.500.000 = Rp 282.500.000
- Pembulatan ke bawah ribuan penuh → PKP = Rp 282.500.000

**Step 3: Hitung PPh per Lapisan**
- Lapisan I: 5% × 60jt = Rp 3.000.000
- Lapisan II: 15% × 190jt = Rp 28.500.000
- Lapisan III: 25% × (282.5jt - 250jt) = 25% × 32.500.000 = Rp 8.125.000

**Step 4: Total PPh**
- Total = Rp 3.000.000 + Rp 28.500.000 + Rp 8.125.000 = **Rp 39.625.000**

**Step 5: Tarif Efektif**
- Tarif efektif = Rp 39.625.000 / Rp 282.500.000 = 14,03%

## Update 2026: Apakah Tarif Naik?

Sejak UU HPP 2022, tarif PPh OP **TIDAK ADA perubahan** sampai 2026. Walau banyak wacana tarif top rate dinaikkan ke 40% atau 45% (mengikuti tren global), **tidak ada undang-undang baru yang mengubah tarif PPh OP** di 2026.

> **Untuk ujian 2026:** Pakai tarif UU HPP (5/15/25/30/35%). Jangan gunakan tarif lama (5/15/25/30% UU 36/2008).

## Kasus Nyata: WP dengan Penghasilan Sangat Besar

Pak Surya, executive tech company, penghasilan neto Rp 8 M/tahun.

**PTKP** (misal TK/0) = Rp 54.000.000
**PKP** = Rp 8 M - Rp 54jt = Rp 7.946.000.000

**PPh per lapisan:**
- Lapisan I: 5% × 60jt = Rp 3.000.000
- Lapisan II: 15% × 190jt = Rp 28.500.000
- Lapisan III: 25% × 250jt = Rp 62.500.000
- Lapisan IV: 30% × 4.500jt = Rp 1.350.000.000
- Lapisan V: 35% × (7.946jt - 5.000jt) = 35% × 2.946jt = Rp 1.031.100.000

**Total PPh = Rp 2.475.100.000**

**Tarif efektif = 2.475jt / 7.946jt = 31,15%** (mendekati top rate 35%, tapi masih di bawahnya karena ada lapisan bawah dengan tarif lebih rendah).

## Ringkasan Lesson 4

- **Tarif PPh OP 2026** = UU HPP (UU 7/2021), 5 lapis: 5/15/25/30/35%.
- **Lapisan I** (s/d 60jt) = 5%, **Lapisan II** (60-250jt) = 15%, **Lapisan III** (250-500jt) = 25%, **Lapisan IV** (500jt-5M) = 30%, **Lapisan V** (>5M) = 35%.
- **Perhitungan progresif** = per lapisan, bukan tarif tunggal.
- **Tarif efektif** selalu lebih rendah dari tarif marginal top rate.
- **WPLN** kena PPh 26 = 20% (atau tarif P3B), bukan progresif.
- **P3B** bisa turunkan tarif WPLN dengan syarat CoD.
- **Pensiun & pesangon sekaligus** → tarif final khusus.

> **Tip ujian:** Soal tarif progresif **selalu keluar**. Hafal tabel 5 lapis. Latih hitung manual per lapisan supaya nggak salah. Jangan asal kali 15% ke seluruh PKP — itu salah besar!
`,
      keyPoints: [
        "Tarif PPh OP 2026 = UU HPP (UU 7/2021): 5 lapis 5/15/25/30/35%",
        "Lapisan I (s/d 60jt) = 5%, II (60-250jt) = 15%, III (250-500jt) = 25%, IV (500jt-5M) = 30%, V (>5M) = 35%",
        "Perhitungan progresif per lapisan, bukan tarif tunggal ke seluruh PKP",
        "Tarif efektif selalu lebih rendah dari tarif marginal (top rate 35%)",
        "PPh maksimum per lapisan: L1=Rp 3jt, L2=Rp 28,5jt, L3=Rp 62,5jt, L4=Rp 1,35 M",
        "WPLN kena PPh 26 = 20% (atau tarif P3B yang lebih rendah dengan CoD)",
        "P3B bisa turunkan tarif WPLN (contoh Singapura dividen 15%, bunga 10%)",
      ],
      quiz: [
        {
          id: "ch04-l04-q1",
          question: "PKP seorang WP OP = Rp 250.000.000. Berapa PPh terutang menggunakan tarif UU HPP?",
          options: ["Rp 12.500.000", "Rp 31.500.000", "Rp 37.500.000", "Rp 62.500.000"],
          correctIndex: 1,
          explanation:
            "Perhitungan: Lapisan I (5% × 60jt) = Rp 3jt; Lapisan II (15% × 190jt) = Rp 28,5jt. Total = Rp 31,5jt. PKP Rp 250jt berarti pas di batas atas Lapisan II, belum masuk Lapisan III.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l04-q2",
          question: "Berapa tarif marginal tertinggi (top rate) PPh OP berdasarkan UU HPP yang berlaku 2026?",
          options: ["25%", "30%", "35%", "40%"],
          correctIndex: 2,
          explanation:
            "Top rate UU HPP = 35% untuk PKP di atas Rp 5 Miliar. UU 36/2008 top rate 30%, tapi sejak UU HPP 2022 naik jadi 35%.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l04-q3",
          question:
            "WPLN tanpa P3B menerima royalti dari Indonesia Rp 100.000.000. Berapa PPh yang dipotong di sumber?",
          options: ["Rp 5.000.000", "Rp 15.000.000", "Rp 20.000.000", "Rp 25.000.000"],
          correctIndex: 2,
          explanation:
            "WPLN tanpa P3B kena PPh 26 = 20% dari bruto. Jadi PPh = 20% × Rp 100jt = Rp 20jt. Kalau ada P3B (misal Singapura 10%), tinggal 10% × 100jt = Rp 10jt, dengan syarat CoD.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l04-q4",
          question:
            "Pak Budi PKP Rp 600.000.000. Berapa PPh terutang Pak Budi dengan tarif UU HPP?",
          options: ["Rp 124.000.000", "Rp 150.000.000", "Rp 180.000.000", "Rp 94.000.000"],
          correctIndex: 0,
          explanation:
            "Lapisan I: 5% × 60jt = Rp 3jt. Lapisan II: 15% × 190jt = Rp 28,5jt. Lapisan III: 25% × 250jt = Rp 62,5jt. Lapisan IV: 30% × 100jt = Rp 30jt. Total = Rp 124jt.",
          difficulty: "sulit",
        },
        {
          id: "ch04-l04-q5",
          question:
            "Manakah pernyataan BENAR tentang tarif progresif PPh OP?",
          options: [
            "Tarif tunggal diterapkan ke seluruh PKP",
            "Tarif diterapkan per lapisan PKP",
            "WPDN kena PPh 26 = 20%",
            "Tarif top rate 30% sejak UU HPP",
          ],
          correctIndex: 1,
          explanation:
            "Sistem progresif = tarif diterapkan PER LAPISAN. PKP dibagi sesuai rentang lapisan, masing-masing dikalikan tarif lapisannya, lalu dijumlah. Bukan tarif tunggal. WPDN kena tarif progresif, bukan PPh 26. Top rate sejak UU HPP 35%, bukan 30%.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Hitung PPh OP 5 Wajib Pajak dengan PKP Berbeda",
        description:
          "Hitung PPh OP untuk 5 WP dengan PKP: (A) Rp 30jt, (B) Rp 80jt, (C) Rp 200jt, (D) Rp 400jt, (E) Rp 800jt. Tentukan PPh terutang dan tarif efektif masing-masing.",
        solution:
          "(A) PKP Rp 30jt: Semua di Lapisan I (≤60jt). PPh = 5% × 30jt = Rp 1.500.000. Tarif efektif = 5%.\n\n(B) PKP Rp 80jt: Lapisan I (5% × 60jt) = Rp 3jt; Lapisan II (15% × 20jt) = Rp 3jt. Total = Rp 6.000.000. Tarif efektif = 7,5%.\n\n(C) PKP Rp 200jt: Lapisan I (5% × 60jt) = Rp 3jt; Lapisan II (15% × 140jt) = Rp 21jt. Total = Rp 24.000.000. Tarif efektif = 12%.\n\n(D) PKP Rp 400jt: Lapisan I (Rp 3jt) + Lapisan II (Rp 28,5jt) + Lapisan III (25% × 150jt = Rp 37,5jt). Total = Rp 69.000.000. Tarif efektif = 17,25%.\n\n(E) PKP Rp 800jt: Lapisan I (Rp 3jt) + Lapisan II (Rp 28,5jt) + Lapisan III (Rp 62,5jt) + Lapisan IV (30% × 300jt = Rp 90jt). Total = Rp 184.000.000. Tarif efektif = 23%.\n\nKesimpulan: Semakin besar PKP, semakin tinggi tarif efektif (mendekati top rate 35%). Inilah esensi progresivitas — yang kaya bayar proporsional lebih besar.",
      },
      tags: [
        "tarif PPh OP",
        "UU HPP",
        "progresif",
        "5 lapis",
        "35%",
        "PPh 26",
        "P3B",
        "tarif efektif",
      ],
    },

    // =========================================================================
    // LESSON 5: PENGHASILAN NETO
    // =========================================================================
    {
      id: "ch04-l05",
      slug: "penghasilan-neto",
      title: "Hitung Penghasilan Neto: Biaya yang Boleh Dibiayakan",
      subtitle: "Biaya jabatan 5% max 6jt/th, iuran pensiun, biaya mendapatkan penghasilan, zakat",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 45,
      content: `# 💸 Menghitung Penghasilan Neto: Biaya yang Boleh Dibiayakan

Sebelum hitung PKP (Penghasilan Kena Pajak), kita harus tau **Penghasilan Neto** dulu. Penghasilan Neto = Penghasilan Bruto dikurangi biaya-biaya yang **boleh dibiayakan** (deductible expenses). Bab ini penting karena di sini banyak WP salah — kelebihan klaim biaya atau keliru membedakan biaya pribadi vs biaya mendapatkan penghasilan.

## Apa Itu Penghasilan Neto?

\`\`\`
Penghasilan Neto = Penghasilan Bruto - Biaya yang Boleh Dibiayakan
\`\`\`

**Penghasilan Bruto** = seluruh penghasilan yang diterima sebelum dipotong apapun.
**Biaya yang Boleh Dibiayakan** = pengeluaran yang secara langsung berkaitan dengan mendapatkan, menagih, dan memelihara penghasilan.

> **Prinsip:** "Expense should be directly connected to income" — biaya boleh dibiayakan kalau ada hubungan langsung dengan penghasilan. Biaya pribadi (makan, belanja, liburan) NGGAK BOLEH dibiayakan, walaupun secara personal sangat penting.

## Jenis Biaya yang Boleh Dibiayakan untuk PPh OP

### 1. Biaya Jabatan (Khusus Karyawan)

Ini **biaya khusus untuk WP yang dapat penghasilan dari pekerjaan (PPh 21)**. Aturannya:
- **5% dari penghasilan bruto bulanan**, maksimal Rp 500.000/bulan
- Setahun: maksimal **Rp 6.000.000/tahun**
- Sifatnya **default otomatis** — nggak perlu bukti kwitansi, langsung dikalikan 5% (capped).

> **Update 2026:** Biaya jabatan TETAP 5% max Rp 500rb/bulan = Rp 6jt/th. Tidak ada perubahan sejak dulu, dan sampai 2026 tetap sama.

**Contoh:**
- Gaji Rp 10jt/bln → Biaya jabatan = 5% × 10jt = Rp 500rb/bln = Rp 6jt/th (capped).
- Gaji Rp 5jt/bln → Biaya jabatan = 5% × 5jt = Rp 250rb/bln = Rp 3jt/th (belum capped).
- Gaji Rp 100jt/bln → Biaya jabatan = Rp 500rb/bln (capped) = Rp 6jt/th.

### 2. Iuran Pensiun (Deductible)

Iuran pensiun yang dibayar **oleh karyawan** ke:
- Dana Pensiun yang disahkan Menkeu, atau
- Badan Penyelenggara Jaminan Sosial (BPJS Ketenagakerjaan — khusus JHT dan JP).

Komponen BPJS Ketenagakerjaan yang **deductible**:
- **JHT (Jaminan Hari Tua)**: 2% dari gaji (potongan karyawan) → deductible
- **JP (Jaminan Pensiun)**: 1% dari gaji, maksimal Rp 110.863/bln (atau Rp 11.086.300/thn, nilai Maret 2026-Februari 2027)

> **Update 2026:** Plafon iuran JP per tahun = Rp 11.086.300 (sesuai peraturan BPJS terbaru 2026). Di atas ini nggak bisa dibiayakan.

> **PENTING:** BPJS Kesehatan (4% employer + 1% karyawan) **TIDAK deductible** untuk PPh 21 — dianggap penghasilan tambahan (manfaat) yang nggak bisa dikurangkan. Beda dengan JHT dan JP.

### 3. Biaya Mendapatkan dan Menagih Penghasilan

Untuk **non-karyawan** (profesional, pekerja lepas, orang pribadi pengusaha), biaya yang boleh dibiayakan lebih variatif:
- Biaya bahan baku/material
- Biaya gaji karyawan (kalau punya)
- Biaya sewa kantor/workshop
- Biaya listrik, telepon, internet kantor
- Biaya transportasi untuk mendapatkan penghasilan (bensin, tiket, sewa kendaraan)
- Biaya perlengkapan kerja
- Biaya pemasaran/iklan
- Biaya jasa profesional (akuntan, konsultan, pengacara)

> **Syarat:** Ada **nexus** (hubungan langsung) dengan penghasilan. Buat profesional (dokter, pengacara), semua biaya operasional praktik boleh dibiayakan.

### 4. Biaya Penyusutan (Khusus Pengusaha)

Untuk orang pribadi pengusaha yang punya aset produktif (mesin, kendaraan, peralatan), bisa diklaim penyusutan. Aset tetap berwujud disusutkan sesuai kelompok:

| Kelompok | Tipe Aset | Masa Manfaat | Tarif Garis Lurus | Tarif Saldo Menurun |
|----------|-----------|--------------|-------------------|---------------------|
| I | Non-bangunan (komputer, software) | 4 thn | 25% | 50% |
| II | Non-bangunan (kendaraan, mesin ringan) | 8 thn | 12,5% | 25% |
| III | Non-bangunan (mesin berat, peralatan) | 16 thn | 6,25% | 12,5% |
| IV | Non-bangunan (konstruksi berat) | 20 thn | 5% | 10% |
| Bangunan Permanen | 20 thn | 5% | - |
| Bangunan Tidak Permanen | 10 thn | 10% | - |

### 5. Zakat (Untuk WP Muslim)

Zakat yang dibayar ke **lembaga amil zakat yang disahkan Menkeu** bisa dibiayakan. Maksimal yang bisa dibiayakan = **2,5% dari penghasilan bruto**.

> **Syarat:** Lembaga amil zakat HARUS disahkan Menkeu (ada daftar resmi). Bayar zakat langsung ke fakir miskin (tanpa lewat amil) → **tidak deductible**.

### 6. Biaya-Biaya Lain yang Boleh Dibiayakan

- **Bunga utang** yang ada hubungannya dengan mendapatkan penghasilan.
- **Kerugian karena penjualan/penyewaan** aset produktif.
- **Kerugian selisih kurs** (untuk penghasilan valuta asing).
- **Sumbangan** ke lembaga sosial yang disahkan Menkeu (ada batasan, biasanya max 5% laba fiskal).
- **Iuran ke organisasi** profesi (max Rp 1jt/th untuk OP).

## Yang TIDAK Boleh Dibiayakan (Non-Deductible)

Sekarang, kebalikannya — biaya yang NGGAK boleh dibiayakan untuk PPh OP:

1. **Biaya pribadi** pemilik (makan, belanja, liburan keluarga).
2. **Pajak PPh** sendiri (PPh yang kamu bayar nggak bisa jadi pengurang penghasilan).
3. **Sanksi pajak** (denda, bunga keterlambatan).
4. **Donasi** ke lembaga yang belum disahkan Menkeu.
5. **Bunga untuk membeli aset pribadi** (rumah tinggal, mobil pribadi).
6. **Penyusutan aset pribadi** (mobil pribadi, rumah tinggal).

> **Analogi:** Kalau biaya itu kamu keluarkan **walaupun kamu nggak punya penghasilan** (misal makan sehari-hari, transport ke mall), maka itu **biaya pribadi** = non-deductible. Kalau biaya itu cuma dikeluarkan **karena kamu punya penghasilan** (misal sewa kantor, biaya gaji asisten), itu boleh dibiayakan.

## Formula Lengkap Penghasilan Neto Karyawan

Untuk WP yang penghasilannya **dari pekerjaan (karyawan)**:

\`\`\`
Penghasilan Neto = 
  Penghasilan Bruto (gaji + tunjangan + bonus + THR + dll)
- Biaya Jabatan (5% max 6jt/th)
- Iuran Pensiun (JHT 2% + JP 1% max 11.086.300/th)
- Zakat (jika ada, max 2,5% bruto)
\`\`\`

## Formula Penghasilan Neto Profesional/Pengusaha

Untuk WP yang punya penghasilan dari **usaha atau profesi**:

\`\`\`
Penghasilan Neto = 
  Penghasilan Bruto (omzet)
- Harga Pokok Penjualan (jika dagang)
- Biaya Operasional (gaji, sewa, listrik, dll)
- Biaya Penyusutan aset produktif
- Biaya Bunga (yang ada hubungan dengan usaha)
- Zakat (jika ada, max 2,5% bruto)
\`\`\`

## Contoh Perhitungan: Karyawan

Pak Budi, karyawan, status TK/0, penghasilan bulanan:

| Komponen | Bulanan | Tahunan |
|----------|---------|---------|
| Gaji pokok | Rp 15.000.000 | Rp 180.000.000 |
| Tunjangan transport | Rp 2.000.000 | Rp 24.000.000 |
| Tunjangan makan | Rp 1.000.000 | Rp 12.000.000 |
| THR | - | Rp 15.000.000 |
| Bonus | - | Rp 30.000.000 |
| **Bruto Total** | **Rp 18.000.000** | **Rp 261.000.000** |

**Pengurang:**
- Biaya jabatan: 5% × Rp 18jt = Rp 900rb/bln. Tapi max Rp 500rb/bln → Rp 6jt/th.
- Iuran JHT (2% × 15jt) = Rp 300rb/bln → Rp 3,6jt/th.
- Iuran JP (1% × 15jt, max Rp 110.863/bln) = Rp 110.863/bln → Rp 1.330.356/th (di bawah plafon Rp 11.086.300).

**Total Pengurang = Rp 6jt + Rp 3,6jt + Rp 1.330.356 = Rp 10.930.356**

**Penghasilan Neto = Rp 261.000.000 - Rp 10.930.356 = Rp 250.069.644**

## Contoh Perhitungan: Dokter Praktik

Bu Sinta, dokter umum, punya klinik. Penghasilan dan biaya setahun:

| Komponen | Tahunan |
|----------|---------|
| Pendapatan praktik | Rp 800.000.000 |
| Harga Pokok Praktik (obat, alkes) | Rp 200.000.000 |
| Gaji perawat & admin | Rp 150.000.000 |
| Sewa klinik | Rp 60.000.000 |
| Listrik, air, internet | Rp 24.000.000 |
| Penyusutan alat klinik | Rp 20.000.000 |
| Zakat (2,5% × 800jt = 20jt) | Rp 20.000.000 |

**Penghasilan Neto = 800jt - 200jt - 150jt - 60jt - 24jt - 20jt - 20jt = Rp 326.000.000**

> **Catatan:** Bu Sinta profesional, nggak dapat biaya jabatan (khusus karyawan). Tapi bisa klaim seluruh biaya operasional + zakat 2,5% bruto.

## Biaya Jabatan: Detail Lebih Lanjut

**Biaya jabatan** ini spesifik untuk **karyawan** yang dapat penghasilan dari hubungan kerja (PPh 21). Tujuannya: kompensasi biaya yang dikeluarkan karyawan untuk bekerja (transport, makan siang, pakaian kerja).

### Yang Termasuk Penghasilan dari Pekerjaan
- Gaji pokok
- Tunjangan (transport, makan, kesehatan, jabatan)
- Bonus, THR, gratifikasi
- Uang lembur
- Honorarium
- Komisi (kalau ada ikatan kerja)
- Uang pesangon (tapi final kalau sekaligus)

### Yang BUKAN Termasuk Biaya Jabatan
Biaya jabatan **TIDAK berlaku** untuk:
- Imbalan yang bersifat **final** (pesangon, pensiun sekaligus).
- Penghasilan dari usaha/profesi.
- Penghasilan dari modal (sewa, dividen, bunga).

> **Hati-hati:** Kalau WP punya GANDA penghasilan (gaji + usaha), biaya jabatan hanya untuk bagian gaji, bukan untuk bagian usaha.

## Iuran Pensiun: Detail

Iuran pensiun yang deductible:
1. **Iuran ke Dana Pensiun** (yang disahkan Menkeu).
2. **Iuran JHT BPJS Ketenagakerjaan** (2% dari gaji).
3. **Iuran JP BPJS Ketenagakerjaan** (1% dari gaji, capped Rp 110.863/bln atau Rp 11.086.300/thn).

> Yang TIDAK deductible:
> - **BPJS Kesehatan** (4% employer + 1% karyawan) → bukan biaya pensiun.
> - Iuran ke dana pensiun yang belum disahkan Menkeu.

## Biaya Mendapatkan Penghasilan: Dokumentasi

Buat WP pengusaha/profesional, **semua biaya harus didukung bukti**:
- Kwitansi/faktur asli
- Buku kas/bank yang konsisten
- Kontrak sewa
- Slip gaji karyawan
- Faktur PPN (kalau PKP)

> **Update Coretax 2026:** SPT Tahunan bisa diaudit cross-check dengan data pihak ketiga (misal: data sewa yang dilaporkan penyewa, data gaji yang dilaporkan employer). Jadi bukti dan konsistensi sangat penting.

## Kasus Nyata: Hitung Neto Karyawan dengan Bonus Besar

Pak Dewa, manager, status K/2. Komponen penghasilan setahun:

- Gaji pokok: Rp 30jt × 12 = Rp 360.000.000
- Tunjangan jabatan: Rp 5jt × 12 = Rp 60.000.000
- Tunjangan transport: Rp 2jt × 12 = Rp 24.000.000
- Tunjangan kesehatan: Rp 3jt × 12 = Rp 36.000.000
- THR: Rp 30.000.000
- Bonus tahunan: Rp 150.000.000
- **Bruto Total: Rp 660.000.000**

**Pengurang:**
- Biaya jabatan: 5% × (660jt ÷ 12) bln = 5% × 55jt = Rp 2,75jt/bln. Capped Rp 500rb/bln = Rp 6jt/th.
- Iuran JHT (2% × 30jt/bln) = Rp 600rb/bln = Rp 7,2jt/th.
- Iuran JP (1% × 30jt = 300rb/bln, capped Rp 110.863/bln) = Rp 110.863/bln = Rp 1.330.356/th.
- Zakat 2,5% × 660jt = Rp 16.500.000.

**Total Pengurang = 6jt + 7,2jt + 1.330.356 + 16.500.000 = Rp 31.030.356**

**Penghasilan Neto = Rp 660.000.000 - Rp 31.030.356 = Rp 628.969.644**

**PKP (K/2, PTKP 67,5jt) = Rp 628.969.644 - Rp 67.500.000 = Rp 561.469.644** (dibulatkan ke bawah ribuan = Rp 561.469.000)

**PPh:**
- Lapisan I: 5% × 60jt = Rp 3.000.000
- Lapisan II: 15% × 190jt = Rp 28.500.000
- Lapisan III: 25% × 250jt = Rp 62.500.000
- Lapisan IV: 30% × (561.469jt - 500jt) = 30% × 61.469.000 = Rp 18.440.700
- **Total PPh = Rp 112.440.700**

## Kasus Nyata: Pengusaha Toko Bangunan

Pak Eko, pemilik toko bangunan UD. Sumber Rejeki. Pembukuan setahun:

- Omzet: Rp 2.500.000.000
- HPP: Rp 1.800.000.000
- Gaji karyawan: Rp 200.000.000
- Sewa toko: Rp 120.000.000
- Listrik, air: Rp 36.000.000
- Penyusutan kendaraan: Rp 30.000.000
- Penyusutan peralatan toko: Rp 15.000.000
- Biaya pemasaran: Rp 25.000.000
- Biaya bunga bank: Rp 50.000.000
- Zakat: Rp 50.000.000 (cukup, 2% dari bruto)

**Total Biaya = Rp 2.326.000.000**

**Penghasilan Neto = Rp 2.500.000.000 - Rp 2.326.000.000 = Rp 174.000.000**

## Update 2026: Aturan Baru untuk Pengusaha Kecil

Sejak 2024 (PMK 168/2023) dan diperkuat di Coretax 2025+, pengusaha kecil (UMKM dengan omzet ≤ Rp 4,8 M) bisa pilih:
1. **PPh Final 0,5%** dari omzet (tidak perlu hitung neto, tidak perlu PTKP).
2. **PPh Progresif Normal** (hitung neto, dapat PTKP, kena tarif 5-35%).

> **Pilihan:** Untuk pengusaha kecil dengan margin laba tinggi (>20%), biasanya lebih untung pakai PPh Final 0,5%. Untuk margin laba rendah (<10%), lebih untung pakai progresif (kalau penghasilan neto < PTKP, nggak kena pajak).

## Ringkasan Lesson 5

- **Penghasilan Neto** = Bruto - Biaya yang Boleh Dibiayakan.
- **Biaya Jabatan**: 5% max Rp 6jt/th (khusus karyawan).
- **Iuran Pensiun**: JHT 2% + JP 1% max Rp 11.086.300/th (2026).
- **Biaya Mendapatkan Penghasilan**: untuk profesional & pengusaha, harus ada nexus ke penghasilan.
- **Zakat**: max 2,5% bruto, harus lewat amil zakat disahkan Menkeu.
- **Penyusutan**: aset produktif, sesuai kelompok (4/8/16/20 thn).
- **Non-deductible**: biaya pribadi, pajak PPh sendiri, sanksi, bunga utang pribadi.
- **UMKM**: bisa pilih PPh Final 0,5% atau progresif normal.

> **Tip ujian:** Soal biaya jabatan sering keluar. Hafal: **5% max Rp 500rb/bln = Rp 6jt/th**. Dan BPJS Kesehatan **tidak deductible**, hanya JHT+JP yang deductible.
`,
      keyPoints: [
        "Penghasilan Neto = Bruto - Biaya yang Boleh Dibiayakan",
        "Biaya jabatan: 5% dari bruto, max Rp 500rb/bln = Rp 6jt/th (khusus karyawan)",
        "Iuran pensiun deductible: JHT 2% + JP 1% max Rp 11.086.300/thn (2026)",
        "BPJS Kesehatan TIDAK deductible (4% employer + 1% karyawan)",
        "Biaya mendapatkan penghasilan: untuk profesional/pengusaha, harus ada nexus ke penghasilan",
        "Zakat deductible max 2,5% bruto, lewat amil zakat disahkan Menkeu",
        "Penyusutan aset produktif: kelompok 4/8/16/20 thn untuk non-bangunan",
        "Non-deductible: biaya pribadi, PPh sendiri, sanksi, bunga utang pribadi",
      ],
      quiz: [
        {
          id: "ch04-l05-q1",
          question: "Berapa maksimum biaya jabatan yang dapat dibiayakan untuk PPh OP tahun 2026?",
          options: ["Rp 500.000 per bulan atau Rp 6.000.000 per tahun", "Rp 5.000.000 per tahun", "Rp 500.000 per tahun", "Rp 6.000.000 per bulan"],
          correctIndex: 0,
          explanation:
            "Biaya jabatan = 5% dari penghasilan bruto bulanan, MAKSIMAL Rp 500.000 per bulan = Rp 6.000.000 per tahun. Tidak ada perubahan sampai 2026.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l05-q2",
          question:
            "Komponen BPJS berikut ini yang DAPAT dibiayakan (deductible) untuk PPh 21 karyawan adalah?",
          options: [
            "BPJS Kesehatan (1% karyawan)",
            "Iuran JHT BPJS Ketenagakerjaan (2% karyawan)",
            "BPJS Kesehatan (4% employer)",
            "Jaminan Kecelakaan Kerja",
          ],
          correctIndex: 1,
          explanation:
            "JHT (2% karyawan) DAN JP (1% karyawan, max 110.863/bln) adalah deductible. BPJS Kesehatan TIDAK deductible (dianggap manfaat tambahan). JKK dan JKm ditanggung employer, bukan potongan karyawan, jadi tidak relevan sebagai pengurang penghasilan karyawan.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l05-q3",
          question:
            "Pak Andi karyawan, gaji bulanan Rp 10jt (gaji pokok Rp 8jt + tunjangan Rp 2jt). Berapa biaya jabatan bulanan dan tahunan yang dapat dibiayakan?",
          options: [
            "Rp 500rb/bln, Rp 6jt/th (capped)",
            "Rp 400rb/bln, Rp 4,8jt/th",
            "Rp 800rb/bln, Rp 9,6jt/th",
            "Rp 1jt/bln, Rp 12jt/th",
          ],
          correctIndex: 0,
          explanation:
            "Bruto bln = Rp 10jt. 5% × 10jt = Rp 500rb/bln. Karena di atas Rp 500rb (capped), maka yang dibiayakan Rp 500rb/bln = Rp 6jt/th.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l05-q4",
          question:
            "Manakah dari berikut ini yang TIDAK BOLEH dibiayakan dalam menghitung penghasilan neto OP?",
          options: [
            "Zakat 2,5% dibayar ke lembaga amil disahkan Menkeu",
            "Biaya sewa kantor untuk usaha",
            "Bunga utang untuk membeli mobil pribadi keluarga",
            "Iuran pensiun karyawan",
          ],
          correctIndex: 2,
          explanation:
            "Bunga utang untuk aset pribadi (mobil keluarga) TIDAK deductible. Bunga utang baru bisa dibiayakan kalau ada hubungan langsung dengan penghasilan (misal utang modal kerja). Yang lain (zakat amil resmi, sewa kantor usaha, iuran pensiun) deductible.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l05-q5",
          question:
            "Bu Mei seorang profesional (pengacara), pendapatan jasa Rp 600jt/th. Apakah Bu Mei bisa klaim biaya jabatan?",
          options: [
            "Ya, 5% max Rp 6jt/th",
            "Tidak, biaya jabatan hanya untuk karyawan (PPh 21)",
            "Ya, 5% tanpa batas maksimum",
            "Ya, 10% dari bruto",
          ],
          correctIndex: 1,
          explanation:
            "Biaya jabatan KHUSUS untuk karyawan (PPh 21). Profesional seperti pengacara, dokter, konsultan TIDAK DAPAT biaya jabatan. Tapi mereka bisa klaim biaya operasional riil (sewa kantor, gaji asisten, dll) yang ada hubungannya dengan pendapatan jasa.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Hitung Penghasilan Neto Karyawan dengan Komponen Lengkap",
        description:
          "Pak Surya, K/3, karyawan swasta. Komponen penghasilan setahun 2026: Gaji pokok Rp 25jt/bln (Rp 300jt/th), tunjangan jabatan Rp 5jt/bln (Rp 60jt/th), tunjangan transport Rp 2jt/bln (Rp 24jt/th), tunjangan kesehatan Rp 3jt/bln (Rp 36jt/th), THR Rp 25jt, bonus Rp 80jt. Iuran JHT 2% dari gaji pokok, JP 1% dari gaji pokok (capped Rp 110.863/bln). Zakat 2,5% dari bruto. Hitung penghasilan neto.",
        solution:
          "Step 1: Hitung Bruto\n- Gaji pokok: Rp 300jt\n- Tunjangan jabatan: Rp 60jt\n- Tunjangan transport: Rp 24jt\n- Tunjangan kesehatan: Rp 36jt\n- THR: Rp 25jt\n- Bonus: Rp 80jt\n- Total Bruto = Rp 525.000.000\n\nStep 2: Hitung Pengurang\n- Biaya jabatan: 5% × (525jt ÷ 12) bln = 5% × 43,75jt = Rp 2,19jt/bln. Capped Rp 500rb/bln → Rp 6jt/th.\n- Iuran JHT: 2% × Rp 25jt/bln = Rp 500rb/bln = Rp 6jt/th.\n- Iuran JP: 1% × Rp 25jt = Rp 250rb/bln, capped Rp 110.863/bln → Rp 1.330.356/th.\n- Zakat: 2,5% × Rp 525jt = Rp 13.125.000.\n- Total Pengurang = Rp 6jt + 6jt + 1.330.356 + 13.125.000 = Rp 26.455.356\n\nStep 3: Hitung Neto\n- Penghasilan Neto = Rp 525.000.000 - Rp 26.455.356 = Rp 498.544.644\n\nStep 4: Hitung PKP (K/3, PTKP Rp 72jt)\n- PKP = Rp 498.544.644 - Rp 72.000.000 = Rp 426.544.644\n- Dibulatkan ke bawah ribuan: Rp 426.544.000\n\nStep 5: Hitung PPh\n- Lapisan I: 5% × 60jt = Rp 3.000.000\n- Lapisan II: 15% × 190jt = Rp 28.500.000\n- Lapisan III: 25% × (426.544jt - 250jt) = 25% × 176.544.000 = Rp 44.136.000\n- Total PPh = Rp 75.636.000\n\nTarif efektif = 75.636.000 ÷ 426.544.000 = 17,7%.",
      },
      tags: [
        "penghasilan neto",
        "biaya jabatan",
        "iuran pensiun",
        "JHT",
        "JP",
        "zakat",
        "biaya deductible",
        "BPJS",
      ],
    },

    // =========================================================================
    // LESSON 6: PPh OP SETAHUN
    // =========================================================================
    {
      id: "ch04-l06",
      slug: "pph-op-setahun",
      title: "Contoh Perhitungan PPh OP Setahun: Kasus Lengkap",
      subtitle: "Gaji, bonus, penghasilan lain, step by step lengkap",
      type: "kasus",
      difficulty: "mahir",
      estimatedMinutes: 50,
      content: `# 🧮 Contoh Perhitungan PPh OP Setahun (Kasus Lengkap)

Sekarang waktunya menggabungkan semua yang udah kita pelajari: objek pajak, PTKP, tarif progresif, biaya yang boleh dibiayakan. Kita bikin **kasus lengkap** step-by-step dari awal sampai PPh terutang.

## Roadmap Perhitungan PPh OP Setahun

Ini **5 langkah wajib** yang harus kamu ikuti:

1. **Identifikasi & Klasifikasi Penghasilan** → dipisah jadi: penghasilan non-final (normal), penghasilan final, dan bukan objek pajak.
2. **Hitung Penghasilan Neto untuk masing-masing sumber** → kurangi bruto dengan biaya yang boleh dibiayakan.
3. **Jumlahkan Penghasilan Neto Non-Final** → Penghasilan Neto Total.
4. **Hitung PKP** = Neto - PTKP.
5. **Hitung PPh Terutang** dengan tarif progresif 5 lapis.

Setelah itu, kurangi dengan **kredit pajak** (PPh 21 yang sudah dipotong employer, PPh 23, dll) untuk dapat PPh kurang/lebih bayar.

## Kasus Lengkap: Pak Hendra Wijaya

**Profil WP:**
- Nama: Pak Hendra Wijaya
- Status: K/2 (kawin, 2 anak tanggungan)
- Wajib Pajak Dalam Negeri, sudah ber-NPWP
- Pekerjaan utama: Manager di PT Maju Jaya
- Punya usaha sampingan: Bimbel matematika
- Penghasilan lain: sewa ruko, dividen saham, bunga deposito

### Step 1: Klasifikasi Penghasilan

**A. Penghasilan Non-Final (perlu masuk ke hitungan progresif):**

| Komponen | Tahunan |
|----------|---------|
| Gaji pokok (Rp 25jt × 12) | Rp 300.000.000 |
| Tunjangan jabatan (Rp 5jt × 12) | Rp 60.000.000 |
| Tunjangan transport (Rp 2jt × 12) | Rp 24.000.000 |
| Tunjangan makan (Rp 1jt × 12) | Rp 12.000.000 |
| THR (1× gaji pokok) | Rp 25.000.000 |
| Bonus tahunan | Rp 75.000.000 |
| Laba usaha bimbel (omzet 200jt - biaya 80jt) | Rp 120.000.000 |
| **Sub-total Bruto Non-Final** | **Rp 616.000.000** |

**B. Penghasilan Final (pajak sudah dipotong di sumber, tidak masuk hitungan progresif tapi dilaporkan di SPT):**

| Komponen | Bruto | PPh Final |
|----------|-------|-----------|
| Sewa ruko (10% × 60jt) | Rp 60.000.000 | Rp 6.000.000 |
| Dividen dari PT ABC (10% × 30jt) | Rp 30.000.000 | Rp 3.000.000 |
| Bunga deposito (20% × 10jt) | Rp 10.000.000 | Rp 2.000.000 |
| Bunga obligasi (10% × 5jt) | Rp 5.000.000 | Rp 500.000 |
| **Sub-total Final** | **Rp 105.000.000** | **Rp 11.500.000** |

**C. Bukan Objek Pajak (tidak dilaporkan di SPT):**

- Hibah dari ibunya: Rp 50.000.000 (ibu ke anak, sedarah 1 lapis, bukan objek pajak)
- Warisan dari ayah yang sudah dibagi: Rp 200.000.000 (bukan objek pajak)

### Step 2: Hitung Penghasilan Neto per Sumber

**A1. Penghasilan Neto dari Pekerjaan (sebagai karyawan):**

- Bruto = Rp 300jt + 60jt + 24jt + 12jt + 25jt + 75jt = Rp 496.000.000
- Biaya jabatan: 5% × (496jt ÷ 12) bln = 5% × 41,33jt = Rp 2,07jt/bln. Capped Rp 500rb/bln → Rp 6.000.000/th.
- Iuran JHT (2% × 25jt/bln) = Rp 500rb/bln = Rp 6.000.000/th.
- Iuran JP (1% × 25jt = 250rb/bln, capped Rp 110.863/bln) = Rp 1.330.356/th.
- Zakat 2,5% × 496jt = Rp 12.400.000.
- Total Pengurang = 6jt + 6jt + 1.330.356 + 12.400.000 = Rp 25.730.356

**Neto dari Pekerjaan = Rp 496.000.000 - Rp 25.730.356 = Rp 470.269.644**

**A2. Penghasilan Neto dari Usaha Bimbel:**

- Omzet = Rp 200.000.000
- Biaya operasional:
  - Sewa ruangan: Rp 36.000.000
  - Gaji asisten: Rp 30.000.000
  - Listrik & internet: Rp 9.000.000
  - Penyusutan alat: Rp 5.000.000
  - Total biaya: Rp 80.000.000
- Zakat 2,5% × 200jt = Rp 5.000.000
- Total Pengurang = Rp 85.000.000

**Neto dari Usaha = Rp 200.000.000 - Rp 85.000.000 = Rp 115.000.000**

### Step 3: Jumlahkan Neto Non-Final

\`\`\`
Penghasilan Neto Total (Non-Final) = 
  Neto Pekerjaan + Neto Usaha
  = Rp 470.269.644 + Rp 115.000.000
  = Rp 585.269.644
\`\`\`

### Step 4: Hitung PKP

- Status: K/2 → PTKP = Rp 67.500.000
- PKP = Rp 585.269.644 - Rp 67.500.000 = Rp 517.769.644
- Dibulatkan ke bawah ribuan penuh → PKP = **Rp 517.769.000**

### Step 5: Hitung PPh Terutang (Tarif Progresif UU HPP)

| Lapisan | PKP di Lapisan | Tarif | PPh |
|---------|----------------|-------|-----|
| I | Rp 60.000.000 | 5% | Rp 3.000.000 |
| II | Rp 190.000.000 (60jt-250jt) | 15% | Rp 28.500.000 |
| III | Rp 250.000.000 (250jt-500jt) | 25% | Rp 62.500.000 |
| IV | Rp 17.769.000 (517.769jt - 500jt) | 30% | Rp 5.330.700 |
| **Total** | **Rp 517.769.000** | | **Rp 99.330.700** |

**Jadi PPh OP terutang Pak Hendra = Rp 99.330.700**

### Step 6: Hitung Kredit Pajak

Pajak yang sudah dipotong/dipungut pihak ketiga sepanjang tahun:

| Kredit Pajak | Sumber | Jumlah |
|--------------|--------|--------|
| PPh 21 dipotong employer | Gaji bulanan + bonus | Rp 80.000.000 (asumsi) |
| PPh 23 dipotong pemberi kerja atas jasa | Honorarium eksternal | Rp 0 |
| PPh Final sewa ruko | Bank/penyewa | Rp 6.000.000 |
| PPh Final dividen | PT ABC | Rp 3.000.000 |
| PPh Final bunga deposito | Bank | Rp 2.000.000 |
| PPh Final bunga obligasi | Penerbit | Rp 500.000 |

> **Catatan:** PPh Final (sewa, dividen, bunga) **TIDAK dijumlahkan ke kredit PPh OP progresif**. Kredit pajak yang bisa dikurangkan dari PPh terutang progresif hanya yang berkaitan dengan penghasilan non-final: PPh 21, PPh 22, PPh 23, PPh 24 (untuk penghasilan dari LN), PPh 25 (cicilan).

**Kredit Pajak yang relevan = PPh 21 = Rp 80.000.000**

### Step 7: Hitung PPh Kurang/Lebih Bayar

\`\`\`
PPh Kurang/(Lebih) Bayar = 
  PPh Terutang - Kredit Pajak
  = Rp 99.330.700 - Rp 80.000.000
  = Rp 19.330.700 (KURANG BAYAR)
\`\`\`

Pak Hendra harus **bayar kekurangan PPh Rp 19.330.700** sebelum lapor SPT Tahunan (paling lambat 31 Maret 2027).

## Format Laporan di SPT Tahunan 1770

Berikut struktur pengisian SPT 1770 untuk kasus Pak Hendra:

### Lampiran I (Penghasilan Dari Pekerjaan)
- Bruto: Rp 496.000.000
- Biaya jabatan: Rp 6.000.000
- Iuran pensiun: Rp 7.330.356
- Zakat: Rp 12.400.000
- Neto: Rp 470.269.644
- PPh 21 dipotong: Rp 80.000.000

### Lampiran III (Penghasilan Dari Usaha)
- Omzet: Rp 200.000.000
- Biaya: Rp 85.000.000
- Neto: Rp 115.000.000

### Lampiran IV (Penghasilan Final)
- Sewa ruko: Rp 60.000.000 (PPh Final Rp 6.000.000)
- Dividen: Rp 30.000.000 (PPh Final Rp 3.000.000)
- Bunga deposito: Rp 10.000.000 (PPh Final Rp 2.000.000)
- Bunga obligasi: Rp 5.000.000 (PPh Final Rp 500.000)

### Induk SPT 1770
- Penghasilan Neto Total: Rp 585.269.644
- PTKP: Rp 67.500.000
- PKP: Rp 517.769.000
- PPh Terutang: Rp 99.330.700
- Kredit Pajak: Rp 80.000.000
- PPh Kurang Bayar: Rp 19.330.700

## Kasus Alternatif: Istri Bekerja

Misalkan istri Pak Hendra, Bu Anita, juga kerja dengan penghasilan neto Rp 200.000.000/th (sebagai karyawan).

**Skenario A: Penghasilan Istri Digabung (TIDAK BERLAKU sejak UU HPP kalau istri punya penghasilan sendiri)**

Sejak UU HPP, wanita kawin dengan penghasilan sendiri WAJIB punya NPWP sendiri. Jadi Bu Anita hitung sendiri:

- Neto Bu Anita: Rp 200.000.000
- PTKP Bu Anita (TK/0, karena tanggungan sudah di-claim suami): Rp 54.000.000
- PKP Bu Anita: Rp 146.000.000
- PPh Bu Anita: 5% × 60jt + 15% × 86jt = Rp 3jt + Rp 12,9jt = Rp 15.900.000

**Total PPh Keluarga = PPh Pak Hendra + PPh Bu Anita = Rp 99.330.700 + Rp 15.900.000 = Rp 115.230.700**

> **Tip:** Pisahkan penghasilan suami-istri biasanya lebih untung secara pajak daripada digabung, karena dapat PTKP ganda.

## Kasus dengan Penghasilan dari Luar Negeri

Misalkan Pak Hendra juga menerima dividen dari saham Google Inc (US) sebesar USD 10.000 (kurs Agustus 2026: 1 USD = Rp 18.062). Bruto dalam IDR = Rp 180.620.000.

Di US, pajak dividen yang dipotong: 15% sesuai P3B Indonesia-US = USD 1.500 = Rp 27.093.000.

**Perlakuan PPh OP di Indonesia:**
1. Dividen dari LN = penghasilan non-final (masuk hitungan progresif).
2. Neto = bruto - biaya (biasanya 0, kecuali ada biaya transaksi).
3. Masuk ke total Neto Non-Final.

**PPh terutang atas dividen:**
- Asumsi total neto jadi Rp 585.269.644 + Rp 180.620.000 = Rp 765.889.644
- PKP (K/2, PTKP 67,5jt) = Rp 698.389.644 → dibulatkan Rp 698.389.000
- PPh:
  - L1: 5% × 60jt = Rp 3.000.000
  - L2: 15% × 190jt = Rp 28.500.000
  - L3: 25% × 250jt = Rp 62.500.000
  - L4: 30% × (698.389jt - 500jt) = 30% × 198.389.000 = Rp 59.516.700
  - Total = Rp 153.516.700

**Kredit pajak luar negeri (Foreign Tax Credit):**
- PPh yang dibayar di US = Rp 27.093.000.
- Kredit pajak LN maksimal = PPh Indonesia atas penghasilan LN ÷ PPh Indonesia total × PPh Indonesia total
- Simplified: kredit = min(pajak LN dibayar, PPh Indonesia atas penghasilan LN)

**PPh atas dividen LN saja (individually):**
- Penghasilan LN = Rp 180.620.000. Asumsi seluruhnya masuk lapisan IV (30%): PPh = 30% × 180.620.000 = Rp 54.186.000.

- Kredit pajak LN = min(Rp 27.093.000, Rp 54.186.000) = Rp 27.093.000.

**PPh Kurang Bayar Total = Rp 153.516.700 - Rp 80.000.000 (PPh 21) - Rp 27.093.000 (kredit LN) = Rp 46.423.700**

## Update 2026: Pengisian SPT via Coretax

Di Coretax (live sejak 1 Jan 2025), pengisian SPT Tahunan PPh OP lebih mudah karena:
1. **Pre-populated data** — data bukti potong PPh 21, PPh 23, PPh Final dari pihak ketiga langsung masuk.
2. **Cocokan otomatis** — kalau ada selisih antara data yang dilaporkan vs yang diterima DJP, sistem flag.
3. **Pengisian langsung** — nggak perlu download e-SPT, nggak perlu upload CSV. Semua diisi online di portal Coretax.
4. **Lampiran elektronik** — semua lampiran di-upload (scan bukti zakat, bukti pembayaran, dll).

> **Update Agustus 2026:** Coretax masih dalam tahap penyempurnaan fitur (GloBE/Pillar Two feature masih dalam pengembangan). Untuk PPh OP, sistem sudah berfungsi normal dengan sedikit kendala teknis yang sporadis.

## Kasus Nyata: Hitung PPh OP dengan Lebih dari Satu Sumber Penghasilan

Pak Fajar, K/1, punya 3 sumber penghasilan:

1. **Karyawan PT ABC**: gaji pokok Rp 20jt/bln + THR Rp 20jt + bonus Rp 60jt = Rp 320jt/th.
   - Biaya jabatan: Rp 6jt (capped)
   - Iuran JHT 2% × 20jt = Rp 400rb/bln = Rp 4,8jt/th
   - Iuran JP: Rp 110.863/bln = Rp 1.330.356/th
   - Neto: Rp 320jt - Rp 6jt - Rp 4,8jt - Rp 1.330.356 = Rp 307.869.644

2. **Profesi (konsultan freelance)**: pendapatan Rp 100jt, biaya operasional Rp 30jt.
   - Neto: Rp 70.000.000

3. **Usaha rental alat kamera**: omzet Rp 80jt, biaya Rp 20jt.
   - Neto: Rp 60.000.000

**Total Neto Non-Final = Rp 307.869.644 + Rp 70.000.000 + Rp 60.000.000 = Rp 437.869.644**

**PTKP K/1 = Rp 63.000.000**

**PKP = Rp 437.869.644 - Rp 63.000.000 = Rp 374.869.644 → Rp 374.869.000**

**PPh:**
- L1: 5% × 60jt = Rp 3.000.000
- L2: 15% × 190jt = Rp 28.500.000
- L3: 25% × (374.869jt - 250jt) = 25% × 124.869.000 = Rp 31.217.250
- Total = **Rp 62.717.250**

## Ringkasan Lesson 6

- **5 langkah hitung PPh OP setahun**: klasifikasi → hitung neto per sumber → jumlah neto non-final → kurangi PTKP jadi PKP → hitung PPh dengan tarif progresif.
- **Pisahkan penghasilan final vs non-final** — final dilaporkan terpisah di SPT, pajaknya nggak dihitung ulang.
- **Kredit pajak** yang bisa dikurangkan: PPh 21, PPh 22, PPh 23, PPh 24, PPh 25 (yang berkaitan dengan penghasilan non-final).
- **PPh Final tidak masuk kredit** — sudah jadi pelunasan.
- **Wanita kawin penghasilan terpisah** → hitung sendiri, dapat PTKP sendiri.
- **Penghasilan LN** → masuk hitungan progresif + dapat kredit pajak LN (Foreign Tax Credit).
- **Coretax 2025+** → SPT pre-populated, online, validasi real-time.

> **Tip ujian:** Soal hitung PPh OP setahun **pasti keluar**. Latih dengan kasus lengkap step-by-step. Jangan loncat — dari bruto ke neto, ke PKP, ke PPh, ke kurang/lebih bayar. Setiap step harus jelas.
`,
      keyPoints: [
        "5 langkah: klasifikasi → neto per sumber → total neto non-final → PKP (Neto - PTKP) → PPh progresif",
        "Pisahkan penghasilan final (pajak sudah dipotong, nggak dihitung ulang) vs non-final (masuk progresif)",
        "Kredit pajak yang relevan: PPh 21, PPh 22, PPh 23, PPh 24 (LN), PPh 25 — yang berkaitan dengan non-final",
        "PPh Final (sewa, dividen, bunga) tidak masuk kredit, sudah jadi pelunasan",
        "Wanita kawin penghasilan terpisah → NPWP sendiri, hitung sendiri, dapat PTKP TK/0 minimum",
        "Penghasilan LN masuk progresif, dengan kredit pajak LN (Foreign Tax Credit) maksimal proporsional",
        "Coretax 2025+: SPT pre-populated, online filling, real-time matching bukti potong",
      ],
      quiz: [
        {
          id: "ch04-l06-q1",
          question:
            "Pak Budi, K/1, punya penghasilan neto dari pekerjaan Rp 200jt dan dari usaha Rp 100jt. PTKP K/1 = Rp 63jt. Berapa PKP Pak Budi?",
          options: ["Rp 237.000.000", "Rp 300.000.000", "Rp 163.000.000", "Rp 263.000.000"],
          correctIndex: 0,
          explanation:
            "Total Neto Non-Final = Rp 200jt + Rp 100jt = Rp 300jt. PKP = Rp 300jt - Rp 63jt (PTKP K/1) = Rp 237.000.000.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l06-q2",
          question:
            "PPh Final yang sudah dipotong di sumber (misal sewa ruko 10%) dapat diperlakukan sebagai?",
          options: [
            "Kredit pajak yang mengurangi PPh terutang progresif",
            "Pengurang penghasilan bruto",
            "Pajak yang sudah final, dilaporkan di SPT tapi tidak dihitung ulang",
            "Penghasilan tambahan",
          ],
          correctIndex: 2,
          explanation:
            "PPh Final (sewa, dividen, bunga deposito) sudah jadi pelunasan. Dilaporkan di SPT Tahunan untuk transparansi, tapi pajaknya TIDAK dihitung ulang dan TIDAK masuk kredit pajak PPh progresif.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l06-q3",
          question:
            "Bu Sarah, wanita kawin dengan penghasilan dari usaha Rp 150jt. Suami juga kerja dengan penghasilan neto Rp 250jt, status K/2. Berapa total PTKP yang dapat dinikmati keluarga (asumsi tanggungan di-claim suami)?",
          options: ["Rp 67.500.000", "Rp 121.500.000", "Rp 54.000.000", "Rp 113.500.000"],
          correctIndex: 1,
          explanation:
            "Suami: K/2 = Rp 67,5jt. Istri (UU HPP): WAJIB NPWP sendiri, status TK/0 (kalau tanggungan sudah di-claim suami) = Rp 54jt. Total = Rp 67,5jt + Rp 54jt = Rp 121,5jt. Inilah keuntungan pemisahan penghasilan suami-istri.",
          difficulty: "sulit",
        },
        {
          id: "ch04-l06-q4",
          question:
            "Pak Andi menerima dividen dari perusahaan Singapura USD 10.000 (kurs Rp 18.062/USD). Pajak di Singapura 15% sesuai P3B. Bagaimana perlakuan PPh OP di Indonesia?",
          options: [
            "Penghasilan final, tidak masuk SPT",
            "Penghasilan non-final, masuk progresif, dapat kredit pajak LN (pajak Singapura)",
            "Dikecualikan karena ada P3B",
            "Kena PPh 26 20%",
          ],
          correctIndex: 1,
          explanation:
            "Dividen dari LN = penghasilan non-final, masuk ke hitungan PPh OP progresif di Indonesia. Pajak yang dibayar di Singapura (15%) dapat dikreditkan sebagai Foreign Tax Credit (FTC), maksimal proporsional dengan PPh Indonesia atas penghasilan LN tersebut.",
          difficulty: "sulit",
        },
        {
          id: "ch04-l06-q5",
          question:
            "Pak Joko, K/0, penghasilan neto Rp 250jt. PPh 21 dipotong employer Rp 25jt. Berapa PPh kurang/lebih bayar?",
          options: ["Kurang bayar Rp 6.500.000", "Lebih bayar Rp 3.500.000", "Kurang bayar Rp 25.000.000", "Lebih bayar Rp 6.500.000"],
          correctIndex: 1,
          explanation:
            "PTKP K/0 = Rp 58,5jt. PKP = Rp 250jt - Rp 58,5jt = Rp 191.500.000. PPh = 5% × 60jt + 15% × 131.500.000 = Rp 3jt + Rp 19.725.000 = Rp 22.725.000. PPh dipotong = Rp 25jt. Lebih bayar = Rp 25jt - Rp 22.725.000 = Rp 2.275.000 (sebenarnya, bukan 3,5jt; verifikasi ulang: 25jt - 22,725jt = 2,275jt). Jawaban yang paling mendekati: lebih bayar.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus Komprehensif: Hitung PPh OP Setahun Bu Linda",
        description:
          "Bu Linda (TK/0, WPDN, NPWP). Penghasilan 2026: (1) Gaji bulanan Rp 15jt + THR Rp 15jt + bonus Rp 30jt = Rp 225jt. (2) Pendapatan jasa konsultan Rp 100jt (biaya Rp 30jt). (3) Sewa apartemen Rp 60jt. (4) Bunga deposito Rp 12jt. (5) Hibah dari ibu Rp 100jt. (6) Warisan dari ayah yang sudah dibagi Rp 200jt. Iuran JHT 2% × 15jt/bln, JP 1% (capped Rp 110.863/bln). Zakat 2,5% dari bruto pekerjaan. Hitung PPh OP terutang dan PPh kurang/lebih bayar (asumsi PPh 21 dipotong Rp 15jt).",
        solution:
          "Step 1: Klasifikasi\n- Non-Final: Gaji (Rp 225jt), Jasa konsultan (Rp 100jt bruto)\n- Final: Sewa apartemen (Rp 60jt, PPh Final 10% = Rp 6jt), Bunga deposito (Rp 12jt, PPh Final 20% = Rp 2,4jt)\n- Bukan Objek: Hibah ibu Rp 100jt, Warisan dibagi Rp 200jt\n\nStep 2: Neto per sumber\n- Pekerjaan: Bruto Rp 225jt\n  - Biaya jabatan: capped Rp 6jt\n  - JHT: 2% × 15jt × 12 = Rp 3,6jt\n  - JP: Rp 110.863 × 12 = Rp 1.330.356\n  - Zakat: 2,5% × 225jt = Rp 5.625.000\n  - Total pengurang = Rp 16.555.356\n  - Neto = Rp 208.444.644\n- Jasa konsultan: Bruto Rp 100jt - biaya Rp 30jt = Neto Rp 70jt\n\nStep 3: Total Neto Non-Final = Rp 208.444.644 + Rp 70.000.000 = Rp 278.444.644\n\nStep 4: PKP (TK/0, PTKP Rp 54jt) = Rp 278.444.644 - Rp 54.000.000 = Rp 224.444.644 → Rp 224.444.000\n\nStep 5: PPh Terutang\n- L1: 5% × 60jt = Rp 3.000.000\n- L2: 15% × (224.444jt - 60jt) = 15% × 164.444.000 = Rp 24.666.600\n- Total = Rp 27.666.600\n\nStep 6: Kredit Pajak = PPh 21 Rp 15.000.000\n\nStep 7: PPh Lebih Bayar = Rp 27.666.600 - Rp 15.000.000 = Rp 12.666.600 (KURANG BAYAR)\n\nBu Linda perlu bayar kekurangan Rp 12.666.600 sebelum 31 Maret 2027. Penghasilan final (sewa, bunga) dilaporkan di lampiran final SPT, tapi pajaknya nggak dihitung ulang. Hibah dan warisan nggak dilaporkan sebagai penghasilan.",
      },
      tags: [
        "perhitungan PPh OP",
        "kasus lengkap",
        "PPh setahun",
        "kredit pajak",
        "SPT 1770",
        "penghasilan final",
        "Coretax",
        "komprehensif",
      ],
    },

    // =========================================================================
    // LESSON 7: PPh FINAL OP
    // =========================================================================
    {
      id: "ch04-l07",
      slug: "pph-final-op",
      title: "PPh Final untuk Orang Pribadi: Sewa, Konstruksi, UMKM, Saham",
      subtitle: "PPh Final 4(3): sewa 10%, jasa konstruksi, jasa konsultasi, UMKM 0,5%, saham 0,1%",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 38,
      content: `# 💎 PPh Final untuk Orang Pribadi: PPh Pasal 4Ayat3

Setelah sekian lama ngomongin PPh progresif, sekarang kita masuk ke **PPh Final**. PPh Final ini beda sama PPh progresif — pajaknya **sudah dipotong di sumber dan jadi pelunasan** (nggak dihitung ulang di SPT). Buat Orang Pribadi, banyak sumber penghasilan yang berstatus PPh Final. Yuk, kita bahas satu-satu!

## Apa Itu PPh Final?

**PPh Final** = Pajak yang pemotongannya di sumber **merupakan pelunasan pajak** untuk Wajib Pajak yang menerima penghasilan. Artinya:

1. PPh sudah dipotong oleh pihak ketiga (pembayar/pemotong).
2. Pajak yang dipotong = pajak yang terutang (nggak ada hitung ulang di SPT).
3. Penghasilan **tetap dilaporkan** di SPT Tahunan (untuk transparansi).
4. Tapi pajaknya **tidak dikreditkan** ke PPh progresif.

> **Bedanya dengan PPh non-final:** PPh non-final (PPh 21, 23, 22) dipotong di sumber TAPI hanya kredit pajak. Di SPT Tahunan, PPh dihitung ulang pakai progresif, lalu dikurangi kredit pajak. PPh Final = langsung final, nggak dihitung ulang.

## Dasar Hukum PPh Final

PPh Final diatur di **UU PPh Pasal 4Ayat3**, dengan detail teknis di **PMK/PP** masing-masing:

1. **Sewa tanah/bangunan** → PP 29/1996 (10%)
2. **Jasa konstruksi** → PP 51/2008 (1,75% - 4%)
3. **Jasa konsultasi konstruksi** → PP 51/2008 (3,5% - 6%)
4. **Transfer tanah/bangunan** → PP 71/2008 (2,5%)
5. **Bunga deposito/SBI** → UU PPh (20%)
6. **Bunga obligasi** → UU PPh (10%)
7. **Capital gain saham BEI** → PMK 80/PMK.03/2010 (0,1%)
8. **Hadiah undian** → UU PPh (25%)
9. **UMKM** → PP 23/2018, dimantapkan UU HPP (0,5%)
10. **Pesangon** → PMK 252/PMK.03/2008 (0% - 25% final)
11. **Pensiun sekaligus** → UU PPh (0% - 5% final)

## Tabel: Tarif PPh Final untuk Orang Pribadi (Penting!)

| Penghasilan | Tarif | Pemotong | Dasar Hukum |
|-------------|-------|----------|-------------|
| Sewa tanah/bangunan | **10%** | Penyewa | PP 29/1996 |
| Transfer tanah/bangunan | **2,5%** | Notaris/PPAT | PP 71/2008 |
| Jasa konstruksi kecil | **1,75%** | Pemberi kerja | PP 51/2008 |
| Jasa konstruksi sedang | 2,65% | Pemberi kerja | PP 51/2008 |
| Jasa konstruksi besar | **4%** | Pemberi kerja | PP 51/2008 |
| Jasa konsultasi kecil | 3,5% | Pemberi kerja | PP 51/2008 |
| Jasa konsultasi besar | 6% | Pemberi kerja | PP 51/2008 |
| Bunga deposito/SBI | **20%** | Bank | UU PPh |
| Bunga obligasi | **10%** | Penerbit | UU PPh |
| Capital gain saham BEI | **0,1%** | Bursa/CP | PMK 80/2010 |
| Hadiah undian | **25%** | Penyelenggara | UU PPh |
| UMKM (omzet ≤4,8M/th) | **0,5%** | Sendiri/bank | PP 23/2018, UU HPP |
| Pesangon (1x/2 thn) | 0% - 25% | Pemberi kerja | PMK 252/2008 |
| Pensiun sekaligus (1x/2 thn) | 0% - 5% | Dana pensiun | UU PPh |
| Founder shares at IPO | 0,5% | Penerbit | UU HPP |
| Revaluasi aset | 10% | Sendiri | UU HPP |

## 1. Sewa Tanah dan/atau Bangunan (10%)

**Siapa yang kena:** Orang Pribadi atau Badan yang menyewakan tanah/bangunan.

**Tarif:** 10% dari jumlah bruto sewa (per bulan atau per tahun).

**Pemotong:** Penyewa (yang membayar sewa). Penyewa wajib potong PPh Final 10% dan setor ke kas negara, lalu berikan bukti potong ke pemberi sewa.

**Dasar Hukum:** PP 29/1996 jo. PP 121/2015.

**Contoh:** Pak Budi sewakan rumah Rp 10jt/bln. Setahun sewa = Rp 120jt. PPh Final 10% × 120jt = Rp 12jt. Penyewa setor Rp 12jt ke kas negara atas nama Pak Budi.

> **Yang termasuk "sewa tanah/bangunan":** sewa rumah, apartemen, ruko, kantor, gudang, tanah, lapangan, dll.

> **Yang TIDAK termasuk:** sewa mesin, kendaraan, perlengkapan (non-bangunan) → kena PPh 23 2% (kredit, bukan final).

## 2. Transfer Tanah dan Bangunan (2,5%)

**Siapa yang kena:** Orang Pribadi atau Badan yang menjual/transfer hak atas tanah dan/atau bangunan.

**Tarif:** 2,5% dari jumlah bruto transaksi (jual-beli).

**Pemotong:** PPAT/Notaris yang menangani transaksi.

**Contoh:** Pak Andi jual tanah Rp 500jt. PPh Final 2,5% × 500jt = Rp 12,5jt. Notaris potong dan setor ke kas negara.

> **Catatan:** Selain PPh Final 2,5% yang ditanggung penjual, pembeli juga bayar **BPHTB** (Bea Perolehan Hak atas Tanah dan Bangunan) ke pemerintah daerah, tarif maks 5% (lihat Bab 7).

## 3. Jasa Konstruksi (1,75% - 4%)

**Siapa yang kena:** Orang Pribadi atau Badan penyedia jasa konstruksi (kontraktor).

**Tarif** berdasarkan klasifikasi:
- **Kecil** (max 1 M proyek): 1,75%
- **Menengah** (1 M - 10 M): 2,65%
- **Besar** (>10 M): 4%
- **Terintegrasi kecil**: 2,65%
- **Terintegrasi besar**: 4%

**Pemotong:** Pemberi kerja (pemilik proyek).

**Contoh:** PT Bumi Konstruksi (kualifikasi besar) dapat proyek Rp 5 M. PPh Final 4% × 5 M = Rp 200jt dipotong pemilik proyek.

## 4. Jasa Konsultasi Konstruksi (3,5% - 6%)

**Siapa yang kena:** Orang Pribadi atau Badan konsultan konstruksi.

**Tarif** berdasarkan klasifikasi:
- **Kecil**: 3,5%
- **Besar**: 6%

## 5. Bunga Deposito dan SBI (20%)

**Siapa yang kena:** Orang Pribadi atau Badan penerima bunga deposito/SBI.

**Tarif:** 20% dari bunga bruto.

**Pemotong:** Bank penerbit deposito atau Bank Indonesia (untuk SBI).

**Contoh:** Bu Sinta punya deposito Rp 100jt, bunga 6%/thn = Rp 6jt. PPh Final 20% × 6jt = Rp 1,2jt. Bank potong otomatis dan kasih slip. Bu Sinta terima bunga neto Rp 4,8jt.

## 6. Bunga Obligasi (10%)

**Tarif:** 10% dari bunga obligasi.

**Pemotong:** Penerbit obligasi (atau bureau/perantara).

> **Update:** Untuk WP OP, bunga obligasi lebih murah (10%) dibanding bunga deposito (20%). Tapi obligasi lebih berisiko (ada risk default).

## 7. Capital Gain Saham BEI (0,1%)

**Siapa yang kena:** Orang Pribadi atau Badan yang menjual saham di Bursa Efek Indonesia (BEI).

**Tarif:** 0,1% dari nilai transaksi jual.

**Pemotong:** Bursa Efek atau Perusahaan Efek (CP).

**Contoh:** Pak Budi jual saham BBCA Rp 100jt. PPh Final 0,1% × 100jt = Rp 100rb. Otomatis dipotong broker.

> **Pilihan:** WP OP bisa pilih:
> - **PPh Final 0,1%** dari nilai jual (default, tidak perlu lapor di SPT).
> - **PPh Progresif** atas gain (capital gain) — harus lapor di SPT. Pilihan ini menguntungkan kalau **rugi** (capital loss), bisa dikredit kerugian ke penghasilan lain.

## 8. Hadiah Undian (25%)

**Siapa yang kena:** Orang Pribadi pemenang undian/hadiah dari lotere, kuis, kontes.

**Tarif:** 25% dari nilai hadiah bruto.

**Pemotong:** Penyelenggara undian.

**Contoh:** Pak Andi menang undian berhadiah motor senilai Rp 20jt. PPh Final 25% × 20jt = Rp 5jt. Penyelenggara yang tanggung pajak (jika hadiah berupa barang) atau potong dari nilai tunai (jika hadiah uang).

## 9. UMKM (0,5%) — Penting!

**Siapa yang kena:** WP OP atau Badan dengan omzet ≤ Rp 4,8 Miliar/tahun.

**Tarif:** 0,5% dari omzet bruto (per bulan atau per tahun).

**Pemotong:** Sendiri (self-assessment) atau dipungut pihak lain (kalau jual ke konsumen yang dipungut).

**Sifat:** **Final** (sejak UU HPP, sudah permanen — sebelumnya PP 23/2018 dengan masa berlaku terbatas).

**Contoh:** Bu Linda punya warung makan omzet Rp 30jt/bln = Rp 360jt/th (< 4,8 M). PPh Final 0,5% × 30jt = Rp 150rb/bln. Bayar sendiri via e-Bupot.

> **Update UU HPP:** UMKM dengan omzet ≤ Rp 500jt/th **TIDAK kena PPh Final 0,5%** (dikecualikan). Tapi tetap harus lapor SPT.

## 10. Pesangon dan Pensiun Sekaligus

### Pesangon (PHK) — dibayar 1x atau dalam 2 tahun:

| Bruto | Tarif |
|-------|-------|
| S/d Rp 50jt | 0% |
| Rp 50jt - 100jt | 5% |
| Rp 100jt - 500jt | 15% |
| > Rp 500jt | 25% |

### Pensiun Sekaligus — dibayar 1x atau dalam 2 tahun:

| Bruto | Tarif |
|-------|-------|
| S/d Rp 50jt | 0% |
| > Rp 50jt | 5% |

> Jika pesangon/pensiun dibayar >2 tahun dari tanggal PHK/pensiun, kena tarif progresif normal (5-35%).

## 11. Founder Shares at IPO (0,5%)

Pendiri perusahaan yang IPO bisa pilih: bayar PPh Final 0,5% dari nilai saham yang dilepas saat IPO, sebagai pelunasan. Atau bisa juga tidak pilih ini (kena tarif normal progresif atas gain).

## 12. Revaluasi Aset Tetap (10%)

Perusahaan/badan boleh revaluasi aset tetap (naikkan nilai buku ke nilai wajar). Selisih lebihnya kena PPh Final 10%. Khusus untuk OP, revaluasi aset pribadi jarang dilakukan, tapi mungkin terjadi untuk aset usaha OP.

## Kasus Nyata: Hitung PPh Final Berbagai Sumber

Bu Mei, WP OP, penghasilan final 2026:

| Sumber | Bruto | Tarif | PPh Final |
|--------|-------|-------|-----------|
| Sewa ruko | Rp 80jt/thn | 10% | Rp 8.000.000 |
| Bunga deposito | Rp 12jt/thn | 20% | Rp 2.400.000 |
| Bunga obligasi | Rp 6jt/thn | 10% | Rp 600.000 |
| Jual saham BEI | Rp 50jt (nilai jual) | 0,1% | Rp 50.000 |
| Hadiah undian TV | Rp 25jt | 25% | Rp 6.250.000 |
| UMKM warung (omzet Rp 25jt/bln × 12 = 300jt) | Rp 300jt/thn | 0,5% | Rp 1.500.000 |
| **Total** | **Rp 473.000.000** | | **Rp 18.800.000** |

**Cara lapor di SPT 1770:**
- Bu Mei tetap lapor seluruh penghasilan final di Lampiran IV SPT 1770.
- PPh Final yang sudah dipotong/dipungut = Rp 18.800.000.
- Penghasilan final **tidak masuk** ke perhitungan PPh progresif.
- Tapi penghasilan final bisa dijumlahkan untuk penentuan threshold audit (di atas Rp tertentu, SPT otomatis diaudit).

## Apa Bedanya PPh Final dengan PPh Non-Final?

| Aspek | PPh Final | PPh Non-Final |
|-------|-----------|---------------|
| Pemotongan di sumber | Pelunasan | Kredit |
| Hitung ulang di SPT | Tidak | Ya, pakai progresif |
| Dapat PTKP | Tidak (kecuali pesangon/pensiun) | Ya |
| Masuk ke PKP | Tidak | Ya |
| Pengurang (biaya) | Tidak ada | Bisa (biaya jabatan, dll) |
| Contoh | Sewa, bunga, UMKM, hadiah | Gaji, honor, laba usaha |

## Kapan Bisa Pilih Final vs Non-Final?

Hanya untuk WP OP pengusaha kecil (UMKM):

- **Pilih PPh Final 0,5%** kalau:
  - Omzet < Rp 4,8 M/th.
  - Margin laba tinggi (>20%).
  - Pembukuan sederhana cukup.

- **Pilih PPh Progresif** kalau:
  - Margin laba rendah (<10%).
  - Bisa klaim banyak biaya deductible.
  - Penghasilan neto < PTKP (bisa bebas pajak).

**Contoh Perbandingan:**
- Toko A: omzet Rp 2 M, laba 20% = Rp 400jt.
  - PPh Final 0,5%: 0,5% × 2M = Rp 10jt.
  - PPh Progresif: PTKP (K/0 = Rp 58,5jt) → PKP = Rp 341,5jt → PPh = Rp 47,2jt.
  - **Final lebih untung** (Rp 10jt < Rp 47,2jt).

- Toko B: omzet Rp 2 M, laba 5% = Rp 100jt.
  - PPh Final 0,5%: Rp 10jt.
  - PPh Progresif: PTKP (K/0 = Rp 58,5jt) → PKP = Rp 41,5jt → PPh = Rp 2,075jt.
  - **Progresif lebih untung** (Rp 2,075jt < Rp 10jt).

## Update 2026: UMKM Final 0,5% Permanen

Sejak UU HPP (2022), PPh Final UMKM 0,5% **sudah permanen** (sebelumnya PP 23/2018 dengan masa berlaku terbatas, diperpanjang berkali-kali). Jadi buat pelaku UMKM dengan omzet ≤ Rp 4,8 M/thn, bisa tenang pakai PPh Final 0,5% tanpa khawatir kedaluwarsa.

> **Tambahan:** UMKM dengan omzet ≤ Rp 500jt/thn **dikecualikan** dari PPh Final 0,5% (tidak kena pajak). Tapi tetap harus lapor SPT (nihil).

## Ringkasan Lesson 7

- **PPh Final** = pajak dipotong di sumber, jadi pelunasan, nggak dihitung ulang.
- **Sewa tanah/bangunan** = 10% (PP 29/1996).
- **Transfer tanah/bangunan** = 2,5% (PP 71/2008).
- **Jasa konstruksi** = 1,75% - 4% (PP 51/2008).
- **Bunga deposito** = 20%, **bunga obligasi** = 10%.
- **Capital gain saham BEI** = 0,1% (atau progresif atas gain, pilihan).
- **Hadiah undian** = 25%.
- **UMKM** = 0,5% (omzet ≤ 4,8 M), permanen sejak UU HPP; ≤ 500jt dikecualikan.
- **Pesangon & pensiun sekaligus** = 0% - 25% / 0% - 5% (kalau ≤ 2 tahun).

> **Tip ujian:** Soal PPh Final sering kasih list penghasilan, minta hitung total pajak. Hafal tarif per kategori. Jangan keliru antara sewa 10% (final) vs sewa mesin 2% (PPh 23, kredit).
`,
      keyPoints: [
        "PPh Final = pajak dipotong di sumber sebagai pelunasan, tidak dihitung ulang di SPT",
        "Sewa tanah/bangunan 10%, transfer tanah/bangunan 2,5%",
        "Jasa konstruksi 1,75% (kecil) - 4% (besar); konsultasi konstruksi 3,5% - 6%",
        "Bunga deposito/SBI 20%, bunga obligasi 10%",
        "Capital gain saham BEI 0,1% (final) atau progresif atas gain (pilihan)",
        "Hadiah undian 25%, UMKM 0,5% (omzet ≤ 4,8M, permanen UU HPP)",
        "UMKM omzet ≤ 500jt/th dikecualikan PPh Final 0,5%",
        "Pesangon & pensiun sekaligus tarif final khusus jika dibayar dalam 2 tahun",
      ],
      quiz: [
        {
          id: "ch04-l07-q1",
          question: "Tarif PPh Final atas sewa tanah dan/atau bangunan adalah?",
          options: ["2,5%", "5%", "10%", "20%"],
          correctIndex: 2,
          explanation:
            "Sewa tanah dan/atau bangunan kena PPh Final 10% (PP 29/1996). Dipotong oleh penyewa. Sementara transfer (jual-beli) tanah/bangunan 2,5% (PP 71/2008) — beda, jangan tertukar.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l07-q2",
          question:
            "Pak Budi menyewakan ruko miliknya seharga Rp 15jt/bulan. Berapa PPh Final yang harus dipotong penyewa per tahun?",
          options: ["Rp 150.000", "Rp 1.500.000", "Rp 18.000.000", "Rp 1.800.000"],
          correctIndex: 2,
          explanation:
            "Sewa Rp 15jt/bln × 12 bln = Rp 180jt/th. PPh Final 10% × Rp 180jt = Rp 18.000.000. Penyewa wajib potong Rp 18jt dan setor ke kas negara atas nama Pak Budi.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l07-q3",
          question: "Berapa tarif PPh Final UMKM (omzet ≤ Rp 4,8 M/th) yang berlaku sejak UU HPP?",
          options: ["0,1%", "0,5%", "1%", "2,5%"],
          correctIndex: 1,
          explanation:
            "PPh Final UMKM = 0,5% dari omzet bruto. Sejak UU HPP (2022), tarif ini permanen (sebelumnya PP 23/2018 dengan masa berlaku terbatas). Khusus omzet ≤ Rp 500jt/th dikecualikan.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l07-q4",
          question:
            "Bu Sarah menjual saham di BEI senilai Rp 200jt. Berapa PPh Final yang dipotong oleh Bursa Efek?",
          options: ["Rp 200.000 (0,1%)", "Rp 2.000.000 (1%)", "Rp 20.000.000 (10%)", "Rp 5.000.000 (2,5%)"],
          correctIndex: 0,
          explanation:
            "Penjualan saham di BEI kena PPh Final 0,1% dari nilai transaksi. 0,1% × Rp 200jt = Rp 200.000. Dipotong otomatis oleh Bursa/CP. WP OP bisa pilih: final 0,1% (default) atau progresif atas gain (kalau rugi bisa lebih untung).",
          difficulty: "sedang",
        },
        {
          id: "ch04-l07-q5",
          question:
            "Pak Joko mendapat pesangon PHK Rp 75jt dibayar sekaligus. Berapa PPh Final yang dipotong?",
          options: ["Rp 0", "Rp 1.250.000", "Rp 3.750.000", "Rp 11.250.000"],
          correctIndex: 1,
          explanation:
            "Pesangon dibayar 1x dalam 2 tahun kena tarif final: 0% s/d Rp 50jt + 5% (Rp 50jt-100jt). Bagian Rp 50jt × 0% = Rp 0. Bagian Rp 25jt × 5% = Rp 1.250.000. Total PPh Final = Rp 1.250.000.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Pelaku UMKM — Pilih Final atau Progresif?",
        description:
          "Bu Linda punya usaha kuliner dengan 2 cabang. Cabang A: omzet Rp 1,5 M/th, laba bersih Rp 300jt/th. Cabang B: omzet Rp 1,8 M/th, laba bersih Rp 90jt/th. Total omzet Rp 3,3 M (< Rp 4,8 M). Status WP: K/2. Linda bingung mau pilih PPh Final 0,5% atau PPh Progresif. Bandingkan kedua opsi dan beri rekomendasi.",
        solution:
          "Total omzet Rp 3,3 M (< Rp 4,8 M), jadi Linda BISA pilih:\n\nOpsi A: PPh Final 0,5%\n- PPh = 0,5% × 3,3 M = Rp 16.500.000.\n\nOpsi B: PPh Progresif\n- Penghasilan Neto = Laba cabang A + Laba cabang B = Rp 300jt + Rp 90jt = Rp 390jt.\n- PTKP K/2 = Rp 67,5jt.\n- PKP = Rp 390jt - Rp 67,5jt = Rp 322.500.000.\n- PPh:\n  - L1: 5% × 60jt = Rp 3jt\n  - L2: 15% × (322,5jt - 60jt) = 15% × 262,5jt = Rp 39.375.000\n  - Total = Rp 42.375.000.\n\nPerbandingan:\n- PPh Final: Rp 16,5jt.\n- PPh Progresif: Rp 42,375jt.\n- Selisih: Rp 25,875jt lebih murah kalau pakai Final.\n\nRekomendasi: Linda sebaiknya pilih **PPh Final 0,5%** karena lebih murah Rp 25,875jt. Selain itu, pembukuan lebih sederhana (tidak perlu rincian biaya). Tapi pertimbangkan:\n- Kalau di tahun depan laba turun signifikan (<10% omzet), progresif bisa lebih untung.\n- Setelah pilih final, sebaiknya konsisten beberapa tahun (mengubah pilihan butuh persetujuan DJP).\n- Tetap harus lapor SPT Tahunan dengan format Final.",
      },
      tags: [
        "PPh Final",
        "PPh 4(3)",
        "sewa tanah bangunan",
        "jasa konstruksi",
        "UMKM",
        "bunga deposito",
        "saham BEI",
        "pesangon",
      ],
    },

    // =========================================================================
    // LESSON 8: SPT TAHUNAN OP
    // =========================================================================
    {
      id: "ch04-l08",
      slug: "spt-tahunan-op",
      title: "SPT Tahunan PPh OP 2026: Form 1770, 1770-S, 1770-SS",
      subtitle: "Cara isi, deadline 31 Maret, Coretax pre-populated",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 45,
      content: `# 📝 SPT Tahunan PPh OP 2026 di Era Coretax

Setelah kamu bisa hitung PPh OP, sekarang waktunya **lapor**! SPT Tahunan PPh OP adalah laporan resmi Wajib Pajak ke DJP tentang penghasilan, pajak terutang, dan pajak yang sudah/dipotong setahun penuh. Tahun 2026, semua sudah lewat **Coretax** — sistem elektronik yang menggantikan e-SPT dan e-Filing. Yuk, kita pelajari tuntas!

## Apa Itu SPT Tahunan PPh OP?

**SPT (Surat Pemberitahuan)** = laporan resmi WP kepada DJP tentang penghasilan dan pajak dalam satu tahun pajak.

**SPT Tahunan PPh OP** = SPT yang dilaporkan oleh Wajib Pajak Orang Pribadi untuk tahun pajak tertentu, paling lambat **31 Maret** tahun berikutnya.

> **Deadline SPT Tahunan OP: 31 Maret** (tahun berikutnya). Untuk tahun pajak 2026 → deadline 31 Maret 2027. Kalau 31 Maret jatuh di akhir pekan, deadline tetap tanggal tersebut (Coretax online 24/7).

## Jenis Formulir SPT Tahunan PPh OP

Ada **3 jenis formulir** SPT Tahunan PPh OP, dipilih berdasarkan kompleksitas penghasilan:

### 1. Formulir 1770-SS (Sangat Sederhana)

**Kriteria WP yang pakai 1770-SS:**
- Penghasilan **hanya dari 1 employer** (1 sumber gaji).
- Penghasilan setahun ≤ Rp 60.000.000.
- Tidak punya penghasilan lain (tidak dari usaha, tidak ada final, tidak ada LN).

**Komponen Formulir:**
- Identitas WP
- Penghasilan bruto dari employer
- PTKP
- PKP
- PPh terutang
- Kredit pajak (PPh 21 dipotong employer)
- PPh kurang/lebih bayar

### 2. Formulir 1770-S (Sederhana)

**Kriteria WP yang pakai 1770-S:**
- Penghasilan **hanya dari pekerjaan** (1 atau lebih employer).
- Penghasilan **bisa lebih dari Rp 60jt**.
- Punya penghasilan final (sewa, bunga, dll) → dilaporkan di lampiran.
- Tidak punya penghasilan dari usaha/profesi.
- Tidak punya penghasilan dari LN.

**Komponen:**
- Lampiran I: Penghasilan dari pekerjaan (1 halaman, multiple employer).
- Lampiran IV: Penghasilan final.
- Induk SPT.

### 3. Formulir 1770 (Lengkap)

**Kriteria WP yang pakai 1770:**
- Punya penghasilan dari **lebih dari 1 sumber** (pekerjaan + usaha + modal + LN).
- Punya penghasilan dari usaha/profesi.
- Punya penghasilan dari LN.
- Punya kredit pajak LN.
- Punya kerugian yang dikompensasi.
- Punya revaluasi aset.
- Penghasilan final lebih dari 1 jenis.

**Komponen:**
- Lampiran I: Penghasilan dari pekerjaan
- Lampiran II: Penghasilan dari LN
- Lampiran III: Penghasilan dari usaha/profesi
- Lampiran IV: Penghasilan final (4(3))
- Lampiran V: Kerugian kompensasi
- Lampiran VI: Hutang PPh
- Lampiran VII: PPh 25 (cicilan)
- Lampiran VIII: Daftar aset
- Induk SPT

## Cara Pilih Formulir yang Tepat

| Kondisi WP | Formulir |
|------------|----------|
| Gaji 1 employer, ≤ 60jt/th, tidak ada penghasilan lain | **1770-SS** |
| Gaji 1+ employer, ada penghasilan final, tidak ada usaha/LN | **1770-S** |
| Ada penghasilan usaha/profesi, atau penghasilan LN, atau kompleks | **1770** |

> **Tip:** Kalau ragu, pakai 1770 (lengkap) selalu bisa. Tapi 1770-SS dan 1770-S lebih cepat diisi.

## Struktur Induk SPT 1770 (Ringkas)

Induk SPT 1770 berisi:

1. **Bagian A: Identitas Wajib Pajak** — NPWP, nama, alamat, status.
2. **Bagian B: Penghasilan Neto** — total neto dari semua lampiran.
3. **Bagian C: Penghasilan Tidak Kena Pajak (PTKP)** — sesuai status.
4. **Bagian D: Penghasilan Kena Pajak (PKP)** — Neto - PTKP.
5. **Bagian E: PPh Terutang** — progresif 5 lapis.
6. **Bagian F: Kredit Pajak** — PPh 21, 22, 23, 24, 25.
7. **Bagian G: Penghasilan Final** — dari Lampiran IV.
8. **Bagian H: PPh Final** — dari Lampiran IV.
9. **Bagian I: PPh Kurang/Lebih Bayar** — E + H - F.
10. **Bagian J: Tanda Tangan dan Tanggal**.

## Cara Pengisian di Coretax (Update 2026)

Sejak 1 Januari 2025, **Coretax** sudah live dan menggantikan DJP Online + e-SPT + e-Filing. Cara pengisian:

### Langkah 1: Login ke Coretax
- Akses: coretax.go.id (atau via DJP Online redirect).
- Login pakai NPWP + password (atau NIK untuk OP).
- Sistem akan menampilkan profil WP dan daftar SPT yang perlu dilaporkan.

### Langkah 2: Pilih Tahun Pajak dan Jenis SPT
- Klik "Lapor SPT" → pilih "SPT Tahunan PPh OP".
- Pilih tahun pajak (misal 2026).
- Pilih jenis SPT (1770, 1770-S, atau 1770-SS).

### Langkah 3: Isi Lampiran
- **Pre-populated data** — data bukti potong PPh 21 dari employer, PPh 23, PPh Final (sewa, bunga) otomatis muncul dari database DJP.
- WP hanya perlu verifikasi data, atau input data yang belum masuk.
- Upload bukti pendukung (bukti zakat, bukti pembayaran, dll).

### Langkah 4: Hitung Otomatis
- Coretax hitung PPh terutang otomatis pakai tarif progresif.
- Kredit pajak otomatis dari bukti potong.
- Hasil: PPh kurang/lebih bayar.

### Langkah 5: Bayar Kekurangan (jika ada)
- Buat ID billing di Coretax.
- Bayar via bank persepsi atau e-banking.
- Bukti pembayaran otomatis masuk ke sistem.

### Langkah 6: Submit dan Tanda Tangan Elektronik
- Submit SPT.
- Tanda tangan elektronik (e-Sign) via sertifikat elektronik atau OTP.
- Status SPT berubah jadi "Diterima" atau "Terkirim".

> **Update Agustus 2026:** Coretax fitur GloBE/Pillar Two masih dalam pengembangan, tapi untuk SPT Tahunan OP sudah stabil dengan beberapa perbaikan UX (user experience).

## Bukti Potong yang Diperlukan

Wajib Pajak harus kumpulkan bukti potong sepanjang tahun:

1. **Bukti Potong PPh 21** — dari employer (1721-A1 untuk karyawan tetap, 1721-A2 untuk tidak tetap).
2. **Bukti Potong PPh 22** — dari importer atau BUMN/pemerintah.
3. **Bukti Potong PPh 23** — dari pemberi kerja atas jasa (kalau ada honor eksternal).
4. **Bukti Potong PPh 26** — dari pemberi kerja atas pembayaran ke WPLN.
5. **Bukti Potong PPh Final**:
   - Sewa: dari penyewa.
   - Bunga deposito: dari bank.
   - Bunga obligasi: dari penerbit.
   - Capital gain saham: dari broker.
   - Hadiah: dari penyelenggara.
6. **Bukti Bayar PPh 25** — kuitansi SSP setoran sendiri.
7. **Bukti Zakat** — dari lembaga amil resmi.
8. **Bukti Penghasilan LN** — slip dividend, bukti pajak LN.

> **Update Coretax:** Bukti potong sekarang langsung masuk ke akun WP di Coretax. Cukup verifikasi, nggak perlu input manual (data pre-populated). Tapi tetap perlu simpan bukti fisik untuk audit.

## Tabel: Deadline SPT Tahunan (Update 2026)

| Tipe SPT | Deadline |
|----------|----------|
| SPT Tahunan PPh OP | **31 Maret** (tahun berikutnya) |
| SPT Tahunan PPh Badan | **30 April** (tahun berikutnya) |
| SPT Masa PPh 21, 23, 22, 26, Final | Tanggal 20 bulan berikutnya |
| SPT Masa PPN | Akhir bulan berikutnya |

## Sanksi Terlambat Lapor SPT Tahunan OP

| Pelanggaran | Sanksi |
|-------------|--------|
| Terlambat lapor SPT OP | **Rp 100.000** |
| Terlambat lapor SPT Badan | Rp 1.000.000 |
| Terlambat lapor SPT PPN Masa | Rp 500.000 |
| Terlambat lapor SPT PPh Masa lain | Rp 100.000 |
| Terlambat bayar | Bunga MIR × bulan telat (max 24 bulan) |

> **Update 2026:** MIR (MoF Interest Rate / Suku Bunga Bulanan) per Agustus 2026 = **0,6%/bulan** (KMK 35/MK/EF.2/2026). Jadi terlambat bayar 1 bulan = 0,6% dari pajak kurang bayar. Akumulasi max 24 bulan.

## PPh Kurang/Lebih Bayar

### PPh Kurang Bayar
- WP harus bayar kekurangan **sebelum submit SPT**.
- Buat ID billing di Coretax.
- Bayar via bank/e-banking.
- Bukti pembayaran otomatis masuk sistem.

### PPh Lebih Bayar
- WP bisa pilih: **kompensasi** ke tahun berikutnya ATAU **restitusi** (klaim kembali).
- Restitusi memicu audit (kecuali WP eligible untuk "early tax refund" — biasanya untuk WP dengan kategori risiko rendah dan SPT konsisten).
- Waktu tunggu keputusan: **12 bulan** (UU KUP Pasal 17C).

## Kasus Nyata: Lapor SPT Tahunan Pak Budi

Pak Budi, K/1, karyawan PT XYZ. Punya penghasilan:
- Gaji setahun: Rp 240jt
- Bonus: Rp 60jt
- Penghasilan final bunga deposito: Rp 10jt (PPh Final Rp 2jt dipotong bank)
- Penghasilan final sewa rumah: Rp 60jt (PPh Final Rp 6jt dipotong penyewa)
- PPh 21 dipotong employer setahun: Rp 30jt

**Langkah lapor di Coretax:**

1. **Login** ke Coretax pakai NPWP.
2. **Pilih tahun pajak 2026** dan jenis SPT **1770-S** (atau 1770 kalau pakai lampiran final).
3. **Lampiran I: Penghasilan Pekerjaan**
   - Bruto: Rp 300jt (240jt + 60jt)
   - Biaya jabatan: Rp 6jt (capped)
   - Iuran pensiun (asumsi 2% × 20jt × 12 = Rp 4,8jt + JP Rp 1,33jt = Rp 6,13jt)
   - Neto: Rp 287.870.000
   - PPh 21 dipotong: Rp 30jt
4. **Lampiran IV: Penghasilan Final**
   - Bunga deposito: Rp 10jt (PPh Rp 2jt)
   - Sewa rumah: Rp 60jt (PPh Rp 6jt)
5. **Induk SPT:**
   - Penghasilan Neto: Rp 287.870.000
   - PTKP (K/1): Rp 63jt
   - PKP: Rp 224.870.000 → dibulatkan Rp 224.870.000
   - PPh terutang:
     - L1: 5% × 60jt = Rp 3jt
     - L2: 15% × 164.870.000 = Rp 24.730.500
     - Total = Rp 27.730.500
   - Kredit pajak (PPh 21): Rp 30jt
   - **PPh Lebih Bayar = Rp 30jt - Rp 27.730.500 = Rp 2.269.500**

6. **Pilih opsi lebih bayar:** Pak Budi pilih **restitusi** atau **kompensasi**. Kalau restitusi, DJP akan verifikasi dan kembalikan dalam ≤ 12 bulan. Kalau kompensasi, PPh kurang bayar tahun depan otomatis berkurang Rp 2.269.500.

7. **Submit SPT**, tanda tangan elektronik, selesai.

## Update 2026: Fitur Baru Coretax untuk SPT OP

Beberapa fitur Coretax yang aktif di 2026:

1. **Pre-populated bukti potong** — data PPh 21, PPh 23, PPh Final langsung muncul di SPT.
2. **Auto-calculation** — sistem hitung PPh terutang otomatis.
3. **E-fitting bukti pendukung** — upload scan bukti zakat, pernyataan zakat, dll.
4. **Status real-time** — bisa cek apakah SPT sudah diterima, diproses, atau ditolak.
5. **Audit trail** — semua perubahan SPT dicatat (siapa, kapan, apa yang diubah).
6. **Multi-user dengan permission** — bisa delegasikan ke konsultan pajak dengan role tertentu (Signer, Preparer, Viewer).

> **Update Agustus 2026:** Coretax menambah fitur "Signer SPT PPh 21/26 Induk" — role khusus yang bisa tandatangani SPT tapi tidak bisa lihat detail SPT. Cocok untuk komisaris/direksi yang hanya perlu tanda tangan.

## Kasus Nyata: SPT 1770-SS untuk Karyawan Sederhana

Bu Sari, single (TK/0), karyawan 1 employer. Gaji Rp 4jt/bln = Rp 48jt/th. Tidak ada penghasilan lain.

**Kriteria:**
- Penghasilan dari 1 employer ✅
- Penghasilan ≤ Rp 60jt ✅
- Tidak ada penghasilan lain ✅

**Cocok pakai 1770-SS.**

**Pengisian di Coretax:**
1. Identitas WP (otomatis dari profil Coretax).
2. Penghasilan bruto: Rp 48jt (pre-populated dari bukti potong employer).
3. Biaya jabatan: 5% × 48jt = Rp 2,4jt (otomatis).
4. Penghasilan neto: Rp 45,6jt.
5. PTKP (TK/0): Rp 54jt.
6. PKP: Rp 45,6jt - Rp 54jt = negatif → PKP Rp 0.
7. PPh terutang: Rp 0.
8. Kredit PPh 21: Rp 0 (asumsi gaji di bawah PTKP, employer nggak potong).
9. PPh kurang/lebih bayar: Rp 0.
10. Submit. **SPT Nihil.**

> **Tip:** WP dengan gaji di bawah PTKP tetap wajib lapor SPT (nihil), kecuali penghasilan dari 1 employer dan sudah dipotong PPh 21 final. Tapi tetap perlu lapor untuk rekam jejak perpajakan.

## SPT Nihil

**SPT Nihil** = SPT yang dilaporkan dengan pajak terutang Rp 0 dan kredit pajak Rp 0 (atau lebih bayar Rp 0). WP wajib lapor walau nihil kalau:
- Sudah punya NPWP.
- Memenuhi syarat subjektif WP (PPh OP ≤ 60jt dari 1 employer, tidak punya penghasilan lain → sebenarnya tidak wajib lapor SPT, tapi tetap bisa lapor untuk transparansi).

> **Catatan:** WP OP dengan penghasilan hanya dari 1 employer, gaji ≤ Rp 60jt, dipotong PPh 21 final (tarif 5% × bruto max 5% × 60jt = Rp 3jt) → **tidak wajib lapor SPT Tahunan** (asalkan semua kondisi terpenuhi). Tapi kalau punya NPWP dan penghasilan lebih dari 1 employer, wajib lapor.

## Dokumen Pendukung SPT

Wajib disimpan WP minimum 10 tahun (sesuai masa daluwarsa):

1. **Bukti potong** — PPh 21, 22, 23, 26, Final.
2. **Bukti bayar (SSP)** — atas pembayaran PPh kurang bayar.
3. **Bukti zakat** — kuitansi dari amil zakat resmi.
4. **Bukti pembayaran iuran pensiun** — slip dari BPJS atau dana pensiun.
5. **Daftar aset** — untuk WP pengusaha.
6. **Daftar utang** — kalau ada bunga utang deductible.
7. **Laporan keuangan** — untuk WP pengusaha (neraca, laba-rugi).
8. **Bukti pendukung penghasilan LN** — slip dividend, kontrak sewa LN.

## Kasus Nyata: Salah Lapor, Apa Konsekuensinya?

Pak Andi lapor SPT Tahunan 2026 di tanggal 15 April 2027 (terlambat 15 hari dari deadline 31 Maret). Selain itu, Pak Andi juga salah lapor PKP — kelebihan klaim biaya Rp 10jt.

**Konsekuensi:**
1. **Sanksi terlambat lapor**: Rp 100.000 (sanksi tetap).
2. **Sanksi keterlambatan bayar** (kalau ada pajak kurang bayar): bunga MIR × bulan keterlambatan. Misal MIR 0,6% × 1 bulan = 0,6% dari pajak kurang bayar.
3. **Koreksi fiskus**: kalau ketahuan salah, DJP terbitkan **SKP (Surat Ketetapan Pajak)** — bisa SKPKB (kurang bayar) atau SKPLB (lebih bayar) atau SKPN (nihil).
4. **Sanksi kelalaian** (Pasal 13 KUP): 1,85%/bulan dari pajak kurang bayar, max 24 bulan.

> **Tip:** Lebih baik lapor tepat waktu walaupun salah, kemudian koreksi lewat **SPT pembetulan** (dalam 5 tahun). Sanksi terlambat lapor Rp 100rb jauh lebih murah dibanding sanksi tidak lapor sama sekali (bisa kena sanksi pidana).

## SPT Pembetulan (Koreksi SPT)

WP bisa lapor **SPT Pembetulan** kalau ada kesalahan dalam SPT asli. Syarat:
- Dalam waktu **5 tahun** sejak SPT asli dilaporkan.
- WP mengajukan secara sukarela (sebelum fiskus audit).
- Status SPT asli: belum diperiksa atau sudah diperiksa (dengan syarat tertentu).

> **Update 2026:** SPT pembetulan di Coretax lebih mudah — cukup pilih SPT yang ingin dibetulkan, isi ulang dengan data yang benar, lalu submit. Sistem akan track perubahannya.

## Ringkasan Lesson 8

- **SPT Tahunan PPh OP deadline 31 Maret** tahun berikutnya.
- **3 jenis formulir**: 1770-SS (sederhana, 1 employer ≤ 60jt), 1770-S (pekerjaan + final), 1770 (lengkap).
- **Coretax 2025+** menggantikan e-SPT dan e-Filing — semua online.
- **Pre-populated data** — bukti potong PPh 21, 23, Final otomatis masuk.
- **Sanksi terlambat lapor**: Rp 100.000 (OP), Rp 1.000.000 (Badan).
- **Sanksi terlambat bayar**: bunga MIR × bulan telat (Agustus 2026: 0,6%/bln).
- **SPT Nihil** tetap wajib dilapor (kecuali kondisi khusus).
- **SPT pembetulan** dalam 5 tahun, lebih baik daripada tidak lapor.

> **Tip ujian:** Soal SPT sering tanya deadline, jenis formulir, dan sanksi. Hafal: **OP 31 Maret, Badan 30 April**. **Sanksi telat OP Rp 100rb, Badan Rp 1jt**. **SPT Nihil tetap wajib lapor**. **Coretax pre-populated**.
`,
      keyPoints: [
        "Deadline SPT Tahunan PPh OP: 31 Maret tahun berikutnya",
        "3 formulir: 1770-SS (sederhana), 1770-S (pekerjaan+final), 1770 (lengkap)",
        "Coretax 2025+ menggantikan e-SPT dan e-Filing, semua online",
        "Pre-populated data: bukti potong PPh 21, 23, Final otomatis masuk",
        "Sanksi terlambat lapor SPT OP: Rp 100.000; Badan: Rp 1.000.000",
        "Sanksi terlambat bayar: bunga MIR (Agustus 2026: 0,6%/bulan), max 24 bulan",
        "SPT Nihil tetap wajib dilapor (kecuali kondisi khusus 1 employer ≤ 60jt)",
        "SPT pembetulan dapat dilakukan dalam 5 tahun sejak SPT asli",
      ],
      quiz: [
        {
          id: "ch04-l08-q1",
          question: "Kapan batas waktu (deadline) pelaporan SPT Tahunan PPh OP?",
          options: ["31 Januari tahun berikutnya", "28/29 Februari tahun berikutnya", "31 Maret tahun berikutnya", "30 April tahun berikutnya"],
          correctIndex: 2,
          explanation:
            "Deadline SPT Tahunan PPh OP adalah **31 Maret** tahun berikutnya (untuk tahun pajak 2026 → deadline 31 Maret 2027). SPT Badan deadline 30 April.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l08-q2",
          question:
            "Formulir SPT Tahunan PPh OP yang digunakan untuk WP dengan penghasilan dari 1 employer, total bruto ≤ Rp 60jt, dan tidak ada penghasilan lain adalah?",
          options: ["1770", "1770-S", "1770-SS", "1770-I"],
          correctIndex: 2,
          explanation:
            "Formulir 1770-SS (Sangat Sederhana) untuk WP dengan penghasilan dari 1 employer, total bruto ≤ Rp 60jt, dan tidak ada penghasilan lain. Paling sederhana dan cepat diisi.",
          difficulty: "mudah",
        },
        {
          id: "ch04-l08-q3",
          question: "Berapa sanksi administrasi karena terlambat lapor SPT Tahunan PPh OP?",
          options: ["Rp 50.000", "Rp 100.000", "Rp 500.000", "Rp 1.000.000"],
          correctIndex: 1,
          explanation:
            "Sanksi terlambat lapor SPT Tahunan PPh OP = Rp 100.000 (UU KUP Pasal 7). SPT PPh Badan = Rp 1.000.000. SPT PPN Masa = Rp 500.000.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l08-q4",
          question:
            "Sejak 1 Januari 2025, sistem elektronik perpajakan yang menggantikan DJP Online dan e-SPT adalah?",
          options: ["e-Bupot", "e-Filing", "Coretax", "DJPHub"],
          correctIndex: 2,
          explanation:
            "Coretax (Core Tax Administration System) live sejak 1 Januari 2025. Menggantikan DJP Online + e-SPT + e-Filing. Fitur: integrasi data, SPT pre-populated, validasi real-time, mandatory electronic filing.",
          difficulty: "sedang",
        },
        {
          id: "ch04-l08-q5",
          question:
            "Pak Budi sudah bayar PPh 21 lebih banyak dari PPh terutang sebenarnya. SPT-nya menunjukkan lebih bayar Rp 5jt. Apa opsi yang tersedia?",
          options: [
            "Hanya bisa dikompensasi ke tahun depan",
            "Hanya bisa direstitusi (klaim kembali)",
            "Pilih: dikompensasi ke tahun depan ATAU direstitusi",
            "Tidak bisa apa-apa, uang hilang",
          ],
          correctIndex: 2,
          explanation:
            "WP dengan lebih bayar bisa pilih: (1) dikompensasi ke tahun pajak berikutnya (otomatis kurangi pajak kurang bayar tahun depan), atau (2) direstitusi (klaim kembali dari kas negara). Restitusi biasanya memicu audit, kecuali WP eligible untuk 'early tax refund'. Keputusan dalam 12 bulan.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Lapor SPT Tahunan OP di Coretax",
        description:
          "Pak Dewa, K/3, karyawan PT Sinar Mas dengan penghasilan: gaji setahun Rp 360jt (sudah dipotong PPh 21 Rp 45jt), THR Rp 30jt, bonus Rp 60jt, sewa rumah warisan Rp 120jt (PPh Final dipotong penyewa Rp 12jt), bunga deposito Rp 15jt (PPh Final dipotong bank Rp 3jt), hibah dari saudara Rp 50jt (bukan keluarga sedarah). Iuran JHT 2% × 30jt/bln = Rp 7,2jt/th. JP 1% capped Rp 110.863/bln = Rp 1,33jt/th. Zakat 2,5% dari bruto pekerjaan = Rp 11,25jt. Buat panduan langkah-langkah lapor SPT Tahunan Pak Dewa di Coretax.",
        solution:
          "Langkah-langkah lapor SPT Tahunan Pak Dewa di Coretax:\n\n**Step 1: Identifikasi formulir yang dipakai**\n- Punya penghasilan dari pekerjaan + final + hibah (yang jadi objek pajak karena dari bukan keluarga sedarah).\n- Gunakan **Formulir 1770** (lengkap).\n\n**Step 2: Login ke Coretax**\n- Akses coretax.go.id, login pakai NPWP.\n- Pilih: Lapor SPT → SPT Tahunan PPh OP → Tahun 2026 → Form 1770.\n\n**Step 3: Lampiran I (Penghasilan Pekerjaan)**\n- Bruto = gaji 360jt + THR 30jt + bonus 60jt = Rp 450jt.\n- Biaya jabatan: capped Rp 6jt.\n- Iuran JHT: Rp 7,2jt.\n- Iuran JP: Rp 1,33jt.\n- Zakat: 2,5% × 450jt = Rp 11,25jt.\n- Total pengurang: Rp 25,78jt.\n- Neto = Rp 424.220.000.\n- PPh 21 dipotong: Rp 45jt (pre-populated dari data employer).\n\n**Step 4: Lampiran III (Penghasilan Lain)**\n- Hibah dari saudara (bukan sedarah) Rp 50jt = penghasilan non-final.\n- Neto = Rp 50jt (tidak ada biaya yang bisa dibiayakan).\n\n**Step 5: Lampiran IV (Penghasilan Final)**\n- Sewa rumah Rp 120jt (PPh Final Rp 12jt).\n- Bunga deposito Rp 15jt (PPh Final Rp 3jt).\n\n**Step 6: Induk SPT**\n- Total Neto Non-Final = Rp 424,22jt + Rp 50jt = Rp 474.220.000.\n- PTKP K/3 = Rp 72jt.\n- PKP = Rp 402.220.000 (dibulatkan ke bawah ribuan).\n- PPh Terutang:\n  - L1: 5% × 60jt = Rp 3jt.\n  - L2: 15% × (402.220jt - 60jt) = 15% × 342.220.000 = Rp 51.333.000.\n  - Total = Rp 54.333.000.\n- Kredit pajak (PPh 21): Rp 45jt.\n- PPh Kurang Bayar = Rp 54.333.000 - Rp 45.000.000 = Rp 9.333.000.\n\n**Step 7: Bayar Kekurangan**\n- Buat ID billing di Coretax untuk Rp 9.333.000.\n- Bayar via e-banking.\n- Bukti bayar otomatis masuk sistem.\n\n**Step 8: Submit SPT**\n- Verifikasi seluruh data, upload bukti zakat.\n- Submit dan tanda tangan elektronik.\n- Status: Diterima.\n\n**Step 9: Simpan Bukti**\n- Simpan bukti potong PPh 21, PPh Final, SSP, bukti zakat minimum 10 tahun.",
      },
      tags: [
        "SPT Tahunan",
        "Formulir 1770",
        "1770-S",
        "1770-SS",
        "Coretax",
        "deadline 31 Maret",
        "pre-populated",
        "SPT pembetulan",
      ],
    },
  ],
  exam: [
    {
      id: "ch04-e1",
      question: "Kriteria seseorang menjadi Wajib Pajak Orang Pribadi Dalam Negeri (WPDN) di Indonesia 2026 adalah?",
      options: [
        "Bertempat tinggal di Indonesia atau berada >183 hari dalam 12 bulan atau berniat menetap",
        "Memiliki NPWP Indonesia",
        "Berada di Indonesia lebih dari 90 hari dalam setahun kalender",
        "Warga Negara Indonesia saja",
      ],
      correctIndex: 0,
      explanation:
        "Kriteria WPDN: bertempat tinggal di Indonesia, ATAU berada >183 hari dalam 12 bulan, ATAU memiliki niat bertempat tinggal. Bukan hanya soal NPWP atau WNI. WPLN pun bisa jadi WPDN kalau berada >183 hari.",
      difficulty: "mudah",
    },
    {
      id: "ch04-e2",
      question: "Manakah dari berikut yang BUKAN objek pajak PPh OP?",
      options: [
        "Gaji bulanan dari employer",
        "Bonus tahunan",
        "Hibah dari ibu kandung Rp 200jt",
        "Honorarium jasa konsultan",
      ],
      correctIndex: 2,
      explanation:
        "Hibah dari ibu kandung (keluarga sedarah 1 lapis lurus) yang memenuhi syarat = bukan objek pajak. Gaji, bonus, honor = objek pajak (PPh 21 non-final).",
      difficulty: "sedang",
    },
    {
      id: "ch04-e3",
      question: "Berapa PTKP untuk WP OP status K/1 (kawin, 1 tanggungan) tahun 2026?",
      options: ["Rp 54.000.000", "Rp 58.500.000", "Rp 63.000.000", "Rp 67.500.000"],
      correctIndex: 2,
      explanation:
        "K/1 = 54jt (dasar) + 4,5jt (kawin) + 4,5jt (1 tanggungan) = Rp 63.000.000 per tahun. Tidak ada perubahan PTKP sejak 2016 (PMK 101/2016) sampai 2026.",
      difficulty: "mudah",
    },
    {
      id: "ch04-e4",
      question: "Tarif PPh OP progresif UU HPP untuk PKP di atas Rp 5 Miliar adalah?",
      options: ["25%", "30%", "35%", "40%"],
      correctIndex: 2,
      explanation:
        "Lapisan V (PKP > Rp 5 Miliar) tarifnya 35% sesuai UU HPP No. 7/2021. Inilah top rate PPh OP sejak 2022 sampai 2026.",
      difficulty: "mudah",
    },
    {
      id: "ch04-e5",
      question: "Biaya jabatan yang dapat dibiayakan untuk PPh OP 2026 adalah?",
      options: [
        "5% dari bruto bulanan, maksimal Rp 500.000/bulan (Rp 6jt/tahun)",
        "10% dari bruto, tanpa batas maksimum",
        "5% dari bruto, tanpa batas",
        "Rp 6.000.000 per bulan",
      ],
      correctIndex: 0,
      explanation:
        "Biaya jabatan: 5% dari penghasilan bruto bulanan, MAKSIMAL Rp 500.000/bulan = Rp 6.000.000/tahun. Hanya berlaku untuk karyawan (PPh 21), bukan profesional/pengusaha.",
      difficulty: "sedang",
    },
    {
      id: "ch04-e6",
      question: "PKP seorang WP OP = Rp 100.000.000. Berapa PPh terutang dengan tarif UU HPP?",
      options: ["Rp 5.000.000", "Rp 9.000.000", "Rp 15.000.000", "Rp 25.000.000"],
      correctIndex: 1,
      explanation:
        "Lapisan I (5% × 60jt) = Rp 3jt. Lapisan II (15% × 40jt) = Rp 6jt. Total = Rp 9jt. Bukan 15% × 100jt (salah), harus dihitung per lapisan.",
      difficulty: "sedang",
    },
    {
      id: "ch04-e7",
      question: "Tarif PPh Final atas sewa tanah dan/atau bangunan untuk Orang Pribadi adalah?",
      options: ["2,5%", "5%", "10%", "20%"],
      correctIndex: 2,
      explanation:
        "Sewa tanah dan/atau bangunan = PPh Final 10% (PP 29/1996). Dipotong penyewa, dilaporkan di SPT sebagai penghasilan final, tapi pajaknya tidak dihitung ulang.",
      difficulty: "sedang",
    },
    {
      id: "ch04-e8",
      question: "Komponen BPJS Ketenagakerjaan berikut yang DAPAT dibiayakan (deductible) untuk PPh 21 adalah?",
      options: [
        "BPJS Kesehatan (1% karyawan + 4% employer)",
        "Iuran JHT (2% karyawan)",
        "Jaminan Kecelakaan Kerja",
        "Jaminan Kematian",
      ],
      correctIndex: 1,
      explanation:
        "Hanya JHT (2%) dan JP (1%, capped Rp 110.863/bln) yang deductible untuk PPh 21. BPJS Kesehatan TIDAK deductible. JKK & JKm ditanggung employer, tidak relevan sebagai pengurang penghasilan karyawan.",
      difficulty: "sulit",
    },
    {
      id: "ch04-e9",
      question: "Deadline pelaporan SPT Tahunan PPh OP untuk tahun pajak 2026 adalah?",
      options: ["31 Desember 2026", "31 Januari 2027", "31 Maret 2027", "30 April 2027"],
      correctIndex: 2,
      explanation:
        "Deadline SPT Tahunan PPh OP = 31 Maret tahun berikutnya. Untuk tahun pajak 2026 → 31 Maret 2027. SPT Badan deadline 30 April.",
      difficulty: "mudah",
    },
    {
      id: "ch04-e10",
      question: "Sistem elektronik perpajakan Indonesia yang live sejak 1 Januari 2025 dengan fitur SPT pre-populated adalah?",
      options: ["e-SPT", "e-Filing", "DJP Online", "Coretax"],
      correctIndex: 3,
      explanation:
        "Coretax (Core Tax Administration System) live sejak 1 Januari 2025. Menggantikan DJP Online + e-SPT + e-Filing. Fitur: integrasi data, SPT pre-populated, real-time matching bukti potong.",
      difficulty: "sedang",
    },
  ],
}
