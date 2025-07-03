import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import StatsSection from '../components/StatsSection'
import PopularCourses from '../components/PopularCourses'
import Testimonials from '../components/Testimonials'
import NewsletterSignup from '../components/NewsletterSignup'

const Home = () => {
  return (
    <div className="text-gray-800">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <PopularCourses />
      <Testimonials />
       <NewsletterSignup />
    </div>
  )
}

export default Home
