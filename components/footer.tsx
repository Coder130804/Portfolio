"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Coder130804", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/asom", label: "LinkedIn" },
  { icon: Mail, href: "mailto:somarpita5@gmail.com", label: "Email" },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("#home")
              }}
              className="inline-block text-xl font-semibold tracking-tight mb-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Arpita Som
              </span>
            </motion.a>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in India
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-4 w-4" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Arpita Som. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
