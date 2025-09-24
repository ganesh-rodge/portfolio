import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Reveal from '../../components/Reveal';
import MotionReveal from '../../components/MotionReveal';
const certs = [
    { title: ' TypeScript Programming Course for Beginners', issuer: 'ScholarHat', date: ' June 2025' },
    { title: 'Operating System Fundamentals', issuer: 'NPTEL', date: 'October 2024' },
    { title: ' JavaScript for Beginners', issuer: 'Udemy', date: ' October 2024' },
    { title: '  Figma Training', issuer: 'Infosys Springboard', date: ' June 2024' },
    { title: '  Complete Git and GitHub Masterclass', issuer: 'Infosys Springboard', date: ' October 2023' },
    { title: ' Data Structures and Algorithms', issuer: 'Infosys Springboard', date: ' September 2023' },
];
export default function Certifications() {
    return (_jsx("section", { id: "certifications", className: "py-24 md:py-32", children: _jsxs("div", { className: "container max-w-5xl mx-auto px-6", children: [_jsx(Reveal, { as: "h2", variant: "slide-up", className: "text-3xl md:text-4xl font-bold", children: "Proof of Work" }), _jsx("div", { className: "mt-10 grid sm:grid-cols-2 gap-6", children: certs.map((c, i) => (_jsx(MotionReveal, { variant: i % 2 === 0 ? 'left' : 'right', delay: i * 80, children: _jsx(Cert, Object.assign({}, c)) }, c.title))) })] }) }));
}
function Cert({ title, issuer, date }) {
    return (_jsxs("article", { className: "rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 hover:shadow-md transition-all duration-300 hover:scale-105", children: [_jsxs("div", { className: "text-xs text-neutral-500", children: [issuer, " \u00B7 ", date] }), _jsx("div", { className: "mt-1 font-semibold", children: title })] }));
}
