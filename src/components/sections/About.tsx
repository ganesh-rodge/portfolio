import Reveal from '../../components/Reveal'
import MotionReveal from '../../components/MotionReveal'

const milestones = [
  { year: '2020', title: 'Completed 10th Grade', detail: 'Finished 10th in March 2020 with 95.40% marks.' },
  { year: '2020', title: 'Started Coding', detail: 'Began learning basic programming languages in June 2020.' },
  { year: '2020', title: 'Admission in GPP', detail: 'Joined Government Polytechnic Pune in December 2020.' },
  { year: '2022', title: 'First Internship', detail: 'Front-end intern at Technobrilliant Learning Solutions, Pune in August 2022.' },
  { year: '2023', title: 'Completed Diploma', detail: 'Finished Diploma in Computer Engineering in June 2023 with 81.73%.' },
  { year: '2023', title: 'Admission in SPPU', detail: 'Joined Savitribai Phule Pune University in September 2023. Current CGPA: 9.14.' },
  { year: '2025', title: 'Second Internship', detail: 'Software Developement Intern at Central Railway, Mumbai in December 2025.' },
]


export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">My Story</Reveal>
        <Reveal as="p" variant="fade" delay={100} className="mt-3 text-neutral-600 dark:text-neutral-300">A journey through milestones and growth.</Reveal>

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
          <ul className="space-y-10">
            {milestones.map((m, idx) => (
              <TimelineItem key={m.year} {...m} align={idx % 2 === 0 ? 'left' : 'right'} />
            ))}
          </ul>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
  'Workout in Gym',
  'Watch movies',
  'Watch cricket',
  'Play cricket',
].map((f, i) => (
            <FunBadge key={f} label={f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ year, title, detail, align }: { year: string; title: string; detail: string; align: 'left' | 'right' }) {
  const isLeft = align === 'left'

  return (
    <li className={'relative flex ' + (isLeft ? 'md:justify-start' : 'md:justify-end')}>
      <MotionReveal
        variant={isLeft ? 'left' : 'right'}
        className="max-w-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm"
      >
        <div className="text-sm text-neutral-500 dark:text-neutral-400">{year}</div>
        <div className="mt-1 font-semibold">{title}</div>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">{detail}</p>
      </MotionReveal>
    </li>
  )
}

function FunBadge({ label, delay = 0 }: { label: string; delay?: number }) {
  return (
    <MotionReveal
      variant="zoom"
      delay={delay}
      className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-6 text-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
    >
      <span className="text-sm font-medium">{label}</span>
    </MotionReveal>
  )
}




