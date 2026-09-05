import type { Chapter } from "../types"

// ============================================================================
// BAB 10: BEA MATERAI
// ============================================================================

export const chapter10: Chapter = {
  id: "ch10",
  slug: "bea-materai",
  number: 10,
  title: "Bea Materai",
  shortTitle: "Materai",
  description:
    "Bea Materai 2026 (UU 10/2020): tarif tunggal Rp 10.000, jenis dokumen kena materai, e-Materai, dan integrasi dengan Coretax. Plus sanksi kalau telat/tidak ber-materai.",
  icon: "Stamp",
  color: "yellow",
  difficulty: "pemula",
  estimatedMinutes: 120,
  objectives: [
    "Paham dasar hukum & sejarah Bea Materai (UU 10/2020, efektif 1 Jan 2021)",
    "Ngerti tarif tunggal Rp 10.000 dan perbedaan dari sistem lama (Rp 3.000/6.000)",
    "Bisa identifikasi jenis dokumen yang kena Bea Materai (satu sisi, dua sisi, dll)",
    "Paham cara pembayaran: e-Materai, materai tempel, meterai mesin",
    "Tau sanksi dokumen tanpa materai & integrasi Coretax 2026",
  ],
  lessons: [
    {
      id: "ch10-l01",
      slug: "pengertian-bea-materai-2026",
      title: "Pengertian & Dasar Hukum Bea Materai 2026",
      subtitle:
        "UU 10/2020; tarif tunggal Rp 10.000 sejak 1 Jan 2021; perubahan dari sistem Rp 3.000/6.000",
      type: "materi",
      difficulty: "pemula",
      estimatedMinutes: 14,
      content: `# Pengertian & Dasar Hukum Bea Materai 2026 📜

Yuk, kita masuk ke bab **Bea Materai**. Topik ini keluar hampir pasti di ujian Brevet AB, dan gampang-gampang susah. Gampang karena konsepnya simpel, susah karena banyak detail aturan. Yuk kita bedah dari awal!

## Apa Itu Bea Materai?

Bea Materai adalah **pajak atas dokumen** yang dibayarkan ke kas negara. Tujuannya: memberi kekuatan hukum (formal) pada dokumen, dan jadi sumber penerimaan negara.

> **Definisi resmi (UU 10/2020):** "Bea Materai adalah pajak yang dikenakan atas Dokumen yang menggunakan Materai sebagai alat pembayaran."

Jadi Bea Materai itu pajak yang dipungut lewat pembelian materai (cap/tempel/e-Materai). Fungsinya buat kasih "status resmi" ke dokumen, biar bisa dipakai sebagai alat bukti di pengadilan.

## Sejarah Singkat Bea Materai

\`\`\`
[1985-2020] UU 13/1985 — Bea Materai Lama
            Tarif bertingkat: Rp 3.000 (DPP ≤ Rp 1jt) dan Rp 6.000 (DPP > Rp 1jt)
            Materai tempel fisik, banyak dipalsukan
            ↓
[2021-sekarang] UU 10/2020 — Bea Materai Baru (efektif 1 Januari 2021)
                Tarif TUNGGAL: Rp 10.000 per dokumen
                Materai tempel + e-Materai + meterai mesin
                + komputerisasi & validasi via Coretax (sejak 2025)
\`\`\`

## UU 10/2020 — Dasar Hukum Terkini

**Undang-Undang Nomor 10 Tahun 2020 tentang Bea Materai** — efektif 1 Januari 2021. Ini aturan yang berlaku di 2026.

### Yang baru di UU 10/2020:

| Aspek | UU Lama (13/1985) | UU Baru (10/2020) |
|-------|-------------------|---------------------|
| **Tarif** | Bertingkat: Rp 3.000 / Rp 6.000 | Tunggal: **Rp 10.000** |
| **Dasar hitung** | Nilai dokumen (Rp 1jt sebagai pemisah) | Tetap, semua dokumen sama |
| **Cara bayar** | Materai tempel fisik | Tempel + e-Materai + meterai mesin |
| **Validasi** | Manual (cap) | Digital (QR code, hash) |
| **Jenis dokumen** | Terbatas | Lebih luas, termasuk dokumen elektronik |
| **Sanksi** | 200% dari bea materai | Tetap, sesuai administrasi |

> **Kenapa tarif naik ke Rp 10.000?** Inflasi dari 1985 ke 2020 ~6x. Tarif lama sudah tidak relevan. Plus, sistem tunggal lebih simpel: nggak perlu mikir berapa tarif, semua dokumen Rp 10.000.

## Tarif Tunggal Rp 10.000

Di 2026, **semua dokumen yang kena Bea Materai tarifnya sama: Rp 10.000 per dokumen**. Tidak ada lagi pemisah Rp 1jt seperti dulu.

### Contoh:
- Kontrak jual beli rumah Rp 50jt → materai Rp 10.000
- Kontrak jual beli rumah Rp 5M → materai Rp 10.000 (sama!)
- Surat perjanjian hutang Rp 100jt → materai Rp 10.000
- Surat pernyataan Rp 1.000 (tapi sudah kena materai) → materai Rp 10.000

> **Tip ujian:** Kalau ditanya "berapa bea materai untuk dokumen Rp X", jawabannya **Rp 10.000** (selama dokumen itu kena materai). Nggak peduli nilai dokumennya berapa.

## Konsep Dokumen & Materai

### Dokumen (definisi UU 10/2020):
> "Dokumen adalah kertas yang memuat keterangan, informasi, pernyataan, dan/atau pertanyaan yang ditandatangani oleh pembuat dokumen untuk kepentingan pembuktian."

Termasuk juga **dokumen elektronik** (e-Document) yang ditandatangani secara elektronik (TTE - Tanda Tangan Elektronik).

### Materai (alat pembayaran):
1. **Materai Tempel** — cap/stempel kertas yang ditempel di dokumen fisik.
2. **Meterai Mesin** — stempel yang dipakai untuk dokumen massal (notaris, bank, dll).
3. **e-Materai** — materai elektronik berbentuk QR code, validasi online.

## Tujuan Bea Materai

Buat apa sih Bea Materai?

1. **Sumber PAD negara** — target penerimaan 2026: ~Rp 12 triliun (masuk kas pusat).
2. **Authentieke act** — dokumen ber-materai punya kekuatan hukum formal sebagai alat bukti di pengadilan.
3. **Pencegahan manipulasi** — dokumen ber-materai lebih sulit dipalsukan.
4. **Transparansi transaksi** — pemerintah bisa lacak transaksi via dokumen ber-materai.

## Beda Materai Tempel vs e-Materai vs Meterai Mesin

| Jenis | Bentuk | Cocok untuk | Validasi |
|-------|--------|-------------|----------|
| **Materai Tempel** | Fisik (kertas tempel) | Dokumen fisik, transaksi kecil | Manual (lihat cap) |
| **e-Materai** | Digital (QR code) | Dokumen elektronik (PDF), transaksi online | Scan QR, cek di Coretax |
| **Meterai Mesin** | Mesin khusus cetak cap | Notaris, bank, dokumen massal | Sistem internal + laporan ke DJP |

> **Update 2026:** e-Materai udah sangat umum. Hampir semua perusahaan besar pakai e-Materai untuk kontrak, SK, dan dokumen elektronik lain. Integrasi dengan Coretax DJP untuk validasi real-time.

## Karakteristik Bea Materai

Bea Materai punya beberapa karakteristik unik dibanding pajak lain:

| Karakteristik | Penjelasan |
|---------------|-----------|
| **Objeknya dokumen** | Bukan penghasilan, bukan transaksi |
| **Bayar dimuka** | Saat dokumen dibuat, bukan saat jatuh tempo |
| **Tarif tetap** | Rp 10.000 untuk semua dokumen (tunggal) |
| **Setoran ke kas pusat** | Bukan pajak daerah |
| **Tidak proporsional** | Tidak tergantung nilai dokumen |
| **Bisa dipungut pihak lain** | Notaris, bank, PPP (Pemungut Pihak Ketiga) |

## Yang TIDAK Kena Bea Materai

Beberapa dokumen dikecualikan dari Bea Materai (UU 10/2020 Pasal 4):

1. **Dokumen diplomatik & konsuler** (surat-surat dari/ke kedutaan).
2. **Dokumen pemerintah** untuk kepentingan pemerintahan (SK PNS, dll).
3. **Dokumen perjanjian internasional** sesuai P3B.
4. **Buku tabungan, cek, bilyet giro** (sudah kena pajak lain).
5. **Konosemen, polis asuransi, dan dokumen transport** tertentu.
6. **Dokumen keagamaan** (akta nikah, dll).
7. **Ijazah, rapor, STTB** (dokumen pendidikan).
8. **Dokumen perpindahan penduduk** (KTP, KK, paspor).
9. **Kuitansi untuk pembayaran dari kas negara/daerah** (gaji PNS, dll).
10. **Bukti penerimaan uang muka** untuk kontrak yang sudah dikenai materai penuh.

> **Hati-hati:** Kuitansi pembayaran pribadi (tidak dari kas negara) TETAP kena materai kalau nilai transaksinya ≥ Rp 5jt. Pengecualian cuma buat yang dari kas pemerintah.

## Update 2026 di Era Coretax

- **e-Materai terintegrasi dengan Coretax DJP** — pembelian, validasi, dan pelaporan otomatis.
- **Validasi QR code real-time** — setiap e-Materai punya QR unik, bisa dicek keasliannya di app Coretax.
- **Peredaran materai tempel palsu** menurun signifikan karena migrasi ke e-Materai.
- **Notaris & PPP wajib lapor** bulanan ke DJP via Coretax.
- **Dokumen elektronik setara dokumen fisik** — bisa dipakai sebagai alat bukti di pengadilan.

## Tabel: Perubahan Tarif Materai dari Masa ke Masa

| Periode | Tarif | Dasar Hukum |
|---------|-------|-------------|
| 1985-1992 | Rp 1.000 + Rp 2.000 + Rp 5.000 + Rp 10.000 + Rp 20.000 (5 tingkat) | UU 13/1985 (asli) |
| 1992-2000 | Rp 1.000 + Rp 2.000 + Rp 5.000 + Rp 10.000 + Rp 20.000 | UU 13/1985 (amandemen) |
| 2000-2020 | Rp 3.000 (≤ Rp 1jt) + Rp 6.000 (> Rp 1jt) | UU 13/1985 (revisi 2000) |
| **2021-sekarang** | **Rp 10.000 tunggal** | **UU 10/2020** |

> **Perubahan besar:** Dari tarif bertingkat (3rb/6rb) ke tarif tunggal (10rb). Tujuannya: simpel, mudah dihitung, dan kurangi celah salah tarif.

## Dasar Hukum Lengkap Bea Materai 2026

Berikut daftar aturan yang jadi dasar Bea Materai di 2026:

1. **UU 10/2020** — UU Bea Materai (utama)
2. **PMK 47/PMK.03/2021** — Peraturan pelaksana UU 10/2020
3. **PMK 134/PMK.03/2021** — Tata cara pembelian & penggunaan e-Materai
4. **KMK terkait** — Penunjuk PPP (Pemungut Pihak Ketiga)
5. **PER DJP** — Tata cara administrasi & validasi

## Kenapa Dokumen Perlu Materai?

Bea Materai bukan cuma pajak, tapi juga:

1. **Authentieke act** — dokumen ber-materai dianggap sah secara formal.
2. **Bukti legal** — bisa dipakai di pengadilan tanpa perlu pembuktian tambahan.
3. **Transparansi** — pemerintah bisa lacak transaksi via dokumen.
4. **Sumber penerimaan** — kas negara dapet duit.

### Dokumen tanpa materai:
- Bisa dipakai di pengadilan TAPI dengan kelemahan:
  - Harus dibuktikan keasliannya dulu
  - Pihak lawan bisa menolak
  - Hakim bisa minta dilengkapi materai dulu + denda
- Tidak memiliki kekuatan hukum formal penuh

## Kasus Nyata: Kontrak Sewa Rumah

Pak Budi sewa rumah dari Bu Sari. Kontrak Rp 30jt/tahun. Harus berapa materai?

### Hitung:
- Kontrak sewa adalah dokumen tertulis → **kena Bea Materai**
- Tarif tunggal → **Rp 10.000**
- Ditempel materai Rp 10.000 di kontrak (atau pakai e-Materai kalau elektronik)

### Yang harus diperhatikan:
1. Materai harus ditempel **sebelum ditandatangani** (atau bersamaan).
2. Tanggal kontrak harus sama dengan atau setelah tanggal materai.
3. Tanda tangan harus **melintasi materai** (sebagian di materai, sebagian di dokumen) — untuk mencegah pemalsuan.

> **Tip:** Kontrak yang ditandatangani DULUAN, baru ditempel materai = kurang sempurna. Lebih baik tempel dulu, baru tanda tangan melintasi materai.

## Sanksi Dokumen Tanpa Materai

Kalau dokumen seharusnya ber-materai tapi tidak, sanksinya:

1. **Tidak berkekuatan hukum formal** sebagai alat bukti utama.
2. **Bisa dilengkapi kemudian** dengan menambahkan materai + denda.
3. **Denda** sesuai Pasal 14 UU 10/2020 (umumnya sanksi administratif).
4. **Tidak pidana** (kecuali ada pemalsuan materai).

> **Bedanya sama PPh:** Bea Materai sanksinya lebih ringan, lebih ke administratif. PPh sanksinya bisa pidana (Pasal 39 KUP).

## Update 2026 yang Penting Buat WP

- **Tarif tetap Rp 10.000** per dokumen (tidak berubah sejak 1 Jan 2021).
- **e-Materai makin dominan** — banyak perusahaan sudah migrasi 100% ke e-Materai.
- **Notaris & PPP wajib lapor via Coretax** — pembelian & penggunaan materai bulanan.
- **Validasi QR code real-time** — keaslian dokumen bisa dicek di app Coretax.
- **Dokumen elektronik setara fisik** — PDF ber-materai e-Materai sama kuatnya dengan dokumen fisik.

## Tabel: Perbandingan Pajak-Pajak yang Sering Keluar di Ujian

| Pajak | Objek | Tarif 2026 | Pemungut |
|-------|-------|-----------|----------|
| PPh 21 | Gaji/upah | 5-35% progresif | Employer |
| PPh 23 | Jasa, bunga, royalti (Dalam Negeri) | 2% / 15% | Pemberi kerja |
| PPh 26 | Pembayaran ke LN | 20% (atau P3B) | Pembayar dalam negeri |
| PPh Badan | Laba perusahaan | 22% | WP sendiri |
| PPN | Penjualan BKP/JKP | 12% (efektif 11%) | PKP |
| PPnBM | Barang mewah | 10-95% | Produsen/importir |
| **Bea Materai** | **Dokumen** | **Rp 10.000 (tunggal)** | **Pembuat dokumen** |
| PBB-P2 | Tanah & bangunan desa/kota | 0,1-0,5% | Pemda |
| BPHTB | Perolehan tanah & bangunan | 5% | Pemda (pembeli) |
| Pajak Hotel | Pendapatan hotel | 10% (max) | Pemda |
| Pajak Restoran | Pendapatan restoran | 10% (max) | Pemda |

## Kesimpulan

Bea Materai itu simpel:

- **Objek**: dokumen (kertas/elektronik) yang menyebutkan keterangan/pernyataan.
- **Tarif**: Rp 10.000 per dokumen (tunggal, sejak 1 Jan 2021, UU 10/2020).
- **Cara bayar**: Materai Tempel, e-Materai (QR code), atau Meterai Mesin.
- **Sanksi**: dokumen tanpa materai tidak berkekuatan hukum formal, bisa dilengkapi kemudian + denda.

Kunci yang harus kamu inget:
- Tarif tunggal Rp 10.000 (bukan 3rb/6rb lagi).
- Bea Materai = pajak atas **dokumen**, bukan transaksi.
- e-Materai (QR) sudah mainstream di 2026, terintegrasi Coretax.
- Beberapa dokumen dikecualikan (ijazah, KTP, dokumen pemerintah, dll).

Paham kan? Yuk lanjut ke jenis-jenis dokumen yang kena materai! 📋
`,
      keyPoints: [
        "Bea Materai = pajak atas DOKUMEN yang menggunakan Materai sebagai alat pembayaran (UU 10/2020)",
        "Sejak 1 Januari 2021, tarif tunggal Rp 10.000 per dokumen (sebelumnya Rp 3.000/6.000 bertingkat)",
        "UU 10/2020 menggantikan UU 13/1985, dasar hukum terkini di 2026",
        "Tarif tunggal berlaku untuk semua dokumen yang kena materai, tidak peduli nilai transaksinya",
        "3 cara bayar: Materai Tempel (fisik), e-Materai (QR code digital), Meterai Mesin (untuk dokumen massal)",
        "Dokumen elektronik (PDF dengan TTE) setara dokumen fisik, bisa pakai e-Materai",
        "Bea Materai kasih kekuatan hukum formal (authentieke act) sebagai alat bukti di pengadilan",
        "Beberapa dokumen dikecualikan: ijazah, KTP, dokumen pemerintah, surat keagamaan, dll",
      ],
      quiz: [
        {
          id: "ch10-l01-q1",
          question: "Tarif Bea Materai yang berlaku di tahun 2026 adalah?",
          options: [
            "Rp 3.000 untuk dokumen ≤ Rp 1jt, Rp 6.000 untuk > Rp 1jt",
            "Rp 10.000 tunggal untuk semua dokumen",
            "Rp 6.000 untuk semua dokumen",
            "Rp 1.000 + Rp 5.000 + Rp 10.000 bertingkat",
          ],
          correctIndex: 1,
          explanation:
            "Sejak 1 Jan 2021 (UU 10/2020), tarif Bea Materai tunggal Rp 10.000 per dokumen. Tidak peduli nilai transaksinya berapa, semua dokumen kena materai tarifnya sama.",
          difficulty: "mudah",
        },
        {
          id: "ch10-l01-q2",
          question: "Dasar hukum Bea Materai yang berlaku di tahun 2026 adalah?",
          options: ["UU 13/1985", "UU 10/2020", "UU 7/2021 (UU HPP)", "UU 28/2009 (PDRD)"],
          correctIndex: 1,
          explanation:
            "UU 10/2020 tentang Bea Materai, efektif 1 Januari 2021. Menggantikan UU 13/1985 yang lama. UU HPP soal PPN/PPh, UU PDRD soal PBB daerah.",
          difficulty: "sedang",
        },
        {
          id: "ch10-l01-q3",
          question: "Berikut yang BUKAN cara pembayaran Bea Materai:",
          options: [
            "Materai Tempel (fisik)",
            "e-Materai (QR code digital)",
            "Meterai Mesin (untuk dokumen massal)",
            "Transfer bank langsung ke kas negara tanpa materai",
          ],
          correctIndex: 3,
          explanation:
            "3 cara resmi: Materai Tempel, e-Materai, Meterai Mesin. Tidak ada 'transfer langsung tanpa materai' — harus ada bukti materai (cap/QR) di dokumen.",
          difficulty: "mudah",
        },
        {
          id: "ch10-l01-q4",
          question: "Kontrak sewa rumah Rp 50jt/tahun. Berapa Bea Materai yang harus dibayar?",
          options: ["Rp 3.000", "Rp 6.000", "Rp 10.000", "Rp 50.000"],
          correctIndex: 2,
          explanation:
            "Tarif tunggal Rp 10.000 untuk semua dokumen. Tidak peduli nilai kontraknya berapa, materainya tetap Rp 10.000.",
          difficulty: "mudah",
        },
        {
          id: "ch10-l01-q5",
          question: "Berikut dokumen yang dikecualikan dari Bea Materai:",
          options: [
            "Kontrak sewa rumah",
            "Surat perjanjian hutang",
            "Ijazah dan rapor",
            "Akta notaris",
          ],
          correctIndex: 2,
          explanation:
            "Ijazah, rapor, STTB dikecualikan dari Bea Materai (dokumen pendidikan). Kontrak sewa, surat pernyataan hutang, akta notaris → tetap kena materai Rp 10.000.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: PT ABC Migrasi ke e-Materai",
        description:
          "PT ABC (Jakarta) sebelumnya pakai materai tempel untuk semua dokumen kontrak. Tahun 2026, PT ABC migrasi ke e-Materai. Rata-rata 200 dokumen/bulan (kontrak, SK, surat pernyataan, dll). Hitung: (a) Berapa pengeluaran Bea Materai PT ABC per bulan dan per tahun? (b) Apa keuntungan pakai e-Materai dibanding materai tempel?",
        solution:
          "(a) Pengeluaran Bea Materai:\n- Per dokumen: Rp 10.000\n- Per bulan: 200 × Rp 10.000 = Rp 2.000.000\n- Per tahun: 12 × Rp 2.000.000 = Rp 24.000.000\n\n(b) Keuntungan migrasi ke e-Materai:\n1. **Lebih efisien**: tidak perlu beli stok materai tempel fisik, tinggal order online via app Coretax.\n2. **Aman dari pemalsuan**: setiap e-Materai punya QR code unik, validasi real-time.\n3. **Stok tidak terbatas**: tidak perlu takut kehabisan stok materai tempel.\n4. **Laporan otomatis**: sistem Coretax catat semua penggunaan, mudah untuk pelaporan.\n5. **Hemat waktu**: dokumen elektronik bisa langsung dipakai tanpa tempel manual.\n6. **Ramah lingkungan**: tidak perlu kertas materai fisik.\n7. **Audit-ready**: data tersimpan permanen di sistem Coretax, bisa diakses kapan saja untuk audit.\n\nCatatan: e-Materai cocok untuk dokumen elektronik (PDF dengan TTE). Untuk dokumen fisik, masih bisa pakai e-Materai dengan mencetak QR code di dokumen fisik.",
      },
      tags: [
        "Bea Materai",
        "UU 10/2020",
        "tarif tunggal",
        "Rp 10.000",
        "e-Materai",
        "materai tempel",
        "meterai mesin",
        "dokumen elektronik",
      ],
    },
    {
      id: "ch10-l02",
      slug: "dokumen-kena-bea-materai",
      title: "Jenis Dokumen yang Kena Bea Materai",
      subtitle:
        "Dokumen satu sisi (≥ Rp 5jt), dokumen dua sisi, surat perjanjian, kwitansi, dokumen notaris, contoh kasus",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 16,
      content: `# Jenis Dokumen yang Kena Bea Materai 2026 📋

Yuk, kita bahas jenis-jenis dokumen yang kena Bea Materai. Ini sering keluar di ujian Brevet AB, dan banyak yang salah karena nggak hafal kategorinya.

## Klasifikasi Dokumen Kena Bea Materai

Berdasarkan UU 10/2020 Pasal 2, dokumen yang kena Bea Materai dibagi jadi **2 kategori**:

### 1. Dokumen Satu Sisi (Single-Side Document)

Dokumen yang dibuat dan ditandatangani **oleh satu pihak** saja. Contoh: surat pernyataan, kuitansi, SK (surat keputusan).

**Kena materai jika:**
- Nilai uang/barang yang disebutkan ≥ Rp 5.000.000, ATAU
- Dokumen yang isinya keterangan/pernyataan yang dapat dipakai sebagai alat bukti di pengadilan.

### 2. Dokumen Dua Sisi (Two-Side Document)

Dokumen yang dibuat dan ditandatangani **oleh dua pihak atau lebih**. Contoh: kontrak/perjanjian, MoU, akta.

**Kena materai jika:**
- Berisi keterangan/pernyataan yang dapat dipakai sebagai alat bukti, TANPA batasan nilai minimum.

> **Bedanya:** Dokumen satu sisi ada batas minimum Rp 5jt. Dokumen dua sisi langsung kena materai tanpa batas minimum (selama berisi keterangan sebagai alat bukti).

## Daftar Dokumen yang Kena Bea Materai

### A. Dokumen Satu Sisi (≥ Rp 5jt)

| Jenis Dokumen | Contoh |
|---------------|--------|
| **Kuitansi pembayaran** | Bukti bayar sewa ≥ Rp 5jt |
| **Surat pernyataan** | Pernyataan domisili, pernyataan tidak bankrut |
| **Surat pengakuan utang** | Pengakuan utang Rp 50jt |
| **Surat berharga** | Cek, bilyet deposito (tapi cek sudah dikecualikan) |
| **SK (Surat Keputusan)** | SK pengangkatan direktur dengan imbalan ≥ Rp 5jt |
| **Surat kuasa** | Kuasa untuk transaksi tertentu (kalau nyata nilai ≥ Rp 5jt) |
| **Laporan keuangan** | Laporan keuangan tahunan perusahaan |
| **Faktur pajak** (kalau menyebut nilai ≥ Rp 5jt) | Faktur dengan nilai besar |

### B. Dokumen Dua Sisi (Tanpa Batas Minimum)

| Jenis Dokumen | Contoh |
|---------------|--------|
| **Kontrak/perjanjian** | Kontrak sewa, kontrak kerja, kontrak jual beli |
| **MoU (Memorandum of Understanding)** | MoU bisnis antar perusahaan |
| **Akta notaris** | Akta pendirian, akta perubahan PT |
| **Surat perjanjian hutang** | Surat hutang antar dua pihak |
| **Kontrak konstruksi** | Kontrak pemborong proyek |
| **Kontrak konsultan** | Kontrak sewa jasa konsultan |
| **Perjanjian lisensi** | Lisensi penggunaan merek, hak cipta |
| **Surat kuasa** (kalau ada dua pihak) | Surat kuasa dua pihak |
| **Faktur pajak** | Faktur PPN elektronik (e-Faktur) |

## Yang TIDAK Kena Bea Materai (Pengecualian Pasal 4)

Beberapa dokumen dikecualikan dari Bea Materai:

| Jenis Dokumen | Alasan |
|---------------|--------|
| **Dokumen diplomatik & konsuler** | Surat dari/ke kedutaan, konsuler |
| **Dokumen pemerintah** | SK PNS, surat dari kas negara |
| **Dokumen perjanjian internasional** | Sesuai P3B |
| **Buku tabungan, cek, bilyet giro** | Sudah kena pajak lain |
| **Konosemen, polis asuransi, dokumen transport** | Tertentu dikecualikan |
| **Dokumen keagamaan** | Akta nikah, surat baptis |
| **Ijazah, rapor, STTB** | Dokumen pendidikan |
| **Dokumen perpindahan penduduk** | KTP, KK, paspor |
| **Kuitansi pembayaran dari kas negara/daerah** | Gaji PNS, pensiun |
| **Surat keterangan ber-SK tertentu** | Tergantung keputusan Menkeu |

## Contoh Kasus: Dokumen yang Kena vs Tidak Kena

### Kasus 1: Kuitansi Sewa Rumah Rp 30jt/tahun

**Kena materai?** YA.
- Kuitansi = dokumen satu sisi
- Nilai ≥ Rp 5jt (Rp 30jt)
- **Materai: Rp 10.000**

### Kasus 2: Kuitansi Bayar Listrik PLN Rp 1,2jt/bulan

**Kena materai?** TIDAK.
- Kuitansi satu sisi, tapi nilai < Rp 5jt
- **Materai: Tidak perlu**

### Kasus 3: Kontrak Sewa Rumah Rp 50jt/tahun

**Kena materai?** YA.
- Kontrak = dokumen dua sisi
- Tanpa batas minimum
- **Materai: Rp 10.000**

### Kasus 4: Kontrak Sewa Rumah Rp 30jt/tahun (5 tahun = Rp 150jt)

**Kena materai?** YA.
- Kontrak dua sisi, kena materai
- Tapi, **berapa materainya?**
- Jawab: **Rp 10.000** (tarif tunggal, tidak peduli nilai kontrak)

### Kasus 5: Surat Pernyataan "Saya tidak sedang dalam proses pailit"

**Kena materai?** YA.
- Surat pernyataan = dokumen satu sisi
- Walaupun tidak menyebut nilai uang, isinya bisa jadi alat bukti
- **Materai: Rp 10.000**

### Kasus 6: Ijazah Sarjana Pak Budi

**Kena materai?** TIDAK.
- Ijazah dikecualikan dari Bea Materai
- **Materai: Tidak perlu**

### Kasus 7: SK Pengangkatan Direktur PT ABC

**Kena materai?** Tergantung nilai tunjangan/imbalan.
- Kalau imbalan ≥ Rp 5jt/bulan → **Materai Rp 10.000**
- Kalau imbalan < Rp 5jt/bulan → **Tidak perlu materai** (tapi praktiknya biasanya tetap dimaterai)

### Kasus 8: Akta Pendirian PT di Notaris

**Kena materai?** YA.
- Akta notaris = dokumen dua sisi (notaris + para pihak)
- **Materai: Rp 10.000** per akta
- Notaris biasanya pakai meterai mesin untuk efisiensi

## Tabel: Kuitansi (Satu Sisi) Berdasarkan Nilai

| Nilai Kuitansi | Kena Materai? | Tarif |
|----------------|---------------|-------|
| < Rp 5.000.000 | TIDAK | — |
| ≥ Rp 5.000.000 | YA | Rp 10.000 |
| ≥ Rp 1.000.000.000 | YA | Rp 10.000 (sama) |
| ≥ Rp 100.000.000.000 | YA | Rp 10.000 (sama) |

> **Tip ujian:** Untuk dokumen SATU SISI, inget angka **Rp 5.000.000** sebagai batas minimum. Untuk dokumen DUA SISI, tidak ada batas minimum.

## Surat Perjanjian & Kontrak

Surat perjanjian/kontrak itu kategori **dokumen dua sisi**. Selalu kena materai Rp 10.000, tidak peduli nilainya.

### Contoh yang WAJIB materai:
- Kontrak sewa rumah/toko
- Kontrak kerja (employee contract)
- Kontrak jual beli barang
- Kontrak konstruksi (proyek)
- Kontrak sewa jasa konsultan
- Perjanjian hutang-piutang
- MoU (Memorandum of Understanding)
- Akta notaris (pendirian PT, perubahan, dll)

### Contoh yang TIDAK WAJIB materai (sudah dikecualikan):
- Buku tabungan
- Polis asuransi (tertentu)
- Konosemen (dokumen transport)

## Kwitansi: Banyak yang Salah!

Kwitansi itu dokumen satu sisi. Kena materai hanya kalau nilai ≥ Rp 5jt.

### Contoh:
- Kwitansi bayar gaji Rp 30jt/bulan → KENA materai (Rp 10.000)
- Kwitansi bayar jasa konsultan Rp 50jt → KENA materai (Rp 10.000)
- Kwitansi bayar listrik Rp 1,5jt → TIDAK kena materai
- Kwitansi parkir Rp 5.000 → TIDAK kena materai

> **Khusus:** Kuitansi pembayaran dari kas negara/daerah (gaji PNS, dll) dikecualikan dari Bea Materai, walaupun nilainya ≥ Rp 5jt.

## Surat Berharga yang Kena Materai

| Surat Berharga | Kena Materai? | Tarif |
|----------------|---------------|-------|
| **Cek** | TIDAK (dikecualikan) | — |
| **Bilyet giro** | TIDAK (dikecualikan) | — |
| **Wesel** | YA (kalau nilai ≥ Rp 5jt) | Rp 10.000 |
| **Surat sanggup bayar** | YA | Rp 10.000 |
| **Obligasi** | YA | Rp 10.000 |
| **Saham (sertifikat)** | YA | Rp 10.000 |

## Dokumen Elektronik (e-Document) & TTE

Di 2026, dokumen elektronik dengan TTE (Tanda Tangan Elektronik) **setara dengan dokumen fisik**. Kena Bea Materai dengan e-Materai (QR code).

### Contoh dokumen elektronik yang kena materai:
- Kontrak elektronik (e-contract) yang ditandatangani TTE
- Surat pernyataan elektronik
- Faktur pajak elektronik (e-Faktur di Coretax)
- Invoice elektronik

### Cara bayar e-Materai:
1. **Beli** e-Materai di app Coretax atau via PPP (Pemungut Pihak Ketiga).
2. **Generate** QR code unik.
3. **Tempel** QR code ke dokumen elektronik (PDF).
4. **Validasi** dengan scan QR — sistem Coretax akan konfirmasi keaslian.

## Notaris & PPP (Pemungut Pihak Ketiga)

Notaris dan beberapa pihak lain ditunjuk sebagai **PPP Bea Materai** (Pemungut Pihak Ketiga). Tugasnya:

1. **Memungut** Bea Materai dari dokumen yang dibuatnya.
2. **Menyetor** ke kas negara.
3. **Melaporkan** ke DJP via Coretax.

### PPP Bea Materai meliputi:
- **Notaris** (akta otentik)
- **PPAT** (Pejabat Pembuat Akta Tanah)
- **Bank & lembaga keuangan** (dokumen kredit, dll)
- **Perusahaan tertentu** dengan dokumen massal (bulanan)
- **Kantor pos** (penjualan materai tempel)

## Kasus Lengkap: Pendirian PT Baru

Pak Andi & 2 temannya mendirikan PT. Di notaris, mereka buat:

1. **Akta pendirian PT** (notaris) → kena materai Rp 10.000 (2 sisi)
2. **SK Menkumham** (surat keputusan pengesahan) → kena materai Rp 10.000 (1 sisi, tapi ≥ Rp 5jt? Tidak nyata nilai, tapi SK pemerintah dikecualikan)
3. **Kontrak sewa kantor** ( elektronik, TTE) → kena materai Rp 10.000 (e-Materai)
4. **Surat pernyataan domisili perusahaan** → kena materai Rp 10.000 (1 sisi, tapi dipakai sebagai alat bukti)
5. **Akta perubahan KTP direktur** (sebagai direktur PT) → TIDAK kena materai (perpindahan penduduk dikecualikan)
6. **Ijazah direktur** → TIDAK kena materai (dikecualikan)

Total Bea Materai yang dibayar: Rp 30.000 (3 dokumen yang kena).

## Tabel: Daftar Cepat Dokumen yang Kena Materai

| Dokumen | Kena Materai? | Tarif |
|---------|---------------|-------|
| Kontrak sewa rumah | YA | Rp 10.000 |
| Kontrak kerja | YA | Rp 10.000 |
| Akta notaris (pendirian PT, dll) | YA | Rp 10.000 |
| Kuitansi ≥ Rp 5jt | YA | Rp 10.000 |
| Kuitansi < Rp 5jt | TIDAK | — |
| Surat pernyataan (alat bukti) | YA | Rp 10.000 |
| Ijazah | TIDAK | — |
| KTP, KK, paspor | TIDAK | — |
| SK pengangkatan PNS | TIDAK (dokumen pemerintah) | — |
| SK pengangkatan direktur PT (≥ Rp 5jt imbalan) | YA | Rp 10.000 |
| Konosemen | TIDAK (dikecualikan) | — |
| Cek, bilyet giro | TIDAK (dikecualikan) | — |
| Buku tabungan | TIDAK (dikecualikan) | — |
| Faktur pajak (e-Faktur) | YA | Rp 10.000 |
| Laporan keuangan tahunan | YA | Rp 10.000 |
| Akta nikah | TIDAK (keagamaan) | — |

## Sanksi 2026 Dokumen Tanpa Materai

| Pelanggaran | Sanksi |
|-------------|--------|
| Dokumen tanpa materai (seharusnya kena) | Tidak berkekuatan hukum formal sebagai alat bukti utama |
| Pemalsuan materai tempel | Pidana (Pasal 39 UU Bea Materai) |
| Tidak lapor PPP (notaris, bank) | Denda administratif |
| Salah lapor penggunaan materai | Koreksi + denda |

> **Penting:** Dokumen tanpa materai BISA dipakai di pengadilan, tapi harus dibuktikan keasliannya dulu. Hakim bisa minta dilengkapi materai + denda (umumnya 100-200% dari Bea Materai).

## Update 2026 di Era Coretax

- **e-Materai terintegrasi** dengan Coretax DJP — semua pembelian & penggunaan tercatat otomatis.
- **Validasi QR code real-time** — cek keaslian dokumen dengan scan QR.
- **Auto-lapor PPP** — notaris & bank lapor bulanan via Coretax.
- **Dokumen elektronik setara fisik** — PDF dengan TTE + e-Materai sah secara hukum.
- **Migrasi massal** ke e-Materai di 2026, materai tempel makin jarang.

## Kesimpulan

Jenis dokumen yang kena Bea Materai:

1. **Dokumen satu sisi** (kuitansi, SK, pernyataan) → kena materai kalau nilai ≥ Rp 5jt atau berisi keterangan sebagai alat bukti.
2. **Dokumen dua sisi** (kontrak, akta, MoU) → selalu kena materai, tanpa batas minimum.
3. **Tarif tunggal Rp 10.000** untuk semua dokumen yang kena.
4. **e-Materai** untuk dokumen elektronik, dengan validasi QR.

Kunci yang harus kamu inget:
- Dokumen SATU SISI: batas minimum Rp 5jt.
- Dokumen DUA SISI: tanpa batas minimum, langsung kena.
- Pengecualian: ijazah, KTP, dokumen pemerintah, keagamaan, cek/bilyet giro, buku tabungan.
- Notaris & bank = PPP (Pemungut Pihak Ketiga), wajib setor & lapor bulanan.

Paham kan? Yuk lanjut ke cara pembayaran & sanksi! 💰
`,
      keyPoints: [
        "Dokumen kena Bea Materai dibagi 2: dokumen satu sisi (batas ≥ Rp 5jt) dan dokumen dua sisi (tanpa batas minimum)",
        "Dokumen satu sisi contoh: kuitansi ≥ Rp 5jt, surat pernyataan, SK dengan imbalan ≥ Rp 5jt",
        "Dokumen dua sisi contoh: kontrak/perjanjian, akta notaris, MoU, surat hutang, kontrak sewa",
        "Tarif tunggal Rp 10.000 per dokumen, tidak peduli nilai transaksi",
        "Dikecualikan: ijazah/rapor, KTP/KK/paspor, dokumen pemerintah, akta nikah, cek/bilyet giro, buku tabungan, konosemen",
        "Kuitansi < Rp 5jt: TIDAK kena materai; ≥ Rp 5jt: KENA Rp 10.000",
        "Dokumen elektronik dengan TTE (Tanda Tangan Elektronik) setara dokumen fisik, kena e-Materai",
        "Notaris, PPAT, bank = PPP Bea Materai (Pemungut Pihak Ketiga), wajib setor & lapor bulanan via Coretax",
      ],
      quiz: [
        {
          id: "ch10-l02-q1",
          question: "Kuitansi pembayaran sewa Rp 8jt. Berapa Bea Materai yang harus dibayar?",
          options: ["Tidak perlu materai", "Rp 3.000", "Rp 6.000", "Rp 10.000"],
          correctIndex: 3,
          explanation:
            "Kuitansi satu sisi, nilai ≥ Rp 5jt → kena materai. Tarif tunggal Rp 10.000.",
          difficulty: "mudah",
        },
        {
          id: "ch10-l02-q2",
          question: "Kontrak sewa rumah Rp 3jt/tahun. Berapa Bea Materai?",
          options: ["Tidak perlu materai (di bawah Rp 5jt)", "Rp 10.000", "Rp 5.000", "Rp 3.000"],
          correctIndex: 1,
          explanation:
            "Kontrak = dokumen DUA SISI, tanpa batas minimum. Langsung kena Rp 10.000. Batas Rp 5jt cuma buat dokumen SATU SISI.",
          difficulty: "sedang",
        },
        {
          id: "ch10-l02-q3",
          question: "Berikut dokumen yang DIKECUALIKAN dari Bea Materai, KECUALI:",
          options: ["Ijazah", "Akta nikah", "Kontrak sewa rumah", "KTP, KK, paspor"],
          correctIndex: 2,
          explanation:
            "Kontrak sewa = dokumen dua sisi, kena materai Rp 10.000. Yang dikecualikan: ijazah, akta nikah, KTP/KK/paspor (perpindahan penduduk), dokumen pemerintah.",
          difficulty: "sedang",
        },
        {
          id: "ch10-l02-q4",
          question: "Akta pendirian PT di notaris. Berapa Bea Materai yang harus dibayar?",
          options: ["Tidak perlu (akta notaris dikecualikan)", "Rp 10.000", "Rp 100.000", "Rp 1.000.000"],
          correctIndex: 1,
          explanation:
            "Akta notaris = dokumen dua sisi, kena materai Rp 10.000 (tarif tunggal). Notaris biasanya pakai meterai mesin untuk efisiensi.",
          difficulty: "sedang",
        },
        {
          id: "ch10-l02-q5",
          question: "Kuitansi pembayaran gaji PNS Rp 15jt/bulan. Apakah kena Bea Materai?",
          options: [
            "YA, karena ≥ Rp 5jt → Rp 10.000",
            "TIDAK, karena kuitansi dari kas negara dikecualikan",
            "YA, karena dokumen satu sisi",
            "TIDAK, karena gaji PNS tidak kena pajak",
          ],
          correctIndex: 1,
          explanation:
            "Kuitansi pembayaran dari kas negara/daerah (gaji PNS, pensiun, dll) dikecualikan dari Bea Materai, walaupun nilainya ≥ Rp 5jt.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Pendirian PT Maju Jaya — Hitung Bea Materai",
        description:
          "Pendiri PT Maju Jaya membuat dokumen berikut di notaris: (1) Akta pendirian PT; (2) Kontrak sewa kantor 2 tahun Rp 200jt/tahun; (3) SK pengangkatan direktur (gaji Rp 25jt/bulan); (4) Surat pernyataan domisili perusahaan; (5) Kontrak kerja karyawan gaji Rp 8jt/bulan; (6) Kuitansi pembayaran ke notaris Rp 15jt; (7) Akta nikah salah satu pendiri (saat update data); (8) Ijazah pendiri (saat update data). Hitung total Bea Materai yang harus dibayar.",
        solution:
          "Identifikasi dokumen yang kena vs tidak kena:\n\nKENA BEA MATERAI (Rp 10.000 each):\n1. Akta pendirian PT → dokumen dua sisi → Rp 10.000\n2. Kontrak sewa kantor → dokumen dua sisi → Rp 10.000\n3. SK pengangkatan direktur (gaji Rp 25jt ≥ Rp 5jt) → dokumen satu sisi, ≥ Rp 5jt → Rp 10.000\n4. Surat pernyataan domisili → dokumen satu sisi, dipakai sebagai alat bukti → Rp 10.000\n5. Kontrak kerja karyawan → dokumen dua sisi → Rp 10.000\n6. Kuitansi pembayaran ke notaris Rp 15jt → dokumen satu sisi, ≥ Rp 5jt → Rp 10.000\n\nDIKECUALIKAN:\n7. Akta nikah → dokumen keagamaan → Rp 0\n8. Ijazah → dokumen pendidikan → Rp 0\n\nTotal Bea Materai = 6 × Rp 10.000 = Rp 60.000.\n\nCatatan: Notaris biasanya sudah include Bea Materai dalam biaya jasa (akta pendirian, dll). Tapi untuk dokumen di luar notaris (kontrak sewa, surat pernyataan, dll), WP yang harus bayar. Di 2026, semua bisa pakai e-Materai lewat app Coretax.",
      },
      tags: [
        "dokumen kena materai",
        "dokumen satu sisi",
        "dokumen dua sisi",
        "batas Rp 5jt",
        "kuitansi",
        "akta notaris",
        "dokumen elektronik",
        "TTE",
      ],
    },
    {
      id: "ch10-l03",
      slug: "pembayaran-bea-materai",
      title: "Cara Pembayaran Bea Materai & Sanksi",
      subtitle:
        "e-Materai, materai tempel, meterai mesin; sanksi dokumen tanpa materai; integrasi Coretax 2026",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 14,
      content: `# Cara Pembayaran Bea Materai & Sanksi 2026 💸

Yuk, kita bahas cara pembayaran Bea Materai secara detail, plus sanksi kalau telat atau tidak ber-materai. Topik ini sering keluar di ujian terutama soal sanksi & integrasi Coretax.

## 3 Cara Pembayaran Bea Materai

Di 2026, ada **3 cara resmi** bayar Bea Materai:

### 1. Materai Tempel (Fisik)

Cara klasik: beli kertas materai tempel, tempel di dokumen.

**Cara pakai:**
1. Beli di kantor pos, bank, atau toko yang ditunjuk.
2. Tanggal dokumen & tanggal materai harus sama atau materai lebih dulu.
3. Tanda tangan harus **melintasi materai** (sebagian di materai, sebagian di kertas dokumen).
4. Cek keaslian (lihat cap, watermark, hologram).

**Kelebihan:**
- Bisa dipakai untuk dokumen fisik
- Tidak butuh teknologi

**Kekurangan:**
- Mahal & repot (harus beli fisik)
- Risiko pemalsuan (banyak materai tempel palsu)
- Tidak praktis untuk dokumen elektronik

### 2. e-Materai (Digital)

Cara modern: beli e-Materai online, generate QR code, tempel di dokumen elektronik atau cetak untuk dokumen fisik.

**Cara pakai:**
1. **Daftar** di platform e-Materai resmi (lewat Coretax atau PPP seperti Peruri, Pos Indonesia).
2. **Top-up saldo** e-Materai (via m-banking, e-wallet).
3. **Buat dokumen** dengan TTE (Tanda Tangan Elektronik).
4. **Order e-Materai** — sistem generate QR code unik.
5. **Tempel QR code** ke dokumen (PDF atau cetak).
6. **Validasi** dengan scan QR — sistem Coretax konfirmasi keaslian.

**Kelebihan:**
- Tidak perlu stok fisik
- Aman dari pemalsuan (QR unik + validasi real-time)
- Bisa untuk dokumen elektronik
- Laporan otomatis ke DJP
- Ramah lingkungan

**Kekurangan:**
- Butuh koneksi internet
- Butuh akun & TTE

### 3. Meterai Mesin

Cara massal: pakai mesin khusus yang cetak cap meterai di dokumen.

**Cara pakai:**
1. **Notaris/bank/PPP beli meterai mesin** (alat khusus).
2. **Setor dana jaminan** ke DJP (sejumlah materai yang akan dipakai).
3. **Cetak dokumen** — mesin otomatis cap cap meterai unik.
4. **Lapor bulanan** ke DJP via Coretax.

**Kelebihan:**
- Efisien untuk dokumen massal (notaris, bank, dll)
- Cap unik + tercatat di sistem
- Hemat waktu

**Kekurangan:**
- Butuh investasi mesin
- Hanya untuk PPP (notaris, bank, lembaga tertentu)

## Tabel: Perbandingan 3 Cara Pembayaran

| Aspek | Materai Tempel | e-Materai | Meterai Mesin |
|-------|----------------|-----------|---------------|
| Bentuk | Kertas tempel fisik | QR code digital | Cap dari mesin |
| Cocok untuk | Dokumen fisik kecil | Dokumen elektronik/fisik | Dokumen massal |
| Validasi | Manual (lihat cap) | Scan QR real-time | Sistem internal + laporan DJP |
| Risiko pemalsuan | Tinggi | Rendah | Sangat rendah |
| Efisiensi | Rendah | Tinggi | Sangat tinggi (massal) |
| Pengguna | WP umum | WP umum | PPP (notaris, bank) |

## Alur Pembayaran e-Materai di 2026

\`\`\`
[1] WP buka app Coretax / PPP (Peruri, Pos Indonesia)
        ↓
[2] Top-up saldo e-Materai via m-banking/e-wallet
        ↓
[3] Buat dokumen dengan TTE (Tanda Tangan Elektronik)
        ↓
[4] Order e-Materai — sistem generate QR code unik
        ↓
[5] Tempel QR code ke dokumen PDF atau cetak untuk dokumen fisik
        ↓
[6] Validasi dengan scan QR — Coretax konfirmasi keaslian
        ↓
[7] Dokumen sah & berkekuatan hukum formal
\`\`\`

## Pemungut Pihak Ketiga (PPP) Bea Materai

Beberapa pihak ditunjuk DJP sebagai **PPP Bea Materai**:

| PPP | Tugas |
|-----|------|
| **Notaris** | Memungut materai atas akta yang dibuatnya |
| **PPAT** (Pejabat Pembuat Akta Tanah) | Memungut atas akta tanah |
| **Bank & lembaga keuangan** | Memungut atas dokumen kredit, dll |
| **Peruri** (Perum Peruri) | Penyelenggara e-Materai |
| **Kantor pos** | Penjualan materai tempel |
| **Perusahaan tertentu** | Dengan dokumen massal (jika ditunjuk) |

### Tanggung jawab PPP:
1. **Memungut** Bea Materai dari pengguna dokumen.
2. **Menyetor** ke kas negara paling lambat tanggal 10 bulan berikutnya.
3. **Melaporkan** SPT Masa Bea Materai paling lambat tanggal 20 bulan berikutnya.

## Sanksi 2026 Tidak Ber-Materai

| Pelanggaran | Sanksi |
|-------------|--------|
| Dokumen seharusnya kena materai tapi tidak | Tidak berkekuatan hukum formal sebagai alat bukti utama |
| Dokumen bisa dilengkapi kemudian | + denda (umumnya 100% dari Bea Materai, max Rp 50jt tergantung kasus) |
| Pemalsuan materai tempel | Pidana (Pasal 39 UU Bea Materai, ancaman penjara 1-7 tahun) |
| PPP tidak setor | Sanksi administratif + bunga MIR 0,6%/bln (Pasal 19 KUP) |
| PPP tidak lapor SPT Masa | Rp 100.000 (Pasal 7 KUP) |
| Salah lapor penggunaan materai | Koreksi + denda |

### Detail Sanksi Pasal 14 UU 10/2020:

1. **Dokumen tanpa materai** dapat dilengkapi dengan:
   - Membayar Bea Materai yang seharusnya dibayar
   - Membayar denda 100% dari Bea Materai
2. **Total kewajiban**: Rp 10.000 (materai) + Rp 10.000 (denda) = Rp 20.000

> **Catatan:** Sanksi administratif (denda 100%). Tidak pidana (kecuali pemalsuan). Beda dengan PPh yang bisa pidana kalau sengaja nggak lapor.

## Kasus: Dokumen Tanpa Materai Dipakai di Pengadilan

PT ABC punya kontrak sewa dengan PT XYZ, kontraknya nggak dimaterai. Suatu saat, PT ABC gugat PT XYZ ke pengadilan karena PT XYZ tidak bayar sewa. Kontrak jadi alat bukti utama.

**Hasilnya:**
- Hakim akan minta PT ABC **lengkapi materai** + denda Rp 10.000 (denda 100%).
- Setelah dilengkapi, kontrak berkekuatan hukum formal.
- Kalau PT ABC nggak mau melengkapi, kontrak tidak bisa jadi alat bukti utama (cuma bukti pendukung).

> **Tip:** Selalu ber-materai dokumen penting dari awal. Mending Rp 10.000 sekarang daripada ribet di pengadilan nanti.

## Sanksi Khusus PPP (Notaris, Bank)

| Pelanggaran | Sanksi |
|-------------|--------|
| PPP tidak setor ke kas negara (≤ tgl 10) | Bunga MIR 0,6%/bln (Pasal 19 KUP) |
| PPP telat lapor SPT Masa Bea Materai | Rp 100.000 (Pasal 7 KUP) |
| PPP tidak lapor sama sekali | Sanksi administratif + potensi pencabutan izin PPP |
| PPP gagal bayar (manipulasi) | Pidana penggelapan pajak |

## Integrasi dengan Coretax 2026

Sejak Coretax DJP live (1 Januari 2025), Bea Materai terintegrasi penuh:

### Fitur Bea Materai di Coretax:

1. **Pembelian e-Materai** langsung lewat app Coretax.
2. **Validasi QR code real-time** — cek keaslian dokumen.
3. **Lapor SPT Masa Bea Materai** untuk PPP (notaris, bank, dll).
4. **Lacak penggunaan materai** — sistem catat semua dokumen ber-materai.
5. **Notifikasi otomatis** ke PPP & WP jika ada kewajiban setor/lapor.
6. **Audit trail** lengkap untuk pemeriksaan.

### Manfaat Integrasi:
- **Transparansi**: semua transaksi materai tercatat.
- **Efisiensi**: tidak perlu lapor manual.
- **Pencegahan penyalahgunaan**: materai palsu langsung ketahuan.
- **Data crosscheck**: dengan SPT PPh (kalau ada transaksi yang dilaporkan di PPh, harus ada materainya).

## Kasus: Notaris yang Lapor Salah

Notaris Bu Ani selama Januari 2026 menggunakan 250 meterai mesin (Rp 2.500.000). Lapor SPT Masa Bea Materai Februari (deadline 20 Februari), Bu Ani lapor telat 5 hari (25 Februari).

### Sanksi:
- Telat lapor SPT Masa: **Rp 100.000** (Pasal 7 KUP).
- Selama setor ke kas negara masih tepat waktu (≤ 10 Februari), tidak kena bunga.
- Total denda: **Rp 100.000**.

## Update 2026: Perubahan & Tren

1. **Migrasi massal ke e-Materai** — banyak perusahaan besar 100% pakai e-Materai.
2. **Materai tempel makin langka** — kantor pos masih jual, tapi penurunan demand signifikan.
3. **Integrasi dengan TTE** — Tanda Tangan Elektronik tersertifikasi (BSrE dari Kominfo) jadi standar.
4. **Audit AI-based** — Coretax pakai AI untuk deteksi anomali penggunaan materai.
5. **Dokumen elektronik setara fisik** — UU ITE & UU Bea Materai mengakui e-Document sebagai alat bukti formal.

## Tabel: Sanksi Pajak yang Sering Keluar di Ujian

| Pajak | Sanksi Telat Setor | Sanksi Telat Lapor |
|-------|--------------------|--------------------|
| PPh 21/23/26/badan/PPN | 0,6%/bln (Pasal 19, MIR Agustus 2026) | Rp 100.000 - Rp 1.000.000 (Pasal 7) |
| Bea Materai (PPP) | 0,6%/bln (Pasal 19 KUP) | Rp 100.000 (Pasal 7 KUP) |
| Dokumen tanpa materai | Tidak pidana, denda 100% materai + dilengkapi | — |
| Pemalsuan materai | Pidana 1-7 tahun | — |
| PBB-P2 | Bunga 2%/bln (PERDA) | — |
| BPHTB | Bunga 2%/bln (PERDA) | — |

## Tips Praktis Buat WP

1. **Selalu ber-materai** dokumen penting (kontrak, akta, surat pernyataan ≥ Rp 5jt).
2. **Migrasi ke e-Materai** kalau dokumen banyak — lebih efisien & aman.
3. **Cek materai tempel** dari supplier — pastikan asli (lihat hologram).
4. **Kalau PPP**: setor paling lambat tanggal 10, lapor paling lambat tanggal 20.
5. **Simpan bukti** pembelian materai untuk audit.
6. **Gunakan TTE tersertifikasi** (BSrE Kominfo) untuk dokumen elektronik.
7. **Hindari pemalsuan** — sanksi pidana berat (1-7 tahun).

## Kasus Lengkap: PT ABC Beli Kontrak Sewa Tanpa Materai

PT ABC beli kontrak sewa gudang Rp 25jt/tahun dari Bu Sinta. Kontrak ditandatangani Februari 2026 tanpa materai. Maret 2026, PT ABC butuh kontrak sebagai alat bukti untuk klaim asuransi.

### Hitung:
1. Kontrak = dokumen dua sisi → seharusnya kena Rp 10.000.
2. Tidak ber-materai → tidak berkekuatan hukum formal.
3. **Solusi**: Lengkapi materai Rp 10.000 + denda 100% = total **Rp 20.000**.
4. Setelah dilengkapi, kontrak sah sebagai alat bukti.

### Proses pelengkapan:
1. PT ABC beli e-Materai Rp 10.000 via app Coretax.
2. Bayar denda Rp 10.000 (100% dari Bea Materai) ke kas negara.
3. Tempel e-Materai ke kontrak (atau tempel materai tempel + ttd melintasi).
4. Kontrak sah sebagai alat bukti formal.

## Tabel: Bea Materai di Berbagai Negara (Komparasi)

| Negara | Tarif Materai | Sifat |
|--------|---------------|-------|
| **Indonesia** | Rp 10.000 (~$0.65) | Tunggal, per dokumen |
| Singapura | SGD 1-500 | Bertingkat, per dokumen |
| Malaysia | RM 10-100 | Bertingkat |
| Australia | AUD 0-1000 | Bertingkat, proporsional |
| USA | USD 0-X (per state) | Variatif |

> Indonesia termasuk tarif rendah & simpel karena tunggal. Beberapa negara pakai sistem proporsional berdasar nilai dokumen.

## Kesimpulan

Cara pembayaran Bea Materai di 2026:

1. **Materai Tempel** — kertas fisik, untuk dokumen fisik (klasik, makin jarang).
2. **e-Materai** — QR code digital, untuk dokumen elektronik & fisik (utama di 2026).
3. **Meterai Mesin** — cap dari mesin, untuk dokumen massal oleh PPP (notaris, bank).

Sanksi:
- Dokumen tanpa materai: tidak berkekuatan hukum formal, bisa dilengkapi + denda 100%.
- PPP telat setor: 0,6%/bln (MIR).
- PPP telat lapor: Rp 100.000.
- Pemalsuan: pidana 1-7 tahun.

Kunci yang harus kamu inget:
- 3 cara bayar: tempel, e-Materai, mesin.
- e-Materai = tren utama 2026, integrasi penuh dengan Coretax DJP.
- Sanksi dokumen tanpa materai = denda 100% (bukan 200% lagi).
- PPP (notaris, bank) wajib setor tgl 10, lapor tgl 20 bulan berikutnya.

Paham kan? Bab Bea Materai udah lengkap. Lanjut ke bab Pajak Daerah & Retribusi Daerah! 🏛️
`,
      keyPoints: [
        "3 cara bayar Bea Materai: Materai Tempel (fisik), e-Materai (QR code digital), Meterai Mesin (untuk PPP massal)",
        "e-Materai adalah tren utama 2026, integrasi penuh dengan Coretax DJP untuk validasi QR real-time",
        "PPP Bea Materai (notaris, PPAT, bank) wajib setor ≤ tanggal 10, lapor SPT Masa ≤ tanggal 20 bulan berikutnya",
        "Sanksi dokumen tanpa materai: tidak berkekuatan hukum formal, bisa dilengkapi + denda 100% (total Rp 20.000)",
        "Sanksi PPP telat setor: 0,6%/bln (Pasal 19 KUP, MIR Agustus 2026)",
        "Sanksi PPP telat lapor SPT Masa: Rp 100.000 (Pasal 7 KUP)",
        "Pemalsuan materai: pidana 1-7 tahun penjara (Pasal 39 UU Bea Materai)",
        "Dokumen elektronik dengan TTE tersertifikasi (BSrE Kominfo) + e-Materai setara dokumen fisik",
      ],
      quiz: [
        {
          id: "ch10-l03-q1",
          question: "Di 2026, cara pembayaran Bea Materai yang paling umum & direkomendasikan adalah?",
          options: [
            "Materai tempel fisik (klasik)",
            "e-Materai (QR code digital)",
            "Meterai mesin (untuk umum)",
            "Transfer bank langsung tanpa bukti materai",
          ],
          correctIndex: 1,
          explanation:
            "e-Materai paling umum di 2026 — terintegrasi Coretax, validasi QR real-time, aman dari pemalsuan. Meterai mesin khusus PPP, materai tempel makin jarang.",
          difficulty: "mudah",
        },
        {
          id: "ch10-l03-q2",
          question: "Sanksi dokumen yang seharusnya ber-materai tapi tidak (di 2026)?",
          options: [
            "Pidana penjara 1-7 tahun",
            "Denda 100% dari Bea Materai + dilengkapi materainya (total Rp 20.000)",
            "Denda 200% dari Bea Materai (UU lama)",
            "Denda Rp 1.000.000",
          ],
          correctIndex: 1,
          explanation:
            "UU 10/2020: denda 100% dari Bea Materai + dilengkapi materainya. Total Rp 20.000 (Rp 10.000 materai + Rp 10.000 denda). Bukan pidana (kecuali pemalsuan).",
          difficulty: "sedang",
        },
        {
          id: "ch10-l03-q3",
          question: "Notaris sebagai PPP Bea Materai harus setor & lapor paling lambat?",
          options: [
            "Setor ≤ tgl 10, lapor ≤ tgl 20 bulan berikutnya",
            "Setor ≤ tgl 20, lapor ≤ tgl 10 bulan berikutnya",
            "Setor ≤ tgl 15, lapor ≤ tgl 25 bulan berikutnya",
            "Setor ≤ akhir bulan, lapor ≤ awal bulan berikutnya",
          ],
          correctIndex: 0,
          explanation:
            "Sama seperti PPh: setor paling lambat tanggal 10, lapor SPT Masa paling lambat tanggal 20 bulan berikutnya.",
          difficulty: "sedang",
        },
        {
          id: "ch10-l03-q4",
          question: "Sanksi telat lapor SPT Masa Bea Materai oleh PPP (notaris, bank):",
          options: ["Rp 100.000", "Rp 500.000", "Rp 1.000.000", "0,6%/bln"],
          correctIndex: 0,
          explanation:
            "Sanksi telat lapor SPT Masa Bea Materai = Rp 100.000 (Pasal 7 KUP). Sanksi telat setor = 0,6%/bln (Pasal 19, MIR).",
          difficulty: "sedang",
        },
        {
          id: "ch10-l03-q5",
          question: "Berikut yang BUKAN PPP (Pemungut Pihak Ketiga) Bea Materai:",
          options: ["Notaris", "PPAT (Pejabat Pembuat Akta Tanah)", "Bank & lembaga keuangan", "WP orang pribadi biasa"],
          correctIndex: 3,
          explanation:
            "PPP Bea Materai = pihak yang ditunjuk DJP: Notaris, PPAT, bank, Peruri, kantor pos. WP orang pribadi biasa bukan PPP, hanya 'pembayar' Bea Materai.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Notaris Telat Setor & Lapor Bea Materai",
        description:
          "Notaris Bu Dewi selama April 2026 menggunakan 300 meterai mesin (Rp 3.000.000). Bu Dewi setor ke kas negara tanggal 15 Mei 2026 (5 hari terlambat) dan lapor SPT Masa Bea Materai tanggal 25 Mei 2026 (5 hari terlambat). Hitung total sanksi yang harus dibayar Notaris Bu Dewi (MIR Mei 2026 = 0,6%/bln).",
        solution:
          "1. Sanksi telat setor (Pasal 19 KUP):\n- Telat 5 hari dari deadline 10 Mei → dihitung 1 bulan penuh (sesuai KUP, kurang dari 1 bln dihitung 1 bln).\n- Sanksi = 0,6% × Rp 3.000.000 × 1 bln = Rp 18.000.\n\n2. Sanksi telat lapor SPT Masa (Pasal 7 KUP):\n- Telat 5 hari dari deadline 20 Mei.\n- Denda tetap = Rp 100.000.\n\n3. Total sanksi Notaris Bu Dewi = Rp 18.000 + Rp 100.000 = Rp 118.000.\n\nCatatan:\n- Setoran Bea Materai asli Rp 3.000.000 tetap harus dibayar.\n- Total kewajiban = Rp 3.000.000 + Rp 118.000 = Rp 3.118.000.\n- Sanksi dapat dihindari dengan: setor tepat waktu (≤ 10 Mei) dan lapor tepat waktu (≤ 20 Mei).\n- Notaris dapat memanfaatkan fitur auto-reminder di Coretax untuk mencegah keterlambatan.\n- Di 2026, Coretax dapat memberi notifikasi otomatis ke PPP H-3 dan H-1 sebelum deadline.",
      },
      tags: [
        "pembayaran Bea Materai",
        "e-Materai",
        "materai tempel",
        "meterai mesin",
        "sanksi Bea Materai",
        "PPP Bea Materai",
        "denda 100%",
        "integrasi Coretax",
      ],
    },
  ],
  exam: [
    {
      id: "ch10-e1",
      question: "Tarif Bea Materai yang berlaku di tahun 2026 adalah?",
      options: ["Rp 3.000 untuk dokumen ≤ Rp 1jt, Rp 6.000 untuk > Rp 1jt", "Rp 10.000 tunggal untuk semua dokumen", "Rp 6.000 untuk semua dokumen", "Rp 5.000 + Rp 10.000 bertingkat"],
      correctIndex: 1,
      explanation: "Sejak 1 Jan 2021 (UU 10/2020), tarif Bea Materai tunggal Rp 10.000 per dokumen.",
      difficulty: "mudah",
    },
    {
      id: "ch10-e2",
      question: "Dasar hukum Bea Materai yang berlaku di tahun 2026:",
      options: ["UU 13/1985", "UU 10/2020", "UU 7/2021 (UU HPP)", "UU 28/2009 (PDRD)"],
      correctIndex: 1,
      explanation: "UU 10/2020 tentang Bea Materai, efektif 1 Januari 2021. Menggantikan UU 13/1985.",
      difficulty: "mudah",
    },
    {
      id: "ch10-e3",
      question: "Kuitansi pembayaran Rp 8jt. Berapa Bea Materai yang harus dibayar?",
      options: ["Tidak perlu materai", "Rp 10.000", "Rp 5.000", "Rp 20.000"],
      correctIndex: 1,
      explanation: "Kuitansi satu sisi, nilai ≥ Rp 5jt → kena materai Rp 10.000 (tarif tunggal).",
      difficulty: "mudah",
    },
    {
      id: "ch10-e4",
      question: "Kontrak sewa rumah Rp 3jt/tahun. Berapa Bea Materai?",
      options: ["Tidak perlu (di bawah Rp 5jt)", "Rp 10.000", "Rp 5.000", "Rp 3.000"],
      correctIndex: 1,
      explanation: "Kontrak = dokumen DUA SISI, tanpa batas minimum. Langsung kena Rp 10.000. Batas Rp 5jt cuma buat dokumen satu sisi.",
      difficulty: "sedang",
    },
    {
      id: "ch10-e5",
      question: "Berikut dokumen yang DIKECUALIKAN dari Bea Materai:",
      options: ["Kontrak sewa", "Akta notaris", "Ijazah dan rapor", "Surat pernyataan"],
      correctIndex: 2,
      explanation: "Ijazah/rapor dikecualikan dari Bea Materai (dokumen pendidikan). Lainnya tetap kena materai Rp 10.000.",
      difficulty: "sedang",
    },
    {
      id: "ch10-e6",
      question: "Cara pembayaran Bea Materai yang utama di 2026 (terintegrasi Coretax):",
      options: ["Materai tempel fisik", "e-Materai (QR code digital)", "Meterai mesin", "Transfer langsung tanpa bukti"],
      correctIndex: 1,
      explanation: "e-Materai paling umum di 2026 — terintegrasi Coretax DJP, validasi QR real-time, aman dari pemalsuan.",
      difficulty: "sedang",
    },
    {
      id: "ch10-e7",
      question: "Sanksi dokumen seharusnya ber-materai tapi tidak (UU 10/2020):",
      options: ["Pidana 1-7 tahun", "Denda 100% + dilengkapi materai (total Rp 20.000)", "Denda 200% (UU lama)", "Tidak ada sanksi"],
      correctIndex: 1,
      explanation: "UU 10/2020: denda 100% dari Bea Materai + dilengkapi materainya. Total Rp 20.000 (Rp 10.000 materai + Rp 10.000 denda). Bukan pidana (kecuali pemalsuan).",
      difficulty: "sedang",
    },
    {
      id: "ch10-e8",
      question: "Sanksi telat lapor SPT Masa Bea Materai oleh PPP (notaris):",
      options: ["Rp 100.000", "Rp 500.000", "Rp 1.000.000", "0,6%/bln"],
      correctIndex: 0,
      explanation: "Sanksi telat lapor SPT Masa Bea Materai = Rp 100.000 (Pasal 7 KUP). Sanksi telat setor = 0,6%/bln (Pasal 19, MIR).",
      difficulty: "sedang",
    },
    {
      id: "ch10-e9",
      question: "PPP Bea Materai wajib setor & lapor paling lambat:",
      options: ["Setor ≤ tgl 10, lapor ≤ tgl 20 bulan berikutnya", "Setor ≤ tgl 20, lapor ≤ tgl 10 bulan berikutnya", "Setor ≤ akhir bulan, lapor ≤ awal bulan berikutnya", "Setor ≤ tgl 15, lapor ≤ tgl 25 bulan berikutnya"],
      correctIndex: 0,
      explanation: "Sama seperti PPh: setor paling lambat tanggal 10, lapor SPT Masa paling lambat tanggal 20 bulan berikutnya.",
      difficulty: "sedang",
    },
    {
      id: "ch10-e10",
      question: "Pemalsuan materai tempel dapat dikenai sanksi pidana sesuai UU Bea Materai:",
      options: ["1-7 tahun penjara", "6 bulan penjara", "Denda Rp 100jt saja", "Tidak ada sanksi pidana"],
      correctIndex: 0,
      explanation: "Pemalsuan materai tempel = pidana 1-7 tahun penjara (Pasal 39 UU Bea Materai). Sanksi berat karena merugikan negara.",
      difficulty: "sulit",
    },
  ],
}
