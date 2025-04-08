import { HeaderMain } from "@/components/header-main"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutPreview } from "@/components/about-preview"
import { NewsSection } from "@/components/news-section"
import { ProjectsGallery } from "@/components/projects-gallery"
import { ProfessionalAffiliations } from "@/components/professional-affiliations"
import { ChildCancerFund } from "@/components/child-cancer-fund"
import { CTASection } from "@/components/cta-section"
import { FooterMain } from "@/components/footer-main"
import { BackToTop } from "@/components/back-to-top"
import { AsphaltBot } from "@/components/AsphaltBot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeaderMain />
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <NewsSection />
      <ProjectsGallery />
      <ProfessionalAffiliations />
      <ChildCancerFund />
      <CTASection />
      <FooterMain />
      <BackToTop />
      <AsphaltBot />
    </main>
  )
}

