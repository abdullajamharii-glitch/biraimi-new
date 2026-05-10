"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, MessageCircle, UtensilsCrossed, Flame, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-background flex flex-col"
    >
      {/* Background Image - Shawaya */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-shawaya.jpg"
          alt="Al Beraimi's Famous OG Shawaya - Golden roasted chicken"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Promotional Banner */}
      <div className="relative z-10 bg-gradient-to-r from-primary via-orange to-accent py-3 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground md:text-base"
        >
          <Flame className="h-4 w-4" />
          <span>TRY OUR LEGENDARY OG SHAWAYA - Sharjah&apos;s #1 Grilled Chicken!</span>
          <Flame className="h-4 w-4" />
          <span className="hidden md:inline">| Free Delivery on Orders Above AED 50</span>
        </motion.p>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-1 flex-col justify-center px-6 md:px-16 lg:px-24 py-8 md:py-12">
        <div className="max-w-2xl flex flex-col items-start text-left -mt-16 md:-mt-20">
          {/* OG Shawaya Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-3 rounded-full border-2 border-accent/50 bg-accent/20 px-4 py-2"
          >
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
            </div>
            <span className="text-sm font-bold text-accent">Famous for OG Shawaya</span>
          </motion.div>



          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-3 text-pretty text-3xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Home of the{" "}
            <span className="bg-gradient-to-r from-primary via-orange to-accent bg-clip-text text-transparent">
              OG Shawaya
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl">
              Sharjah&apos;s Favorite Cafeteria
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Experience the legendary taste of our signature{" "}
            <span className="font-semibold text-accent">OG Shawaya</span> - golden,
            crispy, and perfectly grilled. Alongside delicious shawarma, burgers,
            fresh juices, and authentic Arabic meals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row justify-start w-full"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-orange text-primary-foreground hover:opacity-90"
              asChild
            >
              <Link href="#menu">
                <UtensilsCrossed className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              asChild
            >
              <a
                href="https://wa.me/97165691925?text=Hi%2C%20I%20would%20like%20to%20order%20the%20OG%20Shawaya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Order OG Shawaya
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-foreground hover:bg-muted"
              asChild
            >
              <Link href="#branches">
                <MapPin className="mr-2 h-5 w-5" />
                Find Nearest Branch
              </Link>
            </Button>
          </motion.div>




        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-xs md:text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-5 w-5 md:h-6 md:w-6" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
