"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const branches = [
  {
    name: "Main Branch",
    area: "Al Jubail, Sharjah",
    address: "28 Qasis Bin Abi Sa'asa'ah St, Al Jubail, Sharjah, UAE",
    phone: "+971 6 569 1925",
    phoneClean: "97165691925",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=28+Qasis+Bin+Abi+Sasaah+St+Al+Jubail+Sharjah+UAE",
    hours: "11:00 AM – 4:00 AM",
    isMain: true,
  },
  {
    name: "Branch 1",
    area: "Al Qasimia, Sharjah",
    address: "Al Qasimia, Sharjah, UAE",
    phone: "+971 6 569 1925",
    phoneClean: "97165691925",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Al+Qasimia+Sharjah+UAE",
    hours: "11:00 AM – 4:00 AM",
    isMain: false,
  },
];

export function Branches() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="branches" className="bg-card py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Our Locations
            </span>
          </div>

          <h2 className="mb-4 text-pretty text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Find Us in{" "}
            <span className="bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
              Sharjah
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            Visit any of our conveniently located branches across Sharjah. We
            are open late to serve you delicious food whenever you crave it.
          </p>
        </motion.div>

        {/* Branches Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card
                className={`relative h-full overflow-hidden border-border/50 bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 ${
                  branch.isMain ? "ring-2 ring-primary/30" : ""
                }`}
              >
                {branch.isMain && (
                  <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Main Branch
                  </div>
                )}

                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="mb-1 text-xl font-bold text-foreground">
                      {branch.name}
                    </h3>
                    <p className="text-lg text-primary">{branch.area}</p>
                  </div>

                  <div className="mb-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Address
                        </p>
                        <p className="text-foreground">{branch.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Phone
                        </p>
                        <a
                          href={`tel:${branch.phoneClean}`}
                          className="text-foreground transition-colors hover:text-primary"
                        >
                          {branch.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Opening Hours
                        </p>
                        <p className="text-foreground">{branch.hours}</p>
                        <p className="text-sm text-green-500">Open 7 days a week</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href={`tel:${branch.phoneClean}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Google Maps
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-green-600/50 text-green-600 hover:bg-green-600/10"
                      asChild
                    >
                      <a
                        href={`https://wa.me/${branch.phoneClean}?text=Hi%2C%20I%20am%20at%20${encodeURIComponent(branch.area)}%20and%20would%20like%20to%20order`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 overflow-hidden rounded-2xl border border-border/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57759.61037310965!2d55.36538305820313!3d25.35555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Beraimi Cafeteria Locations"
            className="grayscale transition-all duration-300 hover:grayscale-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
