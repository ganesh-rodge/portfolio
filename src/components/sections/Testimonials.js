var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useRef, useState } from 'react';
// import { useInView } from '../../hooks/useInView'
import Reveal from '../../components/Reveal';
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion';
import { PiPauseFill, PiPlayFill } from 'react-icons/pi';
const testimonials = [
    { quote: 'Delivered a product that exceeded expectations.', author: 'Amit K.', designation: 'Owner, Unique Fitness' },
    { quote: 'A joy to work with, delivers on time.', author: 'Poonam R.', designation: 'DevOps Engineer, Accenture' },
    { quote: 'Outstanding attention to detail and UX.', author: 'Tushar B.', designation: 'Software Developer, ITC Infotech' },
];
export default function Testimonials() {
    const [paused, setPaused] = useState(false);
    return (_jsx("section", { id: "testimonials", className: "py-24 md:py-32", children: _jsxs("div", { className: "container max-w-3xl mx-auto px-6 text-center", children: [_jsx(Reveal, { as: "h2", variant: "slide-up", className: "text-3xl md:text-4xl font-bold", children: "What People Say" }), _jsx("div", { className: "mt-5 flex items-center justify-center gap-3", children: _jsxs("button", { onClick: () => setPaused(p => !p), className: "px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm inline-flex items-center gap-2", children: [paused ? _jsx(PiPlayFill, { size: 18 }) : _jsx(PiPauseFill, { size: 18 }), _jsx("span", { children: paused ? 'Play' : 'Pause' })] }) }), _jsx(CardsMarquee, { paused: paused, items: testimonials })] }) }));
}
function CardsMarquee({ paused, items }) {
    const wrapperRef = useRef(null);
    const prefersReduced = useReducedMotion();
    const controls = useAnimationControls();
    const track = useMemo(() => [...items, ...items], [items]);
    // Start/stop animation
    const start = () => __awaiter(this, void 0, void 0, function* () {
        if (prefersReduced)
            return;
        yield controls.start({ x: ['0%', '-50%'] }, { duration: 18, ease: 'linear', repeat: Infinity });
    });
    const stop = () => controls.stop();
    if (paused)
        stop();
    else
        start();
    return (_jsxs("div", { ref: wrapperRef, className: "relative mt-6 overflow-hidden", children: [_jsx(motion.div, { animate: controls, className: "flex gap-4 w-max px-2", onHoverStart: () => controls.stop(), onHoverEnd: () => { if (!paused && !prefersReduced)
                    start(); }, children: track.map((t, i) => (_jsxs("article", { className: "shrink-0 w-72 md:w-80 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md", children: [_jsx("div", { className: "text-sm text-neutral-500", children: t.author }), _jsx("div", { className: "text-xs text-neutral-400", children: t.designation }), _jsxs("div", { className: "mt-2 text-lg", children: ["\u201C", t.quote, "\u201D"] })] }, i))) }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-neutral-900 to-transparent" }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-neutral-900 to-transparent" })] }));
}
