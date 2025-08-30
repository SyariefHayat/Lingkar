import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function ImportantSection() {
    return (
        <section className="w-full min-h-screen lg:h-screen px-8 py-5 sm:py-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Mengapa Ini Penting ?
                </h3>
                <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                Jumlah sampah di Indonesia terus meningkat setiap tahunnya. Tanpa
                pengelolaan yang tepat, sampah berpotensi mencemari lingkungan dan
                merugikan masyarakat. Karena itu, pengelolaan sampah berbasis{" "}
                <span className="font-semibold text-blue-500">Reuse, Reduce, dan Recycle</span>{" "}
                menjadi solusi nyata.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="pb-2">
                    <CardTitle className="text-base sm:text-lg font-semibold text-gray-800">
                        Timbulan Sampah
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-gray-500">
                        321 Kabupaten/Kota se-Indonesia
                    </CardDescription>
                    </CardHeader>

                    <CardContent className="py-6 text-center">
                    <p className="text-3xl sm:text-4xl font-bold text-red-600 tracking-tight">
                        35,015,331.53
                    </p>
                    <p className="text-gray-500 text-sm">(ton/tahun)</p>
                    </CardContent>

                    <CardFooter className="justify-center text-xs sm:text-sm text-gray-400 border-t pt-3">
                    Data: SIPSN KLHK
                    </CardFooter>
                </Card>

                <Card className="bg-white border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="pb-2">
                    <CardTitle className="text-base sm:text-lg font-semibold text-gray-800">
                        Sampah Terkelola
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-gray-500">
                        321 Kabupaten/Kota se-Indonesia
                    </CardDescription>
                    </CardHeader>

                    <CardContent className="py-6 text-center">
                    <p className="text-3xl sm:text-4xl font-bold text-green-600 tracking-tight">
                        22,093,112.00
                    </p>
                    <p className="text-gray-500 text-sm">(ton/tahun)</p>
                    </CardContent>

                    <CardFooter className="justify-center text-xs sm:text-sm text-gray-400 border-t pt-3">
                    Data: SIPSN KLHK
                    </CardFooter>
                </Card>

                <Card className="bg-white border rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="pb-2">
                    <CardTitle className="text-base sm:text-lg font-semibold text-gray-800">
                        Sampah Tidak Terkelola
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-gray-500">
                        321 Kabupaten/Kota se-Indonesia
                    </CardDescription>
                    </CardHeader>

                    <CardContent className="py-6 text-center">
                    <p className="text-3xl sm:text-4xl font-bold text-yellow-600 tracking-tight">
                        12,922,219.53
                    </p>
                    <p className="text-gray-500 text-sm">(ton/tahun)</p>
                    </CardContent>

                    <CardFooter className="justify-center text-xs sm:text-sm text-gray-400 border-t pt-3">
                    Data: SIPSN KLHK
                    </CardFooter>
                </Card>
            </div>

        </section>
    )
}