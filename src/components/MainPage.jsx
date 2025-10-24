import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Gallery from './Gallery'
import Location from './Location'
import FAQSection from './FAQ'
import PracticeAreasSection from './PracticeAreas'
import AttorneysSection from './Attorneys'
import TestimonialsSection from './Testimonials'

const MainPage = () => {
  return (
    <div>
        <Header />
        <Hero />
        {/* <PracticeAreasSection/> */}
        <AttorneysSection />
        <TestimonialsSection />
        <Location />
        <Gallery />
        <FAQSection />
    </div>
  )
}

export default MainPage