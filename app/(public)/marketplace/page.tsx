export default function Marketplace() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                Marketplace
                </h1>
                <p className="text-gray-600 mb-6">
                Fitur sedang dalam tahap pengembangan. Nantikan update berikutnya!
                </p>
                <div className="flex justify-center">
                    <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
                </div>
            </div>
        </div>
    );
}