import Reveal from '../../components/Reveal'
import MotionReveal from '../../components/MotionReveal'
import { SiNodedotjs, SiPython,} from 'react-icons/si'
import { PiChatsBold, PiCompassToolBold } from 'react-icons/pi'

export default function Skills() {
  const groups: { title: string; icon: React.ReactNode; items: string[] }[] = [
    {
      title: 'Languages',
      icon: <SiPython className="text-yellow-500" />,
      items: ['Java', 'JavaScript', 'Typescript', 'Python', 'C', 'C++', 'SQL'],
    },
    {
      title: 'Full‑stack',
      icon: <SiNodedotjs className="text-green-500" />,
      items: ['React',  'Node.js', 'Express.js','TailwindCSS',  'HTML', 'CSS','MongoDB', 'JWT', 'CI/CD', 'REST APIs' ],
      // items: ['Postman', 'Git', 'GitHub', 'Figma', 'MySQL', 'Cloudinary', 'UNIX', 'JIRA'],
    },
    {
      title: 'Tools',
      icon: <PiCompassToolBold className="text-fuchsia-500" />,
      items: ['Postman', 'Git', 'GitHub', 'Figma', 'MySQL', 'Cloudinary', 'UNIX', 'JIRA'],
    },
    {
      title: 'Soft skills',
      icon: <PiChatsBold className="text-sky-500" />,
      items: ['Communication', 'Collaboration', 'Teamwork', 'Problem Solving', 'Leadership', 'Time Management'],
    },
  ]

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-6">
        <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">
          What I Have
        </Reveal>
        <Reveal as="p" variant="fade" delay={100} className="mt-3 text-neutral-600 dark:text-neutral-300">
        The stack I use to build and create.
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {groups.map((g, gi) => (
            <MotionReveal key={g.title} variant={gi % 2 === 0 ? 'right' : 'left'} delay={gi * 120}>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800">
                    {g.icon}
                  </span>
                  {g.title}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {g.items.map((item, ii) => (
                    <MotionReveal key={item} variant="up" delay={ii * 70}>
                      <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm 
                        bg-white/10 dark:bg-neutral-800/20 shadow-sm hover:shadow-md transition-shadow duration-300 whitespace-nowrap">
                        {item}
                      </span>
                    </MotionReveal>
                  ))}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
