"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calculator, TrendingUp, Receipt, Building2 } from "lucide-react"
import { toast } from "sonner"

const PTKP_TABLE = [
  { code: "TK/0", desc: "Tidak kawin, tanpa tanggungan", amount: 54000000 },
  { code: "TK/1", desc: "Tidak kawin, 1 tanggungan", amount: 58500000 },
  { code: "TK/2", desc: "Tidak kawin, 2 tanggungan", amount: 63000000 },
  { code: "TK/3", desc: "Tidak kawin, 3 tanggungan", amount: 67500000 },
  { code: "K/0", desc: "Kawin, tanpa tanggungan", amount: 58500000 },
  { code: "K/1", desc: "Kawin, 1 tanggungan", amount: 63000000 },
  { code: "K/2", desc: "Kawin, 2 tanggungan", amount: 67500000 },
  { code: "K/3", desc: "Kawin, 3 tanggungan", amount: 72000000 },
]

const PPH_OP_TARIFF_2026 = [
  { upTo: 60000000, rate: 0.05 },
  { upTo: 250000000, rate: 0.15 },
  { upTo: 500000000, rate: 0.25 },
  { upTo: 5000000000, rate: 0.30 },
  { upTo: Infinity, rate: 0.35 },
]

function formatRupiah(num: number): string {
  if (!isFinite(num) || isNaN(num)) return "Rp 0"
  return "Rp " + Math.round(num).toLocaleString("id-ID")
}

function parseRupiah(str: string): number {
  return Number(str.replace(/[^0-9]/g, "")) || 0
}

// PPh OP calculator
function PPhOPCalculator() {
  const [grossMonthly, setGrossMonthly] = useState("10000000")
  const [ptkpCode, setPtkpCode] = useState("TK/0")
  const [pensionContribution, setPensionContribution] = useState("0")
  const [result, setResult] = useState<null | {
    biayaJabatan: number
    pension: number
    netoMonthly: number
    netoAnnual: number
    ptkp: number
    pkp: number
    pphAnnual: number
    pphMonthly: number
    takeHomeMonthly: number
  }>(null)

  const calculate = () => {
    const gross = parseRupiah(grossMonthly)
    const pension = parseRupiah(pensionContribution)
    const ptkp = PTKP_TABLE.find((p) => p.code === ptkpCode)?.amount || 54000000

    const biayaJabatan = Math.min(gross * 0.05, 500000)
    const netoMonthly = gross - biayaJabatan - pension
    const netoAnnual = netoMonthly * 12
    const pkp = Math.max(0, netoAnnual - ptkp)

    // Calculate progressive tax
    let pphAnnual = 0
    let remaining = pkp
    let prevLimit = 0
    for (const layer of PPH_OP_TARIFF_2026) {
      if (remaining <= 0) break
      const layerAmount = Math.min(remaining, layer.upTo - prevLimit)
      pphAnnual += layerAmount * layer.rate
      remaining -= layerAmount
      prevLimit = layer.upTo
    }

    const pphMonthly = pphAnnual / 12
    const takeHomeMonthly = gross - pension - pphMonthly

    setResult({
      biayaJabatan,
      pension,
      netoMonthly,
      netoAnnual,
      ptkp,
      pkp,
      pphAnnual,
      pphMonthly,
      takeHomeMonthly,
    })
    toast.success("PPh 21 berhasil dihitung!")
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label>Gaji Bruto Bulanan</Label>
          <Input
            type="text"
            value={grossMonthly}
            onChange={(e) => setGrossMonthly(e.target.value)}
            placeholder="10000000"
          />
        </div>
        <div className="space-y-1.5">
          <Label>Status PTKP</Label>
          <Select value={ptkpCode} onValueChange={setPtkpCode}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PTKP_TABLE.map((p) => (
                <SelectItem key={p.code} value={p.code}>
                  {p.code} - {p.desc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Iuran Pensiun Bulanan</Label>
          <Input
            type="text"
            value={pensionContribution}
            onChange={(e) => setPensionContribution(e.target.value)}
            placeholder="0"
          />
        </div>
      </div>

      <Button onClick={calculate} className="w-full">
        <Calculator className="h-4 w-4 mr-2" />
        Hitung PPh 21
      </Button>

      {result && (
        <Card className="bg-primary/5 border-primary/30">
          <CardContent className="p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Biaya Jabatan (5%, max 500rb/bln)</span>
              <span className="font-medium">{formatRupiah(result.biayaJabatan)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Penghasilan Neto / Bulan</span>
              <span className="font-medium">{formatRupiah(result.netoMonthly)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Penghasilan Neto / Tahun</span>
              <span className="font-medium">{formatRupiah(result.netoAnnual)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">PTKP ({ptkpCode})</span>
              <span className="font-medium">{formatRupiah(result.ptkp)}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-muted-foreground">PKP (Penghasilan Kena Pajak)</span>
              <span className="font-bold">{formatRupiah(result.pkp)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">PPh 21 Setahun</span>
              <span className="font-medium text-primary">{formatRupiah(result.pphAnnual)}</span>
            </div>
            <div className="flex justify-between border-t pt-2 bg-primary/10 -mx-4 -mb-4 px-4 py-3 rounded-b-lg">
              <span className="font-semibold">PPh 21 / Bulan</span>
              <span className="font-bold text-primary text-lg">{formatRupiah(result.pphMonthly)}</span>
            </div>
            <div className="flex justify-between text-xs pt-1">
              <span className="text-muted-foreground">Take Home Pay / Bulan</span>
              <span className="font-semibold text-emerald-600">{formatRupiah(result.takeHomeMonthly)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// PPh Badan calculator
function PPhBadanCalculator() {
  const [labaFiskal, setLabaFiskal] = useState("500000000")
  const [result, setResult] = useState<null | { pph: number; labaBersih: number }>(null)

  const calculate = () => {
    const laba = parseRupiah(labaFiskal)
    const pph = laba * 0.22
    setResult({ pph, labaBersih: laba - pph })
    toast.success("PPh Badan berhasil dihitung!")
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Label>Laba Fiskal (Setahun)</Label>
        <Input
          type="text"
          value={labaFiskal}
          onChange={(e) => setLabaFiskal(e.target.value)}
          placeholder="500000000"
        />
        <p className="text-xs text-muted-foreground">
          Laba setelah rekonsiliasi fiskal (koreksi positive & negative)
        </p>
      </div>

      <Button onClick={calculate} className="w-full">
        <Calculator className="h-4 w-4 mr-2" />
        Hitung PPh Badan (22%)
      </Button>

      {result && (
        <Card className="bg-primary/5 border-primary/30">
          <CardContent className="p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Laba Fiskal</span>
              <span className="font-medium">{formatRupiah(parseRupiah(labaFiskal))}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tarif PPh Badan</span>
              <span className="font-medium">22%</span>
            </div>
            <div className="flex justify-between border-t pt-2 bg-primary/10 -mx-4 -mb-4 px-4 py-3 rounded-b-lg">
              <span className="font-semibold">PPh Badan Terutang</span>
              <span className="font-bold text-primary text-lg">{formatRupiah(result.pph)}</span>
            </div>
            <div className="flex justify-between text-xs pt-1">
              <span className="text-muted-foreground">Laba Bersih (Net Profit)</span>
              <span className="font-semibold text-emerald-600">{formatRupiah(result.labaBersih)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// PPN calculator
function PPNCalculator() {
  const [dpp, setDpp] = useState("100000000")
  const [jenis, setJenis] = useState("umum")
  const [result, setResult] = useState<null | { ppn: number; total: number; rate: number }>(null)

  const calculate = () => {
    const dppNum = parseRupiah(dpp)
    const rate = jenis === "umum" ? 0.11 : 0.12 // 11% efektif for umum, 12% for mewah
    const ppn = dppNum * rate
    setResult({ ppn, total: dppNum + ppn, rate: rate * 100 })
    toast.success("PPN berhasil dihitung!")
  }

  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <Label>DPP (Dasar Pengenaan Pajak)</Label>
        <Input
          type="text"
          value={dpp}
          onChange={(e) => setDpp(e.target.value)}
          placeholder="100000000"
        />
      </div>
      <div className="space-y-1.5">
        <Label>Jenis Barang/Jasa</Label>
        <Select value={jenis} onValueChange={setJenis}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="umum">Barang/Jasa Umum (11% efektif)</SelectItem>
            <SelectItem value="mewah">Barang Mewah (12%)</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground">
          Update 2026: Tarif PPN 12%, tapi pemerintah pakai DPP Nilai Lain 11/12 jadi efektif 11% untuk barang umum
        </p>
      </div>

      <Button onClick={calculate} className="w-full">
        <Calculator className="h-4 w-4 mr-2" />
        Hitung PPN
      </Button>

      {result && (
        <Card className="bg-primary/5 border-primary/30">
          <CardContent className="p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">DPP</span>
              <span className="font-medium">{formatRupiah(parseRupiah(dpp))}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tarif PPN</span>
              <span className="font-medium">{result.rate}%</span>
            </div>
            <div className="flex justify-between border-t pt-2 bg-primary/10 -mx-4 -mb-4 px-4 py-3 rounded-b-lg">
              <span className="font-semibold">PPN Terutang</span>
              <span className="font-bold text-primary text-lg">{formatRupiah(result.ppn)}</span>
            </div>
            <div className="flex justify-between text-xs pt-1">
              <span className="text-muted-foreground">Total (DPP + PPN)</span>
              <span className="font-semibold text-emerald-600">{formatRupiah(result.total)}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// PTKP reference table
function PTKPTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Tabel PTKP 2026</CardTitle>
        <CardDescription>Penghasilan Tidak Kena Pajak</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-2 font-semibold">Kode</th>
                <th className="text-left p-2 font-semibold">Keterangan</th>
                <th className="text-right p-2 font-semibold">PTKP/Setahun</th>
              </tr>
            </thead>
            <tbody>
              {PTKP_TABLE.map((p, i) => (
                <tr key={p.code} className={i % 2 ? "bg-muted/50" : ""}>
                  <td className="p-2 font-mono font-semibold">{p.code}</td>
                  <td className="p-2 text-muted-foreground">{p.desc}</td>
                  <td className="p-2 text-right font-semibold">{formatRupiah(p.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

export function ToolsView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">🧮 Tools Hitung Pajak</h1>
        <p className="text-muted-foreground">
          Kalkulator pajak praktis buat simulasi dan verifikasi hitungan kamu.
        </p>
      </div>

      <Tabs defaultValue="pph21" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
          <TabsTrigger value="pph21" className="gap-1.5">
            <TrendingUp className="h-4 w-4" />
            PPh 21
          </TabsTrigger>
          <TabsTrigger value="ppn" className="gap-1.5">
            <Receipt className="h-4 w-4" />
            PPN
          </TabsTrigger>
          <TabsTrigger value="pphbadan" className="gap-1.5">
            <Building2 className="h-4 w-4" />
            PPh Badan
          </TabsTrigger>
          <TabsTrigger value="ptkp" className="gap-1.5">
            <Calculator className="h-4 w-4" />
            Tabel PTKP
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pph21" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Kalkulator PPh 21 (Pegawai Tetap)
              </CardTitle>
              <CardDescription>
                Hitung PPh Pasal 21 bulanan untuk pegawai tetap, update tarif & biaya jabatan 2026
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PPhOPCalculator />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ppn" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-primary" />
                Kalkulator PPN 2026
              </CardTitle>
              <CardDescription>
                Hitung Pajak Pertambahan Nilai dengan tarif terbaru 2026 (11% efektif / 12% barang mewah)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PPNCalculator />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pphbadan" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Kalkulator PPh Badan
              </CardTitle>
              <CardDescription>
                Hitung PPh Badan dengan tarif 22% (UU HPP 2026)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PPhBadanCalculator />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ptkp" className="mt-4">
          <PTKPTable />
        </TabsContent>
      </Tabs>

      <Card className="bg-muted/30">
        <CardContent className="p-4 text-sm text-muted-foreground">
          <p className="font-semibold mb-1">📋 Catatan:</p>
          <ul className="space-y-1 list-disc pl-5">
            <li>Biaya jabatan 2026: 5% dari bruto, maksimal Rp 500.000/bulan (Rp 6.000.000/tahun)</li>
            <li>Tarif PPh OP progresif 5 lapis: 5% / 15% / 25% / 30% / 35%</li>
            <li>PPN efektif 11% (via DPP Nilai Lain 11/12) untuk barang umum sejak 1 Jan 2025</li>
            <li>Tarif PPh Badan 22% (19% untuk go-public ≥40% saham, 11% untuk badan kecil)</li>
            <li>Untuk perhitungan formal, gunakan Coretax atau konsultasi dengan konsultan pajak resmi</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
