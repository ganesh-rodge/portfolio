import { useState, useEffect, useRef } from "react";
import Reveal from "../../components/Reveal";
import MotionReveal from "../../components/MotionReveal";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const didResetRef = useRef(false);
  const [sending, setSending] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({});
  // Formspree form handler (replace with your form ID if needed)
  const [formState, formSubmit, formReset] = useForm("mdkonyyg");

  const validate = () => {
    const next: typeof errors = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Valid email required";
    if (!values.phone.trim()) next.phone = "Phone number is required";
    else if (!/^\+?\d{10,15}$/.test(values.phone)) next.phone = "Enter a valid phone number";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // Sync sending state to Formspree submitting state
  useEffect(() => {
    setSending(formState.submitting);
  }, [formState.submitting]);

  // Show success toast and reset form on success
  useEffect(() => {
    if (formState.succeeded && !didResetRef.current) {
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
      didResetRef.current = true;
      setTimeout(() => {
        formReset();
        didResetRef.current = false;
      }, 1200);
    }
  }, [formState.succeeded, formReset]);

  // Wrapper submit to validate first, then forward to Formspree
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    // Submit using SubmissionData to avoid TS mismatch and include additional fields
    await formSubmit({
      email: values.email,
      message: values.message,
      // extra fields supported by Formspree
      name: values.name,
      phone: values.phone,
    } as any);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <ToastContainer position="top-right" hideProgressBar={false} />
      <div className="container max-w-3xl mx-auto px-6">
        <Reveal as="h2" variant="slide-up" className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Connect With Me
        </Reveal>

        {/* Contact Info Block */}
        <MotionReveal variant="fade" className="mb-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-xl px-6 py-4 flex items-center gap-3 border border-neutral-200 dark:border-neutral-700 w-full">
              <span className="font-semibold text-neutral-700 dark:text-neutral-200">Email:</span>
              <a href="mailto:ganeshrodge25@gmail.com" className="text-fuchsia-600 dark:text-violet-400 font-medium break-words">ganeshrodge25@gmail.com</a>
            </div>
            <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-xl px-6 py-4 flex items-center gap-3 border border-neutral-200 dark:border-neutral-700 w-full">
              <span className="font-semibold text-neutral-700 dark:text-neutral-200">Phone:</span>
              <a href="tel:+919665552822" className="text-fuchsia-600 dark:text-violet-400 font-medium break-words">+91 9665552822</a>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal
          variant="up"
          className="mt-10 space-y-6"
        >
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-6">
              <MotionReveal variant="right">
                <FloatingInput
                  label="Name"
                  value={values.name}
                  error={errors.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                />
              </MotionReveal>

              <MotionReveal variant="left" delay={60}>
                <FloatingInput
                  label="Email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                />
                {/* Server-side validation from Formspree (optional) */}
                <ValidationError prefix="Email" field="email" errors={formState.errors} />
              </MotionReveal>

              <MotionReveal variant="right" delay={120}>
                <FloatingInput
                  label="Phone"
                  type="tel"
                  value={values.phone}
                  error={errors.phone}
                  onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                />
              </MotionReveal>

              <MotionReveal variant="up" delay={180}>
                <FloatingTextarea
                  label="Message"
                  value={values.message}
                  error={errors.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                />
                {/* Server-side validation from Formspree (optional) */}
                <ValidationError prefix="Message" field="message" errors={formState.errors} />
              </MotionReveal>

              <MotionReveal variant="zoom" delay={240}>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  disabled={sending || formState.submitting}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-60 cursor-pointer hover:from-fuchsia-400"
                >
                  {sending || formState.submitting ? "Sending…" : "Send Message"}
                </motion.button>
              </MotionReveal>
            </div>
          </form>
        </MotionReveal>
      </div>
    </section>
  );
}

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
          "peer w-full px-4 pt-7 pb-2 rounded-xl border bg-white dark:bg-neutral-900 transition-all appearance-none -webkit-tap-highlight-color-transparent " +
          (error
            ? "border-red-500 ring-red-300"
            : "border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-0 focus:ring-0 focus:shadow-[0_0_0_2px_linear-gradient(90deg,#f472b6,#8b5cf6)]")
        }
      />
      <label className="absolute left-4 top-2.5 text-neutral-500 dark:text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-fuchsia-600 dark:peer-focus:text-violet-400">
        {label}
      </label>
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
}

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
          "peer w-full px-4 pt-7 pb-2 rounded-xl border bg-white dark:bg-neutral-900 transition-all appearance-none -webkit-tap-highlight-color-transparent " +
          (error
            ? "border-red-500 ring-red-300"
            : "border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-0 focus:ring-0 focus:shadow-[0_0_0_2px_linear-gradient(90deg,#f472b6,#8b5cf6)]")
        }
      />
      <label className="absolute left-4 top-2.5 text-neutral-500 dark:text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-fuchsia-600 dark:peer-focus:text-violet-400">
        {label}
      </label>
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
}

export default Contact;
