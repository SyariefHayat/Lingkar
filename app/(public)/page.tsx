import CtaSection from "@/components/modules/home/CtaSection";
import HeroSection from "@/components/modules/home/HeroSection";
import ImportantSection from "@/components/modules/home/ImportantSection";
import ValueSection from "@/components/modules/home/ValueSection";
import WhatWeDoSection from "@/components/modules/home/WhatWeDoSection";
import WhyImportantSection from "@/components/modules/home/WhyImportantSection";

export default function Home() {
    return (
        <div className="w-full h-full font-poppins">
            <HeroSection />
            <ValueSection />
            <WhatWeDoSection />
            <ImportantSection />
            <WhyImportantSection />
            <CtaSection />
        </div>
    );
}