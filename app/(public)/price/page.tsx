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

const WASTE_PRICES = [
    { id: 1, category: "Plastik Botol PET", unit: "kg", price: 5000 },
    { id: 2, category: "Kardus / Karton", unit: "kg", price: 2500 },
    { id: 3, category: "Kertas Campur", unit: "kg", price: 1500 },
    { id: 4, category: "Kaleng / Aluminium", unit: "kg", price: 12000 },
    { id: 5, category: "Besi Rongsok", unit: "kg", price: 7000 },
    { id: 6, category: "Botol Kaca Bening", unit: "kg", price: 2000 },
    { id: 7, category: "Elektronik Bekas (E-waste)", unit: "unit", price: 30000 },
]

export default function PricePage() {
    return (
        <div className="w-full min-h-screen px-8 py-10 sm:py-16 bg-gray-50">
            <Card className="max-w-5xl mx-auto shadow-lg border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-green-600">Harga Sampah</CardTitle>
                    <p className="text-gray-600">Daftar harga jual sampah yang kami terima</p>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                        <TableRow className="bg-green-600/10">
                            <TableHead className="w-[80px] text-green-700 font-semibold">No</TableHead>
                            <TableHead className="text-green-700 font-semibold">Kategori</TableHead>
                            <TableHead className="text-green-700 font-semibold">Satuan</TableHead>
                            <TableHead className="text-right text-green-700 font-semibold">Harga</TableHead>
                        </TableRow>
                        </TableHeader>
                        <TableBody>
                        {WASTE_PRICES.map((item) => (
                            <TableRow key={item.id} className="hover:bg-green-50 transition">
                            <TableCell className="font-medium">{item.id}</TableCell>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.unit}</TableCell>
                            <TableCell className="text-right font-semibold text-green-600">
                                Rp {item.price.toLocaleString("id-ID")}
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
