"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Heart, MapPin, Sparkles, Users } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Sparkles,
    title: "Fresh Ingredients",
    description: "We use only the freshest ingredients sourced daily",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with care and passion",
  },
  {
    icon: Clock,
    title: "Late Night Dining",
    description: "Serving you until 4 AM, 7 days a week",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "A welcoming atmosphere for the whole family",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Consistent quality you can always count on",
  },
  {
    icon: MapPin,
    title: "Two Locations",
    description: "Conveniently located across Sharjah",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-card py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Al Beraimi Cafeteria interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-card p-6 shadow-xl md:-bottom-8 md:-right-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange">
                  <Award className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">Since 1994</div>
                  <div className="text-muted-foreground">Serving Sharjah</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>

            <h2 className="mb-6 text-pretty text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              A Taste of{" "}
              <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
                Authentic Flavors
              </span>
            </h2>

            <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">
              Al Beraimi Cafeteria is one of Sharjah&apos;s popular cafeteria
              brands known for delicious food, affordable prices, fresh
              ingredients, and late-night dining. With multiple branches across
              Sharjah, we proudly serve quality grilled chicken, shawarma,
              sandwiches, burgers, Arabic meals, and refreshing juices in a
              family-friendly atmosphere.
            </p>

            <p className="mb-8 text-pretty leading-relaxed text-muted-foreground">
              Our commitment to quality and customer satisfaction has made us a
              beloved destination for families, friends, and food lovers across
              the UAE. Whether you&apos;re craving a late-night snack or a
              hearty family meal, Al Beraimi Cafeteria is here to serve you with
              warmth and excellence.
            </p>

            {/* Features Grid */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-4 transition-colors hover:border-primary/30 hover:bg-muted/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
