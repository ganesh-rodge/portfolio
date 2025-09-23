import { useInView } from '../../hooks/useInView'
import Reveal from '../../components/Reveal'

const roles = [
  { period: 'December 2024 — February 2025', title: 'Software Development Engineer Intern', org: 'Central Railway, Mumbai.', desc: 'Gained exposure to the Software Development Life Cycle (SDLC) and Agile methodologies while contributing to development tasks.' },
  { period: 'August 2022 — October 2022', title: 'Front-end Intern', org: 'Technobrilliant Learning Solutions', desc: 'Implemented responsive UI components and contributed to feature development following front-end best practices.' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">Where I’ve Been</Reveal>
        <Reveal as="p" variant="fade" delay={100} className="mt-3 text-neutral-600 dark:text-neutral-300">Roles and impactful milestones.</Reveal>
        <div className="mt-10 relative">
          <ProgressLine />
          <ul className="space-y-8">
            {roles.map((r) => (
              <RoleItem key={r.title} {...r} />)
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ProgressLine() {
  const { ref, inView } = useInView({ threshold: 0.1 })
  return (
    <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
      <div ref={ref as any} className={(inView ? 'h-full' : 'h-0') + ' w-px bg-gradient-to-b from-fuchsia-500 to-violet-500 transition-all duration-[1500ms]'} />
    </div>
  )
}

function RoleItem({ period, title, org, desc }: { period: string; title: string; org: string; desc: string }) {
  const { ref, inView } = useInView({ threshold: 0.2 })
  return (
    <li ref={ref as any} className={(inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3') + ' transition-all duration-700 pl-10'}>
      <div className="w-2 h-2 rounded-full bg-fuchsia-500 absolute left-[3px] mt-3" />
      <div className="text-sm text-neutral-500 dark:text-neutral-400">{period}</div>
      <div className="font-semibold">{title} · {org}</div>
      <p className="mt-1 text-neutral-600 dark:text-neutral-300">
        {desc.includes('Gained exposure') ? (
          <>
            Gained exposure to the Software Development Life Cycle (SDLC) and Agile methodologies<br className="hidden lg:inline" /> while contributing to development tasks.
          </>
        ) : desc.includes('Implemented responsive UI components') ? (
          <>
            Implemented responsive UI components and contributed to feature development<br className="hidden lg:inline" /> following front-end best practices.
          </>
        ) : (
          desc
        )}
      </p>
    </li>
  )
}



