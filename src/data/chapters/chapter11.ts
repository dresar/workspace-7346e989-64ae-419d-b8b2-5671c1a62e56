import type { Chapter } from "../types"

// ============================================================================
// BAB 11: PAJAK DAERAH & RETRIBUSI DAERAH
// ============================================================================

export const chapter11: Chapter = {
  id: "ch11",
  slug: "pajak-daerah-retribusi",
  number: 11,
  title: "Pajak Daerah & Retribusi Daerah",
  shortTitle: "Pajak Daerah",
  description:
    "Pajak daerah provinsi (PKB, BBN-KB, BB-KB, PAP, PATRA) + pajak kabupaten/kota (hotel, restoran, hiburan, reklame, penerangan jalan, parkir, BPHTB, PBB-P2). Plus Retribusi Daerah. Berbasis UU HKPD 1/2022.",
  icon: "MapPin",
  color: "fuchsia",
  difficulty: "menengah",
  estimatedMinutes: 150,
  objectives: [
    "Paham konsep dasar pajak daerah & dasar hukum UU HKPD 1/2022",
    "Hafal 5 jenis pajak provinsi: PKB, BBN-KB, BB-KB, PAP, PATRA",
    "Hafal 8 jenis pajak kabupaten/kota: hotel, restoran, hiburan, reklame, penerangan jalan, parkir, BPHTB, PBB-P2",
    "Ngerti konsep Retribusi Daerah & jenis-jenisnya",
    "Bisa hitung pajak daerah untuk kasus bisnis (restoran, kendaraan, reklame)",
  ],
  lessons: [
    {
      id: "ch11-l01",
      slug: "pajak-daerah-provinsi-kabupaten",
      title: "Pajak Daerah Provinsi & Kabupaten/Kota",
      subtitle:
        "UU HKPD 1/2022; 5 pajak provinsi (PKB, BBN-KB, BB-KB, PAP, PATRA); 8 pajak kab/kota (hotel, restoran, hiburan, reklame, penerangan jalan, parkir, BPHTB, PBB-P2)",
      type: "materi",
      difficulty: "menengah",
      estimatedMinutes: 18,
      content: `# Pajak Daerah Provinsi & Kabupaten/Kota 2026 🏛️

Yuk, kita masuk ke bab **Pajak Daerah**. Beda dengan PPh, PPN, Bea Materai yang masuk kas pusat, pajak daerah masuk kas Pemda (Provinsi atau Kabupaten/Kota).

Sejak **UU HKPD 1/2022** (Hubungan Keuangan Pusat-Daerah), aturan pajak daerah jadi lebih jelas. Pajak daerah dibagi jadi 2:

1. **Pajak Provinsi** — dipungut Pemda Provinsi (5 jenis)
2. **Pajak Kabupaten/Kota** — dipungut Pemda Kabupaten/Kota (8 jenis, termasuk PBB-P2 & BPHTB yang udah kita bahas di bab 9)

## Dasar Hukum Pajak Daerah 2026

| Tahun | Aturan | Status |
|-------|--------|--------|
| 2009 | UU 28/2009 (PDRD) | Awal pemisahan jenis pajak daerah |
| 2014 | UU 23/2014 (Pemda) | Penyesuaian |
| **2022** | **UU 1/2022 (UU HKPD)** | **Aturan terkini 2026** |

UU HKPD 1/2022 mengonsolidasikan semua aturan hubungan keuangan pusat-daerah, termasuk pajak daerah.

## 5 Jenis Pajak Provinsi

Pajak provinsi ada 5 jenis (UU HKPD 1/2022 Pasal 47):

### 1. PKB (Pajak Kendaraan Bermotor)

Pajak atas kepemilikan & penggunaan kendaraan bermotor.

| Aspek | Keterangan |
|-------|------------|
| Subjek | Pemilik kendaraan bermotor |
| Objek | Kendaraan bermotor (mobil, motor, bus, truk) |
| Tarif | Progresif berdasarkan NJKB (Nilai Jual Kendaraan Bermotor) |
| Tarif max | 10% (Jakarta pakai progresif sampai 4% mobil pribadi) |
| Pemungut | Pemda Provinsi |

**Tarif progresif PKB Jakarta (per pertama kepemilikan):**

| Kepemilikan ke- | Tarif |
|-----------------|-------|
| 1 | 2% |
| 2 | 2,5% |
| 3 | 3% |
| 4 dan seterusnya | 3,5% (maks 4%) |

> **Tip:** PKB progresif — makin banyak kendaraan atas nama orang yang sama, makin tinggi tarifnya. Tujuannya: batasi kepemilikan banyak kendaraan.

### 2. BBN-KB (Bea Balik Nama Kendaraan Bermotor)

Pajak saat perolehan/peralihan kepemilikan kendaraan.

| Aspek | Keterangan |
|-------|------------|
| Subjek | Pembeli/penerima kendaraan |
| Objek | Perolehan kendaraan bermotor (baru/bekas) |
| Tarif | 10% (mobil), 10% (motor) — pertama |
| Tarif progresif | Lebih tinggi untuk kendaraan kedua dst. |
| Pemungut | Pemda Provinsi |

**Contoh:**
- Beli mobil baru Rp 300jt → BBN-KB = 10% × 300jt = Rp 30jt
- Beli motor baru Rp 30jt → BBN-KB = 10% × 30jt = Rp 3jt

> **Penting:** BBN-KB dibayar SEKALI saat beli kendaraan (mirip BPHTB untuk tanah). PKB dibayar tiap tahun.

### 3. BB-KB (Bea Balik Nama Kendaraan di Atas Air)

Pajak saat perolehan kendaraan di atas air (kapal, perahu motor).

| Aspek | Keterangan |
|-------|------------|
| Subjek | Pembeli/penerima kendaraan di atas air |
| Tarif | 10% (umumnya) |
| Pemungut | Pemda Provinsi |

> Jarang dibahas di ujian Brevet AB karena skala kecil. Tapi konsepnya sama dengan BBN-KB.

### 4. PAP (Pajak Air Permukaan)

Pajak atas pengambilan & penggunaan air permukaan (sungai, danau, waduk).

| Aspek | Keterangan |
|-------|------------|
| Subjek | Pengguna air permukaan (industri, PDAM, dll) |
| Tarif | Maks 20% |
| Pemungut | Pemda Provinsi |

**Contoh:** PT Tekstil ambil air dari sungai buat proses produksi. Volume 1.000 m³/hari. Tarif PAP Rp 500/m³. PAP = 1.000 × 30 × 500 = Rp 15.000.000/bulan.

### 5. PATRA (Pajak Air Tanah)

Pajak atas pengambilan & penggunaan air tanah (sumur artesis, sumur bor).

| Aspek | Keterangan |
|-------|------------|
| Subjek | Pengguna air tanah (industri, hotel, dll) |
| Tarif | Maks 20% |
| Pemungut | Pemda Provinsi |

> **Update 2026:** Pemda provinsi makin aktif tagih PAP & PATRA, terutama ke industri yang boros air. Tujuannya: batasi eksploitasi air + dapat PAD.

## Tabel Ringkas: 5 Pajak Provinsi

| No | Pajak | Tarif Maks | Subjek |
|----|-------|-----------|--------|
| 1 | PKB | 10% (progresif) | Pemilik kendaraan bermotor |
| 2 | BBN-KB | 10% (pertama) | Pembeli kendaraan bermotor |
| 3 | BB-KB | 10% | Pembeli kendaraan di atas air |
| 4 | PAP | 20% | Pengguna air permukaan |
| 5 | PATRA | 20% | Pengguna air tanah |

## 8 Jenis Pajak Kabupaten/Kota

Pajak kabupaten/kota ada 8 jenis (UU HKPD 1/2022 Pasal 50):

### 1. Pajak Hotel

Pajak atas penyediaan jasa tempat istirahat/tidur (hotel, motel, villa, dll).

| Aspek | Keterangan |
|-------|------------|
| Subjek | Operator hotel |
| Objek | Penerimaan hotel |
| Tarif | Maks 10% |
| Pemungut | Pemda Kabupaten/Kota |

> Dibayar tamu hotel (include di harga kamar), tapi dipungut & disetor oleh operator hotel.

### 2. Pajak Restoran

Pajak atas penyediaan makanan/minuman untuk dikonsumsi di tempat.

| Aspek | Keterangan |
|-------|------------|
| Subjek | Operator restoran |
| Objek | Penerimaan restoran (omzet) |
| Tarif | Maks 10% |
| Pemungut | Pemda Kabupaten/Kota |

**Termasuk:** restoran, rumah makan, kafe, kantin, warung, katering, depot. **Tidak termasuk** kantin sekolah, rumah sakit (untuk pasien & petugas).

### 3. Pajak Hiburan

Pajak atas penyediaan hiburan (tiket masuk).

| Aspek | Keterangan |
|-------|------------|
| Subjek | Operator tempat hiburan |
| Objek | Penerimaan tiket hiburan |
| Tarif | Maks 40-75% (tergantung jenis) |
| Pemungut | Pemda Kabupaten/Kota |

**Contoh:** diskotik, karaoke, bioskop, panggung seni, taman hiburan. Tarif tinggi karena hiburan dianggap "konsumsi mewah".

### 4. Pajak Reklame

Pajak atas penyediaan media iklan/reklame.

| Aspek | Keterangan |
|-------|------------|
| Subjek | Penyewa reklame |
| Objek | Nilai sewa reklame |
| Tarif | Maks 25% |
| Pemungut | Pemda Kabupaten/Kota |

**Contoh:** billboard, baliho, spanduk, papan nama, videotron. Tarif tinggi karena mengganggu estetika kota.

### 5. Pajak Penerangan Jalan

Pajak atas penggunaan listrik untuk penerangan jalan (PUJ).

| Aspek | Keterangan |
|-------|------------|
| Subjek | Pengguna listrik tertentu (PLN sebagai pemungut) |
| Objek | Pembelian listrik |
| Tarif | Maks 10% (umumnya 3-5% dari biaya listrik) |
| Pemungut | Pemda Kabupaten/Kota |

> Dibayar konsumen PLN (include di tagihan listrik), dipungut PLN sebagai pihak ketiga, disetor ke Pemda.

### 6. Pajak Parkir

Pajak atas penyediaan jasa tempat parkir kendaraan.

| Aspek | Keterangan |
|-------|------------|
| Subjek | Operator parkir (mall, gedung, bandara) |
| Objek | Penerimaan parkir |
| Tarif | Maks 10% |
| Pemungut | Pemda Kabupaten/Kota |

### 7. BPHTB (Bea Perolehan Hak atas Tanah & Bangunan)

Sudah dibahas di bab 9. BPHTB = pajak daerah kabupaten/kota.

| Aspek | Keterangan |
|-------|------------|
| Subjek | Pembeli/penerima hak atas tanah & bangunan |
| Tarif | Maks 5% × NPOPKP |
| NPOPTKP | Min Rp 80jt (umum), Rp 300jt (waris/hibah wasiat) |
| Pemungut | Pemda Kabupaten/Kota |

### 8. PBB-P2 (Pajak Bumi dan Bangunan Perdesaan & Perkotaan)

Sudah dibahas di bab 9. PBB-P2 = pajak daerah kabupaten/kota.

| Aspek | Keterangan |
|-------|------------|
| Subjek | Pemilik/penguasa tanah & bangunan |
| Tarif | Maks 0,5% × NJOPKP |
| NJOPTKP | Min Rp 10jt |
| Pemungut | Pemda Kabupaten/Kota |

## Tabel Ringkas: 8 Pajak Kabupaten/Kota

| No | Pajak | Tarif Maks | Subjek |
|----|-------|-----------|--------|
| 1 | Hotel | 10% | Operator hotel |
| 2 | Restoran | 10% | Operator restoran |
| 3 | Hiburan | 40-75% | Operator tempat hiburan |
| 4 | Reklame | 25% | Penyewa reklame |
| 5 | Penerangan Jalan | 10% | Pengguna listrik |
| 6 | Parkir | 10% | Operator parkir |
| 7 | BPHTB | 5% | Pembeli tanah & bangunan |
| 8 | PBB-P2 | 0,5% | Pemilik tanah & bangunan |

## Beda Pajak Daerah vs Pajak Pusat (Sering Keluar!)

| Aspek | Pajak Pusat | Pajak Daerah |
|-------|-------------|--------------|
| Pemungut | Pemerintah Pusat (DJP) | Pemda Provinsi/Kabupaten/Kota |
| Penerimaan | APBN | APBD |
| Contoh | PPh, PPN, PPnBM, Bea Materai | PKB, BBN-KB, Pajak Hotel, BPHTB, PBB-P2 |
| Sanksi | MIR 0,6%/bln (Agustus 2026) | PERDA (umumnya 2%/bln) |
| Sistem | Coretax DJP | Coretax Daerah (terpisah per pemda) |
| Dasar Hukum | UU KUP, UU PPh, UU PPN | UU HKPD 1/2022 + PERDA |

## Update 2026: Integrasi Coretax Daerah

- **Coretax Daerah** (terpisah dari Coretax DJP) untuk pajak daerah.
- Tiap pemda punya sistem sendiri: DKI (e-Tax Jakarta), Surabaya (SISMIMOP), Bandung (SIM PAD), dll.
- **Integrasi NJOP** antara Coretax DJP & Coretax Daerah untuk PBB-P2 & BPHTB.
- **Online payment** via m-banking, e-wallet marak di kota besar.
- **Pemutihan tunggakan** di beberapa daerah (program khusus, cek PERDA).

## Kasus Lengkap: Hitung Pajak Daerah Restoran

Bu Sinta buka restoran di Surabaya. Bulan Januari 2026:
- Omzet restoran: Rp 100.000.000
- Tarif Pajak Restoran Surabaya: 10%
- Tarif PPN (efektif): 11%

### Pajak yang muncul:

1. **Pajak Restoran (Daerah)** = 10% × 100jt = Rp 10.000.000
   - Disetor ke Pemda Surabaya
2. **PPN (Pusat)** = 11% × 100jt = Rp 11.000.000
   - Disetor ke DJP via Coretax

> **Hati-hati:** Restoran kena **DUA pajak** — Pajak Restoran (daerah) + PPN (pusat). Jangan cuma hitung salah satu!

### Jurnal akuntansi Bu Sinta:

**Saat terima pendapatan (asumsi tunai):**

| Akun | Debit | Kredit |
|------|------|--------|
| Kas | 121.000.000 | |
| Pendapatan Restoran | | 100.000.000 |
| Utang Pajak Restoran (Pemda) | | 10.000.000 |
| Utang PPN Keluaran (DJP) | | 11.000.000 |

**Saat setor Pajak Restoran ke Pemda:**

| Akun | Debit | Kredit |
|------|------|--------|
| Utang Pajak Restoran | 10.000.000 | |
| Kas | | 10.000.000 |

**Saat setor PPN ke DJP:**

| Akun | Debit | Kredit |
|------|------|--------|
| PPN Keluaran | 11.000.000 | |
| Kas | | 11.000.000 |

## Kasus: Hitung Pajak Daerah Mobil Baru

Pak Budi beli mobil baru Rp 500jt di Jakarta. Status: ini mobil pertama atas nama Pak Budi.

### Pajak yang muncul:

1. **BBN-KB (Pajak Daerah Provinsi DKI)**:
   - Tarif pertama: 10%
   - BBN-KB = 10% × 500jt = **Rp 50.000.000** (dibayar Pak Budi sekali saat beli)

2. **PKB (Pajak Daerah Provinsi DKI)** tahun depan:
   - Tarif progresif Jakarta: 2% (kepemilikan pertama)
   - NJKB: Rp 500jt (asumsi)
   - PKB = 2% × 500jt = **Rp 10.000.000/tahun**

3. **PPN (Pajak Pusat)** saat beli mobil:
   - PPN efektif 11% × 500jt = **Rp 55.000.000** (include di harga mobil)

4. **PPnBM (Pajak Pusat)** kalau mobil mewah:
   - Tarif 10-95% tergantung jenis & kapasitas mesin

### Total pajak saat beli mobil Rp 500jt (asumsi bukan mobil mewah):
- PPN: Rp 55jt (include di harga)
- BBN-KB: Rp 50jt (terpisah, dibayar ke Pemda DKI)
- Total: Rp 105jt (~21% dari harga mobil)

> **Wow, mobil dipajak ~21% saat beli!** Belum lagi PKB tahunan Rp 10jt. Plus biaya STNK, plat, dll.

## Kasus: Pajak Reklame Billboard

PT ABC sewa billboard di Surabaya senilai Rp 50jt/bulan untuk iklan produk. Tarif Pajak Reklame Surabaya: 25%.

### Hitung:
- **Pajak Reklame (Daerah)** = 25% × 50jt = **Rp 12.500.000/bulan**
- Disetor PT ABC ke Pemda Surabaya (atau dikenakan ke pemilik billboard, tergantung struktur kontrak)

### Jurnal PT ABC:

| Akun | Debit | Kredit |
|------|------|--------|
| Beban Iklan/Reklame | 50.000.000 | |
| Utang Pajak Reklame | | 12.500.000 |
| Utang Dagang (ke pemilik billboard) | | 37.500.000 |

> **Catatan:** Pajak Reklame biasanya ditanggung penyewa (PT ABC), dipotong dari bayar ke pemilik billboard. Tapi kalau di kontrak ditulis "pajak ditanggung pemilik", maka yang setor pemilik billboard.

## Kasus: Pajak Hiburan Diskotik

PT Nightlife punya diskotik di Jakarta. Pendapatan tiket masuk Januari 2026: Rp 200jt. Tarif Pajak Hiburan Jakarta untuk diskotik: 40%.

### Hitung:
- **Pajak Hiburan** = 40% × 200jt = **Rp 80.000.000**
- Disetor PT Nightlife ke Pemda DKI

> **Wow, 40%!** Pajak hiburan tarif tinggi karena dianggap "konsumsi mewah" yang perlu dikontrol.

## Kasus: Pajak Penerangan Jalan (PUJ)

Rumah Pak Budi tagihan listrik PLN Rp 1jt/bulan. Tarif PUJ Jakarta: 3% dari nilai listrik.

### Hitung:
- **PUJ** = 3% × 1jt = **Rp 30.000/bulan**
- Otomatis include di tagihan PLN
- PLN setor ke Pemda DKI bulanan

## Tabel: Tarif Pajak Daerah Berbagai Kota (2026)

### Pajak Hotel (Tarif Maks 10%):

| Kota | Tarif |
|------|-------|
| DKI Jakarta | 10% |
| Surabaya | 10% |
| Bandung | 10% |
| Bali | 10% |
| Yogyakarta | 10% |
| Medan | 10% |

### Pajak Restoran (Tarif Maks 10%):

| Kota | Tarif |
|------|-------|
| DKI Jakarta | 10% |
| Surabaya | 10% |
| Bandung | 10% |
| Semarang | 10% |
| Medan | 10% |

### Pajak Hiburan (Tarif Maks Variatif):

| Jenis Hiburan | Tarif Maks |
|---------------|-----------|
| Diskotik, karaoke, bar | 40-75% |
| Bioskop | 15-25% |
| Taman hiburan | 10-15% |
| Panggung seni | 5-10% |

### Pajak Reklame (Tarif Maks 25%):

| Kota | Tarif |
|------|-------|
| DKI Jakarta | 25% |
| Surabaya | 25% |
| Bandung | 20% |

## Sanksi 2026 Pajak Daerah

| Pelanggaran | Sanksi (umum, sesuai PERDA) |
|-------------|---------------------------|
| Telat setor pajak daerah | Bunga 2%/bln (maks 24 bln) |
| Tidak lapor SPT | Denda Rp 100.000 - Rp 1.000.000 |
| Tidak daftar objek pajak | Denda + wajib bayar |
| Salah lapor | Koreksi + denda |

> **Bedanya sama pajak pusat:** Sanksi pajak daerah diatur PERDA masing-masing. Umumnya bunga 2%/bln (lebih tinggi dari MIR PPh 0,6%/bln).

## Tips Buat WP Pajak Daerah

1. **Daftar NPWP Daerah** di setiap kota tempat usaha.
2. **Catat omzet harian** dengan rapi (penting untuk restoran, hotel, hiburan).
3. **Setor bulanan** lewat m-banking atau e-wallet (ada di kota besar).
4. **Manfaatkan diskon** pembayaran dini (kalau ada di PERDA).
5. **Cek PERDA setempat** untuk tarif terbaru (bisa beda antar kota).
6. **Hindari tunggakan** — bunga pajak daerah lebih tinggi dari pajak pusat.

## Update 2026: Hal Penting Buat WP Pajak Daerah

- **Online payment** makin marak via m-banking, e-wallet (OVO, GoPay, ShopeePay).
- **SPOT elektronik** menggantikan SPPT fisik untuk PBB-P2 (banyak kota).
- **Pemutihan tunggakan** di beberapa daerah (Bangka Belitung untuk PKB/BBN-KB sampai Oktober 2026, Jatim pemutihan ojol Agustus 2026).
- **Notaris wajib lapor BPHTB online** sebelum akta.
- **Integrasi** Coretax DJP (PPh Final 2,5%) dengan Coretax Daerah (BPHTB, PBB-P2) untuk NJOP.

## Kesimpulan

Pajak daerah dibagi:

### Pajak Provinsi (5 jenis):
1. PKB (kendaraan bermotor, tarif progresif max 10%)
2. BBN-KB (bea balik nama, 10% sekali beli)
3. BB-KB (kendaraan di atas air, 10%)
4. PAP (air permukaan, max 20%)
5. PATRA (air tanah, max 20%)

### Pajak Kabupaten/Kota (8 jenis):
1. Pajak Hotel (max 10%)
2. Pajak Restoran (max 10%)
3. Pajak Hiburan (max 40-75%)
4. Pajak Reklame (max 25%)
5. Pajak Penerangan Jalan (max 10%)
6. Pajak Parkir (max 10%)
7. BPHTB (max 5%)
8. PBB-P2 (max 0,5%)

Kunci yang harus kamu inget:
- UU HKPD 1/2022 = dasar hukum terkini.
- 5 pajak provinsi + 8 pajak kab/kota.
- Tarif pajak daerah lebih tinggi proporsional untuk "konsumsi mewah" (hiburan, reklame).
- Sanksi pajak daerah PERDA (umumnya 2%/bln, lebih tinggi dari MIR PPh 0,6%/bln).

Paham kan? Lanjut ke Retribusi Daerah! 🏛️
`,
      keyPoints: [
        "Pajak Daerah diatur UU HKPD 1/2022, dibagi: 5 pajak provinsi + 8 pajak kabupaten/kota",
        "5 Pajak Provinsi: PKB (max 10% progresif), BBN-KB (10%), BB-KB (10%), PAP (max 20%), PATRA (max 20%)",
        "8 Pajak Kabupaten/Kota: Hotel, Restoran, Hiburan, Reklame, Penerangan Jalan, Parkir, BPHTB, PBB-P2",
        "Tarif pajak daerah: Hotel/Restoran/Parkir/Penerangan Jalan max 10%; Hiburan max 40-75%; Reklame max 25%; BPHTB max 5%; PBB-P2 max 0,5%",
        "Restoran kena DUA pajak: Pajak Restoran (daerah 10%) + PPN (pusat 11%)",
        "Beli mobil kena DUA pajak: BBN-KB (daerah 10%) + PPN (pusat 11%) — total ~21% dari harga mobil",
        "Sanksi pajak daerah diatur PERDA, umumnya bunga 2%/bln (lebih tinggi dari MIR PPh 0,6%/bln)",
        "Coretax Daerah (terpisah dari Coretax DJP) untuk pajak daerah, tiap pemda punya sistem sendiri",
      ],
      quiz: [
        {
          id: "ch11-l01-q1",
          question: "Berikut yang BUKAN termasuk 5 pajak provinsi:",
          options: ["PKB", "BBN-KB", "Pajak Restoran", "PAP"],
          correctIndex: 2,
          explanation:
            "Pajak Restoran = pajak KABUPATEN/KOTA, bukan provinsi. 5 pajak provinsi: PKB, BBN-KB, BB-KB, PAP, PATRA.",
          difficulty: "sedang",
        },
        {
          id: "ch11-l01-q2",
          question: "Tarif maksimal Pajak Hotel dan Pajak Restoran:",
          options: ["5%", "10%", "20%", "25%"],
          correctIndex: 1,
          explanation:
            "Tarif maksimal Pajak Hotel & Pajak Restoran = 10% (sesuai UU HKPD 1/2022). Tarif aktual tiap daerah bisa lebih rendah via PERDA.",
          difficulty: "mudah",
        },
        {
          id: "ch11-l01-q3",
          question: "Bu Sinta buka restoran di Surabaya, omzet Rp 100jt/bulan. Berapa total pajak yang muncul (Pajak Restoran 10%, PPN efektif 11%)?",
          options: [
            "Rp 10jt (Pajak Restoran saja)",
            "Rp 11jt (PPN saja)",
            "Rp 21jt (Pajak Restoran 10jt + PPN 11jt)",
            "Rp 100jt (10% + 11% dari omzet)",
          ],
          correctIndex: 2,
          explanation:
            "Restoran kena DUA pajak: Pajak Restoran (daerah) 10% × 100jt = 10jt + PPN (pusat) 11% × 100jt = 11jt. Total = Rp 21jt/bulan.",
          difficulty: "sedang",
        },
        {
          id: "ch11-l01-q4",
          question: "Pak Budi beli mobil baru Rp 500jt (mobil pertama atas namanya). Berapa BBN-KB yang dibayar (tarif 10%)?",
          options: ["Rp 5.000.000", "Rp 50.000.000", "Rp 100.000.000", "Rp 500.000.000"],
          correctIndex: 1,
          explanation: "BBN-KB = 10% × NJKB (500jt) = Rp 50.000.000. Dibayar sekali saat beli ke Pemda Provinsi (DKI). Belum termasuk PPN 11% (pusat).",
          difficulty: "sedang",
        },
        {
          id: "ch11-l01-q5",
          question: "PT ABC sewa billboard di Surabaya Rp 50jt/bulan. Tarif Pajak Reklame 25%. Berapa Pajak Reklame-nya?",
          options: ["Rp 5.000.000", "Rp 12.500.000", "Rp 25.000.000", "Rp 50.000.000"],
          correctIndex: 1,
          explanation: "Pajak Reklame = 25% × 50jt = Rp 12.500.000/bulan. Disetor ke Pemda Surabaya.",
          difficulty: "mudah",
        },
      ],
      caseStudy: {
        title: "Kasus: Buka Restoran + Sewa Mobil + Pasang Billboard",
        description:
          "Bu Ani di 2026 melakukan 3 hal: (1) Buka restoran di Surabaya, omzet Januari Rp 200jt (Pajak Restoran 10%, PPN efektif 11%); (2) Beli mobil baru Rp 400jt untuk operasional restoran (BBN-KB 10%, PPN 11%, mobil pertama); (3) Pasang billboard iklan restoran Rp 30jt/bulan (Pajak Reklame 25%). Hitung: (a) Total pajak yang muncul di Januari 2026; (b) Mana yang masuk Pemda Surabaya vs kas pusat DJP.",
        solution:
          "(1) Restoran:\n- Pajak Restoran (Pemda Surabaya): 10% × 200jt = Rp 20.000.000\n- PPN (DJP): 11% × 200jt = Rp 22.000.000\n- Subtotal restoran: Rp 42.000.000\n\n(2) Beli mobil baru Rp 400jt:\n- BBN-KB (Pemda Surabaya): 10% × 400jt = Rp 40.000.000\n- PPN (DJP): 11% × 400jt = Rp 44.000.000 (asumsi include di harga mobil)\n- Subtotal mobil: Rp 84.000.000\n\n(3) Billboard:\n- Pajak Reklame (Pemda Surabaya): 25% × 30jt = Rp 7.500.000\n- PPN (DJP): 11% × 30jt = Rp 3.300.000 (asumsi jasa reklame kena PPN)\n- Subtotal billboard: Rp 10.800.000\n\nTotal pajak Januari 2026 = 42jt + 84jt + 10,8jt = Rp 136.800.000\n\nPemda Surabaya terima: 20jt + 40jt + 7,5jt = Rp 67.500.000\nKas pusat (DJP) terima: 22jt + 44jt + 3,3jt = Rp 69.300.000\n\nCatatan: Bu Ani harus daftar NPWP Pusat (DJP) untuk PPN + NPWP Daerah Surabaya untuk Pajak Restoran, BBN-KB, dan Pajak Reklame. Setoran pajak daerah ke Pemda Surabaya via Coretax Daerah (SISMIMOP), setoran PPN ke DJP via Coretax DJP (e-billing).",
      },
      tags: [
        "pajak daerah",
        "pajak provinsi",
        "pajak kabupaten kota",
        "PKB",
        "BBN-KB",
        "pajak hotel",
        "pajak restoran",
        "pajak reklame",
        "UU HKPD 1/2022",
      ],
    },
    {
      id: "ch11-l02",
      slug: "retribusi-daerah",
      title: "Retribusi Daerah: Layanan, Izin, Pemanfaatan Aset",
      subtitle:
        "Definisi; 3 jenis retribusi (layanan umum, izin tertentu, pemanfaatan aset daerah); contoh IMB, paspor, pelayanan kesehatan daerah",
      type: "materi",
     difficulty: "pemula",
      estimatedMinutes: 12,
      content: `# Retribusi Daerah — Beda Sama Pajak, Ada Imbalan Langsung 🎫

Yuk, kita bahas **Retribusi Daerah**. Banyak yang bingung beda pajak daerah vs retribusi daerah. Padahal bedanya jelas:

> **Pajak = TANPA imbalan langsung. Retribusi = DENGAN imbalan langsung yang bisa ditunjuk.**

Kalau kamu bayar Pajak Restoran, kamu nggak langsung dapat balasan apa-apa dari pemda. Tapi kalau kamu bayar Retribusi Paspor, kamu langsung dapat paspor. Itu bedanya.

## Definisi Retribusi Daerah

Menurut UU HKPD 1/2022:

> "Retribusi Daerah adalah pungutan Daerah sebagai pembayaran jasa atau pemberian izin tertentu yang diberikan oleh Pemerintah Daerah."

### Karakteristik Retribusi:

1. **Ada imbalan langsung** — kamu bayar, kamu dapat layanan/izin tertentu.
2. **Kontraprestasi** — pembayaran sepadan dengan jasa yang diterima.
3. **Berdasar PERDA** — aturan oleh Pemda setempat.
4. **Sumber PAD** — masuk kas daerah (Pendapatan Asli Daerah).

## Beda Pajak Daerah vs Retribusi Daerah

| Aspek | Pajak Daerah | Retribusi Daerah |
|-------|-------------|------------------|
| Imbalan | Tidak ada | Ada, langsung & dapat ditunjuk |
| Sifat | Memaksa | Sukarela (sebagian) / Wajib (sebagian) |
| Tujuan | PAD + mengatur | PAD + biaya jasa |
| Dasar | Kepemilikan/transaksi | Penggunaan jasa/izin |
| Contoh | Pajak Hotel, PBB-P2 | Retribusi IMB, paspor, parkir |

> **Tip ujian:** Kalau ditanya "kenapa retribusi bukan pajak?" jawab: **"karena ada imbalan langsung yang dapat ditunjuk"**. Ini ciri kunci yang sering keluar.

## 3 Jenis Retribusi Daerah

Sesuai UU HKPD 1/2022, ada 3 jenis retribusi:

### 1. Retribusi Jasa Umum

Pungutan atas jasa yang disediakan Pemda untuk kepentingan umum.

**Contoh:**
- Retribusi pelayanan kesehatan (Puskesmas, RSUD)
- Retribusi kebersihan/persampahan
- Retribusi pasar (tempat usaha di pasar tradisional)
- Retribusi tempat pelelangan
- Retribusi penggunaan jalan umum (untuk acara tertentu)
- Retribusi pemakaman

**Tarif:** Sesuai PERDA, biasanya berdasarkan biaya layanan.

### 2. Retribusi Perizinan Tertentu

Pungutan atas pemberian izin tertentu oleh Pemda.

**Contoh:**
- Retribusi IMB (Izin Mendirikan Bangunan)
- Retribusi SIUP (Surat Izin Usaha Perdagangan)
- Retribusi TDP (Tanda Daftar Perusahaan) — sudah terintegrasi dengan NIB OSS
- Retribusi HoG (Hazardous Goods)
- Retribusi izin gangguan (HO)
- Retribusi izin prinsip

**Tarif:** Sesuai PERDA, biasanya berdasarkan nilai proyek (IMB) atau jenis izin.

### 3. Retribusi Pemanfaatan Aset Daerah

Pungutan atas penggunaan aset/kekayaan daerah oleh pihak ketiga.

**Contoh:**
- Retribusi sewa tanah milik Pemda
- Retribusi sewa gedung milik Pemda
- Retribusi sewa pasar (kios)
- Retribusi penggunaan ruang publik daerah
- Retribusi penggunaan terminal
- Retribusi penggunaan jalan untuk kepentingan komersial

**Tarif:** Sesuai PERDA, biasanya berdasarkan nilai sewa pasar.

## Tabel: Contoh Retribusi per Jenis

### Retribusi Jasa Umum:

| Jenis | Tujuan | Tarif (umum) |
|-------|--------|-------------|
| Puskesmas | Pelayanan kesehatan dasar | Rp 1.000 - 5.000/kunjungan |
| RSUD | Pelayanan kesehatan lanjut | Sesuai kelas (VIP lebih mahal) |
| Persampahan | Pengangkutan sampah | 5-10% dari tarif air |
| Pasar | Penggunaan kios pasar | Rp 1.000 - 100.000/hari |
| Tempat pelelangan | Layanan pelelangan | % dari nilai lelang |

### Retribusi Perizinan:

| Jenis Izin | Tarif (umum) |
|------------|-------------|
| IMB (Izin Mendirikan Bangunan) | 0,1-0,5% × biaya bangunan |
| SIUP | Rp 100.000 - 500.000 |
| TDP | Sudah terintegrasi dengan NIB OSS (gratis) |
| Izin gangguan (HO) | Rp 50.000 - 500.000 |
| HoG | Sesuai PERDA |
| Paspor (pusat, bukan daerah — kecualikan dari retribusi daerah) | — |

> **Catatan:** Paspor itu **bukan retribusi daerah**, melainkan retribusi pemerintah pusat (Kemenlu). Tapi konsepnya sama: ada imbalan langsung (paspor).

### Retribusi Pemanfaatan Aset Daerah:

| Jenis Aset | Tarif (umum) |
|-----------|-------------|
| Sewa tanah Pemda | Sesuai NJOP × % × luas |
| Sewa kios pasar | Rp 100.000 - 1.000.000/bln |
| Sewa gedung Pemda | Rp 1jt - 50jt/hari |
| Penggunaan terminal bus | % dari tiket |

## Contoh Kasus: Bu Sinta Bangun Rumah

Bu Sinta ingin bangun rumah di Jakarta. Biaya bangun Rp 500jt. Tarif Retribusi IMB DKI 0,2% dari biaya bangun.

### Hitung:
- **Retribusi IMB** = 0,2% × 500jt = **Rp 1.000.000**
- Dibayar Bu Sinta ke Pemda DKI saat ambil IMB

> **Bedanya Retribusi IMB vs PBB:**
> - Retribusi IMB: dibayar SEKALI saat bangun rumah (izin).
> - PBB-P2: dibayar TIAP TAHUN setelah rumah jadi (pajak).
> - Bangunan yang dibangun tanpa IMB → bisa kena tilang & dibongkar paksa.

## Contoh Kasus: Pak Budi Paspor Baru

Pak Budi bikin paspor baru di Kemenlu. Biaya paspor (5 tahun) Rp 350.000.

### Hitung:
- **Retribusi Paspor** = Rp 350.000
- Dibayar ke Kemenlu (pusat), bukan Pemda

> **Catatan:** Paspor = retribusi pemerintah pusat, bukan retribusi daerah. Tapi konsepnya sama: bayar langsung dapat paspor.

## Contoh Kasus: PT ABC Sewa Kios Pasar

PT ABC sewa kios di pasar tradisional milik Pemda Surabaya. Tarif sewa Rp 500.000/bulan.

### Hitung:
- **Retribusi Pemanfaatan Aset** = Rp 500.000/bulan
- Dibayar PT ABC ke Pemda Surabaya bulanan

## Beda Retribusi vs Parkir Swasta

Banyak yang salah anggap parkir mall = retribusi. Padahal:

| Aspek | Retribusi Parkir (Pemda) | Parkir Mall (Swasta) |
|-------|--------------------------|---------------------|
| Penerima | Kas daerah | Kas mall |
| Sifat | Wajib (kalau ditunjuk) | Sukarela (jasa mall) |
| Pajak | Tidak kena Pajak Parkir (sudah jasa) | Kena Pajak Parkir 10% |

> **Jadi:** Parkir mall itu **jasa swasta**, kena Pajak Parkir (daerah) 10%. Bukan retribusi.

## Cara Bayar Retribusi Daerah

1. **Datang ke kantor Pemda** terkait (DPMPTSP, Bapenda, dll).
2. **Isi formulir** pengajuan izin/jasa.
3. **Bayar** via:
   - Kantor kas daerah
   - Bank yang ditunjuk
   - m-banking (untuk kota besar)
   - e-wallet (untuk kota tertentu)
4. **Terima STTS** (Surat Tanda Terima Setoran) sebagai bukti.
5. **Terima dokumen/layanan** (IMB, SIUP, dll).

## Update 2026 di Era Digitalisasi

- **OSS (Online Single Submission)** untuk perizinan terintegrasi: IMB, SIUP, TDP, NIB, dll. Bisa online, tidak perlu antri.
- **NIB (Nomor Induk Berusaha)** menggantikan banyak izin (TDP, SIUP, dll jadi satu).
- **Retribusi online** marak di kota besar via m-banking.
- **Notifikasi WhatsApp** untuk jatuh tempo retribusi (pasar, persampahan).
- **E-IMB** di beberapa kota (Jakarta, Surabaya) — pengajuan online, otomatis hitung retribusi.

## Tabel: Beda Pajak Pusat, Pajak Daerah, Retribusi Daerah

| Aspek | Pajak Pusat | Pajak Daerah | Retribusi Daerah |
|-------|-------------|--------------|------------------|
| Imbalan | Tidak ada | Tidak ada | Ada, langsung |
| Tujuan | APBN | APBD (PAD) | APBD (PAD) + biaya jasa |
| Contoh | PPh, PPN, Bea Materai | PBB-P2, BPHTB, Pajak Hotel | IMB, Paspor, Puskesmas |
| Sifat | Memaksa | Memaksa | Sukarela/wajib tergantung jenis |
| Dasar Hukum | UU PPh, UU PPN | UU HKPD 1/2022 + PERDA | UU HKPD 1/2022 + PERDA |
| Sanksi telat | MIR 0,6%/bln | 2%/bln (PERDA) | Tergantung PERDA |

## Retribusi yang Sering Keluar di Ujian

Topik yang sering diuji:

1. **Retribusi IMB** — biasanya kasus hitung 0,1-0,5% × biaya bangun.
2. **Retribusi Paspor** — sering disebut sebagai contoh retribusi pemerintah pusat.
3. **Retribusi Puskesmas/RSUD** — pelayanan kesehatan dasar.
4. **Retribusi Pasar** — penggunaan kios pasar.
5. **Retribusi Persampahan** — pengangkutan sampah.

## Hal yang Bikin Salah di Ujian

1. **Anggap parkir mall = retribusi**: padahal itu jasa swasta, kena Pajak Parkir.
2. **Anggap paspor = retribusi daerah**: padahal retribusi pemerintah pusat (Kemenlu).
3. **Lupa beda pajak vs retribusi**: pajak tanpa imbalan, retribusi ada imbalan.
4. **Anggap retribusi tidak wajib**: padahal beberapa wajib (IMB, izin tertentu).
5. **Salah jenis**: keliru masuk retribusi jasa umum vs izin vs pemanfaatan aset.

## Kasus Lengkap: PT ABC Buka Cabang Baru

PT ABC buka cabang baru di Surabaya. Yang harus dilakukan:

1. **Daftar NIB** lewat OSS (online) → gratis, dapat NIB
2. **Ambil IMB** untuk bangun kantor:
   - Biaya bangun: Rp 1M
   - Tarif Retribusi IMB Surabaya: 0,25%
   - Retribusi IMB = 0,25% × 1M = **Rp 2.500.000**
3. **Sewa kios tambahan** di pasar milik Pemda:
   - Tarif sewa: Rp 1jt/bulan
   - Retribusi pemanfaatan aset = Rp 1jt/bulan
4. **Izin gangguan (HO)**: Rp 200.000
5. **Pelayanan kebersihan** (sampah kantor): 5% dari tagihan air = Rp 50.000/bulan

**Total Retribusi Awal:** Rp 2,5jt + Rp 200rb = Rp 2.700.000
**Total Retribusi Bulanan:** Rp 1jt + Rp 50rb = Rp 1.050.000/bulan

## Sanksi 2026 Retribusi Daerah

| Pelanggaran | Sanksi (umum, PERDA) |
|-------------|---------------------|
| Telat bayar retribusi | Bunga 2%/bln (maks 24 bln) |
| Bangun tanpa IMB | Denda + bisa dibongkar paksa |
| Tidak daftar izin | Denda + tutup usaha |
| Salah lapor | Koreksi + denda |

> **Sanksi berat:** Bangun tanpa IMB → Pemda bisa perintahkan pembongkaran paksa + denda.

## Tabel: Update 2026 Retribusi Daerah

| Aspek | Status 2026 |
|-------|-------------|
| OSS-RBA | Live, terintegrasi untuk perizinan |
| NIB | Menggantikan TDP, SIUP, dll (gratis, satu NIB untuk semua) |
| E-IMB | Live di kota besar (Jakarta, Surabaya, Bandung) |
| Online payment | Marak via m-banking, e-wallet |
| Notifikasi WA | Aktif untuk jatuh tempo |
| Integrasi Coretax Daerah | Sebagian (NJOP untuk IMB & BPHTB) |

## Kesimpulan

Retribusi Daerah itu:

1. **Ada imbalan langsung** (beda dengan pajak).
2. **3 jenis**: Jasa Umum (Puskesmas, persampahan), Izin Tertentu (IMB, SIUP, HO), Pemanfaatan Aset (sewa kios pasar).
3. **Dasar hukum**: UU HKPD 1/2022 + PERDA masing-masing.
4. **Sumber PAD** Pemda.
5. **Sanksi**: sesuai PERDA, umumnya 2%/bln.

Kunci yang harus kamu inget:
- Retribusi = bayar langsung dapat jasa/izin (ada imbalan).
- Pajak = bayar tanpa imbalan langsung.
- 3 jenis: Jasa Umum, Perizinan, Pemanfaatan Aset.
- Paspor = retribusi pusat (Kemenlu), bukan daerah.
- IMB = retribusi daerah (dibayar sekali saat bangun).
- PBB = pajak daerah (dibayar tiap tahun).

Paham kan? Lanjut ke kasus hitung pajak daerah lengkap! 🎯
`,
      keyPoints: [
        "Retribusi Daerah = pungutan daerah sebagai pembayaran jasa atau pemberian izin tertentu oleh Pemda",
        "Bedanya dengan pajak: Retribusi ADA imbalan langsung yang dapat ditunjuk, pajak TIDAK",
        "3 jenis Retribusi: Jasa Umum, Perizinan Tertentu, Pemanfaatan Aset Daerah",
        "Retribusi Jasa Umum contoh: Puskesmas, RSUD, persampahan, pasar, pemakaman",
        "Retribusi Perizinan contoh: IMB (0,1-0,5% biaya bangun), SIUP, HO, Izin Gangguan",
        "Retribusi Pemanfaatan Aset contoh: sewa kios pasar, sewa gedung Pemda, sewa tanah daerah",
        "Paspor = retribusi pemerintah pusat (Kemenlu), bukan retribusi daerah",
        "OSS-RBA & NIB (sejak 2026 terintegrasi) menggantikan banyak izin (TDP, SIUP jadi satu NIB gratis)",
      ],
      quiz: [
        {
          id: "ch11-l02-q1",
          question: "Apa perbedaan utama pajak daerah dengan retribusi daerah?",
          options: [
            "Pajak daerah bayar ke pusat, retribusi ke daerah",
            "Pajak daerah tanpa imbalan langsung, retribusi ada imbalan langsung yang dapat ditunjuk",
            "Pajak daerah sukarela, retribusi wajib",
            "Pajak daerah lebih mahal dari retribusi",
          ],
          correctIndex: 1,
          explanation:
            "Ciri kunci: pajak = TANPA imbalan langsung (manfaat dirasakan lewat fasilitas umum). Retribusi = DENGAN imbalan langsung yang dapat ditunjuk (paspor, IMB, layanan kesehatan).",
          difficulty: "mudah",
        },
        {
          id: "ch11-l02-q2",
          question: "Berikut yang BUKAN termasuk 3 jenis Retribusi Daerah:",
          options: [
            "Retribusi Jasa Umum",
            "Retribusi Perizinan Tertentu",
            "Retribusi Pemanfaatan Aset Daerah",
            "Retribusi Pajak Penghasilan",
          ],
          correctIndex: 3,
          explanation:
            "3 jenis retribusi: Jasa Umum, Perizinan Tertentu, Pemanfaatan Aset Daerah. Tidak ada 'Retribusi Pajak Penghasilan' — PPh itu pajak pusat, bukan retribusi.",
          difficulty: "sedang",
        },
        {
          id: "ch11-l02-q3",
          question: "Bu Sinta bangun rumah biaya Rp 500jt. Tarif Retribusi IMB 0,2% dari biaya bangun. Berapa Retribusi IMB yang dibayar?",
          options: ["Rp 100.000", "Rp 1.000.000", "Rp 5.000.000", "Rp 50.000.000"],
          correctIndex: 1,
          explanation: "Retribusi IMB = 0,2% × 500jt = Rp 1.000.000. Dibayar sekali saat ambil IMB ke Pemda setempat.",
          difficulty: "sedang",
        },
        {
          id: "ch11-l02-q4",
          question: "Paspor yang dikeluarkan Kemenlu (pemerintah pusat) termasuk jenis pungutan:",
          options: [
            "Pajak Pusat",
            "Retribusi Daerah",
            "Retribusi Pemerintah Pusat",
            "Bukan pungutan (donasi)",
          ],
          correctIndex: 2,
          explanation:
            "Paspor = retribusi pemerintah pusat (Kemenlu). Konsepnya sama dengan retribusi daerah (ada imbalan langsung: paspor), tapi pungutnya pusat, bukan Pemda.",
          difficulty: "sulit",
        },
        {
          id: "ch11-l02-q5",
          question: "Berikut yang termasuk Retribusi Pemanfaatan Aset Daerah:",
          options: [
            "Bayar dokter di Puskesmas",
            "Ambil IMB",
            "Sewa kios di pasar milik Pemda",
            "Paspor baru",
          ],
          correctIndex: 2,
          explanation:
            "Sewa kios di pasar milik Pemda = Retribusi Pemanfaatan Aset Daerah. Puskesmas = Jasa Umum. IMB = Perizinan. Paspor = retribusi pusat.",
          difficulty: "sedang",
        },
      ],
      caseStudy: {
        title: "Kasus: Buka Cafe di Bandung — Semua Retribusi & Pajak Daerah",
        description:
          "Bu Dewi buka cafe di Bandung dengan langkah: (1) Sewa bangunan komersial Rp 15jt/bulan dari Pemda Bandung (Retribusi Pemanfaatan Aset); (2) Renovasi bangunan Rp 200jt (Retribusi IMB 0,25%); (3) Buka cafe dengan omzet Rp 80jt/bulan (Pajak Restoran 10%, PPN 11%); (4) Pasang papan nama cafe Rp 5jt (Pajak Reklame 20%). Hitung: (a) Retribusi awal; (b) Pajak daerah & PPN bulanan.",
        solution:
          "(a) Retribusi Awal:\n- Retribusi IMB: 0,25% × 200jt = Rp 500.000 (dibayar sekali saat renovasi)\n- Total Retribusi Awal: Rp 500.000\n\n(b) Retribusi & Pajak Bulanan:\n1. Retribusi Pemanfaatan Aset (sewa bangunan Pemda): Rp 15.000.000/bulan (sudah termasuk di harga sewa, atau ditambahkan tergantung struktur)\n2. Pajak Restoran: 10% × 80jt = Rp 8.000.000/bulan (ke Pemda Bandung)\n3. PPN efektif 11% × 80jt = Rp 8.800.000/bulan (ke DJP pusat)\n4. Pajak Reklame: 20% × 5jt = Rp 1.000.000 (jika dihitung bulanan dari nilai sewa reklame, atau per bulan tergantung struktur)\n   Catatan: kalau papan nama adalah investasi awal (bukan sewa bulanan), Pajak Reklame dihitung dari nilai produksi/penempatan Rp 5jt × 20% = Rp 1.000.000 sekali (atau per tahun, tergantung PERDA)\n\nTotal pajak daerah & PPN bulanan Bu Dewi = Rp 15jt + Rp 8jt + Rp 8,8jt + Rp 1jt = Rp 32.800.000/bulan\n\nPemda Bandung terima: 15jt (retribusi) + 8jt (Pajak Restoran) + 1jt (Pajak Reklame) = Rp 24.000.000/bulan\nDJP terima: Rp 8.800.000 (PPN)\n\nCatatan: Retribusi Pemanfaatan Aset (sewa bangunan Pemda) bisa juga dibayar per tahun (Rp 180jt) tergantung kontrak. Bu Dewi harus daftar NPWP Daerah Bandung untuk Pajak Restoran & Reklame. Retribusi dibayar saat ambil IMB & sewa bangunan. Untuk bulanan, Pajak Restoran & PPN setor tanggal 10 bulan berikutnya, lapor tanggal 20.",
      },
      tags: [
        "retribusi daerah",
        "jasa umum",
        "perizinan tertentu",
        "pemanfaatan aset daerah",
        "IMB",
        "paspor",
        "Puskesmas",
        "UU HKPD 1/2022",
        "OSS",
      ],
    },
    {
      id: "ch11-l03",
      slug: "kasus-pajak-daerah",
      title: "Kasus Hitung Pajak Daerah — Restoran, Mobil, Billboard",
      subtitle:
        "Contoh: restoran 10%, beli mobil baru BBN-KB 10% + PKB progresif, sewa billboard reklame 25%",
      type: "kasus",
      difficulty: "mahir",
      estimatedMinutes: 18,
      content: `# Kasus Hitung Pajak Daerah — Restoran, Mobil, Billboard 📊

Yuk, kita bahas kasus-kasus lengkap pajak daerah yang sering keluar di ujian Brevet AB. Fokus pada tiga skenario paling sering ditanyain: restoran, beli mobil baru, dan sewa billboard.

## Kasus 1: Buka Restoran di Surabaya

Bu Sinta buka restoran "Makan Enak" di Surabaya pada 1 Januari 2026. Data:

- Omzet Januari 2026: Rp 100.000.000 (sudah include PPN efektif 11%)
- Tarif Pajak Restoran Surabaya: 10%
- Tarif PPN efektif: 11%

### Hitung pajak yang muncul:

**1. Hitung DPP dan PPN dari omzet:**
- Omzet bruto: Rp 100jt (include PPN)
- DPP = 100jt ÷ 1,11 ≈ Rp 90,09jt (atau pakai 100jt × 11/12 = Rp 91,67jt dengan DPP Nilai Lain)
- Untuk simplifikasi, asumsi DPP = Rp 90.000.000, PPN = Rp 10.000.000 (gampang)

Hmm, biar gampang, mari pakai angka yang udah dipisah dari awal:
- Omzet (exclude PPN): Rp 100.000.000
- PPN 11% × 100jt = Rp 11.000.000
- Total ditagih ke pelanggan: Rp 111.000.000

**2. Pajak Restoran (Daerah Kab/Kota):**
- Tarif: 10% × omzet = 10% × 100jt = **Rp 10.000.000**
- Disetor ke Pemda Surabaya

**3. PPN (Pusat):**
- Tarif: 11% × omzet = 11% × 100jt = **Rp 11.000.000**
- Disetor ke DJP via Coretax

### Jurnal akuntansi Bu Sinta (Januari 2026):

**Saat terima pendapatan (asumsi tunai):**

| Akun | Debit | Kredit |
|------|------|--------|
| Kas | 111.000.000 | |
| Pendapatan Restoran | | 100.000.000 |
| Utang Pajak Restoran (Pemda) | | 10.000.000 |
| Utang PPN Keluaran (DJP) | | 11.000.000 |

**Saat setor Pajak Restoran ke Pemda Surabaya:**

| Akun | Debit | Kredit |
|------|------|--------|
| Utang Pajak Restoran | 10.000.000 | |
| Kas/Bank | | 10.000.000 |

**Saat setor PPN ke DJP (Coretax e-billing):**

| Akun | Debit | Kredit |
|------|------|--------|
| PPN Keluaran | 11.000.000 | |
| Kas/Bank | | 11.000.000 |

### Insight Penting:
> Restoran kena **DUA pajak**: Pajak Restoran (daerah) 10% + PPN (pusat) 11% = **21% dari omzet**. Jadi dari omzet Rp 100jt, total pajak = Rp 21jt. Lumayan besar ya!

## Kasus 2: Beli Mobil Baru di Jakarta

Pak Budi beli mobil baru Toyota senilai Rp 350.000.000 di Jakarta. Status: ini mobil pertama atas nama Pak Budi (sebelumnya cuma punya motor). Data:

- Harga mobil (DPP, exclude PPN): Rp 350.000.000
- PPN efektif 11%: Rp 38.500.000
- BBN-KB DKI Jakarta (mobil pertama): 10%
- PKB DKI Jakarta (kepemilikan pertama): 2% progresif
- NJKB (Nilai Jual Kendaraan Bermotor): Rp 350.000.000

### Hitung pajak yang muncul saat beli (Januari 2026):

**1. PPN (Pusat):**
- 11% × 350jt = **Rp 38.500.000** (include di harga mobil yang dibayar ke dealer)
- Disetor dealer ke DJP via Coretax

**2. BBN-KB (Daerah Provinsi DKI):**
- 10% × NJKB (350jt) = **Rp 35.000.000**
- Dibayar Pak Budi ke Pemda DKI saat daftar di Samsat

**3. PPnBM (Pusat, kalau mobil kategori tertentu):**
- Mobil biasa: 0% (sudah tidak kena PPnBM sejak 2010 untuk mobil di bawah 1500cc)
- Mobil mewah (>1500cc atau kategori mewah): 10-95% tergantung jenis
- Asumsi mobil biasa: PPnBM = Rp 0

### Hitung pajak tahunan (PKB, dibayar tiap tahun):

**4. PKB (Daerah Provinsi DKI) tahun 2026 (tahun pertama):**
- Kepemilikan ke-1: tarif 2%
- NJKB: Rp 350.000.000
- PKB = 2% × 350jt = **Rp 7.000.000/tahun**

**PKB tahun 2027 (kepemilikan ke-2, jika Pak Budi beli mobil lagi):**
- Tarif progresif 2,5%
- PKB = 2,5% × 350jt = Rp 8.750.000/tahun (naik)

**PKB tahun 2028 (kepemilikan ke-3):**
- Tarif 3%
- PKB = 3% × 350jt = Rp 10.500.000/tahun

### Total biaya Pak Budi saat beli mobil:

| Komponen | Jumlah |
|----------|--------|
| Harga mobil (DPP) | Rp 350.000.000 |
| PPN (pusat, include di harga) | Rp 38.500.000 |
| BBN-KB (daerah, dibayar di Samsat) | Rp 35.000.000 |
| Biaya STNK + Plat + BBN | ~Rp 1.000.000 |
| **Total bayar ke dealer + Samsat** | **Rp 425.500.000** |

### Jurnal akuntansi PT Budi Mobil (kalau perusahaan):

| Akun | Debit | Kredit |
|------|------|--------|
| Kendaraan (aset) | 350.000.000 | |
| PPN Masukan | 38.500.000 | |
| BBN-KB (biaya perolehan kendaraan) | 35.000.000 | |
| Beban Administrasi STNK | 1.000.000 | |
| Kas/Bank | | 424.500.000 |

**Catatan:** BBN-KB dimasukkan ke **biaya perolehan kendaraan** (capitalize ke aset), bukan beban operasional. PKB tahunan masuk ke beban.

### Jurnal saat bayar PKB tahunan (Desember 2026, untuk tahun 2027):

| Akun | Debit | Kredit |
|------|------|--------|
| Beban PKB | 7.000.000 | |
| Kas/Bank | | 7.000.000 |

### Insight Penting:
> Beli mobil Rp 350jt di Jakarta = total biaya ~Rp 425jt (~21,5% pajak + biaya). Itu belum termasuk PKB tahunan Rp 7jt/tahun. Jadi kalau beli mobil, sisihkan minimal 25% dari harga untuk pajak + biaya administrasi.

## Kasus 3: Sewa Billboard di Surabaya

PT ABC pasang billboard untuk iklan produk di Surabaya. Data:

- Nilai sewa billboard: Rp 50.000.000/bulan
- Tarif Pajak Reklame Surabaya: 25%
- PPN atas jasa reklame: 11%

### Hitung pajak yang muncul:

**1. Pajak Reklame (Daerah Kab/Kota):**
- 25% × 50jt = **Rp 12.500.000/bulan**
- Disetor PT ABC ke Pemda Surabaya

**2. PPN (Pusat):**
- 11% × 50jt = **Rp 5.500.000/bulan**
- Disetor PT ABC ke DJP (sebagai PPN Masukan yang akan dikreditkan dengan PPN Keluaran)

### Jurnal akuntansi PT ABC (Januari 2026):

**Saat terima invoice sewa billboard:**

| Akun | Debit | Kredit |
|------|------|--------|
| Beban Iklan/Reklame | 50.000.000 | |
| PPN Masukan | 5.500.000 | |
| Utang Pajak Reklame | | 12.500.000 |
| Utang Dagang (ke pemilik billboard) | | 43.000.000 |

**Saat bayar ke pemilik billboard:**

| Akun | Debit | Kredit |
|------|------|--------|
| Utang Dagang | 43.000.000 | |
| Kas/Bank | | 43.000.000 |

**Saat setor Pajak Reklame ke Pemda Surabaya:**

| Akun | Debit | Kredit |
|------|------|--------|
| Utang Pajak Reklame | 12.500.000 | |
| Kas/Bank | | 12.500.000 |

### Insight Penting:
> Pajak Reklame 25% itu TINGGI. Itu sebabnya banyak perusahaan yang pindah ke iklan digital (Google Ads, social media) yang nggak kena Pajak Reklame (tapi tetap kena PPN PMSE 11%).

## Kasus 4: Hotel dengan Banyak Layanan

PT Hotel Mewah punya hotel di Bali. Data Januari 2026:

- Pendapatan kamar: Rp 500jt
- Pendapatan restoran hotel: Rp 200jt
- Pendapatan laundry hotel: Rp 50jt
- Pendapatan spa (dalam hotel): Rp 100jt
- Tarif Pajak Hotel Bali: 10%
- Tarif Pajak Restoran Bali: 10% (untuk restoran di hotel)
- Tarif Pajak Hiburan Bali: 15% (untuk spa di hotel, termasuk kategori hiburan)
- Tarif PPN efektif: 11%

### Hitung pajak daerah yang muncul:

**1. Pajak Hotel (atas kamar):**
- 10% × 500jt = **Rp 50.000.000**

**2. Pajak Restoran (atas restoran hotel):**
- 10% × 200jt = **Rp 20.000.000**

**3. Pajak Hiburan (atas spa):**
- 15% × 100jt = **Rp 15.000.000**
- Spa di kategori "hiburan" (kalau sesuai PERDA Bali)

**4. Pajak Laundry?**
- Laundry dalam hotel → biasanya ikut Pajak Hotel (sebagai layanan hotel)
- Atau bisa juga tidak terkena pajak daerah khusus, tapi tetap kena PPN
- Asumsi: ikut Pajak Hotel = 10% × 50jt = Rp 5.000.000

**Total Pajak Daerah = 50 + 20 + 15 + 5 = Rp 90.000.000/bulan**

**5. PPN (Pusat) atas semua pendapatan:**
- 11% × (500 + 200 + 50 + 100)jt = 11% × 850jt = **Rp 93.500.000/bulan**

### Total pajak PT Hotel Mewah Januari 2026:
- Pajak Daerah: Rp 90jt
- PPN: Rp 93,5jt
- **Total: Rp 183,5jt/bulan** (~21,6% dari omzet)

> **Wow, hotel mewah kena pajak ~22%!** Itu sebabnya margin hotel harus tinggi untuk cover pajak.

## Kasus 5: Diskotik dengan Pajak Hiburan Tinggi

PT Nightlife buka diskotik di Jakarta. Data Januari 2026:

- Pendapatan tiket masuk: Rp 300jt
- Pendapatan F&B: Rp 100jt
- Tarif Pajak Hiburan Jakarta untuk diskotik: 40%
- Tarif Pajak Restoran Jakarta: 10% (untuk F&B)
- PPN efektif: 11%

### Hitung:
- **Pajak Hiburan (diskotik)**: 40% × 300jt = **Rp 120.000.000**
- **Pajak Restoran (F&B)**: 10% × 100jt = **Rp 10.000.000**
- **PPN**: 11% × 400jt = **Rp 44.000.000**

**Total pajak**: 120 + 10 + 44 = **Rp 174.000.000/bulan** (~43,5% dari omzet tiket masuk!)

> **Wow, diskotik kena pajak 40% atas tiket masuk!** Itu sebabnya tiket masuk diskotik mahal. Plus PPN 11%. Total pajak atas tiket masuk bisa 51%.

## Kasus 6: Parkir Mall — Bedakan!

Mall di Surabaya punya lahan parkir. Pendapatan parkir Rp 20jt/bulan. Tarif Pajak Parkir Surabaya: 10%. PPN atas jasa parkir: 11%.

### Hitung:
- **Pajak Parkir (Daerah)**: 10% × 20jt = **Rp 2.000.000**
- **PPN (Pusat)**: 11% × 20jt = **Rp 2.200.000**

**Total pajak atas pendapatan parkir**: 21% = Rp 4.200.000/bulan.

> **Bedanya dengan retribusi parkir:** Parkir mall = jasa swasta (mall yang operasi), kena Pajak Parkir (daerah) + PPN. Retribusi parkir = jika Pemda yang operasi parkir (jarang), itu retribusi jasa umum.

## Kasus 7: Penerangan Jalan (PUJ)

Rumah Pak Budi tagihan listrik PLN Rp 2jt/bulan. Tarif PUJ Jakarta: 3% dari biaya listrik.

### Hitung:
- **PUJ**: 3% × 2jt = **Rp 60.000/bulan**
- Otomatis include di tagihan PLN
- PLN setor ke Pemda DKI bulanan

### Struktur tagihan listrik Pak Budi:
- Biaya listrik (DPP): Rp 2.000.000
- PUJ (3%): Rp 60.000
- PPN (11% × DPP): Rp 220.000
- **Total tagihan**: Rp 2.280.000

> **Penting:** PUJ hanya kena konsumen listrik tertentu (umumnya > 6.600 VA untuk bisnis). Rumah tangga kecil sering tidak kena PUJ. Cek tagihan PLN apakah ada komponen PUJ.

## Tabel Ringkas: Pajak Daerah & Pajak Pusat per Bisnis

| Bisnis | Pajak Daerah | Pajak Pusat |
|--------|-------------|-------------|
| Restoran | Pajak Restoran 10% | PPN 11% |
| Hotel | Pajak Hotel 10% | PPN 11% |
| Hiburan (diskotik) | Pajak Hiburan 40-75% | PPN 11% |
| Reklame/billboard | Pajak Reklame 25% | PPN 11% |
| Parkir mall | Pajak Parkir 10% | PPN 11% |
| Beli mobil baru | BBN-KB 10% + PKB tahunan 2-10% | PPN 11% (PPnBM kalau mewah) |
| Beli tanah | BPHTB 5% + PBB tahunan 0,1-0,5% | PPh Final 2,5% |
| Sewa tanah & bangunan | (PBB) | PPh Final 4(3) 10% (tidak kena PPN) |
| Konstruksi | (PBB) | PPh Final 1,75-4% + PPN 11% |

## Update 2026 di Era Coretax Daerah

- **Coretax Daerah terpisah** dari Coretax DJP. Tiap pemda punya sistem sendiri.
- **Online payment** marak via m-banking, e-wallet di kota besar.
- **Pemutihan tunggakan** di beberapa daerah (Bangka Belitung PKB/BBN-KB sampai Okt 2026, Jatim ojol Agustus 2026).
- **OSS-RBA terintegrasi** untuk perizinan (IMB, SIUP, dll jadi NIB).
- **Notifikasi WhatsApp** untuk jatuh tempo pajak daerah.
- **SPPT elektronik** menggantikan SPPT fisik untuk PBB-P2.

## Strategi Hemat Pajak Daerah (Legal)

1. **Pisah lokasi usaha**: taruh cabang di daerah dengan tarif lebih rendah. Misal pabrik di Bekasi (PBB 0,2%) vs Jakarta (0,1%) — Jakarta lebih murah.
2. **Pisah jenis usaha**: pisah restoran dari hotel (kalau bisa), karena bisa dapat pajak terpisah (10% restoran + 10% hotel vs gabungan yang bisa lebih tinggi).
3. **Manfaatkan diskon dini**: banyak pemda kasih diskon 5-10% bayar PBB dini (sebelum Maret).
4. **Pakai iklan digital** alih-alih billboard (Pajak Reklame 25% → PPN PMSE 11% saja).
5. **Hindari mobil mewah** (kena PPnBM tinggi).
6. **Mobil listrik** — pemerintah siapkan insentif pajak di H2 2026.
7. **Pemutihan tunggakan** — kalau ada program, manfaatkan.

## Sanksi 2026 Pajak Daerah

| Pelanggaran | Sanksi (PERDA) |
|-------------|----------------|
| Telat setor pajak daerah | Bunga 2%/bln (maks 24 bln) |
| Tidak daftar objek pajak | Denda + wajib bayar |
| Salah lapor | Koreksi + denda |
| Manipulasi omzet | Denda + pidana |

> **Sanksi pajak daerah lebih tinggi** dari pajak pusat (2%/bln vs 0,6%/bln MIR). Jadi nggak telat setor pajak daerah bisa lebih mahal dari telat PPh!

## Tabel: Perbandingan Sanksi Pajak Pusat vs Daerah

| Pajak | Sanksi Telat Setor | Sanksi Telat Lapor |
|-------|--------------------|--------------------|
| PPh (Pusat) | 0,6%/bln (MIR) | Rp 100.000 - Rp 1.000.000 |
| PPN (Pusat) | 0,6%/bln (MIR) | Rp 500.000 |
| Pajak Daerah | 2%/bln (PERDA) | Rp 100.000 - Rp 1.000.000 |
| Bea Materai (PPP) | 0,6%/bln | Rp 100.000 |

## Kesimpulan

Kasus pajak daerah itu polanya tetap:

1. **Restoran/Hotel**: kena Pajak Daerah (10%) + PPN (11%) = 21% dari omzet.
2. **Beli mobil baru**: kena BBN-KB (10%) + PPN (11%) + PPnBM (kalau mewah). PKB tahunan progresif 2-10%.
3. **Billboard/reklame**: kena Pajak Reklame (25%) + PPN (11%) = 36% dari nilai sewa.
4. **Hiburan (diskotik)**: kena Pajak Hiburan (40-75%) + PPN (11%).
5. **Parkir mall**: kena Pajak Parkir (10%) + PPN (11%) = 21%.

Kunci yang harus kamu inget:
- Restoran, hotel, parkir → pajak 21% (10% daerah + 11% PPN).
- Billboard → pajak 36% (25% reklame + 11% PPN).
- Diskotik → pajak 51% atas tiket (40% hiburan + 11% PPN).
- Mobil baru → 21%+ pajak saat beli + PKB tahunan progresif.
- Sanksi pajak daerah PERDA (2%/bln) lebih tinggi dari MIR PPh (0,6%/bln).

Paham kan? Bab Pajak Daerah udah lengkap. Lanjut ke bab terakhir: Coretax 2026 & Update Pajak! 🚀
`,
      keyPoints: [
        "Restoran/Hotel kena DUA pajak: Pajak Daerah (10%) + PPN pusat (11%) = 21% dari omzet",
        "Beli mobil baru kena BBN-KB (10% ke Pemda) + PPN (11% ke DJP) + PPnBM kalau mewah",
        "PKB Jakarta progresif: 2% (mobil 1), 2,5% (mobil 2), 3% (mobil 3), 3,5-4% (mobil 4+)",
        "Billboard kena Pajak Reklame (25%) + PPN (11%) = 36% dari nilai sewa",
        "Diskotik kena Pajak Hiburan (40-75%) + PPN (11%) — total bisa 51%+ atas tiket masuk",
        "Parkir mall kena Pajak Parkir (10%) + PPN (11%) = 21% dari pendapatan parkir",
        "Hotel mewah dengan banyak layanan bisa kena multi pajak daerah (hotel + restoran + hiburan)",
        "Sanksi pajak daerah 2%/bln (PERDA) lebih tinggi dari MIR PPh 0,6%/bln — lebih mahal kalau telat",
      ],
      quiz: [
        {
          id: "ch11-l03-q1",
          question: "Restoran omzet Rp 100jt/bulan (Surabaya). Berapa total pajak yang muncul (Pajak Restoran 10%, PPN 11%)?",
          options: ["Rp 10.000.000", "Rp 11.000.000", "Rp 21.000.000", "Rp 100.000.000"],
          correctIndex: 2,
          explanation: "Pajak Restoran (daerah) 10% × 100jt = 10jt + PPN (pusat) 11% × 100jt = 11jt. Total = Rp 21jt/bulan.",
          difficulty: "sedang",
        },
        {
          id: "ch11-l03-q2",
          question: "Pak Budi beli mobil baru Rp 350jt di Jakarta (mobil pertama). Berapa BBN-KB yang dibayar?",
          options: ["Rp 3.500.000", "Rp 35.000.000", "Rp 38.500.000", "Rp 350.000.000"],
          correctIndex: 1,
          explanation: "BBN-KB = 10% × NJKB (350jt) = Rp 35.000.000. Dibayar sekali ke Pemda DKI. Belum termasuk PPN 11% (Rp 38,5jt) yang include di harga mobil.",
          difficulty: "sedang",
        },
        {
          id: "ch11-l03-q3",
          question: "PT ABC sewa billboard Rp 50jt/bulan di Surabaya (Pajak Reklame 25%, PPN 11%). Berapa total pajak yang muncul?",
          options: ["Rp 12.500.000", "Rp 5.500.000", "Rp 18.000.000", "Rp 50.000.000"],
          correctIndex: 2,
          explanation: "Pajak Reklame (daerah) 25% × 50jt = 12,5jt + PPN (pusat) 11% × 50jt = 5,5jt. Total = Rp 18.000.000/bulan.",
          difficulty: "sedang",
        },
        {
          id: "ch11-l03-q4",
          question: "PT Nightlife punya diskotik di Jakarta, omzet tiket masuk Rp 300jt. Tarif Pajak Hiburan 40%. Berapa Pajak Hiburan yang harus disetor?",
          options: ["Rp 30.000.000", "Rp 75.000.000", "Rp 120.000.000", "Rp 300.000.000"],
          correctIndex: 2,
          explanation: "Pajak Hiburan = 40% × 300jt = Rp 120.000.000/bulan. Tarif tinggi karena hiburan dianggap konsumsi mewah yang perlu dikontrol.",
          difficulty: "sedang",
        },
        {
          id: "ch11-l03-q5",
          question: "Sanksi keterlambatan setor Pajak Daerah vs PPh (pusat) di 2026:",
          options: [
            "Pajak Daerah 2%/bln (PERDA), lebih tinggi dari PPh 0,6%/bln (MIR)",
            "Pajak Daerah 0,6%/bln, sama dengan PPh",
            "Pajak Daerah tidak ada sanksi bunga, hanya denda tetap",
            "Pajak Daerah 5%/bln, jauh lebih tinggi dari PPh",
          ],
          correctIndex: 0,
          explanation:
            "Sanksi pajak daerah diatur PERDA masing-masing, umumnya 2%/bln (lebih tinggi dari MIR PPh 0,6%/bln Agustus 2026). Jadi nggak telat setor pajak daerah bisa lebih mahal!",
          difficulty: "sulit",
        },
      ],
      caseStudy: {
        title: "Kasus Komprehensif: Buka Hotel+Restoran+Spa di Bali",
        description:
          "PT Hotel Bali Mewah buka hotel di Bali dengan: (1) Pendapatan kamar Rp 500jt/bulan; (2) Pendapatan restoran Rp 200jt/bulan; (3) Pendapatan spa Rp 100jt/bulan. Tarif: Pajak Hotel 10%, Pajak Restoran 10%, Pajak Hiburan (spa) 15%, PPN 11%. Hitung total pajak yang harus disetor PT Hotel Bali Mewah per bulan, dan pisahkan mana ke Pemda Bali vs DJP.",
        solution:
          "(1) Pajak Hotel (Pendapatan kamar Rp 500jt):\n- Pajak Hotel (Pemda Bali) = 10% × 500jt = Rp 50.000.000\n- PPN (DJP) = 11% × 500jt = Rp 55.000.000\n\n(2) Pajak Restoran (Pendapatan restoran Rp 200jt):\n- Pajak Restoran (Pemda Bali) = 10% × 200jt = Rp 20.000.000\n- PPN (DJP) = 11% × 200jt = Rp 22.000.000\n\n(3) Pajak Hiburan (Spa Rp 100jt):\n- Pajak Hiburan (Pemda Bali) = 15% × 100jt = Rp 15.000.000\n- PPN (DJP) = 11% × 100jt = Rp 11.000.000\n\nTotal Pajak Daerah (ke Pemda Bali):\n50jt + 20jt + 15jt = Rp 85.000.000/bulan\n\nTotal Pajak Pusat (ke DJP via Coretax):\n55jt + 22jt + 11jt = Rp 88.000.000/bulan (PPN)\n\nTotal pajak PT Hotel Bali Mewah per bulan = 85 + 88 = Rp 173.000.000 (~20,4% dari total omzet 800jt)\n\nJurnal akuntansi (saat terima pendapatan):\nDr Kas                         888.000.000\n   Cr Pendapatan Kamar                 500.000.000\n   Cr Pendapatan Restoran              200.000.000\n   Cr Pendapatan Spa                   100.000.000\n   Cr Utang Pajak Hotel                50.000.000\n   Cr Utang Pajak Restoran             20.000.000\n   Cr Utang Pajak Hiburan              15.000.000\n   Cr Utang PPN Keluaran               88.000.000\n\nPT Hotel Bali Mewah harus daftar NPWP Pusat (DJP) untuk PPN + NPWP Daerah Bali untuk Pajak Hotel, Restoran, Hiburan. Setoran pajak daerah via Coretax Daerah Bali (SIM Pajak Bali), PPN via Coretax DJP e-billing. Deadline setor 10, lapor 20 bulan berikutnya.",
      },
      tags: [
        "kasus pajak daerah",
        "restoran",
        "beli mobil baru",
        "BBN-KB",
        "PKB progresif",
        "pajak reklame",
        "pajak hiburan",
        "hotel mewah",
      ],
    },
  ],
  exam: [
    {
      id: "ch11-e1",
      question: "UU HKPD 1/2022 mengatur tentang:",
      options: [
        "Hubungan Keuangan Pusat-Daerah (termasuk Pajak Daerah)",
        "Harmonisasi Peraturan Perpajakan (PPh, PPN)",
        "Ketentuan Umum Perpajakan (KUP)",
        "Bea Materai",
      ],
      correctIndex: 0,
      explanation: "UU 1/2022 (UU HKPD) = Hubungan Keuangan Pusat-Daerah. Mengatur pajak daerah, retribusi daerah, dana perimbangan, dll.",
      difficulty: "mudah",
    },
    {
      id: "ch11-e2",
      question: "Berikut yang BUKAN termasuk 5 pajak provinsi:",
      options: ["PKB", "BBN-KB", "Pajak Restoran", "PAP"],
      correctIndex: 2,
      explanation: "Pajak Restoran = pajak KABUPATEN/KOTA. 5 pajak provinsi: PKB, BBN-KB, BB-KB, PAP, PATRA.",
      difficulty: "sedang",
    },
    {
      id: "ch11-e3",
      question: "Tarif maksimal Pajak Restoran dan Pajak Hotel:",
      options: ["5%", "10%", "20%", "25%"],
      correctIndex: 1,
      explanation: "Tarif maksimal Pajak Restoran & Pajak Hotel = 10% (UU HKPD 1/2022).",
      difficulty: "mudah",
    },
    {
      id: "ch11-e4",
      question: "Restoran omzet Rp 100jt/bulan (Surabaya). Berapa total pajak (Pajak Restoran 10%, PPN 11%)?",
      options: ["Rp 10.000.000", "Rp 11.000.000", "Rp 21.000.000", "Rp 100.000.000"],
      correctIndex: 2,
      explanation: "Pajak Restoran (daerah) 10% × 100jt = 10jt + PPN (pusat) 11% × 100jt = 11jt. Total Rp 21jt/bulan.",
      difficulty: "sedang",
    },
    {
      id: "ch11-e5",
      question: "Pak Budi beli mobil baru Rp 500jt (mobil pertama). Berapa BBN-KB yang dibayar (tarif 10%)?",
      options: ["Rp 5.000.000", "Rp 50.000.000", "Rp 100.000.000", "Rp 500.000.000"],
      correctIndex: 1,
      explanation: "BBN-KB = 10% × NJKB (500jt) = Rp 50.000.000. Dibayar sekali ke Pemda Provinsi.",
      difficulty: "sedang",
    },
    {
      id: "ch11-e6",
      question: "Tarif Pajak Reklame maksimal:",
      options: ["10%", "15%", "20%", "25%"],
      correctIndex: 3,
      explanation: "Tarif maksimal Pajak Reklame = 25% (UU HKPD 1/2022). Tarif tinggi karena mengganggu estetika kota.",
      difficulty: "sedang",
    },
    {
      id: "ch11-e7",
      question: "Bedanya Retribusi Daerah dengan Pajak Daerah:",
      options: [
        "Retribusi ada imbalan langsung yang dapat ditunjuk, pajak tidak",
        "Retribusi bayar ke pusat, pajak ke daerah",
        "Retribusi sukarela, pajak wajib",
        "Retribusi lebih mahal dari pajak",
      ],
      correctIndex: 0,
      explanation: "Ciri kunci: Retribusi ADA imbalan langsung yang dapat ditunjuk (IMB, paspor, layanan kesehatan). Pajak TANPA imbalan langsung.",
      difficulty: "mudah",
    },
    {
      id: "ch11-e8",
      question: "Berikut yang BUKAN 3 jenis Retribusi Daerah:",
      options: [
        "Retribusi Jasa Umum",
        "Retribusi Perizinan Tertentu",
        "Retribusi Pemanfaatan Aset Daerah",
        "Retribusi Pajak Penghasilan",
      ],
      correctIndex: 3,
      explanation: "3 jenis retribusi: Jasa Umum, Perizinan Tertentu, Pemanfaatan Aset Daerah. Tidak ada 'Retribusi Pajak Penghasilan' — PPh itu pajak pusat.",
      difficulty: "sedang",
    },
    {
      id: "ch11-e9",
      question: "Sanksi telat setor Pajak Daerah vs PPh (pusat) di 2026:",
      options: [
        "Pajak Daerah 2%/bln (PERDA), lebih tinggi dari PPh 0,6%/bln (MIR)",
        "Sama, keduanya 0,6%/bln (MIR)",
        "Pajak Daerah 0,6%/bln, lebih rendah dari PPh 2%/bln",
        "Tidak ada sanksi bunga pajak daerah",
      ],
      correctIndex: 0,
      explanation: "Sanksi pajak daerah diatur PERDA, umumnya 2%/bln (lebih tinggi dari MIR PPh 0,6%/bln Agustus 2026).",
      difficulty: "sulit",
    },
    {
      id: "ch11-e10",
      question: "Diskotik omzet tiket masuk Rp 300jt/bulan (Jakarta). Tarif Pajak Hiburan 40%. Berapa Pajak Hiburan yang harus disetor?",
      options: ["Rp 30.000.000", "Rp 75.000.000", "Rp 120.000.000", "Rp 300.000.000"],
      correctIndex: 2,
      explanation: "Pajak Hiburan = 40% × 300jt = Rp 120.000.000/bulan. Tarif tinggi karena hiburan dianggap konsumsi mewah.",
      difficulty: "sedang",
    },
  ],
}
