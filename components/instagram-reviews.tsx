"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Play, ExternalLink, Heart, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const videoReviews = [
  {
    id: 1,
    thumbnail: "/images/insta-video-1.jpg",
    title: "OG Shawaya Review",
    views: "12.5K",
    likes: "2.3K",
    comments: "156",
    duration: "0:45",
    link: "https://www.instagram.com/_beraimi_/",
  },
  {
    id: 2,
    thumbnail: "/images/insta-video-2.jpg",
    title: "Crispy Chicken Taste Test",
    views: "8.9K",
    likes: "1.8K",
    comments: "98",
    duration: "1:02",
    link: "https://www.instagram.com/_beraimi_/",
  },
  {
    id: 3,
    thumbnail: "/images/insta-video-3.jpg",
    title: "Family Dinner Experience",
    views: "6.2K",
    likes: "1.2K",
    comments: "74",
    duration: "0:38",
    link: "https://www.instagram.com/_beraimi_/",
  },
];

export function InstagramReviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-gradient-to-b from-background to-card py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#FCAF45]/20 px-4 py-2">
            <Instagram className="h-4 w-4 text-[#E1306C]" />
            <span className="text-sm font-medium text-foreground">
              @_beraimi_ on Instagram
            </span>
          </div>

          <h2 className="mb-4 text-pretty text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Watch Our{" "}
            <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] bg-clip-text text-transparent">
              Video Reviews
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            See what food lovers are saying about our famous OG Shawaya and other
            delicious dishes. Real reviews from real customers!
          </p>
        </motion.div>

        {/* Featured Instagram Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          <Card className="overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Instagram Profile Header */}
              <div className="flex items-center justify-between border-b border-border bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCAF45]/10 p-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange">
                      <span className="text-lg font-bold text-white">AB</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] p-0.5">
                      <Instagram className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Al Beraimi Cafeteria</h3>
                    <p className="text-sm text-muted-foreground">@_beraimi_</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C]/10"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/_beraimi_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow
                  </a>
                </Button>
              </div>

              {/* Video Preview Area */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-muted p-1">
                {videoReviews.map((video) => (
                  <a
                    key={video.id}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-[9/16] overflow-hidden bg-background"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E1306C]/80 backdrop-blur-sm"
                      >
                        <Play className="h-6 w-6 fill-white text-white" />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex flex-col gap-1 text-white text-sm">
                        <span className="font-medium line-clamp-1">{video.title}</span>
                        <div className="flex items-center gap-3 opacity-80">
                          <span className="flex items-center gap-1"><Play className="h-3 w-3" /> {video.views}</span>
                          <span className="flex items-center gap-1"><Heart className="h-3 w-3" /> {video.likes}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Engagement Stats */}
              <div className="border-t border-border bg-muted/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">5K+</p>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">200+</p>
                      <p className="text-xs text-muted-foreground">Posts</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">50+</p>
                      <p className="text-xs text-muted-foreground">Video Reviews</p>
                    </div>
                  </div>
                  <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span>New videos daily</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* OG Shawaya Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border-2 border-accent/50 bg-accent/10 px-6 py-3">
            <span className="text-2xl">🔥</span>
            <span className="text-lg font-bold text-foreground md:text-xl">
              Try Our Famous{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                OG Shawaya
              </span>{" "}
              - Sharjah&apos;s Most Loved!
            </span>
            <span className="text-2xl">🔥</span>
          </div>
        </motion.div>



        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-[#E1306C]/50 hover:bg-[#E1306C]/10"
            asChild
          >
            <a
              href="https://www.instagram.com/_beraimi_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5 text-[#E1306C]" />
              Follow @_beraimi_ for Daily Updates
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
