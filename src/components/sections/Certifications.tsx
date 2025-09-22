import { useInView } from '../../hooks/useInView'
import Reveal from '../../components/Reveal'

const certs = [
  { title: 'AWS Certified Cloud Practitioner', issuer: 'AWS', date: '2024' },
  { title: 'Google UX Design', issuer: 'Google', date: '2023' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">Proof of Work</Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {certs.map((c) => (
            <Cert key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Cert({ title, issuer, date }: { title: string; issuer: string; date: string }) {
  const { ref, inView } = useInView({ threshold: 0.2 })
  return (
    <article
      ref={ref as any}
      className={(inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95') + ' transition-all duration-700 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 hover:shadow-md'}
    >
      <div className="text-xs text-neutral-500">{issuer} · {date}</div>
      <div className="mt-1 font-semibold">{title}</div>
    </article>
  )
}


