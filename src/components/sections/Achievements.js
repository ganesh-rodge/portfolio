import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Reveal from '../../components/Reveal';
import MotionReveal from '../../components/MotionReveal';
const badges = [
    { title: '111 LeetCode questions solved', sub: '' },
    { title: '37+ Github Repositories', sub: '' },
    { title: 'Participated in Hackathons', sub: '' },
];
export default function Achievements() {
    return (_jsx("section", { id: "achievements", className: "py-24 md:py-32", children: _jsxs("div", { className: "container max-w-5xl mx-auto px-6", children: [_jsx(Reveal, { as: "h2", variant: "slide-up", className: "text-3xl md:text-4xl font-bold", children: "Achievements" }), _jsx("div", { className: "mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6", children: badges.map((b, i) => (_jsx(MotionReveal, { variant: "zoom", delay: i * 90, children: _jsx(Badge, Object.assign({}, b)) }, b.title))) })] }) }));
}
function Badge({ title, sub }) {
    return (_jsxs("div", { className: "rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 bg-white dark:bg-neutral-900 hover:shadow-md text-center transition-all duration-300 hover:scale-105", children: [_jsx("div", { className: "text-2xl", children: "\uD83C\uDFC5" }), _jsx("div", { className: "mt-2 font-semibold", children: title }), _jsx("div", { className: "text-sm text-neutral-500", children: sub })] }));
}
