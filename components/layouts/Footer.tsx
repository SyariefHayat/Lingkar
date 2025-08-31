import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer aria-label="Footer" className="bg-gray-50 px-6 pt-16 pb-6 flex flex-col items-center border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl">
                <div className="flex-1 flex flex-col mr-10 mb-8 md:mb-0">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold">LINGKAR</h2>
                    </div>
                    <p className="text-gray-600 text-[15px] mt-4 leading-relaxed max-w-[320px]">
                        Bersama-sama menciptakan perubahan positif melalui pengelolaan
                        sampah yang lebih bijak dan berkelanjutan.
                    </p>
                </div>

                <div className="flex-[1.5] w-full flex flex-wrap justify-between gap-10">
                    <div>
                        <h4 className="text-gray-900 text-lg font-semibold mb-3">Navigasi</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">Beranda</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">Tentang Kami</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">Program</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">Berita</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">Kontak</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 text-lg font-semibold mb-3">Layanan</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">Pengelolaan Sampah</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">Daur Ulang</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">Konsultasi</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">Edukasi</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition text-sm">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gray-900 text-lg font-semibold mb-3">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-green-600" />
                                <a href="mailto:info@lingkar.org" className="text-gray-600 hover:text-green-600 text-sm">info@lingkar.org</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-green-600" />
                                <a href="tel:+6281234567890" className="text-gray-600 hover:text-green-600 text-sm">+62 812 3456 7890</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-green-600" />
                                <span className="text-gray-600 text-sm">Jakarta, Indonesia</span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h5 className="font-semibold text-gray-900 mb-3">Ikuti Kami</h5>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
                <p className="text-gray-600 text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} Lingkar. All rights reserved.
                </p>
                <div className="flex gap-6 mt-4 md:mt-0 text-sm">
                    <a href="#" className="text-gray-600 hover:text-green-600 transition">Privacy Policy</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 transition">Terms of Service</a>
                    <a href="#" className="text-gray-600 hover:text-green-600 transition">Cookie Policy</a>
                </div>
            </div>
        </footer>
    )
}