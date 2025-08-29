import { Navbar } from "@/components/layouts/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";

import { Geist, Geist_Mono, Poppins } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "EcoConnect",
    description: "Digital Circular Economy dari Masyarakat untuk Masyarakat",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}