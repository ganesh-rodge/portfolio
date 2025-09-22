import { useInView } from '../../hooks/useInView'
import Reveal from '../../components/Reveal'

const badges = [
  { title: 'Top 3% on LeetCode Monthly', sub: '2024' },
  { title: 'Hackathon Winner', sub: 'JSConf 2023' },
  { title: 'Speaker', sub: 'React Meetup' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">Achievements</Reveal>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {badges.map((b, i) => (
            <Reveal key={b.title} variant="zoom" delay={i * 90}>
              <Badge {...b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Badge({ title, sub }: { title: string; sub: string }) {
  const { ref, inView } = useInView({ threshold: 0.2 })
  return (
    <div
      ref={ref as any}
      className={(inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95') + ' transition-all duration-700 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 hover:shadow-md text-center'}
    >
      <div className="text-2xl">🏅</div>
      <div className="mt-2 font-semibold">{title}</div>
      <div className="text-sm text-neutral-500">{sub}</div>
    </div>
  )
}


