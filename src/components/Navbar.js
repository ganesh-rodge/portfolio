import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useRef } from 'react';
export default function Navbar({ sections, activeId, onNavigate }) {
    const items = useMemo(() => sections, [sections]);
    const containerRef = useRef(null);
    const buttonRefs = useRef({});
    useEffect(() => {
        const btn = buttonRefs.current[activeId];
        const container = containerRef.current;
        if (!btn || !container)
            return;
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }, [activeId]);
    return (_jsx("nav", { className: "fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[90vw]", children: _jsx("div", { className: "backdrop-blur bg-white/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-full shadow-sm", children: _jsx("div", { ref: containerRef, className: "px-3 py-2 overflow-x-auto scrollbar-none", children: _jsx("ul", { className: "flex gap-2 min-w-max", children: items.map((s) => {
                        const isActive = s.id === activeId;
                        return (_jsx("li", { children: _jsx("button", { ref: (el) => { buttonRefs.current[s.id] = el; }, onClick: () => onNavigate(s.id), className: "px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap " +
                                    (isActive
                                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                                        : "hover:bg-neutral-200 dark:hover:bg-neutral-800"), children: s.label }) }, s.id));
                    }) }) }) }) }));
}
