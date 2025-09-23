import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export default function ParallaxSection({ id, className = '', background, foreground, height = 'min-h-[90vh]' }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    // Background moves slower, foreground faster
    const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
    const fgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
    const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    return (_jsxs("section", { id: id, ref: ref, className: height + ' relative overflow-hidden ' + className, children: [_jsx(motion.div, { style: { y: bgY, opacity: bgOpacity }, className: "absolute inset-0 -z-10 pointer-events-none", children: background }), _jsx(motion.div, { style: { y: fgY }, className: "relative", children: foreground })] }));
}
