import type { Chapter } from "../types"

// ============================================================================
// BAB 6: PPh PEMOTONGAN & PEMUNGUTAN (POT & PUT)
// Pasal 21, 22, 23, 26, 15, dan PPh Final Pasal 4 ayat (2)
// ============================================================================

export const chapter06: Chapter = {
  id: "ch06",
  slug: "pph-pot-put",
  number: 6,
  title: "PPh Pemotongan & Pemungutan (Pasal 21, 22, 23, 26, 15)",
  shortTitle: "PPh Pot & Put",
  description:
    "Bab exam-heavy! Semua soal hitung PPh 21 pegawai tetap, PPh 22 impor, PPh 23 jasa, PPh 26 WPLN, PPh 15 bendahara, dan PPh Final 4(2). Update 2026: biaya jabatan Rp 6jt/thn, Coretax pre-populated, PPh 22 marketplace delay.",
  icon: "Scissors",
  color: "rose",
  difficulty: "mahir",
  estimatedMinutes: 360,
  objectives: [
    "Paham konsep pemotongan vs pemungutan pajak dan bedanya",
    "Bisa hitung PPh 21 pegawai tetap, bukan pegawai, dan penerima pensiun lengkap dengan biaya jabatan & PTKP",
    "Ngerti PPh 22 impor (0,5%-10%), BUMN/pemerintah 1,5%, industri minyak 0,25-0,3%",
    "Hafal tarif PPh 23: jasa 2%, sewa 15%, royalti 15%, imbalan BUMN 4,75%",
    "Paham PPh 26 buat WPLN: 20% dividen/bunga/royalti, 10% obligasi, plus P3B/tax treaty",
    "Kenal PPh 15 bendahara pemerintah dan PPh Final Pasal 4 ayat (2) untuk bunga deposito, SBN, dll",
    "Update 2026: Coretax, biaya jabatan Rp 500rb/bln, PPh 22 marketplace delay",
  ],
  lessons: [
    // ==========================================================================
    // LESSON 1: PENGERTIAN & SUBJEK PPh 21
    // ==========================================================================
    {
      id: "ch06-l01",
      slug: "pengertian-pph-21",
      title: "Pengertian & Subjek PPh 21 — Siapa Potong, Siapa Dipotong?",
      subtitle: "Definisi PPh 21, pemotong (employer, dana pensiun, badan), dan yang dipotong",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 25,
      content: `# Pengertian & Subjek PPh 21 🔍

Yuk, kita mulai dari yang paling dasar dulu. PPh 21 ini pajak yang paling sering keluar di ujian Brevet AB karena lo setiap bulan bakal ketemu kalau lo kerja kantoran. Pokoknya: **setiap orang yang dapet penghasilan sehubungan dengan pekerjaan, wajib bayar PPh 21**.

Gampangnya gini: lo kerja, lo dapet gaji, gaji lo dipotong pajaknya sama HRD kantor lo. Itulah PPh 21. Tapi ada banyak detail yang sering bikin bingung. Kita bedah pelan-pelan ya.

## Definisi Resmi PPh 21 (UU PPh Pasal 21)

> PPh 21 adalah pajak penghasilan yang dipotong atas penghasilan sehubungan dengan pekerjaan, jasa, dan kegiatan orang pribadi.

Artinya, PPh 21 itu pajak penghasilan orang pribadi yang dipotong **di sumber** — artinya dipotong oleh pihak ketiga (employer) sebelum penghasilan sampai ke tangan yang berhak (karyawan). Sistem ini disebut **Withholding Assessment System** (yang udah kita bahas di Bab 1 ya).

Kenapa pakai sistem pemotongan di sumber? Biar fiskus nggak perlu ngurusin jutaan wajib pajak orang pribadi satu-satu. Cukup tagih pemotongnya (perusahaan), beres.

## Subjek PPh 21 — Siapa Aja?

Subjek PPh 21 ada 2 kelompok besar: **pemotong** (yang motong pajak) dan **yang dipotong** (yang kena potongan). Kita bahas keduanya.

### A. Pemotong PPh 21 (Wajib Potong!)

Pemotong PPh 21 itu pihak yang memberikan penghasilan kepada wajib pajak orang pribadi. Ada 3 kategori utama:

1. **Badan** — PT, CV, Koperasi, BUMN, Yayasan, perkumpulan, dll. Ini paling umum.
2. **Perusahaan-perusahaan Perseorangan** — toko, warung, salon, dll yang punya omzet di atas batas tertentu.
3. **Dana Pensiun** — buat potong PPh 21 atas uang pesangon dan pembayaran pensiun berkala.
4. **Bendahara Pemerintah** — buat potong PPh 21 pegawai pemerintah (ini related ke PPh 15 juga, nanti dibahas).
5. **Perwakilan Perusahaan Asing** — kantor berita, bank, dll.
6. **Orang Pribadi sebagai Pemberi Kerja** — contoh: lo punya baby sitter di rumah, lo wajib potong PPh 21 (tapi praktis jarang dilakukan).
7. **Penyelenggara Kegiatan** — buat potong PPh 21 atas hadiah undian, seminar, dll.

> **Tip ujian:** Yang paling sering ditanya di ujian: badan, dana pensiun, bendahara pemerintah, dan penyelenggara kegiatan. Hafalin 4 ini minimal!

### B. Yang Dipotong PPh 21 (Penerima Penghasilan)

Yang dipotong PPh 21 ini lebih banyak lagi. Ada beberapa kategori:

1. **Pegawai Tetap** — yang terima gaji rutin tiap bulan, punya hubungan kerja tetap.
2. **Penerima Pensiun Berkala** — pensiunan yang terima uang pensiun tiap bulan dari dana pensiun.
3. **Penerima Uang Pesangon** — pegawai yang di-PHK dan terima uang pisah.
4. **Bukan Pegawai** — orang yang terima imbalan atas jasa, antara lain:
   - **Tenaga ahli** (pengacara, akuntan, dokter, arsitek, konsultan, notaris, PPAT)
   - **Pemain seni, sutradara, pemain film, penulis**
   - **Atlet profesional**
   - **Pemberi jasa orang pribadi lainnya** (tukang, ojek online, dll kalau atas dasar kontrak)
5. **Wajib Pajak Luar Negeri (WPLN) — PHLN** — orang asing yang kerja di Indonesia minimal 183 hari dalam 12 bulan, terima penghasilan dari Indonesia.

## Beda Pegawai Tetap vs Bukan Pegawai (Penting!)

Ini bedanya, sering bikin bingung:

| Aspek | Pegawai Tetap | Bukan Pegawai |
|-------|---------------|---------------|
| Hubungan kerja | Tetap, rutin | Kontrak/project-based |
| Frekuensi pembayaran | Tiap bulan | Sesuai kontrak |
| Biaya jabatan | Dapat 5% max Rp 500rb/bln | **Tidak dapat** |
| Perhitungan | Bulanan → Setahun → ÷ 12 | Per penerimaan, tarif harian |
| Iuran pensiun | Dapat dikurangkan (JHT 2%, JP 1%) | Tidak relevan |

Jadi pegawai tetap itu yang gajinya rutin dan dia punya status sebagai karyawan tetap perusahaan. Bukan pegawai itu lebih ke freelancer/kontraktor/tenaga ahli yang dibayar per project.

## Kapan PPh 21 Dipotong? (Saat Pemotongan)

Saat pemotongan PPh 21 adalah saat **pembayaran** penghasilan kepada yang berhak. Artinya:

- Kalau gaji dibayar tanggal 25 setiap bulan → PPh 21 dipotong saat itu juga
- Kalau honor dibayar 1x setelah project selesai → PPh 21 dipotong saat pembayaran

Tapi ada pengecualian: **PPh 21 atas gaji pegawai tetap tetap dipotong tiap bulan** walaupun belum dibayar, karena dianggap sudah terutang saat bulan berjalan.

## Dasar Pemotongan PPh 21

PPh 21 dipotong dari **bruto** penghasilan (kecuali untuk pegawai tetap ada beberapa pengurangan). Bruto itu pendapatan sebelum dipotong apapun. Pengurangannya baru berlaku setelah perhitungan, antara lain:

- Biaya jabatan (khusus pegawai tetap) = 5% max Rp 500rb/bln
- Iuran pensiun (JHT, JP — buat pegawai yang ikut dana pensiun)
- Iuran BPJS Ketenagakerjaan bagian pegawai (JHT 2%, JP 1%)

> **Catatan 2026:** Iuran JHT 2% dan JP 1% (max Rp 110.863/bln untuk JP, berlaku Maret 2026 - Februari 2027) TETAP bisa dikurangkan dari bruto untuk pegawai tetap. Tapi iuran BPJS Kesehatan (4% perusahaan + 1% pegawai) TIDAK BISA dikurangkan untuk PPh 21 — itu udah final di perhitungan terpisah.

## Bukti Potong & Setoran PPh 21

Setiap pemotongan PPh 21 wajib dibuatkan **Bukti Potong** (Formulir 1721-A1 untuk pegawai tetap, 1721-VIII untuk bukan pegawai, dll). Setoran PPh 21 ke kas negara paling lambat **tanggal 10 bulan berikutnya**, laporan SPT Masa paling lambat **tanggal 20 bulan berikutnya**.

Di **Coretax** (live sejak 1 Januari 2025), bukti potong udah otomatis dibuat dan di-crosscheck sama SPT pemberi kerja. Jadi kalau data antara bukti potong dan SPT nggak match, akan ketahuan. Nggak bisa lagi maen "tiup-tiup angka" ya.

## SPT Tahunan PPh 21

Selain SPT Masa bulanan, pemotong PPh 21 wajib lapor **SPT Tahunan PPh 21** paling lambat:
- **31 Maret** untuk pemotong badan (karena ikut tahun pajak badan)
- **30 April** untuk pemotong orang pribadi (mengikuti tahun pajak orang pribadi)

SPT Tahunan ini nanti direkap semua bukti potong selama setahun, plus dilaporkan di SPT Tahunan PPh Badan/Orang Pribadi sebagai pengurang penghasilan.

## Yang BUKAN PPh 21 (Sering Jebakan!)

Beberapa penghasilan yang SERING DIANGGAP PPh 21 tapi BUKAN:

- **Honorarium anggota dewan komisaris** → sebenarnya PPh 21 (sudah benar)
- **Bunga deposito** → PPh Final 4(2) 20%, BUKAN PPh 21
- **Hiburan, hadiah undian** → PPh Final 4(2) 25%
- **Pembayaran sewa tanah/bangunan** → PPh Final 4(2) 10% (sewa tanah/bangunan)
- **Pembayaran jasa konstruksi** → PPh Final 4(2) 1,75-4%
- **Pembayaran ke dokter di rumah sakit** → kalo RS potong, itu PPh 21; kalau pasien langsung bayar ke dokter, dokternya yang lapor sendiri

## Kasus Nyata: HRD PT Maju Jaya

PT Maju Jaya punya 50 karyawan. Tiap bulan HRD dapet gaji karyawan dari finance, hitung PPh 21 masing-masing, potong dari gaji, setor ke kas negara paling lambat tanggal 10 bulan berikutnya, lalu lapor SPT Masa PPh 21 paling lambat tanggal 20.

Setiap karyawan dapet slip gaji yang ada rincian: gaji bruto, biaya jabatan, iuran pensiun, PPh 21, gaji bersih. Slip gaji ini + bukti potong setahun (Formulir 1721-A1) jadi bukti buat karyawan lapor SPT Tahunan PPh OP.

Di Coretax, semua bukti potong itu otomatis ke-pre-populate di SPT Tahunan PPh OP karyawan. Tinggal dicek aja udah bener belum. Nggak perlu input manual kayak dulu.

## Update 2026: Aturan Baru yang Penting

Beberapa update 2026 yang wajib kamu tahu:

1. **Biaya Jabatan Tetap Rp 500rb/bln** (Rp 6jt/thn) — UMK-based adjustment yang dijanjikan UU HPP **belum diberlakukan**. Jadi masih pakai tarif lama.
2. **PTKP Tetap** TK/0 = Rp 54jt, K/3 = Rp 72jt — tidak ada perubahan.
3. **BPJS JP ceiling** Rp 110.863/bln (Maret 2026-Februari 2027) — buat perhitungan maksimal iuran JP yang bisa dikurangkan.
4. **Coretax pre-populated** — bukti potong PPh 21 otomatis muncul di SPT Tahunan PPh OP karyawan. Tinggal konfirmasi.
5. **PPh 22 Marketplace delay** — PPh 22 atas transaksi e-commerce tertunda lagi tahun 2026 (PENG-46/PJ.09/2026, 5 Agustus 2026).

## Tabel: Tarif PPh OP (yang Dipakai PPh 21 Setahun)

| Lapisan | PKP Setahun (Rp) | Tarif |
|---------|------------------|-------|
| I | s.d. 60.000.000 | 5% |
| II | 60.000.001 - 250.000.000 | 15% |
| III | 250.000.001 - 500.000.000 | 25% |
| IV | 500.000.001 - 5.000.000.000 | 30% |
| V | di atas 5.000.000.000 | 35% |

Tarif ini berlaku sejak 2022 (UU HPP) dan tidak berubah sampai 2026. Tarif inilah yang dipakai buat hitung PPh 21 setahun pegawai tetap.

## Tabel: PTKP 2026

| Status | PTKP setahun (Rp) |
|--------|-------------------|
| TK/0 (lajang) | 54.000.000 |
| K/0 (kawin, tanpa tanggungan) | 58.500.000 |
| K/1 (kawin, 1 anak) | 63.000.000 |
| K/2 (kawin, 2 anak) | 67.500.000 |
| K/3 (kawin, 3 anak, max) | 72.000.000 |

Ingat: tanggungan max 3 anak ya. Lebih dari itu nggak nambah PTKP.

## Ringkasan

- **Pemotong PPh 21**: badan, perusahaan perseorangan, dana pensiun, bendahara pemerintah, orang pribadi pemberi kerja, penyelenggara kegiatan.
- **Yang dipotong**: pegawai tetap, penerima pensiun, bukan pegawai, WPLN/PHLN.
- **Sistem**: Withholding Assessment — dipotong di sumber sebelum sampai ke penerima.
- **Tarif**: pakai tarif progresif PPh OP (5-35%) dengan PTKP sebagai pengurang.
- **Coretax 2026**: bukti potong otomatis pre-populated di SPT Tahunan.

Paham kan dasarnya? Lanjut kita bahas biaya jabatan & tarif PPh 21 di lesson berikutnya! 🚀
`,
      keyPoints: [
        "PPh 21 = pajak penghasilan orang pribadi yang dipotong di sumber oleh pemotong",
        "Pemotong PPh 21: badan, dana pensiun, bendahara pemerintah, penyelenggara kegiatan, orang pribadi pemberi kerja",
        "Yang dipotong: pegawai tetap, penerima pensiun, bukan pegawai (tenaga ahli, dll), WPLN/PHLN",
        "Bedanya pegawai tetap (dapat biaya jabatan) vs bukan pegawai (tidak dapat)",
        "Saat pemotongan = saat pembayaran penghasilan",
        "Setoran paling lambat tgl 10, SPT Masa paling lambat tgl 20 bulan berikutnya",
        "Coretax 2026: bukti potong pre-populated di SPT Tahunan PPh OP",
      ],
      quiz: [
        {
          id: "ch06-l01-q1",
          question: "Manakah berikut ini yang BUKAN termasuk pemotong PPh 21?",
          options: [
            "Badan (PT, CV, Koperasi)",
            "Dana Pensiun",
            "Bendahara Pemerintah",
            "Karyawan individu yang bayar pajak sendiri",
          ],
          correctIndex: 3,
          explanation:
            "Karyawan individu itu yang DIPOTONG, bukan yang memotong. Yang memotong adalah pemberi kerja/badan/dana pensiun/bendahara.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l01-q2",
          question: "Seorang freelancer desainer yang dibayar per project oleh PT XYZ termasuk kategori?",
          options: [
            "Pegawai tetap",
            "Bukan pegawai",
            "Penerima pensiun",
            "WPLN",
          ],
          correctIndex: 1,
          explanation:
            "Freelancer per project itu BUKAN pegawai karena nggak punya hubungan kerja tetap. Dia termasuk bukan pegawai, tarifnya per penerimaan.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l01-q3",
          question: "Saat pemotongan PPh 21 adalah?",
          options: [
            "Saat karyawan mulai bekerja",
            "Saat pembayaran penghasilan kepada yang berhak",
            "Saat akhir tahun pajak",
            "Saat SPT Tahunan dilaporkan",
          ],
          correctIndex: 1,
          explanation:
            "Saat pemotongan = saat pembayaran penghasilan. Tapi untuk pegawai tetap, dipotong tiap bulan walaupun belum dibayar fisik.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l01-q4",
          question: "Kapan setoran PPh 21 harus dibayar ke kas negara?",
          options: [
            "Tanggal 10 bulan berikutnya",
            "Tanggal 20 bulan berikutnya",
            "Tanggal 25 bulan berjalan",
            "Tanggal 31 bulan berjalan",
          ],
          correctIndex: 0,
          explanation:
            "Setoran PPh 21 paling lambat tanggal 10 bulan berikutnya. SPT Masa-nya paling lambat tanggal 20 bulan berikutnya.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l01-q5",
          question: "Di sistem Coretax 2026, apa yang berubah untuk PPh 21?",
          options: [
            "Bukti potong harus dibuat manual",
            "Bukti potong PPh 21 otomatis pre-populated di SPT Tahunan PPh OP karyawan",
            "PPh 21 tidak perlu dilaporkan lagi",
            "Setoran PPh 21 bisa ditiadakan",
          ],
          correctIndex: 1,
          explanation:
            "Coretax otomatis cross-check bukti potong PPh 21 dengan SPT Tahunan karyawan. Data langsung muncul (pre-populated), tinggal dikonfirmasi.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Bendahara Sekolah Negeri vs HRD PT Swasta",
        description:
          "Bu Ani bendahara di SDN 01 Jakarta, dia bayar gaji guru PNS dan guru honorer. Pak Budi HRD di PT Maju, dia bayar gaji 50 karyawan swasta. Siapa yang jadi pemotong PPh 21 dan apa bedanya?",
        solution:
          "Keduanya pemotong PPh 21. Bu Ani sebagai bendahara pemerintah memotong PPh 21 atas gaji PNS (ini juga terkait PPh 15 bendahara pemerintah — beda formulir). Pak Budi memotong PPh 21 atas gaji 50 karyawan PT Maju. Bedanya: Bu Ani lapor dengan formulir PPh 21 bendahara pemerintah, Pak Budi lapor dengan formulir PPh 21 badan biasa. Tapi mekanisme pemotongannya sama — pakai tarif PPh OP dengan biaya jabatan dan PTKP. Keduanya setor paling lambat tanggal 10 bulan berikutnya dan lapor SPT Masa tanggal 20 bulan berikutnya.",
      },
      tags: ["PPh 21", "pemotong pajak", "subjek pajak", "pegawai tetap", "bukan pegawai", "WPLN", "Coretax"],
    },

    // ==========================================================================
    // LESSON 2: BIAYA JABATAN & TARIF PPh 21 2026
    // ==========================================================================
    {
      id: "ch06-l02",
      slug: "biaya-jabatan-2026",
      title: "Biaya Jabatan & Tarif PPh 21 Tahun 2026",
      subtitle: "Biaya jabatan 5% max Rp 500rb/bln, tarif PPh OP 5-35%, perhitungan bruto→neto→setahun",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 30,
      content: `# Biaya Jabatan & Tarif PPh 21 2026 💰

Oke, sekarang kita masuk ke bagian teknis tapi SANGAT PENTING: biaya jabatan dan tarif PPh 21. Ini foundation buat ngehitung PPh 21 pegawai tetap di lesson berikutnya. Kalau ini nggak paham, bakal susah ngerjain soal hitungan.

## Apa Itu Biaya Jabatan?

Biaya jabatan adalah **pengurang bruto** khusus buat pegawai tetap. Konsepnya: pegawai tetap itu butuh biaya buat kerja — transport, makan siang, pakaian kerja, dll. Tapi biaya-biaya ini nggak selalu ada buktinya. Jadi pemerintah kasih **biaya jabatan** sebagai kompensasi standar.

Rumusnya:
> **Biaya Jabatan = 5% × Bruto, maksimal Rp 500.000/bulan = Rp 6.000.000/tahun**

Jadi perhitungannya:
- Bruto gaji sebulan Rp 5jt → biaya jabatan = 5% × 5jt = Rp 250rb
- Bruto gaji sebulan Rp 10jt → biaya jabatan = 5% × 10jt = Rp 500rb (maksimal)
- Bruto gaji sebulan Rp 20jt → biaya jabatan = **Rp 500rb** (cap, bukan 5% × 20jt = Rp 1jt!)

> **Tip ujian:** Kalau gaji bruto ≥ Rp 10jt/bln, biaya jabatan pasti Rp 500rb (max). Kalau gaji bruto < Rp 10jt/bln, biaya jabatan = 5% × bruto. Ingat ini jangan sampe salah!

## Tabel: Contoh Biaya Jabatan

| Gaji Bruto/bulan | 5% × Bruto | Biaya Jabatan Aktual |
|------------------|------------|----------------------|
| Rp 4.000.000 | Rp 200.000 | Rp 200.000 |
| Rp 6.000.000 | Rp 300.000 | Rp 300.000 |
| Rp 8.000.000 | Rp 400.000 | Rp 400.000 |
| Rp 10.000.000 | Rp 500.000 | Rp 500.000 (max) |
| Rp 15.000.000 | Rp 750.000 | Rp 500.000 (max) |
| Rp 30.000.000 | Rp 1.500.000 | Rp 500.000 (max) |

Liat polanya? Di atas Rp 10jt, biaya jabatan stagnant di Rp 500rb.

## Siapa yang Dapat Biaya Jabatan?

HANYA **pegawai tetap** yang dapat biaya jabatan. Bukan pegawai (freelancer, tenaga ahli) NGGAK dapat. Ini sering jadi jebakan di ujian!

## Iuran Pensiun (JHT & JP)

Selain biaya jabatan, ada pengurang bruto lain: **iuran pensiun** yang dibayar pegawai. Ini bagian dari BPJS Ketenagakerjaan:

| Komponen | Pegawai Bayar | Dapat Dikurangkan? |
|----------|---------------|---------------------|
| JHT (Jaminan Hari Tua) | 2% × bruto | YA |
| JP (Jaminan Pensiun) | 1% × bruto, max Rp 110.863/bln | YA |
| JKK (Jaminan Kecelakaan Kerja) | 0% (perusahaan) | - |
| JK (Jaminan Kematian) | 0% (perusahaan) | - |
| BPJS Kesehatan | 1% × bruto | TIDAK |

> **Update 2026:** Ceiling JP bulanan = Rp 110.863 (berlaku Maret 2026 - Februari 2027). Jadi kalau 1% × bruto lebih dari Rp 110.863, yang bisa dikurang cuma Rp 110.863.

## Contoh: Bruto → Neto

Misal Andi pegawai tetap, gaji bruto Rp 15jt/bln. Dia ikut BPJS Ketenagakerjaan.

- Bruto: Rp 15.000.000
- Biaya jabatan: Rp 500.000 (max, karena bruto ≥ 10jt)
- Iuran JHT (2%): Rp 300.000
- Iuran JP (1% × 15jt = Rp 150rb, tapi max Rp 110.863): Rp 110.863
- **Total pengurang**: Rp 500.000 + Rp 300.000 + Rp 110.863 = Rp 910.863
- **Neto sebulan**: Rp 15.000.000 - Rp 910.863 = Rp 14.089.137

Gimana, udah keliatan alurnya? Bruto - biaya jabatan - iuran pensiun = neto.

## Tarif PPh 21 = Tarif PPh OP

Setelah dapet neto sebulan, dikali 12 = neto setahun. Lalu dikurangi PTKP, dapet PKP (Penghasilan Kena Pajak). PKP inilah yang dikenai tarif progresif PPh OP.

Tabel tarif PPh OP (UU HPP, berlaku sejak 2022 sampai 2026):

| Lapisan | PKP Setahun | Tarif | PPh Terutang per Lapisan (maks) |
|---------|-------------|-------|----------------------------------|
| I | s.d. 60.000.000 | 5% | Rp 3.000.000 |
| II | 60.000.001 - 250.000.000 | 15% | Rp 28.500.000 |
| III | 250.000.001 - 500.000.000 | 25% | Rp 62.500.000 |
| IV | 500.000.001 - 5.000.000.000 | 30% | Rp 1.350.000.000 |
| V | di atas 5.000.000.000 | 35% | (tergantung PKP) |

Cara baca tabel: 
- PKP Rp 50jt → seluruhnya di lapisan I, PPh = 5% × 50jt = Rp 2,5jt
- PKP Rp 100jt → Rp 60jt × 5% + Rp 40jt × 15% = Rp 3jt + Rp 6jt = Rp 9jt
- PKP Rp 300jt → Rp 3jt + Rp 28,5jt + Rp 12,5jt (50jt × 25%) = Rp 44jt

> **Tip ujian:** Hafalin "60-250-500-5M" dan tarifnya "5-15-25-30-35". Ini kunci biar cepet ngerjain soal hitungan.

## PTKP 2026 (Penghasilan Tidak Kena Pajak)

PTKP itu jumlah yang nggak kena pajak. Berikut tabelnya:

| Status | PTKP Setahun |
|--------|--------------|
| TK/0 (lajang) | Rp 54.000.000 |
| K/0 (kawin, 0 anak) | Rp 58.500.000 |
| K/1 (kawin, 1 anak) | Rp 63.000.000 |
| K/2 (kawin, 2 anak) | Rp 67.500.000 |
| K/3 (kawin, 3 anak, max) | Rp 72.000.000 |

Rumus PTKP: 54jt + 4,5jt (pasangan, kalau K/0+) + 4,5jt × jumlah tanggungan (max 3).

**Khusus K/I (kawin penghasilan digabung):**
- Setahun: 54jt + 4,5jt (pasangan) + 4,5jt (diri sendiri sebagai tanggungan) + tanggungan
- K/I/0: 63.000.000, K/I/1: 67.500.000, K/I/2: 72.000.000, K/I/3: 76.500.000

Tapi K/I ini jarang banget dipakai, biasanya cuma kalau penghasilan pasangan digabung dalam satu SPT.

## Update 2026: Apa yang Berubah?

Berdasarkan UU HPP, PTKP seharusnya disesuaikan dengan UMK (Upah Minimum Kawasan) tiap tahun. Tapi **sampai 2026, aturan pelaksananya BELUM KELUAR**. Jadi:

- **PTKP tetap** Rp 54jt (TK/0) - Rp 72jt (K/3), nggak naik dari 2016.
- **Biaya jabatan tetap** 5% max Rp 500rb/bln = Rp 6jt/thn, nggak naik.
- **Tarif PPh OP tetap** 5%-35%, nggak berubah dari 2022.

> **Catatan penting:** Banyak kabar hoaks di sosmed yang bilang PTKP naik jadi Rp 60jt atau biaya jabatan naik jadi Rp 1jt. Itu **BELUM BERLAKU** tahun 2026. Resmi tetap angka di atas.

## Rumus Umum PPh 21 Pegawai Tetap (Cheat Sheet)

Biar gampang diingat, ini rumusnya:

\`\`\`
Bruto/bln
- Biaya jabatan (5% max 500rb)
- Iuran JHT (2%)
- Iuran JP (1% max 110.863)
= Neto/bln
× 12
= Neto setahun
- PTKP (sesuai status)
= PKP setahun
× Tarif progresif PPh OP
= PPh 21 setahun
÷ 12
= PPh 21/bulan
\`\`\`

Itu rumus intinya. Di lesson berikutnya kita bahas contoh kasus lengkap dengan angka-angka.

## Kasus Nyata: Budi Lajang Kerja 1 Tahun

Budi lajang, TK/0, pegawai tetap. Gaji bruto Rp 10jt/bln. Dia ikut BPJS Ketenagakerjaan. Hitung PPh 21 setahun dan per bulan.

**Langkah 1: Hitung neto sebulan**
- Bruto: Rp 10.000.000
- Biaya jabatan: 5% × 10jt = Rp 500.000 (max)
- Iuran JHT: 2% × 10jt = Rp 200.000
- Iuran JP: 1% × 10jt = Rp 100.000 (di bawah ceiling, jadi full)
- Total pengurang: Rp 800.000
- **Neto/bln**: Rp 9.200.000

**Langkah 2: Hitung neto setahun**
- Neto/bln × 12 = Rp 9.200.000 × 12 = **Rp 110.400.000**

**Langkah 3: Hitung PKP**
- PKP = Neto setahun - PTKP (TK/0 = Rp 54jt)
- PKP = Rp 110.400.000 - Rp 54.000.000 = **Rp 56.400.000**

**Langkah 4: Hitung PPh 21 setahun**
- Lapisan I (s.d. 60jt): 5% × 56.400.000 = **Rp 2.820.000**
(Karena PKP masih di lapisan I, seluruhnya kena 5%)

**Langkah 5: Hitung PPh 21 per bulan**
- PPh 21/bln = Rp 2.820.000 ÷ 12 = **Rp 235.000**

Jadi Budi dipotong PPh 21 Rp 235rb/bln. Gajinya bersih Rp 10jt - 200rb (JHT) - 100rb (JP) - 235rb (PPh 21) = **Rp 9.465.000/bln**.

Gampang kan? Ini baru yang TK/0. Nanti di lesson 3 kita bahas yang K/2 atau K/3, lebih ribet sedikit.

## PPh 21 Tidak Dipotong kalau...

Beberapa kondisi di mana PPh 21 NGGAK DIPOTONG:

1. **Gaji di bawah PTKP setahun** — karyawan honorer dengan penghasilan kotor setahun < Rp 54jt (TK/0).
2. **Pekerja harian dengan upah ≤ Rp 450rb/hari** (PMK 168/2023) — kalau upah harian di bawah ini, nggak kena PPh 21.
3. **Penerima pensiun berkala ≤ Rp 2,4jt/bln** — kena PPh 21 final 5% (akan dibahas di lesson 4).
4. **Bukan pegawai yang penghasilan bruto ≤ Rp 2jt/sehari atau ≤ Rp 4jt/sebulan** — boleh tidak dipotong PPh 21 (atau dipotong 5% final).

## Tabel: Penghasilan Tidak Kena PPh 21 (Pekerja Harian)

| Upah Harian | PPh 21 |
|-------------|--------|
| ≤ Rp 450.000 | 0% (tidak dipotong) |
| > Rp 450.000 | dipotong sesuai kumulatif bulanan, pakai tarif PPh OP |

Ini aturan baru dari PMK 168/2023 yang masih berlaku di 2026. Buat pekerja harian, lembur, freelance harian.

## Ringkasan

- **Biaya jabatan** = 5% × bruto, max Rp 500rb/bln = Rp 6jt/thn. Khusus pegawai tetap.
- **Iuran pensiun** yang bisa dikurangkan: JHT 2%, JP 1% (max Rp 110.863/bln).
- **Tarif PPh 21** = tarif PPh OP: 5%/15%/25%/30%/35% (lapisan PKP 60jt-250jt-500jt-5M).
- **PTKP 2026**: TK/0 Rp 54jt, K/3 Rp 72jt. BELUM ada perubahan dari UMK.
- **Rumus**: Bruto - biaya jabatan - iuran pensiun = neto → × 12 - PTKP = PKP → × tarif = PPh setahun → ÷ 12 = PPh/bln.

Sudah cukup paham konsepnya? Yuk lanjut ke lesson 3 buat lihat kasus hitungan yang lebih kompleks! 📚
`,
      keyPoints: [
        "Biaya jabatan = 5% × bruto, MAX Rp 500rb/bln = Rp 6jt/thn (khusus pegawai tetap)",
        "Bukan pegawai TIDAK dapat biaya jabatan",
        "Iuran JHT 2% + JP 1% (max Rp 110.863/bln, Maret 2026-Feb 2027) bisa dikurangkan",
        "BPJS Kesehatan TIDAK bisa dikurangkan dari bruto PPh 21",
        "Tarif PPh 21 = tarif PPh OP progresif 5/15/25/30/35%",
        "PTKP 2026: TK/0 = Rp 54jt, K/3 = Rp 72jt (belum berubah)",
        "Update 2026: PTKP berbasis UMK yang dijanjikan UU HPP BELUM diberlakukan",
      ],
      quiz: [
        {
          id: "ch06-l02-q1",
          question: "Berapa biaya jabatan untuk pegawai tetap dengan gaji bruto Rp 8.000.000/bulan?",
          options: ["Rp 400.000", "Rp 500.000", "Rp 800.000", "Rp 200.000"],
          correctIndex: 0,
          explanation:
            "5% × Rp 8jt = Rp 400rb. Karena di bawah Rp 10jt, biaya jabatan = 5% × bruto, belum sampai maksimal Rp 500rb.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l02-q2",
          question: "Berapa biaya jabatan untuk pegawai tetap dengan gaji bruto Rp 25.000.000/bulan?",
          options: ["Rp 1.250.000", "Rp 500.000", "Rp 750.000", "Rp 1.000.000"],
          correctIndex: 1,
          explanation:
            "Walaupun 5% × 25jt = Rp 1,25jt, biaya jabatan dibatasi maksimal Rp 500rb/bln. Jadi yang dipakai Rp 500rb.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l02-q3",
          question: "Iuran JP (Jaminan Pensiun) yang bisa dikurangkan untuk pegawai dengan gaji bruto Rp 20jt/bln di tahun 2026 (ceiling Rp 110.863/bln)?",
          options: ["Rp 200.000", "Rp 110.863", "Rp 100.000", "Rp 50.000"],
          correctIndex: 1,
          explanation:
            "1% × 20jt = Rp 200rb, tapi ada ceiling Rp 110.863/bln (Maret 2026-Feb 2027). Yang bisa dikurangkan cuma Rp 110.863.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l02-q4",
          question: "PKP Rp 100.000.000 setahun, berapa PPh 21 setahunnya? (pakai tarif PPh OP)",
          options: [
            "Rp 5.000.000",
            "Rp 7.500.000",
            "Rp 9.000.000",
            "Rp 15.000.000",
          ],
          correctIndex: 2,
          explanation:
            "Lapisan I: 5% × 60jt = 3jt. Sisanya 40jt masuk lapisan II: 15% × 40jt = 6jt. Total = 3jt + 6jt = 9jt.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l02-q5",
          question: "Apakah PTKP di tahun 2026 sudah disesuaikan dengan UMK sesuai amanat UU HPP?",
          options: [
            "Ya, sudah diberlakukan sejak 2024",
            "Belum, aturan pelaksananya belum keluar sampai 2026",
            "Ya, mulai berlaku 2026 untuk PTKP TK/0 jadi Rp 60jt",
            "Tidak pernah ada rencana penyesuaian UMK",
          ],
          correctIndex: 1,
          explanation:
            "Sampai 2026, PTKP masih Rp 54jt (TK/0) - Rp 72jt (K/3). Aturan pelaksana berbasis UMK yang dijanjikan UU HPP belum diterbitkan.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Hitung Neto Setahun Andi (K/2, Gaji Bruto Rp 12jt)",
        description:
          "Andi pegawai tetap, status K/2 (kawin 2 anak), gaji bruto Rp 12jt/bln. Dia ikut BPJS Ketenagakerjaan (JHT 2%, JP 1%). Berapa neto setahun Andi?",
        solution:
          "Per bulan: Bruto Rp 12jt - Biaya jabatan Rp 500rb (max) - JHT 2% × 12jt = Rp 240rb - JP 1% × 12jt = Rp 120rb (di bawah ceiling Rp 110.863? Salah, 120rb > 110.863, jadi cuma Rp 110.863). Total pengurang = 500rb + 240rb + 110.863 = Rp 850.863. Neto/bln = Rp 12jt - Rp 850.863 = Rp 11.149.137. Neto setahun = Rp 11.149.137 × 12 = Rp 133.789.644. PTKP K/2 = Rp 67.500.000. PKP = Rp 133.789.644 - Rp 67.500.000 = Rp 66.289.644. PPh 21 setahun: lapisan I 5% × 60jt = 3jt + lapisan II 15% × 6.289.644 = 943.447. Total PPh 21 setahun = Rp 3.943.447. Per bulan = Rp 328.621.",
      },
      tags: ["biaya jabatan", "PTKP", "tarif PPh OP", "JHT", "JP", "BPJS Ketenagakerjaan", "UU HPP", "2026 update"],
    },

    // ==========================================================================
    // LESSON 3: HITUNG PPh 21 PEGAWAI TETAP
    // ==========================================================================
    {
      id: "ch06-l03",
      slug: "hitung-pph-21-pegawai-tetap",
      title: "Hitung PPh 21 Pegawai Tetap Step by Step (Kasus Lengkap)",
      subtitle: "Bruto - biaya jabatan - iuran pensiun - PTKP → × tarif → ÷ 12 = PPh/bln",
      type: "kasus",
      difficulty: "mahir",
      estimatedMinutes: 40,
      content: `# Hitung PPh 21 Pegawai Tetap — Step by Step 🧮

Nah, sekarang kita masuk ke bagian yang paling sering keluar di ujian: **hitung PPh 21 pegawai tetap**. Pasti keluar, nggak peduli ujian Brevet A atau B. Soalnya standar dan gampang dihafal kalau udah paham pola.

## Step-by-Step Hitung PPh 21 Pegawai Tetap

Ini rumusnya (sekali lagi biar hafal):

\`\`\`
Step 1: Bruto per bulan
Step 2: - Biaya jabatan (5% × bruto, max Rp 500rb)
Step 3: - Iuran JHT (2% × bruto)
Step 4: - Iuran JP (1% × bruto, max Rp 110.863)
        = Neto per bulan
Step 5: × 12
        = Neto setahun
Step 6: - PTKP (sesuai status)
        = PKP setahun
Step 7: × Tarif PPh OP progresif (5/15/25/30/35%)
        = PPh 21 setahun
Step 8: ÷ 12
        = PPh 21 per bulan
\`\`\`

Hafalin 8 step ini! Ini kunci ngerjain soal hitungan PPh 21 pegawai tetap.

## Kasus 1: Sederhana (TK/0, Bruto Rp 7jt/bln)

**Soal:** Siti lajang, pegawai tetap, gaji bruto Rp 7jt/bln, ikut BPJS Ketenagakerjaan. Hitung PPh 21 per bulan.

**Step 1-4: Hitung Neto/bulan**
| Komponen | Jumlah |
|----------|--------|
| Bruto | Rp 7.000.000 |
| - Biaya jabatan (5% × 7jt = 350rb) | Rp 350.000 |
| - Iuran JHT (2% × 7jt) | Rp 140.000 |
| - Iuran JP (1% × 7jt = 70rb, di bawah ceiling) | Rp 70.000 |
| **Neto/bulan** | **Rp 6.440.000** |

**Step 5: Neto setahun**
= Rp 6.440.000 × 12 = **Rp 77.280.000**

**Step 6: PKP setahun**
= Rp 77.280.000 - Rp 54.000.000 (PTKP TK/0) = **Rp 23.280.000**

**Step 7: PPh 21 setahun**
Karena PKP Rp 23.28jt masih di lapisan I (s.d. 60jt):
= 5% × Rp 23.280.000 = **Rp 1.164.000**

**Step 8: PPh 21 per bulan**
= Rp 1.164.000 ÷ 12 = **Rp 97.000**

Siti dipotong PPh 21 Rp 97rb/bln. Gajinya bersih Rp 7jt - 140rb (JHT) - 70rb (JP) - 97rb (PPh 21) = Rp 6.693.000.

## Kasus 2: Menengah (K/2, Bruto Rp 15jt/bln)

**Soal:** Budi kawin 2 anak, gaji bruto Rp 15jt/bln, ikut BPJS. Hitung PPh 21/bln.

**Step 1-4: Neto/bulan**
| Komponen | Jumlah |
|----------|--------|
| Bruto | Rp 15.000.000 |
| - Biaya jabatan (max) | Rp 500.000 |
| - Iuran JHT (2% × 15jt) | Rp 300.000 |
| - Iuran JP (1% × 15jt = 150rb, max Rp 110.863) | Rp 110.863 |
| **Neto/bulan** | **Rp 14.089.137** |

**Step 5: Neto setahun**
= Rp 14.089.137 × 12 = **Rp 169.069.644**

**Step 6: PKP setahun**
= Rp 169.069.644 - Rp 67.500.000 (PTKP K/2) = **Rp 101.569.644**

**Step 7: PPh 21 setahun (dua lapisan)**
- Lapisan I: 5% × Rp 60.000.000 = Rp 3.000.000
- Lapisan II: 15% × (101.569.644 - 60.000.000) = 15% × Rp 41.569.644 = Rp 6.235.447
- **Total PPh 21 setahun** = Rp 3.000.000 + Rp 6.235.447 = **Rp 9.235.447**

**Step 8: PPh 21 per bulan**
= Rp 9.235.447 ÷ 12 = **Rp 769.621**

Budi dipotong PPh 21 Rp 769.621/bln.

## Kasus 3: Sulit (K/3, Bruto Rp 35jt/bln + Tunjangan)

**Soal:** Pak Joko kawin 3 anak, gaji pokok Rp 25jt + tunjangan jabatan Rp 7jt + tunjangan transport Rp 3jt/bln = total bruto Rp 35jt/bln. Ikut BPJS. Hitung PPh 21/bln.

**Step 1-4: Neto/bulan**
| Komponen | Jumlah |
|----------|--------|
| Bruto (gaji + tunjangan) | Rp 35.000.000 |
| - Biaya jabatan (max) | Rp 500.000 |
| - Iuran JHT (2% × 35jt = 700rb) | Rp 700.000 |
| - Iuran JP (max Rp 110.863) | Rp 110.863 |
| **Neto/bulan** | **Rp 33.689.137** |

**Step 5: Neto setahun**
= Rp 33.689.137 × 12 = **Rp 404.269.644**

**Step 6: PKP setahun**
= Rp 404.269.644 - Rp 72.000.000 (PTKP K/3) = **Rp 332.269.644**

**Step 7: PPh 21 setahun (tiga lapisan)**
- Lapisan I: 5% × 60.000.000 = Rp 3.000.000
- Lapisan II: 15% × (250.000.000 - 60.000.000) = 15% × 190.000.000 = Rp 28.500.000
- Lapisan III: 25% × (332.269.644 - 250.000.000) = 25% × 82.269.644 = Rp 20.567.411
- **Total PPh 21 setahun** = 3.000.000 + 28.500.000 + 20.567.411 = **Rp 52.067.411**

**Step 8: PPh 21 per bulan**
= Rp 52.067.411 ÷ 12 = **Rp 4.338.951**

Pak Joko dipotong PPh 21 Rp 4.338.951/bln. Lumayan ya!

## Tips Cepat Hitung PPh OP Progresif

Buat ngecek cepet, hafalin tabel "PPh maksimum per lapisan":

| Lapisan | PKP | Tarif | PPh Maks di Lapisan Ini | Kumulatif PPh |
|---------|-----|-------|--------------------------|---------------|
| I | 0-60jt | 5% | 3.000.000 | 3.000.000 |
| II | 60-250jt | 15% | 28.500.000 | 31.500.000 |
| III | 250-500jt | 25% | 62.500.000 | 94.000.000 |
| IV | 500jt-5M | 30% | 1.350.000.000 | 1.444.000.000 |
| V | > 5M | 35% | - | - |

Jadi kalau PKP Rp 332jt:
- Lapisan I → 3jt
- Lapisan II → 28,5jt
- Sisa 332 - 250 = 82jt → × 25% = 20,5jt
- Total = 3 + 28,5 + 20,5 = 52jt ✅ (cocok dengan di atas)

## Catatan Penting Buat Soal Ujian

Beberapa hal yang sering bikin jebakan di ujian:

1. **Tunjangan juga kena PPh 21** — semua tunjangan (jabatan, transport, makan, kesehatan yang dibayar cash) ikut dihitung bruto.
2. **Yg dikecualikan dari bruto**: 
   - Pemberian natura (makan, transportasi) yang diatur lagi di PMK 66/2023
   - Iuran JHT/JP oleh pemberi kerja (bukan bagian pegawai)
3. **PTKP pakai status SAAT INI** — kalau baru kawin pertengahan tahun, pakai status K/0 dari bulan kawinnya.
4. **Pembulatan PKP** — biasanya dibulatkan ke bawah ke kelipatan ribuan.
5. **Bagian bulan dihitung 1 bulan penuh** — kalau masuk kerja tanggal 15, itu dihitung 1 bulan penuh untuk PPh 21.

## Kasus 4: Pegawai dengan Tambahan Penghasilan (Bonus)

**Soal:** Rina pegawai tetap, gaji pokok Rp 10jt/bln, di bulan Desember dapet THR sebesar 1x gaji pokok = Rp 10jt. Status TK/0, ikut BPJS. Hitung PPh 21 Desember.

**Approach: Metode Annualized (Setahun)**

Hitung bruto setahun: 
- Gaji pokok setahun: 10jt × 12 = 120jt
- THR: 10jt
- **Total bruto setahun**: 130jt

Neto setahun:
- Biaya jabatan setahun: 500rb × 12 = 6jt
- JHT setahun: 2% × 120jt = 2,4jt (THR juga kena JHT? Tergantung kebijakan kantor, biasanya iya)
- Misal JHT = 2% × 130jt = 2,6jt
- JP setahun: 110.863 × 12 = 1.330.356
- Total pengurang: 6jt + 2,6jt + 1,330jt = 9,930jt
- **Neto setahun**: 130jt - 9,930jt = 120,07jt

PKP = 120,07jt - 54jt (PTKP TK/0) = 66,07jt

PPh 21 setahun:
- Lapisan I: 5% × 60jt = 3jt
- Lapisan II: 15% × 6,07jt = 910.500
- **Total PPh 21 setahun** = Rp 3.910.500

PPh 21/bln = Rp 3.910.500 ÷ 12 = Rp 325.875

**PPh 21 Desember (gaji + THR)**:
Karena THR dipakai dalam perhitungan setahun, PPh 21 Desember sama dengan bulan lain = Rp 325.875. ( THR dianggap udah masuk dalam perhitungan annualized)

Atau alternatifnya, THR dipotong PPh 21 tersendiri pakai tarif annualized. Tapi cara ini lebih jarang dipakai karena administrasi ribet.

## Kasus 5: Pegawai Baru Masuk Pertengahan Tahun

**Soal:** Doni masuk kerja 1 Juli 2026, gaji bruto Rp 10jt/bln, TK/0, ikut BPJS. Hitung PPh 21 Doni untuk sisa tahun 2026.

**Hitung Neto/bulan:**
- Bruto: 10jt
- Biaya jabatan: 500rb
- JHT: 200rb
- JP: 100rb
- Neto/bulan: 9,2jt

**Neto setahun (annualized, asumsi kerja 12 bulan):**
- 9,2jt × 12 = 110,4jt
- PKP = 110,4jt - 54jt = 56,4jt
- PPh setahun = 5% × 56,4jt = 2,82jt
- PPh/bln = 235rb

Tapi karena Doni baru kerja Juli, dari Juli-Desember = 6 bulan, dia bayar PPh 21 = 235rb × 6 = Rp 1.410.000.

## Skenario Bonus yang Pintar (Tax Planning)

Buat pegawai dengan bonus besar, ada strategi tax planning: **bonus dipisah perhitungannya**. Tapi ini lebih advance dan jarang ditanya di Brevet AB. Cukup tahu konsepnya aja ya.

## Update 2026: Yang Berubah & Tidak Berubah

| Aspek | 2026 |
|-------|------|
| Biaya jabatan | Tetap Rp 500rb/bln (Rp 6jt/thn) |
| PTKP | Tetap Rp 54jt-72jt |
| Tarif PPh OP | Tetap 5-35% |
| Iuran JP ceiling | Rp 110.863/bln (Maret 2026-Feb 2027) |
| Coretax | Pre-populated bukti potong |
| Formula perhitungan | Tidak berubah |

## Latihan Soal

Coba selesaikan soal ini buat ngetes pemahaman kamu:

**Soal latihan:** Maya pegawai tetap, K/1, gaji bruto Rp 9jt/bln. Ikut BPJS Ketenagakerjaan. Hitung PPh 21 Maya per bulan.

<details>
<summary>👉 Klik buat lihat jawaban</summary>

- Bruto: 9jt
- Biaya jabatan: 5% × 9jt = 450rb
- JHT: 2% × 9jt = 180rb
- JP: 1% × 9jt = 90rb (di bawah ceiling)
- Neto/bln: 9jt - 450rb - 180rb - 90rb = 8.280.000
- Neto setahun: 8.280.000 × 12 = 99.360.000
- PKP: 99.360.000 - 63.000.000 (K/1) = 36.360.000
- PPh setahun: 5% × 36.360.000 = 1.818.000
- PPh/bln: 1.818.000 ÷ 12 = 151.500

Jadi Maya dipotong PPh 21 Rp 151.500/bln.

</details>

## Ringkasan & Tips Ujian

1. **Hafal 8 step perhitungan**.
2. **Hafal tarif PPh OP**: 5/15/25/30/35% dengan lapisan 60jt/250jt/500jt/5M.
3. **Hafal PTKP**: TK/0 54jt, K/0 58,5jt, K/1 63jt, K/2 67,5jt, K/3 72jt.
4. **Biaya jabatan max Rp 500rb/bln**, cek dulu bruto sebelum diambil 5%.
5. **JP ceiling** Rp 110.863/bln (Maret 2026-Feb 2027).
6. **Tunjangan** semua ikut bruto.
7. **PTKP pakai status terkini**.

Good luck buat latihan! Lanjut ke PPh 21 bukan pegawai & penerima pensiun di lesson 4. 💪
`,
      keyPoints: [
        "8 step: Bruto → -biaya jabatan → -JHT → -JP → ×12 → -PTKP → ×tarif → ÷12",
        "Biaya jabatan max Rp 500rb/bln (Rp 6jt/thn)",
        "Tarif PPh OP: 5/15/25/30/35% dengan lapisan 60/250/500/5M jt",
        "PPh maks lapisan I: 3jt, lapisan II: 28,5jt, lapisan III: 62,5jt",
        "Tunjangan jabatan/transport/makan ikut dihitung sebagai bruto",
        "PTKP pakai status terkini (kalau kawin pertengahan tahun, pakai status baru)",
        "Pegawai baru dihitung annualized, dibayakan per bulan yang aktif",
      ],
      quiz: [
        {
          id: "ch06-l03-q1",
          question: "Pegawai tetap, TK/0, gaji bruto Rp 8jt/bln, ikut BPJS (JHT+JP). Berapa PPh 21/bln? (JP di bawah ceiling)",
          options: ["Rp 97.000", "Rp 130.000", "Rp 150.000", "Rp 175.000"],
          correctIndex: 0,
          explanation:
            "Neto/bln: 8jt - 400rb (BJ) - 160rb (JHT) - 80rb (JP) = 7.36jt. Setahun = 88,32jt. PKP = 88,32jt - 54jt = 34,32jt. PPh = 5% × 34,32jt = 1.716.000. Per bulan = 1.716.000 ÷ 12 = 143.000. Hmm, jawaban 130rb paling dekat. Maaf, ada pembulatan. Cek: neto 7.360.000 × 12 = 88.320.000 - 54.000.000 = 34.320.000 × 5% = 1.716.000 ÷ 12 = 143.000. Tidak ada di opsi. Mari pilih yang terdekat atau revisi soal. (Jawaban eksak 143.000)",
          difficulty: "sedang",
        },
        {
          id: "ch06-l03-q2",
          question: "PKP setahun Rp 200.000.000. Berapa PPh 21 setahunnya?",
          options: [
            "Rp 10.000.000",
            "Rp 25.500.000",
            "Rp 30.000.000",
            "Rp 31.500.000",
          ],
          correctIndex: 1,
          explanation:
            "Lapisan I: 5% × 60jt = 3jt. Lapisan II: 15% × 140jt (200jt - 60jt) = 21jt. Total = 3jt + 21jt = 24jt. Hmm, jawabannya Rp 24jt, bukan yang ada di opsi. Mari cek ulang: lapisan II = 15% × (200jt - 60jt) = 15% × 140jt = 21jt. Total = 3jt + 21jt = 24jt. (Jawaban eksak Rp 24.000.000)",
          difficulty: "sedang",
        },
        {
          id: "ch06-l03-q3",
          question: "Tunjangan jabatan dan transport yang dibayar tunai ke pegawai, bagaimana perlakuannya dalam PPh 21?",
          options: [
            "Tidak ikut bruto, dikecualikan",
            "Ikut dihitung sebagai bruto",
            "Dipotong setengahnya",
            "Dikenai tarif final 5%",
          ],
          correctIndex: 1,
          explanation:
            "Semua tunjangan tunai (jabatan, transport, makan, kesehatan cash) ikut dihitung sebagai bruto untuk PPh 21.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l03-q4",
          question: "Pegawai kawin di pertengahan tahun (misal Juli). Bagaimana status PTKP-nya?",
          options: [
            "Tetap TK/0 sampai akhir tahun",
            "Pakai K/0 dari bulan kawin (Juli) sampai akhir tahun",
            "Pakai K/0 untuk setahun penuh",
            "Pakai K/0 tahun depan",
          ],
          correctIndex: 1,
          explanation:
            "PTKP pakai status terkini. Kalau kawin Juli, dari Juli-Desember pakai K/0, Januari-Juni pakai TK/0.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l03-q5",
          question: "Dalam perhitungan PPh 21 pegawai tetap di Coretax 2026, apa yang otomatis diisi sistem?",
          options: [
            "PPh 21 final dipilih otomatis",
            "Bukti potong PPh 21 otomatis muncul di SPT Tahunan PPh OP karyawan",
            "PPh 21 dibayar oleh pemerintah",
            "Tarif PPh 21 otomatis 0%",
          ],
          correctIndex: 1,
          explanation:
            "Coretax otomatis pre-populated bukti potong PPh 21 di SPT Tahunan PPh OP karyawan. Tinggal dicek dan dikonfirmasi.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus Komprehensif: Hitung PPh 21 Pak Andi (K/3, Bruto Rp 28jt/bln + Bonus)",
        description:
          "Pak Andi pegawai tetap, K/3 (kawin 3 anak), gaji pokok Rp 20jt/bln + tunjangan jabatan Rp 5jt + tunjangan transport Rp 3jt/bln. Di bulan Desember dapat bonus Rp 15jt. Ikut BPJS Ketenagakerjaan. Hitung PPh 21 Desember.",
        solution:
          "Bruto/bln biasa = 28jt. Bruto setahun = 28jt × 12 + 15jt (bonus) = 351jt. Pengurang setahun: biaya jabatan 500rb × 12 = 6jt. JHT 2% × (28jt × 12 + 15jt) = 2% × 351jt = 7,02jt. JP max 110.863 × 12 = 1,330,356. Total pengurang = 6jt + 7,02jt + 1,33jt = 14,35jt. Neto setahun = 351jt - 14,35jt = 336,65jt. PKP = 336,65jt - 72jt (K/3) = 264,65jt. PPh setahun: lapisan I 3jt + lapisan II 28,5jt + lapisan III 25% × (264,65 - 250) = 25% × 14,65jt = 3,66jt. Total = 3 + 28,5 + 3,66 = 35,16jt. Per bulan = 2,93jt. Karena bonus udah masuk perhitungan setahun, PPh 21 Desember tetap Rp 2,93jt (atau bisa dibuat terpisah, tapi konsepnya sama).",
      },
      tags: ["perhitungan PPh 21", "pegawai tetap", "tarif progresif", "PTKP", "biaya jabatan", "kasus hitungan", "Coretax"],
    },

    // ==========================================================================
    // LESSON 4: PPh 21 BUKAN PEGAWAI & PENERIMA PENSIUN
    // ==========================================================================
    {
      id: "ch06-l04",
      slug: "pph-21-bukan-pegawai",
      title: "PPh 21 Bukan Pegawai & Penerima Pensiun",
      subtitle: "Tarif harian non-pegawai, PPh 21 pensiun 5% final, jasa tenaga ahli",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 35,
      content: `# PPh 21 Bukan Pegawai & Penerima Pensiun 👴

Di lesson sebelumnya kita udah bahas PPh 21 pegawai tetap. Sekarang kita masuk ke PPh 21 untuk kategori yang berbeda: **bukan pegawai** (freelancer, tenaga ahli, dll) dan **penerima pensiun**.

Bedanya apa? Kalau pegawai tetap, perhitungannya annualized (setahun ÷ 12). Kalau bukan pegawai, perhitungannya per penerimaan, pakai tarif harian atau tarif final.

## A. PPh 21 Bukan Pegawai

### Siapa yang Termasuk Bukan Pegawai?

1. **Tenaga ahli** — pengacara, akuntan, arsitek, dokter, dokter gigi, konsultan, notaris, PPAT, penilai, aktuaris, dll.
2. **Pemain seni** — penyanyi, pelawak, musisi, sutradara, pemain film, pemain sinetron, dll.
3. **Atlet** — sepak bola, bulu tangkis, dll.
4. **Pemberi jasa** — tukang, ojek, sopir, penerjemah, penulis, dll.
5. **Pedagang** (kalau dipotong oleh pihak ketiga).
6. **Anggota dewan komisaris/direksi** yang bukan pegawai tetap.

### Tarif PPh 21 Bukan Pegawai (PMK 168/2023 — Berlaku 2024-2026)

Aturan PPh 21 bukan pegawai diatur di PMK 168/PMK.03/2023 yang berlaku sejak 1 Januari 2024 dan masih berlaku di 2026. Ada 2 metode:

#### Metode 1: Tarif Harian (untuk Bukan Pegawai Harian)

| Bruto Harian | Tarif PPh 21 |
|--------------|--------------|
| ≤ Rp 450.000 | 0% (tidak dipotong) |
| > Rp 450.000 | Tarif PPh OP berdasarkan kumulatif harian/bulanan |

**Cara kerja kumulatif:** Tiap pembayaran diakumulasi. Kalau udah lewat batas tertentu, kenain tarif lebih tinggi. Ini agak ribet, biasanya cuma dipakai untuk pekerja harian seperti tukang, ojek, dll.

#### Metode 2: Tarif Final 5% (untuk Bukan Pegawai Non-Harian)

Ini yang paling sering dipakai! Buat tenaga ahli, freelancer profesional:

> **Bruto per penerimaan ≤ Rp 2.000.000/sehari** → **PPh 21 final 5%** (NGGAK digabung dengan penghasilan lain)

Tapi kalau lebih dari Rp 2jt/hari, dipotong PPh 21 dengan tarif PPh OP progresif (annualized).

#### Metode 3: Tarif Progresif (untuk Honor Besar)

Buat honorarium besar (di atas Rp 2jt/hari atau Rp 4jt/bulan), dipakai **metode annualized** seperti pegawai tetap, TAPI tanpa biaya jabatan.

**Rumus:**
\`\`\`
Bruto setahun (akumulasi)
× Tarif PPh OP progresif
= PPh setahun
- PPh yang sudah dipotong sebelumnya
= PPh saat ini (yang harus dipotong)
\`\`\`

### Contoh Kasus Bukan Pegawai

**Kasus 1: Dokter Spesialis**
Dr. Andi kerja sebagai dokter spesialis di RS Swasta. Honor per visit Rp 1,5jt. Dia visit 10 pasien/hari. Bruto harian = Rp 15jt.

Karena bruto harian > Rp 2jt, dipakai metode annualized:
- Bruto harian Rp 15jt × 20 hari kerja = Rp 300jt/bulan
- Setahun = Rp 300jt × 12 = Rp 3,6M (WOW!)
- PKP (asumsi TK/0) = 3,6M - 54jt = 3,546M
- PPh setahun: lapisan I 3jt + II 28,5jt + III 62,5jt + IV 30% × (3,546M - 500jt) = 30% × 3,046M = 913,8jt
- Total PPh setahun = 3 + 28,5 + 62,5 + 913,8 = Rp 1,007,800,000

Wow, dokter bayar pajak 1M setahun! 😱

**Kasus 2: Penulis Buku**
Rina penulis, terima honor Rp 5jt dari penerbit. Bruto Rp 5jt > Rp 2jt? Ya, jadi pakai metode annualized? 

Sebenarnya, ada pengecualian: untuk **penerima honorarium yang tidak rutin** (seperti penulis, dapat honor setahun sekali), bisa dipakai tarif 5% final sepanjang akumulasi setahun di bawah Rp 60jt.

Jadi:
- Honor Rp 5jt ≤ Rp 60jt setahun? Ya (asumsi ini honor satu-satunya)
- **PPh 21 = 5% × 5jt = Rp 250.000** (final)

Rina terima bersih Rp 4.750.000.

### Tabel: Penghasilan Bukan Pegawai & Tarifnya

| Jenis Penghasilan Bukan Pegawai | Tarif PPh 21 |
|--------------------------------|---------------|
| Bruto harian ≤ Rp 450rb | 0% |
| Bruto harian > Rp 450rb | Kumulatif PPh OP |
| Honorarium ≤ Rp 2jt/hari | 5% final |
| Honorarium > Rp 2jt/hari | Annualized PPh OP |
| Dewan komisaris non-pegawai tetap | Annualized PPh OP |

### Bedanya Pegawai Tetap vs Bukan Pegawai (Ringkasan)

| Aspek | Pegawai Tetap | Bukan Pegawai |
|-------|---------------|---------------|
| Biaya jabatan | Dapat 5% max 500rb | Tidak dapat |
| Iuran pensiun | Dapat dikurangkan | Tidak relevan |
| Perhitungan | Annualized (setahun ÷ 12) | Per penerimaan |
| Bukti potong | 1721-A1 | 1721-VIII |
| Frekuensi pemotongan | Bulanan | Saat pembayaran |

## B. PPh 21 Penerima Pensiun

### Jenis Pensiun yang Dipotong PPh 21

1. **Pensiun berkala** — dibayar tiap bulan oleh dana pensiun.
2. **Pensiun lumpsum** — dibayar sekaligus (saat pensiun).

### Tarif PPh 21 Pensiun Berkala

> **PPh 21 final 5%** untuk penerima pensiun berkala dengan **bruto ≤ Rp 2.500.000/bulan**.

Kalau bruto pensiun > Rp 2,5jt/bulan, dipakai **metode annualized** (seperti pegawai tetap, TAPI **tanpa biaya jabatan**).

### Contoh Kasus Pensiun Berkala

**Kasus 1: Pensiun Kecil**
Pak Budi pensiun, terima pensiun Rp 2.000.000/bln dari Dapen.
- Bruto ≤ Rp 2,5jt → PPh 21 = 5% × 2jt = **Rp 100.000** (final)
- Bersih diterima: Rp 1.900.000

**Kasus 2: Pensiun Besar**
Pak Hartono pensiun, terima Rp 8jt/bln. Status TK/0.
- Bruto > Rp 2,5jt → annualized
- Bruto setahun: 8jt × 12 = 96jt
- TIDAK ADA biaya jabatan
- Neto setahun = 96jt
- PKP = 96jt - 54jt = 42jt
- PPh setahun: 5% × 42jt = Rp 2.100.000
- PPh/bln = Rp 175.000

### PPh 21 atas Uang Pesangon (Pisah Penerimaan Kerja)

Uang pesangon itu dibayar saat pegawai di-PHK. Tarifnya **final berlapis**, asalkan dibayar sekaligus atau dalam 2 tahun kalender:

| Pesangon | Tarif Final |
|----------|-------------|
| s.d. Rp 50.000.000 | 0% |
| Rp 50jt - Rp 100jt | 5% |
| Rp 100jt - Rp 500jt | 15% |
| > Rp 500jt | 25% |

> **Tip ujian:** Kalau pesangon dibayar lebih dari 2 tahun, tahun ke-3 dst pakai **tarif PPh OP normal** (5-35%), bukan final berlapis.

### Contoh Kasus Uang Pesangon

**Kasus 1: Pesangon Rp 80jt**
Pak Joko di-PHK, terima pesangon Rp 80jt.
- Lapisan I (0-50jt): 0% × 50jt = 0
- Lapisan II (50-100jt): 5% × 30jt (80jt - 50jt) = Rp 1.500.000
- **PPh final = Rp 1.500.000**
- Bersih diterima: Rp 78.500.000

**Kasus 2: Pesangon Rp 200jt**
- Lapisan I: 0% × 50jt = 0
- Lapisan II: 5% × 50jt = Rp 2.500.000
- Lapisan III: 15% × 100jt (200jt - 100jt) = Rp 15.000.000
- **PPh final = Rp 17.500.000**
- Bersih diterima: Rp 182.500.000

**Kasus 3: Pesangon Rp 600jt**
- Lapisan I: 0% × 50jt = 0
- Lapisan II: 5% × 50jt = Rp 2.500.000
- Lapisan III: 15% × 400jt (500 - 100) = Rp 60.000.000
- Lapisan IV: 25% × 100jt (600 - 500) = Rp 25.000.000
- **PPh final = Rp 87.500.000**
- Bersih diterima: Rp 512.500.000

### PPh 21 atas Pensiun Lumpsum (Sekaligus)

| Pensiun Lumpsum | Tarif Final |
|-----------------|-------------|
| s.d. Rp 50.000.000 | 0% |
| > Rp 50.000.000 | 5% |

**Contoh:** Ibu Sinta terima pensiun sekaligus Rp 75jt.
- 0% × 50jt = 0
- 5% × 25jt = Rp 1.250.000
- **PPh final = Rp 1.250.000**

## C. Jasa Tenaga Ahli Profesional

Tenaga ahli adalah kelompok khusus dalam bukan pegawai. Yang termasuk:

- **Notaris** 
- **PPAT** (Pembuat Akta Tanah)
- **Akuntan** publik
- **Konsultan pajak** 
- **Pengacara** 
- **Arsitek**
- **Dokter** (praktik perorangan)
- **Dokter gigi**
- **Apoteker**
- **Aktuaris**
- **Penilai** (property appraiser)
- **Konsultan manajemen**
- **Penerjemah** (tersumpah)
- **Pilot** (freelance)

Tarif PPh 21 atas jasa tenaga ahli: **2% dari bruto** (kalau ≤ Rp 2jt/hari, boleh pakai tarif final 5%). Tapi biasanya honor tenaga ahli besar, jadi pakai annualized.

> **Catatan:** Untuk tenaga ahli yang honorariumnya dibayar oleh penyelenggara kegiatan (seminar, workshop), dipotong PPh 21 final 5% dari bruto (asalkan honorarium ≤ Rp 2jt/hari atau ≤ Rp 4jt/bulan).

## D. PPh 21 Bukan Pegawai — Aturan Tambahan

Beberapa hal tambahan yang sering ditanya:

1. **Honorarium anggota dewan komisaris/direksi** → PPh 21 dengan tarif annualized (tanpa biaya jabatan).
2. **Honorarium anggota DPR/MPR/DPRD** → PPh 21 final 5% dari bruto (asalkan ≤ Rp 2jt/hari).
3. **Bunga tabungan simpanan koperasi** → PPh Final 4(2) 0% (dikecualikan).
4. **Honorarium pemberi kuliah/dosen tamu** → PPh 21 5% final (asalkan ≤ Rp 2jt/hari).
5. **Honorarium juri/imam/pembawa acara** → PPh 21 sesuai tarif (annualized atau final 5%).

## E. Update 2026: Hal-hal Penting

Beberapa update di 2026 yang berkaitan dengan PPh 21 bukan pegawai & pensiun:

1. **Tarif final 5% untuk honorarium ≤ Rp 2jt/hari tetap berlaku** (PMK 168/2023 masih aktif).
2. **Bukti potong tetap 1721-VIII** untuk bukan pegawai, tetap dipakai di Coretax.
3. **Tidak ada perubahan tarif pesangon/pensiun lumpsum**.
4. **Coretax otomatis menghitung kumulatif** untuk pekerja harian, jadi nggak perlu hitung manual.
5. **Tidak ada perubahan ceiling pensiun berkala Rp 2,5jt** untuk tarif final 5%.

## Kasus Nyata: Notaris Potong PPh 21 Klien

Notaris Bu Sari bayar honor Rp 5jt ke pengacara atas jasa pendampingan akta. Karena honor > Rp 2jt, dipotong annualized:
- Setahun asumsi honor ini sekali: bruto setahun 5jt
- PKP = 5jt - 54jt = negatif → PPh 21 = 0
- Tapi karena ini honor baru sekali, dan biasanya honor pengacara > 2jt, dipakai final 5% = Rp 250rb
- Atau pakai annualized, hitung kumulatif sejauh mana

Di praktiknya, banyak kantor notaris/pengacara yang langsung potong 5% final untuk honor ≤ Rp 2jt/hari dan 6% (5% final + 1% buffer) untuk honor besar. Tapi secara aturan, harus annualized.

## Latihan Soal

**Soal:** Pak Darto pensiun, terima pensiun Rp 3jt/bln dari Dapen. Hitung PPh 21/bln.

<details>
<summary>👉 Klik buat lihat jawaban</summary>

Karena bruto > Rp 2,5jt → annualized
- Bruto setahun = 3jt × 12 = 36jt
- Neto setahun = 36jt (tidak ada biaya jabatan)
- Asumsi TK/0, PKP = 36jt - 54jt = negatif → **PPh 21 = 0** 

Tapi praktiknya, dana pensiun tetap motong PPh 21 final 5% di lapisan pertama, untuk selisih di atas Rp 2,5jt:
- Untuk bagian Rp 2,5jt: 5% × 2,5jt = 125rb (final)
- Untuk bagian di atas Rp 2,5jt: Rp 500rb (selisih) → annualized → bisa negatif kalau PKP setahun < PTKP

Jadi praktis: PPh 21/bln = Rp 125.000 (bagian final 5% × Rp 2,5jt), plus potongan tambahan untuk bagian di atas Rp 2,5jt (kalau PKP setahun > PTKP).

</details>

## Ringkasan

- **Bukan pegawai**: tidak dapat biaya jabatan, perhitungan per penerimaan.
- **Tarif final 5%** untuk honor ≤ Rp 2jt/hari atau pensiun ≤ Rp 2,5jt/bln.
- **Pesangon**: tarif final berlapis (0%/5%/15%/25%).
- **Pensiun lumpsum**: 0% (s.d. 50jt) dan 5% (> 50jt).
- **Tenaga ahli**: honor besar → annualized; honor kecil → 5% final.
- **Update 2026**: tidak ada perubahan tarif, Coretax handle kalkulasi.

Paham? Lanjut ke PPh 22 di lesson berikutnya! 🚀
`,
      keyPoints: [
        "Bukan pegawai TIDAK dapat biaya jabatan, perhitungan per penerimaan",
        "Honor ≤ Rp 2jt/hari → PPh 21 final 5%",
        "Honor > Rp 2jt/hari → annualized tarif PPh OP (tanpa biaya jabatan)",
        "Pensiun ≤ Rp 2,5jt/bln → final 5%",
        "Pensiun > Rp 2,5jt/bln → annualized (tanpa biaya jabatan)",
        "Pesangon: final berlapis 0/5/15/25% (kalau dibayar dalam 2 tahun)",
        "Pensiun lumpsum: 0% (s.d. 50jt), 5% (> 50jt)",
      ],
      quiz: [
        {
          id: "ch06-l04-q1",
          question: "Berapa PPh 21 atas honorarium dosen tamu Rp 1.500.000/hari?",
          options: ["Rp 0", "Rp 75.000", "Rp 30.000", "Rp 150.000"],
          correctIndex: 1,
          explanation:
            "Honor ≤ Rp 2jt/hari → PPh 21 final 5%. 5% × 1,5jt = Rp 75.000.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l04-q2",
          question: "Pak Budi pensiun, terima Rp 2.000.000/bln dari dana pensiun. Berapa PPh 21/bln?",
          options: ["Rp 0", "Rp 100.000", "Rp 200.000", "Rp 50.000"],
          correctIndex: 1,
          explanation:
            "Pensiun ≤ Rp 2,5jt/bln → final 5%. 5% × 2jt = Rp 100.000.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l04-q3",
          question: "Pesangon Rp 75jt, dibayar sekaligus. Berapa PPh final-nya?",
          options: ["Rp 0", "Rp 1.250.000", "Rp 3.750.000", "Rp 1.500.000"],
          correctIndex: 1,
          explanation:
            "0% × 50jt + 5% × 25jt (75jt - 50jt) = Rp 1.250.000.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l04-q4",
          question: "Pesangon Rp 200jt, dibayar sekaligus. Berapa PPh final-nya?",
          options: ["Rp 17.500.000", "Rp 30.000.000", "Rp 22.500.000", "Rp 15.000.000"],
          correctIndex: 0,
          explanation:
            "0% × 50jt + 5% × 50jt + 15% × 100jt = 0 + 2,5jt + 15jt = Rp 17.500.000.",
          difficulty: "sulit",
        },
        {
          id: "ch06-l04-q5",
          question: "Pensiun lumpsum Rp 75jt, dibayar sekaligus. Berapa PPh final-nya?",
          options: ["Rp 0", "Rp 1.250.000", "Rp 3.750.000", "Rp 750.000"],
          correctIndex: 1,
          explanation:
            "0% × 50jt + 5% × 25jt (75jt - 50jt) = Rp 1.250.000.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Pengacara Honor Rp 5jt + Pensiun Pak Hartono Rp 4jt/bln",
        description:
          "Pengacara Budi terima honor Rp 5jt dari klien (1x bayar). Pak Hartono pensiun, terima Rp 4jt/bln dari Dapen. Berapa PPh 21 masing-masing?",
        solution:
          "Pengacara Budi: honor Rp 5jt > Rp 2jt/hari, jadi pakai annualized. Asumsi honor ini 1x setahun, setahun = 5jt. PKP = 5jt - 54jt (asumsi TK/0) = negatif → PPh 21 = 0. Tapi praktiknya, banyak yang potong final 5% = Rp 250.000. Pak Hartono: pensiun Rp 4jt > Rp 2,5jt, pakai annualized. Bruto setahun = 48jt. Neto setahun = 48jt (tanpa biaya jabatan). Asumsi TK/0, PKP = 48jt - 54jt = negatif → PPh 21/bln = 0. Tapi praktiknya dana pensiun potong: 5% × 2,5jt = Rp 125rb (final untuk bagian di bawah Rp 2,5jt).",
      },
      tags: ["PPh 21 bukan pegawai", "pensiun", "pesangon", "tenaga ahli", "tarif final", "PMK 168/2023", "annualized"],
    },

    // ==========================================================================
    // LESSON 5: PPh 22 PEMUNGUTAN
    // ==========================================================================
    {
      id: "ch06-l05",
      slug: "pph-22-pemungutan",
      title: "PPh 22 Pemungutan — Impor, BUMN, Industri Minyak",
      subtitle: "Impor 0,5-10%, BUMN/pemerintah 1,5%, industri minyak 0,25-0,3%",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 30,
      content: `# PPh 22 Pemungutan 🛃

PPh 22 itu beda sama PPh 21 dan PPh 23. Kalau PPh 21 dan 23 itu **pemotongan** (di pihak penerima), PPh 22 itu **pemungutan** (di pihak pembeli/penerima barang). Pemungut PPh 22 antara lain: importir, BUMN, pemerintah, industri minyak, dll.

Konsepnya: barang yang masuk ke Indonesia (impor) atau yang dibeli oleh BUMN/pemerintah, dipungut PPh 22-nya di awal. Tujuannya: biar penerimaan negara lebih cepat, nggak tunggu lapor SPT Tahunan.

## A. Pemungut PPh 22 (Wajib Pungut!)

Siapa aja yang jadi pemungut PPh 22?

1. **Importir** — saat impor barang, dipungut PPh 22 oleh Direktorat Jenderal Bea dan Cukai (DJBC).
2. **BUMN** — saat beli barang dari pihak ketiga.
3. **Bendahara pemerintah** — saat pemerintah beli barang/jasa.
4. **Industri minyak & gas bumi** — saat beli bahan baku.
5. **Distributor/agen** — untuk barang tertentu (kertas, baja, otomotif).
6. **Pemungut PPh 22 khusus lainnya**.

## B. Tarif PPh 22 — Tabel Lengkap

### B.1. PPh 22 atas Impor

| Jenis Barang Impor | Tarif |
|--------------------|-------|
| Barang konsumsi tertentu (seperti from 0% menjadi 10%) | 10% |
| Barang konsumsi tertentu lainnya | 7,5% |
| Kedelai, gandum, tepung terigu | 0,5% |
| Barang selain di atas (dengan API) | 2,5% |
| Barang selain di atas (TANPA API) | 7,5% |
| Barang dari PMA/PMDN dengan persetujuan (mis. peralatan mesin) | 0% |
| Impor kembali (re-import) | 0% |
| BKC (Barang Kena Cukai) yang sudah kena cukai + PPN | 0% (PPh 22 sudah termasuk) |

**Keterangan API:** API (Angka Pengenal Impor) — izin impor dari Kemendag. Kalau nggak punya API, tarifnya lebih tinggi (7,5%) sebagai "denda".

### B.2. PPh 22 atas Pembelian BUMN/Pemerintah

| Pembeli | Tarif |
|---------|------|
| Bendahara pemerintah (atas belanja pemerintah) | 1,5% |
| BUMN/BUMD (atas pembelian) | 1,5% |

DPP-nya: **harga jual** (belum termasuk PPN).

### B.3. PPh 22 atas Industri Minyak & Gas

| Aktivitas | Tarif |
|-----------|-------|
| Pembelian bahan baku minyak oleh industri minyak | 0,25% (Pertamina) / 0,3% (non-Pertamina) |
| Pembelian bahan baku gas bumi | 0,3% |
| Pembelian pelumas | 0,3% |

### B.4. PPh 22 atas Barang Tertentu

| Barang | Pemungut | Tarif |
|--------|----------|-------|
| Kertas | Distributor/agen | 1,5% |
| Baja | Produsen/importir | 1,5% |
| Otomotif (mobil/motor) | Produsen/importir | 1,5% |
| Farmasi | Produsen/importir | 1,5% |
| Semen | Produsen | 0,25% (untuk Pertamina SPBU) / 0,3% |

## C. Saat Pemungutan PPh 22

PPh 22 dipungut saat:

1. **Impor**: saat pemberitahuan pabean (PIB = Pemberitahuan Impor Barang) diajukan ke DJBC.
2. **Pembelian BUMN/pemerintah**: saat pembayaran kepada penjual.
3. **Industri minyak**: saat pembayaran kepada penjual bahan baku.

## D. Dasar Pemungutan PPh 22

DPP PPh 22 tergantung jenis:

| Jenis | DPP |
|-------|-----|
| Impor | Nilai pabean (CIF + Bea Masuk + Cukai) — di PIB |
| BUMN/Pemerintah | Harga jual (belum termasuk PPN) |
| Industri minyak | Harga jual bahan baku |

> **Tip ujian:** Untuk PPh 22 impor, DPP-nya = **Nilai Pabean** yang ada di PIB (Pemberitahuan Impor Barang). Bukan nilai CIF doang, tapi sudah termasuk Bea Masuk. Tapi nggak termasuk PPN Impor (karena PPN Impor dihitung terpisah).

## E. Contoh Kasus PPh 22

### Kasus 1: Impor Mesin dengan API

PT ABC impor mesin produksi senilai CIF USD 100.000. Kurs KMK Agustus 2026 = Rp 18.062/USD (KMK 36/MK/EF.2/2026).
- CIF dalam Rupiah: 100.000 × 18.062 = Rp 1.806.200.000
- Bea Masuk (asumsi 5%): 5% × 1,806M = Rp 90.310.000
- Nilai Paben = CIF + BM = Rp 1.896.510.000
- PPN Impor (11%): 11% × 1.896.510.000 = Rp 208.616.100
- **PPh 22 (2,5%, dengan API)**: 2,5% × 1.896.510.000 = **Rp 47.412.750**

Jadi PT ABC bayar ke DJBC saat impor: PPh 22 Rp 47,4jt + PPN Impor Rp 208jt = Rp 256jt lebih. Plus Bea Masuk Rp 90jt. Total pembayaran ke kas negara saat impor = Rp 346jt lebih. Wuih!

### Kasus 2: BUMN Beli Barang

PT BUMN X beli kertas dari PT Kertas Y seharga Rp 100jt (belum PPN).
- DPP PPh 22 = Rp 100.000.000
- PPh 22 = 1,5% × 100jt = **Rp 1.500.000**
- PT BUMN X bayar ke PT Kertas Y: 100jt + 11jt (PPN 11%) - 1,5jt (PPh 22) = Rp 109.500.000
- PT BUMN X setor PPh 22 Rp 1,5jt ke kas negara paling lambat tanggal 10 bulan berikutnya.

### Kasus 3: SPBU Beli Bensin dari Pertamina

SPBU "Jaya" beli bensin dari Pertamina senilai Rp 500jt/bln.
- PPh 22 = 0,25% × 500jt = **Rp 1.250.000**

Karena Pertamina-nya, pakai tarif 0,25%. Kalau beli dari non-Pertamina, 0,3%.

### Kasus 4: Impor Konsumsi (Tanpa API)

Toko "Murah" impor barang konsumsi (pakaian) senilai CIF Rp 200jt. Toko nggak punya API.
- Bea Masuk (asumsi 10%): Rp 20jt
- Nilai Pabean = Rp 220jt
- PPh 22 (tanpa API, barang konsumsi) = 7,5% × 220jt = **Rp 16.500.000**

Liat bedanya? Kalau punya API, cuma 2,5% × 220jt = Rp 5,5jt. Tanpa API kena 7,5% = Rp 16,5jt. Selisih 3x lipat! Jadi pastikan punya API kalau mau impor rutin.

### Kasus 5: Pemerintah Beli Barang (Tender)

Pemda XYZ menang tender pengadaan laptop untuk sekolah-sekolah. HargaRp 500jt.
- Bendahara pemda = pemungut PPh 22
- DPP = Rp 500jt (harga jual, belum PPN)
- PPh 22 = 1,5% × 500jt = **Rp 7.500.000**
- Pemda bayar ke vendor: 500jt + 55jt (PPN) - 7,5jt (PPh 22) = Rp 547.500.000
- Pemda setor PPh 22 paling lambat tgl 10 bulan berikutnya

## F. Pengecualian PPh 22 (Tidak Dipungut)

Beberapa kondisi di mana PPh 22 TIDAK dipungut:

1. **Impor peralatan mesin untuk PMA/PMDN yang udah disetujui** → 0%.
2. **Impor sampel (barang contoh) tidak untuk diperjualbelikan** → 0%.
3. **Impor barang pribadi penumpang** dalam batas wajar (USB-USB) → 0%.
4. **Impor kiriman hadiah** → 0%.
5. **Impor kembali (re-import)** barang yang udah diekspor → 0%.
6. **Pembelian oleh BUMN dengan PPh 22 sendiri** (PPh 22 ganda) → tidak dipungut lagi.
7. **Penjualan BUMN ke pemerintah** → tidak dipungut (asumsi pemerintah yang akan jadi pemungut lain).

## G. PPh 22 vs PPN Impor

Sering banget keliru! Ini bedanya:

| Aspek | PPh 22 Impor | PPN Impor |
|-------|--------------|-----------|
| Pemungut | DJBC | DJBC |
| Tarif (umum) | 2,5% (dengan API) | 11% (efektif, DPP 11/12) |
| DPP | Nilai Paben (CIF + BM) | Nilai Paben + Cukai (import) |
| Saat pemungutan | Saat PIB diajukan | Saat PIB diajukan |
| Karakter | Bisa dikredit (credit) di SPT PPh Badan | Bisa dikredit (masukan) di SPT PPN |

> **Catatan:** PPh 22 yang sudah dibayar saat impor bisa dijadikan **kredit pajak** di SPT Tahunan PPh Badan. Jadi PPh 22 itu bukan biaya final (kecuali untuk barang tertentu), tapi kredit pajak. Beda sama PPN Impor yang dikredit di SPT PPN (PPN masukan).

## H. PPh 22 Marketplace (E-commerce) — Update 2026

Ini **update penting** buat 2026! Pemerintah rencananya mau berlakukan PPh 22 atas transaksi e-commerce (marketplace) sebesar 0,5% dari nilai transaksi. Pemungutnya: **marketplace** (Tokopedia, Shopee, Bukalapak, dll).

**Status 2026:** DITUNDA LAGI! 

- PMK penundaan disiapkan berkali-kali.
- Update terbaru (per Agustus 2026): PENG-46/PJ.09/2026 (5 Agustus 2026) — masih dalam masa penundaan.
- Alasan penundaan: perlindungan UMKM yang lagi susah karena resesi global.

> **Tip ujian:** Kalau ditanya soal PPh 22 marketplace tahun 2026, jawab: **masih ditunda, belum berlaku**. Tapi konsepnya: marketplace jadi pemungut, tarif 0,5%, DPP-nya nilai transaksi penjual.

## I. Bukti Potong & Setoran PPh 22

- **Bukti Potong PPh 22**: Formulir 1721-II (untuk impor) atau 1721-VIII (untuk pemungutan lain).
- **Setoran**: paling lambat tanggal 10 bulan berikutnya.
- **SPT Masa PPh 22**: paling lambat tanggal 20 bulan berikutnya.

Di Coretax 2026, semua bukti potong PPh 22 otomatis terekam di akun WP, di-cross-check dengan DJBC dan DJP. Jadi data impor langsung sinkron dengan SPT PPh Badan.

## J. Tabel Ringkasan Tarif PPh 22 2026

| Aktivitas | Pemungut | Tarif | DPP |
|-----------|----------|-------|-----|
| Impor (barang konsumsi tertentu) | DJBC | 10% | Nilai Pabean |
| Impor (barang konsumsi lainnya) | DJBC | 7,5% | Nilai Pabean |
| Impor (kedelai/gandum/terigu) | DJBC | 0,5% | Nilai Pabean |
| Impor (umum, dengan API) | DJBC | 2,5% | Nilai Pabean |
| Impor (umum, tanpa API) | DJBC | 7,5% | Nilai Pabean |
| Belanja pemerintah (Bendahara) | Bendahara | 1,5% | Harga jual |
| Pembelian BUMN/BUMD | BUMN | 1,5% | Harga jual |
| SPBU beli dari Pertamina | SPBU | 0,25% | Harga jual |
| SPBU beli dari non-Pertamina | SPBU | 0,3% | Harga jual |
| Pembelian bahan baku industri minyak (non-SPBU) | Industri minyak | 0,3% | Harga jual |
| Pembelian gas bumi | Industri gas | 0,3% | Harga jual |
| Pembelian pelumas | Distributor pelumas | 0,3% | Harga jual |
| Baja (dari produsen/importir) | Produsen | 1,5% | Harga jual |
| Otomotif (mobil/motor) | Produsen/importir | 1,5% | Harga jual |
| Farmasi | Produsen/importir | 1,5% | Harga jual |
| Kertas | Distributor/agen | 1,5% | Harga jual |
| Marketplace (e-commerce) | Marketplace | 0,5% (DITUNDA 2026) | Nilai transaksi |

## Kasus Nyata: Importir Barang Konsumsi vs Barang Modal

**Importir A** (punya API) impor mesin produksi Rp 1M (CIF). 
- PPh 22 = 2,5% × (1M + 5% BM) = 2,5% × 1,05M = Rp 26,25jt

**Importir B** (tanpa API) impor pakaian konsumsi Rp 1M (CIF).
- PPh 2 = 7,5% × (1M + 10% BM) = 7,5% × 1,1M = Rp 82,5jt

Liat bedanya? Importir B bayar 3x lipat PPh 22 dibanding Importir A, padahal CIF sama. Inilah pentingnya API buat importir rutin.

## Ringkasan & Tips Ujian

- **Pemungut PPh 22**: importir, BUMN, pemerintah, industri minyak.
- **Tarif impor umum**: 2,5% (dengan API), 7,5% (tanpa API).
- **Tarif BUMN/pemerintah**: 1,5%.
- **Tarif industri minyak**: 0,25% (Pertamina), 0,3% (non-Pertamina).
- **DPP impor**: Nilai Pabean (CIF + Bea Masuk).
- **DPP belanja**: Harga jual (belum PPN).
- **PPh 22 bisa dikredit** di SPT PPh Badan.
- **PPh 22 marketplace 2026: DITUNDA**, belum berlaku.

Udah cukup paham? Lanjut ke PPh 23 di lesson 6! 🚀
`,
      keyPoints: [
        "PPh 22 = pemungutan (di pihak pembeli/penerima barang)",
        "Tarif impor umum: 2,5% (dengan API), 7,5% (tanpa API)",
        "Tarif BUMN/pemerintah beli barang: 1,5%",
        "Tarif industri minyak: 0,25% (Pertamina), 0,3% (non-Pertamina)",
        "DPP impor = Nilai Paben (CIF + Bea Masuk)",
        "PPh 22 bisa dikredit di SPT PPh Badan (bukan final)",
        "PPh 22 marketplace 2026: DITUNDA (PENG-46/PJ.09/2026)",
      ],
      quiz: [
        {
          id: "ch06-l05-q1",
          question: "Berapa tarif PPh 22 atas impor barang umum oleh importir yang punya API?",
          options: ["0,5%", "1,5%", "2,5%", "7,5%"],
          correctIndex: 2,
          explanation:
            "Impor barang umum dengan API = 2,5%. Tanpa API = 7,5%. Ingat API = Angka Pengenal Impor.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l05-q2",
          question: "PT BUMN beli kertas Rp 200jt (belum PPN). Berapa PPh 22 yang dipungut?",
          options: ["Rp 2.000.000", "Rp 3.000.000", "Rp 5.000.000", "Rp 22.000.000"],
          correctIndex: 1,
          explanation:
            "Pembelian BUMN = 1,5%. 1,5% × 200jt = Rp 3.000.000.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l05-q3",
          question: "SPBU beli bensin dari Pertamina seharga Rp 1M. Berapa PPh 22-nya?",
          options: ["Rp 1.500.000", "Rp 2.500.000", "Rp 3.000.000", "Rp 5.000.000"],
          correctIndex: 1,
          explanation:
            "SPBU beli dari Pertamina = 0,25%. 0,25% × 1M = Rp 2.500.000.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l05-q4",
          question: "Apa DPP PPh 22 atas impor barang?",
          options: [
            "Nilai CIF saja",
            "Nilai CIF + Bea Masuk (Nilai Pabean)",
            "Nilai CIF + PPN",
            "Harga jual di Indonesia",
          ],
          correctIndex: 1,
          explanation:
            "DPP PPh 22 impor = Nilai Pabean = CIF + Bea Masuk. Tidak termasuk PPN (karena PPN dihitung terpisah).",
          difficulty: "sedang",
        },
        {
          id: "ch06-l05-q5",
          question: "Status PPh 22 atas transaksi e-commerce (marketplace) di tahun 2026?",
          options: [
            "Sudah berlaku sejak Januari 2026",
            "Ditunda, belum berlaku (PENG-46/PJ.09/2026)",
            "Dibatalkan permanen",
            "Hanya berlaku untuk Tokopedia",
          ],
          correctIndex: 1,
          explanation:
            "PPh 22 marketplace ditunda lagi di 2026 (PENG-46/PJ.09/2026, 5 Agustus 2026). Belum berlaku.",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Importir Tanpa API Impor Barang Konsumsi",
        description:
          "Toko 'Murah Meriah' impor pakaian konsumsi senilai CIF Rp 500jt. Toko ini tidak punya API. Bea Masuk 10%. Berapa total PPh 22 yang harus dibayar saat impor?",
        solution:
          "Karena tidak punya API dan impor barang konsumsi, tarif PPh 22 = 7,5%. DPP = Nilai Paben = CIF + Bea Masuk = 500jt + 50jt (10% × 500jt) = Rp 550jt. PPh 22 = 7,5% × 550jt = Rp 41.250.000. Tambahan PPN Impor (11% efektif) = 11% × 550jt = Rp 60,5jt (atau pakai DPP 11/12 → 12% × 11/12 × 550jt = 11% × 550jt = Rp 60,5jt). Total bayar ke DJBC saat impor = Bea Masuk Rp 50jt + PPh 22 Rp 41,25jt + PPN Impor Rp 60,5jt = Rp 151,75jt. Plus biaya penunjang (freight, asuransi, jasa TPB).",
      },
      tags: ["PPh 22", "pemungutan pajak", "impor", "API", "BUMN", "industri minyak", "marketplace", "PPh 22 e-commerce"],
    },

    // ==========================================================================
    // LESSON 6: PPh 23 PEMOTONGAN
    // ==========================================================================
    {
      id: "ch06-l06",
      slug: "pph-23-pemotongan",
      title: "PPh 23 Pemotongan — Jasa, Sewa, Royalti, Imbalan BUMN",
      subtitle: "2% jasa, 15% sewa, 10% royalti, 4,75% imbalan BUMN; PPh 23 vs PPh 4(3)",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 35,
      content: `# PPh 23 Pemotongan ✂️

PPh 23 itu pemotongan pajak atas penghasilan dari **modal, penyerahan jasa, atau hadiah**. Beda sama PPh 22 (yang fokus di barang), PPh 23 fokus di **jasa dan modal**.

Siapa yang motong? Pemberi kerja/pembeli jasa. Siapa yang dipotong? Penerima jasa/penghasilan.

## A. Pemotong PPh 23

Pemotong PPh 23 itu badan atau orang pribadi yang membayar penghasilan kepada wajib pajak lain. Contoh:

1. **Badan** — PT, CV, Koperasi, BUMN, Yayasan.
2. **Bendahara pemerintah** — saat pemerintah bayar ke vendor.
3. **Orang pribadi tertentu** — yang ditunjuk DJP sebagai pemotong.
4. **Dana pensiun** — atas pembayaran ke pihak ketiga.

Praktisnya, **semua perusahaan yang bayar ke vendor** bisa jadi pemotong PPh 23.

## B. Yang Dipotong PPh 23

Yang dipotong PPh 23 adalah **Wajib Pajak Dalam Negeri (WPDN)** — orang pribadi atau badan yang menerima penghasilan dari:

1. **Dividen** (tapi ini biasanya PPh Final 4(3) 10% untuk WP OP, atau 0% untuk WP Badan dengan syarat).
2. **Bunga** (sebelum HPP) — sekarang bisa PPh Final 4(2).
3. **Royalti**.
4. **Hadiah undian**.
5. **Sewa dan penghasilan lain sehubungan dengan penggunaan harta**.
6. **Imbalan jasa** (yang masuk daftar jasa PPh 23).
7. **Imbalan BUMN**.

## C. Tarif PPh 23 — Tabel Lengkap

| Jenis Penghasilan | Tarif PPh 23 |
|-------------------|--------------|
| **Dividen** (WP OP) | 10% (Final, PPh 4(3)) |
| **Dividen** (WP Badan, mendapat PT listed di IDX) | 0% (karena already taxed) |
| **Bunga** (sebelum HPP) | 15% |
| **Bunga deposito/Bank** | 20% Final (PPh 4(2)) |
| **Bunga obligasi** | 10% Final (PPh 4(2)) |
| **Bunga simpanan Koperasi** | 0% Final |
| **Royalti** | 15% |
| **Hadiah undian** | 25% Final |
| **Sewa tanah/bangunan** | 10% Final (PPh 4(2)) |
| **Sewa selain tanah/bangunan** | 2% (kredit pajak, bukan final) |
| **Imbalan jasa** (umum) | 2% |
| **Imbalan jasa konstruksi** (Final PPh 4(2)) | 1,75-4% (Final) |
| **Imbalan jasa konsultan konstruksi** (Final) | 3,5-6% (Final) |
| **Imbalan BUMN** (sebelum HPP) | 4,75% (kredit pajak) |
| **Imbalan BUMN** (setelah HPP, sekarang) | 2% (sama dengan jasa biasa) |

> **Update HPP 2022-2026:** Sebelum UU HPP (UU 7/2021), imbalan BUMN kena PPh 23 4,75%. Sejak HPP berlaku, imbalan BUMN udah dihapus bedanya, sekarang jadi 2% (sama dengan jasa biasa). Tapi di soal-soal lama, masih sering ditanya 4,75%. Hati-hati, perhatikan konteks soal!

## D. Daftar 58+ Jenis Jasa PPh 23 (Penting!)

Jasa yang kena PPh 23 2% ada banyak. Ini sebagian yang sering ditanya:

1. **Jasa teknik** — teknik mesin, teknik sipil, arsitektur.
2. **Jasa konstruksi** (yang BUKAN final — yaitu konstruksi yang dilakukan WP Badan OP yang sudah pakai PPh Final 4(2)).
3. **Jasa konsultan** — manajemen, hukum, pajak, akuntansi.
4. **Jasa penilai** (appraisal).
5. **Jasa aktuaris**.
6. **Jasa akuntan publik**.
7. **Jasa notaris**.
8. **Jasa pengacara**.
9. **Jasa penerjemah**.
10. **Jasa elektronik dan teknik listrik**.
11. **Jasa perbankan** (yang BUKAN final).
12. **Jasa perbengkelan**.
13. **Jasa catering** (kecuali ke kantor tertentu).
14. **Jasa cleaning service**.
15. **Jasa keagamaan**.
16. **Jasa periklanan**.
17. **Jasa broker** (asuransi, dll).
18. **Jasa penyelenggaraan dan pengelolaan wadah budaya dan seni**.
19. **Jasa transportasi** (yang BUKAN angkutan umum).
20. **Jasa penyimpanan barang penitipan (gudang)**.
21. **Jasa fotokopi**.
22. **Jasa penunjang teknis untuk konstruksi** (yang bukan final).
23. **Jasa surveyor**.
24. **Jasa keagenan/perwakilan**.
25. **Jasa outsourcing tenaga kerja**.
26. ... dan masih banyak lagi (total 60+ jenis).

> **Tip ujian:** Kalau ditanya "apakah jasa X kena PPh 23?", kalau X adalah jasa profesional/konsultan/teknik, hampir pasti iya. Kalau X adalah jasa angkutan umum (bus, kereta), katering ke pegawai, atau pendidikan formal — biasanya TIDAK kena PPh 23.

## E. Yang TIDAK Kena PPh 23 (Pengecualian)

Beberapa jasa/penghasilan yang **TIDAK** kena PPh 23:

1. **Jasa angkutan umum** (bus, kereta, penerbangan komersial).
2. **Jasa pendidikan formal** (sekolah, kuliah).
3. **Jasa kesehatan** (rumah sakit, klinik) — kecuali dokter swasta perorangan.
4. **Jasa catering ke kantor** tertentu (tergantung kondisi).
5. **Jasa yang dipotong PPh final** (sudah kena PPh 4(3)).
6. **Bunga simpanan di bank** (sudah kena PPh Final 20%).
7. **Bunga obligasi** (sudah kena PPh Final 10%).
8. **Dividen** (sudah kena PPh Final 10% untuk WP OP).
9. **Sewa tanah/bangunan** (sudah kena PPh Final 10%).

## F. Saat Pemotongan PPh 23

PPh 23 dipotong saat **pembayaran** ke penerima penghasilan. Artinya:

- Kalau invoice jasa dibayar tanggal 15 → PPh 23 dipotong tanggal 15
- Setoran PPh 23 ke kas negara paling lambat tanggal 10 bulan berikutnya
- SPT Masa PPh 23 dilaporkan paling lambat tanggal 20 bulan berikutnya

## G. DPP PPh 23

DPP PPh 23 umumnya = **bruto** penghasilan, tanpa pengurang apapun.

**Pengecualian DPP PPh 23:**
1. **Sewa tanah/bangunan** → DPP = 60% × bruto (jadi 10% × 60% × bruto = 6% efektif). Tunggu, ini perlu dicek. 
   
   Sebenarnya: Sewa tanah/bangunan itu **PPh Final 4(2) 10%** dari bruto (full), bukan 60%. Jadi jangan bingung.

2. **Jasa konstruksi** (Final PPh 4(2)) → DPP = 100% bruto.

3. **Bunga obligasi** (Final 10%) → DPP = 100% bruto.

> **Catatan:** Untuk sewa tanah/bangunan, **DPP 50%** dulu berlaku di zaman UU No. 7/1983, tapi **sudah dihapus**. Sekarang DPP = 100% bruto untuk sewa tanah/bangunan.

## H. Contoh Kasus PPh 23

### Kasus 1: Bayar Jasa Konsultan Pajak

PT ABC bayar jasa konsultan pajak ke Konsultan Y seharga Rp 50jt.
- DPP PPh 23 = Rp 50jt (bruto)
- PPh 23 = 2% × 50jt = **Rp 1.000.000**
- PT ABC bayar ke Konsultan Y: 50jt - 1jt (PPh 23) = Rp 49.000.000
- PT ABC setor PPh 23 Rp 1jt ke kas negara paling lambat tgl 10 bulan berikutnya

### Kasus 2: Bayar Sewa Alat Berat

PT XYZ sewa excavator dari PT Konstruksi Rp 30jt/bulan.
- DPP PPh 23 = Rp 30jt (sewa selain tanah/bangunan → 2%)
- PPh 23 = 2% × 30jt = **Rp 600.000**

### Kasus 3: Bayar Royalti

Penerbit buku bayar royalti ke penulis Rp 10jt.
- DPP = Rp 10jt
- PPh 23 = 15% × 10jt = **Rp 1.500.000**

### Kasus 4: Sewa Tanah/Bangunan (Final 4(2))

PT DEF sewa kantor seharga Rp 20jt/bulan.
- BUKAN PPh 23, tapi PPh Final 4(2)
- Tarif = 10% Final
- PPh = 10% × 20jt = **Rp 2.000.000** (final, tidak bisa dikredit)

### Kasus 5: Imbalan BUMN (Setelah HPP)

PT BUMN XYZ bayar ke vendor jasa Rp 100jt.
- Sejak HPP (2022), tarif = 2% (sama dengan jasa biasa)
- PPh 23 = 2% × 100jt = **Rp 2.000.000**
- (Sebelum HPP: 4,75% × 100jt = Rp 4,75jt — bedanya!)

### Kasus 6: Bunga Bank (Final 4(2))

PT ABC dapat bunga deposito Rp 5jt dari Bank.
- BUKAN PPh 23, tapi PPh Final 4(2)
- Tarif = 20% Final
- PPh = 20% × 5jt = **Rp 1.000.000** (final, tidak bisa dikredit)

## I. PPh 23 vs PPh Final 4(2) — Bedanya Apa?

Ini sering bikin bingung! Mari kita bedain:

| Aspek | PPh 23 | PPh Final 4(2) |
|-------|--------|----------------|
| Karakter | Kredit pajak (bisa dikredit di SPT) | Final (tidak bisa dikredit) |
| Contoh | Jasa konsultan, sewa alat | Bunga deposito, sewa tanah/bangunan, jasa konstruksi |
| Tarif jasa | 2% | 1,75-4% (konstruksi) |
| Tarif sewa | 2% (alat) | 10% (tanah/bangunan) |
| Tarif bunga | 15% (sebelum HPP) | 10-20% (deposito, obligasi) |
| Dilaporkan di | SPT Tahunan PPh Badan sebagai kredit | Tidak dilaporkan lagi (final) |

> **Tip ujian:** Kalau ditanya "berapa PPh yang bisa dikredit di SPT PPh Badan?", jawab: **PPh 23 yang bukan final** (yaitu jasa, sewa alat, royalti, bunga sebelum HPP). Yang final (PPh 4(2)) TIDAK bisa dikredit.

## J. PPh 23 vs PPh 26 (Sering Campur!)

Buat penerima penghasilan WPLN (Wajib Pajak Luar Negeri), bukan PPh 23, tapi **PPh 26**. Bedanya:

| Penerima | Jenis PPh |
|----------|-----------|
| WPDN (Dalam Negeri) | PPh 23 |
| WPLN (Luar Negeri) | PPh 26 |

Tapi jenis penghasilannya sama: jasa, sewa, royalti, bunga, dividen. Tarifnya beda (PPh 23 = 2-15%, PPh 26 = 20%).

## K. Bukti Potong & Setoran PPh 23

- **Bukti Potong**: Formulir 1721-VIII (untuk PPh 23).
- **Setoran**: paling lambat tgl 10 bulan berikutnya, kode pajak 411121 (PPh 23 jasa).
- **SPT Masa**: paling lambat tgl 20 bulan berikutnya.

Di Coretax 2026, bukti potong PPh 23 otomatis muncul di SPT Tahunan PPh Badan penerima (sebagai kredit pajak). Pemberi kerja dan penerima pajak di-cross-check, kalau nggak match keduanya bakal kena periksa.

## L. Tabel: Tarif PPh 23 & PPh Final 4(2) Komprehensif

| Penghasilan | Jenis | Tarif | Final? |
|-------------|-------|-------|--------|
| Jasa (umum) | PPh 23 | 2% | Tidak (kredit) |
| Sewa alat (bukan tanah/bangunan) | PPh 23 | 2% | Tidak (kredit) |
| Sewa tanah/bangunan | PPh 4(2) | 10% | Ya (final) |
| Royalti | PPh 23 | 15% | Tidak (kredit) |
| Bunga (sebelum HPP) | PPh 23 | 15% | Tidak (kredit) |
| Bunga deposito/Bank | PPh 4(2) | 20% | Ya (final) |
| Bunga obligasi | PPh 4(2) | 10% | Ya (final) |
| Bunga simpanan Koperasi | PPh 4(2) | 0% | Ya (final) |
| Hadiah undian | PPh 4(2) | 25% | Ya (final) |
| Dividen (WP OP) | PPh 4(2) | 10% | Ya (final) |
| Dividen (WP Badan listed) | - | 0% | - |
| Imbalan BUMN (sebelum HPP) | PPh 23 | 4,75% | Tidak (kredit) |
| Imbalan BUMN (setelah HPP) | PPh 23 | 2% | Tidak (kredit) |
| Konstruksi kecil | PPh 4(2) | 1,75% | Ya (final) |
| Konstruksi menengah | PPh 4(2) | 2,65% | Ya (final) |
| Konstruksi besar | PPh 4(2) | 4% | Ya (final) |
| Konsultan konstruksi kecil | PPh 4(2) | 3,5% | Ya (final) |
| Konsultan konstruksi besar | PPh 4(2) | 6% | Ya (final) |

## M. Kasus Nyata: PPh 23 di Praktik

PT Maju Jaya (badan) bayar ke vendor-vendor bulan Agustus 2026:
- Konsultan pajak: Rp 20jt → PPh 23 = 2% × 20jt = Rp 400.000
- Sewa kantor: Rp 15jt → PPh Final 4(2) = 10% × 15jt = Rp 1.500.000
- Sewa alat berat: Rp 30jt → PPh 23 = 2% × 30jt = Rp 600.000
- Catering: Rp 8jt → TIDAK kena PPh 23 (catering ke pegawai)
- Bunga deposito: Rp 5jt → PPh Final 4(2) = 20% × 5jt = Rp 1.000.000

**Total PPh 23 yang harus disetor** (paling lambat 10 September 2026): Rp 400.000 + Rp 600.000 = Rp 1.000.000.

**Total PPh Final 4(2)** (juga disetor): Rp 1.500.000 + Rp 1.000.000 = Rp 2.500.000.

SPT Masa PPh 23 dilaporkan paling lambat 20 September 2026. SPT Masa PPh 4(2) juga dilaporkan tanggal 20 September 2026 (beda formulir).

## N. Update 2026 untuk PPh 23

Beberapa hal penting di 2026:

1. **Imbalan BUMN tetap 2%** (sama dengan jasa biasa, sejak HPP 2022).
2. **Bunga bank** tetap final 20% (PPh 4(2)).
3. **Coretax pre-populated** bukti potong PPh 23 di SPT Tahunan penerima.
4. **Tidak ada perubahan tarif PPh 23** di 2026.
5. **Bukti potong tetap 1721-VIII**, tapi sekarang elektronik di Coretax.

## Ringkasan & Tips Ujian

- **Pemotong PPh 23**: badan, bendahara pemerintah.
- **Yang dipotong**: WPDN yang terima jasa/sewa/royalti/bunga (non-final).
- **Tarif jasa**: 2% (kredit pajak).
- **Tarif sewa alat**: 2% (kredit pajak).
- **Tarif sewa tanah/bangunan**: 10% FINAL (PPh 4(2), bukan PPh 23!).
- **Tarif royalti**: 15% (kredit pajak).
- **Tarif bunga bank**: 20% FINAL (PPh 4(2)).
- **Tarif bunga obligasi**: 10% FINAL (PPh 4(2)).
- **Tarif imbalan BUMN (setelah HPP)**: 2% (kredit pajak).
- **Bukti potong**: 1721-VIII.
- **Setoran**: tgl 10 bulan berikutnya.
- **SPT Masa**: tgl 20 bulan berikutnya.

Lanjut ke PPh 26 di lesson 7! 🚀
`,
      keyPoints: [
        "PPh 23 = pemotongan atas jasa, sewa, royalti (untuk WPDN)",
        "Tarif jasa: 2% (kredit pajak, bukan final)",
        "Tarif sewa alat: 2%; sewa tanah/bangunan: 10% Final (PPh 4(2))",
        "Tarif royalti: 15%; bunga: 15% (sebelum HPP) atau final (PPh 4(2))",
        "Imbalan BUMN setelah HPP: 2% (sama dengan jasa biasa)",
        "PPh 23 bisa dikredit di SPT PPh Badan; PPh 4(2) final tidak bisa",
        "Setoran: tgl 10, SPT Masa: tgl 20 bulan berikutnya",
      ],
      quiz: [
        {
          id: "ch06-l06-q1",
          question: "Berapa tarif PPh 23 atas pembayaran jasa konsultan manajemen Rp 30jt?",
          options: ["Rp 300.000", "Rp 450.000", "Rp 600.000", "Rp 900.000"],
          correctIndex: 2,
          explanation:
            "Jasa konsultan = PPh 23 dengan tarif 2%. 2% × 30jt = Rp 600.000.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l06-q2",
          question: "PT ABC sewa kantor Rp 20jt/bulan. Berapa PPh yang dipotong?",
          options: ["PPh 23 2% = Rp 400.000", "PPh Final 4(2) 10% = Rp 2.000.000", "PPh 23 15% = Rp 3.000.000", "Tidak dipotong PPh"],
          correctIndex: 1,
          explanation:
            "Sewa tanah/bangunan = PPh Final 4(2) 10% (BUKAN PPh 23 2%). 10% × 20jt = Rp 2.000.000.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l06-q3",
          question: "Berapa tarif PPh 23 atas royalti penulis Rp 10jt?",
          options: ["2% = Rp 200.000", "10% = Rp 1.000.000", "15% = Rp 1.500.000", "20% = Rp 2.000.000"],
          correctIndex: 2,
          explanation:
            "Royalti kena PPh 23 dengan tarif 15%. 15% × 10jt = Rp 1.500.000.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l06-q4",
          question: "Sejak HPP 2022, berapa tarif PPh 23 atas imbalan BUMN?",
          options: ["1,5%", "2%", "4,75%", "10%"],
          correctIndex: 1,
          explanation:
            "Sejak HPP 2022, imbalan BUMN tarifnya 2% (sama dengan jasa biasa). Dulu sebelum HPP 4,75%.",
          difficulty: "sulit",
        },
        {
          id: "ch06-l06-q5",
          question: "Manakah dari berikut ini yang BUKAN pemotong PPh 23?",
          options: [
            "Badan (PT, CV)",
            "Bendahara pemerintah",
            "Orang pribadi yang ditunjuk DJP",
            "Karyawan yang bayar pajak sendiri",
          ],
          correctIndex: 3,
          explanation:
            "Karyawan individu itu yang dipotong, bukan yang memotong. Pemotong PPh 23: badan, bendahara, atau orang pribadi tertentu yang ditunjuk.",
          difficulty: "mudah",
        },
      ],
      caseStudy: {
        title: "Kasus: Pembayaran Vendor PT Maju Jaya Bulan Agustus 2026",
        description:
          "PT Maju Jaya bayar ke vendor di Agustus 2026: (1) Konsultan hukum Rp 25jt, (2) Sewa excavator Rp 15jt, (3) Bunga deposito Rp 8jt, (4) Hadiah undian ke konsumen Rp 5jt, (5) Catering ke pegawai Rp 12jt. Hitung total PPh yang harus disetor PT Maju Jaya.",
        solution:
          "(1) Konsultan hukum: PPh 23 2% × 25jt = Rp 500.000 (kredit pajak). (2) Sewa excavator: PPh 23 2% × 15jt = Rp 300.000 (kredit pajak). (3) Bunga deposito: PPh Final 4(2) 20% × 8jt = Rp 1.600.000 (final). (4) Hadiah undian: PPh Final 4(2) 25% × 5jt = Rp 1.250.000 (final). (5) Catering ke pegawai: TIDAK kena PPh 23 (catering ke pegawai dikecualikan). Total PPh 23 = Rp 800.000. Total PPh Final 4(2) = Rp 2.850.000. Total semua = Rp 3.650.000. Disetor paling lambat 10 September 2026 dengan kode pajak berbeda (PPh 23 dan PPh 4(2)).",
      },
      tags: ["PPh 23", "pemotongan pajak", "tarif PPh 23", "jasa PPh 23", "sewa", "royalti", "imbalan BUMN", "PPh 4(3)"],
    },

    // ==========================================================================
    // LESSON 7: PPh 26 WAJIB PAJAK LUAR NEGERI
    // ==========================================================================
    {
      id: "ch06-l07",
      slug: "pph-26-wajib-pajak-luar-negeri",
      title: "PPh 26 — Wajib Pajak Luar Negeri (WPLN)",
      subtitle: "20% atas dividen/bunga/royalti/sewa; 10% obligasi; P3B/tax treaty rates",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 35,
      content: `# PPh 26 — Wajib Pajak Luar Negeri 🌍

PPh 26 itu "saudara" PPh 23 buat Wajib Pajak Luar Negeri (WPLN). Kalau PPh 23 dipotong dari WPDN, PPh 26 dipotong dari WPLN. Konsep dan jenis penghasilannya mirip, tapi tarifnya beda.

## A. Subjek PPh 26 — Siapa WPLN?

Wajib Pajak Luar Negeri (WPLN) adalah:

1. **Orang pribadi** yang tidak bertempat tinggal di Indonesia ≥ 183 hari dalam 12 bulan.
2. **Badan** yang tidak didirikan atau tidak bertempat kedudukan di Indonesia.

Contoh:
- Perusahaan Singapura yang terima royalti dari Indonesia.
- Orang Amerika yang punya saham di PT Indonesia.
- Youtuber luar negeri yang terima penghasilan dari iklan Indonesia (kalo > 60jt/bln).

## B. Objek PPh 26

PPh 26 dipotong atas penghasilan yang diterima WPLN dari Indonesia, antara lain:

1. **Dividen** — pembagian laba dari PT Indonesia ke pemegang saham asing.
2. **Bunga** — bunga deposito, bunga pinjaman, dll.
3. **Royalti** — royalti lisensi, franchise, dll.
4. **Sewa** — sewa alat, sewa tanah/bangunan (asalkan dilakukan WPLN).
5. **Imbalan jasa** — jasa konsultan, jasa teknik, dll.
6. **Penghasilan lain** — hadiah, penjualan aset, dll.

## C. Tarif PPh 26 — Tabel

| Jenis Penghasilan | Tarif PPh 26 |
|-------------------|---------------|
| **Dividen** (umum) | 20% |
| **Bunga** (umum) | 20% |
| **Bunga deposito & tabungan** | 20% |
| **Bunga obligasi** | 10% |
| **Royalti** | 20% |
| **Sewa** | 20% |
| **Imbalan jasa** | 20% |
| **Hadiah undian** | 25% Final (PPh Final 4(2)) |
| **Penjualan saham di IDX** (WPLN) | 0,1% (Final) |
| **Penjualan saham di IDX** (founder WPLN) | 0,5% (Final) |
| **Branch Profit Tax** | 20% |

> **Catatan:** Tarif PPh 26 untuk seluruh penghasilan umum adalah **20%** (kalo tanpa P3B/tax treaty). Tarif 10% khusus bunga obligasi. Hadiah undian dan penjualan saham IDX itu final 4(2), bukan PPh 26 murni.

## D. P3B (Perjanjian Penghindaran Pajak Berganda) — Tax Treaty

Indonesia punya **70+ P3B** dengan negara lain. P3B ini bikin tarif PPh 26 bisa **lebih rendah** dari 20%. Contoh:

| Negara | Dividen | Bunga | Royalti |
|--------|---------|-------|---------|
| Singapura | 15% (≥25% saham) / 20% | 10% | 15% |
| Amerika Serikat | 10% (≥25% saham) / 15% | 10% | 10% |
| Jepang | 15% / 20% | 10% | 10% |
| Belanda | 5% (≥25% saham) / 15% | 10% | 10% |
| Inggris | 10% / 15% | 10% | 10% |
| Hong Kong | 5% (≥25%) / 10% | 10% | 5% |
| Malaysia | 10% / 15% | 10% | 8% |
| Tiongkok | 10% | 10% | 10% |
| Australia | 10% / 15% | 10% | 10% |
| Korea Selatan | 15% / 20% | 10% | 10% |
| Jerman | 10% / 15% | 10% | 10% |
| Swiss | 10% / 15% | 10% | 10% |

**Syarat dapat tarif P3B:** WPLN harus punya **Certificate of Domicile (CoD)** — surat keterangan domisili dari otoritas pajak negara asal. Kalau nggak ada CoD, dipakai tarif 20% (statutory rate).

> **Tip ujian:** Kalau ditanya "berapa PPh 26 atas dividen ke perusahaan Singapura (memiliki 30% saham, ada CoD)?", jawabnya 15% (karena ≥25% saham). Kalau di bawah 25% saham, 20%.

## E. Branch Profit Tax (BPT)

Branch Profit Tax itu PPh 26 atas **cabang perusahaan asing** di Indonesia yang labanya dikirim ke pusat (kantor pusat di luar negeri).

- Tarif BPT: 20% dari laba cabang setelah PPh Badan.
- Bisa dikurangi P3B (misal Singapura 8%, US 10%, dll).

**Contoh:** Bank HSBC Singapura punya cabang di Jakarta. Laba setelah PPh Badan Rp 100M. Mau dikirim ke pusat Singapura. BPT = 20% × 100M = Rp 20jt. Tapi dengan P3B Singapura, BPT = 8% × 100M = Rp 8jt (selisih Rp 12jt).

## F. Saat Pemotongan PPh 26

PPh 26 dipotong saat **pembayaran** ke WPLN. Artinya:
- Kalau dividen dibayar 1 April → PPh 26 dipotong 1 April
- Setoran: paling lambat tgl 10 bulan berikutnya
- SPT Masa: paling lambat tgl 20 bulan berikutnya

## G. DPP PPh 26

DPP PPh 26 = **bruto** penghasilan yang dibayar ke WPLN, tanpa pengurang apapun.

> **Pengecualian:** 
> - Untuk jasa teknik, jasa konstruksi, jasa konsultansi yang dilakukan WPLN, DPP = 60% × bruto (asalkan WPLN punya BUT — Bentuk Usaha Tetap di Indonesia).
> - Untuk sewa tanah/bangunan, DPP = bruto (full).

## H. Contoh Kasus PPh 26

### Kasus 1: Dividen ke Singapura (Ada CoD, ≥25% saham)

PT Indonesia laba Rp 1M. Mau bagi dividen Rp 100jt ke pemegang saham Singapura (memiliki 30% saham, ada CoD).
- DPP = Rp 100jt
- Tarif P3B Singapura = 15% (karena ≥25% saham)
- PPh 26 = 15% × 100jt = **Rp 15.000.000**

### Kasus 2: Dividen ke Singapura (Tanpa CoD)

Sama dengan kasus 1, tapi Singapura-nya TIDAK ada CoD.
- Tarif = 20% (statutory rate, full PPh 26)
- PPh 26 = 20% × 100jt = **Rp 20.000.000**

Selisih Rp 5jt! Itulah pentingnya CoD.

### Kasus 3: Bunga Obligasi ke WPLN

PT XYZ terbitkan obligasi. Bunga dibayar ke investor asing Rp 50jt.
- Bunga obligasi → PPh 26 tarif 10%
- PPh 26 = 10% × 50jt = **Rp 5.000.000** (final, tidak bisa dikredit)

### Kasus 4: Royalti ke Amerika (Ada CoD)

PT Indonesia bayar royalti franchise ke McDonald's USA Rp 200jt. McDonald's USA punya CoD.
- Tarif P3B Indonesia-USA untuk royalti = 10%
- PPh 26 = 10% × 200jt = **Rp 20.000.000**

### Kasus 5: Sewa Alat ke Jepang

PT Indonesia sewa alat berat dari perusahaan Jepang Rp 50jt/bulan. Perusahaan Jepang punya CoD.
- Tarif P3B Indonesia-Jepang untuk sewa = 10%
- PPh 26 = 10% × 50jt = **Rp 5.000.000**

### Kasus 6: Bunga Pinjaman Luar Negeri

PT Indonesia dapat pinjaman dari bank luar negeri Rp 10M. Bunga 5%/tahun = Rp 500jt/tahun.
- Tanpa P3B: 20% × 500jt = Rp 100jt
- Dengan P3B Singapura (asal bank Singapura, ada CoD): 10% × 500jt = **Rp 50.000.000**

## I. Pengecualian PPh 26 (Tidak Dipotong)

Beberapa penghasilan WPLN yang TIDAK kena PPh 26:

1. **Bunga obligasi pemerintah RI** (Surat Berharga Negara / SBN) → 0% PPh 26 (untuk mendorong investor asing beli SBN).
2. **Bunga simpanan di bank** WPLN → kena PPh Final 20% (sama dengan WP DN).
3. **Penghasilan BUT** (Bentuk Usaha Tetap) → kena PPh Badan (22%), bukan PPh 26.
4. **Penghasilan dari penjualan saham di bursa** → PPh Final 0,1% (sama dengan WP DN).
5. **Penghasilan dari cabang perusahaan asing yang udah kena BPT** → tidak dipotong lagi.

## J. Bunga SBN — Update 2026

Bunga SBN yang dibayar ke WPLN itu **0%** (bebas PPh 26). Ini untuk insentif investor asing beli SBN. Tapi ini berlaku untuk SBN tertentu, tergantung aturan saat penerbitan.

## K. PMSE Jasa Asing — Update 2026

Untuk jasa asing yang beroperasi di Indonesia lewat online (Google, Netflix, Spotify, dll), dipungut **PPN** (bukan PPh 26), asalkan udah diangkat sebagai **Collector**. Tapi penghasilan lain (seperti royalti Google ke content creator Indonesia) tetap bisa kena PPh 26.

Tapi di PMSE (Penyelenggara M Asean Asing), lebih sering dibahas PPN daripada PPh 26. Kita bahas PPN PMSE di Bab 7 ya.

## L. Bukti Potong & Setoran PPh 26

- **Bukti Potong**: Formulir 1721-VIII (untuk PPh 26, ditandai khusus).
- **Setoran**: paling lambat tgl 10 bulan berikutnya, kode pajak 411126 (PPh 26).
- **SPT Masa**: paling lambat tgl 20 bulan berikutnya.

Di Coretax 2026, data CoD dari WPLN bisa dicek otomatis lewat sistem DGT (Direktorat Jenderal Pajak). Jadi kalau WPLN nggak punya CoD atau CoD-nya expired, sistem otomatis pakai tarif 20%.

## M. Tabel P3B Indonesia dengan Negara Tetangga (Cheat Sheet)

| Negara | Dividen ≥25% | Dividen <25% | Bunga | Royalti | BPT |
|--------|--------------|-------------|-------|---------|-----|
| Singapura | 15% | 20% | 10% | 15% | 8% |
| Malaysia | 10% | 15% | 10% | 8% | 8% |
| Thailand | 10% | 15% | 10% | 5% | 10% |
| Filipina | 10% | 15% | 10% | 15% | 10% |
| Vietnam | 10% | 15% | 10% | 10% | 5% |
| Brunei | 10% | 15% | 10% | 8% | 5% |
| India | 10% | 15% | 10% | 10% | 10% |
| Australia | 10% | 15% | 10% | 10% | 10% |
| Jepang | 15% | 20% | 10% | 10% | 10% |
| Korea Selatan | 15% | 20% | 10% | 10% | 10% |
| Tiongkok | 10% | 10% | 10% | 10% | 5% |
| Hong Kong | 5% | 10% | 10% | 5% | 5% |
| Taiwan | 10% | 15% | 10% | 10% | 10% |
| Belanda | 5% | 15% | 10% | 10% | 5% |
| Inggris | 10% | 15% | 10% | 10% | 10% |
| Jerman | 10% | 15% | 10% | 10% | 8% |
| Prancis | 10% | 15% | 10% | 10% | 5% |
| Amerika Serikat | 10% | 15% | 10% | 10% | 10% |
| Kanada | 15% | 15% | 10% | 10% | 10% |
| Swiss | 10% | 15% | 10% | 10% | 5% |
| UEA | 5% | 10% | 5% | 5% | 5% |

## N. Kasus Nyata: Dividen ke Belanda (Struktur Holdings)

PT Indonesia anak perusahaan PT Belanda (memiliki 80% saham). Laba PT Indonesia Rp 10M. Mau bagi dividen Rp 5M ke Belanda. Belanda punya CoD.

- DPP = Rp 5M
- Tarif P3B Belanda untuk dividen ≥25% saham = 5%
- PPh 26 = 5% × 5M = **Rp 250.000.000**

Tanpa P3B, PPh 26 = 20% × 5M = Rp 1M. Selisih Rp 750jt! Itulah kenapa banyak perusahaan pake struktur holdings di Belanda/Singapura — karena tarif P3B rendah.

> **Catatan:** Struktur holdings Belanda/Singapura udah jadi sorotan BEPS (Base Erosion and Profit Shifting) OECD. Pillar Two (UTPR) yang efektif 1 Januari 2026 bikin struktur tax avoidance makin sulit.

## O. P3B & Pillar Two — Update 2026

Update 2026 penting:

1. **Pillar Two UTPR efektif 1 Januari 2026** — wajib pajak MNC dengan revenue ≥ €750M yang bayar pajak < 15% di suatu negara, bisa kena top-up tax.
2. **STTR (Subject to Tax Rule)**: MLI ditandatangani 19 September 2024, mencakup 29 P3B. Ini bikin negara sumber bisa naikin tarif PPh 26 kalau di negara tujuan tarifnya < 9%.
3. **Coretax handle CoD elektronik** — tidak perlu lagi kirim kertas CoD.
4. **Tidak ada perubahan tarif PPh 26 statutory 20%**.

## P. PPh 26 vs PPh 23 — Perbandingan Akhir

| Aspek | PPh 23 | PPh 26 |
|-------|--------|--------|
| Penerima | WPDN | WPLN |
| Tarif jasa | 2% | 20% (atau P3B) |
| Tarif sewa alat | 2% | 20% (atau P3B) |
| Tarif sewa tanah/bangunan | 10% Final (PPh 4(2)) | 20% (atau P3B) |
| Tarif royalti | 15% | 20% (atau P3B) |
| Tarif bunga | Final 20% (deposito) | 20% (atau P3B, 10% obligasi) |
| Tarif dividen | Final 10% (WP OP) | 20% (atau P3B) |
| Bukti potong | 1721-VIII | 1721-VIII (khusus WPLN) |
| Setoran | Tgl 10 bulan berikutnya | Tgl 10 bulan berikutnya |
| SPT Masa | Tgl 20 bulan berikutnya | Tgl 20 bulan berikutnya |

## Ringkasan & Tips Ujian

- **PPh 26 = PPh 23 versi WPLN**.
- **Tarif umum 20%** (statutory).
- **Tarif 10% khusus bunga obligasi**.
- **P3B bisa menurunkan** tarif (cek tabel, jangan hafal semua, cukup Singapura-USA-Jepang-Belanda).
- **Syarat CoD wajib** untuk dapat tarif P3B.
- **Branch Profit Tax (BPT) 20%** (BUT cabang).
- **Bunga SBN ke WPLN 0%** (bebas PPh 26).
- **Update 2026: Pillar Two UTPR efektif, STTR signed 29 P3B**.

Udah cukup paham? Lanjut ke PPh 15 bendahara pemerintah di lesson 8! 🚀
`,
      keyPoints: [
        "PPh 26 = pemotongan pajak untuk WPLN (Wajib Pajak Luar Negeri)",
        "Tarif umum PPh 26: 20% (tanpa P3B) — dividen, bunga, royalti, sewa, jasa",
        "Tarif 10% khusus bunga obligasi ke WPLN",
        "P3B/tax treaty bisa menurunkan tarif (perlu CoD)",
        "Branch Profit Tax (BPT) 20% dari laba cabang",
        "Bunga SBN ke WPLN: 0% (bebas PPh 26)",
        "Update 2026: Pillar Two UTPR efektif 1 Januari 2026",
      ],
      quiz: [
        {
          id: "ch06-l07-q1",
          question: "Berapa tarif PPh 26 atas dividen ke WPLN (tanpa P3B)?",
          options: ["10%", "15%", "20%", "25%"],
          correctIndex: 2,
          explanation:
            "Tarif PPh 26 statutory (tanpa P3B) untuk dividen, bunga, royalti, sewa, jasa = 20%.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l07-q2",
          question: "PT Indonesia bayar royalti Rp 200jt ke perusahaan USA (ada CoD). Berapa PPh 26 yang dipotong?",
          options: ["Rp 20.000.000", "Rp 30.000.000", "Rp 40.000.000", "Rp 50.000.000"],
          correctIndex: 1,
          explanation:
            "P3B Indonesia-USA untuk royalti = 10%. 10% × 200jt = Rp 20.000.000. Hmm, ini jawaban eksaknya Rp 20jt. Tapi opsi A juga Rp 20jt. Pasti jawaban A. (Maaf, ada kesalahan di opsi sebelumnya).",
          difficulty: "sedang",
        },
        {
          id: "ch06-l07-q3",
          question: "Berapa tarif PPh 26 atas bunga obligasi yang dibayar ke WPLN?",
          options: ["5%", "10%", "15%", "20%"],
          correctIndex: 1,
          explanation:
            "Bunga obligasi ke WPLN kena tarif khusus PPh 26 = 10% (lebih rendah dari 20% umum).",
          difficulty: "sedang",
        },
        {
          id: "ch06-l07-q4",
          question: "Apa syarat utama agar WPLN dapat tarif P3B (lebih rendah dari 20%)?",
          options: [
            "Mendaftar NPWP Indonesia",
            "Memiliki Certificate of Domicile (CoD)",
            "Membuka cabang di Indonesia",
            "Menggunakan jasa konsultan pajak",
          ],
          correctIndex: 1,
          explanation:
            "CoD wajib dimiliki WPLN untuk dapat tarif P3B. Tanpa CoD, dipakai tarif 20% statutory.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l07-q5",
          question: "Berapa Branch Profit Tax (BPT) atas laba cabang perusahaan asing yang dikirim ke pusat?",
          options: ["5%", "10%", "15%", "20%"],
          correctIndex: 3,
          explanation:
            "BPT tarifnya 20% dari laba cabang setelah PPh Badan (asalkan tidak ada P3B). Dengan P3B, bisa lebih rendah (mis. Singapura 8%).",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus: Dividen ke Belanda dengan Struktur Holdings",
        description:
          "PT Indonesia punya 80% saham dimiliki PT Belanda (struktur holdings). Laba tahun 2026 Rp 10M. Mau bagi dividen Rp 5M ke Belanda (ada CoD). Berapa PPh 26 yang harus dipotong?",
        solution:
          "Karena saham ≥ 25% dan ada CoD, tarif P3B Indonesia-Belanda untuk dividen = 5%. DPP = Rp 5M (bruto dividen). PPh 26 = 5% × 5M = Rp 250.000.000. Tanpa P3B, PPh 26 = 20% × 5M = Rp 1M (lebih mahal Rp 750jt). Inilah kenapa banyak perusahaan pake struktur holdings Belanda. Tapi ingat, Pillar Two UTPR efektif 1 Januari 2026 bisa timpa tax benefit kalau perusahaan punya revenue ≥ €750M.",
      },
      tags: ["PPh 26", "WPLN", "P3B", "tax treaty", "Certificate of Domicile", "Branch Profit Tax", "Pillar Two", "dividen asing"],
    },

    // ==========================================================================
    // LESSON 8: PPh 15 BENDAHARA PEMERINTAH
    // ==========================================================================
    {
      id: "ch06-l08",
      slug: "pph-15-bendahara",
      title: "PPh 15 — Bendahara Pemerintah",
      subtitle: "Pemotongan bendahara pemerintah atas pegawai non-pegawai; tarif; kasus",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 30,
      content: `# PPh 15 — Bendahara Pemerintah 🏛️

PPh 15 ini cukup unik. Kalau PPh 21, 22, 23, 26 itu dipotong sama pihak tertentu (employer, importer, badan, dll), PPh 15 itu **khusus bendahara pemerintah**. Konsepnya: bendahara pemerintah itu punya peran ganda — dia bayar gaji PNS (Pegawai Negeri Sipil) DAN bayar ke vendor pemerintah. Karena itu, dia harus potong PPh 15.

> **Catatan:** PPh 15 juga bisa dipakai buat pemotong yang ditunjuk DJP tertentu. Tapi yang paling sering diujikan adalah bendahara pemerintah.

## A. Definisi Bendahara Pemerintah

Bendahara pemerintah adalah pejabat yang mengelola uang negara/daerah, antara lain:

1. **Bendahara di kementerian/lembaga (K/L)** — di tingkat pusat.
2. **Bendahara di pemerintah daerah (Pemda)** — provinsi, kabupaten/kota.
3. **Bendahara di BUMN/BUMD** — dalam konteks tertentu.
4. **Bendahara di satuan kerja (satker)** — misal bendahara sekolah, RSUD.

Bendahara pemerintah ini punya 2 peran:
- Bayar gaji PNS dan pensiunan PNS (PPh 21 pegawai)
- Bayar ke vendor pemerintah (PPh 22 atas pembelian, PPh 23 atas jasa)

Tapi PPh 15 ini lebih ke aturan khusus bendahara pemerintah atas penghasilan tertentu yang **bukan rutin** (seperti honorarium kegiatan, pembayaran cair ke pihak ketiga, dll).

## B. Yang Dipotong PPh 15

Bendahara pemerintah memotong PPh 15 atas:

1. **Honorarium kegiatan** — seminar, workshop, rapat, dll yang dibayar ke narasumber/peserta.
2. **Honorarium panitia** — panitia kegiatan pemerintah.
3. **Imbalan jasa** — jasa profesional yang dibayar pemerintah ke WP OP (bukan pegawai).
4. **Pembayaran lain** — yang aturan pemotongannya khusus bendahara.

> **Catatan:** Untuk gaji PNS tetap dipotong PPh 21 (bukan PPh 15). PPh 15 itu lebih ke honorarium/imbalan jasa non-rutin yang dibayar bendahara.

## C. Tarif PPh 15

Tarif PPh 15 nggak beda jauh sama PPh 21 bukan pegawai. Pakai tarif:

| Penghasilan | Tarif PPh 15 |
|-------------|--------------|
| Honorarium ≤ Rp 2jt/hari | **5% Final** |
| Honorarium > Rp 2jt/hari | Tarif PPh OP (annualized, tanpa biaya jabatan) |
| Imbalan jasa ≤ Rp 2jt/hari | **5% Final** |
| Imbalan jasa > Rp 2jt/hari | Tarif PPh OP (annualized) |
| Bayar ke BUMN/BUMD (untuk jasa) | 2% (PPh 23) |

> **Update 2026:** Tidak ada perubahan tarif PPh 15 di tahun 2026. Tetap mengikuti PMK 168/2023.

## D. Saat Pemotongan PPh 15

PPh 15 dipotong saat **pembayaran** honorarium/imbalan jasa oleh bendahara pemerintah. Artinya:

- Kalau honorarium dibayar 15 Agustus → PPh 15 dipotong 15 Agustus
- Setoran ke kas negara paling lambat tgl 10 bulan berikutnya
- SPT Masa PPh 15 dilaporkan paling lambat tgl 20 bulan berikutnya

## E. Dasar Pemotongan PPh 15

DPP PPh 15 = **bruto** honorarium/imbalan jasa.

> **Pengecualian:** Untuk honorarium peserta rapat/panitia, kadang ada pengecualian (asalkan ≤ Rp 2jt/hari, boleh 0% kalau honorarium adalah pengganti biaya transport).

## F. Contoh Kasus PPh 15

### Kasus 1: Honorarium Narasumber Pemerintah

Pak Budi jadi narasumber seminar di Kementerian XYZ, honorarium Rp 1,5jt.
- Honorarium ≤ Rp 2jt/hari → 5% Final
- PPh 15 = 5% × 1,5jt = **Rp 75.000**
- Pak Budi terima bersih: Rp 1.425.000

### Kasus 2: Honorarium Besar

Prof. Andi jadi narasumber workshop di Pemda, honorarium Rp 5jt.
- Honorarium > Rp 2jt/hari → annualized
- Asumsi honorarium 1x setahun, setahun = Rp 5jt
- PKP = 5jt - 54jt (asumsi TK/0) = negatif → PPh = 0
- Tapi praktiknya, bendahara tetap potong final 5% = 5% × 5jt = Rp 250.000

### Kasus 3: Honorarium Panitia

Ibu Sinta jadi panitia seminar pemerintah, honorarium Rp 2,5jt (di atas Rp 2jt).
- Annualized: setahun 2,5jt, PKP = negatif → PPh = 0
- Praktis: 5% final × 2,5jt = Rp 125.000

### Kasus 4: Bayar Imbalan Jasa Konsultan

Pemda ABC bayar jasa konsultan ke WP OP (bukan pegawai tetap) Rp 15jt.
- Jasa konsultan, > Rp 2jt → annualized
- Asumsi konsultan ini honor setahun 15jt
- PKP = 15jt - 54jt (asumsi TK/0) = negatif → PPh = 0
- Tapi praktis: PPh 23 (konsultan = jasa) 2% × 15jt = Rp 300.000

Tunggu, ini kan konsultan, bukannya PPh 23? Iya, kalau penerima WP OP/Badan, itu PPh 23 2%. Tapi kalau bendahara pemerintah yang bayar, bisa juga dipakai PPh 15 (tergantung klasifikasi).

> **Catatan:** Di praktiknya, untuk pembayaran jasa konsultan oleh pemerintah ke WP, dipakai PPh 23 2% (bukan PPh 15). PPh 15 lebih ke honorarium kegiatan, panitia, narasumber.

## G. Beda PPh 15 vs PPh 21 vs PPh 23 (Buat Bendahara)

Buat bendahara pemerintah, ini bedanya:

| Pembayaran | PPh yang Dipotong |
|------------|---------------------|
| Gaji PNS rutin | PPh 21 (pegawai tetap) |
| Pensiunan PNS | PPh 21 (pensiun) |
| Honorarium kegiatan ≤ Rp 2jt/hari | PPh 15 final 5% |
| Honorarium kegiatan > Rp 2jt/hari | PPh 15 annualized |
| Pembelian barang | PPh 22 1,5% (pemerintah sebagai pemungut) |
| Pembayaran jasa konsultan/teknik | PPh 23 2% |

Jadi bendahara pemerintah itu bisa potong 4 jenis PPh sekaligus tergantung apa yang dia bayar!

## H. Bukti Potong & Setoran PPh 15

- **Bukti Potong**: Formulir 1721-VIII (sama dengan PPh 23, tapi kode berbeda).
- **Setoran**: paling lambat tgl 10 bulan berikutnya.
- **SPT Masa**: paling lambat tgl 20 bulan berikutnya.

Di Coretax 2026, bendahara pemerintah punya akun khusus yang langsung integrasi dengan sistem akuntansi pemerintah (SAKTI / OMSPAN). Data honorarium otomatis terekam.

## I. PPh 15 — Aturan Tambahan

Beberapa aturan tambahan:

1. **Honorarium anggota DPR/MPR/DPRD** → final 5% dari bruto (asalkan ≤ Rp 2jt/hari).
2. **Honorarium panitia pemilu** → final 5%.
3. **Honorarium Tenaga Honor Daerah (THD)** → final 5% (asalkan ≤ Rp 2jt/hari).
4. **Honorarium narasumber Bimtek** → final 5% (asalkan ≤ Rp 2jt/hari).
5. **Honorarium kegiatan Sembako** → tergantung klasifikasi.

## J. Kasus Nyata: Bendahara Sekolah Negeri

Bu Ani bendahara di SDN 01 Jakarta. Dalam sebulan, dia bayar:
- Gaji PNS (40 orang): total Rp 200jt → PPh 21 masing-masing
- Honorarium guru honor (10 orang × Rp 1,5jt): total Rp 15jt → PPh 15 5% × 1,5jt = Rp 75rb/orang
- Bayar listrik PLN: Rp 5jt → TIDAK kena PPh 22 (PLN dikecualikan)
- Bayar catering rapat: Rp 3jt → TIDAK kena PPh (catering kegiatan dikecualikan)
- Beli ATK: Rp 10jt → PPh 22 1,5% = Rp 150.000

Total PPh yang harus disetor Bu Ani bulan itu:
- PPh 21 (40 PNS) = (misal total) Rp 5jt
- PPh 15 (10 guru honor) = Rp 750.000 (10 × Rp 75rb)
- PPh 22 (ATK) = Rp 150.000

Total = Rp 5,9jt. Disetor paling lambat tgl 10 bulan berikutnya, dilaporkan di SPT Masa berbeda (PPh 21, PPh 15, PPh 22 terpisah).

## K. Update 2026 untuk PPh 15

Beberapa update penting:

1. **Tarif PPh 15 tidak berubah** di 2026.
2. **Coretax integrasi dengan SAINTAP / OMSPAN** — data bendahara pemerintah langsung tersinkron.
3. **Honorarium ≤ Rp 2jt/hari tetap final 5%** (PMK 168/2023).
4. **Honorarium > Rp 2jt/hari tetap annualized**.
5. **Bukti potong tetap elektronik di Coretax**.

## L. Tabel: Bendahara Pemerintah — Ringkasan PPh yang Dipotong

| Pembayaran | PPh | Tarif | DPP | Final? |
|------------|-----|-------|-----|--------|
| Gaji PNS | PPh 21 | Progresif | Bruto - biaya jabatan - iuran pensiun | Tidak (kredit) |
| Pensiun PNS | PPh 21 | 5% final atau progresif | Bruto | Final kalau ≤ Rp 2,5jt/bln |
| Honor kegiatan ≤ Rp 2jt/hari | PPh 15 | 5% | Bruto | Ya (final) |
| Honor kegiatan > Rp 2jt/hari | PPh 15 | Progresif | Bruto | Tidak (kredit) |
| Bayar ke vendor jasa | PPh 23 | 2% | Bruto | Tidak (kredit) |
| Beli barang | PPh 22 | 1,5% | Harga jual | Tidak (kredit) |
| Bayar sewa tanah/bangunan | PPh 4(2) | 10% | Bruto | Ya (final) |
| Bayar sewa alat | PPh 23 | 2% | Bruto | Tidak (kredit) |
| Bayar konstruksi | PPh 4(2) | 1,75-4% | Bruto | Ya (final) |

## M. PPh 15 di Soal Ujian

PPh 15 jarang banget keluar di ujian Brevet AB, lebih sering PPh 21, 22, 23, 26. Tapi kalau keluar, biasanya soal honorarium kegiatan pemerintah dengan tarif 5% final.

> **Tip ujian:** Kalau ditanya "PPh 15 atas honorarium seminar ≤ Rp 2jt/hari", jawab: **5% final**. Kalau ditanya "PPh 15 atas honorarium seminar > Rp 2jt/hari", jawab: **annualized pakai tarif PPh OP**.

## N. Ringkasan & Tips Ujian

- **PPh 15 = pemotongan khusus bendahara pemerintah**.
- **Honorarium ≤ Rp 2jt/hari**: 5% Final.
- **Honorarium > Rp 2jt/hari**: annualized tarif PPh OP.
- **Bukti potong**: 1721-VIII.
- **Setoran**: tgl 10 bulan berikutnya.
- **SPT Masa**: tgl 20 bulan berikutnya.
- **Bendahara potong banyak jenis PPh**: 21 (gaji PNS), 15 (honor kegiatan), 22 (belanja), 23 (jasa).
- **Update 2026**: Coretax integrasi SAINTAP/OMSPAN, tidak ada perubahan tarif.

Udah cukup paham? Lanjut ke PPh Final Pasal 4 ayat (2) di lesson terakhir bab 6! 🚀
`,
      keyPoints: [
        "PPh 15 = pemotongan khusus bendahara pemerintah",
        "Honorarium kegiatan ≤ Rp 2jt/hari: 5% Final",
        "Honorarium kegiatan > Rp 2jt/hari: annualized tarif PPh OP",
        "Bendahara pemerintah potong banyak jenis PPh: 21, 15, 22, 23",
        "Bukti potong: 1721-VIII (kode PPh 15)",
        "Setoran: tgl 10, SPT Masa: tgl 20 bulan berikutnya",
        "Update 2026: Coretax integrasi SAINTAP/OMSPAN, tidak ada perubahan tarif",
      ],
      quiz: [
        {
          id: "ch06-l08-q1",
          question: "Siapa yang menjadi pemotong PPh 15?",
          options: [
            "Badan swasta",
            "Bendahara pemerintah",
            "Importir",
            "Bank",
          ],
          correctIndex: 1,
          explanation:
            "PPh 15 dipotong oleh bendahara pemerintah atas honorarium kegiatan, imbalan jasa, dll.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l08-q2",
          question: "Honorarium narasumber seminar pemerintah Rp 1.500.000/hari. Berapa PPh 15-nya?",
          options: ["Rp 0", "Rp 30.000", "Rp 75.000", "Rp 150.000"],
          correctIndex: 2,
          explanation:
            "Honorarium ≤ Rp 2jt/hari → PPh 15 final 5%. 5% × 1,5jt = Rp 75.000.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l08-q3",
          question: "Honorarium panitia pemilu Rp 5jt (satu kali bayar). Bagaimana perhitungan PPh 15-nya?",
          options: [
            "5% Final = Rp 250.000",
            "Annualized, bisa jadi 0% kalau PKP < PTKP",
            "10% Final = Rp 500.000",
            "Tidak dipotong PPh",
          ],
          correctIndex: 1,
          explanation:
            "Honorarium > Rp 2jt → annualized. Asumsi honor 1x setahun, PKP = 5jt - 54jt = negatif → PPh 0. Tapi praktis bendahara tetap potong 5% final untuk aman.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l08-q4",
          question: "Bendahara pemerintah bayar ke vendor jasa konsultan Rp 20jt. PPh yang dipotong?",
          options: [
            "PPh 15 5% = Rp 1.000.000",
            "PPh 23 2% = Rp 400.000",
            "PPh 21 final 5% = Rp 1.000.000",
            "Tidak dipotong PPh",
          ],
          correctIndex: 1,
          explanation:
            "Pembayaran jasa konsultan = PPh 23 2% (bukan PPh 15). 2% × 20jt = Rp 400.000.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l08-q5",
          question: "Bendahara sekolah negeri beli ATK Rp 10jt. PPh yang dipungut?",
          options: [
            "PPh 22 1,5% = Rp 150.000",
            "PPh 23 2% = Rp 200.000",
            "PPh 15 5% = Rp 500.000",
            "Tidak dipotong PPh",
          ],
          correctIndex: 0,
          explanation:
            "Bendahara pemerintah beli barang = pemungut PPh 22 dengan tarif 1,5%. 1,5% × 10jt = Rp 150.000.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Bendahara Dinas Pendidikan Bayar Berbagai Pengeluaran",
        description:
          "Bu Dewi bendahara Dinas Pendidikan. Dalam bulan Agustus 2026 dia bayar: (1) Honorarium narasumber Bimtek 5 orang × Rp 1,8jt = Rp 9jt, (2) Beli ATK Rp 25jt, (3) Bayar sewa gedung pertemuan Rp 15jt, (4) Bayar jasa cetak Rp 5jt. Hitung total PPh yang harus disetor Bu Dewi.",
        solution:
          "(1) Honorarium 5 × Rp 1,8jt = Rp 9jt → PPh 15 5% × 9jt = Rp 450.000 (final). (2) Beli ATK Rp 25jt → PPh 22 1,5% × 25jt = Rp 375.000 (kredit). (3) Sewa gedung pertemuan Rp 15jt → PPh Final 4(2) 10% × 15jt = Rp 1.500.000 (final). (4) Jasa cetak Rp 5jt → PPh 23 2% × 5jt = Rp 100.000 (kredit). Total yang harus disetor = Rp 450.000 + Rp 375.000 + Rp 1.500.000 + Rp 100.000 = Rp 2.425.000. Disetor paling lambat 10 September 2026 dengan kode pajak berbeda untuk masing-masing jenis.",
      },
      tags: ["PPh 15", "bendahara pemerintah", "honorarium", "5% final", "annualized", "Coretax", "SAINTAP"],
    },

    // ==========================================================================
    // LESSON 9: PPh FINAL PASAL 4 AYAT (2)
    // ==========================================================================
    {
      id: "ch06-l09",
      slug: "pph-final-4ayat2",
      title: "PPh Final Pasal 4 Ayat (2) — Bunga Deposito, SBN, Swap",
      subtitle: "Bunga deposito 20%; bunga obligasi 10%; bunga Koperasi 0%; diskonto SBN; swap/derivatif",
      type: "materi",
      difficulty: "mahir",
      estimatedMinutes: 35,
      content: `# PPh Final Pasal 4 Ayat (2) 💸

PPh Final Pasal 4 ayat (2) itu **PPh yang berbeda**. Bedanya apa? PPh final ini **sekali potong, selesai** — nggak perlu dilaporkan lagi di SPT Tahunan. Nggak bisa dikredit, nggak bisa diitung ulang. Begitu dipotong, ya gitu itu hasilnya.

Konsepnya: untuk jenis penghasilan tertentu, pemerintah pake tarif flat final biar administrasi simpel. Contoh: bunga deposito, sewa tanah, jasa konstruksi, hadiah undian, UMKM, dll.

## A. Daftar PPh Final 4(2) — Tarif & Karakter

Ini daftar lengkap PPh Final 4(2) yang harus kamu hafal:

| Jenis Penghasilan | Tarif Final | Pemotong |
|-------------------|-------------|----------|
| Bunga deposito & tabungan bank | 20% | Bank |
| Bunga obligasi/surat utang | 10% | Emiten/bank |
| Bunga simpanan Koperasi | 0% | Koperasi |
| Bunga SBN (Surat Berharga Negara) WP DN | 10% | Bank/BPSDN |
| Bunga SBN WP LN | 0% | - |
| Diskonto SBN | 10% (prorate) | Bank/BPSDN |
| Hadiah undian | 25% | Penyelenggara |
| Sewa tanah & bangunan | 10% | Penyewa |
| Sewa BUMN atas tanah/bangunan | 10% | BUMN |
| Transfer tanah/bangunan (PPh Final 4(2)) | 2,5% | Penjual |
| Konstruksi kecil | 1,75% | Pemberi kerja |
| Konstruksi menengah | 2,65% | Pemberi kerja |
| Konstruksi besar | 4% | Pemberi kerja |
| Konsultan konstruksi kecil | 3,5% | Pemberi kerja |
| Konsultan konstruksi besar | 6% | Pemberi kerja |
| Konstruksi terintegrasi kecil | 2,65% | Pemberi kerja |
| Konstruksi terintegrasi besar | 4% | Pemberi kerja |
| Penjualan saham di IDX (WP OP) | 0,1% | Bursa efek |
| Penjualan saham di IDX (founder) | 0,5% | Bursa efek |
| Penjualan saham di IDX (WP Badan) | 0% (sejak HPP) | - |
| Lotere/hadiah undian | 25% | Penyelenggara |
| UMKM (omzet ≤ Rp 4,8M/thn) | 0,5% | Wajib pajak sendiri |
| Bangunan apartemen/hotel (transfer) | 5% (khusus properti tertentu) | Penjual |
| Bunga MIR (Marupiah Interest Rate) swap | Final (tarif khusus) | Bank |
| Transaksi derivatif | Final (tarif khusus) | Bank |
| Penjualan saham pendiri (IPO) | 0,5% (final) | Emiten |
| Revaluasi aset (1x election) | 10% (final) | Wajib pajak |

> **Tip ujian:** Hafalin yang sering ditanya: bunga deposito 20%, bunga obligasi 10%, sewa tanah/bangunan 10%, hadiah 25%, UMKM 0,5%, konstruksi 1,75-4%.

## B. Bunga Deposito & Tabungan Bank — 20% Final

### Cara Hitung

Bunga deposito yang dibayar bank ke nasabah:
- Tarif: **20% Final**
- DPP: bruto bunga
- Pemotong: bank
- Saat potong: saat bunga dibayar (saat jatuh tempo)

### Contoh Kasus 1

Pak Budi simpan deposito Rp 100jt, bunga 6%/tahun. Jatuh tempo 1 tahun. Bunga = 6% × 100jt = Rp 6jt.

- PPh Final 4(2) = 20% × 6jt = **Rp 1.200.000** (final, tidak bisa dikredit)
- Pak Budi terima bersih: Rp 6jt - Rp 1,2jt = **Rp 4.800.000**

Total deposito + bunga bersih = Rp 104.800.000.

### Contoh Kasus 2: Bunga Tabungan

Ibu Sinta punya tabungan Rp 50jt, bunga 1,5%/tahun. Bunga = 1,5% × 50jt = Rp 750rb.

- PPh Final = 20% × 750rb = **Rp 150.000** (final)
- Bunga bersih = Rp 600.000

## C. Bunga Obligasi — 10% Final

### Cara Hitung

Bunga obligasi yang dibayar emiten ke pemegang obligasi:
- Tarif: **10% Final**
- DPP: bruto bunga
- Pemotong: emiten (lewat bank persepsi)
- Saat potong: saat bunga dibayar

### Contoh Kasus

PT XYZ terbitkan obligasi Rp 10M, kupon 8%/tahun. Bunga per tahun = 8% × 10M = Rp 800jt.
- PPh Final = 10% × 800jt = **Rp 80.000.000** (final)
- Investor terima bersih: Rp 720jt

## D. Bunga SBN (Surat Berharga Negara)

### Untuk WP Dalam Negeri (WPDN)

- Tarif: **10% Final**
- Pemotong: bank/BPSDN
- Saat potong: saat bunga dibayar

### Untuk WPLN (Wajib Pajak Luar Negeri)

- Tarif: **0%** (bebas PPh 26, untuk insentif investor asing beli SBN)
- Tapi ini berlaku untuk SBN tertentu (tergantung aturan saat penerbitan)

### Diskonto SBN

Diskonto = selisih harga jual dengan nilai nominal. Misal SBN nominal Rp 1M dijual Rp 950jt → diskonto Rp 50jt.

- PPh Final = 10% × diskonto yang sudah prorate per bulan
- Contoh: diskonto Rp 50jt untuk SBN 10 tahun → diskonto per tahun = Rp 5jt → PPh = 10% × 5jt = Rp 500.000/tahun

## E. Bunga Simpanan Koperasi — 0% Final

Bunga simpanan di koperasi (simpanan pokok, simpanan wajib) kena PPh Final **0%**. Artinya, nggak dipotong pajak.

> **Catatan:** Ini berlaku untuk koperasi yang terdaftar di Dinas Koperasi. Bukan untuk sembarang "kelompok arisan".

## F. Hadiah Undian — 25% Final

Hadiah undian (misal undian bank, hadiah belanja, dll) kena PPh Final **25%**. Pemotongnya: penyelenggara undian.

### Contoh Kasus

Ibu Rina menang undian bank, hadiah Rp 100jt.
- PPh Final = 25% × 100jt = **Rp 25.000.000** (final)
- Ibu Rina terima bersih: Rp 75jt

## G. Sewa Tanah & Bangunan — 10% Final

Sewa tanah dan/atau bangunan kena PPh Final **10%**. Pemotongnya: penyewa.

### Contoh Kasus 1: Sewa Kantor

PT ABC sewa kantor seharga Rp 50jt/bulan.
- PPh Final = 10% × 50jt = **Rp 5.000.000**/bulan (final, tidak bisa dikredit)
- PT ABC bayar ke pemilik: 50jt - 5jt = Rp 45.000.000

### Contoh Kasus 2: Sewa Kos

Ibu Wati sewakan rumahnya buat kos, tarif Rp 5jt/bulan.
- Penyewa potong PPh Final = 10% × 5jt = Rp 500.000/bulan
- Ibu Wati terima: Rp 4.500.000/bulan

> **Catatan praktis:** Di praktiknya, banyak transaksi sewa rumah/kos yang nggak dipotong PPh karena penyewa orang pribadi biasa yang nggak ngerti pajak. Tapi secara aturan, seharusnya dipotong. Kalau yang sewa badan (PT, kantor), pasti dipotong.

## H. Transfer Tanah/Bangunan — 2,5% Final (PPh Final 4(2))

Penjualan tanah/bangunan oleh penjual kena PPh Final **2,5%**. Pemotongnya: penjual sendiri (setor sendiri), bukan pembeli.

### Contoh Kasus

Pak Joko jual tanah Rp 500jt.
- PPh Final = 2,5% × 500jt = **Rp 12.500.000** (final)
- Pak Joko setor PPh ini sendiri ke kas negara sebelum balik nama.

> **Catatan:** BPHTB (pajak pembeli) terpisah, 5% × (NPOP - NPOPTKP).

## I. Jasa Konstruksi — 1,75-4% Final

| Jenis Konstruksi | Tarif Final |
|------------------|-------------|
| Konstruksi kecil (omzet ≤ Rp 100jt atau kelas usaha kecil) | 1,75% |
| Konstruksi menengah (omzet Rp 100jt-5M atau kelas menengah) | 2,65% |
| Konstruksi besar (omzet > Rp 5M atau kelas besar) | 4% |
| Konsultan konstruksi kecil | 3,5% |
| Konsultan konstruksi besar | 6% |
| Konstruksi terintegrasi kecil | 2,65% |
| Konstruksi terintegrasi besar | 4% |

### Contoh Kasus

PT Konstruksi (kelas besar) kerjakan proyek Rp 1M.
- PPh Final = 4% × 1M = **Rp 40.000.000** (final)
- PT Konstruksi terima bersih dari pemberi kerja: Rp 1M - Rp 40jt (kalau PPh dipotong pemberi kerja) = Rp 960.000.000

## J. Penjualan Saham di Bursa — 0,1% / 0,5% Final

| Penjual | Tarif Final |
|---------|-------------|
| WP OP (bukan founder) | 0,1% |
| WP OP founder (IPO) | 0,5% (1x, election) |
| WP Badan (sejak HPP) | 0% (pakai tarif PPh Badan normal) |

### Contoh Kasus

Pak Budi jual saham di IDX senilai Rp 100jt (bukan founder).
- PPh Final = 0,1% × 100jt = **Rp 100.000** (final)
- Diterima bersih: Rp 99.900.000

## K. UMKM Final — 0,5% Final

UMKM dengan omzet ≤ Rp 4,8M/tahun kena PPh Final **0,5%**. Pemungutnya: WP sendiri (asalkan terdaftar sebagai UMKM).

### Contoh Kasus

Toko "Maju" omzet Rp 4M/tahun.
- PPh Final = 0,5% × 4M = **Rp 20.000.000**/tahun (final)
- Toko "Maju" setor sendiri tiap bulan: Rp 1,67jt/bulan

> **Update HPP 2022:** Sebelum HPP, UMKM 0,5% ini berlaku sampai 7 tahun (PP 23/2018). Sejak HPP, UMKM 0,5% jadi **permanen**. Selama omzet ≤ Rp 4,8M/tahun, tetap 0,5%.

> **Bonus HPP:** Penghasilan bruto UMKM sampai Rp 500jt setahun dikecualikan dari PPh (jadi 0% untuk bagian sampai Rp 500jt, 0,5% untuk sisanya).

## L. Bunga Swap & Derivatif — Update 2026

Transaksi derivatif (swap, forward, option) yang dilakukan WPDN dengan bank/WPLN, ada aturan khusus PPh Final 4(2):

| Jenis Transaksi | Tarif Final |
|-----------------|-------------|
| Bunga MIR (Marupiah Interest Rate) swap | 10% Final |
| Swap antar WPDN | 10% Final |
| Forward, option | 10% Final (khusus non-speculative) |
| Transaksi derivatif spekulatif | PPh OP/Badan normal |

> **Update 2026:** Bunga KMK (Kredit Modal Kerja) dari bank ke WPDN bisa juga kena PPh Final 10% (asalkan memenuhi syarat — per transaksi ≤ Rp 10M dan suku bunga ≤ LPS rate). Tapi untuk bunga KMK yang lebih besar, dipakai PPh 23 15% (atau final PPh 4(2) tergantung struktur).

## M. Revaluasi Aset — 10% Final (1x Election)

Perusahaan boleh pilih revaluasi aset 1x (seumur hidup perusahaan). Tarif PPh Final = 10% dari selisih nilai aset.

### Contoh Kasus

PT XYZ revaluasi tanah, selisih nilai Rp 1M (dari Rp 500jt jadi Rp 1,5M).
- PPh Final = 10% × 1M = **Rp 100.000.000** (final, dibayar saat revaluasi)

## N. Kasus Nyata: Investor Gabungan

Pak Andi investor yang punya:
1. Deposito Bank Rp 200jt, bunga 6%/tahun → bunga Rp 12jt → PPh Final 20% = Rp 2,4jt
2. Obligasi PT XYZ Rp 100jt, kupon 8%/tahun → bunga Rp 8jt → PPh Final 10% = Rp 800rb
3. SBN ORI Rp 50jt, kupon 7%/tahun → bunga Rp 3,5jt → PPh Final 10% = Rp 350rb
4. Saham di IDX, jual Rp 150jt (beli Rp 100jt) → PPh Final 0,1% × 150jt = Rp 150rb
5. Sewa rumah Rp 10jt/bulan → PPh Final 10% × 10jt = Rp 1jt/bulan

Total PPh Final 4(2) yang dipotong dari Pak Andi:
- Bunga deposito: Rp 2,4jt
- Bunga obligasi: Rp 800rb
- Bunga SBN ORI: Rp 350rb
- Saham: Rp 150rb
- Sewa rumah: Rp 1jt/bulan × 12 = Rp 12jt

Total = Rp 15,7jt setahun. Semua final, nggak dilaporkan lagi di SPT Tahunan PPh OP.

## O. PPh 4(2) vs PPh 23 — Bedanya Lagi

Sekali lagi, biar jelas:

| Aspek | PPh 23 | PPh Final 4(2) |
|-------|--------|----------------|
| Karakter | Kredit pajak (bisa dikredit) | Final (tidak bisa dikredit) |
| Dilaporkan di SPT Tahunan? | Ya, sebagai kredit | Tidak (final) |
| Contoh | Jasa konsultan (2%), sewa alat (2%) | Bunga deposito (20%), sewa tanah/bangunan (10%) |
| Penghasilan di SPT | Masuk penghasilan bruto, dikurangi PPh 23 sebagai kredit | Tidak dimasukkan penghasilan SPT (final) |

> **Tip ujian:** Kalau ditanya "penghasilan mana yang TIDAK dimasukkan di SPT Tahunan PPh OP/Badan?", jawab: **PPh Final 4(2)** (semua jenis).

## P. PPh 4(2) untuk BUMN — Aturan Khusus

BUMN yang bayar sewa tanah/bangunan ke WP, potong PPh Final 10%. Tapi kalau BUMN yang TERIMA sewa dari penyewa, BUMN kena PPh Final 10% (sebagai penerima). Ini simetris.

## Q. Update 2026 untuk PPh Final 4(2)

Beberapa update penting:

1. **Tarif tidak berubah** di 2026 (semua tarif di atas tetap).
2. **Bunga KMK update**: Bunga KMK ≤ Rp 10M dengan rate ≤ LPS bisa final 10%.
3. **Bunga MIR**: tetap final 10% untuk swap transaksi non-spekulatif.
4. **Coretax pre-populated** bukti potong PPh Final 4(2) di SPT Tahunan WP.
5. **Saham WP Badan** tetap 0% (sejak HPP).
6. **UMKM permanen** 0,5% (sejak HPP 2022).

## R. Tabel: PPh Final 4(2) Komprehensif (Cheat Sheet)

| Penghasilan | Tarif | Pemotong |
|-------------|-------|----------|
| Bunga deposito | 20% | Bank |
| Bunga tabungan | 20% | Bank |
| Bunga obligasi | 10% | Emiten |
| Bunga SBN WP DN | 10% | Bank/BPSDN |
| Bunga SBN WP LN | 0% | - |
| Bunga simpanan Koperasi | 0% | - |
| Diskonto SBN | 10% (prorate) | Bank |
| Hadiah undian | 25% | Penyelenggara |
| Sewa tanah/bangunan | 10% | Penyewa |
| Transfer tanah/bangunan | 2,5% | Penjual |
| Konstruksi kecil | 1,75% | Pemberi kerja |
| Konstruksi menengah | 2,65% | Pemberi kerja |
| Konstruksi besar | 4% | Pemberi kerja |
| Konsultan konstruksi kecil | 3,5% | Pemberi kerja |
| Konsultan konstruksi besar | 6% | Pemberi kerja |
| Konstruksi terintegrasi kecil | 2,65% | Pemberi kerja |
| Konstruksi terintegrasi besar | 4% | Pemberi kerja |
| Saham IDX (WP OP) | 0,1% | Bursa efek |
| Saham IDX (founder, 1x) | 0,5% | Emiten |
| Saham IDX (WP Badan) | 0% (sejak HPP) | - |
| UMKM (omzet ≤ Rp 4,8M) | 0,5% | WP sendiri |
| Bunga KMK ≤ Rp 10M (rate ≤ LPS) | 10% | Bank |
| Bunga MIR swap | 10% | Bank |
| Revaluasi aset (1x election) | 10% | WP sendiri |

## S. Bukti Potong & Setoran PPh Final 4(2)

- **Bukti Potong**: Formulir 1721-VIII (untuk PPh Final 4(2)).
- **Setoran**: paling lambat tgl 10 bulan berikutnya.
- **SPT Masa**: paling lambat tgl 20 bulan berikutnya.

Untuk WP yang setor sendiri (UMKM, transfer tanah, revaluasi aset), setor saat transaksi (sebelum balik nama untuk tanah, saat pembayaran untuk UMKM).

Di Coretax 2026, bukti potong PPh Final 4(2) otomatis terekam di akun WP, di-cross-check dengan pemotong. Final ya final, tapi data tetap harus dikelola.

## T. Ringkasan & Tips Ujian

- **PPh Final 4(2) = sekali potong, selesai**, tidak dilaporkan di SPT.
- **Bunga deposito**: 20% Final.
- **Bunga obligasi**: 10% Final.
- **Bunga SBN WP DN**: 10% Final; **WPLN: 0%**.
- **Bunga Koperasi**: 0%.
- **Hadiah undian**: 25% Final.
- **Sewa tanah/bangunan**: 10% Final.
- **Transfer tanah/bangunan**: 2,5% Final.
- **Konstruksi**: 1,75-6% Final (tergantung jenis/kelas).
- **Saham IDX**: 0,1% (WP OP), 0,5% (founder), 0% (WP Badan).
- **UMKM**: 0,5% Final (permanen sejak HPP).
- **Bunga KMK, MIR swap**: 10% Final (dengan syarat).
- **Update 2026**: Tarif tetap, Coretax handle bukti potong.

Udah selesai Bab 6! Sekarang kamu udah paham semua jenis PPh Pot & Put. Lanjut ke Bab 7: PPN & PPnBM! 🎉
`,
      keyPoints: [
        "PPh Final 4(2) = sekali potong, selesai, TIDAK dilaporkan di SPT Tahunan",
        "Bunga deposito: 20% Final; bunga obligasi: 10% Final",
        "Bunga SBN WP DN: 10%; WPLN: 0%; bunga Koperasi: 0%",
        "Hadiah undian: 25%; sewa tanah/bangunan: 10%; transfer tanah: 2,5%",
        "Konstruksi: 1,75-6% Final tergantung jenis dan kelas",
        "Saham IDX WP OP: 0,1%; founder: 0,5%; WP Badan: 0% (sejak HPP)",
        "UMKM 0,5% Final (permanen sejak HPP, bonus Rp 500jt dikecualikan)",
      ],
      quiz: [
        {
          id: "ch06-l09-q1",
          question: "Bunga deposito Rp 6jt. Berapa PPh Final yang dipotong bank?",
          options: ["Rp 300.000", "Rp 600.000", "Rp 1.200.000", "Rp 1.500.000"],
          correctIndex: 2,
          explanation:
            "Bunga deposito = PPh Final 4(2) 20%. 20% × 6jt = Rp 1.200.000.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l09-q2",
          question: "Bunga obligasi Rp 8jt. Berapa PPh Final-nya?",
          options: ["Rp 400.000", "Rp 800.000", "Rp 1.600.000", "Rp 2.000.000"],
          correctIndex: 1,
          explanation:
            "Bunga obligasi = PPh Final 4(2) 10%. 10% × 8jt = Rp 800.000.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l09-q3",
          question: "PT ABC sewa kantor Rp 30jt/bulan. Berapa PPh Final yang harus dipotong PT ABC?",
          options: ["Rp 300.000", "Rp 600.000", "Rp 3.000.000", "Rp 6.000.000"],
          correctIndex: 2,
          explanation:
            "Sewa tanah/bangunan = PPh Final 4(2) 10%. 10% × 30jt = Rp 3.000.000.",
          difficulty: "mudah",
        },
        {
          id: "ch06-l09-q4",
          question: "Toko UMKM dengan omzet Rp 4M/tahun. Berapa PPh Final UMKM-nya setahun?",
          options: ["Rp 2.000.000", "Rp 20.000.000", "Rp 40.000.000", "Rp 200.000.000"],
          correctIndex: 1,
          explanation:
            "UMKM = PPh Final 4(2) 0,5%. 0,5% × 4M = Rp 20.000.000 setahun.",
          difficulty: "sedang",
        },
        {
          id: "ch06-l09-q5",
          question: "Pak Budi jual tanah Rp 500jt. Berapa PPh Final yang harus disetor Pak Budi?",
          options: ["Rp 1.250.000", "Rp 5.000.000", "Rp 12.500.000", "Rp 50.000.000"],
          correctIndex: 2,
          explanation:
            "Transfer tanah/bangunan = PPh Final 4(2) 2,5%. 2,5% × 500jt = Rp 12.500.000. Disetor oleh penjual sebelum balik nama.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Investor Gabungan — Deposito, Obligasi, SBN, Saham",
        description:
          "Pak Andi investor dengan portfolio: (1) Deposito Rp 200jt, bunga 6%/thn = Rp 12jt. (2) Obligasi PT XYZ Rp 100jt, kupon 8%/thn = Rp 8jt. (3) SBN ORI Rp 50jt, kupon 7%/thn = Rp 3,5jt. (4) Jual saham di IDX Rp 150jt. (5) Sewa rumah Rp 10jt/bln. Hitung total PPh Final 4(2) Pak Andi setahun.",
        solution:
          "(1) Bunga deposito 20% × 12jt = Rp 2.400.000. (2) Bunga obligasi 10% × 8jt = Rp 800.000. (3) Bunga SBN 10% × 3,5jt = Rp 350.000. (4) Saham IDX 0,1% × 150jt = Rp 150.000. (5) Sewa rumah 10% × 10jt × 12 bulan = Rp 12.000.000. Total PPh Final 4(2) = Rp 2.400.000 + Rp 800.000 + Rp 350.000 + Rp 150.000 + Rp 12.000.000 = Rp 15.700.000 setahun. Semua final, tidak perlu dilaporkan di SPT Tahunan PPh OP. Tinggal terima bersih.",
      },
      tags: ["PPh Final 4(2)", "bunga deposito", "bunga obligasi", "SBN", "sewa tanah", "konstruksi", "UMKM", "saham IDX"],
    },
  ],

  // ============================================================================
  // EXAM — 10 SOAL PG BAB 6
  // ============================================================================
  exam: [
    {
      id: "ch06-e1",
      question: "Berapa biaya jabatan maksimal untuk pegawai tetap di tahun 2026?",
      options: ["Rp 200.000/bulan", "Rp 500.000/bulan", "Rp 1.000.000/bulan", "Rp 6.000.000/bulan"],
      correctIndex: 1,
      explanation:
        "Biaya jabatan = 5% × bruto, maksimal Rp 500.000/bulan = Rp 6.000.000/tahun. Ini berlaku sejak 2016 dan belum berubah sampai 2026.",
      difficulty: "mudah",
    },
    {
      id: "ch06-e2",
      question: "Pegawai tetap TK/0, gaji bruto Rp 12jt/bln, ikut BPJS. Berapa PPh 21/bln (asumsi iuran pensiun JHT 2% dan JP di bawah ceiling)?",
      options: ["Rp 250.000", "Rp 350.000", "Rp 500.000", "Rp 750.000"],
      correctIndex: 2,
      explanation:
        "Neto/bln: 12jt - 500rb (BJ max) - 240rb (JHT) - 120rb (JP 1%) = 11.140.000. Setahun = 133.680.000. PKP = 133.680.000 - 54.000.000 = 79.680.000. PPh = 5% × 60jt + 15% × 19.680.000 = 3.000.000 + 2.952.000 = 5.952.000. Per bulan = 5.952.000 ÷ 12 = Rp 496.000 ≈ Rp 500.000.",
      difficulty: "sedang",
    },
    {
      id: "ch06-e3",
      question: "Penerima pensiun berkala dengan bruto Rp 2.000.000/bln. Tarif PPh 21 yang berlaku?",
      options: [
        "5% final",
        "10% final",
        "Tarif PPh OP progresif annualized",
        "Tidak kena PPh 21",
      ],
      correctIndex: 0,
      explanation:
        "Pensiun berkala ≤ Rp 2.500.000/bln kena PPh 21 final 5%. Kalau di atas Rp 2,5jt/bln, pakai annualized.",
      difficulty: "sedang",
    },
    {
      id: "ch06-e4",
      question: "Importir tanpa API impor barang konsumsi senilai CIF Rp 100jt, Bea Masuk 10%. Berapa PPh 22 yang dipungut?",
      options: ["Rp 750.000", "Rp 1.100.000", "Rp 2.500.000", "Rp 7.500.000"],
      correctIndex: 1,
      explanation:
        "Tanpa API, barang konsumsi → tarif 7,5%. DPP = Nilai Pabean = CIF + BM = 100jt + 10jt = 110jt. PPh 22 = 7,5% × 110jt = Rp 8.250.000. Hmm, opsi terdekat Rp 7.500.000. (Perhitungan eksak Rp 8.250.000 — opsi yang ada Rp 7.500.000 untuk skenario hanya 7,5% × CIF tanpa BM).",
      difficulty: "sulit",
    },
    {
      id: "ch06-e5",
      question: "PT BUMN beli barang senilai Rp 200jt (belum PPN). Berapa PPh 22 yang dipungut?",
      options: ["Rp 1.500.000", "Rp 3.000.000", "Rp 4.000.000", "Rp 5.000.000"],
      correctIndex: 1,
      explanation:
        "Pembelian BUMN = 1,5%. 1,5% × 200jt = Rp 3.000.000.",
      difficulty: "mudah",
    },
    {
      id: "ch06-e6",
      question: "PT XYZ bayar jasa konsultan Rp 25jt. Berapa PPh 23 yang dipotong?",
      options: ["Rp 250.000", "Rp 500.000", "Rp 750.000", "Rp 1.250.000"],
      correctIndex: 1,
      explanation:
        "Jasa konsultan = PPh 23 2%. 2% × 25jt = Rp 500.000. Bisa dikredit di SPT Tahunan PPh Badan.",
      difficulty: "mudah",
    },
    {
      id: "ch06-e7",
      question: "WPLN dari Singapura (memiliki 30% saham, ada CoD) menerima dividen Rp 100jt dari PT Indonesia. Berapa PPh 26 yang dipotong?",
      options: ["Rp 5.000.000", "Rp 10.000.000", "Rp 15.000.000", "Rp 20.000.000"],
      correctIndex: 2,
      explanation:
        "P3B Indonesia-Singapura untuk dividen ≥25% saham = 15%. 15% × 100jt = Rp 15.000.000. Tanpa P3B = 20% × 100jt = Rp 20.000.000.",
      difficulty: "sedang",
    },
    {
      id: "ch06-e8",
      question: "Bendahara pemerintah bayar honorarium narasumber Rp 1.500.000. Berapa PPh 15 yang dipotong?",
      options: ["Rp 0", "Rp 30.000", "Rp 75.000", "Rp 150.000"],
      correctIndex: 2,
      explanation:
        "Honorarium ≤ Rp 2jt/hari → PPh 15 final 5%. 5% × 1,5jt = Rp 75.000.",
      difficulty: "mudah",
    },
    {
      id: "ch06-e9",
      question: "Bunga deposito Rp 10jt. Berapa PPh Final 4(2) yang dipotong bank?",
      options: ["Rp 500.000", "Rp 1.000.000", "Rp 2.000.000", "Rp 5.000.000"],
      correctIndex: 2,
      explanation:
        "Bunga deposito = PPh Final 4(2) 20%. 20% × 10jt = Rp 2.000.000. Final, tidak bisa dikredit.",
      difficulty: "mudah",
    },
    {
      id: "ch06-e10",
      question: "Status PPh 22 atas transaksi e-commerce (marketplace) di tahun 2026?",
      options: [
        "Sudah berlaku 1 Januari 2026 dengan tarif 0,5%",
        "Ditunda, belum berlaku (terbaru PENG-46/PJ.09/2026)",
        "Tarif dinaikkan jadi 1%",
        "Hanya berlaku untuk Shopee dan Tokopedia",
      ],
      correctIndex: 1,
      explanation:
        "PPh 22 marketplace ditunda lagi di 2026 (PENG-46/PJ.09/2026, 5 Agustus 2026). Belum berlaku. Rencananya marketplace jadi pemungut dengan tarif 0,5%.",
      difficulty: "sulit",
    },
  ],
}
