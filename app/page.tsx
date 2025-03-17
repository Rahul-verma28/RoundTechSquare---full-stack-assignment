import AboutSection from "@/components/About-section";
import ContactSection from "@/components/Contact-section";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-section";
import NewsSection from "@/components/News-section";
import PropertiesSection from "@/components/Property-section";
import ServicesSection from "@/components/Service-section";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection/>
        <AboutSection />
        <PropertiesSection />
        <ServicesSection />
        <ContactSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}

