import ScrollProgress from '@/app/components/layout/ScrollProgress';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import ExperienceTimeline from '@/app/components/sections/ExperienceTimeline';
import LeadershipSection from '@/app/components/sections/LeadershipSection';
import ExpertiseSection from '@/app/components/sections/ExpertiseSection';
import SuccessStories from '@/app/components/sections/SuccessStories';
import MediaSection from '@/app/components/sections/MediaSection';
import AdvisorySection from '@/app/components/sections/AdvisorySection';
import FAQSection from '@/app/components/sections/FAQSection';
import ContactSection from '@/app/components/sections/ContactSection';
import { homeJsonLd } from '@/app/metadata';

// Sections are imported directly (not React.lazy) so every section is rendered
// in place in the static HTML, readable by crawlers that don't execute JS.
export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="w-full">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <LeadershipSection />
        <ExpertiseSection />
        <SuccessStories />
        <MediaSection />
        <AdvisorySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
