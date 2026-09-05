import type { Chapter } from "../types"

// ============================================================================
// BAB 9: PBB & BPHTB
// ============================================================================

export const chapter09: Chapter = {
  id: "ch09",
  slug: "pbb-bphtb",
  number: 9,
  title: "PBB & BPHTB",
  shortTitle: "PBB/BPHTB",
  description:
    "Pajak Bumi & Bangunan (PBB P2/P3) + Bea Perolehan Hak atas Tanah & Bangunan (BPHTB). Aturan terbaru UU HKPD 1/2022, contoh kasus hitung NJOP, NJOPTKP, dan BPHTB untuk jual beli tanah.",
  icon: "Home",
  color: "lime",
  difficulty: "menengah",
  estimatedMinutes: 180,
  objectives: [
    "Paham konsep dasar PBB P2 dan P3, dasar hukum UU HKPD 1/2022",
    "Bisa hitung PBB tahunan dari NJOP, NJOPTKP, dan tarif 0.5%",
    "Menguasai perhitungan BPHTB dengan NPOPTKP Rp 80jt (umum) / Rp 300jt (warisan)",
    "Ngerti perbedaan PBB P2 (perdesaan) vs PBB P3 (perkebunan/perhutanan)",
    "Bisa analisis kasus lengkap: NJOP, PBB, dan BPHTB saat beli tanah",
  ],
  lessons: [
    {
      id: "ch09-l01",
      slug: "pengertian-pbb-2026",
      title: "Pajak Bumi & Bangunan (PBB) 2026 — UU HKPD 1/2022",
      subtitle:
        "Dasar hukum UU HKPD, PBB P2 vs P3, NJOP, NJOPTKP min Rp 10jt, tarif max 0.5%",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 18,
      content: `# Pajak Bumi & Bangunan (PBB) 2026 — Sekarang Urusan Daerah 🏠

Yuk, kita bahas PBB. Buat yang belum tau, sejak 2010 **PBB itu udah bukan pajak pusat lagi**, tapi udah dialihkan jadi **pajak daerah**. Lebih tepatnya jadi **PBB-P2** (Pajak Bumi dan Bangunan Perdesaan dan Perkotaan). Lalu ada juga **PBB-P3** untuk perkebunan, perhutanan, dan pertambangan.

Sejak **UU HKPD 1/2022** (Hubungan Keuangan Pusat-Daerah), aturan PBB jadi lebih jelas. Yuk kita bedah!

## Dasar Hukum PBB 2026

| Tahun | Aturan | Status |
|-------|--------|--------|
| 1985 | UU 12/1985 | PBB sebagai pajak pusat |
| 2010 | UU 28/2009 | PBB dialihkan ke daerah (PBB-P2) |
| 2014 | UU 23/2014 | Pemda lebih diberi kewenangan |
| **2022** | **UU 1/2022 (UU HKPD)** | **Aturan terkini 2026** |

UU HKPD 1/2022 itu aturan pajak daerah terbaru. PBB di aturan ini jadi salah satu jenis pajak kabupaten/kota, dengan tarif maksimal 0,5%.

## PBB-P2 vs PBB-P3

| Jenis | Kepanjangan | Objek | Pemungut |
|-------|-------------|-------|----------|
| PBB-P2 | PBB Perdesaan dan Perkotaan | Tanah & bangunan di wilayah desa/kota | Pemda Kabupaten/Kota |
| PBB-P3 | PBB Perkebunan, Perhutanan, Pertambangan | Tanah perkebunan, hutan, tambang | Pemerintah Pusat (masih) |

> **Kunci:** PBB-P2 urusan kabupaten/kota. PBB-P3 (perkebunan/perhutanan/pertambangan) masih urusan pusat karena skalanya besar dan strategis.

## Konsep Dasar PBB

PBB itu pajak atas **bumi (tanah)** dan **bangunan**. Subjeknya: orang/badan yang punya, mendapat manfaat, atau menguasai tanah/bangunan.

### Komponen PBB:

1. **NJOP** (Nilai Jual Objek Pajak) — nilai jual rata-rata yang didapat dari transaksi jual beli yang terjadi secara wajar.
2. **NJOPTKP** (NJOP Tidak Kena Pajak) — bagian NJOP yang tidak kena pajak (minimal Rp 10jt).
3. **NJOPKP** (NJOP Kena Pajak) = NJOP − NJOPTKP.
4. **Tarif PBB** = maksimal 0,5% × NJOPKP (sesuai PERDA masing-masing daerah).

### Rumus hitung PBB:

\`\`\`
NJOPKP = NJOP − NJOPTKP
PBB Terutang = Tarif × NJOPKP
\`\`\`

> **Tarif PBB:** Maksimal 0,5%. Tapi tiap daerah beda. Jakarta pakai 0,1% (turun dari 0,2% tahun lalu). Surabaya 0,2%. Bandung 0,15%. Cek PERDA masing-masing kota ya!

## NJOP — Nilai Jual Objek Pajak

NJOP itu nilai jual rata-rata tanah/bangunan di suatu wilayah. Ditentukan setahun sekali oleh pemda melalui **Peraturan Kepala Daerah (PERDA)**. NJOP bisa kamu cek di SPPT (Surat Pemberitahuan Pajak Terutang) yang dikirim setahun sekali ke wajib pajak.

### Klasifikasi NJOP:
- **NJOP Bumi** — nilai jual tanah per m².
- **NJOP Bangunan** — nilai jual bangunan per m².

> **Update 2026:** NJOP ditetapkan setahun sekali, biasanya efektif 1 Januari. Coretax Daerah (sistem pajak daerah terintegrasi, meski terpisah dari Coretax DJP) sudah online untuk cek NJOP di banyak kota besar.

## NJOPTKP — Nilai NJOP Tidak Kena Pajak

NJOPTKP adalah bagian NJOP yang **tidak kena pajak**. Tujuannya: melindungi warga kelas bawah yang punya tanah/bangunan kecil. Minimal NJOPTKP = **Rp 10.000.000** per objek pajak.

> **Aturan:** Setiap daerah boleh menetapkan NJOPTKP lebih tinggi dari Rp 10jt (misal Rp 15jt untuk tanah kecil). Tapi tidak boleh lebih rendah dari Rp 10jt.

## Contoh Kasus Hitung PBB

Pak Budi punya rumah di Jakarta Selatan:
- NJOP Bumi: Rp 5.000.000/m², luas 100 m² → NJOP Bumi = Rp 500.000.000
- NJOP Bangunan: Rp 3.000.000/m², luas 100 m² → NJOP Bangunan = Rp 300.000.000
- **Total NJOP = Rp 800.000.000**
- NJOPTKP (DKI Jakarta) = Rp 10.000.000
- NJOPKP = 800jt − 10jt = Rp 790.000.000
- Tarif PBB DKI = 0,1%
- **PBB Terutang = 0,1% × 790.000.000 = Rp 790.000/tahun**

### Jurnal PBB (untuk perusahaan):

| Akun | Debit | Kredit |
|------|------|--------|
| Beban PBB | 790.000 | |
| Kas/Bank | | 790.000 |

## Tabel Tarif PBB Beberapa Kota Besar (2026)

| Kota | Tarif PBB-P2 | NJOPTKP | Keterangan |
|------|--------------|---------|------------|
| DKI Jakarta | 0,1% | Rp 10jt | Turun dari 0,2% (sejak 2025) |
| Surabaya | 0,2% | Rp 10jt | Stabil |
| Bandung | 0,15% | Rp 12jt | Naik dari 0,1% |
| Semarang | 0,12% | Rp 10jt | — |
| Medan | 0,18% | Rp 10jt | — |
| Bekasi | 0,2% | Rp 10jt | — |
| Bogor | 0,2% | Rp 10jt | — |

> **Catatan:** Tarif bisa beda antar kota, tergantung PERDA masing-masing. Selalu cek PERDA terbaru!

## Klasifikasi Tanah & Bangunan

Berdasarkan penggunaannya, NJOP diklasifikasikan:

| Klasifikasi | Contoh | Tarif PBB |
|-------------|-------|-----------|
| Perumahan rakyat | Rumah sederhana, RSS | 0,01% – 0,1% |
| Perumahan menengah | Rumah type 36-70 | 0,1% – 0,2% |
| Perumahan mewah | Rumah type 200+ | 0,2% – 0,3% |
| Apartemen | Apartemen, kondominium | 0,1% – 0,3% |
| Komersial | Toko, kantor, ruko | 0,2% – 0,3% |
| Industri | Pabrik, gudang | 0,2% – 0,3% |

## Kasus: Rumah Mewah di Pondok Indah

Pak Hartono punya rumah di Pondok Indah, Jakarta Selatan:
- NJOP Bumi: Rp 20.000.000/m², luas 500 m² → Rp 10.000.000.000
- NJOP Bangunan: Rp 8.000.000/m², luas 400 m² → Rp 3.200.000.000
- Total NJOP = Rp 13.200.000.000
- NJOPTKP = Rp 10.000.000
- NJOPKP = Rp 13.190.000.000
- Tarif PBB DKI = 0,1%
- **PBB Terutang = 0,1% × 13.190.000.000 = Rp 13.190.000/tahun**

Wow, Rp 13jt/tahun cuma buat PBB rumah mewah. Itu baru PBB, belum termasuk PPh Final 2,5% kalau dijual, dan BPHTB kalau baru beli.

## SPT Tahunan PBB & SPPT

Setiap tahun, wajib pajak PBB nerima **SPPT** (Surat Pemberitahuan Pajak Terutang) yang isinya:

1. Identitas Wajib Pajak (nama, alamat, NOP)
2. Detail objek pajak (bumi, bangunan, klasifikasi)
3. NJOP bumi & bangunan
4. NJOPTKP, NJOPKP
5. Tarif & PBB terutang
6. Tanggal jatuh tempo (biasanya 30 September atau 31 Agustus)

> **Jatuh tempo PBB:** Biasanya 30 September setiap tahun (untuk PBB yang terutang tahun berjalan). Bisa dibayar di kantor pos, bank, atau online via Coretax Daerah.

## Sanksi 2026 Telat Bayar PBB

| Pelanggaran | Sanksi |
|-------------|--------|
| Telat bayar PBB | Bunga 2%/bln (maks 24 bln, sesuai PERDA) |
| Tidak daftar objek PBB baru | Denda sesuai PERDA |
| Salah lapor NJOP | Koreksi + denda |

> **Catatan:** Sanksi PBB diatur PERDA masing-masing, bukan MIR. Tapi umumnya 2%/bln, lebih tinggi dari MIR PPh (0,6%/bln).

## Update 2026 di Era Coretax Daerah

- **Online payment** sudah marak di kota besar. Bayar via OVO, GoPay, m-banking, dll.
- **NJOP online**: bisa cek NJOP lewat website Bapenda kota masing-masing.
- **Coretax Daerah** (terpisah dari Coretax DJP): sistem integrasi SPT-SPT pajak daerah (PBB, BPHTB, PKB, Pajak Hotel, dll). Tiap daerah punya sendiri, belum terpusat seperti Coretax DJP.
- **Pemberitahuan SPPT elektronik**: banyak daerah udah nggak kirim SPPT fisik, diganti email/notifikasi aplikasi.

## Beda PBB P2 vs P3 (Sering Keluar di Ujian!)

| Aspek | PBB-P2 | PBB-P3 |
|-------|--------|--------|
| Kepanjangan | Perdesaan & Perkotaan | Perkebunan, Perhutanan, Pertambangan |
| Objek | Tanah + bangunan di desa/kota | Tanah perkebunan, hutan, tambang |
| Pemungut | Pemda Kabupaten/Kota | Pemerintah Pusat (DJP) |
| Tarif | Maks 0,5% (PERDA) | Khusus, sesuai peraturan |
| SPT | SPPT (Pemda) | SPT Tahunan PBB-P3 (DJP) |
| Sejak | 2010 (UU 28/2009) | 2010 (UU 28/2009) |

## Sejarah PBB Singkat

\`\`\`
[1985-2009] PBB = Pajak Pusat (UU 12/1985)
        ↓
[2010-2021] PBB dialihkan ke daerah jadi PBB-P2 (UU 28/2009)
        ↓
[2022-sekarang] UU HKPD 1/2022 → aturan terkini
                 - Tarif max 0,5% (PERDA)
                 - NJOPTKP min Rp 10jt
                 - PBB-P2 di kabupaten/kota
                 - PBB-P3 tetap di pusat (perkebunan/perhutanan/pertambangan)
\`\`\`

## Hal yang Sering Bikin Salah

1. **Anggap PBB masih pajak pusat**: padahal sejak 2010 udah jadi pajak daerah (PBB-P2).
2. **Lupa NJOPTKP**: NJOP langsung dikali tarif. Harus NJOP − NJOPTKP dulu = NJOPKP, baru dikali tarif.
3. **Salah tarif**: Pakai 0,5% (maksimal), padahal PERDA masing-masing daerah bisa lebih rendah (misal DKI 0,1%).
4. **Anggap PBB P3 = PBB P2**: padahal P3 urusan pusat (perkebunan, hutan, tambang).
5. **Tidak daftar objek baru**: tanah/bangunan baru wajib di-daftar ke Pemda dalam 30 hari setelah perolehan.

## Tabel: PPh Final vs PBB vs BPHTB

Sering keluar di ujian, perhatikan bedanya ya!

| Pajak | Pemungut | Saat | Tarif |
|-------|----------|------|-------|
| PBB-P2 | Pemda Kab/Kota | Tahunan (SPPT) | 0,1-0,5% dari NJOPKP |
| BPHTB | Pemda Kab/Kota (pembeli bayar) | Saat perolehan | Maks 5% (NPOP − NPOPTKP) |
| PPh Final 4(3) — penjualan tanah/bangunan | DJP (penjual bayar) | Saat penjualan | 2,5% dari harga jual |

> **Konsep kunci:** Setiap transaksi tanah & bangunan ada 3 pajak yang muncul: PBB tahunan, BPHTB (saat beli), PPh Final 2,5% (saat jual). Bedanya: PBB = pemilik bayar tiap tahun; BPHTB = pembeli bayar sekali; PPh Final = penjual bayar sekali.

## Update 2026 Penting Buat PBB

- **NJOP bisa naik signifikan** tahun 2026 di banyak kota karena property market recovery pasca-COVID.
- **Pemberitahuan SPPT elektronik** udah jadi standar di kota besar. Pastikan email aktif!
- **Diskon/diskon pembayaran dini**: banyak daerah kasih diskon 5-10% kalau bayar sebelum Maret. Manfaatkan!
- **Penghapusan denda (pemutihan)**: beberapa daerah kasih program pemutihan PBB tunggakan (contoh: Bangka Belitung sampai Oktober 2026 untuk PKB/BBN-KB, ada juga untuk PBB).

## Kesimpulan

PBB-P2 itu pajak daerah atas tanah & bangunan di wilayah desa/kota. Hitungannya simpel:

\`\`\`
NJOPKP = NJOP − NJOPTKP (min Rp 10jt)
PBB Terutang = Tarif (max 0,5%) × NJOPKP
\`\`\`

Kunci yang harus kamu inget:
- PBB-P2 = urusan kabupaten/kota (bukan pusat sejak 2010)
- PBB-P3 = perkebunan/perhutanan/pertambangan, urusan pusat
- NJOP ditetapkan PERDA, NJOPTKP min Rp 10jt
- Tarif max 0,5% (tiap daerah beda, cek PERDA)
- SPPT dikirim tahunan, jatuh tempo biasanya 30 September

Paham kan? Lanjut ke BPHTB — pajak yang muncul saat beli tanah/bangunan! 💰
`,
      keyPoints: [
        "Sejak 2010, PBB sudah dialihkan jadi pajak daerah (PBB-P2) berdasarkan UU 28/2009 dan diperbarui UU HKPD 1/2022",
        "PBB-P2 = urusan kabupaten/kota (perdesaan & perkotaan). PBB-P3 = urusan pusat (perkebunan, perhutanan, pertambangan)",
        "Tarif PBB maksimal 0,5% (sesuai PERDA masing-masing daerah, misal DKI Jakarta 0,1%)",
        "NJOPTKP (NJOP Tidak Kena Pajak) minimal Rp 10.000.000 per objek pajak",
        "Rumus: NJOPKP = NJOP − NJOPTKP; PBB Terutang = Tarif × NJOPKP",
        "NJOP ditetapkan setahun sekali melalui PERDA, dikirim ke WP via SPPT",
        "Jatuh tempo PBB biasanya 30 September setiap tahun",
        "3 pajak yang muncul di transaksi tanah/bangunan: PBB tahunan (pemilik), BPHTB (pembeli), PPh Final 2,5% (penjual)",
      ],
      quiz: [
        {
          id: "ch09-l01-q1",
          question: "Sejak tahun berapa PBB dialihkan dari pajak pusat menjadi pajak daerah (PBB-P2)?",
          options: ["1985", "2010", "2014", "2022"],
          correctIndex: 1,
          explanation:
            "Sejak 1 Januari 2010, berdasarkan UU 28/2009, PBB dialihkan menjadi PBB-P2 (urusan kabupaten/kota). PBB-P3 untuk perkebunan/perhutanan/pertambangan tetap di pusat.",
          difficulty: "sedang",
        },
        {
          id: "ch09-l01-q2",
          question: "Tarif maksimal PBB-P2 sesuai UU HKPD 1/2022 adalah?",
          options: ["0,1%", "0,3%", "0,5%", "1%"],
          correctIndex: 2,
          explanation:
            "Tarif maksimal PBB-P2 = 0,5% dari NJOPKP. Tiap daerah boleh menetapkan tarif lebih rendah melalui PERDA (contoh DKI Jakarta 0,1%).",
          difficulty: "mudah",
        },
        {
          id: "ch09-l01-q3",
          question: "Pak Budi punya rumah dengan NJOP Rp 500jt. NJOPTKP Rp 10jt. Tarif PBB di kotanya 0,2%. PBB Terutang?",
          options: [
            "Rp 1.000.000",
            "Rp 980.000",
            "Rp 100.000",
            "Rp 500.000",
          ],
          correctIndex: 1,
          explanation:
            "NJOPKP = NJOP − NJOPTKP = 500jt − 10jt = 490jt. PBB = 0,2% × 490jt = Rp 980.000/tahun.",
          difficulty: "sedang",
        },
        {
          id: "ch09-l01-q4",
          question: "Berikut yang BUKAN ciri PBB-P3 (perkebunan/perhutanan/pertambangan):",
          options: [
            "Objeknya tanah perkebunan, hutan, atau tambang",
            "Pemungutnya pemerintah pusat (DJP)",
            "Tarif sama dengan PBB-P2 (max 0,5%)",
            "SPT-nya dilaporkan ke DJP, bukan Pemda",
          ],
          correctIndex: 2,
          explanation:
            "PBB-P3 (perkebunan/perhutanan/pertambangan) TIDAK menggunakan tarif PBB-P2 (max 0,5%), tapi tarif khusus sesuai peraturan terkait. PBB-P3 tetap urusan pusat.",
          difficulty: "sulit",
        },
        {
          id: "ch09-l01-q5",
          question: "Surat yang dikirim pemda ke wajib pajak PBB setahun sekali berisi rincian NJOP dan PBB terutang disebut?",
          options: ["SKP", "SPT", "SPPT", "Bukti Potong"],
          correctIndex: 2,
          explanation:
            "SPPT (Surat Pemberitahuan Pajak Terutang) dikirim pemda ke WP PBB setahun sekali. Berisi identitas WP, NJOP, NJOPTKP, tarif, dan jumlah PBB terutang.",
          difficulty: "mudah",
        },
      ],
      caseStudy: {
        title: "Kasus: Hitung PBB Rumah di Surabaya & Bangunan di Sidoarjo",
        description:
          "Pak Surya punya 2 properti: (1) Rumah tinggal di Surabaya: NJOP Bumi Rp 4M (200m² × Rp 20jt), NJOP Bangunan Rp 1,5M (100m² × Rp 15jt). Tarif PBB Surabaya 0,2%, NJOPTKP Rp 10jt. (2) Gudang di Sidoarjo: NJOP Bumi Rp 2M, NJOP Bangunan Rp 1M. Tarif PBB Sidoarjo 0,15%, NJOPTKP Rp 10jt. Berapa total PBB Pak Surya per tahun?",
        solution:
          "(1) Rumah Surabaya:\n- Total NJOP = 4M + 1,5M = Rp 5.500.000.000... eh wait, juta atau miliar? Cek: NJOP Bumi Rp 4M = Rp 4.000.000.000 (4 miliar). NJOP Bangunan Rp 1,5M = Rp 1.500.000.000. Total = Rp 5.500.000.000.\n- NJOPKP = 5,5M − 10jt = Rp 5.490.000.000.\n- PBB = 0,2% × 5.490.000.000 = Rp 10.980.000/tahun.\n\n(2) Gudang Sidoarjo:\n- Total NJOP = Rp 2.000.000.000 + Rp 1.000.000.000 = Rp 3.000.000.000.\n- NJOPKP = 3M − 10jt = Rp 2.990.000.000.\n- PBB = 0,15% × 2.990.000.000 = Rp 4.485.000/tahun.\n\nTotal PBB Pak Surya = 10.980.000 + 4.485.000 = Rp 15.465.000/tahun.\n\nPak Surya bisa hemat dengan memanfaatkan diskon pembayaran dini (jika ada) yang biasanya 5-10% kalau bayar sebelum Maret.",
      },
      tags: [
        "PBB",
        "PBB-P2",
        "PBB-P3",
        "NJOP",
        "NJOPTKP",
        "NJOPKP",
        "UU HKPD 1/2022",
        "pajak daerah",
        "SPPT",
      ],
    },
    {
      id: "ch09-l02",
      slug: "bphtb-2026",
      title: "BPHTB 2026 — Bea Perolehan Hak atas Tanah & Bangunan",
      subtitle:
        "BPHTB: tarif max 5%, NPOPTKP min Rp 80jt (Rp 300jt warisan), perhitungan NPOP, contoh jual beli",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 16,
      content: `# BPHTB 2026 — Pajak yang Bayar Pembeli Tanah 📜

BPHTB itu **Bea Perolehan Hak atas Tanah dan Bangunan**. Kalau PBB dibayar tiap tahun sama pemilik, BPHTB dibayar **satu kali saat perolehan** (beli, waris, hibah, dll). Yang bayar = **pembeli/penerima hak**.

Bedanya sama PBB:
- PBB: pemilik bayar tiap tahun (PBB-P2 di pemda)
- BPHTB: pembeli bayar sekali saat transaksi (juga di pemda)

## Dasar Hukum BPHTB 2026

| Tahun | Aturan |
|-------|--------|
| 1997 | UU 21/1997 (BPHTB sebagai bea) |
| 2000 | UU 20/2000 (revisi tarif) |
| 2010 | UU 28/2009 (BPHTB jadi pajak daerah) |
| 2014 | UU 23/2014 |
| **2022** | **UU HKPD 1/2022 (aturan terkini)** |

Sejak 2010, BPHTB udah jadi **pajak daerah kabupaten/kota**. Tarif maksimal **5%**.

## Konsep Dasar BPHTB

### Subjek Pajak BPHTB:

Orang pribadi atau badan yang **memperoleh hak** atas tanah dan bangunan. Maksudnya:

1. **Pembeli** saat jual beli
2. **Ahli waris** saat warisan
3. **Penerima hibah** saat hibah
4. **Penerima rampasan** (lelang)
5. **Pemegang hak baru** (jadi pemilik lewat cara lain)

### Objek BPHTB:

Perolehan hak atas tanah & bangunan, termasuk:
- Jual beli
- Tukar-menukar
- Hibah
- Hibah wasiat
- Waris
- Pemasukan dalam modal perseroan
- Lelang
- Adjudikasi
- Putusan hakim

## Tarif & NPOPTKP BPHTB

### Tarif maksimal BPHTB = 5%

Tiap daerah menetapkan tarifnya sendiri (umumnya di angka 5%). Beberapa daerah memberi tarif lebih rendah untuk rumah sederhana.

### NPOPTKP (NPOP Tidak Kena Pajak)

NPOPTKP = bagian NPOP yang tidak kena BPHTB. Tujuannya: melindungi rumah rakyat. Minimal:

| Jenis Perolehan | NPOPTKP Min |
|-----------------|-------------|
| Umum (jual beli, dll) | Rp 80.000.000 |
| Warisan | Rp 300.000.000 |

> **Update 2026:** NPOPTKP bisa lebih tinggi di beberapa daerah. Contoh Jakarta tetap Rp 80jt (umum) dan Rp 300jt (warisan). Beberapa daerah lain seperti Bandung menaikkan jadi Rp 100jt untuk perolehan rumah sederhana.

## Rumus Hitung BPHTB

\`\`\`
NPOP = max(Harga Transaksi, NJOP)
NPOPTKP = sesuai PERDA (min Rp 80jt umum, Rp 300jt warisan)
NPOPTKP BPHTB = NPOP − NPOPTKP
BPHTB Terutang = 5% × NPOPTKP BPHTB
\`\`\`

> **Konsep penting:** NPOP = max(Harga Transaksi, NJOP). Jadi kalau harga transaksi lebih rendah dari NJOP, yang dipakai NJOP. Ini untuk mencegah "manipulasi harga" di akta.

## Contoh Kasus 1: Jual Beli Rumah Biasa

Pak Budi beli rumah di Surabaya dari Pak Hendra. Harga transaksi Rp 500jt. NJOP rumah Rp 450jt.

### Hitung:
- NPOP = max(500jt, 450jt) = **Rp 500.000.000** (yang dipakai harga transaksi karena lebih tinggi)
- NPOPTKP = Rp 80.000.000
- NPOPTKP BPHTB (Nilai Perolehan Objek Pajak Kena Pajak... sebenarnya namanya NPOPKP) = 500jt − 80jt = Rp 420.000.000
- Tarif BPHTB Surabaya = 5%
- **BPHTB Terutang = 5% × 420.000.000 = Rp 21.000.000**

### Jurnal BPHTB (untuk Pak Budi sebagai pembeli perusahaan):

| Akun | Debit | Kredit |
|------|------|--------|
| Beban BPHTB | 21.000.000 | |
| Kas/Bank | | 21.000.000 |

## Contoh Kasus 2: Harga Transaksi Lebih Rendah dari NJOP

Pak Budi beli rumah di Jakarta, harga transaksi Rp 700jt. NJOP rumah Rp 1.000.000.000.

### Hitung:
- NPOP = max(700jt, 1.000jt) = **Rp 1.000.000.000** (yang dipakai NJOP)
- NPOPTKP = Rp 80.000.000
- NPOPKP = 1.000jt − 80jt = Rp 920.000.000
- Tarif BPHTB DKI = 5%
- **BPHTB = 5% × 920jt = Rp 46.000.000**

> **Hati-hati:** Kalau kamu "akal-akalan" harga jual rendah di akta untuk hemat BPHTB, nggak akan berhasil. Pemda pakai NJOP sebagai minimum. Bahkan bisa kena sanksi pidana karena pemalsuan dokumen!

## Contoh Kasus 3: Warisan

Pak Anak mewarisi rumah dari ayahnya yang meninggal. NJOP rumah Rp 1.500.000.000.

### Hitung:
- NPOP = NJOP = Rp 1.500.000.000
- NPOPTKP warisan = Rp 300.000.000
- NPOPKP = 1.500jt − 300jt = Rp 1.200.000.000
- Tarif BPHTB = 5%
- **BPHTB = 5% × 1.200.000.000 = Rp 60.000.000**

> **Catatan:** Warisan rumah juga kena BPHTB. Tapi NPOPTKP lebih tinggi (Rp 300jt) untuk melindungi ahli waris. Selain itu, kalau warisan berupa **tanahnya masih pakai nama orang tua** dan baru dialihkan, kena BPHTB. Tapi kalau sudah ada hak milik atas nama ahli waris sebelumnya, tidak kena lagi.

## Contoh Kasus 4: Hibah dari Orang Tua ke Anak

Pak Anak dapat hibah rumah dari orang tuanya (orang tua masih hidup). NJOP rumah Rp 800jt.

### Hitung:
- NPOP = Rp 800.000.000
- NPOPTKP hibah (umum, BUKAN warisan) = Rp 80.000.000
- NPOPKP = 800jt − 80jt = Rp 720.000.000
- **BPHTB = 5% × 720jt = Rp 36.000.000**

> **Tip:** Hibah ke anak kena BPHTB biasa (NPOPTKP Rp 80jt). Beda dengan warisan (Rp 300jt). Jadi kalau mau hemat BPHTB, mending warisan (setelah orang tua meninggal). Tapi ini strategi ya, bukan anjuran.

## Contoh Kasus 5: Hibah Wasiat

Pak Anak dapat hibah wasiat (lewat wasiat sebelum meninggal) dari ayahnya. NJOP rumah Rp 1M.

### Hitung:
- Hibah wasiat → dianggap seperti warisan → NPOPTKP Rp 300jt
- NPOP = Rp 1.000.000.000
- NPOPKP = 1M − 300jt = Rp 700.000.000
- **BPHTB = 5% × 700jt = Rp 35.000.000**

## Tabel: Jenis Perolehan & NPOPTKP

| Jenis Perolehan | NPOPTKP Min | Keterangan |
|-----------------|-------------|------------|
| Jual beli | Rp 80jt | Umum |
| Tukar-menukar | Rp 80jt | Umum |
| Hibah | Rp 80jt | Selain ke kerabat sederajat |
| Hibah ke kerabat sederajat | Rp 80jt (ada PERDA yang naikin jadi Rp 300jt) | Tergantung PERDA |
| Hibah wasiat | Rp 300jt | Dianggap warisan |
| Waris | Rp 300jt | Setelah pewaris meninggal |
| Lelang | Rp 80jt | Umum |
| Pemasukan modal perseroan | Rp 80jt | Umum |
| Putusan hakim | Rp 80jt | Umum |
| Adjudikasi | Rp 80jt | Umum |

## Hubungan BPHTB dengan Pajak Lain

Saat beli tanah/bangunan, ada beberapa pajak yang muncul:

| Pajak | Siapa Bayar | Tarif | Kapan |
|-------|-------------|-------|-------|
| BPHTB | Pembeli | 5% × NPOPKP | Saat perolehan (jatuh tempo 30 hari setelah perolehan) |
| PPh Final 2,5% | Penjual | 2,5% × harga jual | Saat penjualan |
| PBB-P2 | Pemilik (pembeli setelah jadi pemilik) | 0,1-0,5% × NJOPKP | Tahunan |
| Notaris fee | Pembeli | ~1% × nilai transaksi | Saat transaksi |
| Biaya balik nama | Pembeli | ~1-2% × nilai transaksi | Saat transaksi |

> **Total biaya transaksi tanah & bangunan:** BPHTB 5% + PPh 2,5% (penjual) + biaya notaris/balik nama ~2-3% = **total ~10% dari nilai transaksi**. Buat rumah Rp 1M, itu Rp 100jt biaya transaksi!

## Kasus Lengkap: Beli Rumah di Bandung

Pak Dian beli rumah di Bandung, NJOP Rp 1.200.000.000. Harga transaksi Rp 1.500.000.000.

### Hitung BPHTB (pembeli bayar):
- NPOP = max(1.500jt, 1.200jt) = Rp 1.500.000.000 (harga transaksi lebih tinggi)
- NPOPTKP Bandung = Rp 80.000.000
- NPOPKP = 1.500jt − 80jt = Rp 1.420.000.000
- Tarif BPHTB Bandung = 5%
- **BPHTB = 5% × 1.420.000.000 = Rp 71.000.000** (dibayar Pak Dian)

### Hitung PPh Final 2,5% (penjual bayar):
- PPh Final = 2,5% × 1.500.000.000 = **Rp 37.500.000** (dibayar penjual)

### Hitung PBB tahun depan (Pak Dian jadi pemilik baru):
- NJOP = Rp 1.200.000.000 (asumsi tidak berubah)
- NJOPKP = 1.200jt − 10jt = Rp 1.190.000.000
- Tarif PBB Bandung = 0,15%
- **PBB = 0,15% × 1.190.000.000 = Rp 1.785.000/tahun**

### Total biaya transaksi:
- BPHTB: Rp 71jt (Pak Dian)
- PPh Final: Rp 37,5jt (penjual)
- Notaris + balik nama (~2%): Rp 30jt
- **Total: Rp 138,5jt (~9,2% dari nilai transaksi)**

## Update 2026 di Era Digitalisasi

- **BPHTB online** sudah marak di kota besar. Pembayaran via m-banking, e-wallet.
- **Notaris wajib lapor BPHTB** sebelum akta dibuat (sistem online Bapenda).
- **Coretax Daerah** (sistem terpisah dari Coretax DJP) mengintegrasikan SPT BPHTB, PBB-P2, Pajak Hotel, dll. Tiap daerah punya sendiri.
- **BPHTB dapat diskon** untuk rumah sederhana di banyak daerah (program subsidi rumah rakyat).
- **Verifikasi NJOP online**: bisa cek NJOP lewat website Bapenda sebelum transaksi.

## Sanksi 2026 Telat Bayar BPHTB

| Pelanggaran | Sanksi |
|-------------|--------|
| Telat bayar BPHTB (setelah 30 hari dari perolehan) | Bunga 2%/bln (maks 24 bln, sesuai PERDA) |
| Tidak daftar BPHTB | Denda + wajib bayar |
| Manipulasi harga transaksi | Pidana (pemalsuan dokumen) |
| Tidak lapor BPHTB | Denda + bunga |

## Hal-Hal yang Sering Salah

1. **Lupa konsep NPOP = max(transaksi, NJOP)**: kalau harga transaksi lebih rendah, tetap pakai NJOP.
2. **Pakai NPOPTKP Rp 300jt untuk jual beli**: padahal itu cuma buat warisan/hibah wasiat.
3. **Anggap BPHTB dibayar penjual**: padahal BPHTB = pembeli/penerima hak.
4. **Lupa BPHTB + PPh Final 2,5%**: sering cuma hitung salah satu. Padahal dua-duanya muncul saat transaksi tanah/bangunan.
5. **Tidak lapor BPHTB ke Bapenda**: notaris biasanya bantu, tapi WP tetap bertanggung jawab.

## Tabel Ringkas: BPHTB di Berbagai Daerah (2026)

| Kota | Tarif BPHTB | NPOPTKP Umum | NPOPTKP Warisan |
|------|-------------|--------------|-----------------|
| DKI Jakarta | 5% | Rp 80jt | Rp 300jt |
| Surabaya | 5% | Rp 80jt | Rp 300jt |
| Bandung | 5% | Rp 80jt | Rp 300jt |
| Semarang | 5% | Rp 80jt | Rp 300jt |
| Bekasi | 5% | Rp 80jt | Rp 300jt |
| Bogor | 5% | Rp 80jt | Rp 300jt |

> Hampir semua kota pakai tarif maksimal 5% dan NPOPTKP minimum (Rp 80jt umum, Rp 300jt warisan). Tapi tetap cek PERDA masing-masing!

## Kesimpulan

BPHTB itu pajak daerah yang dibayar pembeli/penerima hak saat memperoleh tanah/bangunan. Hitungannya:

\`\`\`
NPOP = max(Harga Transaksi, NJOP)
NPOPKP = NPOP − NPOPTKP
BPHTB = 5% × NPOPKP
\`\`\`

Kunci yang harus kamu inget:
- BPHTB = urusan kabupaten/kota (sejak 2010, UU HKPD 1/2022)
- Bayar = **pembeli/penerima hak**, bukan penjual
- Tarif maksimal 5% (umumnya semua daerah pakai 5%)
- NPOPTKP umum Rp 80jt, warisan/hibah wasiat Rp 300jt
- NPOP = max(harga transaksi, NJOP) → tidak bisa manipulasi harga rendah
- Jatuh tempo: 30 hari setelah perolehan (akta dibuat notaris)

Paham kan? Lanjut ke kasus lengkap PBB & BPHTB! 🎯
`,
      keyPoints: [
        "BPHTB = Bea Perolehan Hak atas Tanah dan Bangunan, dibayar oleh PEMBELI/penerima hak saat perolehan",
        "Sejak 2010 (UU 28/2009, diperbarui UU HKPD 1/2022), BPHTB jadi pajak daerah kabupaten/kota",
        "Tarif BPHTB maksimal 5% (umumnya semua daerah pakai 5%)",
        "NPOPTKP minimal Rp 80jt untuk umum (jual beli, hibah, lelang), Rp 300jt untuk warisan/hibah wasiat",
        "Rumus: NPOP = max(Harga Transaksi, NJOP); NPOPKP = NPOP − NPOPTKP; BPHTB = 5% × NPOPKP",
        "Jatuh tempo BPHTB: 30 hari setelah perolehan (saat akta notaris dibuat)",
        "Saat transaksi tanah/bangunan muncul 3 pajak: BPHTB (pembeli), PPh Final 2,5% (penjual), PBB tahunan (pemilik baru)",
        "Total biaya transaksi tanah & bangunan ~10% dari nilai transaksi (BPHTB 5% + PPh 2,5% + notaris/balik nama 2-3%)",
      ],
      quiz: [
        {
          id: "ch09-l02-q1",
          question: "Pak Budi beli rumah Rp 500jt (NJOP Rp 450jt) di Surabaya. NPOPTKP Rp 80jt, tarif BPHTB 5%. Berapa BPHTB yang harus dibayar Pak Budi?",
          options: [
            "Rp 21.000.000",
            "Rp 18.500.000",
            "Rp 25.000.000",
            "Rp 16.000.000",
          ],
          correctIndex: 0,
          explanation:
            "NPOP = max(500jt, 450jt) = 500jt. NPOPKP = 500jt − 80jt = 420jt. BPHTB = 5% × 420jt = Rp 21.000.000.",
          difficulty: "sedang",
        },
        {
          id: "ch09-l02-q2",
          question: "Siapa yang wajib membayar BPHTB saat transaksi jual beli tanah?",
          options: [
            "Penjual (lama)",
            "Pembeli (baru)",
            "Notaris",
            "Pemerintah daerah",
          ],
          correctIndex: 1,
          explanation: "BPHTB = Bea PEROLEHAN Hak. Yang memperoleh = pembeli. Jadi pembeli yang bayar. Penjual bayar PPh Final 2,5%.",
          difficulty: "mudah",
        },
        {
          id: "ch09-l02-q3",
          question: "Pak Anak mewarisi rumah dari ayahnya, NJOP Rp 1M. NPOPTKP warisan Rp 300jt. Berapa BPHTB?",
          options: ["Rp 50.000.000", "Rp 35.000.000", "Rp 25.000.000", "Rp 0 (warisan bebas pajak)"],
          correctIndex: 1,
          explanation: "NPOP = Rp 1M (NJOP). NPOPKP = 1M − 300jt = 700jt. BPHTB = 5% × 700jt = Rp 35.000.000. Warisan tetap kena BPHTB, tapi NPOPTKP lebih tinggi (Rp 300jt).",
          difficulty: "sedang",
        },
        {
          id: "ch09-l02-q4",
          question: "Pak Joko beli rumah di Jakarta, harga transaksi Rp 700jt, NJOP Rp 1M. NPOP yang dipakai untuk hitung BPHTB:",
          options: ["Rp 700jt", "Rp 1M", "Rp 920jt", "Rp 80jt"],
          correctIndex: 1,
          explanation: "NPOP = max(harga transaksi, NJOP) = max(700jt, 1.000jt) = Rp 1.000.000. Tidak bisa 'akal-akalan' harga rendah di akta untuk hemat BPHTB.",
          difficulty: "sedang",
        },
        {
          id: "ch09-l02-q5",
          question: "Saat beli rumah Rp 1M (NJOP sama), berapa total pajak yang muncul di transaksi?",
          options: [
            "BPHTB Rp 50jt saja",
            "PPh Final 2,5% Rp 25jt saja",
            "BPHTB Rp 46jt + PPh Final Rp 25jt + PBB tahunan setelahnya",
            "Tidak ada pajak karena transaksi < Rp 1M",
          ],
          correctIndex: 2,
          explanation: "3 pajak muncul: BPHTB (pembeli) = 5% × (1M − 80jt) = Rp 46jt. PPh Final 2,5% (penjual) = 2,5% × 1M = Rp 25jt. PBB tahunan setelah jadi pemilik. Total transaksi pajak saja Rp 71jt (belum biaya notaris).",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Beli Tanah + Bangun Rumah — Hitung Semua Pajak",
        description:
          "Pak Doni beli tanah kosong di Bekasi senilai Rp 500jt (NJOP Rp 450jt). Setelah itu, Pak Doni bangun rumah senilai Rp 300jt (NJOP bangunan saat selesai Rp 250jt). Setelah 2 tahun, NJOP tanah naik jadi Rp 600jt, NJOP bangunan Rp 250jt. (a) Berapa BPHTB saat beli tanah? (b) Berapa PBB tahunan untuk tanah kosong tahun pertama? (c) Berapa PBB tahunan setelah rumah jadi? Tarif PBB Bekasi 0,2%, NJOPTKP Rp 10jt.",
        solution:
          "(a) BPHTB saat beli tanah kosong:\n- NPOP = max(500jt, 450jt) = Rp 500.000.000 (harga transaksi).\n- NPOPKP = 500jt − 80jt = Rp 420.000.000.\n- BPHTB = 5% × 420jt = Rp 21.000.000.\n\n(b) PBB tahunan tanah kosong (tahun pertama, NJOP Rp 450jt):\n- NJOPKP = 450jt − 10jt = Rp 440.000.000.\n- PBB = 0,2% × 440jt = Rp 880.000/tahun.\n\n(c) PBB tahunan setelah rumah jadi (NJOP tanah 600jt + NJOP bangunan 250jt):\n- Total NJOP = 600jt + 250jt = Rp 850.000.000.\n- NJOPKP = 850jt − 10jt = Rp 840.000.000.\n- PBB = 0,2% × 840jt = Rp 1.680.000/tahun.\n\nPak Doni bayar BPHTB Rp 21jt sekali saat beli, lalu PBB tahunan Rp 880rb (tanah kosong) → Rp 1,68jt (setelah rumah jadi). Catatan: BPHTB tidak muncul lagi saat bangun rumah sendiri, karena bukan perolehan hak dari pihak lain.",
      },
      tags: [
        "BPHTB",
        "NPOP",
        "NPOPTKP",
        "NPOPKP",
        "warisan",
        "hibah wasiat",
        "jual beli tanah",
        "pajak daerah",
        "UU HKPD 1/2022",
      ],
    },
    {
      id: "ch09-l03",
      slug: "kasus-pbb-bphtb",
      title: "Kasus Lengkap PBB & BPHTB — Analisis Properti dari A-Z",
      subtitle:
        "Analisis data NJOP, hitung PBB tahunan, hitung BPHTB saat beli, perbandingan tanah kosong vs bangunan",
      type: "kasus",
      difficulty: "mahir",
      estimatedMinutes: 18,
      content: `# Kasus Lengkap PBB & BPHTB — Analisa Properti dari A-Z 🏗️

Yuk, kita bahas kasus komprehensif yang nggabungin semua yang udah kita pelajari di lesson sebelumnya. Ini penting banget karena di ujian Brevet AB, kasus PBB & BPHTB sering keluar dengan format begini:

> Kasus: "Pak X beli rumah Y, NJOP sekian, harga transaksi sekian. Setelah 3 tahun, rumah dijual lagi ke Pak Z. Hitung semua pajak yang muncul."

## Format Umum Soal PBB & BPHTB

Soal biasanya punya struktur gini:

1. **Skenario pembelian** → BPHTB untuk pembeli + PPh Final 2,5% untuk penjual
2. **Skenario PBB tahunan** → Hitung PBB-P2 untuk pemilik
3. **Skenario penjualan ulang** → Hitung BPHTB lagi + PPh Final untuk penjual baru
4. **Skenario waris/hibah** → BPHTB dengan NPOPTKP Rp 300jt
5. **Perbandingan tanah kosong vs dengan bangunan** → Beda PBB dan PPh Final

## Kasus 1: Pembelian Rumah Tinggal

Pak Andi beli rumah di Surabaya dari Bu Sinta. Data:

- Harga transaksi: Rp 850.000.000
- NJOP Bumi: Rp 600.000.000 (200m² × Rp 3jt/m²)
- NJOP Bangunan: Rp 300.000.000 (150m² × Rp 2jt/m²)
- Total NJOP: Rp 900.000.000
- Tarif BPHTB Surabaya: 5%
- NPOPTKP Surabaya: Rp 80jt
- Tarif PBB Surabaya: 0,2%
- NJOPTKP Surabaya: Rp 10jt

### Hitung (a) BPHTB yang dibayar Pak Andi (pembeli):

\`\`\`
NPOP = max(Harga Transaksi, NJOP) = max(850jt, 900jt) = Rp 900.000.000
      (NJOP lebih tinggi, yang dipakai NJOP)
NPOPKP = NPOP − NPOPTKP = 900jt − 80jt = Rp 820.000.000
BPHTB = 5% × 820jt = Rp 41.000.000
\`\`\`

### Hitung (b) PPh Final 2,5% yang dibayar Bu Sinta (penjual):

\`\`\`
PPh Final = 2,5% × Harga Transaksi = 2,5% × 850jt = Rp 21.250.000
\`\`\`

> **Catatan:** PPh Final 2,5% pakai **harga transaksi** (yang sebenarnya), bukan NJOP. Beda sama BPHTB yang pakai max(transaksi, NJOP).

### Hitung (c) PBB tahunan Pak Andi tahun depan:

\`\`\`
NJOP = Rp 900.000.000 (asumsi tidak berubah)
NJOPKP = 900jt − 10jt = Rp 890.000.000
PBB = 0,2% × 890jt = Rp 1.780.000/tahun
\`\`\`

### Total pajak di transaksi ini:

| Pajak | Bayar Siapa | Jumlah |
|-------|-------------|--------|
| BPHTB | Pak Andi (pembeli) | Rp 41.000.000 |
| PPh Final 2,5% | Bu Sinta (penjual) | Rp 21.250.000 |
| PBB tahunan | Pak Andi (pemilik baru) | Rp 1.780.000/tahun |

## Kasus 2: Tanah Kosong vs Tanah dengan Bangunan

Pak Budi punya 2 pilihan investasi:
- **Pilihan A:** Beli tanah kosong Rp 500jt (NJOP Rp 450jt)
- **Pilihan B:** Beli tanah dengan bangunan kecil Rp 500jt (NJOP tanah Rp 350jt, NJOP bangunan Rp 100jt, total NJOP Rp 450jt)

Tarif PBB Bekasi 0,2%, NJOPTKP Rp 10jt. Tarif BPHTB 5%, NPOPTKP Rp 80jt.

### Hitung (a) BPHTB saat beli:

**Pilihan A (tanah kosong):**
\`\`\`
NPOP = max(500jt, 450jt) = Rp 500.000.000
NPOPKP = 500jt − 80jt = Rp 420.000.000
BPHTB = 5% × 420jt = Rp 21.000.000
\`\`\`

**Pilihan B (dengan bangunan):**
\`\`\`
NPOP = max(500jt, 450jt) = Rp 500.000.000
NPOPKP = 500jt − 80jt = Rp 420.000.000
BPHTB = 5% × 420jt = Rp 21.000.000
\`\`\`

**Sama!** Karena yang dipakai max(harga transaksi, NJOP). Total NJOP sama (Rp 450jt) → BPHTB sama.

### Hitung (b) PBB tahunan:

**Pilihan A (tanah kosong):**
\`\`\`
NJOP = Rp 450.000.000
NJOPKP = 450jt − 10jt = Rp 440.000.000
PBB = 0,2% × 440jt = Rp 880.000/tahun
\`\`\`

**Pilihan B (dengan bangunan):**
\`\`\`
NJOP = Rp 450.000.000 (350jt + 100jt)
NJOPKP = 450jt − 10jt = Rp 440.000.000
PBB = 0,2% × 440jt = Rp 880.000/tahun
\`\`\`

**Sama!** Karena total NJOP sama, PBB juga sama. Tapi beda kalau NJOP-nya beda.

### Hitung (c) PPh Final saat jual lagi (asumsi 3 tahun lagi, harga jual Rp 700jt):

**Pilihan A:**
\`\`\`
PPh Final = 2,5% × 700jt = Rp 17.500.000
\`\`\`

**Pilihan B:**
\`\`\`
PPh Final = 2,5% × 700jt = Rp 17.500.000
\`\`\`

**Sama!** Karena PPh Final 2,5% pakai harga transaksi, bukan NJOP.

### Kesimpulan Pilihan A vs B:

Dari sisi pajak, **sama saja**. Tapi dari sisi investasi:
- Tanah kosong: potensi naik nilai tanah (capital gain) lebih tinggi
- Tanah dengan bangunan: dapat income dari sewa (bangunan bisa disewakan)
- Bangunan: ada biaya maintenance, depresiasi (untuk akuntansi)

## Kasus 3: Jual-Beli Berturut (Pak Andi → Bu Sinta → Pak Charlie)

Tahun 2025, Pak Andi beli rumah Rp 800jt (NJOP Rp 750jt) di Bandung. Tahun 2026, Pak Andi jual lagi ke Bu Sinta Rp 1M (NJOP masih Rp 750jt). Tahun 2027, Bu Sinta jual ke Pak Charlie Rp 1,2M (NJOP naik jadi Rp 900jt).

Tarif BPHTB 5%, NPOPTKP Rp 80jt. Tarif PBB Bandung 0,15%, NJOPTKP Rp 12jt. Tarif PPh Final 2,5%.

### Transaksi 1 (2025): Pak Andi beli dari pemilik lama

**BPHTB (Pak Andi bayar):**
- NPOP = max(800jt, 750jt) = Rp 800.000.000
- NPOPKP = 800jt − 80jt = Rp 720.000.000
- BPHTB = 5% × 720jt = **Rp 36.000.000**

**PPh Final 2,5% (pemilik lama bayar):**
- PPh Final = 2,5% × 800jt = **Rp 20.000.000**

### Transaksi 2 (2026): Pak Andi jual ke Bu Sinta

**BPHTB (Bu Sinta bayar):**
- NPOP = max(1M, 750jt) = Rp 1.000.000.000 (harga transaksi lebih tinggi)
- NPOPKP = 1M − 80jt = Rp 920.000.000
- BPHTB = 5% × 920jt = **Rp 46.000.000**

**PPh Final 2,5% (Pak Andi bayar):**
- PPh Final = 2,5% × 1M = **Rp 25.000.000**

### Transaksi 3 (2027): Bu Sinta jual ke Pak Charlie

**BPHTB (Pak Charlie bayar):**
- NPOP = max(1,2M, 900jt) = Rp 1.200.000.000 (harga transaksi)
- NPOPKP = 1,2M − 80jt = Rp 1.120.000.000
- BPHTB = 5% × 1.120jt = **Rp 56.000.000**

**PPh Final 2,5% (Bu Sinta bayar):**
- PPh Final = 2,5% × 1,2M = **Rp 30.000.000**

### Total pajak dari 3 transaksi:

| Transaksi | BPHTB | PPh Final | Total |
|-----------|-------|-----------|-------|
| 1 (2025) | Rp 36jt (Pak Andi) | Rp 20jt (pemilik lama) | Rp 56jt |
| 2 (2026) | Rp 46jt (Bu Sinta) | Rp 25jt (Pak Andi) | Rp 71jt |
| 3 (2027) | Rp 56jt (Pak Charlie) | Rp 30jt (Bu Sinta) | Rp 86jt |
| **Total** | **Rp 138jt** | **Rp 75jt** | **Rp 213jt** |

> **Wow, total pajak transaksi tanah & bangunan dalam 3 tahun = Rp 213jt!** Itu sekitar 17,7% dari nilai transaksi terakhir (Rp 1,2M). Pemerintah daerah + pusat untung besar dari transaksi properti.

## Kasus 4: Hibah dari Orang Tua ke Anak (Strategi Hemat Pajak)

Ibu Tini (60 thn) mau alihkan rumah ke anaknya Pak Doni. NJOP rumah Rp 1,5M. Ibu Tini ada 2 opsi:

- **Opsi A:** Hibah langsung sekarang (orang tua masih hidup)
- **Opsi B:** Hibah wasiat (lewat wasiat, berlaku setelah orang tua meninggal)

### Opsi A — Hibah langsung:
\`\`\`
NPOP = Rp 1.500.000.000
NPOPTKP (hibah, kecuali ke kerabat sederajat) = Rp 80jt
NPOPKP = 1.500jt − 80jt = Rp 1.420.000.000
BPHTB = 5% × 1.420jt = Rp 71.000.000
\`\`\`

### Opsi B — Hibah wasiat (setelah meninggal):
\`\`\`
NPOP = Rp 1.500.000.000
NPOPTKP warisan = Rp 300jt
NPOPKP = 1.500jt − 300jt = Rp 1.200.000.000
BPHTB = 5% × 1.200jt = Rp 60.000.000
\`\`\`

**Selisih:** Opsi B lebih murah Rp 11jt. Tapi Opsi B baru berlaku setelah orang tua meninggal (mungkin 10 tahun lagi). Mending mana? Tergantung kebutuhan.

> **Tip:** Beberapa PERDA daerah memberi NPOPTKP Rp 300jt untuk hibah ke kerabat sederajat (anak ke orang tua atau sebaliknya). Cek PERDA masing-masing daerah ya!

## Kasus 5: PBB untuk Beberapa Properti

Pak Eko punya 3 properti di 3 kota berbeda:

1. Rumah tinggal di Surabaya: NJOP Rp 1,5M (NJOP Bumi 1M, Bangunan 500jt)
2. Apartemen di Jakarta: NJOP Rp 2M (NJOP Bumi 500jt, Bangunan 1,5M)
3. Tanah kebun di Sidoarjo: NJOP Rp 300jt (NJOP Bumi 300jt)

Tarif: Surabaya 0,2%, Jakarta 0,1%, Sidoarjo 0,15%. NJOPTKP semua Rp 10jt.

### Hitung PBB tiap properti:

**1. Rumah Surabaya:**
- NJOPKP = 1,5M − 10jt = Rp 1.490.000.000
- PBB = 0,2% × 1.490jt = Rp 2.980.000/tahun

**2. Apartemen Jakarta:**
- NJOPKP = 2M − 10jt = Rp 1.990.000.000
- PBB = 0,1% × 1.990jt = Rp 1.990.000/tahun

**3. Tanah kebun Sidoarjo:**
- NJOPKP = 300jt − 10jt = Rp 290.000.000
- PBB = 0,15% × 290jt = Rp 435.000/tahun

**Total PBB Pak Eko = 2.980.000 + 1.990.000 + 435.000 = Rp 5.405.000/tahun**

> **Catatan:** Tanah kebun di Sidoarjo → PBB-P2 (urusan Sidoarjo). Kalau tanah perkebunan skala besar (misal luas > 5 hektar, komersial), bisa masuk PBB-P3 (urusan pusat, perkebunan).

## Kasus 6: Beli Tanah untuk Bangun Pabrik

PT Manufaktur Jaya beli tanah senilai Rp 5M (NJOP Rp 4,5M) di Bekasi buat bangun pabrik. Setelah pabrik jadi, NJOP bangunan Rp 3M. Tarif PBB Bekasi 0,2%, NJOPTKP Rp 10jt. Tarif BPHTB 5%, NPOPTKP Rp 80jt.

### Hitung (a) BPHTB saat beli tanah:
\`\`\`
NPOP = max(5M, 4,5M) = Rp 5.000.000.000
NPOPKP = 5M − 80jt = Rp 4.920.000.000
BPHTB = 5% × 4.920jt = Rp 246.000.000
\`\`\`

### Hitung (b) PBB tahunan setelah pabrik jadi:
\`\`\`
NJOP total = NJOP Bumi (4,5M) + NJOP Bangunan (3M) = Rp 7.500.000.000
NJOPKP = 7,5M − 10jt = Rp 7.490.000.000
PBB = 0,2% × 7.490jt = Rp 14.980.000/tahun
\`\`\`

> **Wow!** PBB pabrik Rp 14,98jt/tahun. Belum lagi BPHTB awal Rp 246jt. Total pajak properti pabrik = Rp 246jt + Rp 14,98jt/tahun. Itu sebagian biaya yang harus diperhitungkan PT Manufaktur saat analisis kelayakan investasi.

## Tabel Ringkas: Pajak per Jenis Transaksi Properti

| Transaksi | Pajak Muncul | Bayar Siapa |
|-----------|--------------|-------------|
| Beli tanah/bangunan | BPHTB (5%) + PPh Final 2,5% | Pembeli (BPHTB) + Penjual (PPh Final) |
| Jual tanah/bangunan | PPh Final 2,5% | Penjual |
| Hibah langsung | BPHTB (5%) | Penerima hibah |
| Hibah wasiat | BPHTB (5%) dengan NPOPTKP Rp 300jt | Ahli waris |
| Waris | BPHTB (5%) dengan NPOPTKP Rp 300jt | Ahli waris |
| Tukar-menukar | BPHTB (5%) untuk kedua sisi | Kedua belah pihak |
| Lelang | BPHTB (5%) | Pemenang lelang |
| Pemilik tahunan | PBB-P2 (0,1-0,5%) | Pemilik tiap tahun |
| Sewa tanah/bangunan | PPh Final 4(3) 10% | Penyewa potong, setor ke kas negara |

## Update 2026: Hal Penting Buat WP Properti

- **NJOP bisa naik signifikan** tahun 2026 karena property market recovery. Cek SPPT terbaru.
- **Pemutihan tunggakan PBB** di beberapa daerah (program khusus, cek PERDA).
- **Verifikasi NJOP online** lewat website Bapenda kota.
- **Notaris wajib lapor BPHTB online** sebelum akta. Kalau salah hitung, koreksi susah.
- **Integrasi dengan Coretax DJP** (untuk PPh Final 2,5%) dan Coretax Daerah (untuk BPHTB dan PBB-P2).
- **Carbon tax** untuk industri (termasuk pabrik) akan diperluas: dari PLTU (sudah berjalan) ke sektor industri lain (per PP 40/2025). Bisa menambah biaya operasional pabrik.

## Strategi Hemat Pajak Properti yang Legal

1. **Manfaatkan NPOPTKP**: kalau beli tanah murah (< Rp 80jt), nggak kena BPHTB.
2. **Warisan/hibah wasiat**: NPOPTKP Rp 300jt, hemat dibanding hibah langsung (Rp 80jt).
3. **Bayar PBB dini**: banyak daerah kasih diskon 5-10% kalau bayar sebelum Maret.
4. **Pisah NJOP bumi vs bangunan**: kalau bangunan tua/kecil, minta reklasifikasi NJOP bangunan (bisa lebih rendah).
5. **Hindari spekulasi jual-beli cepat**: setiap transaksi muncul BPHTB 5% + PPh Final 2,5% = 7,5%. Mending hold & sewakan.
6. **Cek PERDA pemutihan**: beberapa daerah kasih diskon BPHTB untuk rumah sederhana.

> **Tip:** Konsultasi dengan konsultan pajak Brevet AB sebelum transaksi properti besar. Hemat pajak legal bisa jutaan bahkan ratusan juta!

## Kesimpulan

Kasus PBB & BPHTB itu sebenarnya polanya tetap:

1. **Saat beli:** Hitung BPHTB (5% × NPOPKP) untuk pembeli + PPh Final 2,5% untuk penjual.
2. **Setiap tahun:** Hitung PBB-P2 (0,1-0,5% × NJOPKP) untuk pemilik.
3. **Saat jual lagi:** Hitung BPHTB baru untuk pembeli baru + PPh Final 2,5% untuk penjual lama.
4. **Waris/hibah wasiat:** NPOPTKP Rp 300jt (lebih hemat dari hibah langsung Rp 80jt).
5. **Tanah kosong vs dengan bangunan:** PBB sama kalau NJOP total sama. Tapi investasinya beda.

Kunci yang harus kamu inget:
- **NPOP = max(transaksi, NJOP)** untuk BPHTB → tidak bisa manipulasi harga rendah.
- **PPh Final 2,5% pakai harga transaksi** (bukan NJOP).
- **NPOPTKP:** Rp 80jt (umum), Rp 300jt (waris/hibah wasiat).
- **3 pajak di transaksi tanah & bangunan:** BPHTB (pembeli), PPh Final (penjual), PBB tahunan (pemilik).

Sudah paham? Lanjut ke PBB Perdesaan & perbedaan P2 vs P3! 🎯
`,
      keyPoints: [
        "Saat beli tanah/bangunan: BPHTB (pembeli) + PPh Final 2,5% (penjual) + PBB tahunan (pemilik baru setelahnya)",
        "BPHTB pakai NPOP = max(harga transaksi, NJOP), PPh Final 2,5% pakai harga transaksi (bukan NJOP)",
        "Tanah kosong vs dengan bangunan: PBB sama jika total NJOP sama. BPHTB juga sama. Beda hanya potensi investasi",
        "Hibah wasiat (lewat wasiat) = NPOPTKP Rp 300jt (dianggap warisan), hemat dibanding hibah langsung (NPOPTKP Rp 80jt)",
        "Total pajak transaksi tanah & bangunan ~7,5% dari nilai transaksi (BPHTB 5% + PPh Final 2,5%)",
        "PBB tahunan pabrik bisa puluhan juta karena NJOP tinggi (tanah + bangunan industri besar)",
        "Strategi hemat pajak properti: bayar dini (diskon), manfaatkan NPOPTKP warisan, hindari spekulasi jual-beli cepat",
        "Notaris wajib lapor BPHTB online sebelum akta dibuat, verifikasi NJOP bisa online di website Bapenda",
      ],
      quiz: [
        {
          id: "ch09-l03-q1",
          question: "Pak Andi beli rumah Rp 850jt (NJOP Rp 900jt) di Surabaya. Berapa BPHTB yang dibayar Pak Andi (NPOPTKP Rp 80jt, tarif 5%)?",
          options: [
            "Rp 41.000.000 (5% × (900jt − 80jt))",
            "Rp 38.500.000 (5% × (850jt − 80jt))",
            "Rp 45.000.000 (5% × 900jt)",
            "Rp 42.500.000 (5% × 850jt)",
          ],
          correctIndex: 0,
          explanation:
            "NPOP = max(850jt, 900jt) = Rp 900jt (NJOP lebih tinggi). NPOPKP = 900jt − 80jt = 820jt. BPHTB = 5% × 820jt = Rp 41jt. Pakai NJOP karena lebih tinggi dari harga transaksi.",
          difficulty: "sedang",
        },
        {
          id: "ch09-l03-q2",
          question: "Bu Sinta jual rumah Rp 1M (NJOP Rp 750jt). Berapa PPh Final 2,5% yang harus dibayar Bu Sinta?",
          options: [
            "Rp 18.750.000 (2,5% × 750jt)",
            "Rp 25.000.000 (2,5% × 1M)",
            "Rp 0 (NJOP lebih rendah)",
            "Rp 5.500.000 (2,5% × 220jt)",
          ],
          correctIndex: 1,
          explanation:
            "PPh Final 2,5% pakai HARGA TRANSAKSI (bukan NJOP). Jadi 2,5% × 1M = Rp 25jt. Beda dengan BPHTB yang pakai max(transaksi, NJOP).",
          difficulty: "sedang",
        },
        {
          id: "ch09-l03-q3",
          question: "Ibu Tini (masih hidup) hibahkan rumah NJOP Rp 1,5M ke anaknya. Berapa BPHTB yang dibayar anak (NPOPTKP hibah Rp 80jt, tarif 5%)?",
          options: [
            "Rp 71.000.000 (5% × (1.500jt − 80jt))",
            "Rp 60.000.000 (5% × (1.500jt − 300jt))",
            "Rp 75.000.000 (5% × 1.500jt)",
            "Rp 0 (hibah ke anak bebas pajak)",
          ],
          correctIndex: 0,
          explanation:
            "Hibah langsung (orang tua masih hidup) → NPOPTKP Rp 80jt (bukan Rp 300jt). NPOPKP = 1.500jt − 80jt = 1.420jt. BPHTB = 5% × 1.420jt = Rp 71jt. Lebih mahal dari warisan (yang NPOPTKP Rp 300jt → BPHTB Rp 60jt).",
          difficulty: "sedang",
        },
        {
          id: "ch09-l03-q4",
          question: "Pak Budi punya rumah NJOP Rp 1M (NJOPTKP Rp 10jt). Tarif PBB 0,2%. PBB tahunan Pak Budi?",
          options: ["Rp 2.000.000", "Rp 1.980.000", "Rp 200.000", "Rp 220.000"],
          correctIndex: 1,
          explanation: "NJOPKP = 1.000jt − 10jt = 990jt. PBB = 0,2% × 990jt = Rp 1.980.000/tahun.",
          difficulty: "mudah",
        },
        {
          id: "ch09-l03-q5",
          question: "Strategi hemat BPHTB untuk pengalihan tanah ke anak (NJOP Rp 1,2M, anak kerabat sederajat):",
          options: [
            "Hibah langsung sekarang (NPOPTKP Rp 80jt) → BPHTB Rp 56jt",
            "Tunggu warisan setelah orang tua meninggal (NPOPTKP Rp 300jt) → BPHTB Rp 45jt",
            "Jual beli dengan harga rendah di akta (NPOPTKP Rp 80jt, NPOP = harga jual)",
            "Hibah wasiat (NPOPTKP Rp 300jt) → BPHTB Rp 45jt",
          ],
          correctIndex: 1,
          explanation:
            "Warisan pakai NPOPTKP Rp 300jt → BPHTB = 5% × (1.200jt − 300jt) = Rp 45jt. Lebih hemat Rp 11jt dibanding hibah langsung (5% × 1.120jt = Rp 56jt). Opsi D juga benar (hibah wasiat = seperti warisan, NPOPTKP Rp 300jt). Opsi C SALAH karena NPOP pakai max(transaksi, NJOP) — tidak bisa manipulasi harga.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Pengalihan Properti Keluarga Hartono",
        description:
          "Keluarga Hartono punya 3 properti: (1) Rumah tinggal NJOP Rp 1,2M atas nama Bapak Hartono; (2) Ruko NJOP Rp 2M atas nama Ibu Hartono; (3) Tanah kebun NJOP Rp 800jt atas nama Bapak. Bapak ingin alihkan (1) ke anak pertama (Pak Andi) dan (2) ke anak kedua (Bu Dewi). Tanah kebun (3) tetap atas nama bapak. Opsi: (A) Hibah langsung sekarang, atau (B) Hibah wasiat (tunggu bapak meninggal). Tarif BPHTB 5%, NPOPTKP hibah Rp 80jt, warisan Rp 300jt. Hitung dan beri rekomendasi.",
        solution:
          "Opsi A — Hibah langsung (NPOPTKP Rp 80jt):\n- Properti (1) ke Pak Andi: NPOPKP = 1.200jt − 80jt = 1.120jt. BPHTB = 5% × 1.120jt = Rp 56.000.000.\n- Properti (2) ke Bu Dewi: NPOPKP = 2.000jt − 80jt = 1.920jt. BPHTB = 5% × 1.920jt = Rp 96.000.000.\n- Total BPHTB Opsi A = Rp 152.000.000.\n\nOpsi B — Hibah wasiat (NPOPTKP Rp 300jt):\n- Properti (1) ke Pak Andi: NPOPKP = 1.200jt − 300jt = 900jt. BPHTB = 5% × 900jt = Rp 45.000.000.\n- Properti (2) ke Bu Dewi: NPOPKP = 2.000jt − 300jt = 1.700jt. BPHTB = 5% × 1.700jt = Rp 85.000.000.\n- Total BPHTB Opsi B = Rp 130.000.000.\n\nSelisih: Opsi B lebih hemat Rp 22.000.000.\n\nRekomendasi: \n- Kalau bapak butuh pengalihan SEKARANG (misal: anak butuh jaminan bank), pakai Opsi A.\n- Kalau pengalihan boleh ditunda sampai bapak meninggal (estate planning), pakai Opsi B — hemat Rp 22jt.\n- Pertimbangkan juga: kerabat sederajat (anak ke orang tua) di beberapa PERDA dapat NPOPTKP Rp 300jt meski hibah langsung. Cek PERDA setempat.\n- Tanah kebun (3) tetap atas nama bapak, nggak kena BPHTB. Kalau nanti diwariskan, kena BPHTB warisan (NPOPTKP Rp 300jt).",
      },
      tags: [
        "kasus PBB BPHTB",
        "NPOP max",
        "PPh final 2,5%",
        "warisan",
        "hibah wasiat",
        "tanah kosong",
        "strategi hemat pajak",
        "estate planning",
      ],
    },
    {
      id: "ch09-l04",
      slug: "pbb-perdesaan-p2",
      title: "PBB Perdesaan & Perbedaan P2 vs P3",
      subtitle:
        "Sejak 2010 PBB jadi pajak daerah; perbedaan P2 vs P3; tarif & dasar hitung; relasi UU HKPD 1/2022",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 14,
      content: `# PBB Perdesaan & Beda P2 vs P3 — Sejarah dan Aturan Terkini 🏘️

Yuk, kita bahas lebih dalam soal **PBB-P2** (Perdesaan & Perkotaan) dan **PBB-P3** (Perkebunan, Perhutanan, Pertambangan). Ini sering bikin salah di ujian karena orang lupa bedanya. Plus sejarah kenapa PBB yang tadinya pajak pusat jadi pajak daerah.

## Sejarah Singkat PBB di Indonesia

\`\`\`
[1985] UU 12/1985 — PBB sebagai Pajak Pusat
        Tarif max 32% (untuk real estate perusahaan)
        Subjek: pemilik tanah/bangunan
        Pemungut: Pemerintah Pusat (DJP)
        ↓
[2010] UU 28/2009 — Pajak Daerah & Retribusi Daerah (PDRD)
        PBB DIALIHKAN ke daerah → PBB-P2 (perdesaan/perkotaan) jadi pajak kab/kota
        PBB-P3 (perkebunan/perhutanan/pertambangan) TETAP di pusat
        Tarif max 0,5% (turun dari 32% lama)
        ↓
[2014] UU 23/2014 — Pemda lebih diberi kewenangan
        Tarif, NJOPTKP, klasifikasi → daerah yang atur via PERDA
        ↓
[2022] UU 1/2022 (UU HKPD — Hubungan Keuangan Pusat-Daerah)
        Aturan terkini yang konsolidasikan pajak daerah
        PBB-P2 = pajak kabupaten/kota
        PBB-P3 = pajak pusat (perkebunan/perhutanan/pertambangan)
        Tarif max 0,5% (P2); tarif khusus (P3)
\`\`\`

## Kenapa PBB Dialihkan ke Daerah?

Ada beberapa alasan kenapa tahun 2010 PBB dialihkan jadi pajak daerah:

1. **Asas Desentralisasi**: Pemda lebih dekat dengan warga, lebih paham kondisi lokal.
2. **Pendapatan Asli Daerah (PAD)**: kas daerah bertambah, buat pembangunan lokal.
3. **Akuntabilitas**: PBB dibayar ke pemda → warga lebih ngerasa "kalo bayar PBB, jalan di depan rumah harus mulus".
4. **Efisiensi administrasi**: Pemda lebih update data NJOP karena dekat dengan objek pajak.
5. **Koreksi dampak**: Pemda bisa kasih diskon PBB buat warga kurang mampu sesuai kondisi lokal.

> **Sebelum 2010**, warga Surabaya bayar PBB ke kas pusat (DJP). Setelah 2010, bayar ke kas Pemda Surabaya. Pemda Surabaya pakai uang itu buat jalan, lampu jalan, drainase, dll di Surabaya.

## PBB-P2: Definisi & Karakteristik

**PBB-P2** = Pajak Bumi dan Bangunan Perdesaan dan Perkotaan.

### Karakteristik PBB-P2:

| Aspek | Keterangan |
|-------|------------|
| **Objek** | Tanah & bangunan di wilayah desa/kota |
| **Subjek** | Orang pribadi/badan yang punya, menikmati, atau menguasai |
| **Tarif** | Maksimal 0,5% × NJOPKP (PERDA) |
| **NJOPTKP** | Min Rp 10jt per objek |
| **Pemungut** | Pemda Kabupaten/Kota |
| **Dasar Hukum** | UU HKPD 1/2022 + PERDA setempat |
| **SPT** | SPPT (Surat Pemberitahuan Pajak Terutang) |

### Yang TIDAK termasuk PBB-P2:

- Tanah perkebunan komersial skala besar → PBB-P3
- Hutan (hutan tanaman industri, hutan negara) → PBB-P3
- Tanah pertambangan → PBB-P3
- Wilayah di luar desa/kota (perairan, dll) → khusus

## PBB-P3: Definisi & Karakteristik

**PBB-P3** = Pajak Bumi dan Bangunan Perkebunan, Perhutanan, dan Pertambangan.

### Karakteristik PBB-P3:

| Aspek | Keterangan |
|-------|------------|
| **Objek** | Tanah yang dipakai untuk perkebunan, kehutanan, pertambangan |
| **Subjek** | Badan usaha yang mengelola perkebunan/hutan/tambang |
| **Tarif** | Khusus, sesuai peraturan (tidak 0,5%) |
| **Pemungut** | Pemerintah Pusat (DJP) |
| **Dasar Hukum** | UU HKPD 1/2022 + PP terkait sektor |
| **SPT** | SPT Tahunan PBB-P3 (dilaporkan ke DJP) |

### Tanah yang termasuk PBB-P3:

- Tanah HGU (Hak Guna Usaha) untuk perkebunan kelapa sawit, karet, teh, dll
- Hutan tanaman industri (HTI) untuk pembalakan komersial
- Wilayah pertambangan (IUP, IUPK)
- Kontrak karya (CoW) untuk pertambangan mineral dan batubara

> **Bedanya dengan PBB-P2:** PBB-P3 objeknya usaha skala besar (komersial), PBB-P2 objeknya rumah/toko/gedung biasa. PBB-P3 masih urusan pusat karena strategis untuk nasional.

## Tarif PBB-P3 (Khusus)

PBB-P3 tidak pakai tarif 0,5% seperti P2. Tarifnya khusus per jenis sektor:

| Sektor | Dasar Hitung | Tarif |
|--------|--------------|-------|
| Perkebunan | Luas lahan × tarif per hektar (sesuai jenis tanaman) | Beragam, contoh: Rp 30.000-50.000/ha |
| Perhutanan (HTI) | Luas hutan × tarif per ha | Beragam, biasanya Rp 20.000-40.000/ha |
| Pertambangan | Luas wilayah tambang × tarif per ha | Beragam, bisa puluhan ribu sampai ratusan ribu per ha |

> **Contoh:** PT Sawit Jaya punya HGU 1.000 ha kebun sawit. Tarif PBB-P3 perkebunan (misal) Rp 40.000/ha. PBB-P3 = 1.000 × 40.000 = Rp 40.000.000/tahun.

## Tabel Komparasi PBB-P2 vs PBB-P3

| Aspek | PBB-P2 | PBB-P3 |
|-------|--------|--------|
| Kepanjangan | Perdesaan & Perkotaan | Perkebunan, Perhutanan, Pertambangan |
| Sejak | 2010 (UU 28/2009) | 2010 (UU 28/2009) |
| Objek | Tanah + bangunan desa/kota | Tanah perkebunan/hutan/tambang |
| Subjek | Orang pribadi/badan (pemilik/penikmat/penguasa) | Badan usaha pengelola sektor |
| Tarif | Maks 0,5% × NJOPKP | Khusus per sektor |
| NJOPTKP | Min Rp 10jt | Tidak ada (langsung full kena pajak) |
| Pemungut | Pemda Kabupaten/Kota | Pemerintah Pusat (DJP) |
| SPT | SPPT (tahunan) | SPT Tahunan PBB-P3 |
| Pelaporan | Pemda otomatis kirim SPPT | Wajib lapor mandiri ke DJP |
| Update NJOP | Pemda via PERDA | Pemda via PERDA (NJOP) + DJP |

## Hubungan dengan UU HKPD 1/2022

UU HKPD (Hubungan Keuangan Pusat-Daerah) 1/2022 itu aturan **payung** buat semua pajak daerah. Beberapa hal penting dari UU HKPD terkait PBB:

### 1. PBB sebagai Pajak Wajib Kabupaten/Kota

UU HKPD mewajibkan setiap kabupaten/kota **wajib memungut** PBB-P2 (sebelumnya opsional). Maksudnya: tidak ada kab/kota yang boleh tidak punya PERDA PBB-P2.

### 2. Tarif PBB Max 0,5%

Tarif maksimal PBB-P2 = 0,5% × NJOPKP. Tapi tiap daerah boleh menetapkan lebih rendah via PERDA. DKI Jakarta pakai 0,1% (turun dari 0,2% di 2025), Surabaya 0,2%, Bandung 0,15%.

### 3. NJOPTKP Minimal Rp 10jt

Setiap daerah wajib menetapkan NJOPTKP minimal Rp 10jt per objek pajak. Boleh lebih tinggi (misal Rp 12jt di Bandung).

### 4. Klasifikasi Objek PBB

Pemda wajib klasifikasikan objek PBB (perumahan rakyat, menengah, mewah, komersial, industri). Tujuannya: tarif bisa beda per klasifikasi (perumahan rakyat lebih murah).

### 5. Pengecualian untuk Rumah Sederhana

Banyak daerah kasih tarif PBB lebih rendah atau NJOPTKP lebih tinggi untuk rumah sederhana (RSS, rumah type 21, 36). Tujuannya: melindungi warga kelas bawah.

## Aturan Tambahan: Tanah yang Tidak Kena PBB

Beberapa objek dikecualikan dari PBB (UU HKPD):

| Objek | Alasan |
|-------|--------|
| Tanah & bangunan dipakai tempat ibadah | Untuk kepentingan agama |
| Tanah & bangunan dipakai rumah sakit umum/puskesmas | Untuk kesehatan publik |
| Tanah & bangunan dipakai pendidikan gratis | Untuk pendidikan publik |
| Tanah & bangunan dipakai balai sosial | Untuk sosial |
| Tanah & bangunan dipakai pemerintah | Untuk pemerintahan |
| Tanah & bangunan kuburan | Untuk umum |
| Tanah & bangunan cagar budaya | Untuk warisan budaya |
| Hutan lindung, taman nasional | Untuk konservasi |

## Update 2026 di Era Digitalisasi Pemda

- **SPPT elektronik**: banyak daerah nggak kirim SPPT fisik, diganti email/SMS. Cek email aktif!
- **Online payment**: PBB bisa dibayar via m-banking, e-wallet (OVO, GoPay, ShopeePay), minimarket (Indomaret, Alfamart).
- **Coretax Daerah**: tiap pemda punya sistem sendiri (DKI: e-PBB, Surabaya: SISMIMOP, dll). Belum terpusat seperti Coretax DJP.
- **Diskon pembayaran dini**: banyak daerah kasih diskon 5-10% kalau bayar PBB sebelum Maret atau April.
- **Pemutihan tunggakan**: beberapa daerah kasih program pemutihan PBB tunggakan (bebas denda + cicilan).

## Tabel: Tarif PBB Beberapa Kota Besar (Update 2026)

| Kota | Tarif PBB-P2 | NJOPTKP | Catatan |
|------|--------------|---------|---------|
| DKI Jakarta | 0,1% | Rp 10jt | Turun dari 0,2% di 2025 |
| Surabaya | 0,2% | Rp 10jt | Stabil |
| Bandung | 0,15% | Rp 12jt | Naik dari 0,1% di 2025 |
| Semarang | 0,12% | Rp 10jt | — |
| Medan | 0,18% | Rp 10jt | — |
| Bekasi | 0,2% | Rp 10jt | — |
| Bogor | 0,2% | Rp 10jt | — |
| Depok | 0,2% | Rp 10jt | — |
| Tangerang | 0,2% | Rp 10jt | — |
| Yogyakarta | 0,15% | Rp 10jt | — |
| Makassar | 0,18% | Rp 10jt | — |
| Palembang | 0,15% | Rp 10jt | — |

> **Catatan:** Tarif bisa berubah tiap tahun sesuai PERDA. Selalu cek website Bapenda setempat!

## Sanksi PBB (Sesuai PERDA Masing-Masing)

| Pelanggaran | Sanksi Umum |
|-------------|-------------|
| Telat bayar PBB | Bunga 2%/bln (maks 24 bln) |
| Tidak daftar objek baru | Denda 25-100% dari PBB setahun |
| Salah lapor NJOP | Koreksi + denda |
| Tidak lapor SPT PBB-P3 | Denda sesuai KUP |
| Manipulasi NJOP | Pidana sesuai UU |

> **Bedanya sanksi PBB vs PPh:** PBB sanksinya diatur PERDA (umumnya 2%/bln). PPh sanksinya MIR (0,6%/bln di Agustus 2026). Jadi sanksi PBB lebih tinggi!

## Cara Bayar PBB-P2

1. **Cek SPOT**: cek email atau website Bapenda kota. Catat No. Objek Pajak (NOP).
2. **Bayar**:
   - Kantor pos
   - Bank (BRI, BNI, Mandiri, BCA)
   - M-banking
   - E-wallet (OVO, GoPay, ShopeePay)
   - Minimarket (Indomaret, Alfamart)
3. **Simpan bukti**: STTS (Surat Tanda Terima Setoran) untuk arsip.

## Cara Bayar PBB-P3

1. **Hitung PBB-P3**: sesuai tarif per hektar × luas.
2. **Lapor SPT Tahunan PBB-P3** ke DJP (sebelum 30 April tahun berikutnya).
3. **Bayar** via e-billing Coretax DJP.

## Kasus: Perkebunan Sawit Skala Besar

PT Sawit Lestari punya HGU 2.500 ha kebun sawit di Kalimantan Tengah. Tarif PBB-P3 perkebunan (sesuai PERDA & peraturan pusat) Rp 45.000/ha/tahun.

### Hitung PBB-P3:
- PBB-P3 = 2.500 × Rp 45.000 = Rp 112.500.000/tahun

### Bayar:
PT Sawit Lestari lapor SPT Tahunan PBB-P3 ke DJP sebelum 30 April 2027 (untuk PBB tahun 2026). Bayar via e-billing Coretax.

### Jurnal:

| Akun | Debit | Kredit |
|------|------|--------|
| Beban PBB-P3 | 112.500.000 | |
| Kas/Bank | | 112.500.000 |

## Beda Pelaporan PBB-P2 vs PBB-P3 (Sering Keluar di Ujian!)

| Aspek | PBB-P2 | PBB-P3 |
|-------|--------|--------|
| Pelaporan | SPPT dikirim pemda | SPT Tahunan ke DJP |
| Deadline | Jatuh tempo SPPT (30 Sep/31 Agu) | 30 April tahun berikutnya |
| Pembayaran | Bayar ke pemda (kantor pos, bank, dll) | e-billing Coretax DJP |
| Bukti | STTS dari pemda | NTPN dari DJP |
| Sanksi telat | Bunga 2%/bln (PERDA) | Bunga MIR 0,6%/bln (KUP) |
| Penerima | Kas daerah | Kas pusat |

## Update 2026: Integrasi Coretax DJP vs Coretax Daerah

- **Coretax DJP**: untuk pajak pusat (PPh, PPN, PBB-P3, Bea Materai). Sudah live sejak 1 Jan 2025.
- **Coretax Daerah**: TIAP pemda punya sistem sendiri untuk pajak daerah (PBB-P2, BPHTB, Pajak Hotel, Pajak Restoran, dll). Belum terpusat seperti Coretax DJP.
- **Integrasi**: di 2026, beberapa kota sudah coba integrasi data NJOP antara Coretax DJP (untuk PPh Final 2,5%) dan Coretax Daerah (untuk BPHTB, PBB-P2).
- **Masa depan**: kemungkinan akan ada satu sistem terpadu (Coretax Nasional) yang menggabungkan pajak pusat + daerah. Tapi masih jangka panjang.

## Kesimpulan

PBB itu sekarang ada dua jenis:
1. **PBB-P2** = urusan daerah kab/kota, untuk tanah & bangunan desa/kota. Tarif max 0,5%, NJOPTKP min Rp 10jt.
2. **PBB-P3** = urusan pusat (DJP), untuk perkebunan, perhutanan, pertambangan. Tarif khusus per sektor.

Kunci yang harus kamu inget:
- Sejak 2010 (UU 28/2009) & diperbarui UU HKPD 1/2022, PBB-P2 jadi urusan pemda.
- PBB-P2: tarif max 0,5%, NJOPTKP min Rp 10jt, pemungut pemda.
- PBB-P3: tarif khusus per sektor, pemungut DJP.
- PBB-P3 tidak pakai NJOPTKP (langsung full kena pajak).
- Beberapa objek dikecualikan: tempat ibadah, RS publik, pendidikan gratis, dll.

Paham kan? Bab ini udah lengkap. Lanjut ke bab Bea Materai! 📜
`,
      keyPoints: [
        "Sejak 2010 (UU 28/2009) & diperbarui UU HKPD 1/2022, PBB dialihkan dari pajak pusat jadi pajak daerah (PBB-P2)",
        "PBB-P2 = Pajak Bumi dan Bangunan Perdesaan dan Perkotaan, urusan Pemda Kabupaten/Kota, tarif max 0,5%, NJOPTKP min Rp 10jt",
        "PBB-P3 = Pajak Bumi dan Bangunan Perkebunan, Perhutanan, Pertambangan, urusan Pemerintah Pusat (DJP), tarif khusus per sektor",
        "PBB-P3 TIDAK pakai NJOPTKP — langsung full kena pajak sesuai luas lahan × tarif per ha",
        "Alasan alih PBB ke daerah: desentralisasi, PAD, akuntabilitas, efisiensi, koreksi dampak lokal",
        "Tarif PBB tiap kota beda sesuai PERDA (DKI 0,1%, Surabaya 0,2%, Bandung 0,15%, dll)",
        "Sanksi PBB diatur PERDA, umumnya bunga 2%/bln (lebih tinggi dari MIR PPh 0,6%/bln)",
        "Objek dikecualikan PBB: tempat ibadah, RS publik, pendidikan gratis, kuburan, cagar budaya, hutan lindung",
      ],
      quiz: [
        {
          id: "ch09-l04-q1",
          question: "Sejak tahun berapa PBB dialihkan dari pajak pusat menjadi pajak daerah (PBB-P2)?",
          options: ["1985", "2010", "2014", "2022"],
          correctIndex: 1,
          explanation:
            "UU 28/2009 tentang PDRD efektif 1 Januari 2010 mengalihkan PBB jadi PBB-P2 (urusan daerah). UU HKPD 1/2022 kemudian memperbarui aturan ini.",
          difficulty: "mudah",
        },
        {
          id: "ch09-l04-q2",
          question: "Berikut yang termasuk objek PBB-P3 (bukan PBB-P2) adalah?",
          options: [
            "Rumah tinggal di Surabaya",
            "Toko kelontong di Jakarta",
            "Kebun sawit HGU 500 hektar di Kalimantan",
            "Apartemen mewah di Bandung",
          ],
          correctIndex: 2,
          explanation:
            "PBB-P3 = perkebunan, perhutanan, pertambangan. Kebun sawit HGU skala besar masuk PBB-P3 (urusan pusat/DJP). Lainnya = PBB-P2 (urusan daerah).",
          difficulty: "sedang",
        },
        {
          id: "ch09-l04-q3",
          question: "Bedanya PBB-P2 dan PBB-P3 dari segi pemungut:",
          options: [
            "PBB-P2 dipungut DJP, PBB-P3 dipungut Pemda",
            "PBB-P2 dipungut Pemda Kab/Kota, PBB-P3 dipungut DJP (pusat)",
            "Keduanya dipungut Pemda",
            "Keduanya dipungut DJP",
          ],
          correctIndex: 1,
          explanation:
            "PBB-P2 = pajak daerah (Pemda Kab/Kota). PBB-P3 = pajak pusat (DJP). Ini perbedaan utama yang sering keluar di ujian.",
          difficulty: "sedang",
        },
        {
          id: "ch09-l04-q4",
          question: "Berikut objek yang dikecualikan dari PBB, KECUALI:",
          options: [
            "Tempat ibadah (mesjid, gereja, pura)",
            "Rumah sakit umum pemerintah",
            "Apartemen mewah pemilik pribadi",
            "Tanah cagar budaya",
          ],
          correctIndex: 2,
          explanation:
            "Apartemen mewah = objek PBB-P2 (tidak dikecualikan). Yang dikecualikan: tempat ibadah, RS publik, pendidikan gratis, kuburan, cagar budaya, hutan lindung.",
          difficulty: "mudah",
        },
        {
          id: "ch09-l04-q5",
          question: "PT Sawit punya HGU 1.000 ha, tarif PBB-P3 perkebunan Rp 40.000/ha/tahun. Berapa PBB-P3 PT Sawit per tahun?",
          options: [
            "Rp 4.000.000",
            "Rp 40.000.000",
            "Rp 4.000.000.000",
            "Rp 400.000",
          ],
          correctIndex: 1,
          explanation:
            "PBB-P3 = luas lahan × tarif per ha = 1.000 × Rp 40.000 = Rp 40.000.000/tahun. Tidak pakai NJOPTKP (langsung full kena pajak).",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: PT Agro Lestari — Klasifikasi PBB P2 vs P3",
        description:
          "PT Agro Lestari punya 4 properti: (1) Kantor pusat di Jakarta (NJOP Rp 5M); (2) Pabrik pengolahan di Bekasi (NJOP Rp 3M); (3) Kebun sawit HGU 800 ha di Riau (tarif PBB-P3 Rp 40.000/ha); (4) Rumah dinas direktur di Jakarta (NJOP Rp 1,5M). Hitung total PBB PT Agro Lestari per tahun (tarif PBB Jakarta 0,1%, Bekasi 0,2%, NJOPTKP Rp 10jt).",
        solution:
          "(1) Kantor pusat Jakarta — PBB-P2:\n- NJOPKP = 5M − 10jt = Rp 4.990.000.000\n- PBB = 0,1% × 4.990jt = Rp 4.990.000/tahun\n\n(2) Pabrik Bekasi — PBB-P2:\n- NJOPKP = 3M − 10jt = Rp 2.990.000.000\n- PBB = 0,2% × 2.990jt = Rp 5.980.000/tahun\n\n(3) Kebun sawit Riau — PBB-P3:\n- PBB-P3 = 800 × Rp 40.000 = Rp 32.000.000/tahun\n\n(4) Rumah dinas direktur Jakarta — PBB-P2:\n- NJOPKP = 1.500jt − 10jt = Rp 1.490.000.000\n- PBB = 0,1% × 1.490jt = Rp 1.490.000/tahun\n\nTotal PBB PT Agro Lestari per tahun:\n- PBB-P2 (Pemda): 4.990.000 + 5.980.000 + 1.490.000 = Rp 12.460.000 (dibayar ke Pemda DKI & Bekasi)\n- PBB-P3 (DJP): Rp 32.000.000 (dibayar via e-billing Coretax DJP)\n- TOTAL: Rp 44.460.000/tahun\n\nCatatan: PBB-P2 dibayar ke masing-masing pemda (DKI untuk kantor & rumah dinas, Bekasi untuk pabrik). PBB-P3 dibayar ke DJP lewat SPT Tahunan PBB-P3 (deadline 30 April tahun berikutnya).",
      },
      tags: [
        "PBB-P2",
        "PBB-P3",
        "pajak daerah",
        "pajak pusat",
        "perkebunan",
        "perhutanan",
        "pertambangan",
        "UU HKPD 1/2022",
        "desentralisasi pajak",
      ],
    },
  ],
  exam: [
    {
      id: "ch09-e1",
      question: "Sejak tahun berapa PBB dialihkan dari pajak pusat menjadi pajak daerah (PBB-P2)?",
      options: ["1985", "2010", "2014", "2022"],
      correctIndex: 1,
      explanation: "Sejak 1 Januari 2010 (UU 28/2009), PBB dialihkan menjadi PBB-P2 (urusan Pemda Kabupaten/Kota).",
      difficulty: "mudah",
    },
    {
      id: "ch09-e2",
      question: "Tarif maksimal PBB-P2 sesuai UU HKPD 1/2022 adalah?",
      options: ["0,1%", "0,3%", "0,5%", "1%"],
      correctIndex: 2,
      explanation: "Tarif maksimal PBB-P2 = 0,5% dari NJOPKP. Tiap daerah boleh menetapkan lebih rendah via PERDA (contoh DKI 0,1%).",
      difficulty: "mudah",
    },
    {
      id: "ch09-e3",
      question: "Pak Budi beli rumah Rp 850jt (NJOP Rp 900jt) di Surabaya. NPOPTKP Rp 80jt, tarif BPHTB 5%. Berapa BPHTB yang dibayar Pak Budi?",
      options: ["Rp 41.000.000", "Rp 38.500.000", "Rp 45.000.000", "Rp 42.500.000"],
      correctIndex: 0,
      explanation: "NPOP = max(850jt, 900jt) = Rp 900jt (NJOP lebih tinggi). NPOPKP = 900jt − 80jt = 820jt. BPHTB = 5% × 820jt = Rp 41jt.",
      difficulty: "sedang",
    },
    {
      id: "ch09-e4",
      question: "Siapa yang wajib membayar BPHTB saat transaksi jual beli tanah?",
      options: ["Penjual", "Pembeli", "Notaris", "Pemerintah"],
      correctIndex: 1,
      explanation: "BPHTB = Bea PEROLEHAN Hak. Yang memperoleh = pembeli. Jadi pembeli yang bayar. Penjual bayar PPh Final 2,5%.",
      difficulty: "mudah",
    },
    {
      id: "ch09-e5",
      question: "NPOPTKP minimal untuk warisan/hibah wasiat:",
      options: ["Rp 10.000.000", "Rp 80.000.000", "Rp 300.000.000", "Rp 500.000.000"],
      correctIndex: 2,
      explanation: "Warisan/hibah wasiat NPOPTKP minimal Rp 300jt. Hibah langsung (orang tua masih hidup) Rp 80jt. Itu kenapa strategi warisan lebih hemat.",
      difficulty: "sedang",
    },
    {
      id: "ch09-e6",
      question: "PBB-P3 (perkebunan/perhutanan/pertambangan) dipungut oleh?",
      options: ["Pemda Kabupaten/Kota", "Pemda Provinsi", "Pemerintah Pusat (DJP)", "Notaris"],
      correctIndex: 2,
      explanation: "PBB-P3 masih urusan Pemerintah Pusat (DJP). Hanya PBB-P2 yang dialihkan ke daerah sejak 2010.",
      difficulty: "sedang",
    },
    {
      id: "ch09-e7",
      question: "Bu Sinta jual rumah Rp 1M (NJOP Rp 750jt). Berapa PPh Final 2,5% yang harus dibayar Bu Sinta?",
      options: ["Rp 25.000.000 (2,5% × 1M)", "Rp 18.750.000 (2,5% × 750jt)", "Rp 50.000.000 (5% × 1M)", "Rp 0"],
      correctIndex: 0,
      explanation: "PPh Final 2,5% pakai HARGA TRANSAKSI (bukan NJOP). 2,5% × 1M = Rp 25jt. Berbeda dengan BPHTB yang pakai max(transaksi, NJOP).",
      difficulty: "sedang",
    },
    {
      id: "ch09-e8",
      question: "NJOPTKP (NJOP Tidak Kena Pajak) minimal untuk PBB-P2 adalah?",
      options: ["Rp 1.000.000", "Rp 5.000.000", "Rp 10.000.000", "Rp 80.000.000"],
      correctIndex: 2,
      explanation: "NJOPTKP minimal Rp 10jt per objek pajak (sesuai UU HKPD 1/2022). Beberapa daerah menetapkan lebih tinggi (misal Bandung Rp 12jt).",
      difficulty: "mudah",
    },
    {
      id: "ch09-e9",
      question: "Berikut yang TIDAK dikecualikan dari PBB:",
      options: [
        "Tempat ibadah (mesjid, gereja)",
        "Rumah sakit umum pemerintah",
        "Apartemen mewah milik pribadi",
        "Tanah cagar budaya",
      ],
      correctIndex: 2,
      explanation: "Apartemen mewah = objek PBB (tidak dikecualikan). Yang dikecualikan: tempat ibadah, RS publik, pendidikan gratis, kuburan, cagar budaya, hutan lindung.",
      difficulty: "sedang",
    },
    {
      id: "ch09-e10",
      question: "Sanksi keterlambatan bayar PBB-P2 diatur oleh:",
      options: [
        "KUP (UU PPh) — bunga MIR 0,6%/bln",
        "PERDA masing-masing daerah — umumnya 2%/bln",
        "UU PPN — 5%/bln",
        "KMK MIR — 1,02%/bln",
      ],
      correctIndex: 1,
      explanation: "Sanksi PBB-P2 diatur PERDA masing-masing daerah, umumnya bunga 2%/bln (lebih tinggi dari MIR PPh 0,6%/bln).",
      difficulty: "sulit",
    },
  ],
}
