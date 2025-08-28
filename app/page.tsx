import { Navbar } from "@/components/layouts/Navbar";
import { HeroSection } from "@/components/modules/home/HeroSection";

export default function Home() {
    return (
        <div className="w-full h-full font-poppins">
            <Navbar />
            <HeroSection />
        </div>
    );
}
