"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Menu", href: "#menu" },
    { label: "Branches", href: "#branches" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  menu: [
    { label: "Grilled Chicken", href: "#menu" },
    { label: "Shawarma", href: "#menu" },
    { label: "Burgers", href: "#menu" },
    { label: "Sandwiches", href: "#menu" },
    { label: "Arabic Meals", href: "#menu" },
    { label: "Fresh Juices", href: "#menu" },
  ],
  branches: [
    { label: "Al Jubail Branch", href: "#branches" },
    { label: "Al Qasimia Branch", href: "#branches" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-card">
      {/* Main Footer */}
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="#home" className="mb-6 inline-flex items-center gap-2">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange font-bold text-primary-foreground">
                  AB
                </div>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-accent" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">Al Beraimi</h2>
                <p className="text-xs text-muted-foreground">Cafeteria</p>
              </div>
            </Link>

            <p className="mb-6 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Sharjah&apos;s favorite cafeteria serving delicious grilled
              chicken, shawarma, burgers, fresh juices, and authentic Arabic
              meals since day one.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+97165691925"
                  className="transition-colors hover:text-primary"
                >
                  +971 6 569 1925
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@alberaimi.ae"
                  className="transition-colors hover:text-primary"
                >
                  info@alberaimi.ae
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>Daily: 11:00 AM – 4:00 AM</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Al Jubail & Al Qasimia, Sharjah, UAE</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Our Menu</h3>
            <ul className="space-y-2">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches & Social */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Our Branches</h3>
            <ul className="mb-6 space-y-2">
              {footerLinks.branches.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-6 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Al Beraimi Cafeteria. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/97165691925?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="sr-only">Order on WhatsApp</span>
    </motion.a>
  );
}
