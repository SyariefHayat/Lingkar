import EachUtils from "@/utils/EachUtils";
import { LIST_VALUE } from "@/constants/listValue";

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen">
            <div className="flex flex-col px-8 py-10 sm:py-16">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Tentang Kami
                </h1>

                <div className="flex justify-start md:justify-end">
                    <p className="text-base md:text-lg max-w-xl mt-6 text-gray-600 leading-relaxed">
                        Kami adalah platform pengelolaan sampah berbasis teknologi yang hadir
                        untuk memberikan solusi nyata bagi masyarakat, bisnis, dan pemerintah
                        dalam mewujudkan lingkungan yang lebih bersih dan berkelanjutan.
                        Dengan menghubungkan berbagai pihak dalam ekosistem persampahan,
                        kami percaya bahwa sampah bukan akhir, melainkan awal dari manfaat baru.
                    </p>
                </div>
            </div>

            <div className="w-full bg-green-600 px-8 py-10 sm:py-16">
                <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="md:text-left text-white">
                        <h3 className="text-2xl md:text-3xl font-semibold">MISI KAMI</h3>
                        <p className="text-base md:text-lg leading-relaxed">Mengakhiri masalah sampah</p>
                    </div>

                    <div className="text-white text-base md:text-lg leading-relaxed space-y-6 max-w-xl">
                        <p>Kami hadir dengan misi untuk mengakhiri masalah sampah. Kami membantu masyarakat, komunitas, dan mitra menemukan nilai ekonomi dari sampah mereka, sekaligus mendukung tercapainya tujuan keberlanjutan.</p>

                        <p>Bagi kami, sampah bukan hanya soal limbah fisik yang dihasilkan setiap hari. Sampah juga berarti waktu yang terbuang, biaya yang tidak efisien, dan energi yang hilang percuma.</p>

                        <p>Tujuan kami sederhana namun besar: membangun sistem yang lebih efisien, berdaya guna, dan membawa manfaat nyata bagi lingkungan serta kehidupan masyarakat.</p>
                    </div>
                </div>
            </div>

            <div className="w-full min-h-screen px-8 py-10 sm:py-16">
                <h3 className="text-2xl md:text-3xl font-semibold text-green-600 border-b pb-5">NILAI KAMI</h3>

                <div className="grid grid-cols-1">
                    <EachUtils
                        of={LIST_VALUE}
                        render={(item, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6 py-6 border-b"
                            >
                                <p className="text-green-600 font-bold w-8 md:w-auto text-left md:text-center">{item.id}</p>

                                <h3 className="text-lg font-medium text-gray-900 md:basis-1/3">{item.title}</h3>

                                <p className="text-gray-600 leading-relaxed md:basis-2/3">{item.description}</p>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
