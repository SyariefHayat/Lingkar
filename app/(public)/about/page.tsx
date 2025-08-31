import EachUtils from "@/utils/EachUtils";
import { LIST_VALUE } from "@/constants/listValue";

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen">
            <section className="flex flex-col px-8 py-10 sm:py-16">
                <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
                Tentang Kami
                </h1>

                <div className="flex justify-start md:justify-end">
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                        Kami adalah platform pengelolaan sampah berbasis teknologi yang hadir
                        untuk memberikan solusi nyata bagi masyarakat, bisnis, dan pemerintah
                        dalam mewujudkan lingkungan yang lebih bersih dan berkelanjutan.
                        Dengan menghubungkan berbagai pihak dalam ekosistem persampahan,
                        kami percaya bahwa sampah bukan akhir, melainkan awal dari manfaat baru.
                    </p>
                </div>
            </section>

            <section className="w-full bg-green-600 px-8 py-10 sm:py-16">
                <div className="flex w-full flex-col items-start justify-between gap-10 md:flex-row">
                    <div className="text-white md:text-left">
                        <h2 className="text-2xl font-semibold md:text-3xl">MISI KAMI</h2>
                        <p className="text-base leading-relaxed md:text-lg">
                        Mengakhiri masalah sampah
                        </p>
                    </div>

                    <div className="max-w-xl space-y-6 text-base leading-relaxed text-white md:text-lg">
                        <p>
                        Kami hadir dengan misi untuk mengakhiri masalah sampah. Kami membantu 
                        masyarakat, komunitas, dan mitra menemukan nilai ekonomi dari sampah 
                        mereka, sekaligus mendukung tercapainya tujuan keberlanjutan.
                        </p>

                        <p>
                        Bagi kami, sampah bukan hanya soal limbah fisik yang dihasilkan setiap 
                        hari. Sampah juga berarti waktu yang terbuang, biaya yang tidak efisien, 
                        dan energi yang hilang percuma.
                        </p>

                        <p>
                        Tujuan kami sederhana namun besar: membangun sistem yang lebih efisien, 
                        berdaya guna, dan membawa manfaat nyata bagi lingkungan serta kehidupan 
                        masyarakat.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full min-h-screen px-8 py-10 sm:py-16">
                <h2 className="border-b pb-5 text-2xl font-semibold text-green-600 md:text-3xl">
                NILAI KAMI
                </h2>

                <div className="grid grid-cols-1">
                    <EachUtils
                        of={LIST_VALUE}
                        render={(item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between gap-4 border-b py-6 md:flex-row md:items-start md:gap-6"
                            >
                                <p className="w-8 text-left font-bold text-green-600 md:w-auto md:text-center">
                                {item.id}
                                </p>

                                <h3 className="text-lg font-medium text-gray-900 md:basis-1/3">
                                {item.title}
                                </h3>

                                <p className="leading-relaxed text-gray-600 md:basis-2/3">
                                {item.description}
                                </p>
                            </div>
                        )}
                    />
                </div>
            </section>
        </div>
    );
}