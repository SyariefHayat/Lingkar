import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="mt-4 text-gray-600">Oops! Halaman ini tidak tersedia.</p>
                <Link
                    href="/"
                    className="mt-6 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    )
}