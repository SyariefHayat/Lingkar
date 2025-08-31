import Footer from "@/components/layouts/Footer"
import Navbar from "@/components/layouts/Navbar"

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}