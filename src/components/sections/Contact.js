import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";
export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const validate = () => {
        const next = {};
        if (!values.name.trim())
            next.name = "Name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
            next.email = "Valid email required";
        if (values.message.trim().length < 10)
            next.message = "Message should be at least 10 characters";
        setErrors(next);
        return Object.keys(next).length === 0;
    };
    return (_jsx("section", { id: "contact", className: "py-24 md:py-32", children: _jsxs("div", { className: "container max-w-3xl mx-auto px-6", children: [_jsx(Reveal, { as: "h2", variant: "slide-up", className: "text-3xl md:text-4xl font-bold", children: "Connect With Me" }), _jsxs("form", { ref: ref, onSubmit: (e) => {
                        e.preventDefault();
                        if (!validate())
                            return;
                        setSending(true);
                        setTimeout(() => setSending(false), 1000);
                    }, className: (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3") +
                        " transition-all duration-700 mt-10 space-y-6", children: [_jsx(Reveal, { variant: "slide-right", children: _jsx(FloatingInput, { label: "Name", value: values.name, error: errors.name, onChange: (e) => setValues((v) => (Object.assign(Object.assign({}, v), { name: e.target.value }))) }) }), _jsx(Reveal, { variant: "slide-left", delay: 60, children: _jsx(FloatingInput, { label: "Email", type: "email", value: values.email, error: errors.email, onChange: (e) => setValues((v) => (Object.assign(Object.assign({}, v), { email: e.target.value }))) }) }), _jsx(Reveal, { variant: "slide-up", delay: 120, children: _jsx(FloatingTextarea, { label: "Message", value: values.message, error: errors.message, onChange: (e) => setValues((v) => (Object.assign(Object.assign({}, v), { message: e.target.value }))) }) }), _jsx(Reveal, { variant: "zoom", delay: 180, children: _jsx(motion.button, { whileTap: { scale: 0.98 }, disabled: sending, className: "px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60 cursor-pointer hover:from-fuchsia-400 to-violet-400", children: sending ? "Sending…" : "Send Message" }) })] })] }) }));
}
/* --- Floating Input Component --- */
function FloatingInput({ label, type = "text", value, onChange, error, }) {
    return (_jsxs("div", { className: "relative", children: [_jsx(motion.input, { type: type, value: value, onChange: onChange, whileFocus: { scale: 1.01 }, placeholder: " ", className: "peer w-full px-4 pt-7 pb-2 rounded-xl border bg-white dark:bg-neutral-900 focus:border-transparent focus:ring-2 focus:ring-fuchsia-500/70 dark:focus:ring-violet-500/70 transition-all " +
                    (error ? "border-red-500 ring-red-300" : "border-neutral-300 dark:border-neutral-700") }), _jsx("label", { className: "absolute left-4 top-2.5 text-neutral-500 dark:text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-fuchsia-600 dark:peer-focus:text-violet-400", children: label }), error && _jsx("div", { className: "text-red-500 text-xs mt-1", children: error })] }));
}
/* --- Floating Textarea Component --- */
function FloatingTextarea({ label, value, onChange, error, }) {
    return (_jsxs("div", { className: "relative", children: [_jsx(motion.textarea, { rows: 5, value: value, onChange: onChange, whileFocus: { scale: 1.01 }, placeholder: " ", className: "peer w-full px-4 pt-7 pb-2 rounded-xl border bg-white dark:bg-neutral-900 focus:border-transparent focus:ring-2 focus:ring-fuchsia-500/70 dark:focus:ring-violet-500/70 transition-all " +
                    (error ? "border-red-500 ring-red-300" : "border-neutral-300 dark:border-neutral-700") }), _jsx("label", { className: "absolute left-4 top-2.5 text-neutral-500 dark:text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-fuchsia-600 dark:peer-focus:text-violet-400", children: label }), error && _jsx("div", { className: "text-red-500 text-xs mt-1", children: error })] }));
}
