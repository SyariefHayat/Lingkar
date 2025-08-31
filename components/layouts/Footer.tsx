import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Leaf } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 font-poppins md:mt-16 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">Lingkar</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Bersama-sama menciptakan perubahan positif melalui pengelolaan
                            sampah yang lebih bijak dan berkelanjutan.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Navigasi</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Beranda</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Tentang Kami</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Program</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Berita</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Kontak</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Layanan</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Pengelolaan Sampah</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Daur Ulang</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Konsultasi</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">Edukasi</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <a href="mailto:info@lingkar.org" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                                        info@lingkar.org
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <a href="tel:+6281234567890" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                                        +62 812 3456 7890
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <span className="text-gray-600 text-sm">Jakarta, Indonesia</span>
                                </div>
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

            <div className="border-t border-gray-200 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-600">
                            &copy; {new Date().getFullYear()} Lingkar. All rights reserved.
                        </div>
                        
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}