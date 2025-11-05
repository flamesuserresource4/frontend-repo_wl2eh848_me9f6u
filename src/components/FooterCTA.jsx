import { motion } from 'framer-motion'

export default function FooterCTA() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,191,36,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold sm:text-4xl">Ready to own real gold?</h3>
            <p className="mt-3 max-w-prose text-white/70">
              Create an account in minutes and start building your portfolio with premium products and secure storage options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start gap-3 md:items-end"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3 font-medium text-black shadow-lg shadow-amber-500/30 transition hover:brightness-110"
            >
              Get Started
            </a>
            <p className="text-xs text-white/50">© {new Date().getFullYear()} Aurum — All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
