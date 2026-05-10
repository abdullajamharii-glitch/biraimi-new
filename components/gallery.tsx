"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/grilled-chicken.jpg",
    alt: "Grilled Chicken",
    category: "Food",
  },
  {
    src: "/images/shawarma.jpg",
    alt: "Chicken Shawarma",
    category: "Food",
  },
  {
    src: "/images/zinger-burger.jpg",
    alt: "Zinger Burger",
    category: "Food",
  },
  {
    src: "/images/fresh-juice.jpg",
    alt: "Fresh Juices",
    category: "Beverages",
  },
  {
    src: "/images/restaurant-interior.jpg",
    alt: "Restaurant Interior",
    category: "Ambiance",
  },
  {
    src: "/images/arabic-meal.jpg",
    alt: "Arabic Meals",
    category: "Food",
  },
  {
    src: "/images/hummus.jpg",
    alt: "Hummus with Bread",
    category: "Food",
  },
  {
    src: "/images/broasted.jpg",
    alt: "Broasted Chicken",
    category: "Food",
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-background py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Food Gallery
            </span>
          </div>

          <h2 className="mb-4 text-pretty text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Feast Your Eyes on{" "}
            <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
              Our Dishes
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Take a visual journey through our kitchen. Every dish is crafted
            with care and presented with pride.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 5
                  ? "sm:col-span-2 sm:row-span-2"
                  : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div
                className={`relative ${
                  index === 0 || index === 5
                    ? "aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      {image.alt}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {image.category}
                    </p>
                  </div>
                </div>

                <div className="absolute right-3 top-3 rounded-full bg-background/80 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Camera className="h-4 w-4 text-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card p-8 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]">
            <Instagram className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Follow Us on Instagram
          </h3>
          <p className="max-w-md text-muted-foreground">
            Stay updated with our latest dishes, special offers, and
            behind-the-scenes content.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-90"
            asChild
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              @alberaimi.cafeteria
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-muted/80"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-2xl">
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={1200}
              height={800}
              className="h-auto w-full object-contain"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
