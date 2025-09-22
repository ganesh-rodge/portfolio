import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  id?: string
  className?: string
  background?: React.ReactNode
  foreground?: React.ReactNode
  height?: string
}

export default function ParallaxSection({ id, className = '', background, foreground, height = 'min-h-[90vh]' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Background moves slower, foreground faster
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const fgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <section id={id} ref={ref as any} className={height + ' relative overflow-hidden ' + className}>
      <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0 -z-10 pointer-events-none">
        {background}
      </motion.div>
      <motion.div style={{ y: fgY }} className="relative">
        {foreground}
      </motion.div>
    </section>
  )
}


