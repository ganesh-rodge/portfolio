import Reveal from '../../components/Reveal'
import MotionReveal from '../../components/MotionReveal'

const certs = [
  { title: ' TypeScript Programming Course for Beginners', issuer: 'ScholarHat', date: ' June 2025' },
  { title: 'Operating System Fundamentals', issuer: 'NPTEL', date: 'October 2024' },
  { title: ' JavaScript for Beginners', issuer: 'Udemy', date: ' October 2024' },
  { title: '  Figma Training', issuer: 'Infosys Springboard', date: ' June 2024' },
  { title: '  Complete Git and GitHub Masterclass', issuer: 'Infosys Springboard', date: ' October 2023' },
  { title: ' Data Structures and Algorithms', issuer: 'Infosys Springboard', date: ' September 2023' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">Proof of Work</Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <MotionReveal key={c.title} variant={i % 2 === 0 ? 'left' : 'right'} delay={i * 80}>
              <Cert {...c} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cert({ title, issuer, date }: { title: string; issuer: string; date: string }) {
  return (
    <article className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className="text-xs text-neutral-500">{issuer} · {date}</div>
      <div className="mt-1 font-semibold">{title}</div>
    </article>
  )
}


