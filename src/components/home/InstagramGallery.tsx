"use client";

import Image from "next/image";
import { AtSign, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { galleryItems } from "@/data/gallery";
import { contactInfo } from "@/data/contact";
import { fadeUp, staggerContainer, transition, viewportOnce } from "@/lib/motion";

export default function InstagramGallery() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-border section-flow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <SectionTitle
            subtitle="Sosyal Medya"
            title="Zreducation Instagram"
            description="Sınıflardan, konuşma kulübünden ve öğrenci başarılarından kareler."
          />
          <Button
            href={contactInfo.instagram.href}
            variant="outline"
            size="sm"
            className="shrink-0"
          >
            <AtSign className="w-4 h-4" />
            {contactInfo.instagram.handle}
          </Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4"
        >
          {galleryItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href || contactInfo.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              transition={transition.fast}
              className="group relative aspect-square rounded-2xl overflow-hidden gpu-layer"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {item.type === "video" && (
                <span className="absolute top-2 right-2 bg-navy-950/60 rounded-full p-1.5">
                  <PlayCircle className="w-4 h-4 text-white" />
                </span>
              )}
              <p className="absolute bottom-0 left-0 right-0 p-3 text-[11px] text-white leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
