import { motion } from 'framer-motion'

const products = [
  {
    name: '1 oz Gold Bar',
    price: '$2,389',
    perks: ['99.99% pure', 'Assay certificate', 'Sealed packaging'],
    cta: 'Add to Cart'
  },
  {
    name: '1 oz Gold Coin',
    price: '$2,415',
    perks: ['Popular mints', 'Brilliant uncirculated', 'Collector-friendly'],
    cta: 'Add to Cart'
  },
  {
    name: 'Auto-Invest Plan',
    price: 'From $100/mo',
    perks: ['Flexible amounts', 'Vault storage', 'Cancel anytime'],
    cta: 'Start Plan',
    highlight: true
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our Bestsellers</h2>
          <p className="mt-3 text-white/70">Curated selection with live pricing and fast checkout.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative rounded-2xl border p-6 backdrop-blur ${
                p.highlight
                  ? 'border-amber-400/30 bg-amber-400/10 shadow-[0_0_40px_rgba(251,191,36,0.15)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200 backdrop-blur">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.perks.map(perk => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                    {perk}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-3 font-medium transition ${
                p.highlight
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-500/30 hover:brightness-110'
                  : 'border border-white/20 bg-white/10 text-white hover:bg-white/15'
              }`}>
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
