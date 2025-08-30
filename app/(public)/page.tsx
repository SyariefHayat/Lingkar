import HeroSection from "@/components/modules/home/HeroSection";
import ValueSection from "@/components/modules/home/ValueSection";
import WhatWeDoSection from "@/components/modules/home/WhatWeDoSection";

export default function Home() {
    return (
        <div className="w-full h-full font-poppins">
            <HeroSection />
            <ValueSection />
            <WhatWeDoSection />
        </div>
    );
}