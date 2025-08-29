import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-4xl mt-14 text-center">
                {/* <p className="text-lg font-medium text-green-600 tracking-wide uppercase">Sampah Berkurang, Manfaat Bertambah</p> */}
                <div className="relative w-fit mx-auto mb-2 rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Sampah Berkurang, Manfaat Bertambah
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gray-900 leading-tight">Reuse, Reduce, Recycle <br /> untuk Kehidupan Lebih Baik</h1>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-5">Kami percaya bahwa setiap sampah memiliki potensi untuk menjadi sesuatu yang bermanfaat. 
                Dengan mengurangi, menggunakan kembali, dan mendaur ulang, kita bersama-sama bisa menciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan.</p>

                <Button className="mt-5">Pelajari Lebih Lanjut</Button>
            </div>
        </section>
    )
}