import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="w-full h-screen flex flex-col">
            <h1 className="text-7xl font-bold mt-10">Reuse, Reduce, Recycle</h1>
            <div className="flex justify-end">
                <p className="text-sm max-w-lg mt-10">Kami percaya bahwa setiap sampah memiliki potensi untuk menjadi sesuatu yang bermanfaat. 
                Dengan mengurangi, menggunakan kembali, dan mendaur ulang, kita bersama-sama bisa menciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan.</p>
            </div>
            <div className="w-full h-full border flex items-center justify-between gap-5 mt-10">
                <div className="h-full w-[40%] border">
                    <div className="w-full h-full border">
                        <Button>Talk to us</Button>
                        <div className="w-full h-[60%] bg-green-500"></div>
                    </div>
                </div>
                <div className="h-full w-[60%] bg-green-500"></div>
            </div>
        </section>
    );
}