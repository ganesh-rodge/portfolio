import { useInView } from '../../hooks/useInView'
import Reveal from '../../components/Reveal'
import MotionReveal from '../../components/MotionReveal'
import ParallaxSection from '../../components/ParallaxSection'
import { FaNodeJs } from 'react-icons/fa'

type Project = {
  title: string
  desc: string
  stack: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  { 
    title: 'Sahayak AI', 
    desc: 'AI-powered adaptive learning and teaching assistant platform with personalized learning paths, AI-generated educational content, and intelligent tutoring capabilities.', 
    stack: ['React.js', 'Node.js', 'Express.js', 'Azure SQL', 'Azure App Service', 'Azure Static Web Apps', 'Blob Storage', 'Microsoft Entra ID', 'TailwindCSS', 'Gemini APIs', 'AI/ML'], 
    demo: 'https://www.sahayakai.dev' 
  },
  { 
    title: 'Unique Fitness', 
    desc: 'Full-stack MERN gym management platform with admin dashboard for memberships, plans, workouts, diets, and announcements. Successfully onboarded 200+ active users.', 
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'TailwindCSS', 'Cloudinary', 'JWT', 'REST APIs'], 
    github: 'https://github.com/ganesh-rodge/uniquefitness', 
    demo: 'https://uniquefitness.vercel.app' 
  },
  { 
    title: 'CropNest', 
    desc: 'Smart Agri-Marketplace Platform featuring farm overview dashboard, harvest schedule management, comprehensive farming details tracking, crop health monitoring, and soil quality analysis tools.', 
    stack: ['React.js', 'TypeScript', 'React-Router', 'TailwindCSS', 'CSS', 'HTML'], 
    github: 'https://github.com/ganesh-rodge/agriconnect' 
  },
]

export default function Projects() {
  return (
    <ParallaxSection
      id="projects"
      className="py-24 md:py-32"
      background={<ProjectBackground />}
      foreground={
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">
              What I Built
            </Reveal>
            <MotionReveal variant="fade" delay={100}>
              <a
                href="https://github.com/ganesh-rodge"
                target="_blank"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60 hover:from-fuchsia-400 to-violet-400"
              >
                View All on GitHub
              </a>
            </MotionReveal>
          </div>

          <MotionReveal as="p" variant="fade" delay={200} className="mt-3 text-neutral-600 dark:text-neutral-300">
            Practical applications of my learning and growth.
          </MotionReveal>

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

  // Determine preview content
  let previewContent
  if (index === 0)
    previewContent = <img src="/sahayak.png" alt="Sahayak AI" className="w-full h-full object-cover" />
  else if (index === 1)
    previewContent = <img src="/unique.png" alt="Unique Fitness" className="w-full h-full object-cover" />
  else if (index === 2)
    previewContent = <img src="/cropnest.png" alt="CropNest" className="w-full h-full object-cover" />

  return (
    <article
      ref={ref as any}
      className={
        (inView ? 'opacity-100 translate-x-0' : `opacity-0 ${dir}`) +
        ' transition-all duration-700 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5'
      }
    >
      <div className="h-40 rounded-xl bg-gradient-to-tr from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 mb-4 overflow-hidden grid place-items-center">
        {previewContent}
      </div>
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="mt-1 text-neutral-600 dark:text-neutral-300 text-sm">{project.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-sm underline underline-offset-4 font-medium"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="text-sm underline underline-offset-4 font-medium"
          >
            Live Demo
          </a>
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
