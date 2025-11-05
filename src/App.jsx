import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import PricingSection from './components/PricingSection'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <FeatureGrid />
      <PricingSection />
      <FooterCTA />
    </div>
  )
}

export default App
