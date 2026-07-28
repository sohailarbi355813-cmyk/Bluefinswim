import Navbar from "@/components/Navbar";
import HeroParallax from "@/components/HeroParallax";
import CourseSection from "@/components/CourseSection";
import CoachesSection from "@/components/CoachesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0E11] text-white min-h-screen overflow-x-hidden relative selection:bg-cyan-400 selection:text-[#0B0E11]">
      <Navbar />
      <HeroParallax />
      <CourseSection />
      <CoachesSection />
      <Footer />
    </main>
  );
}
