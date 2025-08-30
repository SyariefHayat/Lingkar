"use client"

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"

import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"

const PARTNERS = [
    { id: 1, name: "Bank Sampah Hijau Lestari", type: "Bank Sampah", location: "Jakarta", contact: "0812-3456-7890" },
    { id: 2, name: "CV Daur Ulang Mandiri", type: "Pengepul", location: "Bandung", contact: "0813-9876-1234" },
    { id: 3, name: "PT EcoRecycle Nusantara", type: "Perusahaan", location: "Surabaya", contact: "0811-5566-7788" },
    { id: 4, name: "Komunitas Peduli Sampah", type: "Komunitas", location: "Yogyakarta", contact: "0812-1122-3344" },
    { id: 5, name: "UMKM Kreatif Plastik", type: "UMKM", location: "Medan", contact: "0821-3344-5566" },
]

export default function MitraPage() {
    return (
        <div className="w-full min-h-screen px-8 py-10 sm:py-16 bg-white">
            <Card className="max-w-6xl mx-auto shadow-md border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-blue-600">Jaringan Mitra</CardTitle>
                    <p className="text-gray-600">Daftar mitra yang bekerja sama dengan kami</p>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-blue-600/10">
                                <TableHead className="w-[60px] text-blue-700 font-semibold">No</TableHead>
                                <TableHead className="text-blue-700 font-semibold">Nama Mitra</TableHead>
                                <TableHead className="text-blue-700 font-semibold">Tipe</TableHead>
                                <TableHead className="text-blue-700 font-semibold">Lokasi</TableHead>
                                <TableHead className="text-blue-700 font-semibold">Kontak</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {PARTNERS.map((mitra, idx) => (
                                <TableRow
                                    key={mitra.id}
                                    className={idx % 2 === 0 ? "bg-gray-50 hover:bg-blue-50" : "hover:bg-blue-50"}
                                >
                                    <TableCell className="font-medium">{mitra.id}</TableCell>
                                    <TableCell className="font-semibold text-gray-900">{mitra.name}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="text-blue-600 border-blue-300">
                                        {mitra.type}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{mitra.location}</TableCell>
                                    <TableCell className="text-sm text-gray-700">{mitra.contact}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}