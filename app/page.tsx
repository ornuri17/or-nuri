import { lazy, Suspense } from 'react';
import ScrollProgress from '@/app/components/layout/ScrollProgress';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import HeroSection from '@/app/components/sections/HeroSection';

const AboutSection = lazy(() => import('@/app/components/sections/AboutSection'));
const ExperienceTimeline = lazy(() => import('@/app/components/sections/ExperienceTimeline'));
const LeadershipSection = lazy(() => import('@/app/components/sections/LeadershipSection'));
const ExpertiseSection = lazy(() => import('@/app/components/sections/ExpertiseSection'));
const SuccessStories = lazy(() => import('@/app/components/sections/SuccessStories'));
const MediaSection = lazy(() => import('@/app/components/sections/MediaSection'));
const AdvisorySection = lazy(() => import('@/app/components/sections/AdvisorySection'));
const ContactSection = lazy(() => import('@/app/components/sections/ContactSection'));

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <ScrollProgress />
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <Suspense fallback={null}>
          <AboutSection />
          <ExperienceTimeline />
          <LeadershipSection />
          <ExpertiseSection />
          <SuccessStories />
          <MediaSection />
          <AdvisorySection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
