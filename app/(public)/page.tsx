import BlogSection from "@/components/modules/home/BlogSection";
import HeroSection from "@/components/modules/home/HeroSection";
import ImportantSection from "@/components/modules/home/ImportantSection";
import ValueSection from "@/components/modules/home/ValueSection";
import WhatWeDoSection from "@/components/modules/home/WhatWeDoSection";

export default function Home() {
    return (
        <div className="w-full h-full font-poppins">
            <HeroSection />
            <ValueSection />
            <WhatWeDoSection />
            <ImportantSection />
            <BlogSection />
        </div>
    );
}