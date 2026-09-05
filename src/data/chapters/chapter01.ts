import type { Chapter } from "../types"

// ============================================================================
// BAB 1: KETENTUAN UMUM PERPAJAKAN (KUP)
// ============================================================================

export const chapter01: Chapter = {
  id: "ch01",
  slug: "ketentuan-umum-perpajakan",
  number: 1,
  title: "Ketentuan Umum & Tata Cara Perpajakan (KUP)",
  shortTitle: "KUP",
  description:
    "Fondasi ilmu pajak: pengertian, subjek, objek, NPWP, SPT, sampai sengketa pajak. Bab wajib dikuasai sebelum lanjut!",
  icon: "ScrollText",
  color: "emerald",
  difficulty: "pemula",
  estimatedMinutes: 180,
  objectives: [
    "Paham definisi pajak, ciri-ciri, fungsi, dan asas pemungutan pajak",
    "Bisa membedakan subjek pajak dalam negeri vs luar negeri, dan kenal objek serta bukan objek pajak",
    "Ngerti alur pendaftaran NPWP, NPPKP, dan kewajiban pembukuan",
    "Kenal jenis-jenis SPT, SKP, STP, dan dokumen perpajakan lainnya",
    "Paham sanksi administrasi & pidana, plus bunga MIR 2026",
    "Bisa ngelusuri alur pemeriksaan, keberatan, banding, dan gugatan pajak",
  ],
  lessons: [
    // =========================================================================
    // LESSON 1: APA ITU PAJAK
    // =========================================================================
    {
      id: "ch01-l01",
      slug: "apa-itu-pajak",
      title: "Apa Itu Pajak? Anatomi Sederhana yang Sering Salah Paham",
      subtitle: "Definisi, ciri-ciri, fungsi, dan syarat pemungutan pajak",
      type: "materi",
      difficulty: "pemula",
      estimatedMinutes: 12,
      content: `# 🌱 Apa Itu Pajak Sebenarnya?

Yuk, kita mulai dari paling dasar. Banyak orang bilang "pajak itu mahal" atau "pajak itu beban", padahal kalau dipahami bener-bener, pajak itu bukan musuh. Pajak itu **iuran wajib** dari rakyat ke kas negara yang dipakai buat bayar jalan raya, sekolah gratis, gaji guru, RSUD, sampai subsidi.

## Definisi Resmi (Yang Sering Keluar di Ujian)

Ada 3 definisi pajak yang sering diuji di Brevet AB:

### 1. Menurut Rochmat Soemitro
> Pajak adalah iuran rakyat kepada kas negara (peralihan kekayaan dari sektor swasta ke sektor pemerintah) berdasarkan Undang-Undang (yang dapat dipaksakan) dengan **tidak mendapatkan jasa timbal balik (kontraprestasi)** yang digunakan bagi kepentingan umum.

### 2. Menurut Prof. Dr. P.J.A. Adriani
> Pajak adalah iuran kepada negara yang dapat dipaksakan dan terutang oleh yang wajib membayarnya menurut peraturan yang berlaku dengan **tidak mendapatkan prestasi kembali yang langsung dapat ditunjuk**, yang digunakan untuk membiayai pengeluaran umum.

### 3. Menurut Undang-Undang (KUP Pasal 1 angka 1)
> Pajak adalah kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan yang bersifat **memaksa berdasarkan Undang-Undang**, dengan tidak mendapatkan imbalan secara langsung dan digunakan untuk keperluan negara bagi sebesar-besarnya kemakmuran rakyat.

**Kata kunci yang sering keluar di ujian:** "memaksa", "berdasarkan UU", "tidak ada imbalan langsung", "untuk kemakmuran rakyat". Hafalin 4 kata kunci ini, dijamin aman!

## Ciri-Ciri Pajak (Wajib Hafal!)

Ada 4 ciri utama pajak yang harus kamu tahu:

1. **Kontribusi Wajib** — Semua warga yang udah memenuhi syarat wajib bayar. Nggak bisa dihindari.
2. **Bersifat Memaksa** — Kalau nggak bayar, ada sanksi administratif bahkan pidana. Ini bukan permintaan tolong, ini kewajiban hukum.
3. **Tanpa Imbalan Langsung** — Beda sama retribusi (misal parkir). Pajak nggak langsung dapat balasan. Manfaatnya dirasakan lewat fasilitas umum: jalan, sekolah, RS, dll.
4. **Punya Dasar Hukum Kuat** — Diatur di UU, bukan Peraturan Presiden atau Permen. Di Indonesia, dasarnya **UUD 1945 Pasal 23A**: "Pajak dan pungutan lain yang bersifat memaksa untuk keperluan negara diatur dengan undang-undang."

## Fungsi Pajak (Hanya 2, Jangan Banyak-banyak)

### 1. Fungsi Budgetair (Penerimaan)
Pajak = sumber dana utama negara buat belanja rutin + pembangunan. Tahun anggaran 2026, target pajak DJP tembus **Rp 2.800 triliun** lebih. Tanpa pajak, negara bakal bangkrut.

### 2. Fungsi Regulerend (Mengatur)
Pajak dipakai buat ngatur perilaku masyarakat. Contoh:
- Rokok dikenai tarif tinggi biar orang males ngerokok
- Mobil mewah kena PPnBM sampai 95% biar nggak semua orang beli
- UMKM kena PPh final 0,5% biar mereka tetap hidup

> **Tip ujian:** Jangan tertukar dengan "fungsi redistribusi" atau "fungsi stabilisasi" yang ada di buku ekonomi. Di Brevet AB, cukup **budgetair + regulerend**.

## Syarat Pemungutan Pajak yang Baik

Biar pajak nggak bikin rusuh, ada 5 syarat:

1. **Keadilan** — Yang mampu besar bayar besar. Ada progresivitas tarif.
2. **Yuridis** — Harus berdasar UU, bukan asal pajak.
3. **Ekonomis** — Nggak boleh matiin industri atau usaha kecil.
4. **Efisien** — Biaya memungut harus lebih kecil dari hasilnya. Nggak masuk akal kalau ngeluarin Rp 100 juta buat tagih pajak Rp 50 juta.
5. **Sederhana** — Sistemnya gampang dipahami wajib pajak.

## Pengelompokan Pajak

Pajak diklasifikasiin jadi beberapa kelompok:

### Berdasarkan Golongan
- **Pajak Langsung** — Wajib pajak sendiri yang nanggung, nggak bisa dilimpahin. Contoh: **PPh**.
- **Pajak Tidak Langsung** — Bisa dilimpahin ke orang lain. Contoh: **PPN** (penjual kena PPN, tapi akhirnya konsumen yang bayar).

### Berdasarkan Sifat
- **Pajak Subjektif** — Ngaskut kondisi wajib pajaknya. Contoh: **PPh** (orang kena, badan kena, beda perlakuan).
- **Pajak Objektif** — Nggak peduli siapa wajib pajaknya, yang penting objeknya. Contoh: **PPN, PPnBM**.

### Berdasarkan Pemungutnya
- **Pajak Pusat** — Dipungut pemerintah pusat. Contoh: PPh, PPN, PPnBM, PBB (sejak 2010 dialihkan jadi PBB Perdesaan/P2), Bea Materai.
- **Pajak Daerah** — Dipungut pemerintah daerah. Contoh: Pajak Hotel, Pajak Restoran, Pajak Reklame, Pajak Kendaraan Bermotor (PKB), BBN-KB.

## Asas Pemungutan Pajak

Ada 3 asas utama yang harus kamu hafal:

1. **Asas Domisili** — Negara kenain pajak ke penghasilan Wajib Pajak yang **bertempat tinggal** di wilayahnya, baik penghasilan dari dalam maupun luar negeri. Berlaku buat WP dalam negeri.
2. **Asas Sumber** — Negara kenain pajak ke penghasilan yang **berasal dari wilayahnya**, nggak peduli WP tinggal di mana.
3. **Asas Kebangsaan** — Pengenaan pajak dikaitkan dengan kebangsaan. Misal: WNI di luar negeri tetap kena pajak sesuai aturan Indonesia (sebagian).

> **Penting:** Indonesia menganut asas **domisili** + **sumber** sekaligus buat WP dalam negeri. WP luar negeri hanya kena asas **sumber**.

## Sistem Pemungutan Pajak

Tiga sistem yang harus kamu tahu:

1. **Official Assessment System** — Fiskus yang tentuin besarnya pajak. WP cuma pasif nunggu SKP. Contoh: pajak zaman Belanda.
2. **Self Assessment System** — WP yang hitung, bayar, dan laporkan sendiri pajaknya. Fiskus cuma ngawasin. **Ini sistem yang dipakai di Indonesia sekarang** untuk PPh dan PPN.
3. **Withholding Assessment System** — Pihak ketiga (pemotong/pemungut) yang nentuin dan motong pajak. Contoh: **PPh 21 dipotong employer**, **PPh 22 dipungut importer/BUMN**, **PPh 23 dipotong pemberi kerja atas jasa**.

## 🧮 Kasus Nyata: Beda Pajak vs Retribusi vs Sumbangan

Pak Budi parkir mobilnya di mall, bayar Rp 5.000 ke petugas parkir. Itu **retribusi**, bukan pajak. Kenapa? Karena Pak Budi langsung dapat manfaat (tempat parkir). Sedangkan kalau Pak Budi bayar PPh 21 dari gajinya, dia nggak langsung dapat balasan — manfaatnya dirasakan lewat jalan raya yang mulus, sekolah anak yang gratis, dll.

Lalu beda sama sumbangan ke pengungsian: itu **sukarela**, nggak bisa dipaksa, nggak ada UU yang ngatur. Pajak itu dipaksa dan ada UU-nya.

> **Intinya:** Pajak = tanpa imbalan langsung + dipaksa + ada UU. Retribusi = ada imbalan langsung. Sumbangan = sukarela.

## Update 2026: Coretax Sudah Live!

Sejak **1 Januari 2025**, sistem perpajakan Indonesia udah pindah dari DJP Online ke **Coretax**. Apa bedanya? Coretax itu sistem terintegrasi yang nyatet semua: registrasi, SPT, pembayaran, sampai audit. Untuk WP, dampaknya:

- SPT jadi lebih mudah karena banyak yang **pre-populated** (diisi otomatis DJP)
- Bukti potong PPh 21 akan dicocokin langsung sama SPT badan
- Tidak lagi ada SPT kertas — semua wajib elektronik
- Pengisian lebih ketat, jadi nggak bisa asal cetak

Status Coretax per Agustus 2026 udah stabil, beberapa fitur tambahan terus dirilis, termasuk pemisahan role **Signer** vs **Preparer** SPT. Nanti di bab-bab selanjutnya kita bahas Coretax lebih detail ya!

## Ringkasan Akhir

Sebelum lanjut, coba deh kamu jawab singkat:
- Apa 4 ciri pajak? *(Kontribusi wajib, memaksa, tanpa imbalan langsung, dasar UU)*
- Apa 2 fungsi pajak? *(Budgetair + regulerend)*
- Sistem yang dipakai Indonesia? *(Self assessment untuk PPh/PPN, withholding untuk PPh 21/22/23)*
- Dasar konstitusional pajak? *(UUD 1945 Pasal 23A)*

Kalau udah hafal 4 hal di atas, kamu siap ke lesson berikutnya! 🚀`,
      keyPoints: [
        "Pajak = iuran wajib, memaksa, berdasar UU, tanpa imbalan langsung, untuk kemakmuran rakyat",
        "2 fungsi pajak: budgetair (penerimaan) & regulerend (mengatur)",
        "5 syarat pemungutan: keadilan, yuridis, ekonomis, efisien, sederhana",
        "3 asas: domisili, sumber, kebangsaan",
        "3 sistem: official assessment, self assessment (dipakai Indonesia), withholding assessment",
        "Pajak langsung (PPh) vs tidak langsung (PPN)",
        "Dasar konstitusional: UUD 1945 Pasal 23A",
        "Coretax live sejak 1 Januari 2025, ganti DJP Online",
      ],
      quiz: [
        {
          id: "ch01-l01-q1",
          question: "Manakah dari berikut ini yang BUKAN ciri pajak menurut UU KUP?",
          options: [
            "Kontribusi wajib kepada negara",
            "Bersifat memaksa berdasarkan UU",
            "Memberikan imbalan langsung kepada wajib pajak",
            "Digunakan untuk kemakmuran rakyat",
          ],
          correctIndex: 2,
          explanation:
            "Pajak TIDAK memberikan imbalan langsung. Imbalan yang langsung = retribusi, bukan pajak. Inget bedanya!",
          difficulty: "mudah",
        },
        {
          id: "ch01-l01-q2",
          question: "Sistem pemungutan pajak di Indonesia untuk PPh dan PPN menggunakan sistem?",
          options: [
            "Official Assessment System",
            "Self Assessment System",
            "Withholding Assessment System",
            "Hybrid Assessment System",
          ],
          correctIndex: 1,
          explanation:
            "Indonesia pakai Self Assessment System, di mana WP sendiri yang hitung, bayar, dan lapor pajaknya. Fiskus cuma ngawasin lewat pemeriksaan.",
          difficulty: "sedang",
        },
        {
          id: "ch01-l01-q3",
          question: "Pak Joko bayar PPN efektif 11% ketika beli sepatu di mall. PPN ini termasuk jenis pajak?",
          options: [
            "Pajak langsung dan subjektif",
            "Pajak tidak langsung dan objektif",
            "Pajak langsung dan objektif",
            "Pajak tidak langsung dan subjektif",
          ],
          correctIndex: 1,
          explanation:
            "PPN itu pajak TIDAK LANGSUNG (bisa dilimpahkan ke konsumen) dan OBJEKTIF (nggak peduli siapa pembelinya, yang penting ada transaksi barang/jasa kena pajak).",
          difficulty: "sedang",
        },
        {
          id: "ch01-l01-q4",
          question: "Fungsi pajak untuk mengatur perilaku masyarakat (misal rokok kena tarif tinggi) disebut?",
          options: ["Fungsi budgetair", "Fungsi regulerend", "Fungsi mengawasi", "Fungsi distribusi"],
          correctIndex: 1,
          explanation:
            "Regulerend = mengatur. Contoh klasik: rokok, barang mewah, alkohol dikenai tarif tinggi biar orang berpikir dua kali sebelum beli.",
          difficulty: "mudah",
        },
        {
          id: "ch01-l01-q5",
          question: "Dasar hukum pemungutan pajak di Indonesia berdasarkan UUD 1945 adalah?",
          options: ["Pasal 23A", "Pasal 23B", "Pasal 33", "Pasal 27"],
          correctIndex: 0,
          explanation:
            "UUD 1945 Pasal 23A: 'Pajak dan pungutan lain yang bersifat memaksa untuk keperluan negara diatur dengan undang-undang.' Ini dasar konstitusional pajak Indonesia.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Toko Kopi Sederhana vs Restoran Mewah",
        description:
          "Bu Sinta punya warung kopi kecil, omzet Rp 30 juta/bulan. Pak Hartono punya restoran mewah, omzet Rp 500 juta/bulan. Kira-kira siapa yang kena pajak lebih banyak dan kenapa?",
        solution:
          "Keduanya kena pajak, tapi dengan cara berbeda. Bu Sinta masuk kategori UMKM (omzet ≤ Rp 4,8M/tahun), kena PPh Final 0,5% dari omzet (Rp 150 ribu/bulan). Pak Hartono kena PPh Badan 22% dari laba bersih, plus PPN 11% (efektif) yang dipungut dari pelanggan. Prinsipnya: yang mampu besar, bayar lebih besar. Ini sesuai syarat keadilan dan asas progresivitas tarif.",
      },
      tags: ["definisi pajak", "ciri pajak", "fungsi pajak", "asas pajak", "sistem pemungutan", "KUP", "UU KUP"],
    },

    // =========================================================================
    // LESSON 2: SUBJEK & OBJEK PAJAK
    // =========================================================================
    {
      id: "ch01-l02",
      slug: "subjek-objek-pajak",
      title: "Subjek & Objek Pajak: Siapa Bayar, Apa yang Dikenai",
      subtitle: "WP dalam negeri, luar negeri, BUT, warisan; objek PPh & PPN; bukan objek pajak",
      type: "materi",
      difficulty: "pemula",
      estimatedMinutes: 22,
      content: `# 👥 Subjek & Objek Pajak

Setelah tahu apa itu pajak, sekarang kita masuk ke pertanyaan yang lebih teknis: **siapa yang harus bayar pajak**, dan **apa yang dikenai pajak**? Ini dua konsep yang sering bikin bingung di ujian. Yuk bedain!

## Subjek Pajak: Siapa yang Wajib Bayar?

Subjek pajak = orang atau badan yang secara hukum wajib bayar pajak. Di Indonesia, subjek pajak dibagi jadi 2 besar:

### 1. Wajib Pajak Dalam Negeri (WPDN)

Termasuk:

| Subjek | Kriteria |
|--------|----------|
| Orang pribadi | Bertempat tinggal di Indonesia, atau berada di Indonesia lebih dari 183 hari dalam jangka 12 bulan |
| Badan | Didirikan atau berkedudukan di Indonesia |
| Warisan yang belum terbagi | Disebut sebagai satu kesatuan menggantikan yang berhak |

> **Penting:** Yang dimaksud "berada di Indonesia lebih dari 183 hari" itu dihitung dalam periode 12 bulan kalender, nggak harus 1 Januari–31 Desember. Bisa mulai dari Juni sampai Mei tahun depan.

**Contoh WP Dalam Negeri:**
- Pak Andi, warga Indonesia, kerja di Jakarta → WPDN
- PT Maju Jaya, didirikan di Surabaya → WPDN
- Warisan Bapak Slamet yang belum dibagi ke anak-anak → WPDN (subjek pajak sendiri sampai dibagi)
- John, warga Australia, kerja di Bali selama 200 hari → **WPDN** karena melebihi 183 hari

### 2. Wajib Pajak Luar Negeri (WPLN)

Termasuk:

| Subjek | Kriteria |
|--------|----------|
| Orang pribadi | Tidak bertempat tinggal di Indonesia, atau berada di Indonesia ≤ 183 hari dalam 12 bulan |
| Badan | Tidak didirikan dan tidak berkedudukan di Indonesia |
| Bentuk Usaha Tetap (BUT) | Installasi, gedung, kantor, cabang perusahaan, pertambangan, perkebunan, dll yang dimiliki WPLN |

**Contoh WP Luar Negeri:**
- Mr. Smith, warga Inggris, kerja remote untuk client Indonesia tapi tinggal di London → WPLN
- Google LLC (perusahaan AS) yang dapat royalti dari Indonesia → WPLN
- BUT: Kantor perwakilan Toyota Jepang di Jakarta → **BUT** = WPLN

## 🔍 Apa Itu Bentuk Usaha Tetap (BUT)?

BUT itu "cabang" dari perusahaan asing di Indonesia. Definisinya (Pasal 2 KUP):

> Bentuk yang dipergunakan oleh orang pribadi yang tidak bertempat tinggal di Indonesia, atau badan yang tidak didirikan dan tidak berkedudukan di Indonesia, untuk menjalankan usaha atau kegiatan bebas di Indonesia.

Bentuk BUT meliputi:
1. Tempat kedudukan manajemen
2. Cabang perusahaan
3. Kantor perwakilan
4. Gedung kantor
5. Pabrik
6. Bengkel
7. Gudang
8. Pertokoan
9. Bengkel, warung, dll yang dipimpin oleh **pejabat perusahaan asing**
10. Pertambangan, perikanan, peternakan, pertanian, perkebunan, atau sumber alam
11. Instalasi listrik, gas, air, dll
12. Jasa bangunan (konstruksi)
13. Pemberian jasa lewat karyawan (≥ 60 hari dalam 12 bulan)
14. Agen asuransi
15. Komputer, internet, satelit (e-commerce)

> **Tip ujian:** kalau ada soal "apakah agen asuransi asing itu BUT?" → **IYA, BUT**. Tapi kalau "agen asuransi lokal yang kebetulan punya client asing" → bukan BUT.

## Objek Pajak: Apa yang Dikenai Pajak?

Objek pajak berbeda tergantung jenis pajaknya. Yang paling sering keluar di ujian adalah objek PPh dan objek PPN.

### Objek Pajak Penghasilan (PPh)

Pasal 4(1) KUP: Objek PPh adalah **penghasilan**, yaitu setiap tambahan kemampuan ekonomis yang diterima atau diperoleh Wajib Pajak, baik dari Indonesia maupun luar Indonesia, yang bisa dipakai untuk konsumsi atau menambah kekayaan.

Contoh:
- Gaji/upah (PPh 21)
- Keuntungan usaha (PPh badan / PPh OP)
- Bunga deposito (PPh final 20%)
- Honor jasa (PPh 23 2%)
- Royalti (PPh 23 15%)
- Sewa tanah & bangunan (PPh final 10%)

### Objek Pajak Pertambahan Nilai (PPN)

Pasal 4 UU PPN (sekarang UU HPP): Objek PPN adalah:
1. Penyerahan **Barang Kena Pajak** (BKP) — barang berwujud maupun tak berwujud
2. Penyerahan **Jasa Kena Pajak** (JKP)
3. Impor BKP
4. Ekspor BKP tak berwujud & JKP
5. Impor JKP (sejak UU HPP)
6. Penggunaan BKP tak berwujud & JKP dari luar negeri (PMSE)
7. Penyerahan BKP ke Pemekaran/daerah otonom
8. Penyerahan BKP oleh pusat ke cabang atau sebaliknya

> **Inti:** Setiap penyerahan BKP/JKP, ekspor, impor, dan penggunaan jasa dari luar negeri → kena PPN.

## 🚫 Bukan Objek PPh (Pasal 4(3) KUP)

Ini **sangat sering keluar di ujian**! Hafalin 9 jenis ini:

1. **Bantuan/sumbangan** — bencana alam, sumbangan ke negara, dsb.
2. **Harta hibahan** — termasuk warisan yang sudah terbagi (catatan: warisan belum terbagi = subjek pajak, tapi penghasilan dari warisan belum terbagi = bukan objek PPh)
3. **Beasiswa** — sesuai peraturan
4. **Harta warisan sebelum terbagi** — segala jenis penghasilan yang diterima oleh warisan yang belum terbagi (INI BUKAN OBJEK PPh, meskipun warisan yang belum terbagi itu subjek pajak)
5. **Bantuan dari BPJS** — JKK, JKM
6. **Iuran pensiun** — iuran dari pemberi kerja ke dana pensiun yang disetujui Menkeu
7. **Sumangan dari pemberi kerja** — untuk biaya pendidikan, kesehatan, dll (dengan syarat)
8. **Pembagian laba/sisa hasil usaha koperasi** — yang dibayar ke anggota
9. **Bunga obligasi** — yang diterima investor tertentu (dengan syarat)

> **Peringatan:** Warisan yang belum terbagi itu **subjek pajak** (jadi harus punya NPWP), tapi penghasilan yang diterima warisan itu **bukan objek PPh**. Triky kan? Hati-hati di ujian!

## 🚫 Bukan Objek PPN

Pasal 4A UU PPN (UU HPP) — barang/jasa yang **tidak kena PPN**:

### Barang yang tidak kena PPN:
1. Hasil pertanian, perburuan, perikanan, perkebunan, kehutanan (yang belum diproses)
2. Barang-barang kebutuhan pokok (beras, jagung, gandum, kedelai, gula pasir)
3. Air dari sumbernya
4. Makanan dan minuman yang disajikan di hotel/restoran (kena Pajak Daerah Restoran)
5. Emas batangan dan perhiasan
6. Perumahan rakyat (tipe kecil, subsidize)
7. Batubara untuk pembangkit listrik

### Jasa yang tidak kena PPN:
1. Jasa kesehatan medis
2. Jasa pelayanan sosial
3. Jasa pengiriman uang
4. Jasa asuransi
5. Jasa keagamaan
6. Jasa pendidikan
7. Jasa kesenian dan hiburan (yang disponsori pemerintah)
8. Jasa penyiaran (untuk tertentu)
9. Jasa angkutan umum (darat, laut, udara)
10. Jasa perhotelan → wait, ini sebenarnya kena Pajak Daerah Hotel
11. Jasa yang dipungut Pajak Daerah
12. Jasa tenaga kerja (outsourcing tenaga kerja)
13. Jasa koperasi simpan pinjam
14. Jasa parkir
15. Jasa telepon umum

> **Tip ujian:** "Restoran, hotel, parkir" → kena Pajak Daerah, BUKAN PPN. Jangan salah!

## Perbedaan Subjek vs Objek Pajak (Jangan Tertukar)

Banyak yang bingung: subjek itu orangnya, objek itu apa yang dikenai pajak. Analogi gini:

- **Subjek = pengemudi mobil** (orang yang harus punya SIM)
- **Objek = mobilnya** (yang harus ada STNK)

Contoh:
- Pak Andi (subjek PPh orang pribadi) punya penghasilan dari gaji (objek PPh)
- PT Maju Jaya (subjek PPh badan) punya laba usaha (objek PPh)
- Toko Roti Bu Tini (subjek PPN = PKP) menjual roti (objek PPN = BKP)

## 💼 Kasus Nyata: Membedakan Subjek & Objek

Mari kita analisa kasus berikut:

**Situasi:**
1. PT Global Tech (didirikan di Singapura) punya kantor perwakilan di Jakarta → **Subjek:** WPLN dalam bentuk BUT. **Objek PPh:** laba usaha BUT di Indonesia.
2. Bu Yanti (WNI) kerja di Singapura 6 bulan, dibayar oleh perusahaan Singapura → **Subjek:** WPDN (masih WNI, dianggap WPDN). **Objek:** penghasilan dari Singapura (tapi bisa dikredit dengan PPh yang dibayar di Singapura via tax treaty).
3. Warisan almarhum Pak Daud belum dibagi selama 2 tahun, dan duitnya dipakai buat beli saham yang naik Rp 100 juta → **Subjek:** Warisan = subjek pajak. **Objek PPh:** capital gain saham = **KENA PPh**. Tunggu, tapi katanya warisan belum terbagi itu bukan objek PPh? Hayo, bingung kan?

Jawaban: Yang bukan objek PPh itu adalah penghasilan yang diterima **oleh** warisan belum terbagi **dari** harta warisan (misal bunga deposit warisan, sewa tanah warisan). Tapi kalau warisan itu beli saham lalu sahamnya naik → capital gain-nya tetap kena PPh karena bukan berasal dari harta warisan itu sendiri, melainkan dari aktivitas investasi baru.

> Jadi: "warisan belum terbagi" itu subjek pajak, dan penghasilan dari harta warisan itu bukan objek PPh, tapi penghasilan dari aktivitas baru tetap kena PPh. Paham ya?

## Update 2026: Definisi Subjek di Era Coretax

Di Coretax, definisi subjek & objek pajak nggak berubah (masih merujuk Pasal 2 & 4 KUP). Tapi yang beda:
- Setiap subjek pajak harus **terdaftar NPWP** di Coretax secara individu
- Data BUT akan otomatis ter-link dengan parent company di luar negeri (kalau ada)
- Warisan belum terbagi harus punya NPWP sendiri (di-input di Coretax dengan status khusus "Warisan")
- Penyelenggara Modat Asing (PMSE) seperti Netflix, Spotify, Google harus terdaftar sebagai pemungut PPN di Coretax

## Ringkasan Penting Buat Ujian

- **Subjek Pajak = Orang/Badan yang wajib bayar pajak** → dibagi WPDN & WPLN
- **BUT = Bentuk Usaha Tetap, masuk WPLN**
- **Warisan belum terbagi = subjek pajak, tapi penghasilan dari harta warisan = bukan objek PPh**
- **Objek PPh = penghasilan** (semua tambahan ekonomis)
- **Objek PPN = penyerahan BKP/JKP, ekspor, impor, PMSE**
- **Bukan objek PPh Pasal 4(3)**: hibahan, warisan (sudah terbagi), beasiswa, bantuan bencana, BPJS, dll.
- **Bukan objek PPN**: hasil pertanian, beras, air, emas batangan, jasa kesehatan, jasa pendidikan, jasa pengiriman uang, dll.

Sudah mulai kebayang? Kalau belum, coba baca lagi dan hafalin daftar "bukan objek" — itu yang paling sering keluar di soal! 📚`,
      keyPoints: [
        "WP Dalam Negeri (WPDN) = OP tinggal/b >183 hari, badan didirikan di IDN, warisan belum terbagi",
        "WP Luar Negeri (WPLN) = OP/badan asing, BUT (cabang perusahaan asing di IDN)",
        "BUT meliputi: kantor, pabrik, pertambangan, perkebunan, agen asuransi asing, jasa konstruksi, dll",
        "Objek PPh = penghasilan (setiap tambahan ekonomis)",
        "Objek PPN = penyerahan BKP/JKP, ekspor, impor, PMSE",
        "Bukan objek PPh Pasal 4(3): hibahan, warisan terbagi, beasiswa, BPJS, iuran pensiun, dll",
        "Bukan objek PPN: hasil pertanian, beras, air, emas, jasa kesehatan, pendidikan, asuransi, hotel, restoran, parkir",
        "Warisan belum terbagi = subjek pajak, tapi penghasilan dari harta warisan = bukan objek PPh",
      ],
      quiz: [
        {
          id: "ch01-l02-q1",
          question:
            "John, warga Australia, bekerja di Indonesia selama 200 hari dalam 12 bulan. Status John sebagai Wajib Pajak adalah?",
          options: [
            "WP Luar Negeri karena warga Australia",
            "WP Dalam Negeri karena berada > 183 hari di Indonesia",
            "BUT karena warga asing",
            "Bukan subjek pajak karena bukan WNI",
          ],
          correctIndex: 1,
          explanation:
            "Kriteria WPDN orang pribadi: bertempat tinggal di Indonesia ATAU berada di Indonesia lebih dari 183 hari dalam 12 bulan. John berada 200 hari → WPDN, walaupun warga Australia.",
          difficulty: "sedang",
        },
        {
          id: "ch01-l02-q2",
          question: "Manakah dari berikut ini BUKAN merupakan Bentuk Usaha Tetap (BUT)?",
          options: [
            "Cabang perusahaan asing di Jakarta",
            "Pertambangan emas yang dikelola perusahaan Kanada",
            "Agen asuransi yang dimiliki warga lokal Indonesia",
            "Bengkel milik perusahaan Jepang di Surabaya",
          ],
          correctIndex: 2,
          explanation:
            "BUT itu milik/bentuk yang dipergunakan oleh WP LUAR NEGERI. Agen asuransi yang dimiliki warga lokal Indonesia = WPDN, bukan BUT.",
          difficulty: "sedang",
        },
        {
          id: "ch01-l02-q3",
          question:
            "Warisan almarhum Pak Daud belum dibagi. Selama 2 tahun, harta warisan menghasilkan bunga deposito Rp 500 juta. Bagaimana perlakuan pajaknya?",
          options: [
            "Warisan = subjek pajak, bunga deposito = objek PPh (kena PPh final 20%)",
            "Warisan = bukan subjek pajak, bunga deposito = bukan objek PPh",
            "Warisan = subjek pajak, bunga deposito = bukan objek PPh (Pasal 4(3))",
            "Warisan = subjek pajak, bunga deposito = kena PPh final 10%",
          ],
          correctIndex: 2,
          explanation:
            "Warisan belum terbagi itu SUBJEK pajak (harus punya NPWP). Tapi penghasilan yang diterima dari harta warisan itu (seperti bunga, sewa) = BUKAN OBJEK PPh (Pasal 4(3) huruf c).",
          difficulty: "sulit",
        },
        {
          id: "ch01-l02-q4",
          question: "Manakah yang termasuk bukan objek PPN?",
          options: [
            "Penjualan sepatu di mall",
            "Jasa reparasi mobil di bengkel",
            "Jasa pendidikan di sekolah swasta",
            "Penyerahan makanan dari pabrik ke restoran",
          ],
          correctIndex: 2,
          explanation:
            "Jasa pendidikan termasuk dalam daftar jasa yang tidak kena PPN (Pasal 4A UU PPN). Sekolah swasta maupun negeri sama-sama tidak kena PPN atas jasa pendidikan.",
          difficulty: "mudah",
        },
        {
          id: "ch01-l02-q5",
          question: "Manakah yang BUKAN termasuk bukan objek PPh Pasal 4(3)?",
          options: [
            "Beasiswa yang sesuai peraturan",
            "Bantuan BPJS JKK/JKM",
            "Honorarium dosen sebagai pemateri",
            "Pembagian Sisa Hasil Usaha (SHU) koperasi ke anggota",
          ],
          correctIndex: 2,
          explanation:
            "Honorarium dosen sebagai pemateri = penghasilan, masuk objek PPh (kena PPh 21 atau PPh 23, tergantung status). Tiga lainnya jelas bukan objek PPh Pasal 4(3).",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Apa Status PT Singapore Imports?",
        description:
          "PT Singapore Imports adalah cabang dari Singapore Holdings Pte Ltd. Mereka punya kantor importir di Jakarta, gudang di Surabaya, dan tim sales yang berasal dari warga Indonesia. Apa status pajak mereka?",
        solution:
          "PT Singapore Imports adalah Bentuk Usaha Tetap (BUT) karena merupakan cabang perusahaan asing di Indonesia. Sebagai BUT, mereka dianggap WPLN. Penghasilan yang diterima dari aktivitas di Indonesia (penjualan, import) = objek PPh yang kena PPh badan 22% (dengan perlakuan khusus BUT, tidak bisa dapat PTKP). Selain itu, transaksi penyerahan BKP ke konsumen Indonesia = objek PPN, dan mereka wajib jadi PKP. Laba yang dipindahkan ke kantor pusat di Singapura juga bisa dikenai PPh 20% atas cabang (Branch Profit Tax) — kecuali ada tax treaty yang menurunkan tarif.",
      },
      tags: [
        "subjek pajak",
        "objek pajak",
        "WP dalam negeri",
        "WP luar negeri",
        "BUT",
        "bukan objek PPh",
        "Pasal 4(3)",
        "bukan objek PPN",
      ],
    },

    // =========================================================================
    // LESSON 3: NPWP & NPPKP
    // =========================================================================
    {
      id: "ch01-l03",
      slug: "npwp-dan-nppkp",
      title: "NPWP & NPPKP: KTP-nya Wajib Pajak & 'SIM' Pengusaha Kena Pajak",
      subtitle: "Cara daftar, format 15/16 digit, sanksi nggak punya, Coretax 2026 update",
      type: "materi",
      difficulty: "pemula",
      estimatedMinutes: 18,
      content: `# 📇 NPWP & NPPKP

Halo! Kalau kamu mau resmi jadi wajib pajak, ada 2 dokumen yang harus kamu kenal: **NPWP** dan **NPPKP**. Dua-duanya wajib di Coretax 2026. Yuk kita bedain dan kuasai!

## Apa Itu NPWP?

**NPWP** = Nomor Pokok Wajib Pajak. Ini kayak "KTP"-nya wajib pajak, yang dipakai buat identifikasi diri kamu di mata Direktorat Jenderal Pajak (DJP).

- Wajib dimiliki oleh setiap subjek pajak (OP, badan, BUT, warisan belum terbagi)
- Dipakai buat lapor SPT, bayar pajak, urus restitusi, dll
- Sekarang registrasi & cetak NPWP **semua online di Coretax** (dulu di DJP Online)

## Apa Itu NPPKP?

**NPPKP** = Nomor Pokok Pengusaha Kena Pajak. Ini khusus buat yang mau jadi **Pengusaha Kena Pajak (PKP)** — yaitu pengusaha yang melakukan penyerahan BKP/JKP yang kena PPN.

> **Analogi:** NPWP itu kayak KTP kamu (semua wajib punya). NPPKP itu kayak SIM buat ngjual barang/jasa kena PPN — khusus yang udah qualify.

## Format NPWP: 15 atau 16 Digit?

NPWP punya format yang khas, dan sering keluar di ujian! Hafalin ini:

### NPWP Orang Pribadi — 15 digit
Format: **XX.XXX.XXX.X-XXX.XXX**

Contoh: \`01.234.567.8-901.000\`

Penjelasan:
- **XX.XXX.XXX.X** = Nomor induk (9 digit pertama + 1 digit pemeriksa)
- **XXX** = Kode KPP (3 digit)
- **XXX** = Status (000 = OP, 001 = badan)

### NPWP Badan — 16 digit
Format: **XX.XXX.XXX.X-XXX.XXX**

Contoh: \`01.234.567.8-901.001\`

> Hati-hati: Sebenarnya baik OP maupun badan sama-sama 15 atau 16 digit (tergantung sumber). Yang penting diingat: **3 digit terakhir (status)** menandakan jenis WP:
> - **000** = OP
> - **001** = Badan
> - **002-009** = Jenis badan lainnya

### NPWP BUT & Warisan
- BUT → punya kode status tersendiri
- Warisan belum terbagi → kode status khusus (biasanya diawali dengan kode tertentu di Coretax)

## Kapan Wajib Punya NPWP?

Pasal 2(2) KUP — Wajib daftar NPWP kalau:

### Orang Pribadi:
- Telah memenuhi syarat subjektif & objektif (sudah jadi subjek pajak + punya penghasilan)
- Khusus pegawai: wajib saat penghasilan sudah melebihi PTKP (Rp 54 juta/tahun)
- Khusus WP OP yang punya usaha: wajib saat mulai usaha atau saat omzet > Rp 4,8M/tahun untuk PKP

### Badan:
- Saat didirikan (sejak akta notaris)

### Warisan belum terbagi:
- Saat warisan belum dibagi dan ada penghasilan

### Pengusaha Kena Pajak (PKP):
- Wajib punya NPWP + NPPKP saat omzet usaha > Rp 4,8 miliar/tahun (batas wajib PKP)
- Di bawah itu: opsional, bisa mendaftar sukarela

> **Tip ujian:** Batas wajib PKP = Rp 4.800.000.000/tahun (4,8M). Di bawah itu = PKP sukarela.

## Cara Daftar NPWP di Coretax 2026

Di era Coretax (sejak 1 Januari 2025), cara daftar NPWP jauh lebih simpel:

1. **Akses Coretax** lewat coretax-djp.pajak.go.id (atau link resmi DJP)
2. Login pakai identitas (untuk OP, bisa pakai akun DJP Online lama atau buat baru)
3. Isi formulir registrasi elektronik
4. Upload dokumen:
   - OP: KTP + NPWP jika sudah ada
   - Badan: Akta notaris + SK Kemenkumham
   - Warisan: Akta kematian + surat keterangan warisan
5. Sistem otomatis verifikasi via Dukcapil (untuk OP) dan AHU (untuk badan)
6. NPWP keluar secara **real-time** (cetak sendiri via PDF)

> **Update 2026:** Proses registrasi di Coretax udah lebih cepat karena terintegrasi langsung dengan Dukcapil. Dulu butuh hari, sekarang bisa **real-time** untuk OP yang datanya match.

## Kewajiban Punya NPWP

Setelah punya NPWP, kamu wajib:

1. **Lapor SPT setiap tahun** (SPT Tahunan OP paling lambat 31 Maret, Badan paling lambat 30 April)
2. **Bayar pajak tepat waktu** (untuk PPh badan: bulanan + tahunan, dst)
3. **Update data** kalau ada perubahan (alamat, status, dll) — di Coretax bisa lewat menu "Profil"
4. **Memberi NPWP ke pihak ketiga** yang memotong pajak (employer, pemberi kerja, dll)

## Sanksi Nggak Punya NPWP

Pasal 2(8) KUP: Sanksi nggak daftar NPWP padahal wajib:

- **Denda administratif**: Rp 100.000 (untuk OP), Rp 1.000.000 (untuk badan)
- **Tidak bisa lapor SPT** (di Coretax NPWP harus ada dulu)
- **Tidak bisa ikut lelang pemerintah**
- **Tarif PPh lebih tinggi**: PPh 21 tanpa NPWP = 20% lebih tinggi dari tarif semestinya (1,2x)
- **Tidak bisa dapat kredit pajak** (PPh 22, 23, 24 yang dipotong jadi nggak bisa dikredit)

> **Kontek 2026:** Di Coretax, NPWP juga dipakai buat "match" data dari berbagai pihak (employer, bank, dll). Kalau kamu nggak punya NPWP, data penghasilanmu nggak akan ter-match dengan baik, dan kamu bisa kena sanksi lebih berat nantinya.

## Apa Itu PKP (Pengusaha Kena Pajak)?

PKP = Pengusaha Kena Pajak. Pengusaha yang melakukan:
1. Penyerahan BKP
2. Penyerahan JKP

Yang **bukan** PKP (tidak wajib NPPKP):
- Pengusaha kecil dengan omzet ≤ Rp 4,8 miliar/tahun (boleh mendaftar sukarela)
- Pengusaha yang usahanya hanya jual barang/jasa yang **bukan objek PPN** (contoh: jual beras mentah)

## Format NPPKP

Format: **XX.XXX.XXX.X-XXX.XXX**

NPPKP itu = NPWP + suffix ".XXX" di belakangnya. Suffix ini menandakan nomor urut PKP di KPP tertentu.

Contoh: NPWP \`01.234.567.8-901.001\` → NPPKP \`01.234.567.8-901.001.000\`

> **Tip:** NPPKP selalu = NPWP + .000 (untuk PKP pertama di entitas itu). Kalau ada banyak PKP (jarang), suffix akan naik.

## Cara Daftar NPPKP di Coretax

1. Login Coretax pakai NPWP
2. Pilih menu "Pendaftaran PKP"
3. Isi formulir PKP elektronik
4. Upload dokumen pendukung:
   - KTP penanggung jawab
   - Akta pendirian (untuk badan)
   - Laporan keuangan (omzet)
5. Sistem akan terbitkan **NPPKP dan Sertifikat PKP** elektronik

> **Update 2026:** Proses pendaftaran PKP di Coretax juga udah real-time untuk yang dokumennya lengkap. Tinggal klik daftar, upload, dan langsung dapat NPPKP.

## Konsekuensi Jadi PKP

Setelah jadi PKP, kamu wajib:
1. **Memungut PPN** dari pembeli (11% efektif via DPP 11/12 — atau 12% untuk barang mewah)
2. **Setor PPN** ke kas negara paling lambat akhir bulan berikutnya
3. **Lapor SPT Masa PPN** setiap bulan
4. **Keluarkan Faktur Pajak** atas setiap penyerahan BKP/JKP
5. **Kredit Pajak Masukan** dari pembelian yang kena PPN

> **Ingat!** PPN itu pajak tidak langsung — pengusaha cuma "memungut" dari pembeli lalu setor ke negara. Pengusaha sendiri nggak nanggung PPN.

## Apa Itu Faktur Pajak?

Faktur Pajak = bukti pemungutan PPN oleh PKP. Ada 2 jenis:

1. **Faktur Pajak Normal** — atas penyerahan BKP/JKP biasa
2. **Faktur Pajak Pengganti** — kalau faktur normal hilang/rusak

Di Coretax 2026, faktur pajak udah **elektronik (e-Faktur terintegrasi)**, di-generate otomatis oleh sistem saat transaksi di-input.

## 💼 Kasus Nyata: Kapan Harus Daftar NPWP & NPPKP?

**Situasi 1: Sari, fresh graduate, gaji Rp 8 juta/bulan.**
- Penghasilan setahun: 8 × 12 = Rp 96 juta
- PTKP TK/0: Rp 54 juta
- Penghasilan kena pajak: Rp 42 juta
- **Wajib NPWP** karena penghasilan > PTKP
- Tidak wajib NPPKP (bukan pengusaha)

**Situasi 2: Doni, punya warung makan, omzet Rp 30 juta/bulan (Rp 360 juta/tahun).**
- Omzet < Rp 4,8M → belum wajib NPPKP
- **Wajib NPWP** karena punya usaha
- Boleh daftar PKP sukarela kalau mau (untuk kredit pajak masukan)

**Situasi 3: PT Cipta Mandiri, omzet Rp 6 miliar/tahun.**
- Omzet > Rp 4,8M → **wajib NPPKP** (jadi PKP)
- Wajib NPWP badan
- Wajib keluarin faktur pajak, setor PPN, lapor SPT Masa PPN

**Situasi 4: Warisan almarhum Pak Sugiono, belum dibagi, ada harta penghasilan.**
- **Wajib NPWP** untuk warisan belum terbagi
- NPWP dikeluarkan atas nama "Warisan Pak Sugiono"

## Sanksi Tidak Daftar NPWP/NPPKP

| Pelanggaran | Sanksi |
|------------|--------|
| Tidak daftar NPWP (OP) | Rp 100.000 |
| Tidak daftar NPWP (Badan) | Rp 1.000.000 |
| Tidak daftar NPPKP (PKP wajib) | Rp 1.000.000 |
| Tidak buat faktur pajak | Denda 2% dari DPP |
| Salah nominal di faktur pajak | Denda sesuai selisih |

## Update 2026: Yang Perlu Kamu Tahu di Coretax

1. **Sudah tidak ada NPWP kartu fisik** — semuanya elektronik (PDF)
2. **NPWP bisa dicetak ulang** kapan saja lewat Coretax
3. **Pemutihan NPWP**: sejak Coretax, banyak NPWP "mati" yang dihapus otomatis kalau WP nggak pernah lapor 5 tahun berturut-turut
4. **NPWP 1 orang = 1 nomor seumur hidup** (kalau WP OP meninggal, NPWP bisa diwariskan untuk keperluan warisan belum terbagi)
5. **Verifikasi real-time**: data NPWP di Coretax selalu sinkron dengan Dukcapil (untuk OP) dan AHU (untuk badan)

> **Tip ujian 2026:** Kalau ditanya cara daftar NPWP di 2026, jawabannya **Coretax** (bukan lagi DJP Online). E-Faktur dan e-SPT sekarang terintegrasi di Coretax.

## Ringkasan Buat Ujian

- **NPWP** = nomor identitas wajib pajak (OP, badan, BUT, warisan)
- **NPPKP** = nomor PKP (pengusaha yang serah BKP/JKP)
- **Format NPWP**: XX.XXX.XXX.X-XXX.XXX (15 digit OP, 16 digit badan)
- **Batas wajib PKP**: omzet > Rp 4,8 miliar/tahun
- **Sanksi nggak daftar**: OP Rp 100.000, Badan Rp 1.000.000
- **Tarif lebih tinggi tanpa NPWP**: PPh 21 = 1,2x tarif normal
- **Coretax 2026**: semua registrasi elektronik, real-time untuk OP

Sudah cukup kebayang? Kalau ya, kamu siap ke lesson SPT & Pembukuan! 📄`,
      keyPoints: [
        "NPWP = identitas wajib pajak (KTP-nya WP), 15 digit OP / 16 digit badan",
        "NPPKP = nomor PKP, khusus pengusaha yang serah BKP/JKP kena PPN",
        "Format NPWP: XX.XXX.XXX.X-XXX.XXX (3 digit terakhir = status WP)",
        "Wajib NPWP: OP yang penghasilan > PTKP, badan saat didirikan, warisan belum terbagi",
        "Batas wajib PKP: omzet > Rp 4,8 miliar/tahun (di bawah itu = sukarela)",
        "Sanksi nggak daftar: OP Rp 100K, Badan Rp 1.000K",
        "Tarif PPh 21 tanpa NPWP = 1,2x tarif normal (lebih tinggi 20%)",
        "Coretax 2026: semua registrasi elektronik, real-time via Dukcapil/AHU",
      ],
      quiz: [
        {
          id: "ch01-l03-q1",
          question: "Berapa batas omzet tahunan agar pengusaha WAJIB menjadi Pengusaha Kena Pajak (PKP)?",
          options: ["Rp 600 juta", "Rp 1,2 miliar", "Rp 4,8 miliar", "Rp 50 miliar"],
          correctIndex: 2,
          explanation:
            "Batas wajib PKP = omzet melebihi Rp 4,8 miliar/tahun. Di bawah itu, pendaftaran PKP bersifat sukarela.",
          difficulty: "mudah",
        },
        {
          id: "ch01-l03-q2",
          question:
            "Sari, pegawai swasta, gaji Rp 8 juta/bulan (Rp 96 juta/tahun). Status kewajiban NPWP-nya?",
          options: [
            "Tidak wajib karena gaji < Rp 10 juta/bulan",
            "Wajib karena penghasilan > PTKP (Rp 54 juta/tahun)",
            "Tidak wajib karena status pegawai",
            "Wajib hanya kalau menikah",
          ],
          correctIndex: 1,
          explanation:
            "Pegawai wajib daftar NPWP saat penghasilan melebihi PTKP (Rp 54 juta/tahun untuk TK/0). Penghasilan Sari Rp 96 juta > Rp 54 juta → wajib NPWP.",
          difficulty: "sedang",
        },
        {
          id: "ch01-l03-q3",
          question: "Sanksi administrasi untuk WP orang pribadi yang tidak mendaftarkan NPWP adalah?",
          options: ["Rp 50.000", "Rp 100.000", "Rp 500.000", "Rp 1.000.000"],
          correctIndex: 1,
          explanation:
            "Pasal 2(8) KUP: Sanksi tidak daftar NPWP = Rp 100.000 untuk OP, Rp 1.000.000 untuk badan.",
          difficulty: "mudah",
        },
        {
          id: "ch01-l03-q4",
          question:
            "PT Sumber Rezeki omzet Rp 5 miliar/tahun tapi belum daftar NPPKP. Konsekuensi yang mungkin terjadi?",
          options: [
            "Tidak ada konsekuensi karena omzet masih di bawah Rp 10 miliar",
            "Denda administratif Rp 1.000.000 + wajib setor PPN setelah jadi PKP",
            "Hanya kena sanksi bunga MIR 0,6%/bulan",
            "Tidak bisa lapor SPT badan",
          ],
          correctIndex: 1,
          explanation:
            "Omzet > Rp 4,8M = WAJIB jadi PKP. Sanksi tidak daftar NPPKP = Rp 1.000.000. Setelah daftar, PT wajib memungut dan menyetor PPN.",
          difficulty: "sedang",
        },
        {
          id: "ch01-l03-q5",
          question: "Bagaimana perlakuan PPh 21 untuk pegawai yang TIDAK punya NPWP?",
          options: [
            "Tarif tetap sama dengan yang punya NPWP",
            "Tarif lebih tinggi 20% dari tarif seharusnya (faktor 1,2x)",
            "Tidak kena PPh 21 sama sekali",
            "Tarif menjadi 2x lipat dari tarif normal",
          ],
          correctIndex: 1,
          explanation:
            "Pasal 21(5a) KUP: PPh 21 untuk WP yang tidak punya NPWP = tarif × 1,2 (lebih tinggi 20% dari tarif normal). Ini untuk mendorong WP daftar NPWP.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Toko Bangunan Sentosa",
        description:
          "Toko Bangunan Sentosa punya omzet Rp 6,2 miliar/tahun. Selama ini belum daftar NPWP badan maupun NPPKP. Apa yang harus mereka lakukan?",
        solution:
          "PT Toko Bangunan Sentosa WAJIB segera daftar NPWP badan (kalau belum) dan NPPKP (jadi PKP) karena omzet > Rp 4,8 miliar/tahun. Sanksi tidak daftar NPWP badan = Rp 1.000.000 + sanksi tidak daftar NPPKP = Rp 1.000.000. Selanjutnya, mereka harus: (1) memungut PPN 11% efektif dari pembeli, (2) mengeluarkan faktur pajak untuk setiap penyerahan BKP, (3) lapor SPT Masa PPN setiap bulan paling lambat akhir bulan berikutnya, (4) setorkan PPN ke kas negara. Mereka juga wajib lapor SPT Tahunan PPh badan paling lambat 30 April.",
      },
      tags: [
        "NPWP",
        "NPPKP",
        "PKP",
        "Coretax 2026",
        "sanksi administrasi",
        "format NPWP",
        "batas wajib PKP",
        "KUP Pasal 2",
      ],
    },

    // =========================================================================
    // LESSON 4: SPT & PEMBUKUAN
    // =========================================================================
    {
      id: "ch01-l04",
      slug: "spt-dan-pembukuan",
      title: "SPT & Kewajiban Pembukuan: Cara WP Lapor & Catat",
      subtitle: "SPT Masa, SPT Tahunan, SSP, bukti potong, batas waktu lapor 2026",
      type: "materi",
      difficulty: "pemula",
      estimatedMinutes: 22,
      content: `# 📋 SPT & Kewajiban Pembukuan

Sekarang kita bahas "operasional" sehari-hari wajib pajak: **lapor pajak** dan **catat pembukuan**. Karena di Indonesia pakai **self assessment**, kamu sendiri yang harus hitung, bayar, dan laporkan pajak. Dua dokumen utama: **SPT** dan **pembukuan**.

## Apa Itu SPT?

**SPT** = Surat Pemberitahuan. Bentuk laporan resmi yang dipakai WP buat ngasih tau DJP tentang:
1. Penghasilan/objek pajak yang diterima
2. PPh yang sudah dipotong/dipungut/disetor
3. Harta & kewajiban (untuk WP tertentu)
4. Pembayaran dari pembeli (untuk PPN)

> **Analogi:** SPT itu kayak "rapor" yang kamu kasih ke DJP — "Ini nih Pak Fiskus, penghasilan saya segini, pajaknya sudah saya bayar segini."

Dasar hukum: **Pasal 3(1) UU KUP** — "Setiap Wajib Pajak secara wajib harus menyampaikan SPT Tahunan Pajak Penghasilan, SPT Masa PPN, dan SPT Masa PPh."

## Jenis SPT: Masa vs Tahunan

### 1. SPT Masa (Bulanan)
Dilaporkan setiap bulan untuk pajak periodik.

| Jenis SPT Masa | Yang dilaporkan | Tenggat |
|---------------|-----------------|---------|
| SPT Masa PPh 21 | PPh dari pegawai | Tgl 20 bulan berikutnya |
| SPT Masa PPh 22 | PPh impor/pemungut | Tgl 20 |
| SPT Masa PPh 23 | PPh atas jasa dll | Tgl 20 |
| SPT Masa PPh 25 | Cicilan PPh OP/Badan | Tgl 15 |
| SPT Masa PPh 26 | PPh WP luar negeri | Tgl 20 |
| SPT Masa PPN | PPN masuk & keluar | Akhir bulan berikutnya |
| SPT Masa PBB | Untuk PBB tertentu | Sesuai due date |

> **Update 2026:** Di Coretax, SPT Masa diisi pre-populated dengan data bukti potong yang sudah masuk ke sistem. Tinggal verifikasi & submit.

### 2. SPT Tahunan
Dilaporkan setahun sekali, berisi rekapitulasi seluruh pajak setahun.

| Jenis SPT Tahunan | Untuk | Tenggat |
|-------------------|-------|---------|
| SPT 1770 | OP dengan banyak sumber penghasilan | 31 Maret |
| SPT 1770S | OP penghasilan tunggal/lebih sederhana | 31 Maret |
| SPT 1770SS | OP penghasilan 1 perusahaan & < Rp 60 juta/tahun | 31 Maret |
| SPT 1771 | Badan | 30 April |

> **Tip ujian:** Tenggat SPT Tahunan OP = 31 Maret, Badan = 30 April. Hafalin dua tanggal ini!

## Format Form SPT Tahunan

### SPT 1770 (OP Komplit)
Untuk OP yang punya banyak sumber penghasilan:
- Gaji dari > 1 employer
- Punya usaha sampingan
- Punya harta di luar negeri
- Penghasilan dari BUT, dll

### SPT 1770S (OP Sederhana)
Untuk OP dengan kondisi:
- Gaji dari 1 employer
- Punya usaha tapi omzet kecil
- Penghasilan dari bunga, sewa, dividen (final)

### SPT 1770SS (OP Sangat Sederhana)
Untuk OP dengan:
- Penghasilan dari 1 employer
- Bruto setahun ≤ Rp 60 juta
- Tidak punya penghasilan lain

### SPT 1771 (Badan)
Untuk WP Badan — laporan lebih komprehensif: laba rugi, neraca,Detail PPh badan, kredit pajak, dst.

## SSP: Surat Setoran Pajak

**SSP** = Surat Setoran Pajak. Bukti bahwa WP udah setor pajak ke kas negara via bank persepsi (BNI, BRI, BSI, Mandiri, dll).

> **Update 2026 di Coretax:** Konsep SSP udah berubah jadi **"pembayaran ke rekening WP di sistem DJP"** (overbooking/pemindahbukuan). Jadi WP setor dulu ke rekening pajak-nya, lalu dialokasikan ke jenis pajak tertentu. Tapi istilah SSP masih dipakai buat bukti setor.

### Kode Setoran Pajak
Setiap SSP punya kode khusus untuk jenis pajaknya. Contoh:
- **100** — PPh 25 OP (cicilan bulanan OP)
- **411125** — PPh badan bulanan
- **411121** — PPh 21
- **411122** — PPh 22
- **411123** — PPh 23
- **411124** — PPh 26
- **411211** — PPN keluaran (lebih sering dipakai untuk setor kekurangan)

> **Ingat:** Kode setoran penting karena kalau salah, pembayaran nggak akan ter-credit ke SPT kamu. Di Coretax 2026 ada kode-kode tambahan baru — selalu cek PMK terbaru.

## Bukti Potong & Bukti Pungut

Bukti potong = bukti bahwa pihak ketiga udah motong pajak kamu.

| Bukti | Pemotong | Untuk |
|------|----------|-------|
| Bukti Potong 1721-A1 | Employer (PPh 21) | Pegawai tetap |
| Bukti Potong 1721-A2 | Employer (PPh 21) | Pegawai tidak tetap |
| Bukti Potong 1721-V | Employee daily worker | Berbagai |
| Bukti Potong 1721-V2 | Non pegawai | Bukan hubungan kerja |
| Bukti Potong 1721-C | Pemberi kerja | PPh 21 |
| Bukti Potong Seri A | Pemungut PPh 22 | Impor, BUMN, dll |
| Bukti Potong Seri B | Pemotong PPh 23 | Jasa |
| Bukti Potong Seri C | Pemungut PPh 26 | WP luar negeri |

> **Update 2026:** Di Coretax, bukti potong udah **elektronik (e-Bupot)** dan otomatis ter-match dengan SPT yang dilaporkan oleh penerima penghasilan.

## Kewajiban Pembukuan (Pasal 28 KUP)

WP badan dan WP OP yang punya usaha WAJIB menyelenggarakan **pembukuan**. Yang dimaksud pembukuan:

1. **Pencatatan** transaksi keuangan secara sistematis
2. **Penyusunan laporan keuangan**: Neraca, Laba Rugi, Cash Flow, Catatan atas Laporan Keuangan (CALK)
3. **Mengikuti Standar Akuntansi Keuangan (SAK)** — entah ETAP, EMKM, PSAK, dll

### Yang WAJIB Pembukuan:
- Semua WP badan (PT, CV, Yayasan, Koperasi)
- WP OP yang punya usaha dengan omzet > Rp 4,8 miliar/tahun
- WP OP dengan omzet ≤ Rp 4,8 miliar tapi memilih menyelenggarakan pembukuan

### Yang BOLEH tidak pembukuan (cukup catatan):
- WP OP UMKM dengan omzet ≤ Rp 4,8 miliar/tahun
- Menggunakan **norma penghitungan** (kalkulasi laba neto berdasarkan % dari peredaran bruto)

> **Tip ujian:** UMKM ≤ Rp 4,8 miliar/tahun boleh pilih: (a) pembukuan, atau (b) norma penghitungan. Kalau omzetnya masih di bawah Rp 4,8M dan pilih norma, tidak perlu buat neraca & laporan laba rugi.

## Jangka Waktu Penyimpanan Dokumen

Pasal 28(7) KUP: Bukti-bukti pembukuan wajib disimpan:
- **10 tahun** di Indonesia (umumnya)
- **8 tahun** untuk negara yang sudah kena treaty (tax treaty 5 tahun + ekstensi)

Termasuk:
- Faktur pajak
- Bukti potong
- SSP
- Buku besar
- Laporan keuangan tahunan
- Dokumen pendukung transaksi

## Kewajiban Lapor SPT: Tenggat Waktu

| Jenis SPT | Tenggat |
|-----------|---------|
| SPT Masa (bulanan) | Tanggal 20 bulan berikutnya (PPh 21/22/23/26, PPN kadang beda) |
| SPT Masa PPN | Akhir bulan berikutnya (tanggal 30/31) |
| SPT Tahunan OP | 31 Maret |
| SPT Tahunan Badan | 30 April |
| SPT Tahunan BUT | 4 bulan setelah tahun pajak |
| SPT Tahunan Warisan | 3 bulan setelah warisan terbagi |

> **Update 2026:** Di Coretax, semua lapor SPT dilakukan secara **elektronik**. Tidak ada lagi SPT kertas. WP yang gagal akses internet tetap wajib lapor — bisa lewat KPP.

## Cara Lapor SPT di Coretax 2026

### Untuk SPT Masa (bulanan):
1. Login ke Coretax
2. Pilih menu "Lapor SPT Masa"
3. Pilih masa pajak (bulan & tahun)
4. Sistem akan menampilkan data pre-populated (kalau ada)
5. Lengkapi data yang masih kosong
6. Submit & simpan Bukti Penerimaan Elektronik (BPE)

### Untuk SPT Tahunan:
1. Login ke Coretax
2. Pilih "Lapor SPT Tahunan"
3. Pilih jenis form (1770, 1770S, 1770SS, 1771)
4. Upload lampiran (untuk 1770 & 1771)
5. Sistem akan hitung otomatis: pajak terutang vs. kredit pajak
6. Bayar kekurangan (kalau ada) atau ajukan restitusi (kalau lebih bayar)
7. Submit & simpan BPE

> **Tip:** Di Coretax, fitur pre-populated sangat membantu. Untuk SPT 1770S, data PPh 21 dari employer langsung muncul. Tinggal klik submit kalau data sudah benar.

## Sanksi Terlambat Lapor SPT

Pasal 7 KUP — denda tetap per pelanggaran:

| Pelanggaran | Denda |
|-------------|-------|
| SPT Tahunan OP terlambat | Rp 100.000 |
| SPT Tahunan Badan terlambat | Rp 1.000.000 |
| SPT Masa PPN terlambat | Rp 500.000 |
| SPT Masa PPh (selain PPN) terlambat | Rp 100.000 |

> **Plus:** Selain denda, kalau ada pajak kurang bayar, juga kena **bunga MIR 2026** (0,6%/bulan) maksimal 24 bulan.

## 💼 Kasus Nyata: Lapor SPT Tahunan PT Maju Jaya

**Situasi:**
- PT Maju Jaya, tahun buku 2025
- Laba sebelum pajak: Rp 2 miliar
- PPh badan terutang: 22% × Rp 2M = Rp 440 juta
- PPh 22, 23 yang sudah dipotong pihak lain: Rp 50 juta
- PPh 25 (cicilan bulanan) yang sudah disetor 2025: Rp 300 juta
- Setoran di bulan Februari 2026 (untuk menutup 2025): Rp 60 juta

**Perhitungan SPT 1771 2026:**

| Item | Nominal |
|------|---------|
| PPh terutang | Rp 440 juta |
| Kredit: PPh 22, 23 (bukti potong) | (Rp 50 juta) |
| Kredit: PPh 25 (cicilan bulanan) | (Rp 300 juta) |
| Kredit: Setoran Februari 2026 | (Rp 60 juta) |
| Total kredit pajak | Rp 410 juta |
| **PPh kurang bayar** | **Rp 30 juta** |

PT Maju Jaya harus bayar Rp 30 juta lagi sebelum lapor SPT (paling lambat 30 April 2026). Setelah bayar, baru lapor SPT 1771 di Coretax.

Kalau PT Maju Jaya telat lapor (misal lapor 5 Mei 2026):
- Denda keterlambatan: Rp 1.000.000
- Bunga: 0,6% × 30 juta × 1 bulan = Rp 180.000 (kalau telat 1 bulan)
- Total dibayar: Rp 30 juta + Rp 1 juta + Rp 180 ribu = Rp 31,18 juta

## Update 2026: Yang Baru di Coretax untuk SPT

1. **Pre-populated SPT** untuk PPh 21 (data dari employer langsung muncul)
2. **Match otomatis bukti potong** — sistem cross-check antara bukti potong yang dilaporkan pemotong vs. yang diklaim WP
3. **Tidak bisa submit kalau ada selisih** — sistem akan nolak kalau kredit pajak di SPT > bukti potong yang masuk
4. **BPE (Bukti Penerimaan Elektronik)** wajib disimpan
5. **Pembatalan SPT** bisa dilakukan di Coretax kalau salah lapor, tapi harus dengan alasan
6. **Role separation**: Preparer (yang isi) vs Signer (yang tanda tangan / submit)

## Apa Itu Restitusi Pajak?

Restitusi = pengembalian kelebihan bayar pajak ke WP. Bisa terjadi kalau:
- Kredit pajak > PPh terutang
- PPh final dipotong lebih dari seharusnya
- WP OP dengan banyak tanggungan, dll

Di Coretax 2026, proses restitusi:
1. Ajukan lewat SPT (otomatis muncul saat submit)
2. DJP akan periksa (audit) dalam 12 bulan
3. Kalau sah, dana direstitusi ke rekening WP

> **Peringatan:** Pengajuan restitusi = pemicu audit. Pastikan SPT & bukti-bukti aman sebelum ajukan!

## Ringkasan Buat Ujian

- **SPT Masa** = bulanan, PPh 21/22/23/26/25, PPN, dll → tenggat tgl 20 (PPh) atau akhir bulan (PPN)
- **SPT Tahunan OP** = 1770/1770S/1770SS → 31 Maret
- **SPT Tahunan Badan** = 1771 → 30 April
- **SSP** = bukti setor pajak ke kas negara
- **Bukti potong** = bukti pemotongan PPh oleh pihak ketiga
- **Pembukuan wajib** untuk badan & OP dengan omzet > Rp 4,8M/tahun
- **UMKM ≤ Rp 4,8M** boleh pakai norma penghitungan (tidak wajib pembukuan)
- **Penyimpanan dokumen** 10 tahun
- **Denda terlambat lapor**: OP Rp 100K, Badan Rp 1.000K, PPN Rp 500K, lainnya Rp 100K
- **Coretax 2026**: semua elektronik, pre-populated, match otomatis bukti potong

Sip? Kalau kamu udah paham, kita lanjut ke lesson SKP & Sanksi. 🚀`,
      keyPoints: [
        "SPT = Surat Pemberitahuan, laporan WP ke DJP atas pajak terutang & kredit",
        "SPT Masa = bulanan (tenggat tgl 20 / akhir bulan), SPT Tahunan OP = 31 Maret, Badan = 30 April",
        "Form SPT Tahunan OP: 1770 (komplit), 1770S (sederhana), 1770SS (sangat sederhana), Badan: 1771",
        "SSP = Surat Setoran Pajak, bukti setor ke kas negara",
        "Bukti Potong: 1721-A1 (pegawai tetap), Seri A (PPh 22), Seri B (PPh 23), Seri C (PPh 26)",
        "Pembukuan wajib untuk badan & OP omzet > Rp 4,8M/tahun (UMKM ≤ Rp 4,8M boleh norma)",
        "Penyimpanan dokumen: 10 tahun",
        "Denda terlambat lapor: OP Rp 100K, Badan Rp 1M, PPN Rp 500K, PPh masa lain Rp 100K",
        "Coretax 2026: SPT pre-populated, match otomatis bukti potong, BPE elektronik",
      ],
      quiz: [
        {
          id: "ch01-l04-q1",
          question: "Kapan tenggat pelaporan SPT Tahunan untuk Wajib Pajak Badan?",
          options: ["31 Maret", "30 April", "31 Mei", "30 Juni"],
          correctIndex: 1,
          explanation:
            "SPT Tahunan Badan dilaporkan paling lambat 30 April tahun berikutnya. SPT Tahunan OP paling lambat 31 Maret.",
          difficulty: "mudah",
        },
        {
          id: "ch01-l04-q2",
          question:
            "Bu Tini, pegawai sekolah swasta, penghasilan setahun Rp 50 juta. Form SPT yang dipakai?",
          options: ["SPT 1770", "SPT 1770S", "SPT 1770SS", "SPT 1771"],
          correctIndex: 2,
          explanation:
            "SPT 1770SS untuk OP penghasilan dari 1 employer dengan bruto ≤ Rp 60 juta/tahun. Bu Tini seharusnya nggak wajib NPWP karena < PTKP, tapi kalau wajib, gunakan 1770SS.",
          difficulty: "sedang",
        },
        {
          id: "ch01-l04-q3",
          question: "Berapa denda terlambat lapor SPT Masa PPN?",
          options: ["Rp 100.000", "Rp 250.000", "Rp 500.000", "Rp 1.000.000"],
          correctIndex: 2,
          explanation:
            "Pasal 7 KUP: Denda terlambat lapor SPT Masa PPN = Rp 500.000. Untuk SPT Masa PPh (selain PPN) = Rp 100.000.",
          difficulty: "mudah",
        },
        {
          id: "ch01-l04-q4",
          question:
            "PT Cahaya Abadi, omzet Rp 8 miliar/tahun, ingin tahu kewajiban pembukuannya. Apa yang benar?",
          options: [
            "Tidak perlu pembukuan karena bukan perusahaan publik",
            "Wajib pembukuan karena omzet > Rp 4,8 miliar",
            "Boleh pilih norma penghitungan",
            "Hanya perlu catatan pengeluaran",
          ],
          correctIndex: 1,
          explanation:
            "WP badan apapun WAJIB menyelenggarakan pembukuan. Selain itu, omzet > Rp 4,8 miliar juga memicu kewajiban pembukuan untuk WP OP. PT Cahaya wajib pembukuan.",
          difficulty: "sedang",
        },
        {
          id: "ch01-l04-q5",
          question: "Berapa lama WP wajib menyimpan bukti-bukti pembukuan menurut Pasal 28(7) KUP?",
          options: ["3 tahun", "5 tahun", "8 tahun", "10 tahun"],
          correctIndex: 3,
          explanation:
            "Pasal 28(7) KUP: Bukti pembukuan disimpan 10 tahun. Untuk negara dengan tax treaty, bisa 8 tahun. Tapi default di Indonesia adalah 10 tahun.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: CV Berkah Tani, UMKM Pertanian",
        description:
          "CV Berkah Tani punya omzet Rp 3,5 miliar/tahun dari jual benih. Mereka belum pernah lapor SPT dan tidak punya pembukuan. Apa yang harus mereka lakukan?",
        solution:
          "CV Berkah Tani adalah WP badan (CV) sehingga WAJIB pembukuan meskipun omzet < Rp 4,8M (syarat pembukuan beda antara badan & OP). Mereka juga wajib lapor SPT 1771 paling lambat 30 April setiap tahun. Karena omzet < Rp 4,8M, mereka tidak wajib jadi PKP, tapi boleh mendaftar sukarela kalau banyak transaksi dengan PKP lain. Mereka harus: (1) daftar NPWP badan, (2) susun pembukuan sesuai SAK ETAP, (3) lapor SPT Tahunan 1771 via Coretax. Untuk PPN, kalau belum jadi PKP, mereka keluarkan kuitansi biasa (bukan faktur pajak). Kalau kena audit, ketidakpedulian bukan alasan — mereka bisa kena sanksi.",
      },
      tags: [
        "SPT",
        "SPT Masa",
        "SPT Tahunan",
        "SSP",
        "bukti potong",
        "pembukuan",
        "Coretax 2026",
        "sanksi terlambat lapor",
        "KUP Pasal 28",
      ],
    },

    // =========================================================================
    // LESSON 5: SKP & SANKSI
    // =========================================================================
    {
      id: "ch01-l05",
      slug: "skp-dan-sanksi",
      title: "SKP & Sanksi Perpajakan: Ketika WP Nggak Nurut",
      subtitle: "SKPKB, SKPLB, SKPN, SKPKBT, STP; bunga MIR 2026; sanksi pidana",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 25,
      content: `# ⚠️ SKP & Sanksi Perpajakan

Sampai di sini kamu udah ngerti SPT dan pembukuan. Tapi gimana kalau WP **nggak nurut**? Misalnya nggak bayar, salah hitung, atau telat lapor? Di sinilah **SKP** dan **sanksi perpajakan** main peran. Yuk bahas tuntas!

## Apa Itu SKP?

**SKP** = Surat Ketetapan Pajak. Surat resmi dari DJP yang isinya ketetapan besarnya pajak yang harus dibayar WP.

> **Analogi:** Kalau SPT itu "rapor yang kamu kasih ke fiskus", maka SKP itu "rapor yang fiskus kasih balik ke kamu" — bedanya bisa jadi nilai kamu turun (lebih banyak bayar) atau sama (kamu benar).

Jenis-jenis SKP (Pasal 1 angka 9-12 KUP):

| Jenis SKP | Kepanjangan | Kapan Terbit |
|-----------|-------------|--------------|
| **SKPKB** | Surat Ketetapan Pajak Kurang Bayar | WP kurang bayar → harus bayar lebih |
| **SKPLB** | Surat Ketetapan Pajak Lebih Bayar | WP lebih bayar → dapat restitusi |
| **SKPN** | Surat Ketetapan Pajak Nihil | Pajak terutang = kredit pajak (netral) |
| **SKPKBT** | Surat Ketetapan Pajak Kurang Bayar Tambahan | Setelah audit ulang, masih kurang |

## 1. SKPKB (Surat Ketetapan Pajak Kurang Bayar)

Diterbitkan kalau setelah pemeriksaan/penelitian, ternyata WP **kurang bayar** pajak.

**Kapan terbit:**
- Hasil pemeriksaan pajak menunjukkan ada kekurangan setoran
- WP terlambat lapor + ada pajak kurang bayar
- Data pihak ketiga (bukti potong lawan) menunjukkan WP kurang lapor

**Konsekuensi:**
- WP harus bayar pokok pajak + sanksi bunga MIR
- Bunga 2026: **1,02%/bulan** (Pasal 8(2), MIR × 1,7 dengan MIR Agustus 2026 = 0,6%)
- Maksimal 24 bulan (cap)

**Contoh:**
PT Andal melakukan pemeriksaan 2026 untuk tahun pajak 2024. Ternyata ada kurang bayar Rp 100 juta. SKPKB terbit bulan Juli 2026.

- Pokok pajak: Rp 100 juta
- Bunga: 1,02% × Rp 100 juta × (berapa bulan?)

Berapa bulan? Pasal 8(7) KUP: bunga dihitung dari **akhir batas waktu lapor SPT** sampai **tanggal diterbitkannya SKPKB**.

Untuk PT (SPT Tahunan Badan), batas lapor 30 April 2024. SKPKB terbit Juli 2026 → sekitar 27 bulan → tapi cap 24 bulan.

- Bunga: 1,02% × 100 juta × 24 = Rp 24,48 juta
- Total: Rp 100 juta + Rp 24,48 juta = Rp 124,48 juta

> **Tip ujian:** Kalau soal SKPKB dengan bunga, hitung dari akhir batas lapor SPT ke tanggal SKPKB. Cap 24 bulan!

## 2. SKPLB (Surat Ketetapan Pajak Lebih Bayar)

Diterbitkan kalau WP **lebih bayar** pajak. WP bisa minta **restitusi** (pengembalian).

**Kapan terbit:**
- Hasil pemeriksaan menunjukkan WP lebih bayar
- PPh final yang dipotong lebih dari seharusnya
- WP OP dengan banyak tanggungan (PPh 21 lebih bayar)

**Konsekuensi:**
- WP dapat pengembalian dana dari kas negara
- Plus imbalan bunga (Pasal 17B(3)): **0,6%/bulan** (MIR × 1) untuk jangka waktu sejak SPT dilaporkan sampai SKPLB terbit

**Contoh:**
Bu Yanti, pegawai, PPh 21 dipotong Rp 10 juta selama 2025. Ternyata berdasarkan perhitungan ulang, seharusnya cuma Rp 7 juta. Lebih bayar Rp 3 juta. Setelah pemeriksaan, SKPLB terbit September 2026.

- Pokok: Rp 3 juta
- Imbalan bunga: 0,6% × 3 juta × 6 bulan (dari 31 Maret ke Sept) = Rp 108 ribu
- Total restitusi: Rp 3,108 juta

## 3. SKPN (Surat Ketetapan Pajak Nihil)

Diterbitkan kalau setelah pemeriksaan:
- Pajak terutang = kredit pajak (sisanya 0)
- Tidak ada kurang/lebih bayar

**Kapan terbit:**
- PPh terutang tepat sama dengan yang sudah dipotong/dipungut/disetor
- WP dengan omzet kecil, PPh-nya nihil setelah PTKP

> **Tip:** SKPN bisa terjadi kalau perhitungan WP benar 100%. Tapi ini jarang karena biasanya ada sedikit selisih.

## 4. SKPKBT (Surat Ketetapan Pajak Kurang Bayar Tambahan)

Diterbitkan kalau setelah SKPKB, ternyata **masih ada kurang bayar lagi** karena:
- Ditemukan data baru
- WP melakukan keberatan dan diterima sebagian, sisanya masih kurang
- Hasil pemeriksaan ulang

**Konsekuensi:**
- Sama seperti SKPKB + sanksi tambahan
- Bunga 2026 (Pasal 8(5)): **1,44%/bulan** (MIR × 2,4)

## 5. STP (Surat Tagihan Pajak)

**STP** = Surat Tagihan Pajak. Beda dengan SKP, STP itu **bukan ketetapan** tapi **tagihan** untuk pajak yang belum/tidak sempat ditetapkan formal.

**Kapan terbit:**
- WP terlambat lapor SPT → ada pajak kurang bayar
- WP lapor tapi tidak bayar
- Ada koreksi atas SSP yang salah kode
- Pajak yang seharusnya terutang tapi belum disetor

**Konsekuensi:**
- Pokok pajak + bunga MIR 2026 (Pasal 9(2a)): **1,02%/bulan** (sama dengan SKPKB)
- Tidak melalui pemeriksaan formal

## Bunga & Sanksi Administrasi 2026

Pasca UU HPP (UU 7/2021), sanksi administrasi tidak lagi pakai **persentase tetap**, tapi pakai **MIR (Monthly Interest Rate)** yang ditetapkan KMK setiap bulan.

### Update Bunga Agustus 2026
Berdasarkan **KMK 35/MK/EF.2/2026** (valid 1-31 Agustus 2026):
- **MIR (base)**: **0,6%/bulan**

### Tabel Sanksi Bunga 2026

| Pasal KUP | Deskripsi | Tarif/bulan | Perhitungan |
|-----------|-----------|-------------|-------------|
| 19(1), 19(2), 19(3) | Terlambat bayar pajak | 0,6% | MIR × 1 |
| 8(2), 8(2a), 9(2a), 9(2b), 14(3) | SKPKB, STP, sanksi lain | 1,02% | MIR × 1,7 |
| 8(5) | SKPKBT (tambahan) | 1,44% | MIR × 2,4 |
| 13(2), 13(2a) | Sanksi kelalaian (negligence) | 1,85% | MIR × 3,083 |
| 13(3b) | Sanksi penghindaran dikurangi (voluntary disclosure) | 2,27% | MIR × 3,783 |
| 11(3), 17B(3), 17B(4), 27B(4) | Imbalan bunga (untuk WP lebih bayar) | 0,6% | MIR × 1 |

> **Hafalin ini untuk ujian 2026!** MIR Agustus 2026 = 0,6%, dengan multiplier masing-masing pasal.

## Denda Tetap (One-time)

Selain bunga, ada juga denda tetap per pelanggaran:

| Pelanggaran | Denda |
|-------------|-------|
| Terlambat lapor SPT Tahunan OP | Rp 100.000 |
| Terlambat lapor SPT Tahunan Badan | Rp 1.000.000 |
| Terlambat lapor SPT Masa PPh | Rp 100.000 |
| Terlambat lapor SPT Masa PPN | Rp 500.000 |
| Tidak buat faktur pajak | Denda 2% dari DPP |
| Salah isi faktur pajak | Denda sesuai selisih |

## Sanksi Kelalaian (Pasal 13 KUP)

Kelalaian = tidak sengaja salah, tapi tetap kena sanksi:

| Pelanggaran | Sanksi |
|-------------|--------|
| Salah lapor SPT (kurang bayar) | 1,85%/bulan × pokok pajak × bulan |
| Tidak lapor SPT | 1,85%/bulan × pajak terutang |
| Bukti potong salah | Sanksi 100% dari selisih |

## Sanksi Pidana (Pasal 38-43 KUP)

Sanksi pidana pajak untuk pelanggaran berat (intensional):

| Pasal | Pelanggaran | Sanksi |
|-------|-------------|--------|
| 38 | Tidak lapor SPT (seharusnya) | 6 bln-6 thn penjara + denda 6x pajak |
| 39(1) | Tidak bayar/ setorkan pajak | 6 bln-6 thn penjara + denda 6x pajak |
| 39(1)a | Nyogok fiskus | 3 thn-15 thn + denda 4x sogok |
| 39(1)b | Tapikan bukti potong | 6 bln-6 thn + denda 6x pajak |
| 39(1)c | Salah/rekayasa data | 6 bln-6 thn + denda 6x pajak |
| 39(1)d | Salah menerbitkan SSP | 6 bln-6 thn + denda 6x pajak |
| 40 | Persetujuan untuk tidak lapor (intensional) | 6 bln-6 thn + denda 6x pajak |
| 41 | Pemalsuan dokumen | 6 bln-6 thn + denda 6x pajak |
| 41A | Penghasutan/pemalsuan bukti potong | 6 bln-6 thn + denda 6x pajak |
| 43 | Bantuan ke pelanggaran | 1 thn-6 thn + denda 2x pajak |

> **Update UU HPP:** Pasal 38 KUP direvisi. Sekarang untuk WP yang lapor telat (bukan nggak lapor sama sekali), pidana dihapus — cukup sanksi administrasi. Tapi kalau **tidak lapor sama sekali dengan intensi menghindar**, tetap bisa kena Pidana Pasal 38.

## Kapan SKP/SKP Tidak Bisa Diterbitkan?

Pasal 13(3) & 14 KUP — DJP tidak bisa terbitkan SKP kalau sudah lewat **masa daluwarsa**:

- **5 tahun** sejak saat terutangnya pajak (untuk pemeriksaan biasa)
- **10 tahun** kalau ada indikasi pidana (kelalaian berat / penggelapan)

> **Tip ujian:** Masa daluwarsa ketetapan pajak = 5 tahun (umum) atau 10 tahun (pidana).

## Koreksi & Pemeriksaan Pajak

**Koreksi fiskal** = penyesuaian laba komersial ke laba fiskal (untuk PPh badan). Contoh:
- Pengeluaran yang tidak deductible (sanksi, denda, biaya pribadi)
- Depresiasi yang berbeda dengan akuntansi
- Pendapatan final (misal bunga deposito) yang dikeluarkan dari laba komersial

**Pemeriksaan** dilakukan oleh DJP kalau:
1. SPT tahunan menunjukkan rugi atau lebih bayar (restitusi)
2. Ada anomali data (misal omzet tidak konsisten)
3. WP dipilih sebagai sampel acak
4. Ada info dari pihak ketiga

## 💼 Kasus Nyata: Hitung SKPKB dengan Bunga 2026

**Kasus:**
PT Sumber Makmur tahun pajak 2024, diperiksa tahun 2026.
- Dari hasil pemeriksaan: kurang bayar PPh badan Rp 200 juta
- SPT 1771 seharusnya dilapor 30 April 2025
- SKPKB terbit 1 Agustus 2026
- MIR Agustus 2026 = 0,6%/bulan
- Pasal 8(2) KUP: bunga = MIR × 1,7 = 1,02%/bulan

**Perhitungan:**
- Periode bunga: 1 Mei 2025 → 1 Agustus 2026 = 27 bulan
- Tapi ada **cap 24 bulan** (Pasal 8(7) ayat 4 KUP — bunga maksimal 24 bulan)
- Bunga efektif: 1,02% × Rp 200 juta × 24 bulan = **Rp 48,96 juta**
- Total SKPKB: Rp 200 juta + Rp 48,96 juta = **Rp 248,96 juta**

PT Sumber Makmur harus bayar Rp 248,96 juta dalam waktu 1 bulan sejak SKPKB diterbitkan. Kalau telat bayar, tambah sanksi 0,6%/bulan (Pasal 19).

## Sanksi Nggak Bayar SKP (Pasal 19)

Kalau WP nggak bayar SKP/STP tepat waktu:
- Bunga: **0,6%/bulan** (MIR × 1)
- Cap: 24 bulan
- Setelah 24 bulan: bisa naik ke **surat paksa** & penyitaan

## Tindakan DJP Jika WP Nggak Bayar

1. **Surat Tagihan Pajak (STP)** → tagihan resmi
2. **Surat Paksa** → setoran terakhir
3. **Surat Sita** → penyitaan aset
4. **Lelang** → jual aset WP untuk bayar pajak

## Update 2026: Yang Perlu di Hafal

1. **MIR Agustus 2026 = 0,6%/bulan** (KMK 35/MK/EF.2/2026)
2. **Bunga SKPKB (Pasal 8(2))**: 1,02%/bulan
3. **Bunga SKPKBT (Pasal 8(5))**: 1,44%/bulan
4. **Bunga terlambat bayar (Pasal 19)**: 0,6%/bulan
5. **Sanksi kelalaian (Pasal 13)**: 1,85%/bulan
6. **Imbalan bunga SKPLB (Pasal 17B(3))**: 0,6%/bulan
7. **Cap bunga**: 24 bulan maksimal
8. **Masa daluwarsa**: 5 tahun (umum), 10 tahun (pidana)

## Ringkasan Buat Ujian

- **SKPKB** = kurang bayar, bunga 1,02%/bulan (Pasal 8(2))
- **SKPLB** = lebih bayar, imbalan bunga 0,6%/bulan (Pasal 17B(3))
- **SKPN** = nihil (netral)
- **SKPKBT** = kurang bayar tambahan, bunga 1,44%/bulan (Pasal 8(5))
- **STP** = tagihan tanpa pemeriksaan, bunga 1,02%/bulan
- **MIR 2026** = 0,6%/bulan (Agustus 2026)
- **Cap bunga** = 24 bulan
- **Sanksi terlambat lapor**: OP Rp 100K, Badan Rp 1M, PPN Rp 500K
- **Sanksi pidana Pasal 38-43**: 6 bln-6 thn + denda 4-6x pajak
- **Masa daluwarsa**: 5 tahun (umum), 10 tahun (pidana)

Gimana, udah mulai paham kan kenapa SKP ini penting? Kalau ya, kita lanjut ke alur pemeriksaan, keberatan, banding, dan gugatan. 💪`,
      keyPoints: [
        "SKPKB = kurang bayar, bunga MIR×1,7 (1,02%/bln Agustus 2026), cap 24 bulan",
        "SKPLB = lebih bayar, imbalan bunga MIR×1 (0,6%/bln)",
        "SKPN = nihil (tidak ada lebih/kurang bayar)",
        "SKPKBT = kurang bayar tambahan, bunga MIR×2,4 (1,44%/bln)",
        "STP = surat tagihan tanpa pemeriksaan formal, bunga sama dengan SKPKB",
        "MIR Agustus 2026 = 0,6%/bulan (KMK 35/MK/EF.2/2026)",
        "Sanksi kelalaian Pasal 13 = 1,85%/bulan (MIR×3,083)",
        "Sanksi terlambat bayar Pasal 19 = 0,6%/bulan (MIR×1)",
        "Cap bunga maksimal 24 bulan",
        "Masa daluwarsa: 5 tahun umum, 10 tahun pidana",
        "Sanksi pidana Pasal 38-43: penjara 6 bln-6 thn + denda 4-6x pajak",
      ],
      quiz: [
        {
          id: "ch01-l05-q1",
          question:
            "PT Sejahtera diperiksa untuk tahun pajak 2024. Ternyata kurang bayar PPh Rp 100 juta. SPT dilaporkan tepat waktu (30 April 2025), SKPKB terbit 1 Mei 2026. Berapa bunga yang terutang (MIR 0,6%/bulan)?",
          options: [
            "Rp 1,02 juta",
            "Rp 12,24 juta",
            "Rp 102 juta",
            "Rp 1,224 juta",
          ],
          correctIndex: 1,
          explanation:
            "Periode bunga: 1 Mei 2025 → 1 Mei 2026 = 12 bulan. Bunga = 1,02% × 100 juta × 12 = Rp 12,24 juta. (Cap 24 bulan belum tercapai.)",
          difficulty: "sedang",
        },
        {
          id: "ch01-l05-q2",
          question: "Manakah SKP yang diterbitkan ketika WP lebih bayar pajak?",
          options: ["SKPKB", "SKPLB", "SKPN", "STP"],
          correctIndex: 1,
          explanation:
            "SKPLB (Surat Ketetapan Pajak Lebih Bayar) diterbitkan kalau WP lebih bayar. WP bisa minta restitusi + dapat imbalan bunga 0,6%/bulan (MIR×1).",
          difficulty: "mudah",
        },
        {
          id: "ch01-l05-q3",
          question: "Berapa tarif bunga SKPKBT (Pasal 8(5)) dengan MIR Agustus 2026 = 0,6%/bulan?",
          options: ["0,6%/bulan", "1,02%/bulan", "1,44%/bulan", "1,85%/bulan"],
          correctIndex: 2,
          explanation:
            "SKPKBT (Pasal 8(5)) = MIR × 2,4 = 0,6% × 2,4 = 1,44%/bulan. Lebih tinggi dari SKPKB karena merupakan ketetapan tambahan setelah pemeriksaan awal.",
          difficulty: "sulit",
        },
        {
          id: "ch01-l05-q4",
          question:
            "Pak Joni tidak melaporkan SPT Tahunan OP 2024. Setelah pemeriksaan, ketahuan ada pajak kurang bayar Rp 50 juta. Surat apa yang akan diterbitkan DJP?",
          options: [
            "SKPKB (Surat Ketetapan Pajak Kurang Bayar)",
            "STP (Surat Tagihan Pajak)",
            "SKPLB (Surat Ketetapan Pajak Lebih Bayar)",
            "Surat Paksa",
          ],
          correctIndex: 0,
          explanation:
            "Karena WP tidak lapor SPT + ada kurang bayar (dari pemeriksaan), DJP terbitkan SKPKB. STP dipakai untuk kasus tagihan tanpa pemeriksaan (misal salah kode SSP).",
          difficulty: "sedang",
        },
        {
          id: "ch01-l05-q5",
          question: "Berapa maksimum masa daluwarsa untuk penerbitan SKP dengan indikasi pidana?",
          options: ["3 tahun", "5 tahun", "8 tahun", "10 tahun"],
          correctIndex: 3,
          explanation:
            "Masa daluwarsa untuk penerbitan SKP: 5 tahun (umum), 10 tahun (kalau ada indikasi pidana / penggelapan pajak).",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: PT Mitra Usaha Kena SKPKB Rp 500 Juta",
        description:
          "PT Mitra Usaha kena SKPKB sebesar Rp 500 juta pada Juli 2026 untuk tahun pajak 2024. SPT dilaporkan 30 April 2025. MIR Agustus 2026 = 0,6%. Mereka belum bayar sampai Oktober 2026. Hitung total tunggakan.",
        solution:
          "Perhitungan: (1) Bunga SKPKB Pasal 8(2): 1,02%/bulan × 500 juta × periode. Periode: 1 Mei 2025 → 1 Juli 2026 = 14 bulan. Bunga = 1,02% × 500 juta × 14 = Rp 71,4 juta. (2) SKPKB total: Rp 500 juta + Rp 71,4 juta = Rp 571,4 juta. (3) Terlambat bayar dari 1 Agustus 2026 (tenggat 1 bulan) ke Oktober 2026 = 3 bulan. Sanksi Pasal 19: 0,6%/bulan × 571,4 juta × 3 = Rp 10,28 juta. (4) Total tunggakan Oktober 2026: Rp 571,4 juta + Rp 10,28 juta = Rp 581,68 juta. Selain itu, PT bisa kena surat paksa & penyitaan kalau tetap nggak bayar.",
      },
      tags: [
        "SKP",
        "SKPKB",
        "SKPLB",
        "SKPN",
        "SKPKBT",
        "STP",
        "bunga MIR 2026",
        "sanksi pidana",
        "KUP Pasal 8",
        "KUP Pasal 19",
      ],
    },

    // =========================================================================
    // LESSON 6: PEMERIKSAAN, KEBERATAN, BANDING & GUGATAN
    // =========================================================================
    {
      id: "ch01-l06",
      slug: "pemeriksaan-keberatan-banding",
      title: "Pemeriksaan, Keberatan, Banding & Gugatan: Alur Sengketa Pajak",
      subtitle: "Alur pemeriksaan, keberatan 3 bulan, banding ke PP, gugatan ke PTUN",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 25,
      content: `# ⚖️ Pemeriksaan, Keberatan, Banding & Gugatan

OK, sekarang kita masuk ke bagian **sengketa pajak** — alur yang sering bikin pusing. Tapi tenang, kalau kamu paham alurnya, ini cuma kayak "naik tangga" — ada urutan yang jelas.

## Kenapa Sengketa Pajak Terjadi?

Sengketa pajak terjadi kalau **WP tidak setuju** dengan ketetapan pajak yang dibuat DJP. Mungkin WP merasa:
- Pajaknya terlalu besar (fiskus salah hitung)
- Kredit pajaknya nggak diakui
- Ada biaya yang seharusnya deductible tapi dikoreksi
- Pajak finalnya dianggap final tapi fiskus mau ditambah lagi

> **Analogi:** Sengketa pajak itu kayak kamu dibilang salah perhitungan sama dosen. Kamu bisa ngajukan banding (keberatan), kalau masih nggak setuju naik ke rektor (banding), kalau masih nggak setuju naik ke Menteri (PK/Peninjauan Kembali).

## Alur Lengkap Sengketa Pajak

\`\`\`
[Pemeriksaan] → [Laporan Hasil Pemeriksaan] → [SKPKB/SKPLB/SKPN]
       ↓
[WP tidak setuju?]
       ↓ (3 bulan sejak SKP)
[Keberatan ke DJP]
       ↓ (12 bulan sejak keberatan diajukan)
[Keputusan Keberatan DJP]
       ↓ (3 bulan sejak keputusan)
[Banding ke Pengadilan Pajak]
       ↓ (≤12 bulan)
[Putusan Pengadilan Pajak]
       ↓ (3 bulan)
[Peninjauan Kembali ke Mahkamah Agung]
\`\`\`

> **Tip ujian:** Hafalin alur: **Pemeriksaan → SKP → Keberatan → Banding → PK**. Masing-masing punya jangka waktu!

## 1. Pemeriksaan Pajak

**Pemeriksaan** = proses DJP meneliti kepatuhan WP, untuk:
- Menilai kebenaran SPT yang dilaporkan
- Menentukan apakah ada pajak kurang/lebih bayar
- Memberikan kepastian hukum

### Jenis Pemeriksaan:
1. **Pemeriksaan Rutin** — sesuai jadwal tahunan DJP
2. **Pemeriksaan Khusus** — karena ada info pelanggaran / tipuan
3. **Pemeriksaan Permohonan Restitusi** — kalau WP ajukan restitusi
4. **Pemeriksaan Pengembalian Pendahuluan** — untuk WP yang dapat hak restitusi lebih cepat

### Tahapan Pemeriksaan:
1. **Surat Pemberitahuan Pemeriksaan** — DJP kasih tau WP akan diperiksa
2. **Pemeriksaan kantor (desk audit)** — di kantor DJP
3. **Pemeriksaan lapangan** — tim fiskus datang ke kantor WP
4. **Surat Pemberitahuan Hasil Pemeriksaan (SPHP)** — WP lihat hasil awal & boleh tanggapi
5. **Laporan Hasil Pemeriksaan (LHP)** — final, dijadikan dasar SKP

### Hak WP Selama Pemeriksaan:
- Minta menunjukkan surat tugas fiskus
- Pendamping (konsultan pajak / pengacara)
- Memberi tanggapan atas SPHP
- Minta klarifikasi atas setiap koreksi

> **Update 2026 di Coretax:** Pemeriksaan pajak sekarang terdigitalisasi — semua komunikasi lewat Coretax, dari SPHP sampai tanggapan. Dokumen wajib di-upload, bukan dikirim kertas.

## 2. Keberatan (Pasal 25 KUP)

Setelah SKP terbit (misal SKPKB), kalau WP **tidak setuju**, bisa ajukan **keberatan** ke DJP.

### Syarat Keberatan:
1. **Jangka waktu**: 3 bulan sejak tanggal SKP diterima
2. **Bentuk**: Surat keberatan tertulis ke Kepala KPP
3. **Alasan**: Harus sebutkan alasan & dasar hukumnya
4. **Satu surat per SKP**: Tidak bisa gabung beberapa SKP

### Ketentuan:
- DJP harus jawab dalam **12 bulan** sejak keberatan diajukan
- Selama keberatan diproses, WP wajib **bayar dulu** 50% dari SKPKB (untuk SKPKB > Rp 100 juta) supaya bisa naik banding nanti
- Keputusan keberatan bisa: **diterima penuh / diterima sebagian / ditolak**

### Hasil Keputusan Keberatan:

| Hasil | Konsekuensi |
|-------|-------------|
| Diterima penuh | SKPKB dibatalkan, WP dapat kembalian + bunga |
| Diterima sebagian | SKPKB dikurangi, WP bayar lebih sedikit |
| Ditolak | SKPKB tetap, WP wajib bayar |

> **Tip ujian:** Untuk SKPKB > Rp 100 juta, WP harus **bayar 50% dulu** sebelum bisa banding. Ini sering keluar di soal!

## 3. Banding ke Pengadilan Pajak

Kalau WP masih **tidak setuju** dengan keputusan keberatan DJP, bisa naik banding ke **Pengadilan Pajak (PP)**.

### Syarat Banding:
1. **Jangka waktu**: 3 bulan sejak keputusan keberatan diterima
2. **Mengisi formulir** banding
3. **Membayar biaya banding** (relatif kecil, sekitar Rp 50K-500K)
4. **Sudah melalui keberatan** dulu

### Pengadilan Pajak (PP):
- Pengadilan khusus pajak (di bawah Mahkamah Agung)
- Anggotanya: hakim pajak (ahli pajak) + hakim hukum
- Putusan PP bisa:
  - **Mengabulkan** banding (WP menang)
  - **Menolak** banding (DJP menang)
  - **Mengabulkan sebagian** (banding diterima sebagian)

### Waktu Putusan:
- PP harus putus dalam **12 bulan** sejak banding diajukan
- Boleh diperpanjang kalau kasusnya kompleks

### Yang Bisa Di-banding:
- Keputusan keberatan atas SKPKB, SKPLB, SKPN, SKPKBT
- Keputusan keberatan atas STP
- Keputusan keberatan atas PPh Final tertentu
- Keputusan DJP lain yang merugikan WP

## 4. Gugatan ke Pengadilan Pajak

**Gugatan** beda dengan **banding**. Gugatan untuk keputusan DJP yang **bukan SKP**.

### Yang Bisa Digugat:
- Keputusan penolakan perpanjangan waktu lapor SPT
- Keputusan penolakan pengembalian pendahuluan
- Keputusan penolakan permohonan izin untuk dirikan BUT
- Keputusan pembetulan SPT (atas inisiatif DJP)
- Keputusan penolakan pencabutan NPWP

### Jangka Waktu Gugatan:
- **3 bulan** sejak keputusan DJP diterima

## 5. Peninjauan Kembali (PK) ke Mahkamah Agung

Kalau WP masih **nggak setuju** dengan putusan Pengadilan Pajak, bisa naik **Peninjauan Kembali (PK)** ke **Mahkamah Agung (MA)**.

### Syarat PK:
1. **Jangka waktu**: 3 bulan sejak putusan PP diterima
2. **Alasan** (1 dari 3):
   - Putusan PP berdasarkan kebohongan pihak yang dikarenakan telah dipidana
   - Ditemukan bukti baru yang kalau diketahui akan mengubah putusan
   - Ada hal yang dilupakan dalam putusan yang dikabulkan
3. **Hanya 1x PK** per kasus

> **Tip ujian:** PK ke MA itu cuma bisa diajukan kalau ada **alasan khusus** (3 alasan di atas). Nggak bisa cuma "saya nggak setuju". Ini beda dengan banding.

## 6. Gugatan ke PTUN (Untuk Perselisihan Tata Usaha Negara)

Untuk keputusan DJP yang sifatnya **administratif** (bukan ketetapan pajak), bisa lewat **PTUN** (Pengadilan Tata Usaha Negara).

### Yang Bisa Digugat ke PTUN:
- Pencabutan NPWP tanpa sebab yang jelas
- Penolakan pendaftaran NPWP tanpa alasan
- Keputusan DJP tentang pencabutan izin konsultan pajak
- Keputusan DJP lain yang sifatnya administratif

### Beda Gugatan di PP vs PTUN:
- **PP**: gugatan yang berhubungan dengan **pajak** (keputusan DJP dalam konteks pajak)
- **PTUN**: gugatan atas keputusan DJP yang **bukan ketetapan pajak**, tapi administratif umum

> **Update 2026:** Sebagian besar gugatan terkait perpajakan sekarang masuk ke PP, bukan PTUN. PTUN cuma dipakai untuk hal-hal di luar substansi pajak (misal sengketa keanggotaan konsultan pajak).

## Tabel: Perbedaan Keberatan, Banding, PK, Gugatan

| Aspek | Keberatan | Banding | PK | Gugatan |
|-------|-----------|---------|-----|---------|
| Tempat | KPP/DJP | Pengadilan Pajak | Mahkamah Agung | Pengadilan Pajak / PTUN |
| Objek | SKP/STP | Keputusan Keberatan | Putusan PP | Keputusan DJP non-SKP |
| Jangka Waktu | 3 bulan | 3 bulan | 3 bulan | 3 bulan (90 hari) |
| Sifat | Tahap 1 | Tahap 2 | Tahap 3 | Alternatif |
| Biaya | Gratis | Rp 50K-500K | Lebih mahal | Bervariasi |
| Putusan Dalam | 12 bulan | 12 bulan | Bervariasi | Bervariasi |

## 💼 Kasus Nyata: Alur Sengketa PT Harmoni

**Kasus:**
- PT Harmoni kena SKPKB Rp 1 miliar untuk tahun pajak 2023 (terbit April 2026)
- WP tidak setuju, merasa koreksi fiskus salah
- Mereka ingin melawan

**Alur yang harus diambil PT Harmoni:**

**Tahap 1 — Keberatan (3 bulan):**
- Deadline keberatan: 3 bulan sejak SKPKB diterima (Mei 2026 → Agustus 2026)
- Surat keberatan dikirim ke Kepala KPP
- Karena SKPKB > Rp 100 juta, harus **bayar 50% dulu** = Rp 500 juta
- DJP berikan jawaban dalam 12 bulan (paling lambat Agustus 2027)

**Tahap 2 — Banding ke PP (3 bulan setelah jawaban keberatan):**
- Misal DJP tolak keberatan Juli 2027
- Banding harus diajukan dalam 3 bulan (Oktober 2027)
- Bayar biaya banding Rp 250K (misalnya)
- PP putus dalam 12 bulan (Juli 2028)

**Tahap 3 — PK ke MA (3 bulan setelah putusan PP):**
- Misal PP tolak banding Juli 2028
- PK harus diajukan Oktober 2028
- Hanya bisa kalau ada alasan khusus (bukti baru, kebohongan, hal dilupakan)

## Hak & Kewajiban WP Selama Sengketa

**Hak:**
- Didampingi konsultan pajak / pengacara
- Meminta penjelasan setiap koreksi fiskal
- Mengajukan keberatan, banding, PK, gugatan sesuai prosedur
- Minta perpanjangan waktu (kalau ada alasan kuat)

**Kewajiban:**
- Bayar pajak sesuai SKPKB (untuk kasus > Rp 100 juta, minimal 50% dulu)
- Berikan dokumen yang diminta fiskus
- Hadir saat diperiksa
- Hormati putusan yang sudah inkracht (berkekuatan hukum tetap)

## Update 2026: Yang Perlu Diingat

1. **Pemeriksaan digital** di Coretax: semua dokumen di-upload, komunikasi elektronik
2. **Keberatan elektronik**: ajukan lewat Coretax, tidak perlu ke KPP fisik
3. **Banding ke PP tetap konvensional** (surat + hadir), tapi bisa mulai online
4. **Penyelesaian keberatan**: target 12 bulan, tapi realisasinya bisa lebih cepat kalau dokumen lengkap
5. **Pendampingan konsultan pajak**: Brevet AB wajib punya izin untuk dampingi WP di PP

## Brevet AB = Izin Dampingi Sengketa Pajak!

Salah satu hak khusus pemegang **Brevet AB** adalah:
- Bisa mendampingi WP dalam pemeriksaan pajak
- Bisa menjadi kuasa WP dalam keberatan
- Bisa menjadi kuasa WP dalam banding ke PP
- Bahkan bisa menjadi kuasa dalam PK ke MA

Inilah salah satu alasan kenapa kamu harus paham betul materi ini — karena di dunia praktik, ini bread & butter konsultan pajak!

## Ringkasan Buat Ujian

- **Alur**: Pemeriksaan → SKP → Keberatan → Banding → PK
- **Keberatan**: 3 bulan sejak SKP, ke KPP, jawab dalam 12 bulan
- **Banding**: 3 bulan sejak keputusan keberatan, ke Pengadilan Pajak, putus 12 bulan
- **PK**: 3 bulan sejak putusan PP, ke MA, harus ada alasan khusus (3 alasan)
- **Gugatan**: untuk keputusan DJP non-SKP, ke PP atau PTUN
- **Bayar 50% dulu** untuk SKPKB > Rp 100 juta (untuk bisa banding)
- **Brevet AB** = izin dampingi sengketa pajak

Selesai Bab 1! 🎉 Kalau kamu sudah paham semua lesson di KUP, kamu siap ke Bab 2: UU Cipta Kerja & HPP yang lebih teknis. Semangat ya!`,
      keyPoints: [
        "Alur sengketa: Pemeriksaan → SKP → Keberatan → Banding → PK",
        "Keberatan: 3 bulan sejak SKP diterima, ke KPP, jawab dalam 12 bulan",
        "Banding: 3 bulan sejak keputusan keberatan, ke Pengadilan Pajak, putus dalam 12 bulan",
        "PK ke Mahkamah Agung: 3 bulan, harus ada alasan khusus (bukti baru, kebohongan, hal dilupakan)",
        "Gugatan: untuk keputusan DJP non-SKP, ke PP atau PTUN",
        "WP harus bayar 50% dulu untuk SKPKB > Rp 100 juta sebelum bisa banding",
        "Surat Pemberitahuan Hasil Pemeriksaan (SPHP) diberikan sebelum LHP final",
        "Brevet AB = izin mendampingi WP dalam pemeriksaan, keberatan, banding, PK",
        "Coretax 2026: pemeriksaan & keberatan elektronik, dokumen wajib upload",
      ],
      quiz: [
        {
          id: "ch01-l06-q1",
          question:
            "PT Andal menerima SKPKB tanggal 1 Mei 2026. Kapan batas akhir PT Andal untuk mengajukan keberatan?",
          options: [
            "1 Juni 2026 (1 bulan)",
            "1 Juli 2026 (2 bulan)",
            "1 Agustus 2026 (3 bulan)",
            "1 November 2026 (6 bulan)",
          ],
          correctIndex: 2,
          explanation:
            "Jangka waktu keberatan adalah 3 bulan sejak tanggal SKP diterima. 1 Mei 2026 + 3 bulan = 1 Agustus 2026.",
          difficulty: "mudah",
        },
        {
          id: "ch01-l06-q2",
          question:
            "SKPKB PT Maju Jaya Rp 500 juta. Mereka ingin banding ke Pengadilan Pajak setelah keberatan ditolak. Apa syarat sebelum bisa banding?",
          options: [
            "Bayar seluruh Rp 500 juta lebih dulu",
            "Bayar minimal 50% (Rp 250 juta) lebih dulu",
            "Tidak perlu bayar, langsung banding",
            "Cukup setor 10% dari Rp 500 juta",
          ],
          correctIndex: 1,
          explanation:
            "Pasal 25(6) KUP: Untuk SKPKB > Rp 100 juta, WP harus membayar minimal 50% lebih dulu sebelum bisa mengajukan banding ke Pengadilan Pajak.",
          difficulty: "sedang",
        },
        {
          id: "ch01-l06-q3",
          question:
            "Jangka waktu DJP untuk menjawab permohonan keberatan WP adalah?",
          options: ["3 bulan", "6 bulan", "12 bulan", "24 bulan"],
          correctIndex: 2,
          explanation:
            "Pasal 25(3) KUP: DJP harus menjawab keberatan dalam 12 bulan sejak surat keberatan diterima. Kalau lewat, dianggap dikabulkan.",
          difficulty: "sedang",
        },
        {
          id: "ch01-l06-q4",
          question:
            "Setelah putusan Pengadilan Pajak, WP masih bisa mengajukan Peninjauan Kembali (PK) ke Mahkamah Agung. Manakah yang BUKAN alasan syarat PK?",
          options: [
            "Putusan PP berdasarkan kebohongan pihak yang dipidana",
            "Ditemukan bukti baru yang belum diketahui sebelumnya",
            "Ada hal penting yang dilupakan dalam putusan PP",
            "WP tidak setuju dengan putusan PP secara substantif",
          ],
          correctIndex: 3,
          explanation:
            "PK ke MA hanya bisa dengan 3 alasan khusus: kebohongan, bukti baru, atau hal yang dilupakan. Sekadar tidak setuju secara substantif BUKAN alasan yang sah.",
          difficulty: "sulit",
        },
        {
          id: "ch01-l06-q5",
          question:
            "Manakah keputusan DJP berikut yang seharusnya digugat (bukan dibanding)?",
          options: [
            "SKPKB Rp 500 juta",
            "STP atas keterlambatan setor PPh",
            "Penolakan pengembalian pendahuluan restitusi",
            "SKPKBT atas pemeriksaan ulang",
          ],
          correctIndex: 2,
          explanation:
            "Gugatan untuk keputusan DJP yang BUKAN ketetapan pajak (SKP). Penolakan pengembalian pendahuluan restitusi adalah keputusan administratif, bukan ketetapan pajak, jadi digugat ke PP atau PTUN, bukan dibanding.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Sengketa PT Galaxy Tech Rp 2 Miliar",
        description:
          "PT Galaxy Tech kena SKPKB Rp 2 miliar untuk tahun pajak 2023 (terbit Maret 2026). Mereka merasa koreksi fiskus salah dan ingin melawan sampai putusan final. Jelaskan alur lengkap dan kapan setiap tahap harus dilakukan.",
        solution:
          "Alur lengkap: (1) Keberatan: ajukan dalam 3 bulan sejak SKPKB diterima (Maret 2026 → Juni 2026). Karena SKPKB > Rp 100 juta, harus bayar 50% (Rp 1 miliar) lebih dulu sebelum bisa banding. DJP harus jawab dalam 12 bulan (paling lambat Maret 2027). (2) Banding ke PP: kalau keberatan ditolak, ajukan banding dalam 3 bulan sejak keputusan keberatan diterima. PP akan putus dalam 12 bulan. (3) PK ke MA: kalau kalah banding, ajukan PK dalam 3 bulan sejak putusan PP. Hanya bisa dengan alasan khusus (bukti baru, kebohongan, hal dilupakan). (4) Total waktu: bisa 3-4 tahun dari SKPKB sampai putusan final. Selama proses, PT bisa didampingi konsultan pajak dengan Brevet AB. Strategi: bayar 50% dulu untuk menghentikan penagihan paksa sambil memproses banding.",
      },
      tags: [
        "pemeriksaan pajak",
        "keberatan",
        "banding",
        "Pengadilan Pajak",
        "Peninjauan Kembali",
        "Mahkamah Agung",
        "gugatan",
        "PTUN",
        "Brevet AB",
        "KUP Pasal 25",
      ],
    },
  ],
  exam: [
    {
      id: "ch01-e1",
      question: "Asas pemungutan pajak yang berdasarkan tempat tinggal wajib pajak adalah?",
      options: ["Asas sumber", "Asas domisili", "Asas kebangsaan", "Asas teritorial"],
      correctIndex: 1,
      explanation:
        "Asas domisili = negara kena pajak ke penghasilan WP yang bertempat tinggal di wilayahnya.",
      difficulty: "mudah",
    },
    {
      id: "ch01-e2",
      question:
        "Warisan almarhum Pak Yusuf belum dibagi. Warisan ini dianggap sebagai?",
      options: [
        "Bukan subjek pajak karena bukan orang/badan",
        "Subjek pajak tersendiri menggantikan yang berhak",
        "Subjek pajak dengan status WPLN",
        "Objek pajak saja, bukan subjek",
      ],
      correctIndex: 1,
      explanation:
        "Pasal 2(3) KUP: Warisan yang belum terbagi dianggap sebagai satu kesatuan SUBJEK pajak tersendiri, menggantikan yang berhak.",
      difficulty: "sedang",
    },
    {
      id: "ch01-e3",
      question: "Manakah yang BUKAN merupakan Bentuk Usaha Tetap (BUT)?",
      options: [
        "Cabang perusahaan asing di Jakarta",
        "Pertambangan yang dikelola perusahaan asing",
        "Pabrik milik perusahaan Belanda di Surabaya",
        "Toko kelontong milik warga lokal Indonesia",
      ],
      correctIndex: 3,
      explanation:
        "BUT = bentuk yang dipergunakan oleh WPLN untuk menjalankan usaha. Toko kelontong milik warga lokal = WPDN, bukan BUT.",
      difficulty: "mudah",
    },
    {
      id: "ch01-e4",
      question:
        "PT Sumber Rezeki omzet Rp 5 miliar/tahun tapi belum daftar NPPKP. Sanksi yang berlaku?",
      options: [
        "Tidak ada sanksi karena di bawah Rp 10 miliar",
        "Denda administratif Rp 1.000.000 + wajib setor PPN setelah jadi PKP",
        "Hanya kena bunga MIR 0,6%/bulan",
        "Pidana 6 bulan penjara",
      ],
      correctIndex: 1,
      explanation:
        "Omzet > Rp 4,8 miliar/tahun = WAJIB jadi PKP. Sanksi tidak daftar NPPKP = Rp 1.000.000.",
      difficulty: "sedang",
    },
    {
      id: "ch01-e5",
      question: "Tenggat pelaporan SPT Tahunan PPh Badan (form 1771) adalah?",
      options: ["31 Maret", "30 April", "31 Mei", "30 Juni"],
      correctIndex: 1,
      explanation:
        "SPT Tahunan PPh Badan dilaporkan paling lambat 30 April tahun berikutnya.",
      difficulty: "mudah",
    },
    {
      id: "ch01-e6",
      question: "Denda terlambat lapor SPT Masa PPN adalah?",
      options: ["Rp 100.000", "Rp 250.000", "Rp 500.000", "Rp 1.000.000"],
      correctIndex: 2,
      explanation:
        "Pasal 7 KUP: Denda terlambat lapor SPT Masa PPN = Rp 500.000. SPT Masa PPh lainnya = Rp 100.000.",
      difficulty: "sedang",
    },
    {
      id: "ch01-e7",
      question:
        "PT Cahaya kena SKPKB Rp 200 juta untuk tahun pajak 2024, terbit Agustus 2026. MIR Agustus 2026 = 0,6%/bulan. Berapa bunga yang terutang (asumsi SPT dilaporkan tepat waktu)?",
      options: [
        "Rp 1,02 juta per bulan × jumlah bulan",
        "Rp 2,04 juta per bulan × jumlah bulan",
        "Rp 12,24 juta (12% setahun)",
        "Rp 4,08 juta (2% per tahun)",
      ],
      correctIndex: 1,
      explanation:
        "Bunga SKPKB (Pasal 8(2)) = MIR × 1,7 = 0,6% × 1,7 = 1,02%/bulan. Per bulan: 1,02% × Rp 200 juta = Rp 2,04 juta.",
      difficulty: "sedang",
    },
    {
      id: "ch01-e8",
      question: "Manakah yang termasuk bukan objek PPh Pasal 4(3) KUP?",
      options: [
        "Beasiswa sesuai peraturan",
        "Bantuan BPJS JKK/JKM",
        "Pembagian SHU koperasi ke anggota",
        "Honorarium pemateri seminar",
      ],
      correctIndex: 3,
      explanation:
        "Honorarium pemateri = penghasilan, masuk objek PPh (PPh 21 atau PPh 23, tergantung status). Tiga lainnya jelas bukan objek PPh Pasal 4(3).",
      difficulty: "sulit",
    },
    {
      id: "ch01-e9",
      question:
        "Jangka waktu WP untuk mengajukan keberatan atas SKPKB yang diterima adalah?",
      options: ["1 bulan", "3 bulan", "6 bulan", "12 bulan"],
      correctIndex: 1,
      explanation:
        "Pasal 25(1) KUP: WP dapat mengajukan keberatan dalam 3 bulan sejak SKP diterima.",
      difficulty: "sedang",
    },
    {
      id: "ch01-e10",
      question:
        "Untuk SKPKB sebesar Rp 500 juta, syarat agar WP bisa mengajukan banding ke Pengadilan Pajak adalah?",
      options: [
        "Bayar seluruh Rp 500 juta lebih dulu",
        "Bayar minimal 50% (Rp 250 juta) lebih dulu",
        "Tidak perlu bayar, langsung banding",
        "Cukup setor 10% (Rp 50 juta)",
      ],
      correctIndex: 1,
      explanation:
        "Pasal 25(6) KUP: Untuk SKPKB > Rp 100 juta, WP harus bayar minimal 50% lebih dulu sebelum bisa banding ke PP.",
      difficulty: "sulit",
    },
  ],
}
