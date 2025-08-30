import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex flex-col px-8 py-5 sm:py-16">
            <h1 className="text-6xl md:text-7xl font-bold text-blue-500 leading-tight">Reuse, Reduce, Recycle</h1>

            <div className="flex justify-start md:justify-end">
                <p className="text-base md:text-lg max-w-lg mt-8 text-gray-600 leading-relaxed">
                Kami percaya bahwa setiap sampah memiliki potensi untuk menjadi sesuatu
                yang bermanfaat. Dengan mengurangi, menggunakan kembali, dan mendaur
                ulang, kita bersama-sama bisa menciptakan lingkungan yang lebih bersih,
                sehat, dan berkelanjutan.
                </p>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
                <div className="w-full md:w-[40%] flex flex-col gap-6">
                    <Link href="/">
                        <Button className="w-1/2 py-5 bg-transparent text-green-600 border border-green-400 rounded-tr-4xl text-lg hover:bg-green-50 transition cursor-pointer">
                            Hubungi Kami
                        </Button>
                    </Link>
                    <div className="w-full h-64 bg-[url('/hero-1.jpg')] bg-cover bg-center rounded-2xl shadow-md"></div>
                </div>

                <div className="w-full md:w-[60%] h-80 bg-[url('/hero-2.jpg')] bg-cover bg-center rounded-2xl shadow-md"></div>
            </div>
        </section>
    );
}