import HeroSection from '@/components/home/HeroSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import RoomsSection from '@/components/home/RoomsSection'
import PackagesSection from '@/components/home/PackagesSection'
import AttractionsSection from '@/components/home/AttractionsSection'
// import AmenitiesSection from '@/components/home/AmenitiesSection'
import GallerySection from '@/components/home/GallerySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <RoomsSection />
      <PackagesSection />
      {/* <AmenitiesSection /> */}
      <AttractionsSection />
      <GallerySection />
      <TestimonialsSection />
    </>
  )
}
