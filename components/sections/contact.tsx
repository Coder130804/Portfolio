"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MapPin, Send, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  {
    name: "Email",
    value: "somarpita5@gmail.com",
    href: "mailto:somarpita5@gmail.com",
    icon: Mail,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/asom",
    href: "https://linkedin.com/in/asom",
    icon: Linkedin,
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "GitHub",
    value: "github.com",
    href: "https://github.com/Coder130804",
    icon: Github,
    color: "from-gray-600 to-gray-400",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-accent/20">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wide text-muted-foreground bg-background/80 rounded-full border border-border/50">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            I&apos;m currently open to new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to discuss a project or just say hi!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <div className={`absolute -inset-px bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm`} />
                <div className="relative bg-card border border-border/50 rounded-xl p-5 hover:border-border transition-colors text-center">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${link.color} rounded-xl mb-3`}>
                    <link.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{link.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{link.value}</p>
                  <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
            <div className="relative bg-card border border-border/50 rounded-2xl p-8 sm:p-10 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                Bhubaneswar, India
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to build something amazing?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Whether you have a project in mind or just want to connect,
                I&apos;d love to hear from you. Let&apos;s create something impactful together.
              </p>
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8"
                asChild
              >
                <a href="mailto:somarpita5@gmail.com" className="inline-flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Me an Email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
