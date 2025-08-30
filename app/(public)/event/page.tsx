"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// contoh data event
const EVENTS = [
  {
    id: 1,
    title: "Aksi Bersih Sungai Ciliwung",
    description: "Bersama relawan, kita membersihkan area sungai dari sampah plastik dan organik.",
    category: "Aksi Sosial",
    date: "12 September 2025",
    location: "Jakarta",
  },
  {
    id: 2,
    title: "Workshop Daur Ulang Plastik",
    description: "Belajar mengolah plastik menjadi produk kreatif bernilai ekonomi.",
    category: "Workshop",
    date: "20 September 2025",
    location: "Bandung",
  },
  {
    id: 3,
    title: "Seminar Zero Waste Lifestyle",
    description: "Edukasi gaya hidup minim sampah bersama narasumber inspiratif.",
    category: "Seminar",
    date: "5 Oktober 2025",
    location: "Surabaya",
  },
]

export default function EventPage() {
    return (
        <div className="w-full min-h-screen px-8 py-10 sm:py-16 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {EVENTS.map((event) => (
                    <Card
                        key={event.id}
                        className="shadow-md hover:shadow-lg transition rounded-2xl border border-gray-200"
                    >
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-green-700">
                                {event.title}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <Badge className="w-fit bg-green-100 text-green-700 hover:bg-green-200">
                                {event.category}
                                </Badge>
                                <Badge variant="outline" className="w-fit border-green-300 text-gray-700">
                                {event.date}
                                </Badge>
                                <Badge variant="secondary" className="w-fit">
                                {event.location}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {event.description}
                            </p>
                            <Button
                                variant="outline"
                                className="w-full border-green-600 text-green-600 hover:bg-green-50"
                            >
                                Baca Selengkapnya
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}