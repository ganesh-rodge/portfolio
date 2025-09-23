import { useEffect, useState } from 'react'
import Reveal from '../../components/Reveal'
import MotionReveal from '../../components/MotionReveal'
import ParallaxSection from '../../components/ParallaxSection'
import { motion, useScroll, useTransform } from 'framer-motion'

type Props = {
  resumePath?: string
}

export default function Hero({ resumePath = '/resume.pdf' }: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <ParallaxSection
      id="hero"
      className="grid place-items-center"
      height="h-screen"
      background={<GradientBackground />}
      foreground={
        <div
          className={
            (mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3') +
            ' transition-all duration-700 text-center px-6'
          }
        >
          {/* --- Added Image with Scroll Animation --- */}
          <ProfileImage />

          <Reveal
            as="h1"
            variant="slide-up"
            className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6"
          >
            Hi, I’m{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Ganesh Rodge
            </span>
          </Reveal>
          <MotionReveal
            as="p"
            variant="fade"
            delay={100}
            className="mt-4 text-lg md:text-2xl text-neutral-600 dark:text-neutral-300"
          >
            I'm Shaping Ideas into Real Software.
          </MotionReveal>
          <MotionReveal
            as="div"
            variant="zoom"
            delay={200}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href="/Ganesh_Rodge_Resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              See Projects
            </a>
          </MotionReveal>
        </div>
      }
    />
  )
}

function ProfileImage() {
  const { scrollYProgress } = useScroll()

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <motion.div
      style={{ rotate, scale }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative mx-auto w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg"
    >
      {/* Proper Radial Gradient Halo */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(168,85,247,0.4), rgba(236,72,153,0.1))',
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Profile Image */}
      <img
        src="/ganesh.png"
        alt="Ganesh Rodge"
        className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-neutral-900"
      />
    </motion.div>
  )
}


function FloatingBits() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/4 top-1/3 w-24 h-24 rounded-full bg-fuchsia-400/20 blur-2xl animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute right-1/5 bottom-1/4 w-32 h-32 rounded-full bg-violet-400/20 blur-2xl animate-[float_12s_ease-in-out_infinite]" />
      <style>{`@keyframes float {0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
    </div>
  )
}

function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.25),transparent_60%)]">
      <FloatingBits />
    </div>
  )
}
