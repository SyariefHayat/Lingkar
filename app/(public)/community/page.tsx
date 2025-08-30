"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MapPin, Phone } from "lucide-react"

const COMMUNITIES = [
  {
    id: 1,
    name: "Komunitas Hijau Nusantara",
    description: "Komunitas peduli lingkungan dengan fokus pada edukasi dan aksi bersih-bersih.",
    location: "Jakarta",
    members: 150,
    contact: "0812-9999-1111",
  },
  {
    id: 2,
    name: "Eco Warrior Bandung",
    description: "Anak muda kreatif Bandung yang mengolah sampah plastik jadi kerajinan.",
    location: "Bandung",
    members: 95,
    contact: "0813-8888-2222",
  },
  {
    id: 3,
    name: "Sahabat Alam Yogyakarta",
    description: "Komunitas relawan peduli sampah sungai dan reboisasi hutan.",
    location: "Yogyakarta",
    members: 200,
    contact: "0821-7777-3333",
  },
  {
    id: 4,
    name: "Green Future Surabaya",
    description: "Komunitas fokus daur ulang elektronik dan kampanye zero waste.",
    location: "Surabaya",
    members: 120,
    contact: "0811-6666-4444",
  },
]

export default function CommunityPage() {
  return (
    <div className="w-full min-h-screen px-8 py-10 sm:py-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COMMUNITIES.map((com) => (
          <Card key={com.id} className="shadow-md hover:shadow-lg transition rounded-2xl border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-green-700">{com.name}</CardTitle>
              <p className="text-sm text-gray-600">{com.description}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-gray-700">
                <MapPin className="w-4 h-4 mr-2 text-green-600" />
                <span>{com.location}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="w-4 h-4 mr-2 text-green-600" />
                <span>{com.members} anggota</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-4 h-4 mr-2 text-green-600" />
                <span>{com.contact}</span>
              </div>
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                Bergabung
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
