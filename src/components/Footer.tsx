"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-12"
    >
      {/* Gradient border (instead of solid border) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-violet-500" />

      {/* Scroll progress bar */}
      <motion.div
        style={{ width: `${scrollProgress}%` }}
        className="absolute top-0 left-0 h-[2px]  transition-all"
      />

      <div className="container max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
        {/* Big tagline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center text-neutral-800 dark:text-neutral-200"
        >
          Life&apos;s Great &amp; I&apos;m Doing Best ✨
        </motion.h2>

        {/* Social links with icons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {[
  { href: "https://github.com/ganesh-rodge", label: "GitHub", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/ganesh-rodge/", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://leetcode.com/ganesh-rodge", label: "LeetCode", icon: <SiLeetcode /> },
  { href: "https://x.com/ganeshro_", label: "Twitter", icon: <FaTwitter /> },
  { href: "https://www.instagram.com/ganeshro_/", label: "Instagram", icon: <FaInstagram /> },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ganeshrodge25@gmail.com",
    label: "Email",
    icon: <FaEnvelope />,
  },
].map((s) => (
  <motion.a
    key={s.label}
    href={s.href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15, y: -3 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-sm"
  >
    {s.icon} {s.label}
  </motion.a>
))}
        </motion.div>

        {/* Bottom copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xs text-neutral-500 text-center"
        >
          © {new Date().getFullYear()} Ganesh Rodge. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
