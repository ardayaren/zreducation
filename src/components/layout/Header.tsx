"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/navigation";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { contactInfo } from "@/data/contact";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-9 left-0 right-0 z-50 surface-navy shadow-[0_4px_24px_rgba(0,0,0,0.22)] gpu-layer border-b border-white/10"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gold-500/80 to-transparent origin-left"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-3 min-w-0 shrink-0">
            <Logo size={52} priority className="sm:w-14 sm:h-14" />
            <div>
              <span className="font-heading-normal text-lg font-bold text-white tracking-wide block leading-none">
                Zreducation
              </span>
              <span className="label-caps text-gold-300/90 mt-1 block">
                Eğitim & Danışmanlık
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition.fast, delay: 0.2 + i * 0.04 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/75 hover:text-white border-b-2 border-transparent hover:border-gold-400 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition.default, delay: 0.45 }}
            className="hidden lg:flex items-center gap-6"
          >
            <a
              href={contactInfo.phone.href}
              className="flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              {contactInfo.phone.display}
            </a>
            <Button href="/seviye-tespit" size="sm">
              Seviye Tespit
            </Button>
          </motion.div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Menü"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden surface-navy overflow-hidden rounded-b-3xl shadow-lg gpu-layer border-t border-white/10"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="px-4 py-4 space-y-0"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={fadeUp}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 font-medium border-b border-white/10 last:border-0"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="pt-4 px-4 pb-2">
                <Button href="/seviye-tespit" className="w-full">
                  Seviye Tespit Sınavı
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
