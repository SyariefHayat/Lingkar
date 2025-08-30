import HeroSection from "@/components/modules/home/HeroSection";
import ValueSection from "@/components/modules/home/ValueSection";

export default function Home() {
    return (
        <div className="w-full h-full font-poppins">
            <HeroSection />
            <ValueSection />
        </div>
    );
}