import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
    return (
        <section className="w-full px-8 py-5 sm:py-16 flex flex-col items-center justify-center sm:text-center gap-5">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-green-500 font-semibold">
                Saatnya Bertindak untuk Bumi Kita
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 leading-relaxed tracking-tight">
                Sampah yang tidak dikelola dengan baik kembali pada kita
                dalam bentuk pencemaran air, udara, dan tanah. 
                Mari ubah <span className="text-blue-500">masalah</span> ini menjadi <span className="text-blue-500">peluang</span> untuk menjaga bumi 
                dan generasi mendatang.
            </h2>

            <Link href="/signup">
                <Button className="text-lg p-6 cursor-pointer bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors">Mulai Kelola Sampahmu</Button>
            </Link>
        </section>
    )
}