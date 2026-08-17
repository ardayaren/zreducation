"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/contact";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[70] flex items-center gap-3">
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.35 }}
        className="hidden sm:block bg-white text-navy-900 text-xs font-semibold rounded-full px-4 py-2 shadow-[0_6px_20px_rgba(14,34,64,0.12)] border border-border/60"
      >
        Sorularınız için yazın · 7/24
      </motion.span>
      <motion.a
        href={contactInfo.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label="WhatsApp'tan bize yazın"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.45)] gpu-layer"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <MessageCircle
          className="relative w-7 h-7 sm:w-8 sm:h-8 text-white"
          strokeWidth={2}
          fill="white"
          fillOpacity={0.12}
        />
      </motion.a>
    </div>
  );
}
