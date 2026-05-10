"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#branches", label: "Branches" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

function OpenStatus() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      // Open from 11:00 AM (11) to 4:00 AM (4)
      // This means open if hours >= 11 OR hours < 4
      setIsOpen(hours >= 11 || hours < 4);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2.5 w-2.5 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
      />
      <span className="text-sm font-medium text-foreground">
        {isOpen ? "Open Now" : "Closed"}
      </span>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden bg-muted/50 py-2 md:block">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+971 6 569 1925</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Daily: 11:00 AM – 4:00 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Al Jubail & Al Qasimia, Sharjah</span>
            </div>
          </div>
          <OpenStatus />
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 shadow-lg shadow-primary/10 backdrop-blur-md"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange font-bold text-primary-foreground">
                AB
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-accent" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">Al Beraimi</h1>
              <p className="text-xs text-muted-foreground">Cafeteria</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+97165691925">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <a
                href="https://wa.me/97165691925"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border bg-background lg:hidden"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="mb-4 flex items-center justify-between">
                  <OpenStatus />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>11AM – 4AM</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 flex flex-col gap-2">
                    <Button variant="outline" asChild>
                      <a href="tel:+97165691925">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <a
                        href="https://wa.me/97165691925"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
