import type { Chapter } from "../types"

// ============================================================================
// BAB 3: PROGRAM PENGUNGKAPAN SUKARELA (PPS)
// ============================================================================

export const chapter03: Chapter = {
  id: "ch03",
  slug: "program-pengungkapan-sukarela",
  number: 3,
  title: "Program Pengungkapan Sukarela (PPS)",
  shortTitle: "PPS",
  description:
    "Tax amnesty terbaru Indonesia — PPS 2022 (UU 7/2021). Definisi, mekanisme, perhitungan tarif 12,5%-18%, dan kondisi 2026!",
  icon: "HandHeart",
  color: "cyan",
  difficulty: "menengah",
  estimatedMinutes: 90,
  objectives: [
    "Paham definisi, sejarah, dan manfaat Program Pengungkapan Sukarela (PPS)",
    "Bisa bedain PPS 2022 dengan Tax Amnesty 2016",
    "Kenal syarat, mekanisme, dan dokumen yang dibutuhkan untuk ikut PPS",
    "Kuasai perhitungan tarif PPS 2022 (12,5%-18%) dengan contoh kasus",
    "Paham hak & kewajiban WP setelah mengikuti PPS",
    "Tahu kondisi PPS di 2026 (apakah ada program baru atau tidak)",
  ],
  lessons: [
    // =========================================================================
    // LESSON 1: APA ITU PPS?
    // =========================================================================
    {
      id: "ch03-l01",
      slug: "apa-itu-pps",
      title: "Apa Itu PPS? Manfaat, Sejarah & Kondisi 2026",
      subtitle: "Definisi, Tax Amnesty 2016 vs PPS 2022, manfaat ikut",
      type: "materi",
      difficulty: "pemula",
      estimatedMinutes: 20,
      content: `# 💝 Apa Itu Program Pengungkapan Sukarela (PPS)?

Halo! Di bab ini kita bakal bahas salah satu topik paling menarik di perpajakan Indonesia: **Program Pengungkapan Sukarela (PPS)** alias tax amnesty. Ini program yang bikin WP bisa "kasih lihat" hartanya ke DJP dengan tarif khusus — tanpa takut kena sanksi pidana.

## Apa Itu PPS?

**PPS** = Program Pengungkapan Sukarela. Program khusus pemerintah yang kasih kesempatan ke WP buat **mengungkapkan harta yang belum dilaporkan** di SPT sebelumnya, dengan **tarif pajak khusus** yang lebih rendah dari tarif normal, dan **tanpa sanksi pidana**.

> **Analogi:** PPS itu kayak "pemutihan hutang" — negara bilang ke WP, "Kalau kamu jujur sekarang dan bayar tarif khusus, kita hapus hutang pajakmu yang belum dilaporkan, tanpa kamu dipenjara." Cuma berlaku terbatas waktu!

## Dasar Hukum PPS 2022

PPS terbaru di Indonesia diatur di:
- **Pasal 13(3a)-(3f) UU HPP (UU 7/2021)** — kerangka dasar
- **PMK 143/PMK.03/2022** — aturan teknis
- **Periode berlaku**: 1 Januari 2023 sampai 30 Juni 2023

> **Update 2026:** PPS 2022 sudah berakhir 30 Juni 2023. Sampai Agustus 2026, **tidak ada PPS baru** yang diumumkan. Tapi pelajaran ini tetap penting karena:
> 1. Bisa muncul lagi di masa depan (sesuai kebutuhan negara)
> 2. WP yang ikut PPS 2022 masih punya kewajiban pasca-PPS sampai 2026
> 3. Materi ini sering keluar di ujian Brevet AB

## Sejarah Program Tax Amnesty di Indonesia

Indonesia sudah 2x jalanin program semacam ini:

### 1. Tax Amnesty 2016 (UU 11/2016)
- **Periode**: 18 Juli 2016 – 31 Maret 2017
- **Tarif**: 0,5% – 5% (sangat murah)
- **Hasil**: ~US$9,61 miliar (Rp 135 triliun) diterima negara, Rp 4.865 triliun aset diungkap
- **Ciri khas**: Tarif sangat rendah, banyak harta repatriasi dari luar negeri

### 2. PPS 2022 (UU 7/2021 / UU HPP)
- **Periode**: 1 Januari 2023 – 30 Juni 2023
- **Tarif**: 12,5% – 18% (lebih tinggi dari 2016)
- **Hasil**: Lebih moderat dibanding 2016 (data resmi DJP)
- **Ciri khas**: Tarif lebih tinggi tapi tetap menarik karena no pidana

## Perbedaan Tax Amnesty 2016 vs PPS 2022

| Aspek | Tax Amnesty 2016 | PPS 2022 |
|-------|------------------|----------|
| Dasar hukum | UU 11/2016 | UU 7/2021 (HPP) + PMK 143/2022 |
| Periode | 18 Juli 2016 – 31 Maret 2017 | 1 Januari – 30 Juni 2023 |
| Tarif | 0,5% – 5% | 12,5% – 18% |
| Harta yang diungkap | Semua harta | Harta netto (aset - kewajiban) |
| Repatriasi | Wajib repatriasi harta luar negeri ke Indonesia (dalam 6-12 bulan) | Tidak wajib repatriasi, tapi bisa pilih |
| Investasi SBN | Wajib investasi (untuk tarif rendah) | Tidak wajib, tapi ada insentif |
| Sanksi pidana | Dihapus untuk yang ikut | Dihapus untuk yang ikut |
| Sanksi administrasi | Dihapus | Dihapus |
| Pasca-program | Pengawasan 3 tahun | DPP PPh Final 0,5% – 0,7% tahun 2024-2026 |

## Manfaat Ikut PPS

### Buat WP:
1. **Aman dari sanksi pidana** pajak (Pasal 38-43 KUP)
2. **Aman dari sanksi administrasi** (bunga, denda)
3. **Harta jadi "resmi"** — bisa dipakai buat bisnis, warisan, dll
4. **Penghasilan dari harta PPS** selama 3 tahun (2024-2026) kena PPh Final 0,5%-0,7%, bukan PPh normal
5. **Reputasi aman** — tidak kena daftar hitam perbankan
6. **Akses ke layanan keuangan** lebih mudah (bank, asuransi, dll)

### Buat Negara:
1. **Penerimaan pajak** tambahan
2. **Data WP lebih lengkap** buat audit masa depan
3. **Harta pulang ke Indonesia** (repatriasi) → modal investasi
4. **Mendorong kepatuhan** sukarela

## Siapa yang Bisa Ikut PPS?

PPS 2022 terbuka untuk:
1. **WP OP** (orang pribadi) — WNI maupun WNA yang jadi WPDN
2. **WP Badan** — PT, CV, Yayasan, Koperasi, dll
3. **BUT** (Bentuk Usaha Tetap)
4. **WP Luar Negeri** dengan sumber penghasilan di Indonesia

Yang **tidak bisa** ikut PPS:
- WP yang sudah diaudit & kena SKP sebelum PPS (untuk tahun pajak yang sama)
- WP yang sudah dipidana kasus pajak (belum selesai)
- WP yang dalam proses banding PK

## Apa yang Bisa Diungkap di PPS?

PPS 2022 mengungkap:
1. **Harta yang belum dilaporkan** di SPT Tahunan terakhir (sebelum 2023)
2. **Harta yang belum dikenai pajak** (di luar SPT)
3. **Penghasilan yang belum dilaporkan**

### Yang Termasuk "Harta":
- Tanah & bangunan
- Kendaraan
- Surat berharga (saham, obligasi)
- Tabungan & deposito
- Piutang
- Harta lain (cash, emas, barang berharga)

### Yang Tidak Bisa Diungkap di PPS:
- Penghasilan yang akan diterima di masa depan
- PPh yang sudah dipotong pihak ketiga (kalau sudah dilaporkan di bukti potong)
- Harta yang sudah dilaporkan dengan benar di SPT

## 💼 Kasus Nyata: Kenapa Orang Ikut PPS 2022?

**Situasi:**
Pak Darto, pengusaha restoran. Selama 5 tahun (2018-2022), dia nggak lapor SPT Tahunan dengan benar. Omzet asli Rp 5 miliar/tahun, tapi yang dilaporkan cuma Rp 2 miliar. Selisih Rp 3 miliar/tahun × 5 tahun = Rp 15 miliar "penghasilan tersembunyi".

**Tanpa PPS (kalau ketahuan DJP via audit):**
- PPh OP terutang (asumsi laba 10% × 15 miliar = Rp 1,5 miliar):
  - 5% × 60jt + 15% × 190jt + 25% × 250jt + 30% × 1 miliar = 3 + 28,5 + 62,5 + 300 = Rp 394 juta
- Bunga sanksi (Pasal 8(2)): 1,02% × 394jt × 24 bulan (cap) = Rp 96,4 juta
- Denda kelalaian (Pasal 13): bisa 1,85% × 394jt × 60 bulan (5 tahun) = Rp 437,3 juta
- Total: Rp 394jt + Rp 96,4jt + Rp 437,3jt = **Rp 927,7 juta**
- Plus risiko **pidana Pasal 38**: 6 bulan-6 tahun penjara + denda 6x pajak

**Ikut PPS 2022 (asumsi tarif 12,5%):**
- Tarif PPS: 12,5% × Rp 1,5 miliar (laba tersembunyi) = Rp 187,5 juta
- **Tanpa bunga, tanpa denda, tanpa pidana!**
- Hemat: Rp 927,7jt - Rp 187,5jt = **Rp 740,2 juta** + bebas penjara

Inilah kenapa PPS menarik banget buat yang punya "harta tersembunyi"!

## Penghasilan Pasca-PPS (3 Tahun ke Depan)

Salah satu manfaat unik PPS 2022: penghasilan dari harta yang diungkap **kena PPh Final 0,5%-0,7%** (bukan PPh normal) selama 3 tahun (2024-2026).

| Tarif PPh Final Pasca-PPS | Berdasarkan |
|---------------------------|-------------|
| 0,5% | Pengungkapan harta di Indonesia + harta di luar negeri yang direpatriasi |
| 0,6% | Pengungkapan harta di Indonesia + harta di luar negeri yang TIDAK direpatriasi |
| 0,7% | Pengungkapan hanya sebagian harta (kombinasi) |

> **Update 2026:** Penghasilan dari harta PPS di 2026 masih kena PPh Final 0,5%-0,7% (tahun ke-3 pasca-PPS). Setelah 2026, kembali ke tarif normal PPh OP/badan.

## Kondisi PPS di 2026

Sampai Agustus 2026:
- **Tidak ada PPS baru** yang diumumkan
- Yang ada hanya program "pemutihan" lokal (seperti PKB/BBNKB pemutihan di daerah tertentu)
- KPK membuka 3 SPRINDIK (penyidikan) kasus dugaan suap restitusi pajak 2026 — menunjukkan iklim penegakan yang lebih ketat

> **Tip ujian:** Kalau ditanya "Apakah ada PPS di 2026?", jawab: **Tidak ada PPS baru**. PPS terakhir adalah 2022 (selesai 30 Juni 2023).

## Ringkasan Buat Ujian

- **PPS** = Program Pengungkapan Sukarela, alias tax amnesty
- **2 program di Indonesia**: Tax Amnesty 2016 (tarif 0,5%-5%) & PPS 2022 (tarif 12,5%-18%)
- **Dasar hukum PPS 2022**: Pasal 13(3a)-(3f) UU HPP + PMK 143/2022
- **Periode PPS 2022**: 1 Januari – 30 Juni 2023
- **Manfaat**: aman dari sanksi pidana + administrasi, harta jadi resmi, PPh Final 0,5%-0,7% pasca-PPS
- **Pasca-PPS**: penghasilan dari harta PPS kena PPh Final 0,5%-0,7% selama 3 tahun (2024-2026)
- **Kondisi 2026**: tidak ada PPS baru, yang ada hanya pemutihan lokal (PKB/BBNKB daerah)

Sudah paham konsep dasar PPS? Di lesson berikutnya kita bahas **cara ikut PPS** — syarat, mekanisme, dokumen yang dibutuhkan. 🚀`,
      keyPoints: [
        "PPS = Program Pengungkapan Sukarela, alias tax amnesty",
        "Indonesia sudah 2x jalanin PPS: Tax Amnesty 2016 (tarif 0,5%-5%) & PPS 2022 (tarif 12,5%-18%)",
        "PPS 2022 diatur di Pasal 13(3a)-(3f) UU HPP (UU 7/2021) + PMK 143/PMK.03/2022",
        "Periode PPS 2022: 1 Januari – 30 Juni 2023 (sudah berakhir)",
        "Manfaat: aman dari sanksi pidana + administrasi, harta jadi resmi",
        "Pasca-PPS: penghasilan dari harta PPS kena PPh Final 0,5%-0,7% selama 3 tahun (2024-2026)",
        "Kondisi 2026: TIDAK ADA PPS baru yang diumumkan",
        "Bedanya 2016 vs 2022: tarif lebih tinggi di 2022, tapi tetap menarik karena no pidana",
      ],
      quiz: [
        {
          id: "ch03-l01-q1",
          question: "Apa kepanjangan dari PPS dalam konteks perpajakan Indonesia?",
          options: [
            "Program Penertiban Pajak",
            "Program Pengungkapan Sukarela",
            "Pemutihan Pajak Sukarela",
            "Pengampunan Pajak Sebagian",
          ],
          correctIndex: 1,
          explanation:
            "PPS = Program Pengungkapan Sukarela. Ini bentuk tax amnesty di Indonesia, yang terbaru diatur di UU HPP.",
          difficulty: "mudah",
        },
        {
          id: "ch03-l01-q2",
          question: "Dasar hukum PPS 2022 adalah?",
          options: [
            "UU 11/2016 (Tax Amnesty 2016)",
            "Pasal 13(3a)-(3f) UU HPP (UU 7/2021) + PMK 143/2022",
            "PP 23/2018",
            "PMK 168/2023",
          ],
          correctIndex: 1,
          explanation:
            "PPS 2022 diatur di Pasal 13(3a)-(3f) UU HPP (UU 7/2021), dengan aturan teknis di PMK 143/PMK.03/2022.",
          difficulty: "sedang",
        },
        {
          id: "ch03-l01-q3",
          question: "Berapa tarif PPS 2022?",
          options: [
            "0,5% – 5% (sama dengan Tax Amnesty 2016)",
            "5% – 10%",
            "12,5% – 18%",
            "20% – 25%",
          ],
          correctIndex: 2,
          explanation:
            "PPS 2022: tarif 12,5% – 18%. Lebih tinggi dari Tax Amnesty 2016 (0,5% – 5%) tapi tetap menarik karena hapus sanksi pidana.",
          difficulty: "sedang",
        },
        {
          id: "ch03-l01-q4",
          question: "Penghasilan dari harta yang diungkap di PPS 2022, berapa tarif PPh Final-nya di tahun 2024-2026?",
          options: [
            "0% (tidak kena pajak)",
            "0,5% – 0,7%",
            "5%",
            "11% (PPN)",
          ],
          correctIndex: 1,
          explanation:
            "Pasca-PPS, penghasilan dari harta yang diungkap kena PPh Final 0,5% – 0,7% selama 3 tahun (2024-2026). Tarif tergantung apakah harta direpatriasi atau tidak.",
          difficulty: "sulit",
        },
        {
          id: "ch03-l01-q5",
          question: "Apakah ada PPS baru di 2026?",
          options: [
            "Ya, PPS 2026 dibuka Januari-Desember 2026",
            "Tidak, PPS terakhir berakhir 30 Juni 2023",
            "Ya, tapi hanya untuk WP badan",
            "Ya, tapi hanya untuk WP OP dengan omzet < Rp 4,8 miliar",
          ],
          correctIndex: 1,
          explanation:
            "Sampai Agustus 2026, TIDAK ADA PPS baru yang diumumkan. PPS terakhir (PPS 2022) sudah berakhir 30 Juni 2023.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Manfaat PPS untuk Pengusaha Restoran",
        description:
          "Pak Darto punya restoran, omzet asli Rp 5 miliar/tahun, tapi yang dilaporkan cuma Rp 2 miliar selama 5 tahun (2018-2022). Asumsi laba 10%. Bandingkan: (a) kena audit tanpa PPS, (b) ikut PPS 2022 dengan tarif 12,5%.",
        solution:
          "(a) Tanpa PPS (kena audit): PPh OP terutang (10% laba × 15 miliar = Rp 1,5 miliar PKP) → 5%×60jt + 15%×190jt + 25%×250jt + 30%×1 miliar = Rp 394 juta. Bunga Pasal 8(2): 1,02% × 394jt × 24 (cap) = Rp 96,4 juta. Sanksi kelalaian Pasal 13: 1,85% × 394jt × 60 bulan = Rp 437,3 juta. Total: ~Rp 927,7 juta + risiko pidana 6 bln-6 thn + denda 6x pajak. (b) Ikut PPS 2022: Tarif 12,5% × Rp 1,5 miliar (laba tersembunyi) = Rp 187,5 juta. Tanpa bunga, denda, atau pidana. Hemat Rp 740,2 juta + bebas penjara. Plus penghasilan dari harta PPS di 2024-2026 kena PPh Final 0,5%-0,7% (lebih rendah dari PPh normal).",
      },
      tags: [
        "PPS",
        "tax amnesty",
        "Tax Amnesty 2016",
        "PPS 2022",
        "UU HPP",
        "pengampunan pajak",
        "PPh Final 0,5%",
        "PMK 143/2022",
      ],
    },

    // =========================================================================
    // LESSON 2: CARA PENGUNGKAPAN HARTA PPS
    // =========================================================================
    {
      id: "ch03-l02",
      slug: "cara-ikut-pps",
      title: "Cara Pengungkapan Harta PPS: Syarat, Mekanisme & Dokumen",
      subtitle: "Syarat, mekanisme, dokumen yang dibutuhkan, hati-hati salah lapor",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 22,
      content: `# 📋 Cara Pengungkapan Harta PPS

Sekarang kita masuk ke teknis: **bagaimana cara ikut PPS 2022**. Walaupun programnya sudah berakhir, materi ini sering keluar di ujian karena penting buat paham mekanisme pengungkapan.

## Syarat Ikut PPS 2022

Untuk bisa ikut PPS 2022, WP harus memenuhi syarat:

### 1. Status sebagai WP
- Sudah punya NPWP, ATAU
- Mendaftar NPWP saat mengikuti PPS (untuk yang belum punya)

### 2. Mengungkapkan Harta
- Harta yang belum dilaporkan di SPT Tahunan terakhir sebelum PPS
- Harta yang ada pada 31 Desember 2022

### 3. Membayar Tarif PPS
- Bayar sesuai tarif yang berlaku (12,5%-18%)
- Pembayaran via SSP elektronik

### 4. Mengisi Form Pengungkapan
- Form khusus PPS (di-upload lewat DJP Online/Coretax)
- Lengkapi dengan dokumen pendukung

### Yang TIDAK Bisa Ikut PPS
- WP yang sudah diaudit dan kena SKP (untuk tahun pajak yang sama dengan yang akan diungkap)
- WP yang sedang dalam proses pidana pajak (belum inkracht)
- WP yang sedang dalam banding/PK

## Mekanisme Pengungkapan PPS

PPS 2022 punya 2 tahap pengungkapan:

### Tahap I (1 Januari – 30 April 2023)
- Tarif lebih rendah
- Pengungkapan harta di Indonesia
- Pengungkapan harta di luar negeri yang direpatriasi

### Tahap II (1 Mei – 30 Juni 2023)
- Tarif lebih tinggi
- Untuk yang belum sempat ikut Tahap I
- Termasuk harta luar negeri yang tidak direpatriasi

## Tarif PPS 2022 Detail

Tarif PPS berbeda tergantung:
1. Tahap pengungkapan (I atau II)
2. Lokasi harta (di Indonesia atau luar negeri)
3. Apakah harta luar negeri direpatriasi

### Tabel Tarif PPS 2022

| Kondisi Harta | Tahap I (Jan-Apr 2023) | Tahap II (Mei-Jun 2023) |
|---------------|------------------------|-------------------------|
| Harta di Indonesia | 12,5% | 15% |
| Harta di luar negeri yang direpatriasi | 12,5% | 15% |
| Harta di luar negeri yang TIDAK direpatriasi | 15% | 18% |

> **Tip ujian:** Tarif terendah 12,5% (Tahap I, harta Indonesia/repatriasi). Tarif tertinggi 18% (Tahap II, harta luar negeri tidak direpatriasi).

## Harta yang Diungkap di PPS

Yang diungkap adalah **harta netto** = aset - kewajiban (utang) pada 31 Desember 2022.

### Yang Termasuk Harta:
1. **Tanah & bangunan** — sertifikat, sertifikat tanah, rumah
2. **Kendaraan** — mobil, motor
3. **Surat berharga** — saham, obligasi, reksadana
4. **Tabungan & deposito** — bank dalam & luar negeri
5. **Piutang** — termasuk piutang usaha
6. **Harta lain** — emas, perhiasan, barang berharga, kas

### Yang Dikurangkan (Kewajiban):
- Utang bank
- Utang pihak ketiga
- Hutang dagang
- Hutang pajak

> **Tip:** Harta yang diungkap = NETTO (aset - utang). Jangan lupa kurangi utang!

## Dokumen yang Dibutuhkan

Saat ikut PPS, WP harus siapkan:

### 1. Dokumen Identitas
- KTP (untuk WP OP)
- Akta pendirian (untuk WP badan)
- NPWP

### 2. Dokumen Kepemilikan Harta
- Sertifikat tanah & bangunan
- BPKB kendaraan
- Rekening koran (untuk tabungan/deposito)
- Surat bukti kepemilikan saham/obligasi
- Dokumen emas/perhiasan

### 3. Dokumen Utang
- Perjanjian kredit bank
- Surat utang piutang
- Bukti pembayaran cicilan

### 4. Dokumen Khusus (Kalau Repatriasi)
- Surat pernyataan repatriasi
- Bukti transfer dana ke Indonesia
- Bukti investasi di SBN (kalau ada)

### 5. SSP Pembayaran PPS
- Bukti pembayaran tarif PPS ke kas negara

## Mekanisme Repatriasi Harta (Untuk Harta Luar Negeri)

Repatriasi = memindahkan harta dari luar negeri ke Indonesia. Untuk yang pilih repatriasi:

1. **Pindahkan harta ke Indonesia** dalam jangka waktu tertentu (saat PPS 2022: 30 Juni 2024)
2. **Investasi di SBN** (Surat Berharga Negara) minimal 3 tahun
3. **Atau pilih: tetap di luar negeri** — kena tarif lebih tinggi (15%-18%)

> **Update 2026:** Untuk yang ikut PPS 2022 dengan janji repatriasi & investasi SBN, batas akhir 30 Juni 2024. Yang belum repatriasi bisa kena sanksi (kalau ada).

## Tahapan Pengungkapan PPS 2022

### Tahap 1: Persiapan
1. Inventarisasi semua harta (di Indonesia & luar negeri)
2. Hitung utang yang berkaitan dengan harta tersebut
3. Tentukan harta netto yang akan diungkap
4. Klasifikasikan: Indonesia, luar negeri (repatriasi/tidak)

### Tahap 2: Pendaftaran & Pengisian
1. Login ke DJP Online (atau Coretax kalau sudah hidup)
2. Pilih menu PPS
3. Isi formulir pengungkapan
4. Upload dokumen pendukung

### Tahap 3: Pembayaran
1. Hitung tarif PPS yang berlaku
2. Generate kode billing via Coretax/DJP Online
3. Bayar via bank persepsi (BNI, BRI, Mandiri, BSI)
4. Simpan SSP

### Tahap 4: Submit
1. Submit formulir PPS + lampiran SSP
2. Sistem akan verifikasi
3. DJP terbitkan Bukti Penerimaan Pengungkapan (BPP)
4. WP simpan BPP sebagai bukti

## Hati-Hati Salah Lapor!

Beberapa kesalahan umum di PPS:

### 1. Mengungkap Harta yang Sudah Dilaporkan
Harta yang sudah ada di SPT sebelumnya **tidak perlu** diungkap di PPS. Cuma yang BELUM dilaporkan.

### 2. Mengungkap Harta yang Tidak Ada
Jangan ngarang harta yang tidak ada — bisa kena sanksi pidana palsu dokumen.

### 3. Salah Hitung Tarif
Cek tahap & lokasi harta sebelum hitung tarif. Tahap I lebih murah dari Tahap II.

### 4. Lupa Repatriasi
Kalau janji repatriasi tapi tidak direpatriasi dalam waktu, bisa kena sanksi.

### 5. Tidak Lapor Pasca-PPS
Setelah PPS, WP tetap harus lapor SPT Tahunan dengan benar. Penghasilan dari harta PPS kena PPh Final 0,5%-0,7% selama 3 tahun.

### 6. Salah Klasifikasi Harta
Harta luar negeri vs harta Indonesia harus dipisah dengan jelas. Kalau salah, tarif bisa beda.

> **Tip:** Minta pendampingan konsultan pajak (Brevet AB) saat ikut PPS. Salah lapor bisa berakibat fatal!

## Hak & Kewajiban WP Setelah PPS

### Hak:
1. **Aman dari sanksi pidana** pajak untuk tahun pajak yang diungkap
2. **Aman dari sanksi administrasi** (bunga, denda)
3. **Harta jadi "resmi"** — bisa dipakai legal
4. **Penghasilan dari harta PPS** kena PPh Final 0,5%-0,7% selama 3 tahun
5. **Akses perbankan** lebih mudah

### Kewajiban:
1. **Lapor SPT Tahunan** dengan benar setiap tahun setelah PPS
2. **Laporkan penghasilan dari harta PPS** dengan tarif final khusus (2024-2026)
3. **Pertahankan harta yang diungkap** minimal 3 tahun (kalau repatriasi, tetap di Indonesia)
4. **Investasi SBN** minimal 3 tahun (kalau pilih repatriasi dengan opsi ini)
5. **Cooperate kalau diaudit** untuk tahun pajak setelah PPS

## 💼 Kasus Nyata: Pengungkapan Harta Mix

**Kasus:**
Pak Hartono, pengusaha, ingin ikut PPS 2022. Hartanya pada 31 Desember 2022:

| Harta | Lokasi | Nilai |
|-------|--------|-------|
| Rumah di Jakarta | Indonesia | Rp 5 miliar |
| Tabungan BCA | Indonesia | Rp 2 miliar |
| Saham IDX | Indonesia | Rp 3 miliar |
| Rumah di Singapura | Luar negeri | Rp 8 miliar |
| Tabungan DBS (Singapura) | Luar negeri | Rp 4 miliar |
| **Total Aset** | | **Rp 22 miliar** |

Utang:
- KPR BCA: Rp 1 miliar
- Utang ke supplier: Rp 500 juta
- **Total utang: Rp 1,5 miliar**

Sudah dilaporkan di SPT 2022: hanya rumah Jakarta Rp 5 miliar + tabungan BCA Rp 2 miliar = Rp 7 miliar.

**Harta yang akan diungkap:**
- Saham IDX: Rp 3 miliar (Indonesia)
- Rumah Singapura: Rp 8 miliar (luar negeri, pilih repatriasi)
- Tabungan DBS: Rp 4 miliar (luar negeri, tidak direpatriasi)

**Pengungkapan Tahap I (Januari-April 2023):**
- Saham IDX (Indonesia): 12,5% × 3 miliar = Rp 375 juta
- Rumah Singapura (repatriasi): 12,5% × 8 miliar = Rp 1 miliar
- Tabungan DBS (tidak repatriasi): 15% × 4 miliar = Rp 600 juta
- **Total PPS: Rp 1,975 miliar**

> Pak Hartono harus repatriasi Rp 8 miliar (rumah Singapura → jadi dana) ke Indonesia paling lambat 30 Juni 2024, dan investasi SBN minimal 3 tahun.

## Sanksi Kalau Nggak Nurut Pasca-PPS

Kalau WP nggak nurut syarat pasca-PPS (misal harta repatriasi ditarik lagi sebelum 3 tahun):

1. **Tarif PPS jadi tidak berlaku** — WP harus bayar selisih ke tarif normal
2. **Bunga sanksi** dari saat pengungkapan sampai saat pelanggaran
3. **Sanksi pidana bisa diterapkan** untuk tahun pajak yang diungkap (hilang kekebalan)

> **Tip ujian:** Kekebalan pidana PPS bisa hilang kalau WP nggak nurut syarat pasca-PPS. Jadi jangan anggap PPS itu "sekali bayar, selesai".

## Update 2026: Yang Masih Relevan

1. WP yang ikut PPS 2022 masih dalam masa pengawasan 3 tahun (sampai 2026-2027)
2. Penghasilan dari harta PPS di 2026 masih kena PPh Final 0,5%-0,7% (tahun ke-3)
3. Setelah 2026, kembali ke tarif normal PPh
4. Belum ada pengumuman PPS baru

## Ringkasan Buat Ujian

- **Syarat PPS**: punya NPWP + ungkap harta + bayar tarif + isi form
- **2 Tahap PPS 2022**: Tahap I (Jan-Apr, lebih murah), Tahap II (Mei-Jun, lebih tinggi)
- **Tarif PPS**: 12,5% (Indonesia, Tahap I) s/d 18% (LN tidak repatriasi, Tahap II)
- **Harta netto** = aset - utang yang berkaitan
- **Repatriasi**: wajib pindahkan harta LN ke Indonesia + investasi SBN 3 tahun
- **Dokumen**: identitas, bukti kepemilikan, dokumen utang, SSP
- **Hati-hati**: salah lapor bisa kena sanksi pidana
- **Pasca-PPS**: lapor SPT normal + PPh Final 0,5%-0,7% selama 3 tahun

Sudah paham cara ikut PPS? Di lesson terakhir kita bahas **perhitungan & contoh kasus** detail. 🧮`,
      keyPoints: [
        "Syarat PPS: punya NPWP, ungkap harta belum dilaporkan, bayar tarif, isi form",
        "2 Tahap PPS 2022: Tahap I (1 Jan - 30 Apr 2023, lebih murah), Tahap II (1 Mei - 30 Jun 2023)",
        "Tarif 12,5% (Indonesia, Tahap I) sampai 18% (LN tidak repatriasi, Tahap II)",
        "Harta yang diungkap = NETTO (aset - utang yang berkaitan)",
        "Repatriasi harta LN: wajib pindahkan ke Indonesia + investasi SBN minimal 3 tahun",
        "Dokumen: identitas, KTP/akta, sertifikat, BPKB, rekening koran, SSP",
        "Penghasilan dari harta PPS kena PPh Final 0,5%-0,7% selama 3 tahun (2024-2026)",
        "Kekebalan pidana bisa hilang kalau WP nggak nurut syarat pasca-PPS",
        "Hati-hati salah lapor: salah klasifikasi, salah hitung tarif, lupa repatriasi",
      ],
      quiz: [
        {
          id: "ch03-l02-q1",
          question: "Berapa tarif PPS 2022 untuk harta di Indonesia yang diungkap pada Tahap I?",
          options: ["0,5%", "5%", "12,5%", "18%"],
          correctIndex: 2,
          explanation:
            "Harta di Indonesia yang diungkap pada Tahap I (1 Jan-30 Apr 2023) kena tarif 12,5%. Ini tarif terendah PPS 2022.",
          difficulty: "sedang",
        },
        {
          id: "ch03-l02-q2",
          question: "Harta yang diungkap di PPS 2022 adalah?",
          options: [
            "Harta bruto (aset saja)",
            "Harta netto (aset - utang yang berkaitan)",
            "Harta yang sudah dilaporkan di SPT",
            "Harta yang akan diterima di masa depan",
          ],
          correctIndex: 1,
          explanation:
            "Harta yang diungkap di PPS adalah HARTA NETTO = aset dikurangi utang yang berkaitan dengan harta tersebut.",
          difficulty: "sedang",
        },
        {
          id: "ch03-l02-q3",
          question:
            "Pak Asep punya harta di Singapura Rp 10 miliar. Ia ingin ikut PPS 2022 Tahap II (Mei 2023) dan TIDAK merepatriasi. Berapa tarif PPS-nya?",
          options: [
            "12,5%",
            "15%",
            "18%",
            "22%",
          ],
          correctIndex: 2,
          explanation:
            "Harta luar negeri yang tidak direpatriasi, diungkap di Tahap II (Mei-Jun 2023) kena tarif 18% (tarif tertinggi PPS 2022).",
          difficulty: "sulit",
        },
        {
          id: "ch03-l02-q4",
          question:
            "Manakah yang BUKAN merupakan syarat ikut PPS 2022?",
          options: [
            "Memiliki NPWP (atau mendaftar saat PPS)",
            "Mengungkapkan harta yang belum dilaporkan di SPT",
            "Membayar tarif PPS sesuai ketentuan",
            "Sudah pernah kena SKPKB untuk tahun pajak yang akan diungkap",
          ],
          correctIndex: 3,
          explanation:
            "WP yang sudah kena SKPKB untuk tahun pajak yang sama TIDAK BISA ikut PPS untuk tahun pajak tersebut. PPS hanya untuk yang belum diaudit/kena SKP.",
          difficulty: "sedang",
        },
        {
          id: "ch03-l02-q5",
          question:
            "Pak Bowo ikut PPS dengan janji repatriasi harta Rp 5 miliar dari Singapura + investasi SBN 3 tahun. Tahun 2025, ia menarik dana SBN tersebut. Konsekuensinya?",
          options: [
            "Tidak ada konsekuensi, bebas tarik kapan saja",
            "Tarif PPS yang berlaku menjadi batal, harus bayar selisih ke tarif normal + bunga + bisa kena pidana",
            "Cukup bayar denda Rp 1 juta",
            "Hilang NPWP",
          ],
          correctIndex: 1,
          explanation:
            "Syarat repatriasi + investasi SBN minimal 3 tahun harus dipenuhi. Kalau ditarik sebelum 3 tahun, tarif PPS jadi batal, harus bayar selisih ke tarif normal + bunga sanksi + kekebalan pidana hilang.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Strategi Pengungkapan Optimal PPS",
        description:
          "Bu Sinta punya harta: Rp 5 miliar di Indonesia (sudah dilaporkan Rp 2 miliar), Rp 8 miliar di Singapura (belum dilaporkan), Rp 3 miliar di Australia (belum dilaporkan). Utang: Rp 1 miliar untuk properti di Singapura. Bagaimana strategi optimal ikut PPS 2022?",
        solution:
          "(1) Harta yang harus diungkap: Indonesia Rp 3 miliar (5-2) + Singapura Rp 8 miliar + Australia Rp 3 miliar = Rp 14 miliar bruto. (2) Harta netto: 14 miliar - 1 miliar (utang untuk properti Singapura) = Rp 13 miliar. (3) Strategi optimal: ikut Tahap I (1 Jan-30 Apr 2023) untuk dapat tarif terendah. (4) Hitung tarif: Indonesia 12,5% × 3 miliar = Rp 375 juta. Singapura: pilih repatriasi 12,5% × 8 miliar = Rp 1 miliar (tapi harus repatriasi & investasi SBN 3 tahun). Australia: 15% × 3 miliar = Rp 450 juta (kalau tidak repatriasi). Total PPS: Rp 375jt + Rp 1 miliar + Rp 450jt = Rp 1,825 miliar. (5) Pasca-PPS 2024-2026: penghasilan dari harta PPS kena PPh Final 0,5%-0,7%. (6) Pertimbangan: kalau Bu Sinta sanggup repatriasi Rp 8 miliar (jual properti Singapura), hemat Rp 200 juta dari tarif 15% jadi 12,5%. Tapi repatriasi + investasi SBN 3 tahun = likuiditas terikat. Konsultasi dengan konsultan pajak (Brevet AB) sangat disarankan.",
      },
      tags: [
        "PPS",
        "syarat PPS",
        "mekanisme PPS",
        "tarif PPS",
        "Tahap I PPS",
        "Tahap II PPS",
        "repatriasi",
        "investasi SBN",
        "PPh Final pasca-PPS",
      ],
    },

    // =========================================================================
    // LESSON 3: PERHITUNGAN & PEMBAYARAN PPS
    // =========================================================================
    {
      id: "ch03-l03",
      slug: "hitung-pps",
      title: "Perhitungan & Pembayaran PPS: Contoh Kasus Detail",
      subtitle: "Tarif 12,5%-18%, contoh hitung, hak & kewajiban pasca-PPS",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 22,
      content: `# 🧮 Perhitungan & Pembayaran PPS

Lesson terakhir di Bab 3! Kita bakal bahas **perhitungan PPS** dengan contoh kasus detail. Ini paling sering keluar di ujian, jadi kuasai baik-baik.

## Rumus Dasar Perhitungan PPS

\`\`\`
PPS Terutang = Tarif PPS × Harta Netto yang Diungkap
\`\`\`

Dimana:
- **Tarif PPS** tergantung tahap, lokasi harta, & repatriasi (12,5%-18%)
- **Harta Netto** = aset yang diungkap - utang yang berkaitan

## Tabel Tarif PPS 2022 (Komplit)

| Lokasi Harta | Repatriasi? | Tahap I (1 Jan - 30 Apr 2023) | Tahap II (1 Mei - 30 Jun 2023) |
|--------------|-------------|-------------------------------|-------------------------------|
| Di Indonesia | Tidak relevan | **12,5%** | 15% |
| Di luar negeri | YA (direpatriasi) | **12,5%** | 15% |
| Di luar negeri | TIDAK | 15% | **18%** |

> **Hafalin ini!** Tarif terendah 12,5%, tertinggi 18%. Selisih 5,5% — bisa besar untuk harta yang banyak.

## Cara Hitung Harta Netto

### Langkah 1: Daftar Semua Harta yang Belum Dilaporkan
Harta per 31 Desember 2022 yang BELUM ada di SPT 2022.

### Langkah 2: Daftar Utang yang Berkaitan
Utang yang secara langsung berkaitan dengan harta yang diungkap (misal KPR untuk rumah, kredit kendaraan untuk mobil).

### Langkah 3: Hitung Netto per Kategori
Pisahkan harta:
- Harta di Indonesia
- Harta di luar negeri yang akan direpatriasi
- Harta di luar negeri yang tidak direpatriasi

### Langkah 4: Kali dengan Tarif yang Sesuai

## Contoh Kasus 1: Harta di Indonesia Saja

**Kasus:**
Pak Budi ingin ikut PPS 2022 Tahap I. Hartanya yang belum dilaporkan:
- Tanah di Bandung: Rp 2 miliar (utang bank masih Rp 500 juta)
- Tabungan BCA: Rp 1 miliar
- Saham IDX: Rp 500 juta

**Perhitungan:**
1. Aset: 2 + 1 + 0,5 = Rp 3,5 miliar
2. Utang yang berkaitan: Rp 500 juta (KPR tanah)
3. Harta netto: Rp 3 miliar
4. Tarif (Tahap I, Indonesia): 12,5%
5. **PPS terutang**: 12,5% × Rp 3 miliar = **Rp 375 juta**

## Contoh Kasus 2: Harta di Luar Negeri, Repatriasi

**Kasus:**
Bu Sinta punya tabungan di bank Singapura Rp 10 miliar, belum dilaporkan. Ia pilih repatriasi ke Indonesia + investasi SBN 3 tahun. Ikut PPS Tahap I.

**Perhitungan:**
1. Harta: Rp 10 miliar (tidak ada utang)
2. Harta netto: Rp 10 miliar
3. Tarif (Tahap I, LN repatriasi): 12,5%
4. **PPS terutang**: 12,5% × Rp 10 miliar = **Rp 1,25 miliar**

Setelah bayar, Bu Sinta harus:
- Repatriasi Rp 10 miliar ke Indonesia (sebelum 30 Juni 2024)
- Investasi SBN minimal 3 tahun

## Contoh Kasus 3: Harta Mix dengan Strategi Optimal

**Kasus:**
Pak Hadi, ikut PPS Tahap I. Hartanya yang belum dilaporkan:

| Harta | Lokasi | Nilai | Utang | Netto | Pilihan |
|-------|--------|-------|-------|-------|---------|
| Apartemen | Indonesia | Rp 3 miliar | Rp 1 miliar | Rp 2 miliar | Tetap |
| Tabungan BCA | Indonesia | Rp 2 miliar | - | Rp 2 miliar | Tetap |
| Rumah | Singapura | Rp 5 miliar | - | Rp 5 miliar | Repatriasi |
| Deposito | Hong Kong | Rp 3 miliar | - | Rp 3 miliar | Tidak repatriasi |

**Perhitungan Tarif:**
1. Harta Indonesia: 12,5% × (2 + 2) miliar = 12,5% × Rp 4 miliar = Rp 500 juta
2. Harta Singapura (repatriasi): 12,5% × Rp 5 miliar = Rp 625 juta
3. Harta Hong Kong (tidak repatriasi): 15% × Rp 3 miliar = Rp 450 juta

**Total PPS: Rp 500jt + Rp 625jt + Rp 450jt = Rp 1,575 miliar**

> **Tip:** Pisahkan per kategori (Indonesia / LN repatriasi / LN tidak repatriasi) biar gampang hitung tarifnya.

## Contoh Kasus 4: Tahap II dengan Tarif Lebih Tinggi

**Kasus:**
Pak Wawan baru sempat ikut PPS Tahap II (Mei 2023). Hartanya:
- Tanah di Indonesia Rp 4 miliar (utang Rp 1 miliar)
- Tabungan di Singapura Rp 6 miliar, pilih tidak repatriasi

**Perhitungan:**
1. Harta Indonesia: netto = 4 - 1 = Rp 3 miliar. Tarif Tahap II: 15%. PPh = 15% × 3 miliar = Rp 450 juta
2. Harta Singapura (tidak repatriasi): netto = Rp 6 miliar. Tarif Tahap II: 18%. PPh = 18% × 6 miliar = Rp 1,08 miliar
3. **Total PPS: Rp 450jt + Rp 1,08 miliar = Rp 1,53 miliar**

Kalau Pak Wawan ikut Tahap I, hemat berapa?
1. Harta Indonesia: 12,5% × 3 miliar = Rp 375 juta (hemat Rp 75 juta)
2. Harta Singapura: 15% × 6 miliar = Rp 900 juta (hemat Rp 180 juta)
3. Total: Rp 1,275 miliar (hemat Rp 255 juta)

> **Pelajaran:** Lebih cepat ikut PPS (Tahap I) lebih murah. Selisih 5,5% bisa ratusan juta untuk harta yang besar!

## Pembayaran PPS

### Mekanisme Pembayaran:
1. **Generate kode billing** di DJP Online / Coretax
2. **Bayar via bank persepsi** (BNI, BRI, BSI, Mandiri) atau e-banking
3. **Simpan SSP** sebagai bukti
4. **Submit formulir PPS** dengan melampirkan SSP

### Kode Setoran PPS:
- Kode khusus PPS (di PMK 143/2022) — beda dari kode PPh biasa
- Tanyakan ke KPP atau cek di sistem saat generate billing

### Batas Akhir Pembayaran:
- Harus dibayar SAAT submit formulir PPS
- Tidak bisa cicil — harus lunas sekaligus

## Apa yang Terjadi Setelah PPS?

### Dalam Jangka Pendek (1-3 tahun):
1. DJP terbitkan Bukti Penerimaan Pengungkapan (BPP)
2. WP aman dari audit untuk tahun pajak yang diungkap
3. Harta yang diungkap jadi "resmi" di mata DJP
4. WP tetap harus lapor SPT Tahunan setiap tahun

### Dalam Jangka Menengah (3 tahun pasca-PPS, 2024-2026):
1. Penghasilan dari harta PPS kena PPh Final 0,5%-0,7% (bukan PPh normal)
2. WP yang pilih repatriasi harus pertahankan investasi SBN 3 tahun
3. WP yang pilih repatriasi harus pertahankan harta di Indonesia 3 tahun

### Dalam Jangka Panjang (setelah 2026):
1. Penghasilan dari harta PPS kembali kena PPh normal (OP/badan)
2. WP yang sudah selesai masa pengawasan PPS bisa leluasa kelola harta
3. DJP tetap punya data — kalau ada penyimpangan, bisa diaudit

## Hak & Kewajiban Pasca-PPS 2026 (Sekarang!)

### Hak:
1. **Penghasilan dari harta PPS masih kena PPh Final 0,5%-0,7%** di 2026 (tahun ke-3)
2. **Aman dari audit** untuk tahun pajak yang diungkap di PPS 2022
3. **Harta jadi resmi** — bisa dipakai sebagai jaminan kredit, warisan, dll

### Kewajiban:
1. **Lapor SPT Tahunan** dengan benar di 2026
2. **Laporkan penghasilan dari harta PPS** sebagai PPh Final 0,5%-0,7% (tahun terakhir)
3. **Pertahankan harta & investasi SBN** sampai akhir masa pengawasan
4. **Mulai 2027**, penghasilan dari harta PPS kena PPh normal

## 💼 Kasus Nyata: Perhitungan Komprehensif

**Kasus:**
Pak Tirta, pengusaha, ikut PPS 2022 Tahap I dengan pengungkapan:

| Harta | Lokasi | Nilai | Utang | Netto | Status |
|-------|--------|-------|-------|-------|--------|
| Apartemen Jakarta | Indonesia | Rp 4 miliar | Rp 1,5 miliar | Rp 2,5 miliar | Tetap |
| Tanah Surabaya | Indonesia | Rp 3 miliar | - | Rp 3 miliar | Tetap |
| Tabungan BCA | Indonesia | Rp 2 miliar | - | Rp 2 miliar | Tetap |
| Properti Singapura | LN | Rp 8 miliar | Rp 2 miliar | Rp 6 miliar | Repatriasi |
| Deposito Hong Kong | LN | Rp 5 miliar | - | Rp 5 miliar | Tidak repatriasi |

**Total aset: Rp 22 miliar, total utang: Rp 3,5 miliar, total netto: Rp 18,5 miliar**

**Perhitungan PPS Tahap I:**
1. Harta Indonesia: netto = 2,5 + 3 + 2 = Rp 7,5 miliar
   - Tarif 12,5%: 12,5% × 7,5 miliar = **Rp 937,5 juta**
2. Harta Singapura (repatriasi): netto = Rp 6 miliar
   - Tarif 12,5%: 12,5% × 6 miliar = **Rp 750 juta**
3. Harta Hong Kong (tidak repatriasi): netto = Rp 5 miliar
   - Tarif 15%: 15% × 5 miliar = **Rp 750 juta**

**Total PPS terutang: Rp 937,5jt + Rp 750jt + Rp 750jt = Rp 2,4375 miliar**

### Pasca-PPS (2024-2026):
Penghasilan dari harta PPS:
- 2024: misal Rp 500 juta → PPh Final 0,5% = Rp 2,5 juta (kalau repatriasi)
- 2025: misal Rp 600 juta → PPh Final 0,5% = Rp 3 juta
- 2026: misal Rp 700 juta → PPh Final 0,5% = Rp 3,5 juta

**Total PPh Final pasca-PPS 2024-2026: Rp 9 juta** (sangat murah dibanding PPh normal)

### Mulai 2027:
Penghasilan dari harta PPS kena PPh normal:
- Misal Rp 800 juta (OP): PPh OP = 5%×60jt + 15%×190jt + 25%×250jt + 30%×300jt = 3 + 28,5 + 62,5 + 90 = **Rp 184 juta**

> **Pelajaran:** PPS itu "bayar sekali mahal, tapi hemat banyak di jangka pendek". Pasca-PPS (3 tahun) cuma 0,5%-0,7%. Setelah itu kembali normal.

## Sanksi Nggak Nurut Pasca-PPS

Kalau WP melanggar syarat pasca-PPS (misal harta repatriasi ditarik sebelum 3 tahun):

1. **Tarif PPS jadi batal** — harus bayar selisih ke tarif normal (PPh OP/badan)
2. **Bunga sanksi** dari saat pengungkapan sampai saat pelanggaran
3. **Sanksi pidana bisa diterapkan** untuk tahun pajak yang diungkap (kekebalan hilang)
4. **Harta bisa disita** untuk membayar sanksi tambahan

> **Tip ujian:** Kekebalan pidana PPS **bukan permanen**. Hilang kalau WP melanggar syarat. Ini sering keluar di soal!

## Update 2026: Yang Perlu Diingat

1. **PPS 2022 sudah berakhir** (30 Juni 2023) — tidak ada program baru
2. **Masa pengawasan 3 tahun** untuk yang ikut PPS 2022: 2024, 2025, 2026
3. **2026 = tahun terakhir** PPh Final 0,5%-0,7% untuk penghasilan dari harta PPS
4. **2027**: kembali ke PPh normal untuk penghasilan dari harta PPS
5. **Tidak ada pemutihan pajak baru** sampai Agustus 2026
6. **Coretax**: data PPS terintegrasi dengan SPT — DJP bisa monitor dengan mudah

## Tips Buat WP yang Sudah Ikut PPS

1. **Pertahankan harta & investasi SBN** minimal sampai akhir masa pengawasan
2. **Lapor SPT dengan benar** — penghasilan dari harta PPS kena PPh Final 0,5%-0,7%
3. **Jangan tarik dana investasi SBN** sebelum 3 tahun
4. **Konsultasi konsultan pajak** kalau ada transaksi besar terkait harta PPS
5. **Simpan semua dokumen PPS** — bukti pengungkapan, SSP, BPP

## Ringkasan Buat Ujian

- **Rumus PPS**: Tarif × Harta Netto yang Diungkap
- **Tarif PPS**: 12,5% (Indonesia/LN repatriasi, Tahap I) s/d 18% (LN tidak repatriasi, Tahap II)
- **Harta netto**: aset - utang yang berkaitan
- **Pembayaran**: sekali bayar penuh, via bank persepsi, kode billing khusus
- **Pasca-PPS**: penghasilan dari harta PPS kena PPh Final 0,5%-0,7% selama 3 tahun (2024-2026)
- **Masa pengawasan**: 3 tahun, harta tidak boleh ditarik sebelum itu
- **Sanksi melanggar**: tarif batal + bunga + bisa pidana (kekebalan hilang)
- **2026 = tahun terakhir** PPh Final 0,5%-0,7% untuk yang ikut PPS 2022
- **2027**: kembali ke PPh normal

Selesai Bab 3! 🎉 Kalau kamu udah paham PPS, kamu siap lanjut ke bab berikutnya yang lebih teknis. Tetap semangat, kamu hampir lulus Brevet AB! 💪`,
      keyPoints: [
        "Rumus PPS: Tarif × Harta Netto yang Diungkap (aset - utang yang berkaitan)",
        "Tarif PPS 2022: 12,5% (Indonesia atau LN repatriasi, Tahap I) sampai 18% (LN tidak repatriasi, Tahap II)",
        "Tahap I (1 Jan-30 Apr 2023) lebih murah daripada Tahap II (1 Mei-30 Jun 2023)",
        "Pembayaran PPS: sekali bayar penuh via bank persepsi, kode billing khusus",
        "Pasca-PPS 2024-2026: penghasilan dari harta PPS kena PPh Final 0,5%-0,7%",
        "Masa pengawasan 3 tahun: harta tidak boleh ditarik, investasi SBN tidak boleh dicairkan",
        "Sanksi melanggar: tarif PPS batal + bunga + bisa pidana (kekebalan hilang)",
        "2026 = tahun terakhir PPh Final 0,5%-0,7% untuk penghasilan dari harta PPS",
        "2027: kembali ke PPh normal (OP/badan)",
        "Tidak ada PPS baru sampai Agustus 2026",
      ],
      quiz: [
        {
          id: "ch03-l03-q1",
          question:
            "Pak Andi ikut PPS 2022 Tahap I. Harta di Indonesia yang belum dilaporkan: tanah Rp 5 miliar (utang Rp 1 miliar), tabungan Rp 2 miliar. Berapa PPS terutang?",
          options: [
            "Rp 625 juta (12,5% × Rp 5 miliar)",
            "Rp 750 juta (12,5% × Rp 6 miliar)",
            "Rp 875 juta (12,5% × Rp 7 miliar)",
            "Rp 1 miliar (10% × Rp 10 miliar)",
          ],
          correctIndex: 1,
          explanation:
            "Harta netto = 5 + 2 - 1 (utang tanah) = Rp 6 miliar. Tarif Tahap I Indonesia = 12,5%. PPS = 12,5% × 6 miliar = Rp 750 juta.",
          difficulty: "sedang",
        },
        {
          id: "ch03-l03-q2",
          question:
            "Bu Yanti ikut PPS 2022 Tahap II. Harta di Singapura Rp 10 miliar, pilih tidak repatriasi. Berapa PPS terutang?",
          options: [
            "Rp 1,25 miliar (12,5%)",
            "Rp 1,5 miliar (15%)",
            "Rp 1,8 miliar (18%)",
            "Rp 2 miliar (20%)",
          ],
          correctIndex: 2,
          explanation:
            "Harta LN tidak repatriasi, Tahap II = tarif tertinggi 18%. PPS = 18% × 10 miliar = Rp 1,8 miliar.",
          difficulty: "sedang",
        },
        {
          id: "ch03-l03-q3",
          question:
            "Pak Budi ikut PPS 2022 dengan pengungkapan harta Indonesia Rp 4 miliar (Tahap I). Setelah PPS, di 2024 harta itu menghasilkan bunga deposito Rp 100 juta. Berapa PPh Final pasca-PPS-nya?",
          options: [
            "Rp 500 ribu (0,5%)",
            "Rp 5 juta (5%)",
            "Rp 10 juta (10%)",
            "Rp 20 juta (20%)",
          ],
          correctIndex: 0,
          explanation:
            "Pasca-PPS 2024-2026, penghasilan dari harta PPS kena PPh Final 0,5% (untuk harta di Indonesia). PPh = 0,5% × Rp 100 juta = Rp 500 ribu. Bandingkan dengan PPh Final bunga deposito normal = 20% × 100jt = Rp 20 juta.",
          difficulty: "sulit",
        },
        {
          id: "ch03-l03-q4",
          question:
            "Pak Wawan ikut PPS 2022 Tahap I dengan harta Indonesia Rp 8 miliar. Berapa selisih PPS-nya kalau dia telat dan baru bisa ikut Tahap II?",
          options: [
            "Tidak ada selisih, tarif sama",
            "Hemat Rp 200 juta di Tahap I (12,5% vs 15%)",
            "Hemat Rp 1 miliar di Tahap I",
            "Tahap II lebih murah",
          ],
          correctIndex: 1,
          explanation:
            "Tahap I: 12,5% × 8 miliar = Rp 1 miliar. Tahap II: 15% × 8 miliar = Rp 1,2 miliar. Selisih: Rp 200 juta lebih murah di Tahap I.",
          difficulty: "sedang",
        },
        {
          id: "ch03-l03-q5",
          question:
            "Sanksi untuk WP yang melanggar syarat pasca-PPS (misal harta repatriasi ditarik sebelum 3 tahun) adalah?",
          options: [
            "Tidak ada sanksi, sudah bayar PPS",
            "Hanya denda Rp 1 juta",
            "Tarif PPS jadi batal + bunga sanksi + kekebalan pidana hilang",
            "Hanya diperingatkan",
          ],
          correctIndex: 2,
          explanation:
            "Pelanggaran syarat pasca-PPS menyebabkan: tarif PPS jadi batal (bayar selisih ke tarif normal) + bunga sanksi + kekebalan pidana hilang (bisa kena Pasal 38-43 KUP). Ini sering keluar di soal!",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Pengungkapan Komprehensif Pak Eko",
        description:
          "Pak Eko, pengusaha, ikut PPS 2022 Tahap I. Hartanya: Apartemen Jakarta Rp 5 miliar (utang Rp 2 miliar), Tanah Bandung Rp 3 miliar, Tabungan BCA Rp 1,5 miliar, Properti Malaysia Rp 6 miliar (pilih repatriasi), Deposito Singapura Rp 4 miliar (tidak repatriasi). Berapa total PPS terutang?",
        solution:
          "(1) Harta Indonesia: 5 miliar + 3 miliar + 1,5 miliar = Rp 9,5 miliar bruto. Netto (setelah utang Rp 2 miliar) = Rp 7,5 miliar. Tarif 12,5% × 7,5 miliar = Rp 937,5 juta. (2) Harta Malaysia (repatriasi): netto Rp 6 miliar. Tarif 12,5% × 6 miliar = Rp 750 juta. Pak Eko harus repatriasi Rp 6 miliar ke Indonesia & investasi SBN 3 tahun. (3) Harta Singapura (tidak repatriasi): netto Rp 4 miliar. Tarif 15% × 4 miliar = Rp 600 juta. (4) Total PPS terutang: Rp 937,5jt + Rp 750jt + Rp 600jt = Rp 2,2875 miliar. (5) Pasca-PPS 2024-2026: penghasilan dari harta PPS kena PPh Final 0,5% (untuk Indonesia & repatriasi) atau 0,7% (untuk tidak repatriasi). (6) Masa pengawasan 3 tahun: Pak Eko tidak boleh menjual properti Malaysia yang direpatriasi atau mencairkan SBN sebelum 3 tahun.",
      },
      tags: [
        "perhitungan PPS",
        "tarif PPS",
        "harta netto PPS",
        "Tahap I PPS",
        "Tahap II PPS",
        "PPh Final pasca-PPS",
        "repatriasi",
        "sanksi pasca-PPS",
        "contoh kasus PPS",
      ],
    },
  ],
  exam: [
    {
      id: "ch03-e1",
      question: "Apa kepanjangan PPS dalam konteks perpajakan Indonesia?",
      options: [
        "Program Penertiban Pajak",
        "Program Pengungkapan Sukarela",
        "Pemutihan Pajak Sukarela",
        "Pengampunan Pajak Sebagian",
      ],
      correctIndex: 1,
      explanation:
        "PPS = Program Pengungkapan Sukarela. Bentuk tax amnesty yang terbaru di Indonesia, diatur di UU HPP.",
      difficulty: "mudah",
    },
    {
      id: "ch03-e2",
      question: "Berapa tarif PPS 2022 untuk harta di Indonesia yang diungkap pada Tahap I?",
      options: ["0,5%", "5%", "12,5%", "18%"],
      correctIndex: 2,
      explanation:
        "Harta di Indonesia, Tahap I (1 Jan-30 Apr 2023) kena tarif 12,5%. Ini tarif terendah PPS 2022.",
      difficulty: "sedang",
    },
    {
      id: "ch03-e3",
      question:
        "Pak Joni ikut PPS Tahap II dengan harta Singapura Rp 5 miliar yang tidak direpatriasi. Berapa PPS terutang?",
      options: [
        "Rp 625 juta (12,5%)",
        "Rp 750 juta (15%)",
        "Rp 900 juta (18%)",
        "Rp 1 miliar (20%)",
      ],
      correctIndex: 2,
      explanation:
        "Harta LN tidak repatriasi, Tahap II = tarif 18%. PPS = 18% × 5 miliar = Rp 900 juta.",
      difficulty: "sedang",
    },
    {
      id: "ch03-e4",
      question: "Penghasilan dari harta yang diungkap di PPS 2022, berapa tarif PPh Final-nya di 2024-2026?",
      options: ["0%", "0,5%-0,7%", "5%", "11%"],
      correctIndex: 1,
      explanation:
        "Pasca-PPS, penghasilan dari harta yang diungkap kena PPh Final 0,5%-0,7% selama 3 tahun (2024-2026). Tarif tergantung apakah harta direpatriasi atau tidak.",
      difficulty: "sedang",
    },
    {
      id: "ch03-e5",
      question: "Manakah perbedaan UTAMA antara Tax Amnesty 2016 dan PPS 2022?",
      options: [
        "Tax Amnesty 2016 khusus WP OP, PPS 2022 khusus WP badan",
        "Tax Amnesty 2016 tarifnya lebih tinggi (5%-10%), PPS 2022 lebih rendah (1%-3%)",
        "Tax Amnesty 2016 tarif 0,5%-5%, PPS 2022 tarif 12,5%-18%",
        "PPS 2022 tidak hapus sanksi pidana, sedangkan 2016 hapus",
      ],
      correctIndex: 2,
      explanation:
        "Tax Amnesty 2016 tarifnya lebih murah (0,5%-5%) dibanding PPS 2022 (12,5%-18%). Keduanya hapus sanksi pidana & administrasi.",
      difficulty: "sedang",
    },
    {
      id: "ch03-e6",
      question: "Berapa lama masa pengawasan pasca-PPS untuk harta yang direpatriasi?",
      options: ["1 tahun", "2 tahun", "3 tahun", "5 tahun"],
      correctIndex: 2,
      explanation:
        "Masa pengawasan PPS 2022 = 3 tahun (2024-2026). Selama itu, harta yang direpatriasi tidak boleh ditarik & investasi SBN tidak boleh dicairkan.",
      difficulty: "sedang",
    },
    {
      id: "ch03-e7",
      question:
        "Pak Bowo ikut PPS 2022 Tahap I dengan harta Indonesia Rp 10 miliar (utang Rp 2 miliar). Berapa PPS terutang?",
      options: [
        "Rp 1 miliar (12,5% × Rp 8 miliar netto)",
        "Rp 1,25 miliar (12,5% × Rp 10 miliar)",
        "Rp 1,8 miliar (18% × Rp 10 miliar)",
        "Rp 2 miliar (20% × Rp 10 miliar)",
      ],
      correctIndex: 0,
      explanation:
        "Harta netto = 10 miliar - 2 miliar utang = Rp 8 miliar. Tarif Tahap I Indonesia = 12,5%. PPS = 12,5% × 8 miliar = Rp 1 miliar.",
      difficulty: "sedang",
    },
    {
      id: "ch03-e8",
      question:
        "Apa konsekuensi WP yang melanggar syarat pasca-PPS (misal menarik harta repatriasi sebelum 3 tahun)?",
      options: [
        "Tidak ada konsekuensi",
        "Hanya denda Rp 1 juta",
        "Tarif PPS jadi batal + bunga + kekebalan pidana hilang",
        "Hanya diperingatkan",
      ],
      correctIndex: 2,
      explanation:
        "Pelanggaran syarat pasca-PPS menyebabkan: tarif PPS jadi batal (bayar selisih ke tarif normal) + bunga sanksi + kekebalan pidana hilang. WP bisa kena pidana Pasal 38-43 KUP.",
      difficulty: "sulit",
    },
    {
      id: "ch03-e9",
      question: "Kondisi PPS di Indonesia per Agustus 2026?",
      options: [
        "PPS 2026 sedang berjalan",
        "PPS baru akan dibuka Oktober 2026",
        "Tidak ada PPS baru, PPS terakhir berakhir 30 Juni 2023",
        "PPS dibuka permanent untuk WP patuh",
      ],
      correctIndex: 2,
      explanation:
        "Sampai Agustus 2026, TIDAK ADA PPS baru yang diumumkan. PPS terakhir (PPS 2022) sudah berakhir 30 Juni 2023. Yang ada hanya pemutihan lokal (PKB/BBNKB daerah).",
      difficulty: "sedang",
    },
    {
      id: "ch03-e10",
      question:
        "Pak Tirta ikut PPS 2022 Tahap I dengan harta Indonesia Rp 4 miliar. Pada 2024, harta itu menghasilkan sewa Rp 200 juta. Berapa PPh Final pasca-PPS yang terutang?",
      options: [
        "Rp 1 juta (0,5% × Rp 200 juta)",
        "Rp 10 juta (5%)",
        "Rp 20 juta (10% PPh Final sewa normal)",
        "Rp 40 juta (20%)",
      ],
      correctIndex: 0,
      explanation:
        "Pasca-PPS 2024-2026, penghasilan dari harta PPS (di Indonesia, Tahap I = 0,5%) kena PPh Final 0,5%. PPh = 0,5% × Rp 200 juta = Rp 1 juta. Bandingkan dengan PPh Final sewa normal = 10% × 200jt = Rp 20 juta.",
      difficulty: "sulit",
    },
  ],
}
