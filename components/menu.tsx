"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const menuItems = [
  {
    name: "OG Shawaya",
    description:
      "Our legendary signature dish! Golden roasted whole chicken with crispy skin, perfectly seasoned with secret spices. Sharjah's #1 favorite!",
    price: "From AED 28",
    image: "/images/grilled-chicken.jpg",
    badge: "🔥 Signature",
    rating: 5.0,
    featured: true,
  },
  {
    name: "Chicken Shawarma",
    description:
      "Tender sliced chicken wrapped in fresh bread with garlic sauce and pickles",
    price: "From AED 8",
    image: "/images/shawarma.jpg",
    badge: "Popular",
    rating: 4.8,
    featured: false,
  },
  {
    name: "Zinger Burger",
    description:
      "Crispy fried chicken fillet with lettuce, mayo, and special sauce in a sesame bun",
    price: "From AED 15",
    image: "/images/zinger-burger.jpg",
    badge: null,
    rating: 4.7,
  },
  {
    name: "Club Sandwich",
    description:
      "Triple-decker sandwich with grilled chicken, bacon, lettuce, and tomato",
    price: "From AED 18",
    image: "/images/club-sandwich.jpg",
    badge: null,
    rating: 4.6,
  },
  {
    name: "Hummus & Bread",
    description:
      "Creamy homemade hummus topped with olive oil, served with warm pita bread",
    price: "From AED 10",
    image: "/images/hummus.jpg",
    badge: "Vegetarian",
    rating: 4.8,
  },
  {
    name: "Broasted Chicken",
    description:
      "Crispy pressure-fried chicken pieces with a golden crunchy coating",
    price: "From AED 22",
    image: "/images/broasted.jpg",
    badge: "Crispy",
    rating: 4.7,
  },
  {
    name: "Fresh Juice Combos",
    description:
      "Selection of freshly squeezed fruit juices - orange, mango, lemon mint & more",
    price: "From AED 8",
    image: "/images/fresh-juice.jpg",
    badge: "Refreshing",
    rating: 4.9,
  },
  {
    name: "Arabic Meals",
    description:
      "Traditional Arabic platter with rice, grilled meats, salad, and bread",
    price: "From AED 35",
    image: "/images/arabic-meal.jpg",
    badge: "Family Size",
    rating: 4.8,
  },
];

export function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="bg-background py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <Flame className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Menu</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2">
              <span className="text-sm font-medium text-accent">Since 1994</span>
            </div>
          </div>

          <h2 className="mb-4 text-pretty text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Popular{" "}
            <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
              Menu Items
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Discover our most loved dishes, prepared fresh daily with premium
            ingredients and authentic flavors that keep our customers coming
            back for more.
          </p>
        </motion.div>

        {/* Featured Item - OG Shawaya */}
        {menuItems.filter(item => item.featured).map((item) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Card className="group overflow-hidden border-2 border-accent bg-gradient-to-br from-accent/10 to-primary/10 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/20">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[350px] bg-black/5 dark:bg-white/5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2 md:p-6 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-transparent md:bg-gradient-to-r" />
                  {item.badge && (
                    <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-accent to-orange px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      {item.badge}
                    </div>
                  )}
                  <div className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 backdrop-blur-sm">
                    <span className="text-xs font-bold text-accent">MUST TRY!</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <div className="mb-2 flex items-center gap-2">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="text-sm font-semibold text-foreground">{item.rating} Rating</span>
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-semibold text-accent">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-accent md:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Serving Since 1994</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">30+ Years Legacy</span>
                  </div>
                  <Button 
                    className="w-fit bg-gradient-to-r from-accent to-orange text-white hover:opacity-90"
                    asChild
                  >
                    <a
                      href="https://wa.me/97165691925?text=Hi%2C%20I%20would%20like%20to%20order%20the%20OG%20Shawaya"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order OG Shawaya Now
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Menu Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.filter(item => !item.featured).map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
            >
              <Card className="group h-full overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

                  {item.badge && (
                    <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {item.badge}
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                    <span className="text-xs font-semibold text-foreground">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                      {item.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a
              href="https://wa.me/97165691925?text=Hi%2C%20I%20would%20like%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now on WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50">
            <Download className="mr-2 h-5 w-5" />
            Download Full Menu (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
