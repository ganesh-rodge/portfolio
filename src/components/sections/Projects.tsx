import { useInView } from '../../hooks/useInView'
import Reveal from '../../components/Reveal'
import MotionReveal from '../../components/MotionReveal'
import ParallaxSection from '../../components/ParallaxSection'

type Project = {
  title: string
  desc: string
  stack: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  { title: 'Storyfolio', desc: 'A storytelling portfolio template.', stack: ['React', 'TS', 'Tailwind'], github: 'https://github.com/', demo: 'https://example.com' },
  { title: 'AnimKit', desc: 'Animation utilities for React.', stack: ['React', 'Hooks'], github: 'https://github.com/' },
  { title: 'TrailUI', desc: 'UI components with trails.', stack: ['Tailwind', 'TS'] },
]

export default function Projects() {
  return (
    <ParallaxSection
      id="projects"
      className="py-24 md:py-32"
      background={<ProjectBackground />}
      foreground={
        <div className="container max-w-6xl mx-auto px-6">
          <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">What I Built</Reveal>
          <MotionReveal as="p" variant="fade" delay={100} className="mt-3 text-neutral-600 dark:text-neutral-300">Selected work with interactive previews.</MotionReveal>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <MotionReveal key={p.title} variant={idx % 2 === 0 ? 'right' : 'left'} delay={idx * 120}>
                <ProjectCard project={p} index={idx} />
              </MotionReveal>
            ))}
          </div>
        </div>
      }
    />
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const dir = index % 2 === 0 ? '-translate-x-4' : 'translate-x-4'
  return (
    <article
      ref={ref as any}
      className={
        (inView ? 'opacity-100 translate-x-0' : `opacity-0 ${dir}`) +
        ' transition-all duration-700 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5'
      }
    >
      <div className="h-28 rounded-xl bg-gradient-to-tr from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 mb-4 overflow-hidden grid place-items-center">
        <div className="animate-pulse text-neutral-400 text-sm">Preview</div>
      </div>
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="mt-1 text-neutral-600 dark:text-neutral-300 text-sm">{project.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {project.github && (
          <a href={project.github} target="_blank" className="text-sm underline underline-offset-4">GitHub</a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" className="text-sm underline underline-offset-4">Live Demo</a>
        )}
      </div>
    </article>
  )
}

function ProjectBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <div className="absolute -left-10 top-10 w-40 h-40 bg-fuchsia-400/20 rounded-full blur-2xl" />
      <div className="absolute right-0 bottom-0 w-56 h-56 bg-violet-400/20 rounded-full blur-2xl" />
    </div>
  )
}


