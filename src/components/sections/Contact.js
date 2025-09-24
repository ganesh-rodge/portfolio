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
import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
    const [errors, setErrors] = useState({});
    const API_URL = import.meta.env.VITE_API_URL;
    const validate = () => {
        const next = {};
        if (!values.name.trim())
            next.name = "Name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
            next.email = "Valid email required";
        if (!values.phone.trim())
            next.phone = "Phone number is required";
        else if (!/^\+?\d{10,15}$/.test(values.phone))
            next.phone = "Enter a valid phone number";
        if (values.message.trim().length < 10)
            next.message = "Message should be at least 10 characters";
        setErrors(next);
        return Object.keys(next).length === 0;
    };
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        if (!validate())
            return;
        setSending(true);
        try {
            const res = yield fetch(`${API_URL}/connect`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = yield res.json();
            if (res.ok) {
                toast.success("Thanks for reaching out! I'll get back to you soon.", {
                    autoClose: 5000,
                    style: {
                        borderRadius: "0.5rem",
                        border: "1px solid #8b5cf6",
                        padding: "12px 16px",
                        fontSize: "14px",
                        color: "#4b5563",
                        background: "#fdf7ff",
                    },
                });
                setValues({ name: "", email: "", phone: "", message: "" });
                setErrors({});
            }
            else {
                if (data.errors) {
                    const backendErrors = data.errors.reduce((acc, err) => {
                        acc[err.param] = err.msg;
                        return acc;
                    }, {});
                    setErrors(backendErrors);
                }
                else {
                    toast.error(data.message || "Oops! Something went wrong.", {
                        autoClose: 5000,
                        style: {
                            borderRadius: "0.5rem",
                            border: "1px solid #ef4444",
                            padding: "12px 16px",
                            fontSize: "14px",
                            color: "#b91c1c",
                            background: "#fef2f2",
                        },
                    });
                }
            }
        }
        catch (err) {
            console.error(err);
            toast.error("Oops! Something went wrong.", {
                autoClose: 5000,
                style: {
                    borderRadius: "0.5rem",
                    border: "1px solid #ef4444",
                    padding: "12px 16px",
                    fontSize: "14px",
                    color: "#b91c1c",
                    background: "#fef2f2",
                },
            });
        }
        finally {
            setSending(false);
        }
    });
    return (_jsxs("section", { id: "contact", className: "py-24 md:py-32", children: [_jsx(ToastContainer, { position: "top-right", hideProgressBar: false }), _jsxs("div", { className: "container max-w-3xl mx-auto px-6", children: [_jsx(Reveal, { as: "h2", variant: "slide-up", className: "text-3xl md:text-4xl font-bold", children: "Connect With Me" }), _jsxs("form", { ref: ref, onSubmit: handleSubmit, className: (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3") +
                            " transition-all duration-700 mt-10 space-y-6", children: [_jsx(Reveal, { variant: "slide-right", children: _jsx(FloatingInput, { label: "Name", value: values.name, error: errors.name, onChange: (e) => setValues((v) => (Object.assign(Object.assign({}, v), { name: e.target.value }))) }) }), _jsx(Reveal, { variant: "slide-left", delay: 60, children: _jsx(FloatingInput, { label: "Email", type: "email", value: values.email, error: errors.email, onChange: (e) => setValues((v) => (Object.assign(Object.assign({}, v), { email: e.target.value }))) }) }), _jsx(Reveal, { variant: "slide-right", delay: 120, children: _jsx(FloatingInput, { label: "Phone", type: "tel", value: values.phone, error: errors.phone, onChange: (e) => setValues((v) => (Object.assign(Object.assign({}, v), { phone: e.target.value }))) }) }), _jsx(Reveal, { variant: "slide-up", delay: 180, children: _jsx(FloatingTextarea, { label: "Message", value: values.message, error: errors.message, onChange: (e) => setValues((v) => (Object.assign(Object.assign({}, v), { message: e.target.value }))) }) }), _jsx(Reveal, { variant: "zoom", delay: 240, children: _jsx(motion.button, { whileTap: { scale: 0.98 }, disabled: sending, className: "px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60 cursor-pointer hover:from-fuchsia-400", children: sending ? "Sending…" : "Send Message" }) })] })] })] }));
}
/* --- Floating Input Component --- */
function FloatingInput({ label, type = "text", value, onChange, error, }) {
    return (_jsxs("div", { className: "relative", children: [_jsx(motion.input, { type: type, value: value, onChange: onChange, whileFocus: { scale: 1.01 }, placeholder: " ", className: "peer w-full px-4 pt-7 pb-2 rounded-xl border bg-white dark:bg-neutral-900 transition-all appearance-none -webkit-tap-highlight-color-transparent " +
                    (error
                        ? "border-red-500 ring-red-300"
                        : "border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-0 focus:ring-0 focus:shadow-[0_0_0_2px_linear-gradient(90deg,#f472b6,#8b5cf6)]") }), _jsx("label", { className: "absolute left-4 top-2.5 text-neutral-500 dark:text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-fuchsia-600 dark:peer-focus:text-violet-400", children: label }), error && _jsx("div", { className: "text-red-500 text-xs mt-1", children: error })] }));
}
/* --- Floating Textarea Component --- */
function FloatingTextarea({ label, value, onChange, error, }) {
    return (_jsxs("div", { className: "relative", children: [_jsx(motion.textarea, { rows: 5, value: value, onChange: onChange, whileFocus: { scale: 1.01 }, placeholder: " ", className: "peer w-full px-4 pt-7 pb-2 rounded-xl border bg-white dark:bg-neutral-900 transition-all appearance-none -webkit-tap-highlight-color-transparent " +
                    (error
                        ? "border-red-500 ring-red-300"
                        : "border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-0 focus:ring-0 focus:shadow-[0_0_0_2px_linear-gradient(90deg,#f472b6,#8b5cf6)]") }), _jsx("label", { className: "absolute left-4 top-2.5 text-neutral-500 dark:text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-fuchsia-600 dark:peer-focus:text-violet-400", children: label }), error && _jsx("div", { className: "text-red-500 text-xs mt-1", children: error })] }));
}
