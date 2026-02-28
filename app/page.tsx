import ScrollProgress from '@/app/components/layout/ScrollProgress';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ExperienceTimeline from '@/app/components/sections/ExperienceTimeline';
import LeadershipSection from '@/app/components/sections/LeadershipSection';
import ExpertiseSection from '@/app/components/sections/ExpertiseSection';
import SuccessStories from '@/app/components/sections/SuccessStories';
import AdvisorySection from '@/app/components/sections/AdvisorySection';
import ContactSection from '@/app/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <ScrollProgress />
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <LeadershipSection />
        <ExpertiseSection />
        <SuccessStories />
        <AdvisorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
