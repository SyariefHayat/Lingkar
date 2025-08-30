"use client"

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const EDUCATIONS = [
    {
        id: 1,
        title: "Daur Ulang Plastik dengan Benar",
        description: "Pelajari cara memilah dan mendaur ulang plastik agar tidak mencemari lingkungan.",
        category: "Daur Ulang",
    },
    {
        id: 2,
        title: "Bank Sampah: Apa dan Bagaimana?",
        description: "Kenali konsep bank sampah serta bagaimana cara kamu bisa ikut berpartisipasi.",
        category: "Bank Sampah",
    },
    {
        id: 3,
        title: "Kompos dari Sampah Organik",
        description: "Panduan sederhana membuat kompos dari sampah dapur rumah tangga.",
        category: "Organik",
    },
    {
        id: 4,
        title: "Zero Waste Lifestyle",
        description: "Tips gaya hidup minim sampah untuk pemula.",
        category: "Zero Waste",
    },
]

export default function EducationPage() {
    return (
        <div className="w-full min-h-screen px-8 py-10 sm:py-16 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {EDUCATIONS.map((edu) => (
                    <Card key={edu.id} className="shadow-md hover:shadow-lg transition rounded-2xl border border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-green-700">{edu.title}</CardTitle>
                            <Badge className="w-fit bg-green-100 text-green-700 hover:bg-green-200">{edu.category}</Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">{edu.description}</p>
                            <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                                Baca Selengkapnya
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}