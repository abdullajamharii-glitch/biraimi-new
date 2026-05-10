"use client";

import { motion } from "framer-motion";

const deliveryPlatforms = [
  { name: "Zomato", color: "#E23744" },
  { name: "Talabat", color: "#FF5A00" },
  { name: "Deliveroo", color: "#00CCBC" },
  { name: "Careem", color: "#4AB610" },
  { name: "Noon Food", color: "#FEEE00" },
  { name: "Smiles", color: "#FF5F00" },
  { name: "Instashop", color: "#FF6B00" },
];

export function DeliveryMarquee() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-primary/20 via-orange/20 to-accent/20 py-4">
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* First set */}
          {[...deliveryPlatforms, ...deliveryPlatforms].map((platform, index) => (
            <div
              key={`first-${index}`}
              className="mx-8 flex items-center gap-3"
            >
              <span className="text-lg font-bold text-foreground md:text-xl">
                Available on
              </span>
              <span
                className="rounded-lg px-4 py-2 text-lg font-bold text-white md:text-xl"
                style={{ backgroundColor: platform.color }}
              >
                {platform.name}
              </span>
              <span className="text-2xl text-primary">•</span>
              <span className="text-lg font-semibold text-accent md:text-xl">
                Order The OG Shawaya Now!
              </span>
              <span className="text-2xl text-orange">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
