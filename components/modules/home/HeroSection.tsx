import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex flex-col px-8 py-16">
            <div className="space-y-2">
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
                Reuse,
                </h1>
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
                Reduce,
                </h1>
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
                Recycle
                </h1>
            </div>

            <div className="flex justify-end">
                <p className="text-base md:text-lg max-w-lg mt-8 text-gray-600 leading-relaxed">
                Kami percaya bahwa setiap sampah memiliki potensi untuk menjadi sesuatu
                yang bermanfaat. Dengan mengurangi, menggunakan kembali, dan mendaur
                ulang, kita bersama-sama bisa menciptakan lingkungan yang lebih bersih,
                sehat, dan berkelanjutan.
                </p>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
                <div className="w-full md:w-[40%] flex flex-col gap-6">
                    <Button className="w-1/2 py-5 bg-transparent text-green-600 border border-green-400 rounded-xl text-lg hover:bg-green-50 transition">
                        Talk to us
                    </Button>
                    <div className="w-full h-64 bg-green-500 rounded-2xl shadow-md"></div>
                </div>

                <div className="w-full md:w-[60%] h-80 bg-green-500 rounded-2xl shadow-md"></div>
            </div>
        </section>
    );
}