import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 font-poppins">
            <div className="px-8 py-5 sm:py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h3 className="text-2xl font-bold text-white">Lingkar</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        Bersama-sama menciptakan perubahan positif melalui pengelolaan
                        sampah yang lebih bijak dan berkelanjutan.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white">Navigasi</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Beranda</a></li>
                        <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-white transition">Program</a></li>
                        <li><a href="#" className="hover:text-white transition">Berita</a></li>
                        <li><a href="#" className="hover:text-white transition">Kontak</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white">Kontak</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>Email: <a href="mailto:info@lingkar.org" className="hover:text-white">info@lingkar.org</a></li>
                        <li>Telp: <a href="tel:+6281234567890" className="hover:text-white">+62 812 3456 7890</a></li>
                        <li>Alamat: Jakarta, Indonesia</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white">Ikuti Kami</h4>
                    <div className="mt-3 flex gap-4">
                        <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Lingkar. All rights reserved.
            </div>
        </footer>
    )
}