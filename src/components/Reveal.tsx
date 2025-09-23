import { JSX, useEffect, useMemo, useRef, useState } from 'react'

type Variant = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom'

type Props = {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
  variant?: Variant
  delay?: number
  className?: string
  threshold?: number
  once?: boolean
}

export default function Reveal({
  as = 'div',
  children,
  variant = 'slide-up',
  delay = 0,
  className = '',
  threshold = 0.25,
  once = false,
}: Props) {
  const Comp: any = as
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) setInView(true)
        else if (!once) setInView(false)
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const base = 'transition-all duration-700 will-change-transform will-change-opacity '
  const hidden = useMemo(() => {
    switch (variant) {
      case 'fade':
        return 'opacity-0'
      case 'slide-left':
        return 'opacity-0 translate-x-4'
      case 'slide-right':
        return 'opacity-0 -translate-x-4'
      case 'zoom':
        return 'opacity-0 scale-95'
      default:
        return 'opacity-0 translate-y-4'
    }
  }, [variant])

  const shown = useMemo(() => 'opacity-100 translate-x-0 translate-y-0 scale-100', [])

  return (
    <Comp
      ref={ref}
      className={
        base + (inView ? shown : hidden) + ' ' + className
      }
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  )
}


