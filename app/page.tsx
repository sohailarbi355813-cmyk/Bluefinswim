import Navbar from "@/components/Navbar";
import HeroParallax from "@/components/HeroParallax";
import CourseSection from "@/components/CourseSection";
import CoachesSection from "@/components/CoachesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F9F8F5] text-[#0B0B0C] min-h-screen overflow-x-hidden relative selection:bg-[#003EFF] selection:text-white">
      <Navbar />
      <HeroParallax />
      <CourseSection />
      <CoachesSection />
      <Footer />
    </main>
  );
}
