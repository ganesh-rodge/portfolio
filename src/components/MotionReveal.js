import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function MotionReveal({ as = 'div', children, variant = 'up', delay = 0, className = '', once = false }) {
    var _a;
    const ref = useRef(null);
    // 👇 margin ensures reverse animations trigger even for tall/full sections
    const inView = useInView(ref, {
        amount: 0.25,
        once,
        margin: '0px 0px -20% 0px'
    });
    const Comp = typeof as === 'string' ? (_a = motion[as]) !== null && _a !== void 0 ? _a : motion.div : motion(as);
    const hidden = getHidden(variant);
    const visible = getVisible(variant);
    return (_jsx(Comp, { ref: ref, initial: hidden, animate: inView ? visible : hidden, transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier easing
            delay: (delay || 0) / 1000
        }, className: className, style: { willChange: 'transform, opacity' }, children: children }));
}
function getHidden(variant) {
    switch (variant) {
        case 'fade':
            return { opacity: 0 };
        case 'left':
            return { opacity: 0, x: 24 };
        case 'right':
            return { opacity: 0, x: -24 };
        case 'zoom':
            return { opacity: 0, scale: 0.95 };
        default:
            return { opacity: 0, y: 24 };
    }
}
function getVisible(variant) {
    switch (variant) {
        case 'fade':
            return { opacity: 1 };
        case 'left':
            return { opacity: 1, x: 0 };
        case 'right':
            return { opacity: 1, x: 0 };
        case 'zoom':
            return { opacity: 1, scale: 1 };
        default:
            return { opacity: 1, y: 0 };
    }
}
