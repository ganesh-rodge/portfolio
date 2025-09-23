import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useInView } from '../../hooks/useInView';
import Reveal from '../../components/Reveal';
const milestones = [
    { year: '2020', title: 'Completed 10th Grade', detail: 'Finished 10th in March 2020 with 95.40% marks.' },
    { year: '2020', title: 'Started Coding', detail: 'Began learning basic programming languages in June 2020.' },
    { year: '2020', title: 'Admission in GPP', detail: 'Joined Government Polytechnic Pune in December 2020.' },
    { year: '2022', title: 'First Internship', detail: 'Front-end intern at Technobrilliant Learning Solutions, Pune in August 2022.' },
    { year: '2023', title: 'Completed Diploma', detail: 'Finished Diploma in Computer Engineering in June 2023 with 81.73%.' },
    { year: '2023', title: 'Admission in SPPU', detail: 'Joined Savitribai Phule Pune University in September 2023. Current CGPA: 9.14.' },
    { year: '2025', title: 'Second Internship', detail: 'Software Developement Intern at Central Railway, Mumbai in December 2025.' },
];
export default function About() {
    return (_jsx("section", { id: "about", className: "py-24 md:py-32", children: _jsxs("div", { className: "container max-w-5xl mx-auto px-6", children: [_jsx(Reveal, { as: "h2", variant: "slide-up", className: "text-3xl md:text-4xl font-bold", children: "My Story" }), _jsx(Reveal, { as: "p", variant: "fade", delay: 100, className: "mt-3 text-neutral-600 dark:text-neutral-300", children: "A journey through milestones and growth." }), _jsxs("div", { className: "mt-12 relative", children: [_jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" }), _jsx("ul", { className: "space-y-10", children: milestones.map((m, idx) => (_jsx(TimelineItem, Object.assign({}, m, { align: idx % 2 === 0 ? 'left' : 'right' }), m.year))) })] }), _jsx("div", { className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-4", children: [
                        'Workout in Gym',
                        'Watch movies',
                        'Watch cricket',
                        'Play cricket',
                    ].map((f, i) => (_jsx(Reveal, { variant: "zoom", delay: i * 80, children: _jsx(FunBadge, { label: f }) }, f))) })] }) }));
}
function TimelineItem({ year, title, detail, align }) {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const isLeft = align === 'left';
    return (_jsx("li", { ref: ref, className: 'relative flex ' + (isLeft ? 'md:justify-start' : 'md:justify-end'), children: _jsxs("div", { className: (inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4') + ' transition-all duration-700 max-w-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 shadow-sm', children: [_jsx("div", { className: "text-sm text-neutral-500 dark:text-neutral-400", children: year }), _jsx("div", { className: "mt-1 font-semibold", children: title }), _jsx("p", { className: "mt-2 text-neutral-600 dark:text-neutral-300", children: detail })] }) }));
}
function FunBadge({ label }) {
    const { ref, inView } = useInView({ threshold: 0.1 });
    return (_jsx("div", { ref: ref, className: (inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95') + ' transition-all duration-500 rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-6 text-center hover:-translate-y-0.5 hover:shadow-md', children: _jsx("span", { className: "text-sm font-medium", children: label }) }));
}
