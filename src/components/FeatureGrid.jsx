import { Shield, Coins, Gem, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Shield,
    title: 'Fully Insured Storage',
    desc: 'Your holdings are secured in top-tier vaults with comprehensive insurance coverage.'
  },
  {
    icon: Coins,
    title: 'Competitive Pricing',
    desc: 'Transparent pricing with live market rates and low spreads on all products.'
  },
  {
    icon: Gem,
    title: '99.99% Pure',
    desc: 'Only LBMA-certified bars and coins from globally trusted mints.'
  },
  {
    icon: Truck,
    title: 'Fast, Discreet Delivery',
    desc: 'Tracked and insured worldwide shipping with discreet packaging.'
  }
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/0 via-amber-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why buy gold with us?</h2>
          <p className="mt-3 text-white/70">Institutional-grade security and a premium shopping experience designed for modern investors.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-amber-300/20 to-yellow-500/20 p-3 ring-1 ring-amber-400/30">
                <f.icon className="h-6 w-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
