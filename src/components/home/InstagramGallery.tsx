"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AtSign, PlayCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { galleryItems } from "@/data/gallery";
import {
  instagramFeedPosts,
  instagramProfileUrl,
} from "@/data/instagramFeed";
import { contactInfo } from "@/data/contact";
import { fadeUp, staggerContainer, transition, viewportOnce } from "@/lib/motion";

interface OEmbedPost {
  id: string;
  postUrl: string;
  caption: string;
  thumbnail?: string;
  title?: string;
  status: "loading" | "ready" | "error";
}

export default function InstagramGallery() {
  const [feed, setFeed] = useState<OEmbedPost[]>(
    instagramFeedPosts.map((p) => ({
      ...p,
      status: "loading",
    }))
  );

  useEffect(() => {
    const posts = instagramFeedPosts;
    if (posts.length === 0) return;

    let cancelled = false;

    posts.forEach(async (post) => {
      try {
        const res = await fetch(
          `/api/instagram-oembed?url=${encodeURIComponent(post.postUrl)}`
        );
        const data = await res.json();
        if (cancelled) return;
        setFeed((prev) =>
          prev.map((item) =>
            item.id === post.id
              ? {
                  ...item,
                  thumbnail: data.thumbnail_url || undefined,
                  title: data.title || undefined,
                  status: res.ok ? "ready" : "error",
                }
              : item
          )
        );
      } catch {
        if (cancelled) return;
        setFeed((prev) =>
          prev.map((item) =>
            item.id === post.id ? { ...item, status: "error" } : item
          )
        );
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const livePosts = feed.filter((p) => p.status === "ready" && p.thumbnail);

  return (
    <section className="py-16 md:py-20 bg-white border-t border-border section-flow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <SectionTitle
            subtitle="Sosyal Medya"
            title="Zreducation Instagram"
            description="Sınıflardan, konuşma kulübünden, reels videolarından ve öğrenci başarılarından kareler."
          />
          <Button
            href={instagramProfileUrl}
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {galleryItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href || instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              transition={transition.fast}
              className="group relative aspect-square rounded-2xl overflow-hidden gpu-layer"
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
              )}
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

        {livePosts.length > 0 && (
          <div className="mt-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <h3 className="label-caps text-gold-600">
                Canlı Instagram Paylaşımlarımız
              </h3>
              <span className="text-xs text-slate-light">
                oEmbed ile otomatik aktarılır
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {livePosts.map((post) => (
                <motion.a
                  key={post.id}
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  transition={transition.fast}
                  className="group relative aspect-square rounded-2xl overflow-hidden gpu-layer"
                >
                  {post.thumbnail ? (
                    <Image
                      src={post.thumbnail}
                      alt={post.title || post.caption}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-surface flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-gold-600" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-0 left-0 right-0 p-3 text-[11px] text-white leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.caption}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
