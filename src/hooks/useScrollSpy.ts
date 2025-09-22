import { useEffect, useMemo, useRef, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')
  const idToElement = useRef<Map<string, HTMLElement>>(new Map())

  useEffect(() => {
    idToElement.current.clear()
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) idToElement.current.set(id, el)
    })
  }, [sectionIds])

  useEffect(() => {
    const onScroll = () => {
      let current = activeId
      for (const id of sectionIds) {
        const el = idToElement.current.get(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= offset && rect.bottom > offset) {
          current = id
          break
        }
      }
      if (current !== activeId) setActiveId(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset, activeId])

  const scrollTo = useMemo(() => (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = window.scrollY + el.getBoundingClientRect().top - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  return { activeId, scrollTo }
}


