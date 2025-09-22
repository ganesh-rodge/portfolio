import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [sending, setSending] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Valid email required";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container max-w-3xl mx-auto px-6">
        <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold">
          Connect With Me / Next Chapter
        </Reveal>

        <form
          ref={ref as any}
          onSubmit={(e) => {
            e.preventDefault();
            if (!validate()) return;
            setSending(true);
            setTimeout(() => setSending(false), 1000);
          }}
          className={
            (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3") +
            " transition-all duration-700 mt-10 space-y-6"
          }
        >
          {/* Name Field */}
          <Reveal variant="slide-right">
            <FloatingInput
              label="Name"
              value={values.name}
              error={errors.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            />
          </Reveal>

          {/* Email Field */}
          <Reveal variant="slide-left" delay={60}>
            <FloatingInput
              label="Email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            />
          </Reveal>

          {/* Message Field */}
          <Reveal variant="slide-up" delay={120}>
            <FloatingTextarea
              label="Message"
              value={values.message}
              error={errors.message}
              onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            />
          </Reveal>

          {/* Button */}
          <Reveal variant="zoom" delay={180}>
            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={sending}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"}
            </motion.button>
          </Reveal>
        </form>
      </div>
    </section>
  );
}

/* --- Floating Input Component --- */
function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  error,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div className="relative">
      <motion.input
        type={type}
        value={value}
        onChange={onChange}
        whileFocus={{ scale: 1.01 }}
        placeholder=" "
        className={
          "peer w-full px-4 pt-5 pb-2 rounded-xl border bg-white dark:bg-neutral-900 focus:border-transparent focus:ring-2 focus:ring-fuchsia-500/70 dark:focus:ring-violet-500/70 transition-all " +
          (error ? "border-red-500 ring-red-300" : "border-neutral-300 dark:border-neutral-700")
        }
      />
      <label className="absolute left-4 top-2.5 text-neutral-500 dark:text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-fuchsia-600 dark:peer-focus:text-violet-400">
        {label}
      </label>
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
}

/* --- Floating Textarea Component --- */
function FloatingTextarea({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}) {
  return (
    <div className="relative">
      <motion.textarea
        rows={5}
        value={value}
        onChange={onChange}
        whileFocus={{ scale: 1.01 }}
        placeholder=" "
        className={
          "peer w-full px-4 pt-5 pb-2 rounded-xl border bg-white dark:bg-neutral-900 focus:border-transparent focus:ring-2 focus:ring-fuchsia-500/70 dark:focus:ring-violet-500/70 transition-all " +
          (error ? "border-red-500 ring-red-300" : "border-neutral-300 dark:border-neutral-700")
        }
      />
      <label className="absolute left-4 top-2.5 text-neutral-500 dark:text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-fuchsia-600 dark:peer-focus:text-violet-400">
        {label}
      </label>
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
}
