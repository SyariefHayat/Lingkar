export default function WhyImportantSection() {
    return (
        <section className="w-full min-h-screen flex flex-col px-8 py-5 sm:py-16">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    Mengapa ini penting ?
                </h3>
            </div>

            <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
                <div className="relative w-full h-full bg-[url('/important-1.webp')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end p-6">
                        <h3 className="text-white text-xl font-semibold mb-1">
                            20 Juta Ton per Tahun
                        </h3>
                        <p className="text-white text-base sm:text-lg font-medium max-w-md">
                            Sampah plastik yang masuk ke laut setiap tahun
                            merusak ekosistem, membahayakan biota laut,
                            dan mencemari rantai makanan manusia.
                        </p>
                    </div>
                </div>

                <div className="relative w-full h-full bg-[url('/important-2.webp')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end p-6">
                        <h3 className="text-white text-xl font-semibold mb-1">
                            40% Sampah Dibakar
                        </h3>
                        <p className="text-white text-base sm:text-lg font-medium max-w-md">
                            Sampah yang dibakar menghasilkan polusi udara,
                            gas beracun, dan memperparah pemanasan global.
                        </p>
                    </div>
                </div>

                <div className="relative w-full h-full lg:col-span-2 bg-[url('/important-3.webp')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-end p-6">
                        <h3 className="text-white text-xl font-semibold mb-1">
                            50% Sampah Berakhir di TPA
                        </h3>
                        <p className="text-white text-base sm:text-lg font-medium max-w-3xl">
                            Sampah yang menumpuk di tanah mencemari sumber air,
                            merusak kesuburan tanah, dan mengganggu keseimbangan ekosistem darat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}