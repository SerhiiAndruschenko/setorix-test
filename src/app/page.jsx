import React from 'react'
import '@/styles/base.scss'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import WhySection from './components/WhySection'
import ContactUs from './components/ContactUs'

const LandingPage = async () => {
  let homeData

  try {
    // Fetch data from the API endpoint
    const response = await fetch('https://setorix.vercel.app/api/globals/home?depth=1&draft=false&locale=undefined')

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    homeData = await response.json()
  } catch (error) {
    console.error('Failed to fetch home data:', error)
    homeData = {
      hero: {
        title: 'Error',
        subtitle: '',
        content: 'Unable to load content.',
        image: null,
        advantages: [],
      },
      services: {
        title: '',
        subtitle: '',
        ourServices: [],
      },
      why: {
        why_title: '',
        why_subtitle: '',
        why_content: '',
        why_reasones: [],
      },
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSection data={homeData.hero} />

      {/* Services Section */}
      <ServicesSection data={homeData.services} />

      {/* Why Us Section */}
      <WhySection data={homeData.why} />

      <ContactUs />
    </div>
  )
}

export const dynamic = 'force-dynamic' // Disable caching in the App Router

export default LandingPage
