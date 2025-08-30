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
        <section className="w-full min-h-screen px-8 py-16">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                Mengapa Ini Penting?
                </h3>
                <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                Jumlah sampah di Indonesia terus meningkat setiap tahunnya. Tanpa
                pengelolaan yang tepat, sampah berpotensi mencemari lingkungan dan
                merugikan masyarakat. Karena itu, pengelolaan sampah berbasis{" "}
                <span className="font-semibold">Reuse, Reduce, dan Recycle</span>{" "}
                menjadi solusi nyata.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-md hover:shadow-lg transition rounded-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">
                        Timbulan Sampah
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-500">
                        321 Kabupaten/Kota se-Indonesia
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="py-6 text-center">
                        <p className="text-3xl font-bold text-red-600">
                        35,015,331.53
                        </p>
                        <p className="text-gray-600">(ton/tahun)</p>
                    </CardContent>
                    <CardFooter className="justify-center text-sm text-gray-500">
                        Data: SIPSN KLHK
                    </CardFooter>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition rounded-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">
                        Sampah Terkelola
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-500">
                        321 Kabupaten/Kota se-Indonesia
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="py-6 text-center">
                        <p className="text-3xl font-bold text-green-600">
                        22,093,112.00
                        </p>
                        <p className="text-gray-600">(ton/tahun)</p>
                    </CardContent>
                    <CardFooter className="justify-center text-sm text-gray-500">
                        Data: SIPSN KLHK
                    </CardFooter>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition rounded-xl">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">
                        Sampah Tidak Terkelola
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-500">
                        321 Kabupaten/Kota se-Indonesia
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="py-6 text-center">
                        <p className="text-3xl font-bold text-yellow-600">
                        12,922,219.53
                        </p>
                        <p className="text-gray-600">(ton/tahun)</p>
                    </CardContent>
                    <CardFooter className="justify-center text-sm text-gray-500">
                        Data: SIPSN KLHK
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}