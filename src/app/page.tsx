import HeroSection from '@/components/home/HeroSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import RoomsSection from '@/components/home/RoomsSection'
import PackagesSection from '@/components/home/PackagesSection'
import SpecialOccasionsSection from '@/components/home/SpecialOccasionsSection'
import AttractionsSection from '@/components/home/AttractionsSection'
import BeforeYouArriveSection from '@/components/home/BeforeYouArriveSection'
// import AmenitiesSection from '@/components/home/AmenitiesSection'
import GallerySection from '@/components/home/GallerySection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FaqSection from '@/components/home/FaqSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <RoomsSection />
      <PackagesSection />
      <SpecialOccasionsSection />
      {/* <AmenitiesSection /> */}
      <AttractionsSection />
      <BeforeYouArriveSection />
      <GallerySection />
      <FaqSection />
      <TestimonialsSection />
    </>
  )
}
