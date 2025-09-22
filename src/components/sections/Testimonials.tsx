import { useMemo, useRef, useState } from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../../components/Reveal'
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion'
import { PiPauseFill, PiPlayFill } from 'react-icons/pi'

const testimonials = [
  { quote: 'A joy to work with, delivers on time.', author: 'Jane D.' },
  { quote: 'Outstanding attention to detail and UX.', author: 'John S.' },
  { quote: 'Transformed our front-end quality.', author: 'Alex R.' },
]

export default function Testimonials() {
  const [paused, setPaused] = useState(false)
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">What People Say</Reveal>
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => setPaused(p => !p)}
            className="px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm inline-flex items-center gap-2"
          >
            {paused ? <PiPlayFill size={18} /> : <PiPauseFill size={18} />}
            <span>{paused ? 'Play' : 'Pause'}</span>
          </button>
        </div>
        <CardsMarquee paused={paused} items={testimonials} />
      </div>
    </section>
  )
}

function CardsMarquee({ paused, items }: { paused: boolean; items: { quote: string; author: string }[] }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const prefersReduced = useReducedMotion()
  const controls = useAnimationControls()
  const track = useMemo(() => [...items, ...items], [items])

  // Start/stop animation
  const start = async () => {
    if (prefersReduced) return
    await controls.start({ x: ['0%', '-50%'] }, { duration: 18, ease: 'linear', repeat: Infinity })
  }
  const stop = () => controls.stop()

  if (paused) stop(); else start()

  return (
    <div ref={wrapperRef} className="relative mt-6 overflow-hidden">
      <motion.div
        animate={controls}
        className="flex gap-4 w-max px-2"
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => { if (!paused && !prefersReduced) start() }}
      >
        {track.map((t, i) => (
          <article
            key={i}
            className="shrink-0 w-72 md:w-80 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md"
          >
            <div className="text-sm text-neutral-500">{t.author}</div>
            <div className="mt-2 text-lg">“{t.quote}”</div>
          </article>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent" />
    </div>
  )
}


