import Hero from '@/components/Hero'
import { TrustBar, BrandsBar } from '@/components/TrustBar'
import CategoryTiles from '@/components/CategoryTiles'
import ProductGrid from '@/components/ProductGrid'
import ServicesSection from '@/components/ServicesSection'
import B2BSection from '@/components/B2BSection'
import ContactSection from '@/components/ContactSection'
import WhyUsSection from '@/components/WhyUsSection'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BrandsBar />
      <CategoryTiles />
      <ProductGrid />
      <ServicesSection />
      <WhyUsSection />
      <B2BSection />
      <ContactSection />
    </>
  )
}
