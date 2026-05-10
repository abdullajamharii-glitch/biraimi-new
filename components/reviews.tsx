"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    location: "Al Jubail",
    rating: 5,
    text: "Best shawarma in Sharjah! The chicken is always fresh and perfectly seasoned. My family orders from here every weekend. Highly recommend their grilled chicken platter!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Fatima Hassan",
    location: "Al Qasimia",
    rating: 5,
    text: "Al Beraimi never disappoints! Great food at affordable prices. The staff is always friendly and the service is quick. Their fresh juices are amazing!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Mohammed Khalid",
    location: "Sharjah",
    rating: 5,
    text: "The broasted chicken here is incredibly crispy and flavorful. Perfect for late-night cravings. The hummus is also top-notch. Will definitely come again!",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "Sara Al Hashimi",
    location: "Al Jubail",
    rating: 4,
    text: "Love the family-friendly atmosphere. Great place to bring the kids. The zinger burger is amazing and the portion sizes are generous. Quick service too!",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Omar Rashid",
    location: "Al Qasimia",
    rating: 5,
    text: "I have been a regular customer for years. Consistent quality and taste every single time. The Arabic meal platter is perfect for gatherings. Best cafeteria in the area!",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "Layla Noor",
    location: "Sharjah",
    rating: 5,
    text: "Finally found a place that stays open late! Perfect for after-work meals. The club sandwich is my favorite - fresh ingredients and generous portions. Five stars!",
    date: "1 month ago",
  },
];

export function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="reviews" className="bg-card py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-primary">
              Customer Reviews
            </span>
          </div>

          <h2 className="mb-4 text-pretty text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our valued
            customers have to say about their experience at Al Beraimi
            Cafeteria.
          </p>
        </motion.div>

        {/* Reviews Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={currentIndex === 0}
              className="rounded-full border-border bg-background shadow-lg hover:bg-muted disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="rounded-full border-border bg-background shadow-lg hover:bg-muted disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Reviews Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <Card className="h-full border-border/50 bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <Quote className="h-8 w-8 text-primary/30" />
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-accent text-accent"
                                  : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="mb-6 leading-relaxed text-muted-foreground">
                        &ldquo;{review.text}&rdquo;
                      </p>

                      <div className="flex items-center justify-between border-t border-border/50 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange font-semibold text-primary-foreground">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {review.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {review.location}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={currentIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {[...Array(Math.ceil(reviews.length / itemsPerView))].map(
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i * itemsPerView)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      Math.floor(currentIndex / itemsPerView) === i
                        ? "bg-primary"
                        : "bg-muted"
                    }`}
                  />
                )
              )}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-6 text-center"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.8</span>
            <span className="text-muted-foreground">based on 500+ reviews</span>
          </div>
          <Button variant="outline" size="lg">
            View All Reviews on Google
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
