import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mt-16 sm:mt-20 text-center">
                <div className="relative w-fit mx-auto mb-3 rounded-full px-4 py-1 text-xs sm:text-sm ring-1 ring-gray-300 hover:ring-gray-500 transition">
                    Sampah Berkurang, Manfaat Bertambah
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Reuse, Reduce, Recycle <br className="hidden sm:block" /> 
                    untuk Kehidupan Lebih Baik
                </h1>

                <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto text-gray-600">
                    Kami percaya bahwa setiap sampah memiliki potensi untuk menjadi sesuatu yang bermanfaat. 
                    Dengan mengurangi, menggunakan kembali, dan mendaur ulang, kita bersama-sama bisa menciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan.
                </p>

                <Button className="mt-6 w-auto sm:w-auto text-sm sm:text-base px-6 py-3 rounded-xl shadow-md">
                    Pelajari Lebih Lanjut
                </Button>
            </div>
        </section>
    )
}