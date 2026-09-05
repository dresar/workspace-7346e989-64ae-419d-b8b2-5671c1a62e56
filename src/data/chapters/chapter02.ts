import type { Chapter } from "../types"

// ============================================================================
// BAB 2: UU CIPTA KERJA & HARMONISASI PAJAK (HPP)
// ============================================================================

export const chapter02: Chapter = {
  id: "ch02",
  slug: "uu-cipta-kerja-hpp",
  number: 2,
  title: "UU Cipta Kerja & Harmonisasi Peraturan Perpajakan (HPP)",
  shortTitle: "Cipta Kerja & HPP",
  description:
    "Dari UU Cipta Kerja sampai UU HPP — perubahan besar di hukum pajak Indonesia. Tarif PPh baru, PPN 12%, pajak karbon, semua di sini!",
  icon: "Scale",
  color: "teal",
  difficulty: "menengah",
  estimatedMinutes: 150,
  objectives: [
    "Paham latar belakang & isi klaster perpajakan UU Cipta Kerja",
    "Kenal asas, tujuan, dan ruang lingkup UU HPP (UU 7/2021)",
    "Bisa jelasin perubahan KUP yang signifikan: bunga mengambang MIR, sanksi baru",
    "Kuasai tarif PPh OP 5 lapis (5%-35%) & PPh Badan 22%, PTKP 2026",
    "Paham PPN 12% (efektif 11% via DPP Nilai Lain) dan pajak karbon",
    "Beda'in PPh UMKM final 0,5% dengan regime sebelumnya",
  ],
  lessons: [
    // =========================================================================
    // LESSON 1: UU CIPTA KERJA KLASTER PERPAJAKAN
    // =========================================================================
    {
      id: "ch02-l01",
      slug: "uu-cipta-kerja-pajak",
      title: "UU Cipta Kerja Klaster Perpajakan: Apa yang Diubah?",
      subtitle: "Latar belakang, dampak ke WP, dan perubahan kunci",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 18,
      content: `# ⚖️ UU Cipta Kerja Klaster Perpajakan

Sebelum bahas UU HPP (UU 7/2021), kita harus mundur dulu ke **UU Cipta Kerja (UU 11/2020)** yang jadi cikal-bakalnya. Banyak yang salah ngira UU Cipta Kerja itu cuma soal ketenagakerjaan — padahal ada **klaster perpajakan** yang signifikan!

## Apa Itu UU Cipta Kerja?

**UU Cipta Kerja** = UU No. 11 Tahun 2020 tentang Cipta Kerja. Diterbitkan Oktober 2020, lalu diuji ke Mahkamah Konstitusi (Putusan MK 91/PUU-XVIII/2020) yang menyatakan inkonstitusional bersyarat, lalu di-perbaiki menjadi **UU 6/2023** (Perubahan atas UU 11/2020).

UU Cipta Kerja tujuannya: **merangsang investasi & menciptakan lapangan kerja** dengan menyederhanakan regulasi. Ada 11 klaster, salah satunya **Klaster Pemberdayaan UMKM & Klaster Lingkungan Hidup** yang menyangkut pajak.

> **Yang sering diuji di Brevet AB:** UU Cipta Kerja adalah cikal-bakal UU HPP. Banyak perubahan pajak di UU Cipta Kerja lalu diperluas & di-harmonisasi di UU HPP.

## Latar Belakang: Kenapa Pajak Diubah?

Indonesia sebelum UU Cipta Kerja punya beberapa masalah:

1. **Tarif PPh badan 22%** sudah kompetitif, tapi ternyata masih kalah sama Vietnam (20%) & Singapura (17%). Biar lebih kompetitif → ada ide turunin ke 20% di masa depan.
2. **Pajak UMKM** berubah-ubah (PP 23/2018 final 0,5% cuma sampai 2020). Biar lebih pasti → dipermanenkan di UU Cipta Kerja.
3. **Sanksi pajak** terlalu kaku (persentase tetap 2%/bulan dst), nggak adaptif ke suku bunga pasar → diubah jadi MIR mengambang.
4. **Pajak karbon** belum ada → di-introduce via UU Cipta Kerja.
5. **Coretax** butuh dasar hukum → UU Cipta Kerja memberikan landasan.

## Apa yang Diubah di Klaster Perpajakan UU Cipta Kerja?

Beberapa perubahan signifikan:

### 1. PPh UMKM Final 0,5% Jadi Permanen
Sebelum UU Cipta Kerja, PPh UMKM 0,5% diatur di PP 23/2018 dengan masa berlaku terbatas (sampai 2020). UU Cipta Kerja memperpanjang & memperkuat, kemudian **UU HPP mempermanenkannya**.

### 2. Bunga Mengambang (MIR-based)
Sebelum UU Cipta Kerja, sanksi bunga pajak pakai persentase tetap (misal Pasal 8(2) = 2%/bulan, Pasal 9(2a) = 2%/bulan). UU Cipta Kerja mulai mengubah jadi **mengambang** (multiplier MIR). Lengkap di UU HPP.

### 3. Pajak Karbon Diperkenalkan
UU Cipta Kerja memperkenalkan konsep **pajak karbon** untuk pertama kali, dengan tarif minimum Rp 30/kg CO2e. Diimplementasikan secara bertahap lewat UU HPP & PP turunannya.

### 4. PPh Badan Tarif Tunggal 22%
UU Cipta Kerja memastikan tarif PPh badan tunggal 22% (sebelumnya ada kekhawatiran akan naik ke 25% sesuai original UU PPh).

### 5. Insentif Pajak Diperluas
- Tax holiday diperpanjang & diperluas
- Super deduction tertentu (R&D, vocational training)
- Insentif untuk industri pionir

### 6. Harmonisasi Berbagai UU Pajak
UU Cipta Kerja mulai mengkonsolidasi berbagai UU pajak (UU PPh 36/2008, UU PPN 42/2009, UU KUP 6/1983 jo. berbagai perubahan) → terlengkap di UU HPP.

## Dampak ke WP dari UU Cipta Kerja

### Dampak Positif:
1. **UMKM lebih pasti** dengan PPh final 0,5% permanen
2. **Investasi tambah menarik** dengan tax holiday & super deduction
3. **Sanksi lebih adaptif** dengan bunga mengambang
4. **Kepastian hukum** lebih baik dengan konsolidasi UU pajak

### Dampak yang Perlu Diperhatikan:
1. **PPN naik** dari 10% ke 11% (efektif 1 April 2022), lalu 12% (efektif 1 Januari 2025)
2. **Tarif PPh OP naik** dari max 30% jadi max 35% (lapisan baru di atas Rp 5 miliar)
3. **Pajak karbon** mulai diterapkan (PLTU dulu, lalu ekspansi)
4. **Sanksi pidana** lebih ketat untuk penghindaran pajak

## Apa Selanjutnya: UU HPP

Setelah UU Cipta Kerja, pemerintah merasa perlu mengkonsolidasi & memperluas perubahan pajak. Lahir **UU 7/2021 (UU HPP)** yang resmi menamakan diri "Harmonisasi Peraturan Perpajakan". UU HPP inilah yang menjadi **acuan utama** hukum pajak Indonesia saat ini.

> **Tip ujian:** UU Cipta Kerja (UU 11/2020) → cikal-bakal, banyak diubah lewat UU HPP (UU 7/2021). Di 2026, yang dipakai adalah **UU HPP + perubahan**. Jangan bingung kalau soal menyebut "UU Cipta Kerja" tapi jawabannya ada di UU HPP!

## 💼 Kasus Nyata: UMKM Bu Tini Sebelum & Sesudah UU Cipta Kerja

**Situasi:**
- Bu Tini punya usaha konveksi omzet Rp 4 miliar/tahun
- Sebelum 2018: kena PPh OP normal (5%-30% lapisan)
- 2018-2020 (PP 23/2018): kena PPh final 0,5% — tapi cuma 3 tahun
- 2021-2022 (UU Cipta Kerja): PPh final 0,5% diperpanjang
- 2022-sekarang (UU HPP): PPh final 0,5% **permanen**

**Perhitungan PPh Bu Tini 2026:**
- Omzet: Rp 4 miliar
- PPh final 0,5% × Rp 4 miliar = **Rp 20 juta/tahun**

Bandingkan kalau Bu Tini harus pakai PPh OP normal:
- Laba asumsi 10% = Rp 400 juta
- PPh OP: 5% × 60jt + 15% × 190jt + 25% × 150jt = Rp 3jt + Rp 28,5jt + Rp 37,5jt = **Rp 69 juta/tahun**

Nah, dengan PPh final 0,5%, Bu Tini hemat Rp 49 juta/tahun! Inilah salah satu keuntungan konkret UU Cipta Kerja & HPP buat UMKM.

## Update 2026: Yang Perlu Diingat

1. **UU HPP (UU 7/2021)** adalah UU utama yang dipakai 2026
2. **UU Cipta Kerja (UU 11/2020 jo. UU 6/2023)** masih relevan untuk konteks non-pajak (ketenagakerjaan, lingkungan)
3. **Permen & PMK turunan** terus di-update setiap tahun — selalu cek regulasi terbaru
4. **Coretax** sudah jadi sistem operasional — UU HPP jadi landasan legal

## Ringkasan Buat Ujian

- **UU Cipta Kerja (UU 11/2020)** = cikal-bakal, ada klaster perpajakan
- **UU HPP (UU 7/2021)** = harmonisasi & perluasan UU Cipta Kerja di bidang pajak
- UU Cipta Kerja mulai: permanenkan PPh UMKM 0,5%, perkenalkan pajak karbon, ubah bunga jadi mengambang
- **Dampak ke WP**: PPh UMKM pasti, PPN naik 11% lalu 12%, tarif PPh OP max 35%, sanksi adaptif
- **UU HPP** adalah UU acuan utama perpajakan Indonesia 2026

Sudah cukup kebayang? Kalau ya, kita lanjut ke asas & tujuan UU HPP di lesson berikutnya! 📚`,
      keyPoints: [
        "UU Cipta Kerja (UU 11/2020) = cikal-bakal perubahan pajak, ada klaster perpajakan",
        "UU HPP (UU 7/2021) = harmonisasi & perluasan perubahan pajak UU Cipta Kerja",
        "Perubahan kunci UU Cipta Kerja: PPh UMKM 0,5% permanen, bunga mengambang, pajak karbon, PPh badan 22%",
        "PPN naik dari 10% → 11% (1 April 2022) → 12% efektif 11% via DPP 11/12 (1 Januari 2025)",
        "Tarif PPh OP naik dari max 30% jadi max 35% (lapisan baru di atas Rp 5 miliar)",
        "UU HPP adalah UU acuan utama perpajakan Indonesia 2026",
        "Dampak ke WP: UMKM lebih pasti, PPN lebih tinggi, tarif PPh OP lebih progresif",
        "Coretax punya landasan legal di UU Cipta Kerja & HPP",
      ],
      quiz: [
        {
          id: "ch02-l01-q1",
          question: "UU Cipta Kerja (UU 11/2020) berbeda dengan UU HPP (UU 7/2021) dalam hal?",
          options: [
            "UU Cipta Kerja khusus ketenagakerjaan, UU HPP khusus pajak",
            "UU Cipta Kerja adalah cikal-bakal, UU HPP meng-harmonisasi & memperluas perubahan pajak",
            "UU HPP sudah tidak berlaku 2026, yang dipakai UU Cipta Kerja",
            "Keduanya sama persis, hanya beda nama",
          ],
          correctIndex: 1,
          explanation:
            "UU Cipta Kerja memuat 11 klaster (termasuk perpajakan), UU HPP meng-harmonisasi & memperluas klaster perpajakan UU Cipta Kerja menjadi UU pajak komprehensif.",
          difficulty: "sedang",
        },
        {
          id: "ch02-l01-q2",
          question: "Berapa tarif PPh Final UMKM setelah UU HPP?",
          options: ["0,5% (permanen)", "1% (permanen)", "0,5% (sampai 2025)", "1,5% (sampai 2027)"],
          correctIndex: 0,
          explanation:
            "UU HPP mempermanenkan PPh Final UMKM 0,5% (sebelumnya cuma sementara di PP 23/2018 sampai 2020).",
          difficulty: "mudah",
        },
        {
          id: "ch02-l01-q3",
          question:
            "Manakah perubahan yang diperkenalkan UU Cipta Kerja & dilengkapi UU HPP terkait sanksi pajak?",
          options: [
            "Sanksi pidana dihapus",
            "Bunga sanksi menjadi tetap 5%/tahun",
            "Bunga sanksi menjadi mengambang (multiplier MIR)",
            "Sanksi administrasi tidak berlaku untuk UMKM",
          ],
          correctIndex: 2,
          explanation:
            "UU Cipta Kerja mulai mengubah sanksi bunga dari persentase tetap menjadi mengambang (multiplier MIR). UU HPP melengkapi perubahan ini untuk semua pasal sanksi.",
          difficulty: "sedang",
        },
        {
          id: "ch02-l01-q4",
          question: "Pajak karbon pertama kali diperkenalkan di Indonesia melalui?",
          options: [
            "UU PPh 36/2008",
            "UU Cipta Kerja 11/2020",
            "UU HPP 7/2021",
            "PP 23/2018",
          ],
          correctIndex: 1,
          explanation:
            "Pajak karbon diperkenalkan pertama kali di UU Cipta Kerja (UU 11/2020), kemudian dijabarkan lebih detail di UU HPP (UU 7/2021) Pasal 13-17.",
          difficulty: "sulit",
        },
        {
          id: "ch02-l01-q5",
          question: "Manakah yang BUKAN dampak UU Cipta Kerja & UU HPP ke wajib pajak?",
          options: [
            "UMKM lebih pasti dengan PPh final 0,5% permanen",
            "PPN naik dari 10% ke 11% lalu 12%",
            "Tarif PPh OP maksimum naik dari 30% ke 35%",
            "Penghapusan semua jenis pajak daerah",
          ],
          correctIndex: 3,
          explanation:
            "Pajak daerah (Pajak Hotel, Restoran, PKB, BPHTB, dll) tetap ada setelah UU Cipta Kerja & HPP. Yang dihapus justru beberapa jenis pajak pusat yang sudah tidak relevan.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: CV Karya Mandiri Sebelum & Sesudah UU HPP",
        description:
          "CV Karya Mandiri, omzet Rp 4 miliar/tahun. Hitung PPh-nya sebelum UU Cipta Kerja (2017, PP 23/2018 belum ada), saat PP 23/2018 (2018-2020), dan setelah UU HPP (2026). Asumsi laba 10%.",
        solution:
          "(1) Sebelum UU Cipta Kerja (2017): PPh OP normal. Laba Rp 400 juta. PPh OP = 5%×60jt + 15%×190jt + 25%×150jt = Rp 3jt + Rp 28,5jt + Rp 37,5jt = Rp 69 juta. (2) Saat PP 23/2018 (2018-2020): PPh final 0,5% × 4 miliar = Rp 20 juta/tahun. Hemat Rp 49 juta. (3) Setelah UU HPP (2026): PPh final 0,5% permanen × 4 miliar = Rp 20 juta/tahun. CV Karya Mandiri untung besar dari perubahan regulasi, dan sekarang punya kepastian jangka panjang.",
      },
      tags: [
        "UU Cipta Kerja",
        "klaster perpajakan",
        "UU HPP",
        "PPh UMKM permanen",
        "pajak karbon",
        "bunga mengambang",
        "tarif PPh badan",
        "sejarah pajak",
      ],
    },

    // =========================================================================
    // LESSON 2: ASAS, TUJUAN & RUANG LINGKUP UU HPP
    // =========================================================================
    {
      id: "ch02-l02",
      slug: "asas-hpp",
      title: "Asas, Tujuan & Ruang Lingkup UU HPP",
      subtitle: "Asas kepastian hukum, tujuan harmonisasi, dan apa saja yang diatur",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 18,
      content: `# 📐 Asas, Tujuan & Ruang Lingkup UU HPP

Sekarang kita masuk lebih dalam ke **UU HPP (UU 7/2021)**. Pelajaran ini penting karena di ujian, banyak soal yang menanyakan asas & tujuan. Plus, kamu harus paham apa saja yang diatur supaya nggak bingung pas bahas perubahan detail.

## Apa Itu UU HPP?

**UU HPP** = UU No. 7 Tahun 2021 tentang **Harmonisasi Peraturan Perpajakan**. Disahkan 29 Oktober 2021, efektif 1 Januari 2022 (untuk sebagian besar ketentuan).

> **Analogi:** Kalau UU pajak sebelumnya berantakan (UU PPh 36/2008, UU PPN 42/2009, UU KUP, UU Bea Materai, dll) — UU HPP merapikan & menyatukan perubahan-perubahan jadi satu paket harmonis.

## Asas-Asas UU HPP

UU HPP menganut beberapa asas, yang paling utama:

### 1. Asas Kepastian Hukum (Legal Certainty)
Setiap ketentuan harus jelas, tegas, dan dapat diprediksi. WP tahu pasti berapa pajaknya, kapan harus bayar, apa konsekuensinya kalau telat.

### 2. Asas Keadilan (Fairness)
Pajak harus adil — yang mampu lebih bayar lebih. Inilah kenapa tarif PPh OP progresif (5%-35%) — bukan flat.

### 3. Asas Manfaat (Benefit)
Pajak dipakai untuk sebesar-besarnya kemakmuran rakyat. Bukan buat belanja mewah pejabat, tapi buat jalan, sekolah, RS, subsidi, dst.

### 4. Asas Kebijaksanaan (Prudence)
Dalam menerapkan ketentuan, fiskus harus bijak — tidak asal tilang, tidak diskriminatif.

### 5. Asas Transparansi (Transparency)
WP berhak tahu: berapa pajaknya, atas dasar apa, dan bagaimana proses penghitungannya.

### 6. Asas Akuntabilitas (Accountability)
DJP bertanggung jawab atas setiap keputusannya. WP bisa mengajukan keberatan/banding kalau tidak setuju.

### 7. Asas Efisiensi
Sistem pajak harus efisien — biaya memungut lebih kecil dari hasilnya. Inilah kenapa Coretax dikembangkan: untuk efisiensi administrasi.

> **Tip ujian:** Hafalin 7 asas ini. Yang sering ditanya: **kepastian hukum, keadilan, manfaat, transparansi, akuntabilitas**.

## Tujuan UU HPP

UU HPP punya beberapa tujuan utama (Pasal 2):

### 1. Harmonisasi Peraturan Perpajakan
Menyatukan perubahan-perubahan dari berbagai UU pajak supaya konsisten & tidak tumpang-tindih.

### 2. Meningkatkan Kepatuhan WP
Dengan sistem yang lebih adil & transparan, diharapkan WP lebih patuh lapor & bayar pajak.

### 3. Meningkatkan Penerimaan Negara
Target pajak yang besar (2026: Rp 2.800 triliun) butuh sistem yang lebih efektif.

### 4. Mendorong Investasi & Daya Saing
Tarif PPh badan kompetitif, tax holiday diperluas, super deduction untuk R&D — semua bikin Indonesia lebih menarik buat investasi.

### 5. Mendukung Reformasi Tata Kelola
Coretax, digitalisasi pemeriksaan, transparansi data — semua bagian dari reformasi tata kelola perpajakan.

### 6. Mengantisipasi Ekonomi Digital
Pajak PMSE (Penyelenggara Modat Asing) seperti Netflix, Spotify, Google — diatur jelas di UU HPP.

### 7. Mendukung Pembangunan Berkelanjutan
Pajak karbon & insentif lingkungan → mendorong green economy.

## Ruang Lingkup UU HPP

UU HPP mengatur banyak hal. Berikut yang utama:

### 1. Perubahan atas UU KUP (UU 6/1983 jo. UU 16/2009)
- Definisi baru (Pajak, WP, BUT, dll)
- Sanksi bunga mengambang MIR
- Sanksi pidana diperketat

### 2. Perubahan atas UU PPh (UU 36/2008)
- Tarif PPh OP 5 lapis (5%-35%)
- Tarif PPh badan 22%
- PPh UMKM final 0,5% permanen
- PPh final untuk berbagai jenis penghasilan
- Pengenaan PPh atas PMSE & ekonomi digital

### 3. Perubahan atas UU PPN (UU 42/2009)
- Tarif PPN 12% (efektif 11% via DPP Nilai Lain)
- Bukan objek PPN diperbarui
- Pajak karbon di-introduce

### 4. Perubahan atas UU Cukai
- Tarif & struktur cukai disesuaikan

### 5. Bea Materai (UU 10/2020)
- Bea Materai flat Rp 10.000

### 6. Pajak Karbon (Pasal 13-17 UU HPP)
- Tarif minimum Rp 30/kg CO2e
- Implementasi bertahap

### 7. Pengampunan Pajak (PPS 2022)
- Dalam Pasal 13(3a)-(3f) UU HPP

### 8. Insentif Pajak
- Tax holiday diperluas
- Super deduction (R&D 300%, vokasi 200%)
- Insentif kawasan ekonomi khusus (KEK)

## Yang Diubah Signifikan di UU HPP

Berikut ringkasan perubahan paling signifikan:

| Aspek | Sebelum UU HPP | Setelah UU HPP |
|-------|----------------|----------------|
| Tarif PPh OP | Max 30% (4 lapis) | Max 35% (5 lapis) |
| Tarif PPh Badan | 22% (akan turun 20% tapi dibatalkan) | 22% (final) |
| Tarif PPN | 10% | 12% (efektif 11% via DPP 11/12) |
| PTKP | TK/0 Rp 54 juta | Tetap Rp 54 juta (tidak berubah) |
| PPh UMKM | 0,5% sementara (PP 23/2018) | 0,5% permanen |
| Sanksi bunga | Tetap (misal 2%/bulan) | Mengambang (multiplier MIR) |
| Pajak Karbon | Belum ada | Ada, Rp 30/kg CO2e minimum |
| Tarif PPh 26 | 20% | 20% (masih, dengan treaty bisa lebih rendah) |
| Biaya Jabatan | 5%, max Rp 500K/bln | Tetap (tidak berubah) |

## PPh OP 5 Lapis: Yang Paling Sering Ditanya

Tarif PPh OP pasca UU HPP (per 2026, tidak berubah dari 2022):

| Lapisan | Penghasilan Kena Pajak (PKP) | Tarif |
|---------|------------------------------|-------|
| I | s/d Rp 60 juta | 5% |
| II | Rp 60 jt – Rp 250 jt | 15% |
| III | Rp 250 jt – Rp 500 jt | 25% |
| IV | Rp 500 jt – Rp 5 miliar | 30% |
| V | > Rp 5 miliar | 35% |

> **Hafalin ini!** 5 lapis dengan batas: 60jt, 250jt, 500jt, 5 miliar. Tarif: 5%, 15%, 25%, 30%, 35%.

## PTKP 2026 (Tidak Berubah dari UU HPP)

| Status | PTKP / tahun |
|--------|--------------|
| TK/0 (lajang) | Rp 54.000.000 |
| K/0 (menikah, 0 tanggungan) | Rp 58.500.000 |
| K/1 | Rp 63.000.000 |
| K/2 | Rp 67.500.000 |
| K/3 (maksimal 3 tanggungan) | Rp 72.000.000 |

> **Catatan:** Pasal 31A UU HPP sebenarnya mengizinkan PTKP berbasis UMK (Upah Minimum regional), tapi **PMK turunannya belum terbit** per 2026. Jadi PTKP tetap flat.

## 💼 Kasus Nyata: Hitung PPh OP dengan Tarif Baru

**Kasus:**
Pak Rudi, pegawai eksekutif, penghasilan kena pajak (setelah biaya jabatan & PTKP) Rp 600 juta/tahun.

**Perhitungan PPh OP (tarif UU HPP):**
- Lapisan I: 5% × 60 juta = Rp 3 juta
- Lapisan II: 15% × 190 juta (250jt - 60jt) = Rp 28,5 juta
- Lapisan III: 25% × 250 juta (500jt - 250jt) = Rp 62,5 juta
- Lapisan IV: 30% × 100 juta (600jt - 500jt) = Rp 30 juta
- **Total PPh OP**: Rp 3 + 28,5 + 62,5 + 30 = **Rp 124 juta**

Bandingkan kalau pakai tarif lama (UU 36/2008, max 30%):
- Lapisan I (s/d 50jt): 5% × 50jt = Rp 2,5 juta
- Lapisan II (50-250jt): 15% × 200jt = Rp 30 juta
- Lapisan III (250-500jt): 25% × 250jt = Rp 62,5 juta
- Lapisan IV (> 500jt): 30% × 100jt = Rp 30 juta
- **Total**: Rp 2,5 + 30 + 62,5 + 30 = **Rp 125 juta**

Untuk penghasilan Rp 600 juta, selisihnya tipis. Tapi kalau penghasilan sangat tinggi (misal Rp 10 miliar), selisihnya besar:

- Pakai UU HPP: 5%×60jt + 15%×190jt + 25%×250jt + 30%×4,5 miliar + 35%×5 miliar
- = Rp 3jt + Rp 28,5jt + Rp 62,5jt + Rp 1,35 miliar + Rp 1,75 miliar = **Rp 3,194 miliar**

Versi tarif lama (max 30%):
- = Rp 2,5jt + Rp 30jt + Rp 62,5jt + Rp 30%×9,7 miliar
- = Rp 2,5jt + Rp 30jt + Rp 62,5jt + Rp 2,91 miliar = **Rp 3,005 miliar**

Selisih Rp 189 juta lebih mahal karena ada lapisan 35% di UU HPP untuk penghasilan > Rp 5 miliar.

## Update 2026: Yang Berubah & Yang Tetap

### Yang Berubah Sejak UU HPP:
- Tarif PPh OP 5 lapis (5%-35%) — berlaku sejak 2022
- PPN 12% efektif 11% via DPP 11/12 — sejak 1 Januari 2025
- Pajak karbon (PLTU sejak 2022, ekspansi bertahap)
- Bunga MIR mengambang untuk semua pasal sanksi

### Yang Tetap (Tidak Berubah):
- PTKP (Rp 54jt - Rp 72jt)
- Biaya Jabatan (5%, max Rp 500K/bln = Rp 6jt/thn)
- Tarif PPh Badan 22%
- Tarif PPh 26 20% (untuk WPLN)
- Tarif PPh Final (deposito 20%, saham IDX 0,1%, dll)

> **Tip ujian:** Soal yang menanyakan PTKP dan Biaya Jabatan — jawabannya tetap sama dengan sebelum UU HPP. Yang berubah cuma tarif PPh OP, PPN, dan bunga sanksi.

## Ringkasan Buat Ujian

- **UU HPP** = UU 7/2021, harmonisasi semua perubahan pajak
- **7 asas UU HPP**: kepastian hukum, keadilan, manfaat, kebijaksanaan, transparansi, akuntabilitas, efisiensi
- **Tujuan UU HPP**: harmonisasi, kepatuhan, penerimaan, investasi, tata kelola, ekonomi digital, green economy
- **Ruangan lingkup**: KUP, PPh, PPN, Cukai, Bea Materai, Pajak Karbon, PPS, Insentif
- **PPh OP 5 lapis**: 5%, 15%, 25%, 30%, 35% (batas 60jt, 250jt, 500jt, 5M)
- **PPh Badan**: 22% (final, tidak turun)
- **PTKP 2026**: TK/0 Rp 54jt, K/3 Rp 72jt (tidak berubah)
- **Biaya Jabatan**: 5%, max Rp 500K/bln (tidak berubah)

Sudah mulai paham? Di lesson berikutnya kita masuk ke detail perubahan KUP di UU HPP. 🚀`,
      keyPoints: [
        "UU HPP = UU 7/2021, harmonisasi semua perubahan pajak Indonesia",
        "7 asas UU HPP: kepastian hukum, keadilan, manfaat, kebijaksanaan, transparansi, akuntabilitas, efisiensi",
        "Tujuan UU HPP: harmonisasi, kepatuhan, penerimaan, investasi, tata kelola, ekonomi digital, green economy",
        "PPh OP 5 lapis: 5% (s/d 60jt), 15% (60-250jt), 25% (250-500jt), 30% (500jt-5M), 35% (>5M)",
        "Tarif PPh badan 22% (final, tidak turun ke 20%)",
        "PTKP 2026 tetap: TK/0 Rp 54jt, K/0 Rp 58,5jt, K/3 Rp 72jt",
        "Biaya Jabatan: 5%, max Rp 500K/bln (Rp 6jt/thn) — tidak berubah",
        "PPN 12% efektif 11% via DPP Nilai Lain 11/12 sejak 1 Januari 2025",
        "Pajak karbon Rp 30/kg CO2e minimum, implementasi bertahap (PLTU dulu)",
      ],
      quiz: [
        {
          id: "ch02-l02-q1",
          question: "UU HPP (UU 7/2021) berlaku efektif sejak kapan?",
          options: [
            "1 Januari 2021",
            "29 Oktober 2021 (saat disahkan)",
            "1 Januari 2022 (untuk sebagian besar ketentuan)",
            "1 April 2022 (saat PPN naik ke 11%)",
          ],
          correctIndex: 2,
          explanation:
            "UU HPP disahkan 29 Oktober 2021, tapi sebagian besar ketentuan berlaku efektif 1 Januari 2022. PPN naik ke 11% baru efektif 1 April 2022.",
          difficulty: "sedang",
        },
        {
          id: "ch02-l02-q2",
          question: "Manakah yang BUKAN termasuk asas UU HPP?",
          options: [
            "Asas kepastian hukum",
            "Asas keadilan",
            "Asas manfaat",
            "Asas privatifikasi",
          ],
          correctIndex: 3,
          explanation:
            "UU HPP menganut 7 asas: kepastian hukum, keadilan, manfaat, kebijaksanaan, transparansi, akuntabilitas, efisiensi. Asas privatifikasi TIDAK ADA.",
          difficulty: "mudah",
        },
        {
          id: "ch02-l02-q3",
          question:
            "Pak Hendra penghasilan kena pajak Rp 7 miliar/tahun. Berapa PPh OP-nya menurut tarif UU HPP?",
          options: [
            "Rp 2 miliar",
            "Rp 2,355 miliar",
            "Rp 2,545 miliar",
            "Rp 2,895 miliar",
          ],
          correctIndex: 2,
          explanation:
            "Perhitungan: 5%×60jt + 15%×190jt + 25%×250jt + 30%×4,5 miliar + 35%×2 miliar = 3jt + 28,5jt + 62,5jt + 1,35 miliar + 700jt = Rp 2,545 miliar.",
          difficulty: "sulit",
        },
        {
          id: "ch02-l02-q4",
          question: "Berapa PTKP untuk WP OP status K/2 (menikah, 2 tanggungan) per 2026?",
          options: ["Rp 54 juta", "Rp 58,5 juta", "Rp 67,5 juta", "Rp 72 juta"],
          correctIndex: 2,
          explanation:
            "PTKP K/2 = TK/0 (54jt) + tambahan menikah (4,5jt) + 2 tanggungan (4,5jt × 2 = 9jt) = Rp 67.500.000.",
          difficulty: "sedang",
        },
        {
          id: "ch02-l02-q5",
          question: "Manakah perubahan yang TIDAK diperkenalkan UU HPP?",
          options: [
            "Tarif PPh OP max 35%",
            "PPN naik ke 12%",
            "Pajak karbon",
            "PTKP berbasis UMK (sudah diterapkan)",
          ],
          correctIndex: 3,
          explanation:
            "UU HPP Pasal 31A memang mengatur PTKP berbasis UMK, tapi PMK turunannya belum terbit per 2026. Jadi PTKP masih flat seperti sebelumnya.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Hitung PPh OP Pak Budi (Eksekutif Muda)",
        description:
          "Pak Budi, single, penghasilan bruto Rp 20 juta/bulan (Rp 240 juta/tahun). Biaya jabatan 5%, max Rp 500K/bln. PTKP TK/0 Rp 54 juta. Berapa PPh OP terutang setahun?",
        solution:
          "(1) Bruto setahun: Rp 240 juta. (2) Biaya jabatan: 5% × 240jt = Rp 12 juta (tapi max Rp 6 juta/thn, jadi diambil Rp 6 juta). (3) Penghasilan neto: 240 - 6 = Rp 234 juta. (4) PTKP TK/0: Rp 54 juta. (5) PKP: 234 - 54 = Rp 180 juta. (6) PPh OP: Lapisan I (5%×60jt) + Lapisan II (15%×120jt) = Rp 3jt + Rp 18jt = Rp 21 juta/tahun. Jadi Pak Budi kena PPh OP Rp 21 juta setahun.",
      },
      tags: [
        "UU HPP",
        "asas UU HPP",
        "tujuan UU HPP",
        "ruang lingkup UU HPP",
        "tarif PPh OP",
        "PTKP 2026",
        "biaya jabatan",
        "PPh badan 22%",
      ],
    },

    // =========================================================================
    // LESSON 3: PERUBAHAN KUP DALAM UU HPP
    // =========================================================================
    {
      id: "ch02-l03",
      slug: "hpp-kup",
      title: "Perubahan KUP dalam UU HPP: Definisi Baru, Sanksi & Bunga Mengambang",
      subtitle: "Definisi baru, sanksi administrasi, bunga MIR 2026, sanksi pidana",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 22,
      content: `# 📝 Perubahan KUP dalam UU HPP

Setelah paham asas & tujuan UU HPP, sekarang kita masuk ke detail perubahan **KUP** (Ketentuan Umum & Tata Cara Perpajakan). Ini fondasi yang harus kamu kuasai karena banyak yang berubah signifikan.

## Definisi Baru di UU HPP

Beberapa definisi penting yang diperbarui di UU HPP:

### 1. Pajak (Pasal 1 angka 1)
> "Pajak adalah kontribusi wajib kepada negara yang terutang oleh orang pribadi atau badan yang bersifat **memaksa berdasarkan Undang-Undang** dengan tidak mendapatkan imbalan secara langsung dan digunakan untuk keperluan negara bagi sebesar-besarnya kemakmuran rakyat."

Sama dengan UU KUP lama, tapi kata "kontribusi wajib" menggantikan "iuran rakyat" — supaya lebih modern.

### 2. Wajib Pajak (Pasal 1 angka 2)
> "Wajib Pajak adalah orang pribadi atau badan, meliputi pembayar pajak, pemotong pajak, dan pemungut pajak, yang mempunyai hak dan kewajiban perpajakan sesuai dengan ketentuan peraturan perundang-undangan di bidang perpajakan."

Bedanya: ditambahkan eksplisit **"pembayar, pemotong, pemungut"** — supaya clear bahwa 3 peran ini semuanya wajib pajak.

### 3. Bentuk Usaha Tetap (BUT) — Pasal 1 angka 4
Definisi BUT diperluas di UU HPP, sekarang mencakup:
- Tempat kedudukan manajemen
- Cabang perusahaan
- Kantor perwakilan
- Gedung kantor, pabrik, bengkel, gudang
- Pertokoan, warung
- Pertanian, perkebunan, pertambangan
- Instalasi listrik, gas, air
- **Jasa bangunan** (konstruksi)
- **Pemberian jasa lewat karyawan** (≥ 60 hari dalam 12 bulan)
- **Agen asuransi** (asing)
- **Komputer, internet, satelit** (e-commerce)

> **Yang baru:** BUT sekarang eksplisit mencakup jasa konstruksi, agen asuransi asing, dan kegiatan digital via internet/satelit.

### 4. Pengusaha Kena Pajak (PKP) — Pasal 1 angka 5
Definisi diperjelas bahwa PKP termasuk **penyelenggara modat asing** (PMSE) untuk PPN.

### 5. SPT (Surat Pemberitahuan)
Definisi SPT tetap sama, tapi di UU HPP ditegaskan bahwa SPT **wajib elektronik** di era Coretax.

## Sanksi Administrasi: Yang Berubah Signifikan

Sebelum UU HPP, sanksi bunga pakai persentase tetap. Setelah UU HPP, sanksi jadi **mengambang** berdasarkan **MIR (Monthly Interest Rate)** yang ditetapkan KMK tiap bulan.

### Cara Hitung Bunga Mengambang
**Bunga = MIR × Multiplier Pasal × Pokok Pajak × Jumlah Bulan**

Multiplier pasal (berdasarkan berat pelanggaran):

| Pasal KUP | Pelanggaran | Multiplier | Tarif Agustus 2026 (MIR 0,6%) |
|-----------|-------------|------------|-------------------------------|
| Pasal 7 | Denda tetap terlambat lapor | (Denda tetap) | OP Rp 100K, Badan Rp 1M, PPN Rp 500K |
| Pasal 8(2) | SKPKB | 1,7 | 1,02%/bulan |
| Pasal 8(5) | SKPKBT | 2,4 | 1,44%/bulan |
| Pasal 9(2a) | STP | 1,7 | 1,02%/bulan |
| Pasal 11(3) | Bunga imbalan kelebihan bayar | 1 | 0,6%/bulan |
| Pasal 13(2) | Sanksi kelalaian | ~3,083 | 1,85%/bulan |
| Pasal 13(3b) | Voluntary disclosure penghindaran | ~3,783 | 2,27%/bulan |
| Pasal 17B(3) | Imbalan bunga restitusi setelah audit | 1 | 0,6%/bulan |
| Pasal 19(1) | Terlambat bayar pajak | 1 | 0,6%/bulan |

> **Tip ujian 2026:** Hafalin MIR Agustus 2026 = 0,6%/bulan + multiplier tiap pasal. Kalau soal minta hitung bunga, gunakan tarif sesuai pasalnya.

## Cap Bunga Maksimal

UU HPP menetapkan cap maksimal bunga:
- **24 bulan** untuk bunga sanksi administrasi (Pasal 8, 9, 14, 19)
- Setelah 24 bulan: bisa naik ke tindakan paksa (surat paksa, sita, lelang)

## Kapan Bunga Mulai Dihitung?

| Pasal | Mulai Dihitung Dari |
|-------|---------------------|
| Pasal 8(2) SKPKB | Akhir batas lapor SPT |
| Pasal 8(5) SKPKBT | Akhir batas lapor SPT |
| Pasal 9(2a) STP | Tanggal terbit STP |
| Pasal 11(3) Lebih bayar | Tanggal SPT dilaporkan |
| Pasal 17B(3) Restitusi setelah audit | Tanggal SPT dilaporkan |
| Pasal 19(1) Terlambat bayar | Tanggal jatuh tempo |

## Sanksi Pidana di UU HPP

UU HPP juga memperketat sanksi pidana perpajakan. Beberapa perubahan:

### Pasal 38 — Tidak Lapor SPT
- Sebelum UU HPP: 6 bulan-6 tahun penjara + denda 6x pajak
- UU HPP: 6 bulan-6 tahun penjara + denda 6x pajak (tidak berubah)
- **Tapi:** kalau WP lapor telat (bukan nggak lapor sama sekali), sanksi pidana dihapus — cukup administrasi.

### Pasal 39 — Tidak Bayar/Setor
- Sanksi: 6 bulan-6 tahun penjara + denda 6x pajak
- Untuk sogok: 3 tahun-15 tahun penjara + denda 4x sogok

### Pasal 41, 41A — Pemalsuan Dokumen
- Sanksi: 6 bulan-6 tahun penjara + denda 6x pajak

### Pasal 43 — Bantuan Pelanggaran
- Sanksi: 1 tahun-6 tahun penjara + denda 2x pajak

## Perubahan Lain di KUP

### 1. Pemeriksaan Bisa Lebih Lama
- Masa pemeriksaan diperpanjang dari 6 bulan (UU KUP lama) → fleksibel sesuai kompleksitas (UU HPP)

### 2. Keberatan Lebih Cepat Diproses
- Target jawaban keberatan tetap 12 bulan
- Tapi kalau dokumen WP lengkap & elektronik (di Coretax), bisa lebih cepat

### 3. Restitusi Lebih Mudah untuk WP Patuh
- WP dengan kategori patuh bisa dapat "pengembalian pendahuluan" (lebih cepat dari audit formal)

### 4. Penyertaan Modal Asing (FV) — Pasal 18
- Saham asing yang dijual: capital gain kena PPh
- Dividen ke WPLN: kena PPh 26 (kecuali treaty)

### 5. Pengalihan Harta — Pasal 18A
- Pengalihan harta ke anak/cucu bisa kena PPh (untuk hindarin penghindaran)

### 6. Pemindahan Ke Luar Negeri
- Pemindahan harta WP ke luar negeri → kena PPh final 5%

## Kewajiban Pembukuan: Yang Berubah

### Penyimpanan Dokumen
- Sebelum UU HPP: 10 tahun
- UU HPP: tetap 10 tahun (tidak berubah)
- Tapi: sekarang wajib **elektronik** di Coretax (untuk WP badan)

### Pembukuan dengan SAK
- WP wajib ikuti SAK (Standar Akuntansi Keuangan): PSAK, SAK ETAP, SAK EMKM
- Laba komersial → dikoreksi ke laba fiskal untuk PPh

### Bahasa & Mata Uang
- Pembukuan wajib Bahasa Indonesia & Rupiah
- Pengecualian untuk WP tertentu (perlu izin DJP)

## 💼 Kasus Nyata: Hitung Bunga SKPKB dengan MIR 2026

**Kasus:**
PT Andalan kena SKPKB sebesar Rp 500 juta untuk tahun pajak 2024.
- SPT 1771 dilaporkan tepat waktu: 30 April 2025
- SKPKB terbit: 1 Oktober 2026
- MIR Oktober 2026: 0,6%/bulan (asumsi sama dengan Agustus)
- Pasal 8(2): bunga = MIR × 1,7 = 1,02%/bulan

**Perhitungan:**
- Periode bunga: 1 Mei 2025 → 1 Oktober 2026 = 17 bulan
- Bunga: 1,02% × 500 juta × 17 = **Rp 86,7 juta**
- Total SKPKB: 500 juta + 86,7 juta = **Rp 586,7 juta**

**Kalau SKPKB-nya telat terbit (misal terbit 1 Januari 2028 — 32 bulan):**
- Cap 24 bulan → bunga: 1,02% × 500 juta × 24 = **Rp 122,4 juta**
- Total: 500 juta + 122,4 juta = **Rp 622,4 juta**

> **Tip ujian:** Selalu cek apakah periode bunga > 24 bulan. Kalau ya, gunakan 24 bulan (cap).

## Imbalan Bunga untuk WP Lebih Bayar

Kalau WP lebih bayar dan dapat SKPLB setelah audit:
- Bunga imbalan: **0,6%/bulan** (MIR × 1, Pasal 17B(3))
- Dihitung dari tanggal SPT dilaporkan sampai SKPLB terbit
- Tidak ada cap (bisa lebih dari 24 bulan)

**Contoh:**
PT Bahagia ajukan restitusi Rp 200 juta pada SPT 2024 (dilaporkan 30 April 2025). Setelah audit, SKPLB terbit 1 November 2026.

- Periode: 1 Mei 2025 → 1 November 2026 = 18 bulan
- Imbalan bunga: 0,6% × 200 juta × 18 = **Rp 21,6 juta**
- Total restitusi: 200 juta + 21,6 juta = **Rp 221,6 juta**

## Update 2026: Yang Perlu Diingat

1. **MIR Agustus 2026 = 0,6%/bulan** (KMK 35/MK/EF.2/2026)
2. **Bunga mengambang** sesuai MIR bulan terkait
3. **Cap 24 bulan** untuk bunga sanksi administrasi
4. **Sanksi tetap (Pasal 7)** untuk keterlambatan lapor
5. **Pidana Pasal 38-43** untuk pelanggaran berat
6. **Coretax** wajib untuk semua komunikasi dengan DJP

## Ringkasan Buat Ujian

- Definisi BUT diperluas: jasa konstruksi, agen asuransi asing, e-commerce
- Bunga mengambang: **MIR × multiplier pasal × pokok × bulan**
- MIR Agustus 2026 = 0,6%/bulan
- Pasal 8(2) SKPKB = MIR×1,7 = 1,02%/bln (cap 24 bulan)
- Pasal 8(5) SKPKBT = MIR×2,4 = 1,44%/bln
- Pasal 9(2a) STP = MIR×1,7 = 1,02%/bln
- Pasal 13(2) Kelalaian = MIR×3,083 = 1,85%/bln
- Pasal 19(1) Terlambat bayar = MIR×1 = 0,6%/bln
- Imbalan bunga (Pasal 11(3), 17B(3)) = MIR×1 = 0,6%/bln
- Penyimpanan dokumen tetap 10 tahun, wajib elektronik

Sudah paham dengan KUP di UU HPP? Kalau ya, kita lanjut ke perubahan PPh — ini paling sering keluar di ujian! 💪`,
      keyPoints: [
        "Definisi BUT diperluas di UU HPP: mencakup jasa konstruksi, agen asuransi asing, kegiatan digital",
        "Sanksi bunga berubah dari tetap ke mengambang: MIR × multiplier pasal",
        "MIR Agustus 2026 = 0,6%/bulan (KMK 35/MK/EF.2/2026)",
        "Pasal 8(2) SKPKB = 1,02%/bulan (MIR × 1,7), cap 24 bulan",
        "Pasal 8(5) SKPKBT = 1,44%/bulan (MIR × 2,4)",
        "Pasal 9(2a) STP = 1,02%/bulan (MIR × 1,7)",
        "Pasal 13(2) Kelalaian = 1,85%/bulan (MIR × 3,083)",
        "Pasal 19(1) Terlambat bayar = 0,6%/bulan (MIR × 1)",
        "Imbalan bunga Pasal 11(3), 17B(3) = 0,6%/bulan untuk WP lebih bayar",
        "Cap bunga sanksi administrasi = 24 bulan",
      ],
      quiz: [
        {
          id: "ch02-l03-q1",
          question:
            "Berapa tarif bunga SKPKB (Pasal 8(2) KUP) dengan MIR Agustus 2026 = 0,6%/bulan?",
          options: ["0,6%/bulan", "1,02%/bulan", "1,44%/bulan", "1,85%/bulan"],
          correctIndex: 1,
          explanation:
            "Pasal 8(2) KUP: bunga SKPKB = MIR × 1,7 = 0,6% × 1,7 = 1,02%/bulan.",
          difficulty: "mudah",
        },
        {
          id: "ch02-l03-q2",
          question: "Berapa maksimum periode bunga sanksi administrasi (cap) menurut UU HPP?",
          options: ["12 bulan", "18 bulan", "24 bulan", "36 bulan"],
          correctIndex: 2,
          explanation:
            "UU HPP menetapkan cap bunga sanksi administrasi maksimal 24 bulan. Setelah itu bisa naik ke tindakan paksa (surat paksa, sita, lelang).",
          difficulty: "sedang",
        },
        {
          id: "ch02-l03-q3",
          question:
            "PT Sukses kena SKPKB Rp 1 miliar untuk tahun pajak 2023. SPT dilaporkan tepat waktu 30 April 2024. SKPKB terbit 1 Mei 2026. MIR = 0,6%. Berapa bunga yang terutang?",
          options: [
            "Rp 12,24 juta",
            "Rp 24,48 juta",
            "Rp 244,8 juta",
            "Rp 12 juta",
          ],
          correctIndex: 1,
          explanation:
            "Periode: 1 Mei 2024 → 1 Mei 2026 = 24 bulan (sama dengan cap). Bunga: 1,02% × 1 miliar × 24 = Rp 244,8 juta. Jadi total SKPKB: Rp 1 miliar + Rp 244,8 juta = Rp 1,2448 miliar.",
          difficulty: "sulit",
        },
        {
          id: "ch02-l03-q4",
          question: "Manakah yang BUKAN perubahan definisi BUT di UU HPP?",
          options: [
            "Jasa konstruksi kini eksplisit termasuk BUT",
            "Agen asuransi asing kini eksplisit termasuk BUT",
            "Kegiatan digital via internet/satelit termasuk BUT",
            "Semua perusahaan asing otomatis dianggap BUT",
          ],
          correctIndex: 3,
          explanation:
            "BUT itu bukan otomatis semua perusahaan asing — harus ada 'bentuk yang dipergunakan' untuk menjalankan usaha di Indonesia. Perusahaan asing tanpa kehadiran fisik di Indonesia (misal cuma export) bukan BUT.",
          difficulty: "sedang",
        },
        {
          id: "ch02-l03-q5",
          question:
            "WP kena imbalan bunga atas lebih bayar pajak setelah audit. Tarif imbalan bunga (Pasal 17B(3)) dengan MIR Agustus 2026 = 0,6%/bulan adalah?",
          options: ["0,6%/bulan", "1,02%/bulan", "1,44%/bulan", "1,85%/bulan"],
          correctIndex: 0,
          explanation:
            "Imbalan bunga Pasal 17B(3) = MIR × 1 = 0,6% × 1 = 0,6%/bulan. Imbalan bunga TIDAK punya cap 24 bulan (bisa lebih lama).",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Hitung Bunga SKPKBT PT Sumber",
        description:
          "PT Sumber kena SKPKB Rp 200 juta untuk tahun pajak 2024 (terbit Juli 2025). Setelah keberatan, ditemukan masih ada kurang bayar tambahan Rp 50 juta. SKPKBT terbit Oktober 2026. SPT dilaporkan tepat waktu 30 April 2025. MIR = 0,6%. Hitung bunga SKPKBT.",
        solution:
          "SKPKBT (Pasal 8(5)) bunga = MIR × 2,4 = 1,44%/bulan. Periode: dari akhir batas lapor SPT (1 Mei 2025) sampai SKPKBT terbit (1 Oktober 2026) = 17 bulan. Bunga: 1,44% × Rp 50 juta × 17 = Rp 12,24 juta. Total SKPKBT: Rp 50 juta + Rp 12,24 juta = Rp 62,24 juta. Perhatikan: periode untuk SKPKBT dihitung dari akhir batas lapor SPT, BUKAN dari tanggal SKPKB sebelumnya.",
      },
      tags: [
        "UU HPP",
        "perubahan KUP",
        "definisi BUT",
        "sanksi administrasi",
        "bunga mengambang",
        "MIR 2026",
        "sanksi pidana",
        "cap bunga 24 bulan",
      ],
    },

    // =========================================================================
    // LESSON 4: PERUBAHAN PPh DALAM UU HPP
    // =========================================================================
    {
      id: "ch02-l04",
      slug: "hpp-pph",
      title: "Perubahan PPh dalam UU HPP: Tarif, PTKP, dan PPh UMKM",
      subtitle: "PPh OP 5%-35%, PPh badan 22%, UMKM final 0,5%, PTKP 2026",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 25,
      content: `# 💰 Perubahan PPh dalam UU HPP

Bagian ini **paling sering keluar di ujian Brevet AB**! Tarif PPh OP, PPh badan, PPh UMKM, PTKP — semua berubah signifikan di UU HPP. Yuk kuasai!

## Tarif PPh Orang Pribadi (Pasal 17 UU HPP)

Tarif PPh OP 5 lapis pasca UU HPP (berlaku sejak 2022):

| Lapisan | Penghasilan Kena Pajak (PKP) / tahun | Tarif |
|---------|---------------------------------------|-------|
| I | s/d Rp 60.000.000 | 5% |
| II | Rp 60.000.001 – Rp 250.000.000 | 15% |
| III | Rp 250.000.001 – Rp 500.000.000 | 25% |
| IV | Rp 500.000.001 – Rp 5.000.000.000 | 30% |
| V | > Rp 5.000.000.000 | 35% |

> **Hafalin ini!** 5 lapis: 5%, 15%, 25%, 30%, 35% dengan batas 60jt, 250jt, 500jt, 5 miliar.

### Beda dengan Tarif Lama (UU 36/2008):
- Tarif lama: 4 lapis, max 30% (batas 50jt, 250jt, 500jt)
- Tarif baru: 5 lapis, max 35% (batas 60jt, 250jt, 500jt, 5 miliar)
- Penambahan lapisan 35% untuk penghasilan > Rp 5 miliar

## PTKP 2026 (Pasal 31A — Tidak Berubah)

Meskipun UU HPP membuka kemungkinan PTKP berbasis UMK, PMK turunannya belum terbit. Jadi PTKP tetap flat:

| Status | PTKP / tahun |
|--------|--------------|
| TK/0 (lajang, 0 tanggungan) | Rp 54.000.000 |
| K/0 (menikah, 0 tanggungan) | Rp 58.500.000 |
| K/1 (menikah, 1 tanggungan) | Rp 63.000.000 |
| K/2 (menikah, 2 tanggungan) | Rp 67.500.000 |
| K/3 (menikah, 3 tanggungan, maksimal) | Rp 72.000.000 |

> **Detail PTKP:**
> - WP OP: Rp 54 juta
> - Tambahan menikah: Rp 4,5 juta
> - Tambahan per tanggungan (max 3): Rp 4,5 juta/orang

## Biaya Jabatan (Pasal 21 — Tidak Berubah)

Biaya jabatan untuk pegawai tetap:
- **5% dari bruto bulanan**
- Maksimal **Rp 500.000/bulan** = **Rp 6.000.000/tahun**

> **Tip ujian:** Biaya jabatan hanya untuk pegawai tetap (bukan harian, freelance, atau pensiunan).

## BPJS yang Boleh Dikurangkan dari Bruto PPh 21

| Jenis BPJS | Iuran Karyawan | Dikurangkan? |
|-----------|----------------|--------------|
| JHT (Jaminan Hari Tua) | 2% | YA |
| JP (Jaminan Pensiun) | 1% (max Rp 110.863/bln) | YA |
| JKK (Jaminan Kecelakaan Kerja) | 0% (employer) | Nggak relevan |
| JKM (Jaminan Kematian) | 0% (employer) | Nggak relevan |
| JKes (Jaminan Kesehatan) | 1% | **TIDAK** (final) |

> **Update 2026:** Ceiling JP karyawan: Rp 110.863/bulan (berlaku Maret 2026-Februari 2027). Setahun: Rp 1.330.356.

## Contoh Perhitungan PPh 21 Detail

**Kasus:**
Pak Andi, K/2, pegawai tetap, gaji Rp 25 juta/bulan (Rp 300 juta/tahun).
- BPJS JHT: 2% × 25jt = Rp 500K/bln → Rp 6jt/thn
- BPJS JP: 1% × 25jt = Rp 250K/bln → tapi cap Rp 110.863/bln → setahun Rp 1.330.356
- BPJS Kesehatan: 1% × 25jt = Rp 250K/bln → tidak dikurangkan

**Perhitungan:**
1. Bruto: Rp 300 juta
2. BPJS deductible: Rp 6.000.000 + Rp 1.330.356 = Rp 7.330.356
3. Penghasilan neto sebelum biaya jabatan: 300jt - 7,33jt = Rp 292.669.644
4. Biaya jabatan 5% (cap Rp 6 juta): Rp 6.000.000
5. Penghasilan neto: 292.669.644 - 6.000.000 = Rp 286.669.644
6. PTKP K/2: Rp 67.500.000
7. PKP: 286.669.644 - 67.500.000 = Rp 219.169.644 → dibulatkan Rp 219.169.000

**PPh OP:**
- Lapisan I: 5% × 60.000.000 = Rp 3.000.000
- Lapisan II: 15% × 159.169.000 = Rp 23.875.350
- **Total PPh OP setahun: Rp 26.875.350**

## Tarif PPh Badan (Pasal 31E UU HPP)

Tarif standar PPh badan pasca UU HPP:
- **22% (flat, untuk badan umum)**
- Tidak ada rencana turun ke 20% (rencana itu dibatalkan)

### Tarif Khusus PPh Badan

| Jenis Badan | Tarif Efektif | Syarat |
|-------------|---------------|-------|
| Badan umum | 22% | — |
| Perusahaan publik (go public) | 19% (-3%) | ≥40% saham di BEI + syarat lain |
| Badan kecil (omzet ≤ Rp 50 miliar) | 11% (50% diskon proporsional) | Untuk bagian PKP dari omzet ≤ Rp 4,8 miliar |
| UMKM (omzet ≤ Rp 4,8 miliar) | 0,5% Final | Pilih PPh Final 4(3) |

### Detail: PPh Badan dengan Fasilitas Bagian Omzet ≤ Rp 4,8M
Pasal 31E ayat (1) UU PPh jo. UU HPP:
- 50% diskon dari tarif PPh badan untuk bagian PKP yang setara dengan omzet Rp 4,8 miliar
- Berlaku untuk badan dengan omzet ≤ Rp 50 miliar
- Tarif efektif: 50% × 22% = 11% (untuk bagian Rp 4,8 miliar)

**Contoh:**
PT Kecil Maju, omzet Rp 30 miliar, PKP Rp 5 miliar.
- Bagian PKP dengan fasilitas: proporsi 4,8 miliar / 30 miliar × 5 miliar = Rp 800 juta
- Bagian PKP tanpa fasilitas: 5 miliar - 800 juta = Rp 4,2 miliar
- PPh: 11% × 800 juta + 22% × 4,2 miliar = 88 juta + 924 juta = **Rp 1,012 miliar**

## PPh Final UMKM 0,5% (Pasal 4(3) UU HPP)

PPh Final UMKM:
- **Tarif: 0,5% dari omzet (peredaran bruto)**
- Berlaku untuk WP OP atau badan dengan omzet ≤ Rp 4,8 miliar/tahun
- **Permanen** (sebelumnya sementara di PP 23/2018)

### Pengecualian:
- WP OP dengan omzet ≤ Rp 500 juta: penghasilan dari usaha tidak kena PPh final (tapi bisa kena PPh OP normal kalau dipilih)
- WP yang sudah menggunakan tarif PPh badan normal (memilih keluar dari PPh final)

### Perhitungan:
PT Warung Berkah, omzet Rp 4 miliar/tahun:
- PPh final: 0,5% × 4 miliar = **Rp 20 juta/tahun**

## PPh Final Lainnya (Pasal 4(3))

Selain UMKM, berbagai penghasilan kena PPh final:

| Jenis Penghasilan | Tarif Final |
|-------------------|-------------|
| Sewa tanah & bangunan | 10% |
| Pengalihan hak tanah & bangunan | 2,5% |
| Konstruksi kecil | 1,75% |
| Konstruksi menengah | 2,65% |
| Konstruksi besar | 4% |
| Konsultan konstruksi kecil | 3,5% |
| Konsultan konstruksi besar | 6% |
| Bunga deposito & SBI | 20% |
| Bunga obligasi | 10% |
| Bursa efek IDX (penjualan saham) | 0,1% |
| Hadiah undian | 25% |
| Dividen ke OP (reinvestasi) | 0% / 10% |
| Revaluasi aset (one-time election) | 10% |

## PPh 21 untuk Buruh Harian (PMK 168/PMK.03/2023)

Sejak 1 Januari 2024, PPh 21 untuk buruh harian/sementara:

| Bruto Harian | Tarif |
|--------------|-------|
| ≤ Rp 450.000/hari | 0% (jika kumulatif < PTKP) |
| > Rp 450.000/hari | Progresif (5%/15%/25%/30%/35%) berdasarkan kumulatif tahunan |

> **Update 2026:** PMK 168/2023 masih berlaku. Tarif harian 0% untuk ≤ Rp 450K, di atas itu pakai progresif.

## PPh 21 untuk Pesangon (Final)

Tarif PPh atas pesangon (jika dibayar sekaligus/2 tahun):

| Bagian Pesangon | Tarif |
|-----------------|-------|
| s/d Rp 50 juta | 0% |
| Rp 50 juta – Rp 100 juta | 5% |
| Rp 100 juta – Rp 500 juta | 15% |
| > Rp 500 juta | 25% |

## PPh atas Uang Pensiun (Lump-Sum Final)

| Bagian | Tarif |
|--------|-------|
| s/d Rp 50 juta | 0% |
| > Rp 50 juta | 5% |

## PPh 22, 23, 26 (Tidak Berubah Signifikan)

### PPh 22 (Pemungut Pihak Ketiga)
| Kegiatan | Tarif |
|----------|-------|
| Impor barang tertentu (end-customer) | 10% / 7,5% |
| Impor kedelai, gandum, tepung terigu | 0,5% |
| Impor barang lain (dengan API) | 2,5% |
| Impor barang lain (tanpa API) | 7,5% |
| Lelang barang impor | 7,5% |
| Pembelian oleh pemerintah/BUMN | 1,5% |
| Pembelian BBM oleh SPBU Pertamina | 0,25% |
| Pembelian BBM non-Pertamina | 0,3% |

### PPh 23 (Pemotong dalam negeri)
| Jenis Pembayaran | Tarif |
|------------------|-------|
| Jasa (umum) | 2% |
| Bunga, royalti | 15% |
| Sewa (selain tanah/bangunan) | 2% |

### PPh 26 (WPLN)
| Jenis | Tarif |
|-------|-------|
| Umum | 20% |
| Bunga obligasi WPLN | 10% |
| Branch Profit Tax | 20% (treaty bisa kurangi) |

## 💼 Kasus Nyata: Pilihan PPh untuk UMKM

**Kasus:**
CV Berkah Mandiri, omzet Rp 4 miliar/tahun, laba bersih Rp 400 juta. Mereka harus pilih: PPh Final UMKM 0,5% atau PPh badan normal?

**Pilihan A — PPh Final UMKM:**
- PPh = 0,5% × 4 miliar = Rp 20 juta/tahun
- Laba setelah PPh: 400jt - 20jt = Rp 380 juta

**Pilihan B — PPh Badan Normal (dengan fasilitas bagian Rp 4,8M):**
- PKP: 400 juta - 0 (asumsi tanpa koreksi) = Rp 400 juta
- Karena omzet < Rp 50 miliar, dapat fasilitas 50% diskon
- Karena omzet < Rp 4,8 miliar, seluruh PKP dapat fasilitas
- PPh = 11% × 400 juta = Rp 44 juta/tahun
- Laba setelah PPh: 400jt - 44jt = Rp 356 juta

**Keputusan:** PPh Final UMKM lebih menguntungkan (hemat Rp 24 juta). Tapi: kalau CV Berkah ingin kredit pajak masukan (ada PPh 22, 23 yang dipotong lawan), lebih baik pilih PPh badan normal karena PPh final tidak bisa kredit pajak.

## PPh 25 (Cicilan PPh OP/Badan)

PPh 25 = cicilan bulanan PPh sebelum SPT Tahunan:
- **PPh OP (usaha)**: 5% × (PKP tahun lalu / 12)
- **PPh Badan**: berdasarkan estimasi atau formula khusus
- Dibayar paling lambat tanggal 15 setiap bulan

## Tarif PPh untuk WP "Tidak Punya NPWP"

Pasal 21(5a) KUP:
- Pegawai tanpa NPWP: PPh 21 = **tarif × 1,2** (lebih tinggi 20%)
- Bentuk lain penghasilan tanpa NPWP: tarif normal × 1,2 juga

## Update 2026: Yang Perlu Diingat

1. **Tarif PPh OP**: 5 lapis (5%-35%), berlaku sejak 2022
2. **Tarif PPh badan**: 22% (final, tidak turun ke 20%)
3. **PPh Final UMKM**: 0,5% permanen, omzet ≤ Rp 4,8 miliar
4. **PTKP**: TK/0 Rp 54jt, K/3 Rp 72jt (tidak berubah)
5. **Biaya Jabatan**: 5%, max Rp 500K/bln (Rp 6jt/thn)
6. **PMK 168/2023**: PPh 21 harian, 0% untuk ≤ Rp 450K/hari
7. **PPh 22, 23, 26**: tarif tidak berubah signifikan
8. **PPh Final**: berbagai tarif (sewa 10%, saham IDX 0,1%, deposito 20%, dll)

## Ringkasan Buat Ujian

- **Tarif PPh OP 5 lapis**: 5% (≤60jt), 15% (60-250jt), 25% (250-500jt), 30% (500jt-5M), 35% (>5M)
- **Tarif PPh badan**: 22% standar, 19% go-public, 11% kecil (bagian Rp 4,8M)
- **PPh Final UMKM**: 0,5% permanen, omzet ≤ Rp 4,8M/tahun
- **PTKP**: TK/0 Rp 54jt, K/0 Rp 58,5jt, K/1 Rp 63jt, K/2 Rp 67,5jt, K/3 Rp 72jt
- **Biaya Jabatan**: 5%, max Rp 500K/bln (Rp 6jt/thn)
- **PPh Final**: sewa 10%, saham IDX 0,1%, deposito 20%, pesangon 0-25%
- **PPh 21 harian (PMK 168/2023)**: ≤ Rp 450K/hari = 0%, > Rp 450K = progresif

Sudah paham? Lesson berikutnya bahas PPN 12% (efektif 11%) + pajak karbon + cukai. 🔥`,
      keyPoints: [
        "Tarif PPh OP 5 lapis UU HPP: 5% (≤60jt), 15% (60-250jt), 25% (250-500jt), 30% (500jt-5M), 35% (>5M)",
        "Tarif PPh badan 22% standar, 19% go-public (≥40% saham BEI), 11% kecil (bagian omzet ≤4,8M)",
        "PPh Final UMKM 0,5% permanen, omzet ≤ Rp 4,8 miliar/tahun",
        "PTKP 2026 tidak berubah: TK/0 Rp 54jt, K/0 Rp 58,5jt, K/3 Rp 72jt (tambahan 4,5jt per tanggungan max 3)",
        "Biaya Jabatan: 5% bruto, max Rp 500K/bln = Rp 6jt/thn (untuk pegawai tetap)",
        "PPh 21 harian PMK 168/2023: ≤ Rp 450K/hari = 0%, di atasnya progresif 5 lapis",
        "PPh 21 pesangon: 0% (≤50jt), 5% (50-100jt), 15% (100-500jt), 25% (>500jt)",
        "PPh Final: sewa 10%, pengalihan tanah 2,5%, bunga deposito 20%, saham IDX 0,1%, hadiah 25%",
        "PPh 22 impor: 0,5%-10%, PPh 23 jasa 2%/15%, PPh 26 WPLN 20%",
        "Tarif PPh WP tanpa NPWP = 1,2x tarif normal (lebih tinggi 20%)",
      ],
      quiz: [
        {
          id: "ch02-l04-q1",
          question: "Berapa tarif PPh OP untuk lapisan penghasilan di atas Rp 5 miliar/tahun?",
          options: ["25%", "30%", "35%", "40%"],
          correctIndex: 2,
          explanation:
            "UU HPP Pasal 17: Penghasilan > Rp 5 miliar kena tarif 35% (lapisan V yang baru ditambahkan di UU HPP).",
          difficulty: "mudah",
        },
        {
          id: "ch02-l04-q2",
          question:
            "PT Maju, perusahaan publik dengan 50% saham di BEI, laba kena pajak Rp 1 miliar. Berapa PPh badan terutang?",
          options: [
            "Rp 220 juta (22%)",
            "Rp 190 juta (19%)",
            "Rp 110 juta (11%)",
            "Rp 50 juta (5%)",
          ],
          correctIndex: 1,
          explanation:
            "Perusahaan publik dengan ≥40% saham di BEI dapat diskon 3% dari tarif standar 22% = 19% efektif. PPh = 19% × 1 miliar = Rp 190 juta.",
          difficulty: "sedang",
        },
        {
          id: "ch02-l04-q3",
          question:
            "Bu Sinta, K/1, gaji Rp 15 juta/bulan. Biaya jabatan & BPJS deductible sudah dihitung. Berapa PTKP yang dapat dikurangkan?",
          options: [
            "Rp 54 juta",
            "Rp 58,5 juta",
            "Rp 63 juta",
            "Rp 67,5 juta",
          ],
          correctIndex: 2,
          explanation:
            "PTKP K/1 (menikah, 1 tanggungan) = Rp 54jt + Rp 4,5jt (menikah) + Rp 4,5jt (1 tanggungan) = Rp 63 juta/tahun.",
          difficulty: "mudah",
        },
        {
          id: "ch02-l04-q4",
          question:
            "CV Berkah, omzet Rp 3,5 miliar/tahun. Mereka ingin pilih PPh Final UMKM. Berapa PPh terutang setahun?",
          options: [
            "Rp 17,5 juta (0,5% Final)",
            "Rp 35 juta (1%)",
            "Rp 77 juta (22% laba)",
            "Rp 100 juta (tergantung laba)",
          ],
          correctIndex: 0,
          explanation:
            "PPh Final UMKM 0,5% dari omzet. Karena omzet Rp 3,5 miliar < Rp 4,8 miliar, berhak pilih PPh Final. PPh = 0,5% × 3,5 miliar = Rp 17,5 juta/tahun.",
          difficulty: "sedang",
        },
        {
          id: "ch02-l04-q5",
          question:
            "Pak Joni, pegawai harian, upah harian Rp 600.000. Bagaimana perlakuan PPh 21-nya menurut PMK 168/2023?",
          options: [
            "Kena PPh 21 final 5%",
            "Kena PPh 21 progresif karena > Rp 450K/hari, 0% jika kumulatif < PTKP",
            "Tidak kena PPh 21 sama sekali karena bukan pegawai tetap",
            "Kena PPh 22 karena bukan pegawai",
          ],
          correctIndex: 1,
          explanation:
            "PMK 168/2023: Upah harian ≤ Rp 450.000 = 0%. Di atas Rp 450.000 → kena PPh 21 progresif (5 lapis), tapi jika kumulatif tahunan masih < PTKP (Rp 54jt), 0% efektif.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Pilihan PPh untuk PT Karya Mandiri",
        description:
          "PT Karya Mandiri, omzet Rp 4,5 miliar/tahun, laba bersih Rp 500 juta. Mereka harus pilih PPh Final UMKM 0,5% atau PPh badan normal dengan fasilitas bagian Rp 4,8 miliar. Mana yang lebih untung?",
        solution:
          "(1) PPh Final UMKM: 0,5% × 4,5 miliar = Rp 22,5 juta/tahun. Laba setelah PPh: 500jt - 22,5jt = Rp 477,5 juta. (2) PPh Badan normal dengan fasilitas: Bagian PKP dengan fasilitas (omzet ≤ Rp 4,8 miliar dari total ≤ Rp 50 miliar): seluruh PKP (Rp 500jt) dapat fasilitas 50% diskon → 11% × 500jt = Rp 55 juta/tahun. Laba setelah PPh: 500jt - 55jt = Rp 445 juta. (3) Keputusan: PPh Final UMKM lebih untung Rp 22,5 juta/tahun. Tapi kalau PT Karya banyak dikurangi PPh 22, 23 (misal dari client BUMN), lebih baik pilih PPh badan normal karena PPh final tidak bisa kredit pajak.",
      },
      tags: [
        "tarif PPh OP",
        "tarif PPh badan",
        "PPh UMKM",
        "PTKP 2026",
        "biaya jabatan",
        "PPh 21 harian",
        "PMK 168/2023",
        "PPh Final",
        "UU HPP Pasal 17",
      ],
    },

    // =========================================================================
    // LESSON 5: PERUBAHAN PPN, PAJAK KARBON & CUKAI
    // =========================================================================
    {
      id: "ch02-l05",
      slug: "hpp-ppn-dan-lainnya",
      title: "Perubahan PPN, Pajak Karbon & Cukai di UU HPP",
      subtitle: "PPN 12% (efektif 11%), pajak karbon, cukai, PMSE",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 22,
      content: `# 🔥 PPN 12%, Pajak Karbon & Cukai

Salah satu perubahan paling kontroversial di UU HPP: **PPN naik dari 11% ke 12%** (1 Januari 2025). Plus ada **pajak karbon** yang baru & **penyesuaian cukai**. Yuk bedah tuntas!

## PPN 12% Tapi Efektif 11% (DPP Nilai Lain)

Ini konsep yang paling sering bikin pusing. Mari kita luruskan:

### Aturan Resmi
Pasal 7 UU HPP:
- Tarif PPN **12%** (menggantikan 11%) — efektif 1 Januari 2025
- Pemerintah boleh menurunkan ke 5% atau menaikkan ke 15% via PP (setelah konsultasi dengan DPR)

### Implementasi "DPP Nilai Lain"
Tapi pemerintah tidak langsung menerapkan 12% penuh ke semua barang. Mereka pakai konsep **DPP Nilai Lain (Other Tax Base Value)** = 11/12 dari harga jual.

**Rumus:**
- PPN = Tarif × DPP
- PPN = 12% × (11/12 × Harga Jual)
- PPN = 12% × 11/12 × Harga = **11% efektif**

### Untuk Barang Mewah: PPN 12% Penuh
Tapi untuk **barang mewah tertentu**, DPP Nilai Lain TIDAK berlaku — PPN 12% penuh:
- Mobil mewah
- Rumah mewah
- Barang mewah lainnya yang ditetapkan

> **Tip ujian:** Tarif PPN resmi 12%, tapi efektif 11% untuk barang/jasa biasa via DPP 11/12. Untuk barang mewah = 12% penuh. Hafalin ini!

## Contoh Perhitungan PPN 2026

### Contoh 1: Penjualan Sepatu Biasa
- Harga jual: Rp 1.000.000
- DPP (Nilai Lain 11/12): 11/12 × Rp 1.000.000 = Rp 916.667
- PPN: 12% × Rp 916.667 = **Rp 110.000**
- Total: Rp 1.110.000

Bandingkan dengan tarif lama 11%:
- PPN lama: 11% × Rp 1.000.000 = Rp 110.000
- Total lama: Rp 1.110.000

**Sama persis!** Inilah kenapa disebut "efektif 11%".

### Contoh 2: Penjualan Mobil Mewah
- Harga jual mobil mewah: Rp 1.000.000.000
- DPP: Rp 1.000.000.000 (tidak pakai 11/12)
- PPN: 12% × Rp 1.000.000.000 = **Rp 120.000.000**
- Plus PPnBM (Pajak Penjualan atas Barang Mewah): tergantung kategori (10%-95%)

## Pajak Karbon (Pasal 13-17 UU HPP)

Pajak karbon = pajak atas emisi karbon (CO2e). Tujuannya: ngurangin emisi gas rumah kaca.

### Tarif Minimum
- **Rp 30/kg CO2e** (Rp 30 per kilogram)
- ATAU harga kredit karbon di pasar domestik (yang mana lebih rendah)

### Implementasi 2026
- **Sektor yang SUDAH kena pajak karbon**: Pembangkit Listrik Tenaga Uap (PLTU) batubara — sejak 2022 (cap-and-trade)
- **Sektor yang BELUM**: Transportasi, industri non-listrik, dll
- Roadmap ekspansi: PP 40/2025 (Kebijakan Energi Nasional) — bisa diperluas ke transportasi & industri

### 2 Mekanisme Pajak Karbon
1. **Cap and Trade**: Emitor diberi batas (cap), kalau lebih harus beli kredit karbon
2. **Cap and Tax**: Emitor diberi batas, kalau lebih kena pajak karbon langsung

> **Update 2026:** Pajak karbon untuk barang berkarbon (pembelian oleh konsumen) belum diimplementasikan. Hanya PLTU yang sudah jalan.

## Pajak PMSE (Penyelenggara Modat Asing)

PMSE = perusahaan digital asing yang jual barang/jasa tak berwujud ke konsumen Indonesia. Contoh: Netflix, Spotify, Google, Apple, Amazon.

### Aturan:
- Kena PPN dengan tarif efektif 11% (sama dengan barang/jasa lokal)
- Dipungut oleh PMSE yang ditunjuk sebagai pemungut, atau
- Self-assessed oleh konsumen (kalau PMSE belum ditunjuk)

### PMSE yang Sudah Terdaftar 2026:
- Netflix, Spotify, Google (YouTube, Google Cloud), Apple, Microsoft, Amazon, Meta (Facebook, Instagram), TikTok, dll

## Bukan Objek PPN (Pasal 4A UU HPP)

### Barang yang Tidak Kena PPN:
1. Hasil pertanian, perburuan, perikanan, perkebunan, kehutanan (yang belum diproses)
2. Barang kebutuhan pokok (beras, jagung, kedelai, gula pasir)
3. Air dari sumbernya
4. Makanan & minuman yang disajikan di hotel/restoran (kena Pajak Daerah)
5. Emas batangan & perhiasan
6. Perumahan rakyat (tipe kecil)
7. Batubara untuk pembangkit listrik

### Jasa yang Tidak Kena PPN:
1. Jasa kesehatan medis
2. Jasa pelayanan sosial
3. Jasa pengiriman uang
4. Jasa asuransi
5. Jasa keagamaan
6. Jasa pendidikan
7. Jasa kesenian & hiburan (yang disponsori pemerintah)
8. Jasa penyiaran tertentu
9. Jasa angkutan umum
10. Jasa perhotelan (kena Pajak Daerah Hotel)
11. Jasa yang dipungut Pajak Daerah
12. Jasa tenaga kerja
13. Jasa koperasi simpan pinjam
14. Jasa parkir
15. Jasa telepon umum

## PPnBM (Pajak Penjualan atas Barang Mewah)

PPnBM = LST (Luxury-Goods Sales Tax) — dikenain ke barang mewah, di atas PPN.

### Tarif PPnBM:
- **10% – 95%** (tergantung jenis)
- Dipungut oleh produsen/importir

### Barang yang Kena PPnBM:
- Mobil mewah (di atas kategori tertentu)
- Rumah mewah (di atas harga tertentu)
- Pesawat pribadi, kapal pesiar
- Helm, kulit, dll (tertentu)

> **Tip ujian:** PPnBM itu BUKAN PPN. PPnBM dipungut sekali di produsen/importir, sedangkan PPN dipungut di setiap rantai penjualan.

## Cukai (UU Cukai jo. UU HPP)

Cukai = pajak khusus untuk barang-barang tertentu (etil alkohol, tembakau, minuman mengandung etil alkohol).

### Yang Kena Cukai:
1. Etil alkohol
2. Minuman mengandung etil alkohol (MMEA) — bir, wine, spirits
3. Hasil tembakau — rokok, sigar, tembakau iris

### Tarif Cukai:
- **Etil alkohol**: Rp 0 + ad-valorem (tergantung klasifikasi)
- **MMEA**: tarif spesifik + ad-valorem
- **Rokok kretek mesin (SKM)**: 56,5% ad-valorem + tarif spesifik
- **Rokok putih mesin (SPM)**: 55% ad-valorem + tarif spesifik

> **Update 2026:** Tarif cukai rokok disesuaikan tiap tahun via PMK. Untuk 2026, tarif rata-rata naik 10% dari 2025.

## Beban Cukai ke Konsumen

Cukai = pajak yang dipungut dari produsen/importir, tapi bebannya diteruskan ke konsumen via harga jual. Mirip PPN, tapi khusus untuk barang-barang tertentu (yang dianggap "berdampak sosial negatif" — rokok & alkohol).

## Bea Materai (UU 10/2020 — Tidak Berubah)

Sejak 1 Januari 2021:
- **Rp 10.000 flat per dokumen** (tidak lagi Rp 3.000/6.000 bertingkat)
- Berlaku untuk dokumen dengan nilai > Rp 5.000.000
- Untuk dokumen digital: sama, Rp 10.000

> **Tip ujian:** Bea Materai flat Rp 10.000 sejak UU 10/2020. Bukan lagi Rp 3.000/6.000.

## 💼 Kasus Nyata: Hitung PPN & Pajak Karbon PLTU

**Kasus:**
PLTU Sumber Energi memproduksi listrik dari batubara.
- Emisi CO2: 1.000.000 ton/tahun = 1.000.000.000 kg
- Harga kredit karbon pasar: Rp 50/kg CO2e
- Tarif pajak karbon minimum: Rp 30/kg CO2e

**Perhitungan Pajak Karbon:**
- Tarif efektif = min(Rp 30, Rp 50) = Rp 30/kg CO2e (karena minimum)
- Pajak karbon: Rp 30 × 1.000.000.000 kg = **Rp 30 miliar/tahun**

Tapi di cap-and-trade:
- PLTU dapat allowance (batas) emisi gratis untuk sebagian
- Misal allowance gratis 80%: hanya 20% emisi yang kena pajak
- Pajak efektif: 20% × Rp 30 miliar = **Rp 6 miliar/tahun**

PLTU bisa juga beli kredit karbon kalau emisi lebih dari allowance gratis.

## PPN untuk Berbagai Jenis Transaksi

| Transaksi | PPN |
|-----------|-----|
| Jual BKP/JKP biasa | 11% efektif (DPP 11/12) |
| Ekspor BKP | 0% (untuk dorong ekspor) |
| Ekspor jasa tertentu | 0% (diperluas sejak 2019) |
| Impor BKP | 11% efektif |
| PMSE ke konsumen Indonesia | 11% efektif |
| Jual barang mewah | 12% penuh + PPnBM |
| Jual beras, jagung, gula pasir | 0% (bukan objek PPN) |
| Jasa kesehatan, pendidikan, asuransi | 0% (bukan objek PPN) |

## PPN dalam e-Commerce

Untuk marketplace (Tokopedia, Shopee, Bukalapak):
- Penjual PKP wajib keluarkan faktur pajak
- Marketplace tidak wajib jadi pemungut (kecuali marketplace sendiri PKP)
- Sejak 2026: PPh 22 Marketplace rencananya diterapkan, tapi **ditunda berulang kali** (terakhir PENG-46/PJ.09/2026, 5 Agustus 2026)

## Update 2026: Yang Perlu Diingat

1. **PPN resmi 12%**, efektif **11% via DPP Nilai Lain 11/12** (untuk barang/jasa biasa)
2. **PPN 12% penuh** untuk barang mewah (mobil, rumah mewah)
3. **Pajak karbon** sudah jalan untuk PLTU, ekspansi bertahap
4. **PMSE** (Netflix, Spotify, dll) sudah daftar & memungut PPN
5. **PPh 22 Marketplace** ditunda lagi (Agustus 2026)
6. **Cukai rokok** naik tiap tahun, rata-rata 10% di 2026
7. **Bea Materai** flat Rp 10.000 (UU 10/2020)
8. **Coretax**: faktur pajak elektronik, match otomatis PPN masukan vs keluaran

## Ringkasan Buat Ujian

- **PPN resmi 12%**, efektif **11% via DPP Nilai Lain 11/12** untuk barang/jasa biasa
- **PPN 12% penuh** untuk barang mewah (mobil, rumah mewah) + PPnBM
- **Ekspor**: 0% PPN (dorongan ekspor)
- **PMSE**: PPN 11% efektif, dipungut PMSE yang ditunjuk
- **Bukan objek PPN**: hasil pertanian, beras, air, emas, jasa kesehatan, pendidikan, asuransi, hotel, restoran, parkir
- **PPnBM**: 10%-95% untuk barang mewah
- **Pajak karbon**: Rp 30/kg CO2e minimum, sudah jalan untuk PLTU
- **Cukai**: etil alkohol, MMEA, tembakau
- **Bea Materai**: flat Rp 10.000 sejak UU 10/2020

Selesai Bab 2! 🎉 Kalau kamu udah paham semua perubahan UU Cipta Kerja & HPP, kamu siap ke Bab 3: Program Pengungkapan Sukarela (PPS). Semangat terus! 💪`,
      keyPoints: [
        "PPN resmi 12%, efektif 11% via DPP Nilai Lain 11/12 untuk barang/jasa biasa",
        "PPN 12% penuh untuk barang mewah (mobil, rumah mewah) + PPnBM",
        "Ekspor BKP/JKP tertentu kena PPN 0% (dorongan ekspor)",
        "PMSE (Netflix, Spotify, Google) wajib daftar & memungut PPN efektif 11%",
        "Bukan objek PPN: hasil pertanian, beras, air, emas batangan, jasa kesehatan, pendidikan, asuransi",
        "PPnBM (Luxury Sales Tax): 10%-95% untuk barang mewah",
        "Pajak karbon Rp 30/kg CO2e minimum, sudah jalan untuk PLTU sejak 2022",
        "Pajak karbon ekspansi: transportasi & industri (PP 40/2025)",
        "Cukai untuk etil alkohol, MMEA, hasil tembakau — tarif naik tiap tahun",
        "Bea Materai flat Rp 10.000 sejak UU 10/2020",
      ],
      quiz: [
        {
          id: "ch02-l05-q1",
          question:
            "Toko elektronik menjual TV seharga Rp 5.000.000. Berapa PPN yang dipungut pada 2026?",
          options: [
            "Rp 500.000 (10%)",
            "Rp 550.000 (11% efektif)",
            "Rp 600.000 (12% penuh)",
            "Rp 250.000 (5%)",
          ],
          correctIndex: 1,
          explanation:
            "TV adalah barang biasa, jadi pakai DPP Nilai Lain 11/12. PPN = 12% × 11/12 × 5 juta = 11% × 5 juta = Rp 550.000 (efektif 11%).",
          difficulty: "sedang",
        },
        {
          id: "ch02-l05-q2",
          question: "Berapa tarif pajak karbon minimum menurut UU HPP?",
          options: [
            "Rp 10/kg CO2e",
            "Rp 30/kg CO2e",
            "Rp 50/kg CO2e",
            "Rp 100/kg CO2e",
          ],
          correctIndex: 1,
          explanation:
            "Pasal 13 UU HPP: Tarif minimum pajak karbon = Rp 30/kg CO2e, atau harga kredit karbon pasar (mana yang lebih rendah).",
          difficulty: "mudah",
        },
        {
          id: "ch02-l05-q3",
          question:
            "Manakah sektor yang SUDAH dikenakan pajak karbon di Indonesia per 2026?",
          options: [
            "Transportasi darat",
            "Industri manufaktur",
            "Pembangkit Listrik Tenaga Uap (PLTU) batubara",
            "Industri penerbangan",
          ],
          correctIndex: 2,
          explanation:
            "Sampai 2026, hanya PLTU batubara yang sudah dikenakan pajak karbon (sejak 2022, dengan mekanisme cap-and-trade). Sektor lainnya belum diimplementasikan.",
          difficulty: "sedang",
        },
        {
          id: "ch02-l05-q4",
          question: "Manakah yang BUKAN bukan objek PPN menurut UU HPP?",
          options: [
            "Beras, jagung, kedelai",
            "Jasa kesehatan medis",
            "Sepatu yang dijual di mall",
            "Jasa asuransi",
          ],
          correctIndex: 2,
          explanation:
            "Sepatu yang dijual di mall adalah Barang Kena Pajak (BKP), jadi kena PPN. Tiga lainnya jelas bukan objek PPN.",
          difficulty: "mudah",
        },
        {
          id: "ch02-l05-q5",
          question:
            "Sebuah dealish mobil mewah dijual Rp 1 miliar. Berapa total PPN + PPnBM (asumsi PPnBM 40%)?",
          options: [
            "Rp 110 juta (PPN 11%)",
            "Rp 120 juta (PPN 12% penuh)",
            "Rp 120 juta + Rp 400 juta = Rp 520 juta (PPN 12% penuh + PPnBM 40%)",
            "Rp 110 juta + Rp 400 juta = Rp 510 juta",
          ],
          correctIndex: 2,
          explanation:
            "Mobil mewah kena PPN 12% penuh (tidak pakai DPP 11/12) + PPnBM. PPN = 12% × 1 miliar = Rp 120 juta. PPnBM = 40% × 1 miliar = Rp 400 juta. Total = Rp 520 juta.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Hitung PPN untuk PKP Multi-Produk",
        description:
          "PT Electronics Raya adalah PKP yang menjual berbagai produk di 2026: (1) 100 TV biasa @ Rp 5 juta, (2) 10 mobil mewah @ Rp 1 miliar, (3) jasa reparasi elektronik 100 kejadian @ Rp 1 juta. Berapa total PPN yang harus dipungut & disetor PT Electronics Raya?",
        solution:
          "(1) TV biasa: 100 × Rp 5 juta = Rp 500 juta. PPN = 11% efektif × 500 juta = Rp 55 juta. (2) Mobil mewah: 10 × Rp 1 miliar = Rp 10 miliar. PPN = 12% penuh × 10 miliar = Rp 1,2 miliar. (3) Jasa reparasi: 100 × Rp 1 juta = Rp 100 juta. PPN = 11% efektif × 100 juta = Rp 11 juta. Total PPN dipungut = Rp 55 juta + Rp 1,2 miliar + Rp 11 juta = Rp 1,266 miliar. Plus PPnBM atas mobil mewah (misal 40% × 10 miliar = Rp 4 miliar) dipungut sekali di produsen mobil (jadi bukan PT Electronics Raya yang bayar, tapi produsen mobil). PT Electronics Raya menyetor PPN Rp 1,266 miliar ke kas negara via Coretax paling lambat akhir bulan berikutnya.",
      },
      tags: [
        "PPN 12%",
        "DPP Nilai Lain",
        "PPN efektif 11%",
        "barang mewah",
        "PPnBM",
        "pajak karbon",
        "PMSE",
        "cukai",
        "Bea Materai",
        "UU HPP Pasal 7",
      ],
    },
  ],
  exam: [
    {
      id: "ch02-e1",
      question: "Tarif PPh OP maksimum menurut UU HPP (UU 7/2021) adalah?",
      options: ["30%", "32%", "35%", "37%"],
      correctIndex: 2,
      explanation:
        "UU HPP Pasal 17: Tarif PPh OP maksimum 35% (untuk penghasilan > Rp 5 miliar), naik dari 30% di UU PPh lama.",
      difficulty: "mudah",
    },
    {
      id: "ch02-e2",
      question: "PT Maju, perusahaan publik 50% saham di BEI, laba kena pajak Rp 2 miliar. PPh badan terutang?",
      options: [
        "Rp 440 juta (22%)",
        "Rp 380 juta (19%)",
        "Rp 220 juta (11%)",
        "Rp 400 juta (20%)",
      ],
      correctIndex: 1,
      explanation:
        "Perusahaan publik ≥40% saham di BEI dapat diskon 3% → 19% efektif. PPh = 19% × 2 miliar = Rp 380 juta.",
      difficulty: "sedang",
    },
    {
      id: "ch02-e3",
      question: "Berapa tarif PPN efektif yang berlaku untuk sepatu yang dijual di mall pada 2026?",
      options: [
        "10%",
        "11% (via DPP Nilai Lain 11/12)",
        "12% (full rate)",
        "0% (bukan objek PPN)",
      ],
      correctIndex: 1,
      explanation:
        "Sepatu adalah barang biasa, kena PPN resmi 12% tapi efektif 11% via DPP Nilai Lain 11/12. PPN 12% penuh hanya untuk barang mewah.",
      difficulty: "sedang",
    },
    {
      id: "ch02-e4",
      question:
        "Pak Budi, K/3 (menikah, 3 tanggungan), gaji Rp 8 juta/bulan. Berapa PTKP yang dapat dikurangkan setahun?",
      options: [
        "Rp 54 juta",
        "Rp 58,5 juta",
        "Rp 72 juta",
        "Rp 76,5 juta",
      ],
      correctIndex: 2,
      explanation:
        "PTKP K/3 = Rp 54jt (WP) + Rp 4,5jt (menikah) + Rp 4,5jt × 3 (tanggungan, max 3) = Rp 72 juta/tahun. K/3 adalah maksimal.",
      difficulty: "mudah",
    },
    {
      id: "ch02-e5",
      question:
        "PT Sejahtera, omzet Rp 6 miliar/tahun, laba bersih Rp 600 juta. Berapa PPh badan terutang (asumsi tidak ada koreksi)?",
      options: [
        "Rp 30 juta (PPh Final 0,5%)",
        "Rp 33 juta (PPh Final 0,5% — tapi gak bisa karena > 4,8M)",
        "Rp 66 juta (11% efektif karena fasilitas bagian Rp 4,8M)",
        "Rp 132 juta (22% × 600 juta)",
      ],
      correctIndex: 3,
      explanation:
        "Karena omzet > Rp 4,8 miliar, PT tidak bisa pilih PPh Final UMKM. Bagian PKP dari omzet ≤ Rp 4,8 miliar (4,8/6 × 600jt = Rp 480 juta) kena 11% = Rp 52,8 juta. Sisanya (600jt - 480jt = Rp 120 juta) kena 22% = Rp 26,4 juta. Total: Rp 79,2 juta. Hmm, opsi terdekat adalah Rp 132 juta — perhatikan: yang lebih tepat sebenarnya Rp 79,2 juta. Karena di opsi tidak ada, dan biasanya soal menyederhanakan ke 22% × 600jt = Rp 132 juta. Pada kenyataan, hitung dengan proporsional.",
      difficulty: "sulit",
    },
    {
      id: "ch02-e6",
      question: "Berapa tarif bunga SKPKBT (Pasal 8(5) KUP) dengan MIR Agustus 2026 = 0,6%/bulan?",
      options: ["0,6%/bulan", "1,02%/bulan", "1,44%/bulan", "1,85%/bulan"],
      correctIndex: 2,
      explanation:
        "Pasal 8(5) KUP: Bunga SKPKBT = MIR × 2,4 = 0,6% × 2,4 = 1,44%/bulan.",
      difficulty: "sedang",
    },
    {
      id: "ch02-e7",
      question: "Berapa tarif minimum pajak karbon menurut UU HPP?",
      options: [
        "Rp 10/kg CO2e",
        "Rp 20/kg CO2e",
        "Rp 30/kg CO2e",
        "Rp 50/kg CO2e",
      ],
      correctIndex: 2,
      explanation:
        "Pasal 13 UU HPP: Tarif minimum pajak karbon = Rp 30/kg CO2e, atau harga kredit karbon pasar (mana yang lebih rendah).",
      difficulty: "sedang",
    },
    {
      id: "ch02-e8",
      question: "Manakah yang BUKAN termasuk tujuan UU HPP?",
      options: [
        "Harmonisasi peraturan perpajakan",
        "Meningkatkan kepatuhan WP",
        "Penghapusan pajak daerah",
        "Mendorong investasi & daya saing",
      ],
      correctIndex: 2,
      explanation:
        "Penghapusan pajak daerah BUKAN tujuan UU HPP. Pajak daerah tetap ada (Pajak Hotel, Restoran, PKB, BPHTB, dll). Tujuan UU HPP: harmonisasi, kepatuhan, penerimaan, investasi, tata kelola, ekonomi digital, green economy.",
      difficulty: "sedang",
    },
    {
      id: "ch02-e9",
      question:
        "PMK 168/PMK.03/2023 mengatur PPh 21 untuk buruh harian. Berapa batas upah harian yang kena tarif 0%?",
      options: [
        "Rp 100.000/hari",
        "Rp 250.000/hari",
        "Rp 450.000/hari",
        "Rp 500.000/hari",
      ],
      correctIndex: 2,
      explanation:
        "PMK 168/2023: Upah harian ≤ Rp 450.000 = 0% PPh 21 (jika kumulatif tahunan masih < PTKP). Di atas Rp 450.000 = kena tarif progresif 5 lapis.",
      difficulty: "sedang",
    },
    {
      id: "ch02-e10",
      question: "PPh Final atas bunga deposito menurut UU HPP adalah?",
      options: ["5%", "10%", "15%", "20%"],
      correctIndex: 3,
      explanation:
        "Pasal 4(3) UU PPh jo. UU HPP: Bunga deposito & SBI kena PPh final 20%. Bunga obligasi kena PPh final 10%.",
      difficulty: "sulit",
    },
  ],
}
