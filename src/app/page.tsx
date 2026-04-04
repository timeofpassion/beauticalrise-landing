import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemSection from "@/components/ProblemSection";
import ServiceSection from "@/components/ServiceSection";
import PartnerSection from "@/components/PartnerSection";
import ClientShowcase from "@/components/ClientShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const revalidate = 600;

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <ServiceSection />
      <PartnerSection />
      <ClientShowcase />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CtaSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
