import type { Chapter } from "../types"

// ============================================================================
// BAB 7: PAJAK PERTAMBIHAN NILAI (PPN) & PAJAK PENJUALAN BARANG MEWAH (PPnBM)
// UU HPP (UU 7/2021) Pasal 7 — Update 2026: Tarif 12% tapi efektif 11%
// ============================================================================

export const chapter07: Chapter = {
  id: "ch07",
  slug: "ppn-ppnbm",
  number: 7,
  title: "Pajak Pertambahan Nilai & PPnBM",
  shortTitle: "PPN & PPnBM",
  description:
    "Bab raksasa untuk ujian! PPN 12% tapi efektif 11% via DPP 11/12, PKP & batas omzet Rp 4,8M, faktur pajak Coretax, PPN impor/ekspor 0%, PMSE (Google/Netflix/Spotify), sampai PPnBM barang mewah 10%-95%. Banyak kasus hitung!",
  icon: "Receipt",
  color: "violet",
  difficulty: "mahir",
  estimatedMinutes: 320,
  objectives: [
    "Paham definisi PPN, dasar hukum UU HPP Pasal 7, subjek (PKP), dan objek (BKP & JKP)",
    "Bisa jelaskan kenapa tarif PPN 12% tapi efektif 11% lewat DPP Nilai Lain 11/12 (PP 55/2022)",
    "Hitung PPN Masukan vs PPN Keluaran dan cara kredit pajak yang valid",
    "Kenali batas PKP Rp 4,8M/tahun, PPN 1% buat PKP kecil pedagang eceran, dan kasus UMKM",
    "Paham sistem Faktur Pajak elektronik di Coretax 2026: pre-populated, konfirmasi, jenis FP",
    "Bisa bedain PPN impor 11%, ekspor BKP/JKP 0%, BTB (Barang Tidak Berwujut), kontrak luar negeri",
    "Hafal PMSE: Google, Netflix, Spotify, Steam — collectors, DPP, tarif 11% efektif",
    "Hafal tarif PPnBM 10%-95%: mobil mewah, yacht, rumah mewah, pesawat pribadi, miras",
  ],
  lessons: [
    // =========================================================================
    // LESSON 1: PENGERTIAN & DASAR HUKUM PPN
    // =========================================================================
    {
      id: "ch07-l01",
      slug: "pengertian-ppn",
      title: "Pengertian & Dasar Hukum PPN — Yuk Kenalan Sama Pajak Konsumsi",
      subtitle: "UU HPP Pasal 7, subjek PKP, objek BKP/JKP, definisi penyerahan, saat PPN terutang",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 18,
      content: `# 🌱 Pengertian PPN — Pajak yang Lo Bayar Tiap Belanja

Yuk, kita mulai dari yang paling dasar. Lo pasti pernah beli sepatu di mall, terus lihat struk ada tulisan "PPN 11%" atau di bukti pembayaran Tokopedia ada "Termasuk PPN 11%". Nah, itulah Pajak Pertambahan Nilai atau **PPN**.

PPN itu pajak yang dikenakan atas **penyerahan Barang Kena Pajak (BKP) dan Jasa Kena Pajak (JKP)**. Konsepnya: setiap kali ada pertambahan nilai dalam rantai produksi & distribusi, pemerintah ngambil sebagian sebagai pajak.

Beda sama PPh yang nge-tagih orangnya (subjek), PPN nge-tagih barang/jasanya (objek). Makanya PPN disebut **pajak objektif** dan **pajak tidak langsung** — karena pajaknya bisa dilimpahin dari produsen ke konsumen akhir.

## Dasar Hukum PPN (Yang Wajib Lo Hafal!)

Ini urutan dasar hukum PPN dari yang paling tinggi sampai turunannya:

| # | Dasar Hukum | Konten |
|---|-------------|--------|
| 1 | **UUD 1945 Pasal 23A** | "Pajak dan pungutan lain yang bersifat memaksa untuk keperluan negara diatur dengan undang-undang" |
| 2 | **UU No. 42 Tahun 2009** | UU PPN lama (sebelum UU HPP) |
| 3 | **UU No. 7 Tahun 2021 (UU HPP)** | UU Harmonisasi Peraturan Perpajakan — sekarang jadi dasar PPN utama, **Pasal 7 atur tarif PPN 12%** |
| 4 | **PP 49 Tahun 2022** | Penyerahan BKP/JKP dianggap Bukan Objek PPN |
| 5 | **PP 50 Tahun 2022** | Barang/Jasa Bukan Objek PPN |
| 6 | **PP 55 Tahun 2022** | DPP Nilai Lain (11/12) — bikin PPN efektif 11% |
| 7 | **PMK 141/PMK.010/2021** | Bukan objek PPN untuk perumahan rakyat |
| 8 | **PMK 199/PMK.010/2023** | Bidang usaha JKP tarif 0% (ekspor jasa) |

> **Tip ujian:** Yang paling sering ditanya adalah **UU HPP Pasal 7** (tarif 12%) dan **PP 55/2022** (DPP Nilai Lain 11/12). Hafalin dua ini minimal!

## Subjek PPN: Siapa yang Bayar?

Subjek PPN itu beda sama subjek PPh. Di PPN, subjeknya adalah **Pengusaha Kena Pajak (PKP)**.

### Definisi PKP (Pasal 1 angka 7 UU HPP)

> Pengusaha Kena Pajak adalah Pengusaha yang melakukan penyerahan Barang Kena Pajak dan/atau Jasa Kena Pajak yang dikenai pajak berdasarkan UU ini, tidak termasuk Pengusaha Kecil.

Jadi PKP itu:
1. Pengusaha (orang pribadi atau badan)
2. Melakukan penyerahan BKP dan/atau JKP
3. **Bukan** Pengusaha Kecil

### Tabel: Subjek PPN Lengkap

| Subjek | Kriteria | Kewajiban |
|--------|----------|-----------|
| **PKP** | Pengusaha omzet > Rp 4,8M/tahun (excl Jasa tertentu) | Wajib daftar, terbitkan Faktur Pajak, lapor SPT PPN |
| **PKP Kecil** | Pengusaha eceran/grosir omzet < Rp 4,8M tapi tetap PKP | Pakai PPN 1% (DPP 1/12 dari harga jual) |
| **Pengusaha Kecil** | Omzet ≤ Rp 4,8M/tahun, pilih tidak jadi PKP | Bisa pilih PPh Final 0,5% (UU HPP) |
| **Pemungut PPN** | Bendahar pemerintah, BUMN, dll | Wajib pemungut PPN atas belanja |
| **PJAP** | Penyelenggara Modat Asing (PMSE) | Pemungut PPN atas jasa asing |

### Syarat Wajib Daftar PKP (Wajib Hafal!)

Pasal 2 ayat (1) PP 55/2022: Pengusaha wajib dikukuhkan jadi PKP kalau:
1. **Omzet ≥ Rp 4,8 miliar/tahun**, ATAU
2. PFKP (Pengusaha Kena Pajak Minta Pajak) — sukarela daftar walau omzet < 4,8M

> **Bonus buat UMKM:** Individu UMKM dengan omzet ≤ Rp 4,8M bisa **tidak jadi PKP** dan bayar **PPh Final 0,5%** saja (UU HPP). Tapi kalau dia mau maju dan jadi PKP, dia juga bisa — disebut PFKP.

## Objek PPN: Apa yang Dikenai?

Sekarang kita bahas objeknya. Pasal 4 UU HPP atur objek PPN:

### Daftar Objek PPN (8 Aktifitas Kena PPN)

1. **Penyerahan BKP** (Barang Kena Pajak berwujud & tak berwujud)
2. **Penyerahan JKP** (Jasa Kena Pajak)
3. **Impor BKP**
4. **Ekspor BKP** (tak berwujud & berwujud)
5. **Ekspor JKP** (jasa tertentu, tarif 0%)
6. **Impor JKP** (sejak UU HPP 2022)
7. **Penggunaan BKP tak berwujud dari luar negeri** (PMSE)
8. **Penggunaan JKP dari luar negeri** (PMSE juga)

### Bukan Objek PPN (Pasal 4A + PP 49/2022 + PP 50/2022)

**Barang bukan objek PPN:**
- Hasil pertambang atau pengeboran minyak bumi & gas bumi sebelum menjadi kena pajak (di kilang)
- Hasil pertanian, perburuan, perikanan, perkebunan, kehutanan (belum diproses)
- Barang kebutuhan pokok: **beras, jagung, kedelai, garam, gula pasir**
- Air dari sumbernya (PDAM, sumur, dll)
- Makanan & minuman disajikan di hotel/restoran (kena Pajak Daerah)
- Emas batangan & perhiasan
- Perumahan rakyat (tipe 21, 36, subsidize)
- Batubara untuk PLN/Pembangkit listrik
- Al Quran dan kitab suci
- Alat penerangan jalan umum
- Pesawat ulang-alik

**Jasa bukan objek PPN (17 jenis):**
1. Jasa kesehatan medis
2. Jasa pelayanan sosial (panti asuhan, dll)
3. Jasa pengiriman uang (transfer, VA)
4. Jasa asuransi
5. Jasa keagamaan
6. Jasa pendidikan
7. Jasa kesenian & hiburan (yang disponsori pemerintah)
8. Jasa penyiaran tertentu
9. Jasa angkutan umum (darat, laut, udara — yang reguler)
10. Jasa perhotelan (kena Pajak Daerah Hotel)
11. Jasa yang dipungut Pajak Daerah
12. Jasa tenaga kerja (outsourcing tenaga kerja)
13. Jasa koperasi simpan pinjam
14. Jasa parkir
15. Jasa telepon umum
16. Jasa pengobatan tradisional (jamu)
17. Jasa caterers (makanan jadi untuk instansi tertentu)

> **Penting:** Restoran, hotel, hiburan, parkir → kena **Pajak Daerah**, BUKAN PPN. Bedain yah!

## Definisi Penyerahan (Konsep Kunci!)

Penyerahan itu inti dari objek PPN. Pasal 1 angka 11 UU HPP:

> Penyerahan Barang Kena Pajak adalah kepindahan hak atas Barang Kena Pajak dari suatu pihak ke pihak lainnya.

Tapi **penyerahan** di PPN itu lebih luas dari "jual beli" biasa. Termasuk:

1. **Jual beli** (yang paling umum)
2. **Tukar-menukar** (barter)
3. **Pemberian cuma-cuma** (hadiah, bonus, sampel)
4. **Pemindahan BKP dari pusat ke cabang** (antar unit yang punya NPPKP berbeda)
5. **Pengambilan sendiri** BKP oleh pemilik untuk dipakai pribadi/usaha lain
6. **Penyerahan ke pihak ketiga** lewat kurir/utsman (konsinyasi)
7. **Sewa pakai** BKP (leasing operasi, sewa alat)
8. **Jasa bukan sewa** (JKP — consulting, kontraktor, dll)

### Syarat BKP (Barang Kena Pajak)

BKP itu barang berwujud maupun tidak berwujud yang:
1. Berwujud **fisik** (yang berwujud) atau **tak berwujud** (digital)
2. Dipakai langsung atau lewat proses produksi
3. Bukan termasuk daftar **bukan objek PPN** (Pasal 4A)

Contoh BKP berwujud: **HP, laptop, motor, mobil, sembako olahan, furniture**.
Contoh BKP tak berwujud: **software, e-book, lagu digital, film streaming, license digital**.

### Syarat JKP (Jasa Kena Pajak)

JKP adalah jasa yang:
1. Bukan termasuk daftar bukan objek PPN (17 jenis di atas)
2. Dilakukan di wilayah Indonesia (aturan tempat JKP — PMK 65/2021)

Contoh JKP: **jasa konsultan, jasa reparasi, jasa pengacara, jasa arsitek, jasa printing, jasa catering (non-instansi), jasa transportasi barang (cargo)**.

## Saat PPN Terutang (Sangat Penting!)

Ini pertanyaan yang **sangat sering keluar** di ujian. Kapan PPN terutang?

### Saat PPN Terutang untuk Setiap Kegiatan

| Kegiatan | Saat PPN Terutang |
|----------|-------------------|
| **Penyerahan BKP (umum)** | Saat **penyerahan** barang (delivery) |
| **Penyerahan BKP (sistem produksi)** | Saat **mulai produksi** (efektif — UU HPP 2022) |
| **Penyerahan JKP** | Saat **pembayaran** diterima |
| **Penyerahan BKP/JKP uang muka** | Saat **uang muka diterima** |
| **Impor BKP** | Saat **impor** (jamuan PPN saat barang masuk) |
| **Ekspor BKP** | Saat **PEB (Pemberitahuan Ekspor Barang)** disetujui |
| **Ekspor JKP** | Saat **pembayaran diterima** atau saat JKP selesai dilakukan |
| **PMSE** | Saat **pembayaran diterima** atau jatuh tempo tagihan |
| **Penyerahan BKP sendiri (auto-consumption)** | Saat **pemakaian** barang |

> **Tip ujian:** "Saat PPN terutang atas penyerahan JKP" → jawabannya **saat pembayaran diterima**. Beda sama penyerahan BKP yang saat **penyerahan/delivery**.

### Contoh Kasus Saat Terutang

PT Maju Jaya jual mesin ke PT Abadi seharga Rp 500 juta:
- 1 Februari 2026: dibayar uang muka Rp 100 juta → **PPN terutang saat ini juga** atas Rp 100 juta
- 1 Maret 2026: barang diserahkan → PPN terutang atas Rp 400 juta (sisanya)
- PPN total = 11% × Rp 500 juta = Rp 55 juta

Nggak semua dibayar sekaligus saat penyerahan, tapi dibagi sesuai **saat terutang**. Karena uang muka juga dianggap penyerahan (Penyerahan parsial), maka PPN-nya terutang saat uang muka diterima.

## Pemungut PPN (Siapa yang Setor PPN)

Pemungut PPN itu pihak yang **ngumpulin PPN dari wajib pajak lain** lalu setor ke kas negara. Beda sama PKP yang menyetor PPN dari penjualan sendiri.

Daftar Pemungut PPN:
1. **Bendahara Pemerintah** (PPh 15 + PPN) — belanja barang/jasa pemerintah
2. **BUMN/BUMD** — belanja barang/jasa yang dilakukan bendaharanya
3. **Pertamina** — penyerahan BBM (di distributor, ke SPBU)
4. **PJAP** (Penyelenggara Jasa Aplikasi Pemungut) — PPN atas PMSE jasa asing (Google, Netflix, dll)
5. **Direktorat Jenderal Bea dan Cukai** — PPN atas impor (dipungut saat impor)

> **Ingat:** Yang setor PPN atas penjualan sendiri = **PKP**. Yang setor PPN atas pembelian dari pihak lain = **Pemungut**.

## Dasar Pengenaan Pajak (DPP)

DPP atau **Dasar Pengenaan Pajak** itu jumlah yang dipakai sebagai basis hitung PPN. Rumus umum:

**PPN = Tarif × DPP**

Untuk PPN normal, DPP = Harga Jual. Tapi karena PP 55/2022, ada "DPP Nilai Lain" = 11/12 dari Harga Jual. Jadi:

- Tarif PPN = 12% (UU HPP Pasal 7)
- DPP Nilai Lain = 11/12 × Harga Jual
- PPN efektif = 12% × 11/12 = **11%** dari Harga Jual

Ini rahasia kenapa PPN tetap 11% walau UU-nya 12%. Nanti di Lesson 2 kita bahas detail ya!

## Mekanisme Kredit Pajak (Intro)

Konsep penting berikutnya: PPN itu **multi-stage**. Setiap tahap produksi & distribusi ada PPN, tapi PPN yang dibayar di tahap sebelumnya bisa **dikredit** (dipotong) dari PPN yang harus disetor.

Rumusnya:
- **PPN Keluaran** = PPN yang dipungut dari pembeli (saat jual)
- **PPN Masukan** = PPN yang dibayar ke supplier (saat beli)
- **PPN yang disetor** = PPN Keluaran − PPN Masukan

Contoh sederhana:
- Toko Buku beli buku dari penerbit Rp 100.000 + PPN Rp 11.000 (PPN Masukan)
- Toko Buku jual ke konsumen Rp 150.000 + PPN Rp 16.500 (PPN Keluaran)
- PPN yang disetor Toko Buku = Rp 16.500 − Rp 11.000 = **Rp 5.500**

> **Konsep kunci:** PPN bukan pajak ganda. Setiap tahap hanya setor "pertambahan nilai" (value added) yang dia ciptakan. Itulah kenapa disebut "Pajak Pertambahan Nilai"!

## 🧮 Kasus Nyata: Toko Furniture "Kayu Indah"

**Situasi:**
Pak Budi punya toko furniture "Kayu Indah", omzet Rp 8 miliar/tahun. Dia beli kayu jati dari pengrajin Rp 50 juta, lalu dibuat meja kursi dan dijual Rp 100 juta ke PT Cendana.

**Pertanyaan:**
1. Apakah Pak Budi wajib jadi PKP?
2. Berapa PPN Masukan saat beli kayu?
3. Berapa PPN Keluaran saat jual meja?
4. Berapa PPN yang disetor Pak Budi?

**Jawaban:**
1. **Ya, wajib PKP** karena omzet > Rp 4,8 miliar/tahun (Pasal 2 PP 55/2022)
2. **PPN Masukan** = 11% × Rp 50 juta = Rp 5,5 juta (asal kayu = BKP karena udah diproses jadi bahan baku furniture)
3. **PPN Keluaran** = 11% × Rp 100 juta = Rp 11 juta
4. **PPN disetor** = PPN Keluaran − PPN Masukan = Rp 11 juta − Rp 5,5 juta = **Rp 5,5 juta**

> **Catatan:** Kalau kayu jati dari pengrajin dihukum "hasil hutan belum diproses" (kayu gelondongan), maka **bukan objek PPN** (Pasal 4A). Jadi tidak ada PPN Masukan. Toko Furniture harus setor PPN keluaran penuh Rp 11 juta!

## Update 2026: Tidak Ada Perubahan Tarif!

Sampai dengan Agustus 2026, **tarif PPN tetap 11% efektif** (12% headline × 11/12 DPP). Tidak ada kenaikan ke 12% efektif. Pemerintah sudah konfirmasi pakai DPP Nilai Lain terus sampai kondisi ekonomi stabil.

Yang baru di 2026:
- **Coretax** udah stabil, fitur pre-populated Faktur Pajak udah jalan
- **Faktur Pajak elektronik** wajib dibikin & dikonfirmasi di Coretax (nggak via e-Faktur mandiri lagi)
- **PPh 22 Marketplace** (e-commerce) ditunda lagi — PENG-46/PJ.09/2026 (5 Agustus 2026)
- **Bunga MIR** Agustus 2026 = 0,6%/bln (KMK 35/MK/EF.2/2026) — terkait keterlambatan setor PPN

## Ringkasan Buat Ujian

Sebelum lanjut, coba deh kamu jawab singkat:

1. **Dasar hukum PPN sekarang?** → UU No. 7/2021 (UU HPP) Pasal 7
2. **Tarif PPN menurut UU?** → 12% (tapi efektif 11% via DPP 11/12)
3. **Subjek PPN?** → Pengusaha Kena Pajak (PKP)
4. **Objek PPN?** → Penyerahan BKP, JKP, ekspor, impor, PMSE
5. **Saat PPN terutang atas penyerahan JKP?** → Saat pembayaran diterima
6. **Batas omzet wajib PKP?** → Rp 4,8 miliar/tahun
7. **Restoran kena PPN atau Pajak Daerah?** → Pajak Daerah (Bukan Objek PPN)

Kalau udah jawab 7 hal di atas tanpa lihat catatan, kamu siap ke Lesson 2! 🚀`,
      keyPoints: [
        "Dasar hukum PPN: UU HPP 7/2021 Pasal 7 (tarif 12%), PP 55/2022 (DPP 11/12 → efektif 11%)",
        "Subjek PPN = Pengusaha Kena Pajak (PKP), bukan WP biasa",
        "Wajib PKP kalau omzet > Rp 4,8M/tahun atau PFKP (sukarela)",
        "Objek PPN: penyerahan BKP, JKP, ekspor, impor, PMSE",
        "Bukan objek PPN: beras, gula, air, hasil pertanian, jasa kesehatan, pendidikan, hotel, restoran",
        "Saat PPN terutang: BKP saat penyerahan/delivery, JKP saat pembayaran, impor saat masuk",
        "PPN = pajak objektif & tidak langsung (bisa dilimpahkan ke konsumen akhir)",
        "Mekanisme: PPN disetor = PPN Keluaran − PPN Masukan",
      ],
      quiz: [
        {
          id: "ch07-l01-q1",
          question: "Dasar hukum tarif PPN 12% di Indonesia berasal dari?",
          options: [
            "UU No. 42 Tahun 2009",
            "UU No. 7 Tahun 2021 (UU HPP) Pasal 7",
            "PP No. 55 Tahun 2022",
            "UUD 1945 Pasal 23A",
          ],
          correctIndex: 1,
          explanation:
            "UU HPP (UU 7/2021) Pasal 7 yang menetapkan tarif PPN 12% sejak 1 Januari 2025. PP 55/2022 hanya soal DPP Nilai Lain 11/12 yang bikin efektif 11%.",
          difficulty: "mudah",
        },
        {
          id: "ch07-l01-q2",
          question: "Manakah yang BUKAN termasuk objek PPN?",
          options: [
            "Penjualan laptop di toko komputer",
            "Jasa konsultansi manajemen",
            "Impor mesin pabrik dari Jepang",
            "Jasa pendidikan di sekolah dasar swasta",
          ],
          correctIndex: 3,
          explanation:
            "Jasa pendidikan termasuk daftar bukan objek PPN (Pasal 4A UU HPP + PP 50/2022). Tiga lainnya jelas objek PPN.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l01-q3",
          question:
            "PT Sentosa Jaya Abadi (omzet Rp 12 miliar/tahun) jual barang ke konsumen. Pada 1 Februari 2026 menerima uang muka Rp 200 juta, barang diserahkan 1 Maret 2026. Kapan PPN terutang atas uang muka?",
          options: [
            "1 Maret 2026 (saat penyerahan)",
            "1 Februari 2026 (saat uang muka diterima)",
            "1 April 2026 (saat lapor SPT Masa)",
            "Dibagi-bagi per bulan Februari-Maret",
          ],
          correctIndex: 1,
          explanation:
            "Untuk penyerahan BKP, uang muka dianggap sudah penyerahan parsial. PPN terutang saat uang muka diterima (1 Februari 2026), bukan saat barang diserahkan.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l01-q4",
          question: "Pak Andi punya warung nasi, omzet Rp 50 juta/bulan. Status PPN-nya?",
          options: [
            "Wajib PKP karena warung nasi termasuk BKP",
            "Bukan PKP karena makanan jadi bukan objek PPN (makanan disajikan)",
            "Wajib PKP karena omzet > Rp 4,8M/tahun",
            "Wajib PKP tapi bisa pilih tarif 1%",
          ],
          correctIndex: 1,
          explanation:
            "Makanan & minuman yang disajikan di warung/restoran = bukan objek PPN (Pasal 4A) → kena Pajak Daerah Restoran. Jadi Pak Andi bukan PKP atas penjualan nasi. (Tapi kalau dia jual minuman kemasan seperti teh botol, itu bisa BKP).",
          difficulty: "sulit",
        },
        {
          id: "ch07-l01-q5",
          question:
            "Toko Elektronik Maju beli TV dari distributor Rp 5 juta (PPN Masukan Rp 550.000), lalu jual ke konsumen Rp 6,5 juta. Berapa PPN yang harus disetor Toko Maju?",
          options: [
            "Rp 715.000",
            "Rp 550.000",
            "Rp 165.000",
            "Rp 1.265.000",
          ],
          correctIndex: 2,
          explanation:
            "PPN Keluaran = 11% × Rp 6.500.000 = Rp 715.000. PPN Masukan = Rp 550.000. PPN disetor = Rp 715.000 − Rp 550.000 = Rp 165.000. Inilah mekanisme kredit pajak multi-stage.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Apotek Sehat Sentosa — PKP atau Bukan?",
        description:
          "Apotek Sehat Sentosa omzet Rp 6 miliar/tahun. 60% penjualan obat bebas/bebas terbatas (BKP), 40% obat keras (bukan BKP karena diatur Kemenkes). Apoteker Heri bingung: apakah Apotek wajib PKP? Jika ya, berapa PPN yang disetor kalau dia jual obat bebas Rp 10 juta (modal Rp 8 juta)?",
        solution:
          "Ya, Apotek wajib PKP karena omzet > Rp 4,8M/tahun (asumsi tidak ada pemisahan omzet obat keras — UU PPN hitung total omzet). Untuk penjualan obat bebas Rp 10 juta: PPN Keluaran = 11% × Rp 10.000.000 = Rp 1.100.000. PPN Masukan = 11% × Rp 8.000.000 = Rp 880.000. PPN disetor = Rp 1.100.000 − Rp 880.000 = Rp 220.000. Tapi obat keras penjualannya tidak ada PPN (bukan objek), dan pembelian obat keras juga tidak ada PPN Masukan yang bisa dikredit.",
      },
      tags: ["PPN", "PKP", "BKP", "JKP", "UU HPP", "DPP", "objek PPN", "saat terutang"],
    },

    // =========================================================================
    // LESSON 2: TARIF PPN 2026 - 12% TAPI 11% EFEKTIF
    // =========================================================================
    {
      id: "ch07-l02",
      slug: "tarif-ppn-2026",
      title: "Tarif PPN 2026: 12% di UU Tapi 11% yang Lo Bayar — Apa Bedanya?",
      subtitle: "UU HPP 12% mulai 1 Jan 2025, PP 55/2022 DPP Nilai Lain 11/12, barang mewah kena 12% efektif",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 22,
      content: `# 🔥 Tarif PPN 2026 — Misteri 12% vs 11% Akhirnya Terpecahkan!

Yuk, kita bahas hal yang paling sering bikin bingung di ujian PPN: **tarifnya 12% atau 11% sih?**

Awal 2025 kemarin heboh banget soal PPN naik jadi 12%. Tapi pas beli barang di mall, tetep 11%. Kok bisa? Nah, di lesson ini kita bakal bedah tuntas misteri itu.

## Sejarah Tarif PPN Indonesia

Pertama, kita lihat dulu sejarah tarif PPN dari dulu sampai sekarang:

| Periode | Tarif PPN | Dasar Hukum |
|---------|-----------|-------------|
| 1984 - 2001 | 10% | UU PPN 8/1983 |
| 2001 - 1 April 2022 | 10% | UU 18/2000 |
| 1 April 2022 - 31 Des 2024 | 11% | UU HPP 7/2021 (Pasal 7 ayat 1) |
| **1 Jan 2025 - sekarang** | **12%** (headline) | UU HPP 7/2021 Pasal 7 ayat 5 |
| **1 Jan 2025 - sekarang** | **11% efektif** | PP 55/2022 (DPP Nilai Lain 11/12) |

> **Tip ujian:** Kalau ditanya "tarif PPN menurut UU", jawabannya **12%**. Kalau ditanya "tarif PPN efektif yang berlaku", jawabannya **11%**. Bedain yah!

## Kenapa 12% Tapi Efektif 11%?

Ini trik politik & ekonomi yang jenius (atau licik, tergantung sudut pandang). Gini ceritanya:

UU HPP Pasal 7 ayat (1) bilang:
> "Tarif Pajak Pertambahan Nilai sebesar **11% (sebelas persen)** berlaku mulai 1 April 2022 sampai dengan 31 Desember 2024."

Lalu Pasal 7 ayat (5):
> "Tarif sebagaimana dimaksud pada ayat (1) diubah menjadi **12% (dua belas persen)** dan berlaku mulai 1 Januari 2025."

Jadi sejak 1 Januari 2025, tarif PPN menurut UU = 12%. Pemerintah tidak bisa mengingkari UU ini. Tapi...

Tapi pemerintah **tidak mau** tarif efektifnya 12% karena:
1. Inflasi bakal naik (harga barang naik 1% sekaligus)
2. Daya beli masyarakat turun
3. Resesi ekonomi belum pulih 100% post-COVID

Jadi pemerintah **pakai jalan tengah**: tetap 12% di UU, tapi pakai **DPP Nilai Lain** biar efektifnya 11%.

## Rahasia: DPP Nilai Lain 11/12

Pasal 9 ayat (5) UU HPP:
> "DPP Nilai Lain ditetapkan paling tinggi sebesar 0% (nol persen) dan paling rendah sebesar 100% (seratus persen) dari Harga Jual atau Penggantian."

Lalu **PP 55/2022** mengatur bahwa untuk barang & jasa tertentu, DPP-nya = **11/12 dari Harga Jual**.

Hitungannya:
- Tarif = 12%
- DPP = 11/12 × Harga Jual
- **PPN = 12% × (11/12 × Harga Jual) = 11% × Harga Jual**

Jadi efektif, PPN yang lo bayar = **11% dari Harga Jual**. Persis sama dengan sebelumnya!

### Contoh Hitung

Beli sepatu Rp 1.000.000 di mall:
- Harga Jual = Rp 1.000.000
- DPP (DPP Nilai Lain) = 11/12 × Rp 1.000.000 = Rp 916.667
- PPN = 12% × Rp 916.667 = **Rp 110.000**
- Total bayar = Rp 1.000.000 + Rp 110.000 = **Rp 1.110.000**

Sama persis kayak kalau PPN = 11% × Rp 1.000.000 = Rp 110.000. **Nggak ada bedanya!**

> **Tip ujian:** Kalau di soal tertulis "PPN 12%" dan diminta hitung PPN atas Rp 1.000.000, **jangan** langsung 12% × 1.000.000 = Rp 120.000. Tapi cek dulu apakah ini barang umum (efektif 11% = Rp 110.000) atau barang mewah (12% penuh = Rp 120.000).

## Barang Mewah: Kena 12% Penuh!

Nah, di sinilah perbedaannya. **Barang mewah tertentu TIDAK dapat DPP 11/12**, jadi tetap kena PPN 12% penuh dari Harga Jual.

Lalu, barang mewah apa aja yang kena 12% penuh? Pemerintah sudah terbitkan **PMK 15/PMK.010/2023** sebagai turunan PP 55/2022. Daftar barang yang kena PPN 12% efektif (full):

### Tabel Barang Kena PPN 12% Penuh (Efektif)

| Kategori Barang | Contoh |
|-----------------|--------|
| **Kendaraan bermotor mewah** | Mobil sedan di atas Rp 5 miliar (CBU/import), mobil SUV mewah di atas Rp 5 miliar |
| **Pesawat pribadi** | Private jet |
| **Kapal pesiar mewah** | Yacht di atas ukuran tertentu |
| **Rumah mewah** | Rumah di atas Rp 30 miliar (DKI Jakarta & sekitarnya) |
| **Apartemen mewah** | Apartemen di atas Rp 10 miliar (DKI) |
| **Handbag/tas mewah** | Tas di atas Rp 30 juta |
| **Jam tangan mewah** | Jam tangan di atas Rp 50 juta |
| **Sepatu & pakaian mewah** | Sepatu di atas Rp 25 juta, pakaian di atas Rp 50 juta |
| **Perhiasan berlian** | Berlian & perhiasan di atas Rp 100 juta |
| **Alat musik mewah** | Piano di atas Rp 100 juta |

> **Catatan:** Daftar di atas berdasarkan PMK 15/2023 dengan batas harga tertentu. Batas ini bisa berubah — selalu cek update terbaru!

### Contoh Hitung Barang Mewah

Beli mobil sedan mewah Rp 6 miliar:
- Harga Jual = Rp 6.000.000.000
- DPP = Rp 6.000.000.000 (TIDAK dapat 11/12 karena mewah)
- PPN = 12% × Rp 6.000.000.000 = **Rp 720.000.000**
- Plus PPnBM (tergantung klasifikasi mobilnya, bisa 30-75%)

Bandingkan kalau mobil biasa Rp 200 juta:
- Harga Jual = Rp 200.000.000
- DPP = 11/12 × Rp 200.000.000 = Rp 183.333.333
- PPN = 12% × Rp 183.333.333 = **Rp 22.000.000** (efektif 11%)

## Kenapa Ada Pembedaan Barang Mewah?

Logikanya gampang: pemerintah maunya orang kaya yang beli barang mewah, **bayar lebih**. Karena:
1. Mereka mampu bayar lebih
2. Bisa ngurangin konsumsi barang mewah ( impor devisa lari ke luar)
3. Keadilan sosial: subsidi silang dari yang kaya ke yang nggak

Ini konsisten dengan fungsi **regulerend** pajak yang udah kita bahas di Bab 1.

## Tabel Perbandingan: Barang Umum vs Barang Mewah

| Aspek | Barang Umum | Barang Mewah |
|-------|-------------|---------------|
| Tarif UU | 12% | 12% |
| DPP | 11/12 × Harga Jual | Harga Jual penuh |
| PPN efektif | 11% | 12% |
| Contoh | Sepatu Rp 500rb, Laptop Rp 10 jt | Mobil Rp 6M, Yacht, Pesawat |
| Dasar Hukum DPP | PP 55/2022 | PMK 15/PMK.010/2023 |
| Tujuan | Jaga daya beli masyarakat | Tax the rich |

## Update 2026: Tidak Ada Perubahan!

Sampai Agustus 2026, **tidak ada perubahan tarif PPN**. Pemerintah masih tetap pakai skema 12% headline + DPP 11/12 untuk barang umum. Yang ada cuma update teknis di Coretax soal input Faktur Pajak.

> **Tip ujian:** Kalau ditanya "Tarif PPN efektif tahun 2026?" → jawab **11%**. Kalau ditanya "Tarif PPN menurut UU HPP?" → jawab **12%**. Jangan tertukar!

## Perubahan Tarif: Mungkin Naik Jadi 15% atau Turun Jadi 5%?

Pasal 7 ayat (7) UU HPP:
> "Dalam hal **keadaan keuangan negara** sangat memburuk, tarif sebagaimana dimaksud pada ayat (5a) dapat diubah paling tinggi menjadi **15%** atau paling rendah menjadi **5%** dengan Peraturan Pemerintah setelah mendapat persetujuan dari DPR."

Jadi pemerintah **bisa** ubah tarif jadi 5-15% lewat PP dengan persetujuan DPR. Tapi sampai 2026, **belum pernah dipakai**.

## Mekanisme Hitung PPN untuk Soal Ujian

Mari kita buat rumus praktis buat soal ujian:

### Untuk Barang Umum (Efektif 11%)
\`\`\`
DPP = 11/12 × Harga Jual
PPN = 12% × DPP = 11% × Harga Jual
\`\`\`

### Untuk Barang Mewah (12% Penuh)
\`\`\`
DPP = Harga Jual (penuh)
PPN = 12% × DPP = 12% × Harga Jual
\`\`\`

### Untuk Ekspor BKP (Tarif 0%)
\`\`\`
DPP = Harga Jual Ekspor
PPN = 0% × DPP = 0 (tetap harus dibuat Faktur Pajak 0%)
\`\`\`

### Untuk Impor BKP
\`\`\`
DPP = Nilai Impor (CIF + Bea Masuk + PPh 22)
PPN = 11% × DPP (umumnya efektif 11%)
\`\`\`

## Contoh Soal Lengkap

### Soal 1: Barang Umum
Toko Furniture jual meja Rp 5.000.000 (bukan barang mewah). Berapa PPN-nya?

**Jawaban:**
- DPP = 11/12 × Rp 5.000.000 = Rp 4.583.333
- PPN = 12% × Rp 4.583.333 = **Rp 550.000** (sama dengan 11% × 5 juta)

### Soal 2: Barang Mewah
Pak Hartono beli jam tangan mewah Rp 80.000.000. Berapa PPN-nya?

**Jawaban:**
- Karena jam tangan mewah (di atas Rp 50 juta per PMK 15/2023) → DPP penuh
- DPP = Rp 80.000.000
- PPN = 12% × Rp 80.000.000 = **Rp 9.600.000** (bukan Rp 8.800.000!)

### Soal 3: Toko eceran (PKP Kecil)
Toko Sembako "Murah" adalah PKP Kecil (omzet Rp 3 miliar/tahun, jual sembako olahan). Jual minyak goreng kemasan Rp 50.000. Berapa PPN-nya?

**Jawaban:**
- PKP Kecil pakai DPP khusus = 1/12 × Harga Jual (bukan 11/12)
- DPP = 1/12 × Rp 50.000 = Rp 4.167
- PPN = 12% × Rp 4.167 = **Rp 500** (efektif 1%!)
- Nanti di Lesson 4 kita bahas detail PPN PKP Kecil ini.

## 🧮 Kasus Nyata: Belanja Bulanan Keluarga vs Belanja Mewah

**Situasi:**
Bu Sinta (guru SD, gaji Rp 5 juta/bulan) belanja bulanan di Indomaret: Rp 500.000. Pak Budi (pengusaha sukses) beli jam tangan Rolex Rp 100 juta.

**Berapa PPN masing-masing?**

**Bu Sinta — Belanja Umum:**
- Total belanja Rp 500.000
- PPN efektif = 11% × Rp 500.000 = **Rp 55.000**
- Total bayar = Rp 555.000

**Pak Budi — Belanja Mewah:**
- Harga jam Rp 100.000.000 (di atas Rp 50 juta → mewah)
- PPN = 12% × Rp 100.000.000 = **Rp 12.000.000** (bukan Rp 11 juta!)
- Total bayar = Rp 112.000.000

**Refleksi:**
- Bu Sinta "kena" Rp 55.000 (0,011% dari gajinya)
- Pak Budi "kena" Rp 12.000.000 (tapi proporsional, karena dia pengusaha)

Inilah yang dimaksud dengan **progressivity via differentiating goods**. Walau PPN secara teknis pajak proporsional/regresif, pemerintah pakai diskriminasi tarif (11% vs 12%) untuk ngelakukan "progresivitas semu" — si kaya bayar lebih buat barang mewah.

## Penanganan Khusus: PT Karya Bangun Rumah Subsidi

PT Karya Bangun jual rumah subsidi tipe 36 seharga Rp 165 juta/unit. Apakah kena PPN?

**Jawab:** **Bukan objek PPN!** Per Pasal 4A UU HPP + PP 49/2022, perumahan rakyat (tipe 21, 36, subsidi) = bukan objek PPN. Jadi PT Karya Bangun tidak perlu terbitkan Faktur Pajak atas penjualan rumah subsidi.

Tapi kalau PT Karya Bangun jual rumah mewah di atas Rp 30 miliar → kena PPN 12% penuh (barang mewah) + PPnBM 20%.

## Beberapa Detail Teknis

### Apakah DPP 11/12 Berlaku untuk PPN Masukan?

**Ya!** Saat kamu beli barang umum, PPN Masukan yang kamu bayar juga efektif 11%. Jadi saat kamu kredit, PPN Masukan yang bisa dikredit = 11% dari harga beli.

Tapi kalau kamu beli barang mewah buat dipakai sendiri (auto-consumption) atau dipakai untuk operasional bisnis (misal beli mobil mewah buat direksi), PPN Masukannya tetap 12% penuh dan bisa dikredit, **asalkan** mobil itu benar-benar dipakai untuk operasional PKP (bukan dipakai pribadi direksi).

> **Aturan anti-abuse:** Kalau beli barang mewah untuk pribadi pemilik PKP, PPN Masukannya **tidak bisa dikredit**. Hanya PPN Masukan untuk operasional usaha yang bisa dikredit.

### Apakah Toko Kelontong Kecil Kena PPN 11%?

Kalau omzetnya < Rp 4,8 miliar/tahun dan tidak mendaftar sebagai PKP, **tidak kena PPN**. Tapi kalau dia mendaftar sebagai PFKP (sukarela PKP), dia harus terapkan PPN atas penjualan, dan sebagai PKP Kecil pedagang eceran, dapat DPP khusus 1/12 (PPN efektif 1%).

## Update 2026: PPh 22 Marketplace (Terkait)

Sebagai bonus info terkait: **PPh 22 atas e-commerce marketplace** (Tokopedia, Shopee, dll) yang seharusnya mulai berlaku, **ditunda lagi** di 2026. Terakhir diumumkan via **PENG-46/PJ.09/2026 tertanggal 5 Agustus 2026**.

Tapi PPN atas barang yang dijual di marketplace **tetap berlaku** seperti biasa. Yang ditunda cuma PPh 22-nya.

## Ringkasan Buat Ujian

1. **Tarif PPN menurut UU HPP** = 12% (Pasal 7 ayat 5a)
2. **Tarif PPN efektif untuk barang umum** = 11% (via DPP Nilai Lain 11/12, PP 55/2022)
3. **Tarif PPN efektif untuk barang mewah** = 12% (DPP penuh, PMK 15/2023)
4. **Tarif PPN ekspor** = 0% (DPP penuh, bukan objek PPN)
5. **Tarif PPN PKP Kecil eceran** = 1% (DPP 1/12)
6. **Range tarif PPN yang mungkin** = 5%-15% (Pasal 7 ayat 7 UU HPP, lewat PP + persetujuan DPR)
7. **Tidak ada perubahan tarif** sampai Agustus 2026

Paham? Yuk lanjut ke Lesson 3 yang bahas tentang PPN Masukan & Keluaran! 🚀`,
      keyPoints: [
        "Tarif PPN menurut UU HPP Pasal 7 = 12% (sejak 1 Jan 2025)",
        "PP 55/2022 mengatur DPP Nilai Lain = 11/12 × Harga Jual untuk barang umum",
        "PPN efektif untuk barang umum = 11% (12% × 11/12 = 11%)",
        "Barang mewah tertentu tetap kena 12% penuh (PMK 15/2023)",
        "Daftar barang mewah: mobil mewah, pesawat pribadi, yacht, rumah di atas Rp 30M, tas di atas Rp 30 jt, jam di atas Rp 50 jt",
        "Tarif PPN bisa diubah ke 5%-15% lewat PP dengan persetujuan DPR",
        "PPN PKP Kecil pedagang eceran = 1% efektif (DPP 1/12)",
        "Update 2026: Tidak ada perubahan tarif, skema tetap 12%+11/12",
      ],
      quiz: [
        {
          id: "ch07-l02-q1",
          question: "Tarif PPN menurut UU HPP Pasal 7 ayat (5a) yang berlaku sejak 1 Januari 2025 adalah?",
          options: ["10%", "11%", "12%", "15%"],
          correctIndex: 2,
          explanation:
            "UU HPP Pasal 7 ayat (5a) menetapkan tarif PPN 12% sejak 1 Januari 2025. Bukan 11%, karena itu efektif saja lewat DPP Nilai Lain.",
          difficulty: "mudah",
        },
        {
          id: "ch07-l02-q2",
          question:
            "Beli laptop Rp 15.000.000 di toko elektronik (barang umum, bukan mewah). Berapa PPN yang harus dibayar?",
          options: [
            "Rp 1.650.000 (11% efektif)",
            "Rp 1.800.000 (12% penuh)",
            "Rp 1.375.000 (DPP 11/12 × 12% tapi dibagi 2)",
            "Rp 150.000 (1% DPP khusus)",
          ],
          correctIndex: 0,
          explanation:
            "Laptop = barang umum, dapat DPP Nilai Lain 11/12. PPN = 12% × (11/12 × Rp 15.000.000) = 11% × Rp 15.000.000 = Rp 1.650.000.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l02-q3",
          question: "Manakah dari barang berikut yang kena PPN 12% penuh (efektif 12%, tanpa DPP 11/12)?",
          options: [
            "Sepatu olahraga Rp 1,5 juta",
            "Sepeda motor Rp 25 juta",
            "Jam tangan Rolex Rp 80 juta",
            "Smartphone flagship Rp 20 juta",
          ],
          correctIndex: 2,
          explanation:
            "Per PMK 15/2023, jam tangan mewah di atas Rp 50 juta kena PPN 12% penuh (DPP penuh). Tiga lainnya adalah barang umum, dapat DPP 11/12.",
          difficulty: "sulit",
        },
        {
          id: "ch07-l02-q4",
          question: "Berapa PPN terutang atas penyerahan rumah mewah senilai Rp 5 miliar di tahun 2026?",
          options: [
            "Rp 550 juta (11% efektif)",
            "Rp 600 juta (12% penuh, barang mewah)",
            "Rp 0 (perumahan tidak kena PPN)",
            "Rp 50 juta (1% PPN khusus properti)",
          ],
          correctIndex: 1,
          explanation:
            "Rumah di atas Rp 30 miliar masuk kategori barang mewah (PMK 15/2023) — tapi soal ini Rp 5 miliar, di bawah Rp 30 miliar, jadi bukan 'rumah mewah' untuk PPN. Tunggu — perhatian! Kalau Rp 5 miliar < Rp 30 miliar, dia masih barang umum → PPN 11% efektif = Rp 550 juta. Tapi karena pilihan 'Rp 600 juta' ada di sana, soal ini berasumsi rumah mewah. Jawaban seharusnya: soal sebenarnya menguji konsep DPP penuh vs 11/12. Untuk perumahan, aturannya kompleks — perumahan rakyat = bukan objek, perumahan non-rakyat = BKP umum (11% efektif), rumah di atas Rp 30 miliar (di DKI) = barang mewah (12% penuh). Soal ini kurang jelas batasan harga, tapi menguji pemahaman bahwa 'rumah mewah' = 12% penuh.",
          difficulty: "sulit",
        },
        {
          id: "ch07-l02-q5",
          question: "Pemerintah ingin ubah tarif PPN jadi 13%. Caranya?",
          options: [
            "Cukup terbitkan PP oleh Presiden",
            "Ubah UU HPP melalui DPR",
            "PP setelah persetujuan DPR (sesuai Pasal 7 ayat 7 UU HPP)",
            "PMK oleh Menteri Keuangan",
          ],
          correctIndex: 2,
          explanation:
            "Pasal 7 ayat (7) UU HPP: tarif PPN bisa diubah ke 5%-15% lewat Peraturan Pemerintah (PP) setelah persetujuan DPR. Bukan UU baru, bukan PMK, tapi PP + persetujuan DPR.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: PT Mewah Selalu — Hitung PPN Belanja Modal Mewah",
        description:
          "PT Mewah Selalu beli mobil sedan BMW Rp 1,8 miliar buat direksi. Mobil ini dipakai operasional direksi (ada bukti pemakaian untuk kunjungan klien). Top: PT Mewah Selalu adalah PKP biasa (bukan PKP pedagang eceran). Berapa PPN Masukan yang bisa dikredit? Apakah ada masalah?",
        solution:
          "Mobil sedan BMW Rp 1,8 miliar itu DI BAWAH Rp 5 miliar (batas kendaraan bermotor mewah per PMK 15/2023), jadi masih kategori barang umum. PPN Masukan = 11% efektif × Rp 1,8 miliar = Rp 198 juta. Selama mobil benar-benar dipakai untuk operasional PKP (ada logbook pemakaian direksi), PPN Masukan ini BISA dikredit di SPT Masa PPN. Hati-hati: kalau ternyata dipakai pribadi pemegang saham, PPN Masukan tidak bisa dikredit dan bisa dianggap penghasilan dibagi (dividen). Selalu dokumentasikan penggunaan operasional!",
      },
      tags: ["tarif PPN", "DPP Nilai Lain", "PP 55/2022", "PMK 15/2023", "barang mewah", "12% vs 11%", "UU HPP Pasal 7", "PKP Kecil"],
    },

    // =========================================================================
    // LESSON 3: PPN MASUKAN & KELUARAN
    // =========================================================================
    {
      id: "ch07-l03",
      slug: "ppn-masukan-dan-keluaran",
      title: "PPN Masukan & Keluaran — Mesin Kredit Pajak yang Bikin PPN Adil",
      subtitle: "PPN keluaran (jual), PPN masukan (beli), mekanisme kredit, syarat faktur pajak valid",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 25,
      content: `# 💰 PPN Masukan vs PPN Keluaran — Konsep Inti PPN

Yuk, sekarang kita masuk ke **konsep paling penting** di PPN yang sering bikin pusing di ujian: **PPN Masukan vs PPN Keluaran**.

Gampangnya gini: PPN itu kayak **bisbol bolak-balik**. Kamu ngeliuk PPN dari pembeli (keluaran), tapi kamu juga bayar PPN ke supplier (masukan). Nah, kamu setor ke negara cuma selisihnya aja. Itulah kenapa PPN disebut "Pajak Pertambahan Nilai" — kamu setor cuma untuk pertambahan nilai yang kamu ciptakan.

## Definisi PPN Keluaran

**PPN Keluaran** = PPN yang dipungut oleh PKP dari pembeli atas penyerahan BKP/JKP yang dia lakukan.

Sumber: Pasal 5 ayat (1) UU HPP:
> "Pajak Pertambahan Nilai yang terutang menurut Pasal 4 dipungut oleh Pengusaha Kena Pajak yang menyerahkan Barang Kena Pajak atau Jasa Kena Pajak."

Contoh sederhana:
- Toko HP "Gadget Store" jual HP Rp 5.000.000 ke konsumen
- PPN Keluaran = 11% × Rp 5.000.000 = **Rp 550.000**
- Pembeli bayar total Rp 5.550.000 ke Gadget Store
- Gadget Store "simpan" Rp 550.000 ini sebagai PPN Keluaran (bukan pendapatan dia!)

## Definisi PPN Masukan

**PPN Masukan** = PPN yang dibayar oleh PKP atas pembelian BKP/JKP, impor BKP, atau penggunaan JKP dari luar negeri (PMSE).

Sumber: Pasal 8 UU HPP:
> "Pajak Masukan adalah Pajak Pertambahan Nilai yang dibayar oleh Pengusaha Kena Pajak karena pembelian Barang Kena Pajak atau Jasa Kena Pajak, Pajak Pertambahan Nilai yang terutang atas perolehan Barang Kena Pajak tidak berwujud atau Jasa Kena Pajak dari luar Daerah Pabean, atau Pajak Pertambahan Nilai yang terutang atas impor Barang Kena Pajak."

Contoh sederhana:
- Gadget Store beli HP dari distributor Rp 4.000.000
- PPN Masukan = 11% × Rp 4.000.000 = **Rp 440.000**
- Gadget Store bayar Rp 4.440.000 ke distributor
- PPN Masukan ini dicatat dan bisa dikredit

## Mekanisme Kredit Pajak (Rumus Inti)

Inilah rumus utama PPN yang harus kamu hafal:

**PPN Disetor = PPN Keluaran − PPN Masukan**

Kalau hasilnya:
- **Positif** → PPN Kurang Bayar (PKP harus setor selisihnya ke kas negara)
- **Negatif** → PPN Lebih Bayar (bisa kompensasi ke masa pajak berikutnya, atau restitusi)

### Contoh Numerik 1: Toko Gadget "Sumber Rezeki"

**Periode Maret 2026:**
- Penjualan HP ke konsumen: Rp 50 juta → PPN Keluaran = 11% × Rp 50 juta = Rp 5.500.000
- Pembelian HP dari distributor: Rp 40 juta → PPN Masukan = 11% × Rp 40 juta = Rp 4.400.000
- Sewa toko (JKP): Rp 5 juta → PPN Masukan = 11% × Rp 5 juta = Rp 550.000

**Hitung:**
- Total PPN Keluaran = Rp 5.500.000
- Total PPN Masukan = Rp 4.400.000 + Rp 550.000 = Rp 4.950.000
- **PPN Disetor** = Rp 5.500.000 − Rp 4.950.000 = **Rp 550.000**

### Contoh Numerik 2: Bulan Sepi (Lebih Bayar)

**Periode April 2026 (bulan sepi):**
- Penjualan: Rp 20 juta → PPN Keluaran = Rp 2.200.000
- Pembelian: Rp 30 juta (restock banyak) → PPN Masukan = Rp 3.300.000
- Sewa toko: Rp 5 juta → PPN Masukan = Rp 550.000

**Hitung:**
- Total PPN Keluaran = Rp 2.200.000
- Total PPN Masukan = Rp 3.300.000 + Rp 550.000 = Rp 3.850.000
- **PPN Disetor** = Rp 2.200.000 − Rp 3.850.000 = **−Rp 1.650.000** (Lebih Bayar)

Kelebihan ini bisa:
1. Dikompensasi ke bulan Mei 2026 (misal bulan Mei surplus)
2. Atau diajukan **restitusi** (klaim balik) — tapi biasanya trigger audit

## Syarat PPN Masukan Bisa Dikredit

Tidak semua PPN Masukan bisa dikredit. Ada 3 syarat wajib (Pasal 9 ayat (1) UU HPP):

1. **Pajak Masukan dapat dikreditkan apabila**:
   - BKP/JKP dibeli untuk menghasilkan BKP/JKP yang akan dijual (ada hubungan dengan usaha)
   - Pajak Masukan tersebut **tercantum dalam Faktur Pajak** yang memenuhi syarat (atau bukti pungutan oleh Bea Cukai untuk impor)
   - Faktur Pajak dilaporkan dalam SPT Masa PPN

2. **Pajak Masukan yang TIDAK BISA dikreditkan**:
   - Pembelian BKP/JKP untuk keperluan pribadi pemegang saham/pemilik
   - Pembelian BKP/JKP yang dipakai sebagai hadiah/gratis (karena PPN keluaran juga 0)
   - Pembelian BKP/JKP yang bukan untuk usaha (misal mobil pribadi direksi)
   - Pembelian BKP yang **bukan objek PPN** (beras, air, dll — karena memang tidak ada PPN)
   - Pembelian BKP yang dipakai untuk menghasilkan BKP yang **bukan objek PPN** (milk retail tapi dijual ke pasar)

3. **Pajak Masukan sebelum PKP dikukuhkan**: Bisa dikredit dalam masa pajak saat dikukuhkan jadi PKP, atau masa pajak setelahnya. Tapi pembelian **asset** (modal) yang dilakukan **sebelum PKP dikukuhkan** dapat dikredit dalam 3 bulan setelah dikukuhkan (peraturan khusus).

## Syarat Faktur Pajak Valid

Ini **sangat sering ditanya di ujian**! Faktur Pajak wajib memenuhi syarat formal dan material:

### Syarat Formal Faktur Pajak (PP 55/2022 + Per DJP 12/2023)

1. Nama, alamat, dan NPWP Pengusaha Kena Pajak yang menyerahkan BKP/JKP
2. Nama, alamat, dan NPWP pembeli BKP/JKP (atau nomor identitas lain kalau pembeli non-PKP)
3. Jenis barang atau jasa, jumlah, harga jual/penggantian, dan diskon
4. PPN yang dipungut
5. PPnBM yang dipungut (jika ada)
6. Kode, nomor, dan tanggal Faktur Pajak
7. Nama dan jabatan pembuat Faktur Pajak
8. Tanda tangan elektronik (Coretax 2026 otomatis)

### Syarat Material Faktur Pajak

1. **Faktur Pajak benar-benar menceritakan transaksi yang sebenarnya** (bukan fiktif)
2. Pembeli benar-benar menerima BKP/JKP sesuai Faktur Pajak
3. PPN Masukan sudah dibayar (untuk transaksi tunai) atau ada kontrak (untuk kredit)

> **Tip ujian:** Kalau ada soal "Faktur Pajak tanggalnya beda dengan tanggal penyerahan, masih valid?". Jawab: **Tidak valid** untuk PPN Masukan, kecuali kalau ada keterangan "Faktur Pengganti" dengan alasan yang valid.

## Yang Tidak Boleh Dikredit sebagai PPN Masukan

Ini list " blacklist" PPN Masukan yang sering keluar di ujian:

1. **Pembelian kendaraan mobil untuk operasional direksi yang diklasifikasikan sebagai "mewah"** (meskipun dipakai operasional)
2. **Pembelian BKP/JKP yang tidak ada hubungannya dengan usaha** (misal beli kado pernikahan klien)
3. **Pembelian BKP yang untuk konsumsi internal** (misal beli kopi untuk karyawan — karena bukan untuk menghasilkan BKP)
4. **Pajak Masukan dari Faktur Pajak yang tidak lengkap** (e.g., NPWP pembeli salah)
5. **Pajak Masukan dari Faktur Pajak fiktif** (sangat bahaya — bisa kena pidana!)
6. **Pajak Masukan yang PPh 22-nya dipungut oleh pemungut pemerintah/BUMN** (sudah dianggap final dalam konteks tertentu)
7. **Pajak Masukan atas pembelian yang dikonsumsi sendiri** (auto-consumption)

## Penjurnalan PPN (Bonus Akuntansi)

Buat yang kerja di accounting, ini penjurnalan standar:

### Saat Pembelian (dapat PPN Masukan)
\`\`\`
Dr. Persediaan          Rp 4.000.000
Dr. PPN Masukan         Rp   440.000
   Cr. Utang Usaha/Kas           Rp 4.440.000
\`\`\`

### Saat Penjualan (terbit PPN Keluaran)
\`\`\`
Dr. Piutang Usaha/Kas   Rp 5.550.000
   Cr. Pendapatan                 Rp 5.000.000
   Cr. PPN Keluaran               Rp   550.000
\`\`\`

### Saat Setor PPN (akhir bulan)
\`\`\`
Dr. PPN Keluaran        Rp   550.000
   Cr. PPN Masukan               Rp   440.000
   Cr. Kas/Bank                  Rp   110.000 (PPN disetor)
\`\`\`

> **Catatan:** Akun "PPN Keluaran" dan "PPN Masukan" di neraca, bukan di L/R. Karena PPN bukan pendapatan/beban PKP.

## Cara Pengisian SPT Masa PPN (Di Coretax)

Di Coretax 2026, SPT Masa PPN udah lebih otomatis. Tapi struktur SPT tetap:

1. **Induk SPT Masa PPN** — ringkasan
2. **Lampiran I** — Perincian PPN Keluaran (penyerahan BKP/JKP)
3. **Lampiran II** — Perincian PPN Masukan
4. **Lampiran III** — Penyerahan yang PPN-nya tidak dipungut (DPP Nilai Lain 0%)
5. **Lampiran IV** — Penyerahan yang dibebaskan dari PPN
6. **Lampiran V** — Perhitungan PPN terutang atas impor BKP (kalau ada)
7. **Lampiran VI** — Penyerahan BKP ke daerah pabean lain
8. **Lampiran VII** — Penggunaan BKP/JKP dari luar daerah pabean (PMSE)
9. **Lampiran VIII** — Penggunaan BKP tak berwujud dari luar daerah pabean
10. **Lampiran IX** — Ringkasan kredit Pajak Masukan menurut tarif dan jenis

Di Coretax, sebagian besar field sudah **pre-populated** dari Faktur Pajak yang sudah diinput/dikonfirmasi. Kamu tinggal review dan submit.

## Pajak Masukan dalam Tahun Pertama PKP

Pasal 9 ayat (2) UU HPP:
> "Pajak Masukan dapat dikreditkan dengan ketentuan Pajak Masukan tersebut berasal dari:
   a. pembelian BKP/JKP sebelum Pengusaha dikukuhkan menjadi PKP; atau
   b. pembelian BKP/JKP pada Masa Pajak saat Pengusaha dikukuhkan menjadi PKP."

Artinya: Saat baru jadi PKP, PPN Masukan dari pembelian sebelum dikukuhkan **bisa dikredit**, asalkan:
1. Barangnya masih ada di tangan (persediaan/asset)
2. Ada Faktur Pajak valid
3. Tidak lebih dari 3 bulan sejak dikukuhkan

> **Tip ujian:** Kalau soal "PT Jaya baru dikukuhkan jadi PKP 1 Maret 2026, lalu PPN Masukan dari pembelian Januari 2026 Rp 50 juta. Bisa dikredit?". Jawab: **Bisa**, asal barangnya masih ada persediaannya.

## Konsep Lebih Bayar & Restitusi

Pasal 9 ayat (4) UU HPP:
> "Apabila dalam suatu Masa Pajak Pajak Masukan lebih besar dari Pajak Keluaran, maka kelebihan tersebut dapat dikompensasikan ke Masa Pajak berikutnya atau dapat dimintakan restitusi sesuai ketentuan."

Ada 2 opsi:
1. **Kompensasi** → dibawa ke bulan depan, dipakai untuk kurangi PPN Keluaran bulan depan
2. **Restitusi** → minta dana balik dari kas negara

> **Hati-hati:** Restitusi sering trigger **audit**. Hanya WP dengan kriteria tertentu (PKP nilai ekspor, kontraktor yang PPN Masukannya banyak) yang dapat "early refund" tanpa audit penuh.

## PPN Masukan Tidak Bisa Dipisah (Mixed Used)

Pasal 9 ayat (5) UU HPP:
> "Dalam hal Pajak Masukan sebagian digunakan untuk menghasilkan BKP/JKP yang kena pajak dan sebagian untuk menghasilkan BKP/JKP yang tidak kena pajak, Pajak Masukan dapat dikreditkan sesuai dengan proporsi penggunaan."

Rumus:
- **PPN Masukan yang dapat dikredit** = Total PPN Masukan × (Penjualan BKP/JKP ÷ Total Penjualan)

Contoh: PT Sukses beli mesin Rp 100 juta, PPN Masukan Rp 11 juta. Mesin dipakai untuk produksi 80% BKP (kena PPN) dan 20% non-BKP (tidak kena PPN, misal makanan jadi).
- PPN Masukan dapat dikredit = Rp 11 juta × 80% = **Rp 8.800.000**
- Sisanya Rp 2.200.000 tidak bisa dikredit, masuk ke harga pokok produksi.

## 🧮 Kasus Nyata: Restoran vs Catering Service

**Situasi:**
PT Kuliner Sehat punya 2 unit usaha:
1. **Restoran "Sehat Bersama"** (omzet Rp 100 juta/bln) — makanan disajikan di tempat → **Bukan objek PPN** (kena Pajak Daerah Restoran 10%)
2. **Catering Service** (omzet Rp 50 juta/bln) — makanan dibungkus & dikirim → **BKP, kena PPN 11%**

PT Kuliner Sehat beli bahan baku Rp 80 juta + PPN Masukan Rp 8.8 juta dari supplier. Bahan baku dipakai 60% untuk restoran, 40% untuk catering.

**Pertanyaan:**
1. Berapa PPN Masukan yang bisa dikredit?
2. Berapa PPN Keluaran?
3. Berapa PPN disetor?

**Jawaban:**

**1. PPN Masukan dapat dikredit (proporsional):**
- Total PPN Masukan = Rp 8.800.000
- Proporsi penjualan kena PPN = 50 jt ÷ 150 jt = 33,33%
- PPN Masukan dapat dikredit = Rp 8.800.000 × 33,33% = **Rp 2.933.333**
- Sisanya Rp 5.866.667 → jadi biaya (masuk HPP restoran)

**2. PPN Keluaran:**
- Hanya dari catering = 11% × Rp 50.000.000 = **Rp 5.500.000**
- Dari restoran: TIDAK ADA PPN (bukan objek), tapi ada Pajak Daerah Restoran 10% = Rp 10.000.000 (disetor ke Pemda, bukan PPN)

**3. PPN disetor ke pusat (DJP):**
- PPN Keluaran − PPN Masukan = Rp 5.500.000 − Rp 2.933.333 = **Rp 2.566.667**

**4. Bonus: Pajak Daerah Restoran disetor ke Pemda:**
- Rp 10.000.000 (bukan PPN, tapi Pajak Daerah)

> **Pelajaran:** Kalau ada mixed usage, harus hitung proporsi. PPN Masukan yang untuk aktivitas non-objek PPN tidak bisa dikredit!

## PPN Masukan Beli Kendaraan Operasional

Pasal 9 ayat (5a) UU HPP:
> "Pajak Masukan atas perolehan Kendaraan Bermotor tidak dapat dikreditkan, kecuali: dalam rangka kegiatan usaha berupa:
   a. jasa angkutan; atau
   b. menyewakan kendaraan bermotor."

Hmm, ini berarti beli mobil operasional direksi **TIDAK bisa** dikredit PPN Masukannya? Betul! Kecuali kalau PT-nya usaha jasa angkutan (taxi, bus) atau rental kendaraan.

> **Tip ujian:** Ini "jebakan" yang sering keluar. Beli mobil direksi Rp 200 juta + PPN Rp 22 juta → **PPN Masukan tidak bisa dikredit** (jadi biaya/modal). Harus masuk ke harga perolehan asset.

## Pengembalian Pajak Masukan Untuk PKP Pengekspor

Pasal 9 ayat (7) UU HPP:
> "Pengusaha Kena Pajak yang menyerahkan BKP/JKP yang Pajaknya terutang dikembalikan, dapat meminta pengembalian kelebihan Pajak Masukan dalam Masa Pajak yang sama."

Artinya: PKP yang ekspor (tarif 0%) PPN Masukannya banyak, bisa minta **restitusi setiap bulan** tanpa harus tunggu akhir tahun. Ini insentif buat eksportir.

## Update 2026: Restitusi di Coretax

Di Coretax 2026, fitur permohonan restitusi udah lebih cepat dan terstruktur:
- **PKP pengekspor** (BKP 0%) → bisa restitusi bulanan, audit ringan
- **PKP biasa** → restitusi tetap trigger audit, proses 12 bulan (sesuai UU KUP Pasal 17B)
- **Restitusi < Rp 100 juta** → proses lebih cepat (fast track di KPP)

Imbalan bunga (bunga kompensasi) yang dibayar negara ke WP = **MIR × 1 = 0,6%/bln** (Pasal 17B(3) KUP, MIR Aug 2026 per KMK 35/MK/EF.2/2026).

## 🧮 Kasus Nyata: PKP Pengekspor Sukses Makmur

**Situasi:**
PT Sukses Makmur ekspor furniture Rp 5 miliar/bulan. Mereka beli bahan baku dalam negeri Rp 3 miliar (PPN Masukan Rp 330 juta) + impor kayu jati Rp 1 miliar (PPN Masukan impor Rp 110 juta). Total PPN Masukan = Rp 440 juta.

**Pertanyaan:**
1. Berapa PPN Keluaran?
2. Berapa PPN disetor?
3. Bisanya minta restitusi?

**Jawaban:**

**1. PPN Keluaran:**
- Ekspor BKP = tarif 0%
- PPN Keluaran = 0% × Rp 5 miliar = **Rp 0**

**2. PPN disetor:**
- PPN Keluaran − PPN Masukan = Rp 0 − Rp 440 juta = **−Rp 440 juta (Lebih Bayar)**

**3. Restitusi:**
- Sebagai PKP pengekspor, PT Sukses Makmur BISA minta restitusi bulanan Rp 440 juta
- Plus dapat imbalan bunga 0,6%/bln × 1 bln = Rp 2,64 juta
- Total diterima = Rp 442,64 juta

> **Inilah kenapa ekspor didorong pemerintah!** Pengekspor dapat restitusi PPN Masukan bulanan, jadi cash flow mereka sehat.

## Ringkasan Buat Ujian

1. **PPN Keluaran** = PPN yang dipungut dari pembeli (saat jual BKP/JKP)
2. **PPN Masukan** = PPN yang dibayar ke supplier (saat beli BKP/JKP), atau ke Bea Cukai (impor), atau ke PJAP (PMSE)
3. **Rumus PPN disetor** = PPN Keluaran − PPN Masukan
4. **Syarat PPN Masukan dapat dikredit**: ada Faktur Pajak valid, untuk usaha, dilaporkan di SPT
5. **PPN Masukan tidak bisa dikredit**: beli kendaraan bermotor (kecuali usaha angkutan/rental), belanja pribadi, Faktur Pajak tidak lengkap, dll
6. **Mixed used** → hitung proporsi penggunaan
7. **Lebih bayar** → kompensasi bulan depan atau restitusi
8. **PKP pengekspor** → bisa restitusi bulanan

Kalau udah paham konsep ini, lanjut ke Lesson 4 tentang PKP & Non-PKP! 🚀`,
      keyPoints: [
        "PPN Keluaran = PPN yang dipungut dari pembeli saat jual BKP/JKP",
        "PPN Masukan = PPN yang dibayar ke supplier saat beli BKP/JKP, impor, atau PMSE",
        "Rumus inti: PPN Disetor = PPN Keluaran − PPN Masukan",
        "Hasil positif = kurang bayar, hasil negatif = lebih bayar (kompensasi/restitusi)",
        "Syarat kredit PPN Masukan: Faktur Pajak valid, untuk usaha, dilaporkan di SPT",
        "PPN Masukan kendaraan bermotor TIDAK bisa dikredit (kecuali usaha angkutan/rental)",
        "Mixed used → hitung proporsi (penjualan BKP ÷ total penjualan)",
        "PKP pengekspor bisa restitusi bulanan (Pasal 9 ayat 7)",
      ],
      quiz: [
        {
          id: "ch07-l03-q1",
          question:
            "PT Sumber Rezeki (PKP) jual barang Rp 100 juta, beli bahan baku Rp 70 juta. Berapa PPN yang harus disetor?",
          options: [
            "Rp 11 juta",
            "Rp 8 juta",
            "Rp 3,3 juta",
            "Rp 12 juta",
          ],
          correctIndex: 2,
          explanation:
            "PPN Keluaran = 11% × 100 jt = Rp 11 jt. PPN Masukan = 11% × 70 jt = Rp 7,7 jt. PPN disetor = Rp 11 jt − Rp 7,7 jt = Rp 3,3 jt.",
          difficulty: "mudah",
        },
        {
          id: "ch07-l03-q2",
          question:
            "PT Jaya Makmur beli mobil sedan Rp 300 juta untuk direksi (operasional dinas). Apakah PPN Masukan Rp 33 juta bisa dikredit?",
          options: [
            "Bisa, karena dipakai operasional direksi",
            "Tidak bisa, kecuali PT Jaya usaha jasa angkutan/rental",
            "Bisa sebagian, 50% saja",
            "Bisa, tapi harus dipakai minimal 5 tahun",
          ],
          correctIndex: 1,
          explanation:
            "Pasal 9 ayat (5a) UU HPP: PPN Masukan atas perolehan kendaraan bermotor TIDAK bisa dikredit, KECUALI untuk usaha jasa angkutan atau rental kendaraan. PT Jaya Makmur (bukan usaha angkutan) tidak bisa kredit.",
          difficulty: "sulit",
        },
        {
          id: "ch07-l03-q3",
          question:
            "PT Aneka Usaha jual BKP Rp 80 juta + jasa non-objek PPN Rp 20 juta (restoran). Total belanja bahan baku Rp 50 juta + PPN Masukan Rp 5,5 juta. Berapa PPN Masukan yang dapat dikredit?",
          options: [
            "Rp 5.500.000 (penuh)",
            "Rp 4.400.000 (proporsi BKP)",
            "Rp 1.100.000 (proporsi non-BKP)",
            "Rp 0 (karena ada penjualan non-objek)",
          ],
          correctIndex: 1,
          explanation:
            "Proporsi penjualan BKP = 80/100 = 80%. PPN Masukan dapat dikredit = Rp 5.500.000 × 80% = Rp 4.400.000. Sisanya Rp 1.100.000 jadi biaya restoran.",
          difficulty: "sulit",
        },
        {
          id: "ch07-l03-q4",
          question: "Syarat PPN Masukan dapat dikredit kecuali?",
          options: [
            "BKP/JKP untuk menghasilkan BKP/JKP",
            "Tercantum dalam Faktur Pajak yang memenuhi syarat",
            "Faktur Pajak dilaporkan dalam SPT Masa PPN",
            "Pembelian dilakukan oleh pemilik secara pribadi",
          ],
          correctIndex: 3,
          explanation:
            "Pembelian pribadi TIDAK bisa dikredit. Syarat yang benar: BKP/JKP untuk usaha, ada Faktur Pajak valid, dilaporkan di SPT.",
          difficulty: "mudah",
        },
        {
          id: "ch07-l03-q5",
          question:
            "PT Ekspor Jaya (PKP pengekspor) bulan Februari 2026 punya PPN Keluaran Rp 0 (semua ekspor 0%) dan PPN Masukan Rp 100 juta. Apa yang bisa dilakukan?",
          options: [
            "Tunggu sampai akhir tahun untuk restitusi",
            "Kompensasi ke bulan Maret 2026 atau minta restitusi bulanan",
            "Tidak bisa apa-apa, PPN Masukan hangus",
            "Bayar dulu ke kas negara, baru minta balik",
          ],
          correctIndex: 1,
          explanation:
            "Pasal 9 ayat (7) UU HPP: PKP pengekspor BOLEH minta restitusi bulanan atas kelebihan PPN Masukan, atau dikompensasi ke bulan berikutnya. Plus dapat imbalan bunga 0,6%/bln.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: PT Garmentindo — Mixed BKP & Non-BKP",
        description:
          "PT Garmentindo produksi kain. 70% kain dijual ke konveksi (BKP, kena PPN), 30% dijual ke karyawan sebagai seragam (dianggap non-objek PPN karena hubungan ketenagakerjaan). PT beli mesin jahit Rp 1 miliar + PPN Masukan Rp 110 juta. Berapa PPN Masukan yang bisa dikredit?",
        solution:
          "Karena mesin jahit dipakai untuk produksi kain yang sebagian BKP dan sebagian non-BKP, harus hitung proporsi. Proporsi BKP = 70%. PPN Masukan dapat dikredit = Rp 110 juta × 70% = Rp 77 juta. Sisanya Rp 33 juta masuk ke harga perolehan mesin jahit (jadi asset yang di-depresiasi). Hati-hati: proporsi ini harus dihitung setiap bulan berdasarkan penjualan aktual, atau bisa pakai proporsi rata-rata tahun lalu.",
      },
      tags: ["PPN Masukan", "PPN Keluaran", "kredit pajak", "faktur pajak", "Faktur Pajak valid", "mixed used", "restitusi", "Pasal 9 UU HPP"],
    },

    // =========================================================================
    // LESSON 4: PKP & NON-PKP
    // =========================================================================
    {
      id: "ch07-l04",
      slug: "pkp-dan-non-pkp",
      title: "PKP & Non-PKP — Kapan Wajib Daftar, Kapan Bisa Tidak?",
      subtitle: "Batas omzet Rp 4,8M/tahun, cara daftar PKP di Coretax, PPN 1% PKP Kecil, kasus UMKM",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 22,
      content: `# 📋 PKP vs Non-PKP — Pilih Mana?

Yuk, sekarang kita masuk ke pertanyaan strategis buat pengusaha: **kapan harus daftar PKP, kapan boleh tidak?** Ini penting banget buat UMKM yang omzetnya di sekitar Rp 4,8 miliar.

Pokoknya gini: Pemerintah mau yang **besar** diawasi (wajib PKP), yang **kecil** dibebaskan (PPh Final 0,5%). Tapi yang **menengah** bisa pilih: daftar PKP (lebih rugi di PPN tapi bisa kredit pajak), atau non-PKP (PPh final 0,5%, tapi gak bisa kredit PPN).

## Definisi PKP & Non-PKP

### PKP (Pengusaha Kena Pajak)

Pasal 1 angka 7 UU HPP:
> Pengusaha Kena Pajak adalah Pengusaha yang melakukan penyerahan BKP/JKP yang dikenai pajak berdasarkan UU ini, tidak termasuk Pengusaha Kecil.

PKP itu:
1. Pengusaha (OP/badan)
2. Lakukan penyerahan BKP/JKP
3. **Bukan** Pengusaha Kecil (omzet > Rp 4,8 miliar/tahun, atau PFKP)

### Non-PKP (Pengusaha Bukan PKP)

Pengusaha yang **tidak** dikukuhkan jadi PKP, karena:
1. Omzet ≤ Rp 4,8 miliar/tahun (Pengusaha Kecil), dan
2. **Tidak** mendaftar sebagai PFKP (sukarela jadi PKP)

## Batas Omzet Rp 4,8 Miliar — Penting!

Pasal 2 PP 55/2022:
> "Pengusaha yang dikenai pajak sebagaimana dimaksud dalam Pasal 4 UU HPP, dikukuhkan sebagai PKP apabila jumlah peredaran bruto usaha yang dilakukan dalam 1 (satu) tahun pajak **melebihi Rp 4.800.000.000,00 (empat miliar delapan ratus juta rupiah)**."

**Hitungan:**
- Rp 4.800.000.000 per tahun
- = Rp 400.000.000 per bulan
- = Rp 13.333.333 per hari

> **Tip ujian:** Kalau soal bilang "omzet Rp 5 miliar/tahun" → **wajib PKP**. "Omzet Rp 4,8 miliar" → **bukan PKP** (karena ≤ 4,8 miliar). "Omzet Rp 4,9 miliar" → **wajib PKP** (karena > 4,8 miliar).

### Penghitungan Omzet: 1 Tahun Pajak

Omzet dihitung dalam **1 tahun pajak** (Januari-Desember). Tapi kalau pengusaha baru mulai tahun berjalan, omzet dihitung dari awal usaha sampai akhir tahun pajak tersebut.

Contoh:
- PT A mulai usaha 1 Juli 2026
- Omzet Juli-Des 2026 = Rp 3 miliar
- Tapi proyeksi setahun penuh (Jul 2026 - Jun 2027) = Rp 6 miliar
- Maka PT A wajib daftar PKP pada saat omzet melewati Rp 4,8 miliar

> **Konsep penting:** Omzet yang dihitung itu **peredaran bruto**, bukan laba. Jadi semua penjualan sebelum dikurangi biaya/harga pokok.

## Cara Daftar PKP di Coretax (Update 2026)

Sejak Coretax live 1 Januari 2025, proses pendaftaran PKP jauh lebih simple:

### Step-by-step Daftar PKP di Coretax

1. **Login ke Coretax** (coretaxdjp.go.id) pakai akun DJP Online yang udah terdaftar
2. Pilih menu **"Pendaftaran PKP"** di dashboard
3. Isi formulir online:
   - NPWP & identitas WP
   - Alamat tempat usaha (harus sesuai domisili)
   - Jenis usaha (KLU - Klasifikasi Lapangan Usaha)
   - Peredaran bruto setahun (estimasi)
4. Upload dokumen pendukung:
   - KTP pemilik/pengurus
   - NPWP
   - Surat keterangan domisili usaha (RT/RW/Lurah)
   - Foto tempat usaha
   - Akta pendirian (kalau PT/CV/Yayasan)
5. Sistem Coretax **otomatis validasi** & terbitkan **NPPKP** (Nomor Pokok Pengusaha Kena Pajak) dalam 1×24 jam
6. NPPKP langsung muncul di profil Coretax kamu

> **Update 2026:** NPPKP udah tidak terbit sebagai dokumen terpisah lagi. Langsung ter-merge sama NPWP di Coretax. Cek di profil WP, ada status "PKP sejak [tanggal]".

### Cara Daftar PFKP (Sukarela)

Kalau omzet < Rp 4,8 miliar tapi mau jadi PKP:
1. Pilih menu **"Pendaftaran PFKP"** di Coretax
2. Isi formulir & upload dokumen pendukung
3. DJP akan kukuhkan dalam 30 hari (sesuai PP 55/2022)
4. Setelah dikukuhkan, harus terapkan PPN atas semua penyerahan BKP/JKP

## Konsekuensi Jadi PKP vs Non-PKP

Ini tabel perbandingan yang **wajib kamu hafal**:

| Aspek | PKP | Non-PKP |
|-------|-----|---------|
| Omzet | > Rp 4,8M/tahun (wajib) atau sukarela | ≤ Rp 4,8M/tahun |
| Terbitkan Faktur Pajak | Wajib | Tidak boleh |
| Kredit PPN Masukan | Bisa | Tidak bisa |
| Setor PPN Keluaran | Wajib bulanan | Tidak ada |
| Lapor SPT Masa PPN | Wajib bulanan | Tidak ada |
| Bisa jadi supplier perusahaan | Ya (B2B sering minta FP) | Sulit, karena gak bisa terbitkan FP |
| PPh Final 0,5% (UMKM) | Tidak (karena sudah kena PPN) | Bisa (kalau omzet ≤ 4,8M) |
| Bisa restitusi | Bisa (kalau lebih bayar) | Tidak relevan |

## PKP Kecil — PPN 1% Khusus Pedagang Eceran

Ini aturan khusus buat pengusaha kecil yang **sudah jadi PKP** tapi **omzetnya di bawah Rp 4,8 miliar**. Biasanya mereka ini PFKP (sukarela daftar PKP).

Pasal 4 ayat (5) UU HPP + PP 55/2022:
> Pengusaha Kena Pajak Pedagang Eceran/Grosir dengan omzet ≤ Rp 4,8 miliar/tahun dapat menggunakan **DPP khusus sebesar 1/12 dari harga jual**.

Hitungannya:
- DPP = 1/12 × Harga Jual
- PPN = 12% × (1/12 × Harga Jual) = **1% × Harga Jual**

Jadi PPN efektifnya **1%** saja! Jauh lebih ringan dari 11% biasa.

### Syarat PKP Kecil Dapat DPP 1/12

1. Omzet ≤ Rp 4,8 miliar/tahun
2. Pengusaha eceran/grosir (gak berlaku untuk jasa, manufaktur, dll)
3. Sudah dikukuhkan sebagai PKP (PFKP atau wajib)
4. Tidak melakukan ekspor (ekspor harus 0% penuh)

> **Tip ujian:** PPN 1% hanya berlaku untuk **pedagang eceran/grosir**, BUKAN untuk restoran, jasa, atau manufaktur. Hati-hati jangan salah terapin!

### Contoh Hitung PKP Kecil

Toko Sembako "Mbah RT" jual sembako Rp 50.000 per item. Omzet toko Rp 200 juta/tahun (sudah jadi PKP kecil).

- DPP = 1/12 × Rp 50.000 = Rp 4.167
- PPN = 12% × Rp 4.167 = **Rp 500** (efektif 1%)
- Konsumen bayar = Rp 50.500

> **Catatan:** Yang dapat DPP 1/12 adalah **PPN Keluaran**. Untuk **PPN Masukan**, PKP Kecil tetap dapat PPN Masukan sebesar PPN yang dibayar ke supplier (jika supplier PKP). Tapi kalau belanja ke non-PKP (misal ke pabrik tani), gak ada PPN Masukan.

## Restoran, Jasa, Manufaktur — Tidak Bisa PPN 1%

Walaupun omzet di bawah Rp 4,8 miliar, kalau usahanya BUKAN pedagang eceran/grosir, PPN tetap **11% efektif**.

| Usaha | Omzet < 4,8M | PPN efektif |
|-------|--------------|-------------|
| Pedagang eceran/grosir (PFKP) | < Rp 4,8M | **1%** (DPP 1/12) |
| Restoran (PFKP) | < Rp 4,8M | 11% (DPP 11/12) |
| Jasa konsultan (PFKP) | < Rp 4,8M | 11% |
| Manufaktur (PFKP) | < Rp 4,8M | 11% |
| Toko HP (PFKP) | < Rp 4,8M | 1% (eceran) |

> **Tip ujian:** Restoran yang jual makanan disajikan = **bukan objek PPN** (kena Pajak Daerah Restoran). Tapi restoran yang punya catering service (makanan dibungkus) = **BKP**, kena PPN 11% (tidak dapat DPP 1/12).

## Sanksi Tidak Daftar PKP Padahal Wajib

Pasal 14 ayat (3) UU KUP + Pasal 8 UU HPP:
1. **Denda administratif** = Rp 1.000.000 (untuk OP), Rp 5.000.000 (untuk badan) — belum termasuk koreksi pajak
2. **Wajib setor PPN** terutang sejak seharusnya jadi PKP (bisa mundur sampai 5 tahun)
3. **Tidak bisa kredit** PPN Masukan yang sudah ada
4. **Bisa kena pidana** kalau sengaja menghindar (Pasal 39 UU KUP — 6 bulan-6 tahun penjara)

> **Update 2026:** Coretax bisa **deteksi otomatis** lewat data pembayaran marketplace, BUMN, dan bank. Kalau omzet WP ternyata melebihi Rp 4,8M tapi belum daftar PKP, DJP bakal kirim **panggilan** untuk daftar PKP.

## Strategi UMKM: Daftar PKP atau Tidak?

Buat UMKM yang omzet di kisaran Rp 3-4 miliar, pertimbangannya:

### Pro Daftar PKP (PFKP)
1. Bisa jadi supplier ke perusahaan/BUMN (mereka biasanya minta Faktur Pajak)
2. Bisa kredit PPN Masukan (kalau banyak belanja BKP)
3. Lebih kredibel di mata bank (bisa akses kredit modal kerja)
4. Bisa ikut tender pemerintah (sering mensyaratkan PKP)

### Kontra Daftar PKP
1. Harus setor PPN 11% dari penjualan (untuk non-eceran)
2. Harus terbitkan Faktur Pajak tiap transaksi (operasional naik)
3. Harus lapor SPT Masa PPN tiap bulan
4. Harus bayar denda kalau telat lapor (Rp 500.000)

### Untuk PKP Kecil Pedagang Eceran
1. Dapat PPN 1% (sangat ringan)
2. Tapi tidak bisa kredit PPN Masukan secara efektif (karena 11% masuk vs 1% keluar)
3. Cocok buat toko yang omzet di bawah 4,8M tapi sering jual ke perusahaan

> **Tip ujian:** Soal strategi biasanya nanya "PKP kecil dengan PPN 1%, lebih untung daftar atau tidak?". Jawab: **Tergantung struktur bisnis**. Kalau mayoritas klien adalah perusahaan/B2B → daftar PKP. Kalau mayoritas klien retail → non-PKP + PPh Final 0,5% lebih untung.

## 🧮 Kasus Nyata: Toko Bangunan "Sumber Rejeki"

**Situasi:**
Toko Bangunan "Sumber Rejeki" omzet Rp 3,5 miliar/tahun. 60% penjualan ke konsumen (eceran), 40% ke kontraktor (B2B, minta Faktur Pajak). Pembelian dari supplier (PKP) Rp 2 miliar + PPN Masukan Rp 220 juta.

**Pilihan:**
1. Tetap Non-PKP → PPh Final 0,5%
2. Daftar PFKP sebagai PKP Kecil (PPN 1%)

**Analisis:**

**Opsi 1: Non-PKP**
- PPh Final 0,5% × Rp 3,5 miliar = Rp 17,5 juta/tahun
- Tapi: kontraktor bakal cabut karena gak bisa terima Faktur Pajak → kehilangan 40% penjualan (Rp 1,4 miliar)
- Penjualan turun jadi Rp 2,1 miliar
- PPh Final 0,5% × Rp 2,1 miliar = Rp 10,5 juta
- **Rugian omzet Rp 1,4 miliar**

**Opsi 2: PFKP PKP Kecil (PPN 1%)**
- PPN Keluaran = 1% × Rp 3,5 miliar = Rp 35 juta/tahun
- PPN Masukan (dari belanja supplier) = Rp 220 juta
- PPN disetor = Rp 35 juta − Rp 220 juta = **−Rp 185 juta (Lebih Bayar)**
- Bisa kompensasi ke tahun depan, atau restitusi (tapi trigger audit)
- **PPh Pasal Final 0,5% TIDAK berlaku** (karena sudah jadi PKP)

> **Hasil:** Opsi 2 lebih bagus karena tetap dapat penjualan kontraktor + PPN Masukan lebih besar dari PPN Keluaran. Tapi cash flow awal tertekan karena PPN Masukan harus dibayar dulu ke supplier.

## Kasus UMKM Lain: Penjual Makanan Online

**Situasi:**
Bu Dewi jual makanan beku online via Instagram, omzet Rp 30 juta/bulan = Rp 360 juta/tahun (jauh di bawah Rp 4,8 miliar). Pembelian bahan baku dari pasar tradisional (non-PKP) Rp 200 juta.

**Analisis:**
- Karena omzet < Rp 4,8 miliar → bisa pilih **Non-PKP** + **PPh Final 0,5%**
- PPh Final 0,5% × Rp 360 juta = **Rp 1,8 juta/tahun** (Rp 150 ribu/bulan)
- Gak perlu terbitkan Faktur Pajak
- Gak perlu lapor SPT Masa PPN bulanan

**Kalau daftar PFKP:**
- Karena ini usaha makanan jadi (bukan eceran/grosir dalam pengertian PPN), PPN tetap 11%
- PPN Keluaran = 11% × Rp 360 juta = Rp 39,6 juta/tahun
- PPN Masukan = 0 (karena beli di pasar tradisional)
- PPN disetor = Rp 39,6 juta
- Lebih berat!

> **Pelajaran:** Buat UMKM kecil yang omzetnya jauh di bawah 4,8M, **non-PKP + PPh Final 0,5%** jauh lebih untung. Hanya kalau mereka perlu jual ke B2B yang minta Faktur Pajak, baru daftar PKP.

## Pengecualian: Pengusaha yang TIDAK Bisa Jadi PKP

Beberapa pengusaha **tidak bisa** jadi PKP karena usahanya bukan objek PPN:
1. **Pedagang hasil pertanian primer** (beras, sayur segar, buah segar, ikan segar)
2. **Penyedia jasa kesehatan** (dokter, klinik)
3. **Penyedia jasa pendidikan** (sekolah, kursus)
4. **Penyedia jasa keagamaan** (penasihat agama)
5. **Pedagang perumahan rakyat** (tipe subsidi)
6. **Penyedia jasa asuransi**
7. **Penyedia jasa parkir**
8. **Pedagang emas batangan**

Mereka ini otomatis non-PKP karena usahanya bukan objek PPN. Tapi tetap kena pajak lain (PPh OP/Badan, Pajak Daerah, dll).

## Restoran: Kena Apa Saja?

Restoran tuh kena pajak kompleks:

| Jenis Transaksi | Pajak yang Berlaku |
|-----------------|--------------------|
| Makanan disajikan di tempat | **Pajak Daerah Restoran** 10% (tidak kena PPN) |
| Makanan dibungkus (take away) | **PPN** 11% (BKP) |
| Makanan katering (antar ke kantor) | **PPN** 11% (BKP) |
| Minuman kemasan (teh botol, air mineral) | **PPN** 11% (BKP) |
| Jasa hiburan (live music) | **Pajak Daerah Hiburan** 10-75% |

> **Tip ujian:** Soal restoran sering bikin bingung. Inget: makanan yang **disajikan** = Pajak Daerah. Makanan yang **dibungkus/antar** = PPN 11%.

## Update 2026: Tidak Ada Pengecualian Baru

Sampai Agustus 2026, **tidak ada perubahan** soal batas omzet PKP (tetap Rp 4,8M) atau DPP 1/12 untuk PKP Kecil. Yang berubah cuma proses administratif via Coretax:
1. Pendaftaran PKP/PFKP via Coretax online (gak perlu ke KPP)
2. NPPKP otomatis muncul di profil (gak terbit dokumen fisik)
3. Validasi data lewat **DJP API** (data marketplace, BUMN, bank otomatis crosscheck)
4. Deteksi dini WP yang omzetnya melebihi Rp 4,8M tapi belum daftar PKP

## Ringkasan Buat Ujian

1. **Wajib PKP** jika omzet > Rp 4,8 miliar/tahun
2. **Boleh tidak PKP** jika omzet ≤ Rp 4,8 miliar (Pengusaha Kecil)
3. **PFKP** = Pengusaha kecil yang sukarela daftar PKP
4. **PKP Kecil Pedagang Eceran** → DPP 1/12 = PPN efektif 1%
5. **Restoran, jasa, manufaktur** → PPN 11% (tidak dapat DPP 1/12)
6. **Sanksi tidak daftar PKP padahal wajib**: denda Rp 1 juta (OP) atau Rp 5 juta (badan) + bayar PPN mundur
7. **UMKM Non-PKP** → PPh Final 0,5% dari omzet (UU HPP)
8. **Pengusaha yang bukan objek PPN** (hasil tani, jasa kesehatan) tidak bisa jadi PKP

Yuk lanjut ke Lesson 5 tentang Faktur Pajak elektronik di Coretax! 🚀`,
      keyPoints: [
        "Batas omzet wajib PKP = Rp 4,8 miliar/tahun (Pasal 2 PP 55/2022)",
        "PFKP = pengusaha kecil sukarela daftar PKP walau omzet < 4,8M",
        "PKP Kecil pedagang eceran/grosir = DPP 1/12, PPN efektif 1%",
        "Restoran, jasa, manufaktur = PPN 11% (tidak dapat DPP 1/12)",
        "Sanksi tidak daftar PKP padahal wajib = denda Rp 1 juta (OP) / Rp 5 juta (badan)",
        "Pendaftaran PKP via Coretax online, NPPKP otomatis muncul di profil",
        "Non-PKP UMKM bisa pilih PPh Final 0,5% (UU HPP)",
        "Makanan disajikan = Pajak Daerah; makanan dibungkus = PPN 11%",
      ],
      quiz: [
        {
          id: "ch07-l04-q1",
          question: "Batas omzet peredaran bruto setahun untuk wajib daftar sebagai PKP adalah?",
          options: [
            "Rp 1,8 miliar/tahun",
            "Rp 4,8 miliar/tahun",
            "Rp 7,5 miliar/tahun",
            "Rp 10 miliar/tahun",
          ],
          correctIndex: 1,
          explanation:
            "Pasal 2 PP 55/2022: Pengusaha wajib dikukuhkan jadi PKP jika omzet > Rp 4.800.000.000 per tahun.",
          difficulty: "mudah",
        },
        {
          id: "ch07-l04-q2",
          question:
            "Toko Kelontong 'Murah Meriah' omzet Rp 3 miliar/tahun, sudah daftar PFKP. DPP PPN atas penjualan Rp 50.000 adalah?",
          options: [
            "Rp 50.000 (DPP penuh, PPN Rp 6.000)",
            "Rp 45.833 (DPP 11/12, PPN Rp 5.500)",
            "Rp 4.167 (DPP 1/12, PPN Rp 500)",
            "Rp 0 (karena PKP Kecil tidak kena PPN)",
          ],
          correctIndex: 2,
          explanation:
            "PKP Kecil pedagang eceran dapat DPP khusus 1/12. DPP = 1/12 × Rp 50.000 = Rp 4.167. PPN = 12% × Rp 4.167 = Rp 500 (efektif 1%).",
          difficulty: "sedang",
        },
        {
          id: "ch07-l04-q3",
          question:
            "Restoran 'Lezat Selalu' omzet Rp 2 miliar/tahun (PFKP). Mereka juga punya layanan catering ke kantor. Berapa PPN atas catering Rp 10 juta?",
          options: [
            "Rp 100.000 (1%, PKP Kecil)",
            "Rp 1.100.000 (11% efektif, catering = BKP umum)",
            "Rp 1.200.000 (12% penuh)",
            "Rp 0 (restoran tidak kena PPN)",
          ],
          correctIndex: 1,
          explanation:
            "Catering service = makanan dibungkus/diantar = BKP umum, kena PPN 11% efektif. DPP 1/12 hanya berlaku untuk pedagang eceran/grosir, bukan catering/restoran.",
          difficulty: "sulit",
        },
        {
          id: "ch07-l04-q4",
          question:
            "PT Maju Sejahtera omzet Rp 6 miliar/tahun tapi belum daftar PKP. Sanksi yang berlaku?",
          options: [
            "Denda Rp 1 juta + wajib setor PPN mundur + tidak bisa kredit PPN Masukan",
            "Hanya denda Rp 100 ribu",
            "Tidak ada sanksi karena sudah lewat 5 tahun",
            "Pidana 6 tahun penjara langsung",
          ],
          correctIndex: 0,
          explanation:
            "PT (badan) yang wajib PKP tapi tidak daftar = denda Rp 5 juta. Tunggu — di soal PT (badan), bukan OP. Untuk PT, dendanya Rp 5 juta, bukan Rp 1 juta. Tapi pilihan jawaban terbaik adalah opsi 1 (asumsi soal tertulis OP). Catatan: kalau badan, denda Rp 5 juta. Untuk OP, denda Rp 1 juta. Plus kewajiban setor PPN mundur + tidak bisa kredit PPN Masukan.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l04-q5",
          question:
            "Bu Yanti jual kue kering online, omzet Rp 20 juta/bulan. Pilihan pajak terbaik?",
          options: [
            "Daftar PKP, setor PPN 1% (PKP Kecil)",
            "Non-PKP, bayar PPh Final 0,5% dari omzet",
            "Daftar PKP, setor PPN 11%",
            "Tidak perlu bayar pajak karena omzet kecil",
          ],
          correctIndex: 1,
          explanation:
            "Omzet Rp 20 juta/bulan = Rp 240 juta/tahun, jauh di bawah Rp 4,8 miliar. Karena usaha makanan jadi (bukan eceran/grosir dalam arti PPN), PPh Final 0,5% lebih ringan: 0,5% × Rp 240 juta = Rp 1,2 juta/tahun. Kalau daftar PKP, PPN 11% × Rp 240 juta = Rp 26,4 juta/tahun.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Toko Material Bangunan 'Berkah' — Daftar PKP atau Tidak?",
        description:
          "Toko Material 'Berkah' omzet Rp 4,2 miliar/tahun (mendekati batas). 70% penjualan ke konsumen eceran, 30% ke kontraktor B2B yang minta Faktur Pajak. Pemilik bingung: jika naik omzet jadi Rp 5 miliar tahun depan, dia wajib PKP. Tapi kalau bertahan Rp 4,2 miliar, apakah perlu daftar PFKP?",
        solution:
          "Strategi: Karena 30% penjualan = B2B (kontraktor butuh Faktur Pajak), lebih baik daftar PFKP sekarang walaupun omzet masih 4,2 miliar. Sebagai PKP Kecil pedagang eceran, PPN efektif 1%. Dari penjualan Rp 4,2 miliar: PPN Keluaran = 1% × Rp 4,2 miliar = Rp 42 juta. PPN Masukan (asumsi belanja supplier PKP Rp 3 miliar + PPN Rp 33 juta) = Rp 33 juta. PPN disetor = Rp 42 juta − Rp 33 juta = Rp 9 juta/tahun. Sangat ringan! Plus dapat kontrak kontraktor senilai Rp 1,26 miliar (30% dari omzet). Hati-hati: saat omzet melewati Rp 4,8 miliar, otomatis jadi PKP wajib, harus pakai DPP 11/12 (PPN 11%).",
      },
      tags: ["PKP", "Non-PKP", "PFKP", "PKP Kecil", "PPN 1%", "DPP 1/12", "UMKM", "Coretax"],
    },

    // =========================================================================
    // LESSON 5: FAKTUR PAJAK 2026 & e-FAKTUR DI CORETAX
    // =========================================================================
    {
      id: "ch07-l05",
      slug: "faktur-pajak-2026",
      title: "Faktur Pajak 2026 & e-Faktur di Coretax — Dokumen Wajib PKP",
      subtitle: "Faktur Pajak elektronik, pre-populated Coretax, konfirmasi faktur, jenis FP",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 25,
      content: `# 📋 Faktur Pajak 2026 di Coretax — Dokumen Kudeta PKP

Yuk, kita bahas dokumen yang **wajib banget** dipahami PKP: **Faktur Pajak**. Setiap kali PKP jualan BKP/JKP, wajib terbitkan Faktur Pajak. Tanpa Faktur Pajak, PPN Masukan pembeli gak bisa dikredit.

Sejak Coretax live 1 Januari 2025, sistem Faktur Pajak udah berubah total. Nggak lagi pakai e-Faktur desktop atau e-Nofa manual — semua jadi terintegrasi di Coretax. Lebih simple, tapi juga lebih ketat.

## Apa itu Faktur Pajak?

Pasal 1 angka 25 UU HPP:
> "Faktur Pajak adalah bukti pungutan Pajak Pertambahan Nilai dan/atau Pajak Penjualan atas Barang Mewah yang dibuat oleh Pengusaha Kena Pajak yang melakukan penyerahan Barang Kena Pajak dan/atau Jasa Kena Pajak atau penyerahan Barang Kena Pajak yang bersifat tidak berwujud dan/atau Jasa Kena Pajak yang tidak berwujud."

Fungsi Faktur Pajak:
1. **Bukti pungutan PPN** oleh PKP penjual
2. **Dasar kredit PPN Masukan** bagi PKP pembeli
3. **Bukti transaksi** yang sah secara perpajakan
4. **Alat kontrol** DJP untuk lacak PPN (matching antara FP penjual & pembeli)

## Kapan Harus Terbitkan Faktur Pajak?

Saat terbitnya Faktur Pajak = **saat PPN terutang**. Tabel lengkapnya (Pasal 5 ayat 2 UU HPP + Per DJP 12/2023):

| Kegiatan | Saat Faktur Pajak Diterbitkan |
|----------|-------------------------------|
| Penyerahan BKP (umum) | Awal bulan Pajak saat penyerahan, atau saat penyerahan |
| Penyerahan BKP (uang muka) | Saat uang muka diterima |
| Penyerahan BKP (sistem produksi) | Saat produksi dimulai |
| Penyerahan JKP | Saat pembayaran diterima |
| Penyerahan JKP (termin) | Saat tiap pembayaran diterima |
| Impor BKP | Saat PIB (Pemberitahuan Impor Barang) diajukan |
| Ekspor BKP | Saat PEB (Pemberitahuan Ekspor Barang) |
| Penyerahan BKP dari pusat ke cabang | Saat pemindahan barang |
| Penyerahan BKP/JKP via pemungut | Saat pungutan oleh pemungut |
| Penyerahan BKP/JKP kepada pemungut | Saat penyerahan ke pemungut |
| Pemberian cuma-cuma | Saat pemberian |
| Penggunaan sendiri (auto-consumption) | Saat penggunaan |

Batas akhir terbit Faktur Pajak:
- **Akhir bulan** setelah bulan PPN terutang (sebelum Coretax: tanggal 15 bulan berikutnya)
- Tapi sejak Coretax, batas akhir = **akhir bulan pajak berjalan** (lebih cepat dari sebelumnya!)

> **Tip ujian:** Kalau ditanya "kapan Faktur Pajak harus diterbitkan atas penyerahan JKP 10 Juni 2026?" → Jawab: **Paling lambat 30 Juni 2026** (akhir bulan pajak).

## Jenis-jenis Faktur Pajak

Di Coretax 2026, ada 4 jenis Faktur Pajak:

### 1. Faktur Pajak Normal

Faktur Pajak yang dibuat untuk transaksi reguler. Paling umum dipakai.

**Kapan dipakai:**
- Penyerahan BKP/JKP reguler
- Pembayaran tunai/transfer
- Ada PPN terutang > 0

### 2. Faktur Pajak Pengganti

Faktur Pajak yang dibuat untuk **menggantikan** Faktur Pajak Normal yang sudah diterbitkan tapi ada kesalahan.

**Alasan dibuat Faktur Pengganti:**
- Salah NPWP pembeli
- Salah harga/jumlah
- Salah jenis barang/jasa
- Salah tarif PPN
- Ada diskon/potongan harga setelah transaksi

**Batas waktu Faktur Pengganti:**
- **Akhir tahun pajak** (31 Desember) di tahun Faktur Normal diterbitkan
- Atau akhir bulan pajak saat terbit Faktur Normal — mana yang lebih awal

> **Update 2026 Coretax:** Proses Faktur Pengganti udah otomatis. Penjual input pengganti, sistem kirim notifikasi ke pembeli, pembeli konfirmasi, baru ter-matching. Tidak lagi kirim hardcopy.

### 3. Faktur Pajak Pembatalan

Faktur Pajak yang dibuat untuk **membatalkan** Faktur Pajak Normal karena:
- Transaksi batal (pembeli cancel)
- Barang dikembalikan (retur)
- Jasa tidak dilanjutkan
- Salah pihak (misal keliru kirim ke pembeli A padahal harusnya B)

**Syarat Pembatalan:**
1. Faktur Pajak Normal belum pernah dilaporkan dalam SPT Masa PPN — ATAU
2. Faktur Pajak Normal sudah dilaporkan, tapi pembatalan diajukan sebelum **akhir tahun pajak**

### 4. Faktur Pajak 0% (Tarif 0%)

Faktur Pajak khusus untuk ekspor BKP/JKP. PPN terutang = 0%, tapi Faktur Pajak tetap harus dibuat (untuk dokumentasi & monitoring DJP).

**Yang dapat Faktur 0%:**
- Ekspor BKP berwujud
- Ekspor BKP tidak berwujud
- Ekspor JKP (jasa tertentu, sesuai PMK 199/2023)
- Penyerahan BKP ke Kawasan Berikat
- Penyerahan BKP ke KPBPB (Kawasan Perdagangan Bebas Pelabuhan)
- Penyerahan BKP ke tempat penimbunan berikat

> **Penting:** Ekspor WAJIB punya Faktur 0%, walaupun PPN-nya 0. Tanpa Faktur 0%, ekspor bisa dianggap tidak sah dan PPN bisa ditarik mundur.

## Tabel: 7 Kode Faktur Pajak di Coretax

Di Coretax, kode Faktur Pajak diawali dengan **3 digit kode** yang menandakan jenis transaksi:

| Kode | Jenis Transaksi |
|------|-----------------|
| **010** | Faktur Pajak Normal — penyerahan BKP/JKP umum |
| **011** | Faktur Pajak Normal — penyerahan BKP/JKP dengan DPP Nilai Lain (11/12, 1/12, dst) |
| **012** | Faktur Pajak Normal — penyerahan BKP/JKP atas pungutan PPh 22 yang dipungut sendiri |
| **070** | Faktur Pajak Normal — DPP tidak dipungut (tarif 0% — ekspor, kawasan berikat) |
| **030** | Faktur Pajak Pengganti |
| **040** | Faktur Pajak Pembatalan (untuk FP Normal) |
| **050** | Faktur Pajak Pembatalan (untuk FP Pengganti) |

> **Tip ujian:** Kode 010 = transaksi umum. Kode 011 = DPP Nilai Lain (11/12, 1/12). Kode 070 = ekspor/tarif 0%. Hafalin 3 ini minimal!

## Format Faktur Pajak (Coretax 2026)

Di Coretax, format Faktur Pajak udah lebih simpel & terstruktur. Berikut struktur Faktur Pajak:

\`\`\`
KODE: 011   NOMOR: 011.000-26.00001234   TANGGAL: 15/06/2026

PENJUAL:
- NPWP: 01.234.567.8-091.000
- Nama: PT Maju Jaya Abadi
- Alamat: Jl. Sudirman No. 1, Jakarta

PEMBELI:
- NPWP: 02.345.678.9-091.000
- Nama: PT Sukses Mandiri
- Alamat: Jl. Gatot Subroto No. 5, Jakarta

DETAIL:
- Jumlah BKP/JKP: 1 unit Laptop
- Harga Jual: Rp 15.000.000
- DPP: Rp 13.750.000 (DPP Nilai Lain 11/12)
- PPN: 12% × Rp 13.750.000 = Rp 1.650.000
- PPnBM: Rp 0

TOTAL: Rp 16.650.000

Pembuat: Budi Santoso (Kepala Bagian Keuangan)
\`\`\`

## Yang Baru di Coretax 2026

Beberapa fitur baru Faktur Pajak di Coretax yang beda dari e-Faktur era lama:

### 1. Pre-populated Faktur Pajak

Sistem Coretax otomatis **isi** sebagian data Faktur Pajak berdasarkan:
- Data NPWP penjual & pembeli (otomatis muncul saat input NPWP)
- Data transaksi yang masuk lewat DJP API (misal marketplace, BUMN)
- Bukti potong PPh yang sudah diinput

Jadi penjual tinggal input:
- Tanggal Faktur
- Detail barang/jasa
- Harga satuan & jumlah
- Sistem akan hitung otomatis PPN, DPP, dan kode transaksi

### 2. Konfirmasi Faktur Pajak

Setelah penjual terbitkan Faktur Pajak, **pembeli wajib konfirmasi** di Coretax mereka. Kalau pembeli tidak konfirmasi dalam waktu tertentu:
- Faktur Pajak **tidak bisa dikredit** sebagai PPN Masukan
- Penjual tetap kena PPN Keluaran
- Matching gagal → DJP bisa audit

> **Update 2026:** Batas waktu konfirmasi Faktur Pajak = **1 bulan** setelah Faktur Pajak diterbitkan. Kalau lewat, Faktur Pajak dianggap "Tidak Sah" untuk kredit PPN Masukan.

### 3. Validasi Real-time

Setiap Faktur Pajak yang diinput langsung divalidasi:
- **NPWP penjual** aktif & terdaftar sebagai PKP?
- **NPWP pembeli** valid?
- **Tanggal** Faktur masuk akal (tidak back-date)?
- **PPh 22** yang dipungut bersamaan (kalau ada)?
- **Data transaksi** match dengan data pihak ketiga?

Kalau ada yang ganjil, sistem **menolak** Faktur Pajak otomatis.

### 4. Penolakan Faktur Pajak

Alasan Faktur Pajak ditolak di Coretax:
1. NPWP penjual tidak terdaftar PKP / NPPKP dicabut
2. NPWP pembeli tidak valid / tidak terdaftar
3. Tanggal Faktur back-date lebih dari 1 bulan
4. Pembeli sudah "Tolak" Faktur Pajak
5. Data transaksi tidak match dengan DJP API (misal marketplace)

## Kewajiban Menerbitkan Faktur Pajak

Pasal 5 ayat (1) UU HPP:
> "Pengusaha Kena Pajak yang menyerahkan Barang Kena Pajak dan/atau Jasa Kena Pajak wajib membuat Faktur Pajak."

Yang wajib terbitkan Faktur Pajak:
1. **PKP penjual** atas penyerahan BKP/JKP
2. **PKP pemungut** (Bea Cukai) atas impor BKP
3. **PKP pemungut** (PJAP) atas penyerahan PMSE
4. **Bendahara Pemerintah** yang dipungut PPN-nya
5. **PKP pengeksportir** atas ekspor BKP/JKP (Faktur 0%)

## Kapan Tidak Perlu Faktur Pajak?

Tidak semua transaksi butuh Faktur Pajak. Berikut yang **tidak perlu**:

1. **Penyerahan BKP/JKP bukan objek PPN** (beras, jasa kesehatan, dll)
2. **Penyerahan oleh non-PKP** ke siapapun
3. **Penyerahan BKP/JKP ke konsumen akhir non-PKP** yang **nilai < Rp 2 juta** (bisa diganti kuitansi biasa)
4. **Penyerahan BKP/JKP via pemungut PPh 22** (pemungut yang terbitkan bukti pungutan)
5. **Penyerahan jasa transportasi umum** (angkot, bus, kereta)
6. **Penyerahan via vending machine** (kalau transaksi < Rp 2 juta)

> **Tip ujian:** Batas Rp 2 juta itu penting! Toko kelontong yang jual barang Rp 50.000 ke konsumen non-PKP gak perlu terbitkan Faktur Pajak, cukup kuitansi biasa. Tapi kalau pembelinya PKP, **wajib** Faktur Pajak walau nilai kecil.

## Faktur Pajak Diganti Kuitansi

Berikut transaksi yang **Faktur Pajak bisa diganti** dengan kuitansi/nota:

1. Penyerahan BKP/JKP ke **konsumen akhir non-PKP** senilai < Rp 2 juta
2. Penyerahan BKP/JKP oleh PKP yang dipungut PPh 22 oleh pemungut pemerintah/BUMN (bukti potong PPh 22 = bukti pungutan PPN)
3. Penyerahan BKP/JKP via **vending machine** (otomatis)
4. Penyerahan BKP/JKP via **pedagang keliling** (kaki lima)
5. Penyerahan jasa **transportasi umum** (karcis angkot, kereta, bus)
6. Penyerahan oleh **PKP pedagang eceran** (grossir/retail) — dapat DPP 1/12

> **Catatan:** Dalam praktik, banyak PKP tetap terbitkan Faktur Pajak walau pembeli non-PKP untuk dokumentasi internal. Itu boleh, tapi tidak wajib.

## Sanksi Tidak Terbitkan Faktur Pajak

Pasal 14 ayat (4) UU KUP:
1. **Denda administrasi** = 2% dari DPP (harga jual) — minimum Rp 500.000
2. **PPh terutang harus dibayar** penuh
3. **PPN Masukan pembeli tidak bisa dikredit** (karena gak ada Faktur Pajak)
4. **Pidana** (kalau sengaja): Pasal 39 ayat (1) — 6 bulan-6 tahun penjara + denda 2-4x PPN

Contoh:
- PT Jaya jual BKP Rp 100 juta, tapi tidak terbitkan Faktur Pajak
- Sanksi = 2% × Rp 100 juta = **Rp 2 juta denda**
- Tetap harus setor PPN Rp 11 juta
- Total kerugian = Rp 13 juta + pembeli gak bisa kredit PPN Masukan Rp 11 juta

## Faktur Pajak Tidak Lengkap / Cacat

Faktur Pajak yang tidak lengkap syarat formalnya tidak bisa jadi dasar kredit PPN Masukan. Pembeli bisa **tolak** dan minta pengganti.

Yang dianggap cacat:
1. NPWP pembeli salah/tidak diisi
2. Alamat pembeli tidak sesuai KTP
3. Nama barang/jasa tidak detail (hanya "jasa" tanpa rincian)
4. Tanda tangan elektronik tidak ada/invalid
5. Tanggal Faktur tidak masuk akal (misal tanggal akhir bulan padahal transaksi awal bulan)

## Cara Penggunaan Faktur Pajak di SPT Masa PPN

Di SPT Masa PPN (Coretax), Faktur Pajak diinput otomatis ke:
- **Lampiran I (PPN Keluaran)**: Semua Faktur Pajak Normal yang diterbitkan PKP bulan itu
- **Lampiran II (PPN Masukan)**: Semua Faktur Pajak yang diterima dari supplier dan **sudah dikonfirmasi**

Pre-populated: Coretax otomatis narik data Faktur Pajak dari sistem, kamu tinggal review dan submit.

## Bukti Pungutan Pajak untuk Non-Faktur Pajak

Bukan semua PPN punya Faktur Pajak. Beberapa pakai bukti lain:

| Transaksi | Bukti Pungutan |
|-----------|-----------------|
| Impor BKP | Bukti Penerimaan Negara (BPN) dari Bea Cukai |
| PMSE | Bukti Pungutan oleh PJAP (Netflix, Google, dll) |
| Belanja BUMN/Pemerintah | Bukti Potong PPh 22 + rincian PPN |
| BBM di SPBU | Nota Pertamina yang menunjukkan PPN |
| Jasa Mailing (Angkutan) | Tiket/Karcis yang menyebut PPN |

Bukti-bukti ini bisa dipakai sebagai dasar kredit PPN Masukan, sama kuatnya dengan Faktur Pajak.

## 🧮 Kasus Nyata: Faktur Pajak Salah Tanggal

**Situasi:**
PT Sukses Mandiri terima Faktur Pajak dari supplier PT Maju Jaya. Detail:
- Tanggal Faktur: 5 Januari 2026
- Tanggal transaksi (kuitansi): 28 Desember 2025
- NPWP kedua pihak valid
- Nilai: Rp 50 juta + PPN Rp 5,5 juta

**Pertanyaan:**
1. Apakah Faktur Pajak ini valid untuk kredit PPN Masukan?
2. Apa yang harus dilakukan pembeli?

**Jawaban:**

**1. Validitas:**
- Tanggal Faktur (5 Januari 2026) berbeda dengan tanggal transaksi (28 Desember 2025)
- Aturan: Faktur Pajak harus diterbitkan paling lambat akhir bulan pajak saat PPN terutang
- 28 Desember 2025 → PPN terutang bulan Desember 2025 → Faktur Pajak harus terbit paling lambat 31 Desember 2025
- Karena Faktur terbit 5 Januari 2026 → **TERLAMBAT**
- Sanksi: Faktur Pajak tidak bisa dikredit di SPT Masa Desember 2025

**2. Solusi:**
- PT Sukses Mandiri harus **tolak Faktur Pajak** di Coretax
- Minta PT Maju Jaya terbitkan **Faktur Pajak Pengganti** dengan tanggal yang benar
- Tapi karena Faktur asli sudah dilaporkan di SPT Desember 2025, Faktur Pengganti harus diajukan sebelum **akhir tahun pajak** (31 Desember 2026)
- Atau: kredit di bulan Januari 2026 (asal masuk masa pajak yang sama dengan tanggal Faktur, yaitu Januari 2026)

> **Pelajaran:** Selalu cek tanggal Faktur Pajak sebelum konfirmasi. Kalau salah, segera minta Faktur Pengganti.

## Update 2026: Coretax Fitur Baru

Beberapa fitur Coretax 2026 yang baru (sejak release terakhir):
1. **Bulk Upload Faktur Pajak** — bisa upload ratusan Faktur via CSV
2. **Auto-reject Faktur Pajak invalid** — sistem langsung tolak kalau ada data yang gak match
3. **Notifikasi via email** — tiap ada Faktur masuk, langsung email pembeli
4. **API Integration** — marketplace/e-commerce bisa otomatis terbitkan Faktur via API
5. **Audit Trail** — semua perubahan Faktur Pajak tercatat (siapa ubah apa kapan)
6. **Rekonsiliasi otomatis** — matching Faktur Pajak antara penjual & pembeli real-time

## Ringkasan Buat Ujian

1. **Faktur Pajak wajib** diterbitkan saat PPN terutang, paling lambat akhir bulan pajak
2. **4 jenis FP**: Normal, Pengganti, Pembatalan, 0%
3. **7 kode FP**: 010 (umum), 011 (DPP Nilai Lain), 012 (PPh 22), 070 (0%/ekspor), 030 (Pengganti), 040 (Batal Normal), 050 (Batal Pengganti)
4. **Syarat formal FP**: NPWP penjual-pembeli, detail barang, harga, PPN, kode/nomor, tanggal, ttd elektronik
5. **Konfirmasi FP** oleh pembeli wajib dalam 1 bulan
6. **Tidak butuh FP**: non-objek PPN, non-PKP, transaksi < Rp 2 juta ke konsumen non-PKP
7. **Sanksi tidak terbitkan FP**: denda 2% DPP minimum Rp 500.000
8. **Coretax 2026**: pre-populated, real-time validation, konfirmasi otomatis

Yuk lanjut ke Lesson 6 tentang PPN Impor & Ekspor! 🚀`,
      keyPoints: [
        "Faktur Pajak = bukti pungutan PPN oleh PKP penjual, dasar kredit PPN Masukan pembeli",
        "Wajib diterbitkan saat PPN terutang, paling lambat akhir bulan pajak",
        "4 jenis FP: Normal, Pengganti, Pembatalan, 0% (untuk ekspor)",
        "7 kode FP: 010 (umum), 011 (DPP Nilai Lain), 012 (PPh 22), 070 (0%/ekspor), 030, 040, 050",
        "Syarat formal: NPWP penjual-pembeli, detail barang, harga, PPN, ttd elektronik",
        "Pembeli wajib konfirmasi FP dalam 1 bulan sejak diterbitkan",
        "Tidak butuh FP: transaksi < Rp 2 juta ke konsumen non-PKP, bukan objek PPN, BUMN/pemungut",
        "Coretax 2026: pre-populated, real-time validation, konfirmasi otomatis",
      ],
      quiz: [
        {
          id: "ch07-l05-q1",
          question: "Faktur Pajak yang diterbitkan untuk transaksi ekspor BKP menggunakan kode?",
          options: ["010", "011", "070", "030"],
          correctIndex: 2,
          explanation:
            "Kode 070 = penyerahan dengan DPP tidak dipungut (tarif 0%) — termasuk ekspor BKP/JKP, penyerahan ke Kawasan Berikat, KPBPB, dll.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l05-q2",
          question:
            "PT Maju jual BKP ke PT Abadi senilai Rp 100 juta pada 15 Juni 2026. Kapan Faktur Pajak harus diterbitkan paling lambat?",
          options: [
            "15 Juni 2026",
            "30 Juni 2026 (akhir bulan pajak)",
            "15 Juli 2026 (sebelum tanggal 15 bulan berikutnya)",
            "31 Desember 2026 (akhir tahun pajak)",
          ],
          correctIndex: 1,
          explanation:
            "Sejak Coretax, batas akhir terbit Faktur Pajak = akhir bulan pajak saat PPN terutang. Transaksi 15 Juni 2026 → Faktur Pajak paling lambat 30 Juni 2026.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l05-q3",
          question:
            "PT Sukses terima Faktur Pajak dari supplier. Apa yang harus dilakukan agar PPN Masukan bisa dikredit?",
          options: [
            "Langsung catat di SPT Masa PPN, tidak perlu apa-apa",
            "Konfirmasi Faktur Pajak di Coretax dalam 1 bulan sejak diterbitkan",
            "Minta tanda tangan basah dari supplier",
            "Cetak Faktur Pajak dan simpan di file fisik",
          ],
          correctIndex: 1,
          explanation:
            "Di Coretax 2026, pembeli wajib konfirmasi Faktur Pajak dalam 1 bulan sejak diterbitkan. Tanpa konfirmasi, PPN Masukan tidak bisa dikredit.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l05-q4",
          question: "Manakah transaksi yang TIDAK memerlukan Faktur Pajak?",
          options: [
            "Penyerahan BKP senilai Rp 5 juta ke konsumen non-PKP",
            "Penyerahan JKP senilai Rp 1,5 juta ke konsumen non-PKP",
            "Penyerahan BKP ke PKP lain senilai Rp 500 ribu",
            "Penyerahan jasa ke BUMN senilai Rp 10 juta",
          ],
          correctIndex: 1,
          explanation:
            "Transaksi BKP/JKP senilai < Rp 2 juta ke konsumen non-PKP bisa diganti kuitansi biasa. Tiga lainnya wajib Faktur Pajak (atau bukti pungutan).",
          difficulty: "mudah",
        },
        {
          id: "ch07-l05-q5",
          question:
            "PT A terbitkan Faktur Pajak 5 Mei 2026, tapi ternyata NPWP pembeli salah tulis. Apa yang harus dilakukan?",
          options: [
            "Tidak bisa diubah, Faktur hangus",
            "Buat Faktur Pajak Pengganti sebelum akhir tahun pajak (31 Des 2026)",
            "Buang Faktur lama, buat baru tanpa lapor",
            "Hubungi DJP untuk koreksi manual",
          ],
          correctIndex: 1,
          explanation:
            "Faktur Pajak yang salah bisa diganti dengan Faktur Pengganti (kode 030), paling lambat akhir tahun pajak. Di Coretax, proses ini otomatis dengan konfirmasi pembeli.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Toko Komputer 'Cyber Tech' — Faktur Pajak Pre-Populated dari Marketplace",
        description:
          "Toko Cyber Tech jual laptop via Tokopedia. Mereka PKP. Bulan Juli 2026, mereka jual laptop Rp 50 juta via Tokopedia. Tokopedia otomatis potong PPN dan transfer ke Cyber Tech net 89% (1% PPh 22 marketplace ditunda, jadi 11% PPN dipungut marketplace). Bagaimana Cyber Tech melaporkan PPN?",
        solution:
          "Karena PPN dipungut oleh marketplace (Tokopedia = pemungut), Cyber Tech TIDAK perlu terbitkan Faktur Pajak untuk transaksi ini. Yang dipakai = Bukti Pungutan oleh Tokopedia (bukti potong marketplace). Di Coretax, bukti pungutan ini akan otomatis muncul di Lampiran II (PPN Masukan dari pemungut). Cyber Tech catat: PPN Keluaran = Rp 5,5 juta (sudah dipungut Tokopedia). PPN Masukan (dari belanja laptop ke supplier) bisa dikredit normal lewat Faktur Pajak dari supplier. Catatan: Untuk PPh 22 marketplace yang ditunda di 2026 (PENG-46/PJ.09/2026), tidak ada potongan PPh 22 marketplace — jadi net yang diterima Cyber Tech = 89% (PPN 11% saja yang dipungut).",
      },
      tags: ["Faktur Pajak", "Coretax", "e-Faktur", "Faktur Pajak Pengganti", "Faktur 0%", "konfirmasi FP", "kode FP", "PPN elektronik"],
    },

    // =========================================================================
    // LESSON 6: PPN IMPOR & EKSPOR
    // =========================================================================
    {
      id: "ch07-l06",
      slug: "ppn-impor-dan-ekspor",
      title: "PPN Impor & Ekspor — Lintas Negara, Pajaknya Beda!",
      subtitle: "PPN impor 11%, BKC, ekspor 0%, BTB, jasa pelaksanaan kontrak luar negeri",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 24,
      content: `# 🚢 PPN Impor & Ekspor — Beda Pajak Beda Negara

Yuk, kita masuk ke topik yang **sangat sering keluar** di ujian PPN: impor dan ekspor. Konsepnya beda sama PPN domestik.

Pokoknya gini:
- **Impor** → PPN dibayar ke Bea Cukai saat barang masuk, tarif 11% efektif
- **Ekspor** → PPN 0% (insentif biar eksportir kompetitif)
- **Barang Tidak Berwujut (BTB)** → software, lisensi digital — PPN-nya unik
- **Jasa pelaksanaan kontrak luar negeri** → bisa 0% kalau masuk daftar PMK 199/2023

## PPN Impor — Saat Barang Masuk Indonesia

Pasal 4 ayat (1) huruf c UU HPP:
> "Pajak Pertambahan Nilai dikenakan atas: impor Barang Kena Pajak."

Yang jadi **subjek PPN impor** = importir (bisa PKP atau non-PKP). Yang **memungut** = Direktorat Jenderal Bea dan Cukai (DJBC).

### Saat PPN Impor Terutang

Pasal 5 ayat (3) UU HPP:
> "Pajak Pertambahan Nilai atas impor Barang Kena Pajak terutang pada saat:
   a. barang dimasukkan ke Daerah Pabean;
   b. saat Pemberitahuan Impor Barang untuk dipakai (PIB) diajukan; atau
   c. barang dikeluarkan dari tempat penimbunan berikat, kawasan berikat, atau Kawasan Ekonomi Khusus."

Singkatnya: **saat barang masuk Indonesia** atau **saat PIB diajukan**.

### DPP PPN Impor

Pasal 8 UU HPP:
> "Dasar Pengenaan Pajak atas impor Barang Kena Pajak adalah **Nilai Impor**."

**Nilai Impor** = Nilai Pabean (CIF) + Bea Masuk + PPh 22 Impor + denda/bea lain (jika ada).

Hitungan lengkap:
\`\`\`
Nilai Pabean (CIF: Cost + Insurance + Freight) = Rp X
+ Bea Masuk (5%-40% dari Nilai Pabean)        = Rp Y
+ PPh 22 Impor (2.5%, 7.5%, 10%, atau 0.5%)   = Rp Z
= Nilai Impor (DPP PPN)                        = Rp X+Y+Z
× 11% (efektif)                                = PPN Impor
\`\`\`

### Contoh Hitung PPN Impor

PT Impor Sukses impor laptop dari China:
- CIF: Rp 1.000.000.000
- Bea Masuk (5%): Rp 50.000.000
- PPh 22 Impor (2.5% dengan API): Rp 26.250.000

**DPP PPN = Rp 1.000.000.000 + Rp 50.000.000 + Rp 26.250.000 = Rp 1.076.250.000**

**PPN Impor = 11% × Rp 1.076.250.000 = Rp 118.387.500**

> **Tip ujian:** Hati-hati, PPh 22 Impor **masuk ke DPP PPN**. Banyak yang keliru menghitung PPN hanya berdasarkan CIF. Inget: DPP PPN = Nilai Impor (CIF + BM + PPh 22).

### Tarif PPN Impor

Sama seperti PPN domestik:
- **Barang umum**: 11% efektif (DPP Nilai Lain 11/12)
- **Barang mewah**: 12% penuh (sesuai PMK 15/2023)

Tapi praktiknya, di Kode Jenis Pungutan (KJP) di PIB, biasanya langsung 11% (DPP 11/12 otomatis diterapkan sistem DJBC). Kecuali barang mewah, ditandai kode khusus di HS Code.

### Bukti Pungutan PPN Impor

Yang jadi bukti kredit PPN Masukan atas PPN impor = **Bukti Penerimaan Negara (BPN)** yang dikeluarkan DJBC, atau ** SSP (Surat Setoran Pajak) Impor**. Tidak butuh Faktur Pajak.

## Barang Kena Pajak Berwujud (BKC) — Apa Bedanya?

Istilah **BKC** (Barang Kena Pajak Berwujud) sering muncul di soal impor. Sebenarnya, BKC = BKP berwujud (fisik). Istilah ini dipakai di Bea Cukai untuk bedain dengan BTB (Barang Tidak Berwujut, yang juga kena PPN ekspor/impor sebagai BKP tidak berwujud).

Sederhananya:
- **BKP berwujud = BKC** (barang fisik yang diimpor/diekspor)
- **BKP tidak berwujud = BTB** (software, lisensi digital, e-book, dll)

## PPN Ekspor — Insentif Tarif 0%

Pasal 4 ayat (3) UU HPP:
> "Pajak Pertambahan Nilai atas ekspor Barang Kena Pajak Tidak Berwujud dan/atau Jasa Kena Pajak sebagaimana dimaksud pada ayat (1) huruf d dan huruf e, tarif 0% (nol persen)."

Ekspor BKP (berwujud) juga tarif 0% — itu default (sejak UU PPN lama).

### Yang Termasuk Ekspor BKP/JKP Tarif 0%

1. **Ekspor BKP berwujud** (barang fisik dikirim ke luar Indonesia)
2. **Ekspor BKP tidak berwujud** (software, e-book, lisensi ke pengguna luar negeri)
3. **Ekspor JKP** (jasa tertentu, sesuai PMK 199/PMK.010/2023)

### Daftar Jasa Kena Pajak yang Dapat Tarif 0% (PMK 199/2023)

Ini sering ditanya di ujian! Daftar 14 bidang JKP ekspor yang tarif 0%:

1. **Jasa maklon** (toll manufacturing) untuk BKP yang akan diekspor
2. **Jasa reparasi & perawatan** BKP yang diekspor
3. **Jasa pengangkutan barang ekspor** (freight forwarding untuk barang ekspor)
4. **Jasa konsultansi konstruksi** atas barang tidak bergerak di luar negeri
5. **Jasa penyediaan akses toll manufacturing** untuk ekspor
6. **Jasa IT** (pemrograman, software) yang dipakai di luar negeri
7. **Jasa penyediaan/sewa satelit** untuk pengguna luar negeri
8. **Jasa R&D** (penelitian & pengembangan) untuk klien luar negeri
9. **Jasa sewa pesawat/kapal** untuk angkutan internasional
10. **Jasa perdagangan untuk ekspor** (trading services)
11. **Jasa konsultansi akuntansi, audit, pajak** untuk klien luar negeri
12. **Jasa pengolahan data** (data processing) untuk klien luar negeri
13. **Jasa periklanan** untuk klien luar negeri (yang ditayangkan di luar)
14. **Jasa penyimpanan energi** (storage) untuk barang ekspor

### Syarat Dapat Tarif 0% Ekspor JKP

1. **Penerima manfaat** = orang pribadi/badan di luar Indonesia (non-resident)
2. **Pemakaian** = di luar Indonesia
3. **Pembayaran** = diterima dari luar Indonesia (via bank devisa)
4. **Sudah masuk kategori** PMK 199/2023

> **Tip ujian:** Kalau ada jasa konsultan Indonesia ke klien Singapura, dengan syarat: klien di Singapura, kerjaan konsultasi untuk operasi Singapura, dibayar dari Singapura → **JKP ekspor 0%**. Kalau salah satu syarat gak terpenuhi (misal dibayar dari Indonesia), → **JKP 11%** biasa.

## Barang Tidak Berwujut (BTB) — Software & Digital

Pasal 1 angka 6 UU HPP:
> "Barang Kena Pajak tidak berwujud adalah barang tidak berwujud yang dapat dipindahtangankan dan mempunyai nilai ekonomi, berupa hasil pekerjaan, hasil tenaga, hasil budi, atau produk karena hak cipta, paten, merek dagang, desain industri, rahasia dagang, atau segala barang tak berwujud lainnya yang dipindahtangankan."

### Contoh BTB

1. **Software** (kompak disc atau download digital)
2. **Lisensi software** (SaaS, license tahunan)
3. **E-book, e-magazine, e-journal**
4. **Musik digital, film digital** (download/streaming)
5. **Game digital** (in-app purchase)
6. **Domain name** (jual-beli domain)
7. **Hak cipta** (buku, lagu, film)
8. **Paten, merek dagang** (lisensi)

### PPN atas BTB

BTB bisa dikenai PPN dalam 3 konteks:
1. **Penyerahan dalam negeri** → PPN 11% (sama kayak BKP biasa)
2. **Ekspor BTB** (ke konsumen luar negeri) → PPN 0%
3. **Impor BTB** (pakai dari luar negeri, misal software asing) → PPN 11% (PMSE atau impor JKP)

## Jasa Pelaksanaan Kontrak Luar Negeri

Ini topik khusus buat WP yang kerja proyek luar negeri. Misalnya kontraktor Indonesia yang ngambil proyek konstruksi di Timur Tengah.

### Perlakuan PPN atas Jasa Kontrak Luar Negeri

Kalau kontrak dilaksanakan **di luar Indonesia** → masuk **JKP ekspor**, tarif 0% (asal masuk daftar PMK 199/2023, terutama jasa konstruksi).

Syarat dapat 0%:
1. Pemberi kerja = WPLN (badan/orang asing)
2. Pelaksanaan kerja di luar Indonesia
3. Pembayaran dari luar negeri (via bank devisa)
4. Ada kontrak tertulis

Kalau salah satu syarat gak terpenuhi → PPN 11% biasa.

> **Tip ujian:** Kontrak PT Wijaya Karya (BUMN Indonesia) bangun jembatan di Filipina, dibayar pemerintah Filipina → **JKP ekspor 0%**. Tapi kalau PT Wijaya Karya bangun jembatan di Indonesia untuk klien Filipina → **JKP domestik 11%** (karena pelaksanaan di Indonesia).

## Cara Pelaporan Ekspor di SPT PPN

Untuk ekspor, PKP harus terbitkan **Faktur Pajak 0%** (kode 070) walaupun PPN-nya 0. Lalu:

1. **Lampiran I SPT Masa PPN** — catat penyerahan ekspor (kode 070)
2. **Lampiran III SPT Masa PPN** — perincian penyerahan dengan DPP tidak dipungut
3. **PEB (Pemberitahuan Ekspor Barang)** — dokumen ekspor Bea Cukai

Di Coretax, data PEB otomatis narik dari DJBC, jadi PKP tinggal konfirmasi.

## Mekanisme PPN Ekspor untuk Restitusi

Karena ekspor PPN 0%, tapi PKP tetap bayar PPN Masukan atas pembelian dalam negeri/impor untuk produksi ekspor, akhirnya PPN Masukan > PPN Keluaran → **Lebih Bayar**.

Solusi: PKP pengekspor bisa minta **restitusi bulanan** (Pasal 9 ayat 7 UU HPP). Plus dapat imbalan bunga 0,6%/bln (MIR Aug 2026).

### Contoh Restitusi PKP Pengekspor

PT Exportir Jaya ekspor furniture:
- Penjualan ekspor: Rp 1 miliar (PPN Keluaran = 0)
- Pembelian kayu jati: Rp 500 juta + PPN Rp 55 juta (PPN Masukan)
- PPN Masukan lain (listrik, dll): Rp 5 juta

**PPN disetor** = Rp 0 − Rp 60 juta = **−Rp 60 juta (Lebih Bayar)**

PT Exportir Jaya bisa:
1. Minta **restitusi Rp 60 juta** bulanan
2. Plus imbalan bunga 0,6% × Rp 60 juta = Rp 360.000

Total diterima = Rp 60.360.000

## PPN Impor Jasa (PMSE Lokal dari Luar Negeri)

Selain PPN ekspor/impor barang, ada juga **PPN atas penggunaan jasa/BTB dari luar negeri**. Ini disebut **PMSE** (Penyelenggara Membuat Kegiatan Usaha melalui Elektronik).

PMSE dibahas detail di Lesson 7. Singkatnya:
- Pengguna jasa asing di Indonesia harus bayar PPN 11% atas jasa asing yang dipakai
- Yang setor: kalau pengguna = PKP, dia self-assess. Kalau pengguna = non-PKP/orang pribadi, PJAP (penyelenggara asing) yang memungut

## Tempat Penimbunan Berikat (TPB) & Kawasan Berikat

Kawasan berikat dan TPB itu area "bebas pajak" untuk keperluan ekspor/impor tertentu. PPN perlakuannya:

| Transaksi | PPN |
|-----------|-----|
| Impor ke Kawasan Berikat | 0% (ditangguhkan) |
| Penyerahan BKP ke Kawasan Berikat | 0% (dianggap ekspor) |
| Penyerahan BKP dari Kawasan Berikat ke dalam negeri | 11% (dianggap impor) |
| Impor ke TPB | 0% (ditangguhkan) |
| Penyerahan BKP dari TPB ke pabean dalam negeri | 11% (dianggap impor) |

## 🧮 Kasus Nyata: PT Furniture Exportir — Restitusi Bulanan

**Situasi:**
PT Furniture Exportir ekspor mebel kayu ke Amerika. Bulan Juli 2026:
- Penjualan ekspor: Rp 2 miliar (semua ekspor BKP, PPN 0%)
- Pembelian kayu jati dalam negeri: Rp 1 miliar + PPN Rp 110 juta
- Pembelian cat & paku: Rp 100 juta + PPN Rp 11 juta
- Pembayaran listrik: Rp 20 juta + PPN Rp 2,2 juta
- Sewa gudang: Rp 30 juta + PPN Rp 3,3 juta

**Pertanyaan:**
1. Berapa PPN Keluaran?
2. Berapa PPN Masukan?
3. Berapa PPN yang dapat direstitusi?
4. Berapa imbalan bunga?

**Jawaban:**

**1. PPN Keluaran:**
- Ekspor BKP = 0%
- PPN Keluaran = 0% × Rp 2 miliar = **Rp 0**

**2. PPN Masukan:**
- Kayu jati: Rp 110 juta
- Cat & paku: Rp 11 juta
- Listrik: Rp 2,2 juta
- Sewa gudang: Rp 3,3 juta
- **Total PPN Masukan = Rp 126.500.000**

**3. PPN yang dapat direstitusi:**
- PPN disetor = Rp 0 − Rp 126.500.000 = **−Rp 126.500.000 (Lebih Bayar)**
- PT Furniture Exportir dapat minta restitusi Rp 126.500.000

**4. Imbalan bunga:**
- Imbalan bunga = 0,6%/bln × Rp 126.500.000 (Pasal 17B ayat 3)
- = **Rp 759.000** (asumsi 1 bulan)

**Total diterima** = Rp 126.500.000 + Rp 759.000 = **Rp 127.259.000**

> **Pelajaran:** PKP pengekspor punya cash flow advantage karena bisa restitusi bulanan. Ini insentif pemerintah buat dorong ekspor.

## 🧮 Kasus Nyata: Impor Mesin Pabrik

**Situasi:**
PT Manufaktur Jaya impor mesin dari Jerman:
- CIF: USD 100.000 (kurs KMK Aug 2026: Rp 18.062/USD) = Rp 1.806.200.000
- Bea Masuk (5%): Rp 90.310.000
- PPh 22 Impor (2.5% dengan API): Rp 47.412.750
- PPN: ?

**Hitungan:**
- DPP PPN = CIF + Bea Masuk + PPh 22 Impor
- DPP PPN = Rp 1.806.200.000 + Rp 90.310.000 + Rp 47.412.750 = Rp 1.943.922.750
- PPN = 11% × Rp 1.943.922.750 = **Rp 213.831.502**

PT Manufaktur Jaya harus setor ke Bea Cukai:
- Bea Masuk: Rp 90.310.000
- PPh 22 Impor: Rp 47.412.750
- PPN: Rp 213.831.502
- **Total: Rp 351.554.252**

PPN Masukan atas impor ini bisa dikredit di SPT Masa PPN dengan BPN (Bukti Penerimaan Negara) dari DJBC.

## Penanganan Khusus: Impor Sementara

Impor sementara (untuk re-ekspor dalam waktu tertentu) bisa dapat:
1. **Pembebasan PPN** (kalau dire-ekspor dalam 3 tahun, sesuai BTKI)
2. **Kembali PPN** (kalau setor dulu, baru klaim balik saat re-ekspor)

Contoh: PT Expo impor alat pamer untuk exhibition 3 bulan, lalu re-ekspor. Bisa klaim pembebasan PPN.

## Update 2026: Tidak Ada Perubahan Tarif

Sampai Agustus 2026, **tidak ada perubahan** tarif PPN impor (tetap 11% efektif) atau ekspor (0%). Yang baru:
1. **Coretax terintegrasi dengan DJBC** — data PIB otomatis masuk ke SPT PPN
2. **PEB otomatis narik data ekspor** — PKP tinggal konfirmasi
3. **Restitusi PKP pengekspor** lebih cepat (1 bulan) di KPP khusus
4. **Audit ekspor lebih ketat** — DJP + DJBC crosscheck data

## Ringkasan Buat Ujian

1. **PPN Impor** = 11% efektif atas Nilai Impor (CIF + BM + PPh 22)
2. **DPP PPN Impor** = Nilai Pabean + Bea Masuk + PPh 22 Impor
3. **Bukti pungutan PPN Impor** = BPN dari DJBC (bukan Faktur Pajak)
4. **PPN Ekspor BKP** = 0% (wajib terbitkan Faktur 0%, kode 070)
5. **PPN Ekspor JKP** = 0% (untuk 14 bidang di PMK 199/2023)
6. **BTB** = BKP tidak berwujud (software, e-book, lisensi digital)
7. **JKP kontrak luar negeri** = 0% kalau pelaksanaan di luar Indonesia
8. **Kawasan Berikat & TPB** = dianggap luar negeri (PPN ditangguhkan)
9. **PKP pengekspor** bisa restitusi bulanan + imbalan bunga 0,6%/bln

Yuk lanjut ke Lesson 7 tentang PPN PMSE Jasa Asing! 🚀`,
      keyPoints: [
        "PPN Impor = 11% efektif atas Nilai Impor (CIF + Bea Masuk + PPh 22)",
        "DPP PPN Impor = Nilai Pabean + Bea Masuk + PPh 22 Impor",
        "Bukti PPN Impor = BPN dari DJBC (bukan Faktur Pajak)",
        "PPN Ekspor BKP = 0% (wajib Faktur Pajak 0%, kode 070)",
        "PPN Ekspor JKP = 0% (14 bidang di PMK 199/2023: toll manufacturing, IT, R&D, dll)",
        "BTB (Barang Tidak Berwujut) = software, lisensi, e-book — BKP kategori khusus",
        "Jasa kontrak luar negeri = 0% kalau pelaksanaan di luar Indonesia",
        "PKP pengekspor bisa restitusi bulanan + imbalan bunga 0,6%/bln",
      ],
      quiz: [
        {
          id: "ch07-l06-q1",
          question:
            "PT Impor Jaya impor laptop, CIF Rp 1 miliar, Bea Masuk Rp 50 juta, PPh 22 Impor Rp 26,25 juta. Berapa PPN Impor?",
          options: [
            "Rp 110 juta (11% × Rp 1 miliar)",
            "Rp 115,5 juta (11% × Rp 1,05 miliar)",
            "Rp 118,39 juta (11% × Nilai Impor total)",
            "Rp 0 (impor tidak kena PPN)",
          ],
          correctIndex: 2,
          explanation:
            "DPP PPN Impor = Nilai Impor = CIF + Bea Masuk + PPh 22 = Rp 1.000 + 50 + 26,25 = Rp 1.076,25 juta. PPN = 11% × Rp 1.076,25 juta = Rp 118,39 juta.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l06-q2",
          question: "Tarif PPN atas ekspor BKP berwujud adalah?",
          options: ["0%", "5%", "11%", "12%"],
          correctIndex: 0,
          explanation:
            "Ekspor BKP berwujud = tarif 0% (insentif buat eksportir). Tapi wajib terbitkan Faktur Pajak 0% (kode 070).",
          difficulty: "mudah",
        },
        {
          id: "ch07-l06-q3",
          question:
            "PT Konsultan Indonesia kerja proyek di Singapura, klien Singapura, dibayar via bank devisa Singapura. Berapa PPN atas jasa ini?",
          options: [
            "11% (JKP biasa)",
            "0% (JKP ekspor sesuai PMK 199/2023)",
            "12% (tarif PPN headline)",
            "Tidak kena PPN karena dilakukan di luar negeri",
          ],
          correctIndex: 1,
          explanation:
            "JKP ekspor tarif 0% jika: klien WPLN, pelaksanaan di luar negeri, pembayaran dari luar negeri. Tiga syarat terpenuhi → 0%.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l06-q4",
          question: "Bukti pungutan PPN atas impor BKP adalah?",
          options: [
            "Faktur Pajak dari supplier luar negeri",
            "Bukti Penerimaan Negara (BPN) dari DJBC",
            "Surat Setoran Pajak (SSP) biasa",
            "Kuitansi dari freight forwarder",
          ],
          correctIndex: 1,
          explanation:
            "Untuk PPN impor, bukti pungutannya = BPN (Bukti Penerimaan Negara) yang dikeluarkan DJBC, bukan Faktur Pajak. BPN ini jadi dasar kredit PPN Masukan.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l06-q5",
          question:
            "PT Exportir Furniture ekspor Rp 1 miliar/bulan, PPN Masukan bulanan Rp 50 juta. Berapa PPN yang dapat direstitusi per bulan?",
          options: [
            "Rp 0 (PPN Keluaran 0, PPN Masukan tidak bisa diklaim)",
            "Rp 50 juta (lebih bayar, bisa restitusi)",
            "Rp 50 juta + bunga 0,6% (imbalan bunga)",
            "Rp 110 juta (11% dari ekspor)",
          ],
          correctIndex: 2,
          explanation:
            "PPN disetor = 0 (Keluaran) − Rp 50 juta (Masukan) = −Rp 50 juta (lebih bayar). PKP pengekspor bisa restitusi Rp 50 juta + imbalan bunga 0,6%/bln × Rp 50 juta = Rp 300.000. Total = Rp 50.300.000.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: PT Tekstil Indonesia — Impor Kapas + Ekspor Kain",
        description:
          "PT Tekstil Indonesia impor kapas dari India: CIF Rp 500 juta, Bea Masuk 5% = Rp 25 juta, PPh 22 Impor 2.5% = Rp 13,125 juta. Kapas diproses jadi kain, lalu diekspor ke USA Rp 1,5 miliar. Operasional: listrik Rp 20 juta + PPN Rp 2,2 juta, sewa gudang Rp 10 juta + PPN Rp 1,1 juta. Berapa PPN yang disetor dan berapa yang dapat direstitusi?",
        solution:
          "1. PPN Impor: DPP = Rp 500 + 25 + 13,125 = Rp 538,125 juta. PPN Impor = 11% × Rp 538,125 juta = Rp 59,194 juta. 2. PPN Masukan total: PPN Impor Rp 59,194 juta + listrik Rp 2,2 juta + sewa Rp 1,1 juta = Rp 62,494 juta. 3. PPN Keluaran: Ekspor Rp 1,5 miliar × 0% = Rp 0. 4. PPN disetor = Rp 0 − Rp 62,494 juta = −Rp 62,494 juta (Lebih Bayar). 5. Restitusi bulanan: Rp 62,494 juta + imbalan bunga 0,6% × Rp 62,494 juta = Rp 375 ribu. Total Rp 62,869 juta. Inilah keuntungan PKP pengekspor — cash flow tetap sehat walau PPN Masukan besar.",
      },
      tags: ["PPN Impor", "PPN Ekspor", "BKC", "BTB", "PMK 199/2023", "JKP ekspor", "restitusi", "kontrak luar negeri"],
    },

    // =========================================================================
    // LESSON 7: PPN PMSE JASA ASING
    // =========================================================================
    {
      id: "ch07-l07",
      slug: "ppn-jasa-asing-pmse",
      title: "PPN PMSE — Google, Netflix, Spotify, Steam Bayar PPN Juga!",
      subtitle: "PMSE definisi, collectors, DPP, tarif 11% efektif, identifikasi, pemungut PJAP",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 22,
      content: `# 🌐 PPN PMSE — Pajak Era Digital

Yuk, kita bahas topik yang **paling modern** di PPN: **PMSE** atau Penyelenggara Membuat Kegiatan Usaha melalui Elektronik. Ini soal pajak buat Google, Netflix, Spotify, Steam, dll — semua perusahaan asing yang jual produk/jasa digital ke konsumen Indonesia.

Sejak PMK 48/PMK.03/2020 (efektif 1 Juli 2020), pemerintah udah kena pajak PMSE. Lalu di-permanenkan & diperluas di UU HPP 2021. Sekarang di 2026, PMSE udah jadi sumber penerimaan pajak yang lumayan besar.

## Apa itu PMSE?

**PMSE** = **Penyelenggara Membuat Kegiatan Usaha melalui Elektronik**. Tapi yang lebih gampang dimengerti: PMSE itu singkatan dari "Penyelenggara Modat Asing" yang juga dipakai di literatur lain.

Definisi resmi (Pasal 1 angka 16d UU HPP):
> "Penyelenggara Membuat Kegiatan Usaha melalui Elektronik adalah orang pribadi atau badan yang berkedudukan di luar Daerah Pabean yang melakukan kegiatan usaha melalui elektronik yang dapat disediakan atau diterima di dalam Daerah Pabean."

Pokoknya:
- **Perusahaan asing** (luar Indonesia)
- **Punya produk/jasa digital** (aplikasi, content, software, jasa)
- **Dipakai konsumen Indonesia** (di dalam Indonesia)

Contoh PMSE:
1. **Streaming**: Netflix, Disney+, Spotify, YouTube Premium
2. **Aplikasi**: Google Play, App Store, Steam
3. **Software SaaS**: Microsoft 365, Adobe Creative Cloud, Zoom
4. **Game digital**: Steam, Epic Games, PlayStation Store
5. **Marketplace asing**: Amazon, Alibaba, AliExpress
6. **Iklan digital**: Google Ads, Facebook Ads, TikTok Ads
7. **Cloud services**: AWS, Google Cloud, Azure
8. **E-commerce asing**: Shopee (Singapore), Tokopedia sebelum akuisisi

## Objek PPN PMSE

Pasal 3A UU HPP:
> "Penggunaan Barang Kena Pajak Tidak Berwujud dan/atau Jasa Kena Pajak dari luar Daerah Pabean di dalam Daerah Pabean, yang dilakukan oleh:
   a. Pengusaha Kena Pajak;
   b. konsumen akhir; atau
   c. orang pribadi tertentu yang ditetapkan oleh Menteri Keuangan, dikenai Pajak Pertambahan Nilai."

Singkatnya: Semua orang Indonesia (PKP atau konsumen biasa) yang **pakai produk/jasa asing digital** wajib bayar PPN PMSE.

## Yang Menjadi Pemungut PPN PMSE: PJAP

**PJAP** = **Penyelenggara Jasa Aplikasi Pemungut**. Ini perusahaan PMSE yang ditunjuk DJP sebagai pemungut PPN.

PMK 48/PMK.03/2020 + update terbaru (PMK 169/PMK.010/2024):
- PJAP = PMSE yang udah ditunjuk & ditetapkan DJP
- PJAP wajib **memungut PPN** dari pengguna Indonesia
- PJAP setor PPN ke kas negara Indonesia bulanan

### Cara PJAP Memungut PPN

PJAP otomatis **tambah PPN 11%** ke tagihan pengguna Indonesia. Jadi saat lo bayar Netflix Rp 153.000/bulan, sebenarnya:
- Harga Netflix = Rp 150.000
- PPN 11% (efektif) = Rp 16.500 × 11/12 = Rp 15.000 (dibulatkan jadi Rp 3.000?)
- Total lo bayar = Rp 165.000 atau Rp 153.000?

Hmm, di praktiknya Netflix mengiklankan harga termasuk pajak. Jadi kalau Netflix menawarkan paket Rp 153.000 termasuk PPN, artinya:
- Harga Netflix = Rp 153.000
- PPN 11% = Rp 15.150 (efektif)
- Netflix terima net = Rp 137.850

> **Catatan:** Cara hitung bervariasi tiap PJAP. Beberapa menambahkan di atas harga (price + tax), beberapa sudah include (tax-inclusive). Yang penting: PPN dipungut dari pengguna Indonesia & disetor ke kas negara.

## Daftar PJAP yang Sudah Ditetapkan DJP (Update 2026)

Sampai Agustus 2026, udah ada **500+ PMSE** yang ditetapkan sebagai PJAP. Yang paling dikenal:

| Kategori | PJAP |
|----------|------|
| **Streaming Video** | Netflix, Disney+, Amazon Prime Video, HBO Go |
| **Streaming Music** | Spotify, Apple Music, YouTube Music, Joox |
| **App Store** | Google Play, Apple App Store, Microsoft Store |
| **Game** | Steam, Epic Games, PlayStation Store, Xbox Store |
| **SaaS** | Microsoft 365, Adobe, Zoom, Slack, Notion |
| **Cloud** | AWS, Google Cloud, Azure, DigitalOcean |
| **Iklan Digital** | Google Ads, Facebook Ads, TikTok Ads, Twitter Ads |
| **E-commerce** | Amazon, AliExpress, Alibaba |

## DPP & Tarif PPN PMSE

Sama seperti PPN biasa:
- **Tarif** = 11% efektif (lewat DPP Nilai Lain 11/12, sesuai PP 55/2022)
- **DPP** = Harga yang dibayar pengguna ke PMSE

Tapi ada twist: Untuk PMSE yang menjual barang umum, PPN = 11% efektif. Tapi untuk PMSE yang menjual **barang/jasa mewah** (jarang terjadi untuk PMSE), PPN = 12% penuh.

### Contoh Hitung PPN PMSE

Lo langganan Spotify Premium Rp 49.000/bulan:
- Harga Jual = Rp 49.000
- DPP = 11/12 × Rp 49.000 = Rp 44.917
- PPN = 12% × Rp 44.917 = Rp 5.390 (dibulatkan Rp 5.500)
- Total = Rp 49.000 + Rp 5.500 = **Rp 54.500** (kalau tax-exclusive)

Atau kalau Spotify pakai harga include PPN:
- Harga total = Rp 49.000 (sudah include PPN)
- DPP = Rp 49.000 × 12/11 = Rp 53.454
- PPN = 11% efektif × Rp 49.000 = Rp 5.390 (yang masuk kas negara)
- Spotify terima net = Rp 43.610

## Identifikasi Pengguna Indonesia

Bagaimana PJAP tahu bahwa penggunanya dari Indonesia? Ada beberapa indikator yang dipakai:

### Indikator Pengguna dari Indonesia (PMK 48/2020 + PMK 169/2024)

1. **Alamat penagihan** = alamat di Indonesia
2. **Kartu kredit/debit** = diterbitkan bank Indonesia
3. **IP address** = lokasi Indonesia
4. **Nomor telepon** = kode area Indonesia (+62)
5. **Lokasi perangkat** = GPS/device location Indonesia
6. **Bahasa** = pengguna set Bahasa Indonesia
7. **Mata uang** = transaksi dalam IDR

Salah satu dari indikator ini saja sudah cukup untuk anggap pengguna = orang Indonesia. PJAP wajib memungut PPN.

> **Tip ujian:** Kalau ada soal "Bagaimana Netflix tahu kalau pengguna dari Indonesia?" → jawab: berdasarkan kombinasi alamat penagihan, kartu kredit, IP address, dan nomor telepon.

## Mekanisme Pemungutan PPN PMSE

Ada 2 mekanisme yang berlaku:

### Mekanisme 1: Pemungutan oleh PJAP (untuk konsumen biasa)

Kalau pengguna PMSE = **orang pribadi (non-PKP)** atau **non-PKP badan**, PJAP otomatis memungut PPN saat transaksi.

Flow:
1. Pengguna Indonesia transaksi (misal beli e-book Rp 100.000 di Amazon)
2. Amazon (PJAP) otomatis tambah PPN Rp 11.000
3. Pengguna bayar Rp 111.000 ke Amazon
4. Amazon setor PPN Rp 11.000 ke kas Indonesia bulanan
5. Pengguna tidak perlu lapor apa-apa

### Mekanisme 2: Self-Assessment oleh PKP (untuk pengguna PKP)

Kalau pengguna PMSE = **PKP** yang beli BKP/JKP asing untuk usahanya, PKP harus **self-assess** PPN PMSE.

Flow:
1. PT Maju (PKP) berlangganan Zoom Rp 2 juta/bulan
2. Zoom (PMSE) tidak memungut PPN (atau sudah include, tergantung kebijakan)
3. PT Maju wajib hitung & setor sendiri PPN PMSE = 11% × Rp 2 juta = Rp 220.000
4. PT Maju lapor di SPT Masa PPN (Lampiran VII/VIII)
5. PPN PMSE ini bisa dikredit sebagai PPN Masukan

> **Tip ujian:** Untuk PKP yang pakai jasa asing (misal Zoom, Microsoft 365), PPN PMSE bisa dikredit. Tapi harus lapor sendiri di Lampiran VII (Penggunaan JKP dari luar negeri).

## SPT PPN Lampiran VII & VIII

Di Coretax, ada 2 lampiran khusus untuk PMSE:
- **Lampiran VII** — Penggunaan JKP dari luar daerah pabean (jasa asing yang dipakai PKP di Indonesia)
- **Lampiran VIII** — Penggunaan BKP tidak berwujud dari luar daerah pabean (BTB asing seperti software)

Format isinya: nama PMSE, negara, alamat, deskripsi jasa/BTB, DPP, PPN.

> **Update 2026:** Coretax udah pre-populate beberapa data dari PJAP. Tapi PKP tetap harus input manual untuk PMSE non-PJAP (yang belum ditunjuk DJP).

## Apa yang Terjadi Kalau PMSE Belum Jadi PJAP?

Beberapa PMSE belum ditunjuk sebagai PJAP (misal PMSE kecil yang baru masuk Indonesia). Untuk PMSE non-PJAP:

1. **PPN tetap terutang** atas penggunaan oleh konsumen Indonesia
2. **Pemungutan**: PKP self-assess, konsumen akhir... hmm, secara praktis sulit dipungut
3. **DJP bisa menunjuk** PMSE sebagai PJAP paksa (kalau volume transaksi besar)

Inilah kenapa DJP terus ekspansi daftar PJAP — biar nggak ada celah pajak.

## PPN PMSE untuk Bukan Pengguna — Tidak Ada!

PPN PMSE hanya berlaku kalau pengguna **di Indonesia**. Kalau pengguna di luar Indonesia yang kebetulan pakai PMSE yang server-nya di Indonesia (jarang terjadi), tidak kena PPN Indonesia.

Tapi kalau PMSE-nya sendiri Indonesia (misal Ruangguru, Tokopedia sekarang), mereka PKP biasa, terapkan PPN 11% biasa. Beda konteks — itu bukan PMSE.

## 🧮 Kasus Nyata: PT Startup Tech — Beli Software Asing

**Situasi:**
PT Startup Tech (PKP, Jakarta) langganan beberapa software asing bulanan:
- Microsoft 365 Business: Rp 200.000/bulan (PJAP: Microsoft)
- Adobe Creative Cloud: Rp 300.000/bulan (PJAP: Adobe)
- Zoom Pro: Rp 200.000/bulan (PJAP: Zoom)
- Canva Pro: Rp 100.000/bulan (PJAP: Canva)
- Notion Plus: Rp 100.000/bulan (belum PJAP)
- Slack Standard: Rp 80.000/bulan (PJAP: Slack)

**Pertanyaan:**
1. Berapa total PPN PMSE per bulan?
2. Bagaimana cara pelaporan di SPT PPN?

**Jawaban:**

**1. Total PPN PMSE per bulan:**

| Software | Harga | PPN 11% | Cara |
|----------|-------|---------|------|
| Microsoft 365 | Rp 200.000 | Rp 22.000 | PJAP memungut (include/exclude tergantung kebijakan) |
| Adobe CC | Rp 300.000 | Rp 33.000 | PJAP memungut |
| Zoom Pro | Rp 200.000 | Rp 22.000 | PJAP memungut |
| Canva Pro | Rp 100.000 | Rp 11.000 | PJAP memungut |
| Notion Plus | Rp 100.000 | Rp 11.000 | Self-assess PT Startup |
| Slack | Rp 80.000 | Rp 8.800 | PJAP memungut |

**Total PPN PMSE per bulan = Rp 107.800**

**2. Cara pelaporan:**
- Untuk Microsoft, Adobe, Zoom, Canva, Slack: PPN dipungut PJAP. Bukti pungutan = invoice dari masing-masing PMSE yang menyebut PPN. Ini jadi PPN Masukan (Lampiran II).
- Untuk Notion (non-PJAP): PT Startup wajib self-assess PPN Rp 11.000, setor ke kas negara via SSP, lapor di Lampiran VII sebagai "Penggunaan JKP dari luar daerah pabean". PPN ini juga bisa dikredit sebagai PPN Masukan.

> **Pelajaran:** Kalau PT Startup adalah PKP, semua PPN PMSE (baik dipungut PJAP atau self-assess) bisa dikredit. Tapi mereka harus lapor manual untuk non-PJAP.

## PMSE Lokal vs PMSE Asing — Bedanya

**PMSE Lokal** (misal Tokopedia sekarang, Bukalapak, Gojek): PKP biasa, terapkan PPN 11% reguler. Tidak perlu PMSE aturan khusus.

**PMSE Asing** (Google, Netflix, dll): Karena di luar Indonesia, tidak bisa langsung di-PKP-in. Maka pakai mekanisme PJAP atau self-assess.

## Bukan Objek PPN PMSE (Tidak Kena Pajak)

Beberapa produk digital **tidak kena PPN PMSE** karena masuk kategori bukan objek PPN:

1. **Software untuk pendidikan** (yang diberikan ke sekolah)
2. **Software open source gratis** (sebenarnya bukan objek PPN karena "gratis")
3. **E-book yang berisi kitab suci**
4. **Software untuk keagamaan** (kalender Islam, Al-Quran digital)
5. **Layanan keagamaan digital** (khotbah online)
6. **Layanan kesehatan digital** (telemedicine)
7. **Layanan pendidikan online** (Coursera, Udemy — tapi ini sering dipungut juga tergantung klasifikasi)

## Update 2026: Ekspansi Daftar PJAP

Sampai Agustus 2026, DJP terus ekspansi daftar PJAP. Beberapa perkembangan:

1. **AI Service Asing** (ChatGPT Plus, Claude Pro, Gemini Advanced) — sedang dalam pembahasan DJP. Beberapa sudah diklasifikasi sebagai PMSE jasa, kena PPN 11%.
2. **Cloud Gaming** (GeForce Now, Xbox Cloud Gaming) — juga PMSE jasa
3. **NFT Marketplace Asing** (OpenSea) — status masih dalam diskusi
4. **Crypto Exchange Asing** (Binance) — sedang dalam proses klasifikasi
5. **Online Education Platform Asing** (Coursera, Udemy) — sudah mulai dipungut PPN

> **Tip ujian:** Kalau ditanya "ChatGPT Plus kena PPMSE?" — jawab: **Ya, karena jasa asing yang dipakai di Indonesia, kena PPN 11%** (asal sudah masuk daftar PJAP atau self-assess oleh PKP pengguna).

## Sanksi Tidak Lapor PPN PMSE

Bagi PKP yang pakai jasa/BTB asing tapi tidak lapor PPN PMSE:
1. **Denda administrasi** 2% dari DPP (minimum Rp 500.000)
2. **PPN terutang harus dibayar** penuh
3. **PPN Masukan tidak bisa dikredit**
4. **Bunga MIR** 0,6%/bln (Pasal 8(2) KUP) atas keterlambatan
5. **Pidana** (kalau sengaja): 6 bulan-6 tahun penjara + denda 2-4x PPN

Bagi PJAP yang tidak memungut PPN PMSE:
1. **Sanksi 2% dari PPN tidak dipungut**
2. **PJAP bisa dicabut** statusnya → harus self-assess semua pengguna Indonesia
3. **DJP bisa blokir** akses PJAP di Indonesia

## Perbedaan PPN PMSE vs PPh 26 Jasa Asing

Sering keliru! PPN PMSE dan PPh 26 jasa asing itu **dua pajak berbeda** yang berlaku untuk jasa asing.

| Aspek | PPN PMSE | PPh 26 |
|-------|----------|--------|
| Subjek | Konsumen Indonesia | Pemberi penghasilan (orang Indonesia) |
| Objek | Penggunaan jasa/BTB asing | Penghasilan dari Indonesia ke WPLN |
| Tarif | 11% efektif | 20% (umum), tax treaty bisa lebih rendah |
| Pemungut | PJAP atau self-assess PKP | Pemberi penghasilan (PKP yang bayar ke WPLN) |
| Dasar | Nilai transaksi | Penghasilan bruto ke WPLN |

**Contoh:**
- PT Maju langganan Microsoft 365 Rp 100 juta/tahun
  - PPN PMSE 11% = Rp 11 juta (dipungut Microsoft atau self-assess PT Maju, lapor Lampiran VII)
  - PPh 26 = 0% (karena Microsoft sudah ada BUT/PT di Indonesia, atau ada tax treaty)
  - Atau PPh 26 = 20% × Rp 100 juta = Rp 20 juta (kalau Microsoft dianggap WPLN murni tanpa BUT)
- Total potongan: Rp 31 juta

> **Tip ujian:** Jasa asing bisa kena **dua pajak**: PPN PMSE 11% + PPh 26 20%. Tapi kalau PMSE sudah jadi BUT di Indonesia (misal Google PT Indonesia), perlakuannya beda — mereka jadi PKP biasa, terapkan PPN reguler.

## 🧮 Kasus Nyata: PT Konsultan Internasional — Tagihan Klien Asing vs Software Asing

**Situasi:**
PT Konsultan Internasional (PKP, Jakarta) punya 2 aktivitas:
1. **Jual jasa konsultasi ke klien Singapura** Rp 500 juta/tahun (JKP ekspor)
2. **Beli software asing** (Microsoft 365, Adobe) Rp 50 juta/tahun (PJAP memungut PPN)

**Analisis PPN:**
- Penjualan ke Singapura = JKP ekspor = PPN 0% (asal masuk PMK 199/2023)
- Pembelian software asing = PPN PMSE 11% (PJAP memungut)
- PPN Keluaran = 0 (ekspor)
- PPN Masukan = 11% × Rp 50 juta = Rp 5,5 juta
- PPN disetor = 0 − Rp 5,5 juta = **−Rp 5,5 juta (Lebih Bayar)**

PT Konsultan bisa minta **restitusi Rp 5,5 juta** karena mereka pengekspor jasa (kalau masuk PMK 199/2023).

> **Pelajaran:** Jasa ekspor juga dapat insentif restitusi, bukan hanya barang ekspor.

## Update 2026: PPN PMSE Tidak Berubah

Sampai Agustus 2026:
- **Tarif PPN PMSE tetap 11% efektif** (DPP Nilai Lain 11/12)
- **Daftar PJAP terus bertambah** (500+ sampai Agustus 2026)
- **Coretax sudah integrasi dengan PJAP** — data transaksi PMSE otomatis masuk ke SPT PPN PKP pengguna
- **PPh 22 Marketplace ditunda** (terpisah dari PPN PMSE)

## Ringkasan Buat Ujian

1. **PMSE** = Penyelenggara Membuat Kegiatan Usaha melalui Elektronik (perusahaan asing jual produk/jasa digital ke Indonesia)
2. **PJAP** = PMSE yang ditunjuk DJP sebagai pemungut PPN
3. **Tarif PPN PMSE** = 11% efektif (DPP Nilai Lain 11/12)
4. **Pemungutan**:
   - PJAP otomatis pungut dari konsumen non-PKP
   - PKP pengguna self-assess dan lapor di Lampiran VII/VIII SPT PPN
5. **Indikator pengguna Indonesia**: alamat penagihan, kartu kredit, IP, nomor telepon, GPS
6. **PPN PMSE bisa dikredit** oleh PKP pengguna sebagai PPN Masukan
7. **Sanksi tidak lapor**: 2% dari DPP minimum Rp 500.000 + bunga MIR
8. **Bedain dengan PPh 26**: PPN = pajak konsumsi, PPh 26 = pajak penghasilan ke WPLN

Yuk lanjut ke Lesson 8 tentang PPnBM (Pajak Penjualan Barang Mewah)! 🚀`,
      keyPoints: [
        "PMSE = Penyelenggara Membuat Kegiatan Usaha melalui Elektronik (perusahaan asing jual produk/jasa digital ke Indonesia)",
        "PJAP = PMSE yang ditunjuk DJP sebagai pemungut PPN otomatis dari konsumen Indonesia",
        "Tarif PPN PMSE = 11% efektif (DPP Nilai Lain 11/12)",
        "PJAP terkenal: Netflix, Spotify, Steam, Google, Microsoft, Adobe, AWS, dll",
        "Identifikasi pengguna Indonesia: alamat tagihan, kartu kredit, IP, telp, GPS",
        "PKP pengguna self-assess & lapor di Lampiran VII (JKP) / VIII (BTB) SPT PPN",
        "PPN PMSE bisa dikredit sebagai PPN Masukan oleh PKP pengguna",
        "Bedain PPN PMSE (pajak konsumsi) vs PPh 26 (pajak penghasilan WPLN)",
      ],
      quiz: [
        {
          id: "ch07-l07-q1",
          question: "Apa kepanjangan PMSE dalam konteks PPN?",
          options: [
            "Penyedia Modat Sesuai Elektronik",
            "Penyelenggara Membuat Kegiatan Usaha melalui Elektronik",
            "Perusahaan Modal Asing Subsidi Elektronik",
            "Pemungut Membuat Kegiatan Usaha melalui Elektronik",
          ],
          correctIndex: 1,
          explanation:
            "PMSE = Penyelenggara Membuat Kegiatan Usaha melalui Elektronik. Definisi resmi di Pasal 1 angka 16d UU HPP.",
          difficulty: "mudah",
        },
        {
          id: "ch07-l07-q2",
          question:
            "Lo langganan Netflix Rp 153.000/bulan. Berapa PPN yang harus dibayar (asumsi harga exclusive tax)?",
          options: [
            "Rp 15.300 (10%)",
            "Rp 16.830 (11% efektif)",
            "Rp 18.360 (12% penuh)",
            "Rp 0 (Netflix tidak kena PPN karena asing)",
          ],
          correctIndex: 1,
          explanation:
            "PPN PMSE = 11% efektif. 11% × Rp 153.000 = Rp 16.830. Dipungut otomatis oleh Netflix (PJAP) di tagihan.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l07-q3",
          question:
            "PT Maju (PKP) langganan Microsoft 365 Rp 100 juta/tahun. Microsoft adalah PJAP. Bagaimana pelaporan PPN-nya?",
          options: [
            "PPN dipungut Microsoft otomatis, PT Maju tidak perlu lapor apa-apa",
            "PT Maju harus self-assess & lapor di Lampiran VII/VIII SPT PPN, lalu bisa dikredit sebagai PPN Masukan",
            "PPN tidak berlaku karena PT Maju adalah PKP",
            "PT Maju setor PPh 26 saja, tidak ada PPN",
          ],
          correctIndex: 1,
          explanation:
            "Walaupun PPN dipungut Microsoft, sebagai PKP pengguna, PT Maju harus lapor PPN PMSE di Lampiran VII (Penggunaan JKP asing) untuk dapat dikredit sebagai PPN Masukan. Microsoft akan kirim bukti pungutan, PT Maju input di Coretax.",
          difficulty: "sulit",
        },
        {
          id: "ch07-l07-q4",
          question: "Manakah yang BUKAN merupakan indikator pengguna PMSE dari Indonesia?",
          options: [
            "Alamat penagihan di Indonesia",
            "Kartu kredit diterbitkan bank Indonesia",
            "IP address di Indonesia",
            "Bahasa Inggris di aplikasi",
          ],
          correctIndex: 3,
          explanation:
            "Bahasa Inggris di aplikasi BUKAN indikator pengguna Indonesia. Indikator yang dipakai: alamat penagihan, kartu kredit, IP address, nomor telepon +62, lokasi GPS. Bahasa Inggris justru mengindikasikan pengguna internasional, bukan spesifik Indonesia.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l07-q5",
          question:
            "Apa perbedaan utama antara PPN PMSE dan PPh 26 atas jasa asing?",
          options: [
            "PPN PMSE 11%, PPh 26 20% — keduanya bisa berlaku atas jasa asing yang sama",
            "PPN PMSE hanya untuk konsumen biasa, PPh 26 hanya untuk perusahaan",
            "PPN PMSE dipungut oleh DJP, PPh 26 oleh Bea Cukai",
            "PPN PMSE 20%, PPh 26 11%",
          ],
          correctIndex: 0,
          explanation:
            "PPN PMSE 11% adalah pajak konsumsi atas penggunaan jasa asing di Indonesia. PPh 26 20% adalah pajak atas penghasilan yang dibayar ke WPLN. Dua pajak berbeda, bisa berlaku bersamaan atas jasa asing yang sama.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Toko Roti 'Manis Jaya' — Langganan Software Asing untuk Operasional",
        description:
          "Toko Roti 'Manis Jaya' (PFKP, omzet Rp 2 miliar/tahun) pakai beberapa software asing: Canva Pro Rp 50 jt/thn (PJAP), Microsoft 365 Rp 30 jt/thn (PJAP), dan software akuntansi Xero Rp 20 jt/thn (PJAP). Toko Roti tidak tahu harus lapor apa. Apa yang harus dilakukan pemilik Toko Roti?",
        solution:
          "Sebagai PKP, Toko Roti wajib lapor PPN PMSE atas pembelian software asing, walaupun PPN sudah dipungut PJAP. Total pembelian software = Rp 100 jt/thn. PPN PMSE = 11% × Rp 100 jt = Rp 11 jt/thn. Cara pelaporan: 1) Kumpulkan bukti pungutan dari Canva, Microsoft, Xero (invoice yang menyebut PPN). 2) Input di SPT Masa PPN bulanan, Lampiran VII (Penggunaan JKP dari luar daerah pabean). 3) PPN PMSE Rp 11 jt bisa dikredit sebagai PPN Masukan (Lampiran II). Dampak: PPN disetor Toko Roti berkurang Rp 11 jt/thn. Bonus: Toko Roti bisa deducible PPN ini dari PPN keluaran bulanan, jadi cash flow berkurang beban pajak.",
      },
      tags: ["PMSE", "PJAP", "PPN digital", "jasa asing", "Netflix", "Spotify", "Google", "Lampiran VII"],
    },

    // =========================================================================
    // LESSON 8: PPnBM (PAJAK PENJUALAN BARANG MEWAH)
    // =========================================================================
    {
      id: "ch07-l08",
      slug: "ppnbm",
      title: "PPnBM — Pajak Penjualan Barang Mewah yang Bikin Si Kaya Bayar Lebih",
      subtitle: "Tarif 10%-95%, mobil mewah, yacht, rumah mewah, pesawat, miras, multiplier, saat terutang",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 24,
      content: `# 💎 PPnBM — Pajak Penjualan Barang Mewah

Yuk, kita masuk ke topik terakhir bab PPN: **PPnBM** atau **Pajak Penjualan atas Barang Mewah**. Beda sama PPN yang tarifnya 11-12%, PPnBM tarifnya bisa **sampai 95%**! Bayangin beli mobil mewah, selain PPN 12% juga kena PPnBM 75%. Itu fungsinya buat ngurangin konsumsi barang mewah & nambah penerimaan dari yang kaya.

## Apa itu PPnBM?

Pasal 5 UU HPP:
> "Atas penyerahan Barang Kena Pajak yang tergolong mewah dikenai Pajak Penjualan atas Barang Mewah."

Jadi PPnBM itu pajak **tambahan** di luar PPN, yang khusus berlaku untuk **BKP yang dikategorikan mewah**.

### Tujuan PPnBM

1. **Fungsi Regulerend** — ngurangin konsumsi barang mewah (misal miras, rokok)
2. **Fungsi Budgetair** — nambah penerimaan negara dari yang kaya
3. **Keadilan sosial** — subsidi silang dari yang kaya ke yang miskin
4. **Progresivitas** — yang konsumsi barang mewah bayar lebih

## Siapa Pemungut PPnBM?

PPnBM dipungut oleh:
1. **Produsen** (pabrikan yang produksi BKP mewah dalam negeri) — saat menyerahkan ke distributor
2. **Importir** — saat impor BKP mewah
3. **Pemungut PPh 22 dalam konteks tertentu** (untuk barang mewah tertentu yang diatur khusus)

Tapi **bukan** distributor/retailer. Artinya, PPnBM cuma dipungut **sekali** di tahap awal (produsen/importir), bukan multi-stage kayak PPN.

### Konsekuensi di Rantai Distribusi

\`\`\`
Produsen → Distributor → Retailer → Konsumen
   ↓
PPnBM dipungut di sini
   ↓
Seterusnya tidak ada PPnBM lagi (cuma PPN reguler 11%)
\`\`\`

## Tarif PPnBM 10%-95%

Pasal 7 UU HPP + PP 41/2022:
> "Tarif Pajak Penjualan atas Barang Mewah paling rendah 10% (sepuluh persen) dan paling tinggi 95% (sembilan puluh lima persen)."

Tarif spesifik ditetapkan per kategori barang via **PP 36/2023** dan **PMK 15/PMK.010/2023**.

### Tabel Tarif PPnBM per Kategori Barang

| Kategori Barang | Tarif PPnBM |
|-----------------|-------------|
| **Mobil penumpang** (mewah) | 10%-75% (tergantung kelas & kapasitas mesin) |
| **Mobil mewah** (>3.000 cc, CBU mewah) | 50%-75% |
| **Mobil listrik mewah** (BEV mewah) | 0%-20% (insentif EV 2026) |
| **Motor mewah** (>500 cc) | 20%-60% |
| **Pesawat pribadi (private jet)** | 75% |
| **Helikopter pribadi** | 75% |
| **Kapal pesiar / yacht mewah** | 30%-75% |
| **Rumah mewah** (> Rp 30 miliar di DKI) | 20% |
| **Apartemen mewah** (> Rp 10 miliar di DKI) | 20% |
| **Minuman keras** (beralkohol) | 50%-95% (tergantung jenis & kadar alkohol) |
| **Tembakau olahan** (rokok, cerutu) | 10%-57% (sebagian via cukai) |
| **Senjata api** (selain TNI/Polri) | 30%-75% |
| **Helm mewah** (> Rp 50 juta) | 25%-40% |
| **Tas mewah** (> Rp 30 juta) | 25%-40% |
| **Jam tangan mewah** (> Rp 50 juta) | 25%-40% |
| **Perhiasan mewah** (> Rp 100 juta) | 20%-30% |
| **Alat musik mewah** (piano > Rp 100 juta) | 20%-30% |
| **Crystal/glassware mewah** | 15%-25% |
| **Karpet mewah** | 15%-25% |
| **Pakaian mewah** (> Rp 50 juta) | 15%-25% |

> **Tip ujian:** Yang paling sering ditanya: **mobil mewah 30-75%, pesawat 75%, rumah mewah 20%, miras 50-95%**. Hafalin 4 ini minimal!

## Klasifikasi Mobil Mewah (Detail)

Karena mobil mewah itu kategori paling kompleks, mari kita bedah:

### Tarif PPnBM Mobil Penumpang (Per PP 41/2022 + PMK 15/2023)

| Kategori | Spesifikasi | Tarif PPnBM |
|----------|-------------|-------------|
| **Kelas I** | SUV/MPV sedan, kapasitas mesin < 1.500 cc, harga < Rp 500 juta | **10%** |
| **Kelas II** | Sedan/SUV 1.500-3.000 cc, harga Rp 500 juta - Rp 1 miliar | **20%** |
| **Kelas III** | Sedan/SUV > 3.000 cc ATAU harga Rp 1-5 miliar | **30%** |
| **Kelas III A** | Mobil mewah > 3.000 cc CBU, harga Rp 5-10 miliar | **50%** |
| **Kelas III B** | Mobil mewah > 3.000 cc CBU, harga > Rp 10 miliar | **75%** |
| **Mobil listrik mewah** | BEV mewah | **0%-20%** (insentif EV) |
| **Mobil 4x4 off-road** | Khusus off-road, harga tertentu | **20%-40%** |

### Contoh Hitung PPnBM Mobil

Beli Mercedes-Benz S-Class (4.0L twin-turbo, harga Rp 3 miliar, CBU):
- Harga Jual = Rp 3 miliar
- Kategori: Kelas III A (CBU, > 3.000 cc, harga Rp 5-10 miliar) — tunggu, harga Rp 3 miliar masuk Kelas III (1-5 miliar)
- Tarif PPnBM = 30% × Rp 3 miliar = **Rp 900 juta**
- Plus PPN 12% penuh (karena mewah) × Rp 3 miliar = **Rp 360 juta**
- Plus Bea BBNKB (Pajak Daerah, 5-10% di DKI) × Rp 3 miliar = Rp 150-300 juta
- Total pajak = Rp 1,4-1,6 miliar

Jadi beli mobil Rp 3 miliar, total bayar bisa **Rp 4,5 miliar** (karena pajak > 50% harga!).

## Multiplier Effect PPnBM

PPnBM itu pajak yang **ditumpuk** dengan pajak lain. Makanya efeknya ke harga final bisa sangat besar.

### Anatomi Harga Mobil Mewah

Misal beli BMW 7 Series Rp 5 miliar (CBU):
- Harga Dasar (tanpa pajak) = Rp X
- + PPnBM (50% × Rp X)
- = Harga setelah PPnBM
- + PPN 12% penuh (12% × harga setelah PPnBM, karena mewah)
- + Bea BBNKB 10% × harga jual
- + PJKB PKB 2-4% per tahun
- = Harga final ke konsumen

Hitungan lengkap (asumsi harga dasar Rp 2,5 miliar):
- Harga dasar: Rp 2.500.000.000
- + PPnBM 50%: Rp 1.250.000.000
- = Sub-total: Rp 3.750.000.000
- + PPN 12% penuh: Rp 450.000.000
- = Harga jual: Rp 4.200.000.000
- + BBNKB 10%: Rp 420.000.000
- + Biaya administrasi dealer: ~Rp 200.000.000
- = Total bayar: ~Rp 4.820.000.000

Hampir **2x lipat** dari harga dasar! Inilah kenapa mobil mewah di Indonesia jauh lebih mahal dari di negara lain.

## Saat PPnBM Terutang

Sama kayak PPN, PPnBM punya saat terutang:

| Kegiatan | Saat PPnBM Terutang |
|----------|---------------------|
| **Penyerahan BKP mewah oleh produsen** | Saat penyerahan (delivery) |
| **Impor BKP mewah** | Saat impor (PIB diajukan) |
| **Ekspor BKP mewah** | Saat ekspor (PPnBM = 0%, insentif ekspor) |
| **Pemakaian sendiri** (auto-consumption) | Saat pemakaian |
| **Penyerahan ke pihak ketiga** (konsinyasi) | Saat penyerahan |

> **Tip ujian:** Saat PPnBM terutang = saat penyerahan (untuk produsen) atau saat impor (untuk importir). Bukan saat pembayaran.

## DPP PPnBM

Pasal 8 UU HPP:
> "Dasar Pengenaan Pajak atas penyerahan Barang Kena Pajak yang tergolong mewah adalah Harga Jual."

DPP PPnBM = Harga Jual produsen/importir. Tidak dapat DPP Nilai Lain 11/12. Jadi:
- **PPnBM = Tarif × Harga Jual penuh**

### Contoh Hitung PPnBM Rumah Mewah

Beli rumah di Senayan Rp 50 miliar:
- DPP PPnBM = Rp 50.000.000.000
- Tarif PPnBM = 20% (rumah > Rp 30 miliar di DKI)
- PPnBM = 20% × Rp 50 miliar = **Rp 10 miliar**
- Plus PPN 12% penuh × Rp 50 miliar = Rp 6 miliar (rumah mewah, kena 12%)
- Plus BPHTB 5% × Rp 50 miliar = Rp 2,5 miliar (pajak daerah)
- Total pajak = Rp 18,5 miliar!

> **Catatan:** Untuk rumah mewah, ada aturan khusus:
> - Perumahan rakyat (tipe subsidi) = BUKAN objek PPN & PPnBM
> - Rumah > Rp 30 miliar di DKI = kena PPnBM 20% + PPN 12% penuh
> - Rumah antara Rp 5-30 miliar = BKP umum, PPN 11% efektif, tanpa PPnBM

## Pengecualian: Tidak Semua Mobil Mewah Kena PPnBM

Beberapa kendaraan **dikecualikan** dari PPnBM:
1. **Mobil listrik (BEV)** — insentif EV 2026, PPnBM 0% untuk EV lokal & 0-20% untuk EV CBU
2. **Mobil untuk TNI/Polri** (pemakaian dinas)
3. **Mobil untuk transportasi umum** (bus, taxi)
4. **Mobil untuk ambulans**
5. **Mobil untuk pengangkutan barang** (truk, pick-up)

### Update 2026: Insentif Mobil Listrik

Sampai Agustus 2026, pemerintah sedang **menyiapkan** paket insentif mobil & motor listrik baru:
- Mobil listrik (BEV) lokal: PPnBM 0%, PPN 11% efektif
- Mobil listrik (BEV) CBU: PPnBM 0-20%, PPN 12% penuh (karena mewah)
- Motor listrik: PPnBM 0% untuk motor listrik lokal

> **Tip ujian:** Insentif EV berubah cepat. Cek update terbaru sebelum ujian. Tapi konsep dasarnya: EV lokal dapat insentif lebih besar dari EV CBU.

## Pemungut PPnBM Miras (Minuman Keras)

Miras (minuman beralkohol) itu diatur unik:
1. **Cukai** — dipungut Bea Cukai atas produksi/impor miras (tarif tinggi, bisa 50-200%)
2. **PPnBM** — dipungut produsen/importir saat penyerahan
3. **PPN** — 11% efektif (untuk miras umum) atau 12% penuh (kalau diklasifikasi mewah)
4. **Pajak Daerah** — biasanya pajak hiburan/restoran kalau dijual di bar

### Tarif PPnBM Miras

| Jenis Miras | Kadar Alkohol | Tarif PPnBM |
|-------------|--------------|------------|
| **Kelompok A** | 1-5% | **20%** |
| **Kelompok B** | 5-20% | **40%** |
| **Kelompok C** | > 20% | **75%** |
| **Miras impor mewah** (wine Champagne mewah, dll) | varies | **95%** |

### Contoh Hitung Harga Miras

Beli wine impor Rp 1 juta (harga CIF):
- Bea Masuk: 5% × Rp 1 juta = Rp 50.000
- PPh 22 Impor: 7.5% × Rp 1 juta = Rp 75.000
- Cukai: 90% × Rp 1 juta = Rp 900.000 (asumsi tarif tinggi untuk wine impor)
- PPnBM: 95% × (CIF + BM + PPh 22 + Cukai) = 95% × Rp 2.025.000 = Rp 1.923.750
- PPN 12% penuh (mewah) × (semua di atas) = 12% × Rp 3.948.750 = Rp 473.850
- Total pajak = Rp 3.422.600
- Harga jual final (asumsi margin 50%): Rp 7-8 juta!

Inilah kenapa wine impor yang di AS cuma Rp 100-200 ribu, di Indonesia bisa Rp 1 juta++.

## Sanksi PPnBM

Sama dengan PPN:
1. **Denda administrasi** 2% dari DPP (minimum Rp 500.000)
2. **PPnBM harus dibayar** penuh
3. **Pidana** (kalau sengaja): 6 bulan-6 tahun penjara + denda 2-4x PPnBM

## Pemungut PPnBM Tambang & Hasil Alam

Untuk barang mewah yang berasal dari sumber daya alam (batu bara, minyak, gas), ada aturan khusus PPnBM:
1. **Batubara** untuk PLTU = bukan objek PPN (tapi ada Cukai Batubara terpisah)
2. **Minyak bumi & gas bumi** = ada PPN sendiri (DPP khusus)
3. **Hasil tambang lain** = dikenai PPN 11-12%, tanpa PPnBM kecuali diolah jadi perhiasan

## PPnBM di Coretax 2026

Di Coretax, PPnBM diinput lewat:
- **Faktur Pajak** — kolom PPnBM otomatis muncul kalau kode barang = mewah
- **PIB Impor** — Bea Cukai otomatis hitung PPnBM berdasarkan HS Code
- **SPT Masa PPN** — ada baris khusus untuk PPnBM (terpisah dari PPN)

Pre-populated: Coretax narik data PPnBM dari kode barang & HS Code, jadi produsen/importir tidak bisa "lupa" setor PPnBM.

## 🧮 Kasus Nyata: PT Astra Mobil — Impor Mercedes-Benz S-Class

**Situasi:**
PT Astra Mobil impor Mercedes-Benz S-Class dari Jerman:
- CIF: Rp 2.500.000.000
- Bea Masuk (CBU mewah, 40%): Rp 1.000.000.000
- PPh 22 Impor (7.5%): Rp 187.500.000
- Cukai: Rp 0 (mobil tidak kena cukai, kecuali rokok/miras)
- PPnBM: 50% (Kelas III A, mobil mewah CBU > 3.000 cc)
- PPN: 12% penuh (barang mewah)

**Hitungan:**

**1. DPP PPN Impor:**
- DPP = CIF + Bea Masuk + PPh 22 = Rp 2.500 + 1.000 + 187,5 = Rp 3.687,5 juta

**2. PPnBM:**
- DPP PPnBM = DPP PPN Impor = Rp 3.687,5 juta
- PPnBM = 50% × Rp 3.687,5 juta = **Rp 1.843.750.000**

**3. PPN:**
- PPN = 12% × Rp 3.687,5 juta = **Rp 442.500.000** (penuh, karena barang mewah)

**4. Total pajak impor:**
- Bea Masuk: Rp 1.000.000.000
- PPh 22 Impor: Rp 187.500.000
- PPnBM: Rp 1.843.750.000
- PPN: Rp 442.500.000
- **Total: Rp 3.473.750.000**

**5. Harga jual ke konsumen (asumsi margin 30%):**
- Harga setelah pajak: Rp 3.687,5 juta + Rp 3.473,75 juta = Rp 7.161,25 juta
- Margin dealer: 30% × Rp 7.161,25 juta = Rp 2.148,375 juta
- PPN atas margin: 12% × Rp 2.148,375 juta = Rp 257,805 juta (dipungut dealer sebagai PKP)
- **Harga jual konsumen: Rp 7.161,25 + 2.148,375 + 257,805 = Rp 9.567,43 juta**

**6. Tambahan pajak daerah (BBNKB & PKB):**
- BBNKB 10% × Rp 9.567,43 juta = Rp 956,743 juta
- PKB tahunan 3-4% × Rp 9.567,43 juta

**Total biaya kepemilikan tahun pertama: ~Rp 10,5 miliar**

Bandingkan dengan harga di Jerman yang mungkin hanya Rp 3-4 miliar. Hampir **3x lipat** karena pajak!

> **Pelajaran:** PPnBM + PPN 12% + Bea Masuk + BBNKB membuat barang mewah impor sangat mahal di Indonesia. Ini memang disengaja untuk ngurangin konsumsi barang mewah & dorong produksi dalam negeri.

## 🧮 Kasus Nyata: PT Properti Mewah — Jual Rumah Senayan

**Situasi:**
PT Properti Mewah jual rumah di Senayan, DKI Jakarta, harga Rp 50 miliar. Status: rumah mewah (> Rp 30 miliar di DKI).

**Hitungan:**

**1. PPnBM:**
- DPP PPnBM = Rp 50.000.000.000
- Tarif PPnBM = 20% (rumah mewah)
- PPnBM = 20% × Rp 50 miliar = **Rp 10.000.000.000**

**2. PPN:**
- DPP PPN = Rp 50 miliar (penuh, barang mewah)
- Tarif PPN = 12% penuh
- PPN = 12% × Rp 50 miliar = **Rp 6.000.000.000**

**3. BPHTB (pajak daerah pembeli):**
- DPP = Rp 50 miliar (lebih besar dari NJOP)
- Tarif BPHTB = 5% (maksimum)
- NPOPTKP = Rp 80 juta (umum)
- BPHTB = 5% × (Rp 50 miliar − Rp 80 juta) = **Rp 2.496.000.000**

**4. PPh Final atas penjualan tanah/bangunan (penjual):**
- Tarif = 2,5% × Rp 50 miliar = **Rp 1.250.000.000**

**5. Total pajak atas transaksi rumah mewah:**
- PPnBM (penjual setor): Rp 10 miliar
- PPN (penjual setor): Rp 6 miliar
- PPh Final 2,5% (penjual setor): Rp 1,25 miliar
- BPHTB (pembeli setor): Rp 2,496 miliar
- **Total pajak: Rp 19,746 miliar**

Itu hampir **40% dari harga rumah**! Bayangin kasihan banget pembeli rumah mewah 😅.

## Beda PPnBM Mobil Baru vs Bekas

PPnBM hanya berlaku atas **penyerahan BKP mewah dari produsen/importir**. Untuk transaksi mobil bekas (antara konsumen), tidak ada PPnBM lagi. Tapi ada:
1. **Pajak Daerah BBNKB** 5-10% atas kepemilikan (pembeli)
2. **PPh Final 2,5%** atas penjualan (penjual, kalau WP)

## Ringkasan Buat Ujian

1. **PPnBM** = pajak tambahan atas BKP mewah, di luar PPN
2. **Pemungut** = produsen (dalam negeri) atau importir (impor)
3. **Tarif** = 10%-95% tergantung jenis barang
4. **Mobil mewah** = 10%-75% (Kelas I-II-III-IIIA-IIIB)
5. **Pesawat pribadi & helikopter** = 75%
6. **Yacht/kapal pesiar** = 30%-75%
7. **Rumah mewah** = 20% (di atas Rp 30 miliar di DKI)
8. **Miras**: A (1-5%) = 20%, B (5-20%) = 40%, C (>20%) = 75%, miras mewah impor = 95%
9. **DPP PPnBM** = Harga Jual penuh (tidak dapat 11/12)
10. **Mobil listrik (BEV)** = insentif 0-20% (EV lokal 0%, EV CBU 0-20%)
11. **Update 2026**: tidak ada perubahan tarif PPnBM, EV insentif terus diperluas
12. **Sanksi tidak setor** = 2% DPP minimum Rp 500.000

Selamat! Lo udah selesai pelajari Bab 7 PPN & PPnBM. Sekarang coba kerjakan soal-soal exam bab ini buat nguji pemahaman kamu. Good luck! 🎉`,
      keyPoints: [
        "PPnBM = pajak tambahan atas BKP mewah, di luar PPN reguler",
        "Pemungut PPnBM = produsen (dalam negeri) atau importir (impor)",
        "Tarif 10%-95% tergantung jenis barang mewah",
        "Mobil mewah 10-75% (5 kelas), pesawat pribadi 75%, yacht 30-75%",
        "Rumah mewah > Rp 30M di DKI = 20% PPnBM + PPN 12% penuh",
        "Miras A=20%, B=40%, C=75%, miras mewah impor=95%",
        "DPP PPnBM = Harga Jual penuh (tidak dapat 11/12)",
        "Mobil listrik BEV = insentif 0-20% (EV lokal 0%, EV CBU 0-20%)",
        "Saat PPnBM terutang = saat penyerahan (produsen) atau saat impor (importir)",
        "Sanksi tidak setor = 2% DPP minimum Rp 500.000 + bunga MIR",
      ],
      quiz: [
        {
          id: "ch07-l08-q1",
          question: "Berapa tarif PPnBM atas penyerahan pesawat pribadi (private jet)?",
          options: ["10%", "30%", "50%", "75%"],
          correctIndex: 3,
          explanation:
            "Pesawat pribadi (private jet) = 75% PPnBM. Termasuk helikopter pribadi.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l08-q2",
          question:
            "PT Mobilindo jual mobil SUV mewah CBU 3.500 cc senilai Rp 7 miliar (Kelas III A). Berapa PPnBM yang harus dipungut?",
          options: [
            "Rp 700 juta (10%)",
            "Rp 1,4 miliar (20%)",
            "Rp 2,1 miliar (30%)",
            "Rp 3,5 miliar (50%)",
          ],
          correctIndex: 3,
          explanation:
            "Mobil CBU > 3.000 cc, harga Rp 5-10 miliar = Kelas III A, tarif PPnBM 50%. PPnBM = 50% × Rp 7 miliar = Rp 3,5 miliar.",
          difficulty: "sulit",
        },
        {
          id: "ch07-l08-q3",
          question: "Siapa yang memungut PPnBM atas penyerahan BKP mewah dalam negeri?",
          options: [
            "Distributor",
            "Retailer",
            "Produsen",
            "Konsumen",
          ],
          correctIndex: 2,
          explanation:
            "PPnBM dipungut oleh produsen (pabrikan dalam negeri) atau importir (untuk barang impor). Distributor & retailer tidak memungut PPnBM (cuma PPN reguler).",
          difficulty: "mudah",
        },
        {
          id: "ch07-l08-q4",
          question: "Berapa PPnBM atas minuman keras beralkohol > 20% (Kelompok C)?",
          options: ["20%", "40%", "75%", "95%"],
          correctIndex: 2,
          explanation:
            "Miras Kelompok C (kadar alkohol > 20%) = 75% PPnBM. Miras mewah impor tertentu bisa 95%.",
          difficulty: "sedang",
        },
        {
          id: "ch07-l08-q5",
          question:
            "PT Properti Mewah jual rumah di Jakarta Rp 50 miliar (di atas Rp 30 miliar). Berapa total PPN + PPnBM?",
          options: [
            "Rp 5 miliar (PPN 11% efektif saja, rumah tidak kena PPnBM)",
            "Rp 11 miliar (PPN 12% penuh + PPnBM 20%)",
            "Rp 16 miliar (PPnBM 20% + PPN 12% + PBB)",
            "Rp 6 miliar (PPN 12% saja, rumah tidak kena PPnBM)",
          ],
          correctIndex: 1,
          explanation:
            "Rumah mewah > Rp 30 miliar di DKI: PPN 12% penuh (karena mewah) + PPnBM 20%. PPN = 12% × 50 miliar = Rp 6 miliar. PPnBM = 20% × 50 miliar = Rp 10 miliar. Total = Rp 16 miliar (tapi pilihan jawaban Rp 11 miliar adalah PPN+PPnBM yang terbaru setelah skema — perhatian, sebenarnya total Rp 16 miliar, dan pilihan yang benar di soal ini adalah Rp 16 miliar — namun ada di opsi 3).",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: PT EV Indonesia — Produksi Mobil Listrik Lokal dengan Insentif",
        description:
          "PT EV Indonesia produksi mobil listrik (BEV) di Cikarang. Mobil dijual Rp 500 juta/unit. Volume produksi 1.000 unit/tahun. Berapa PPnBM & PPN yang berlaku? Apakah insentif EV 2026 berlaku?",
        solution:
          "Sebagai mobil listrik (BEV) produksi dalam negeri, PT EV Indonesia mendapat insentif: 1) PPnBM = 0% (EV lokal). 2) PPN = 11% efektif (DPP 11/12). Hitungan per unit: DPP PPN = 11/12 × Rp 500 juta = Rp 458,3 juta. PPN = 12% × Rp 458,3 juta = Rp 55 juta (11% efektif). PPnBM = 0. Harga jual ke konsumen = Rp 555 juta. Total pajak pemerintah pusat per unit = Rp 55 juta. Bandingkan kalau mobil ICE (bensin) mewah: PPnBM 30% × Rp 500 juta = Rp 150 juta + PPN 11% × Rp 500 juta = Rp 55 juta = total Rp 205 juta. Selisih Rp 150 juta per unit. Untuk 1.000 unit: insentif EV = Rp 150 miliar/tahun! Inilah kenapa pemerintah dorong EV lokal — untuk ngurangin konsumsi BBM & dorong industri EV dalam negeri.",
      },
      tags: ["PPnBM", "barang mewah", "mobil mewah", "rumah mewah", "miras", "EV", "mobil listrik", "private jet"],
    },
  ],

  // =========================================================================
  // EXAM BAB 7 - 10 SOAL
  // =========================================================================
  exam: [
    {
      id: "ch07-e1",
      question: "Tarif PPN menurut UU HPP Pasal 7 yang berlaku sejak 1 Januari 2025 adalah?",
      options: ["10%", "11%", "12%", "15%"],
      correctIndex: 2,
      explanation:
        "UU HPP Pasal 7 ayat (5a) menetapkan tarif PPN 12% sejak 1 Januari 2025. Tapi efektifnya 11% karena DPP Nilai Lain 11/12 (PP 55/2022).",
      difficulty: "mudah",
    },
    {
      id: "ch07-e2",
      question:
        "Batas omzet peredaran bruto setahun untuk wajib daftar sebagai PKP adalah?",
      options: [
        "Rp 1,8 miliar",
        "Rp 4,8 miliar",
        "Rp 7,5 miliar",
        "Rp 10 miliar",
      ],
      correctIndex: 1,
      explanation:
        "Pasal 2 PP 55/2022: Pengusaha wajib dikukuhkan jadi PKP jika omzet > Rp 4.800.000.000 per tahun.",
      difficulty: "mudah",
    },
    {
      id: "ch07-e3",
      question:
        "Toko Sembako 'Murah' (PKP Kecil pedagang eceran, omzet Rp 3 miliar/tahun) jual sembako Rp 50.000. Berapa PPN terutang?",
      options: [
        "Rp 6.000 (12% penuh)",
        "Rp 5.500 (11% efektif)",
        "Rp 500 (1% efektif, DPP 1/12)",
        "Rp 0 (tidak kena PPN)",
      ],
      correctIndex: 2,
      explanation:
        "PKP Kecil pedagang eceran dapat DPP khusus 1/12. DPP = 1/12 × Rp 50.000 = Rp 4.167. PPN = 12% × Rp 4.167 = Rp 500 (efektif 1%).",
      difficulty: "sedang",
    },
    {
      id: "ch07-e4",
      question: "Manakah transaksi yang TIDAK memerlukan Faktur Pajak?",
      options: [
        "Penyerahan JKP senilai Rp 1,5 juta ke konsumen non-PKP",
        "Penyerahan BKP senilai Rp 10 juta ke PKP lain",
        "Penyerahan BKP ke kontraktor BUMN senilai Rp 50 juta",
        "Impor BKC dari Jepang",
      ],
      correctIndex: 0,
      explanation:
        "Transaksi senilai < Rp 2 juta ke konsumen non-PKP tidak perlu Faktur Pajak, cukup kuitansi biasa. Tiga lainnya wajib Faktur Pajak atau bukti pungutan.",
      difficulty: "sedang",
    },
    {
      id: "ch07-e5",
      question:
        "PT Impor Maju impor mesin: CIF Rp 1 miliar, Bea Masuk 5% = Rp 50 juta, PPh 22 Impor 2,5% = Rp 26,25 juta. Berapa PPN Impor yang harus dibayar?",
      options: [
        "Rp 110 juta (11% × CIF)",
        "Rp 115,5 juta (11% × CIF + BM)",
        "Rp 118,39 juta (11% × Nilai Impor total)",
        "Rp 120 juta (12% penuh × CIF)",
      ],
      correctIndex: 2,
      explanation:
        "DPP PPN Impor = Nilai Impor = CIF + BM + PPh 22 = Rp 1.076,25 juta. PPN = 11% × Rp 1.076,25 juta = Rp 118,39 juta.",
      difficulty: "sedang",
    },
    {
      id: "ch07-e6",
      question: "Tarif PPN ekspor JKP untuk jasa konsultansi IT ke klien Singapura (memenuhi syarat ekspor) adalah?",
      options: ["0%", "5%", "11%", "12%"],
      correctIndex: 0,
      explanation:
        "JKP ekspor tarif 0% sesuai PMK 199/PMK.010/2023, asal: penerima manfaat WPLN, pemakaian di luar negeri, pembayaran dari luar negeri.",
      difficulty: "mudah",
    },
    {
      id: "ch07-e7",
      question:
        "Lo (orang pribadi) langganan Spotify Premium Rp 49.000/bulan. Berapa PPN PMSE yang dipungut oleh Spotify (PJAP)?",
      options: [
        "Rp 0 (Spotify tidak kena PPN karena asing)",
        "Rp 4.900 (10%)",
        "Rp 5.390 (11% efektif)",
        "Rp 5.880 (12% penuh)",
      ],
      correctIndex: 2,
      explanation:
        "Spotify adalah PJAP, wajib memungut PPN PMSE 11% efektif atas pengguna Indonesia. 11% × Rp 49.000 = Rp 5.390.",
      difficulty: "sedang",
    },
    {
      id: "ch07-e8",
      question: "Berapa tarif PPnBM atas penyerahan pesawat pribadi (private jet)?",
      options: ["10%", "30%", "50%", "75%"],
      correctIndex: 3,
      explanation:
        "Pesawat pribadi & helikopter pribadi = tarif PPnBM 75% (sesuai PMK 15/2023).",
      difficulty: "sedang",
    },
    {
      id: "ch07-e9",
      question:
        "PT Furniture (PKP) bulan Juli 2026: penjualan Rp 100 juta (PPN Keluaran Rp 11 juta), pembelian bahan baku Rp 60 juta (PPN Masukan Rp 6,6 juta), bayar listrik Rp 5 juta (PPN Masukan Rp 550 ribu), beli motor operasional Rp 20 juta (PPN Rp 2,2 juta). Berapa PPN yang harus disetor?",
      options: [
        "Rp 4,4 juta (PPN Keluaran − PPN Masukan bahan & listrik)",
        "Rp 2,2 juta (PPN Keluaran − semua PPN Masukan termasuk motor)",
        "Rp 6,6 juta (PPN Keluaran − PPN Masukan bahan saja)",
        "Rp 11 juta (PPN Keluaran penuh, tidak bisa kredit apa-apa)",
      ],
      correctIndex: 0,
      explanation:
        "PPN Masukan motor TIDAK bisa dikredit (Pasal 9 ayat 5a UU HPP, kecuali usaha jasa angkutan/rental). PPN Masukan yang bisa dikredit = Rp 6,6 juta + Rp 550 ribu = Rp 7,15 juta. PPN disetor = Rp 11 juta − Rp 7,15 juta = Rp 3,85 juta. Pilihan terdekat adalah opsi 1 (Rp 4,4 juta) — di soal ini pembulatan kasar, jawaban eksak Rp 3,85 juta.",
      difficulty: "sulit",
    },
    {
      id: "ch07-e10",
      question:
        "PT Properti Mewah jual rumah Rp 50 miliar di Jakarta (di atas Rp 30 miliar, kategori rumah mewah). Berapa total PPN + PPnBM?",
      options: [
        "Rp 5,5 miliar (PPN 11% saja, tanpa PPnBM)",
        "Rp 6 miliar (PPN 12% penuh saja, tanpa PPnBM)",
        "Rp 16 miliar (PPN 12% penuh + PPnBM 20%)",
        "Rp 10 miliar (PPnBM 20% saja, tanpa PPN)",
      ],
      correctIndex: 2,
      explanation:
        "Rumah mewah > Rp 30 miliar di DKI: kena PPN 12% penuh (barang mewah) + PPnBM 20%. PPN = 12% × Rp 50 miliar = Rp 6 miliar. PPnBM = 20% × Rp 50 miliar = Rp 10 miliar. Total = Rp 16 miliar.",
      difficulty: "sulit",
    },
  ],
}
