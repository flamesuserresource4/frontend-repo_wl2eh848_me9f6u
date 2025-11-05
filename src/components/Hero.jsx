import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5fQlL0qinzob1I8q/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px 60px rgba(0,0,0,0.6)' }} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur"
        >
          Premium Gold • Trusted by investors worldwide
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          Invest in Timeless Value
          <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Pure Gold. Modern Experience.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-white/80"
        >
          Secure, transparent, and beautifully presented. Buy physical bars and coins or set up automated investments with industry-leading storage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#pricing"
            className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3 font-medium text-black shadow-lg shadow-amber-500/30 transition hover:brightness-110"
          >
            Shop Gold
          </a>
          <a
            href="#features"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Why Choose Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
