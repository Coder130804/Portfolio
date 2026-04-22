"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  { text: "Software Developer", icon: "{ }" },
  { text: "Backend Engineer", icon: "<>" },
  { text: "Java Developer", icon: "//" },
  { text: "Problem Solver", icon: "?!" },
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setIsAnimating(false)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-emerald-500/20 to-teal-500/20 blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wide text-muted-foreground bg-accent/50 rounded-full border border-border/50">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
          >
            Hi, I&apos;m{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
                Arpita Som
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 h-12 sm:h-14 flex items-center justify-center"
          >
            <div className="relative inline-flex items-center gap-3 px-5 py-2.5 bg-accent/30 border border-border/50 rounded-full overflow-hidden">
              {/* Animated background shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -z-10"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Code symbol */}
              <motion.span
                key={`icon-${roleIndex}`}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl font-mono text-blue-500 dark:text-blue-400 font-semibold"
              >
                {roles[roleIndex].icon}
              </motion.span>
              
              {/* Role text */}
              <motion.span
                key={`text-${roleIndex}`}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ 
                  opacity: isAnimating ? 0 : 1, 
                  y: isAnimating ? -10 : 0,
                  filter: isAnimating ? "blur(4px)" : "blur(0px)"
                }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl font-medium text-foreground"
              >
                {roles[roleIndex].text}
              </motion.span>
              
              {/* Blinking underscore */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-lg sm:text-xl text-emerald-500 dark:text-emerald-400 font-mono"
              >
                _
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Pre-final year CSE student at KIIT, skilled in Java, backend development, 
            and web technologies. Passionate about building scalable systems and 
            solving real-world problems through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="group bg-foreground text-background hover:bg-foreground/90 px-8"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 border-border/50 hover:bg-accent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/Coder130804", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/asom", label: "LinkedIn" },
              { icon: Mail, href: "mailto:somarpita5@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-accent/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="h-6 w-6" />
        <span className="sr-only">Scroll to about</span>
      </motion.button>
    </section>
  )
}
