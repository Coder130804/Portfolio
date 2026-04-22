"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  Github,
  ExternalLink,
  Code2,
  Database,
  Terminal,
  Award
} from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "about", label: "About Me", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "certifications", label: "Certifications", icon: Award },
]

const skills = {
  languages: [
    { name: "Java", proficiency: "Advanced" },
    { name: "Python", proficiency: "Intermediate" },
    { name: "C", proficiency: "Intermediate" },
    { name: "MATLAB", proficiency: "Familiar" },
  ],
  web: [
    { name: "HTML/CSS", proficiency: "Advanced" },
    { name: "JavaScript", proficiency: "Intermediate" },
    { name: "React", proficiency: "Intermediate" },
    { name: "Node.js", proficiency: "Intermediate" },
  ],
  databases: [
    { name: "SQL", proficiency: "Advanced" },
    { name: "MongoDB", proficiency: "Intermediate" },
    { name: "Oracle DB", proficiency: "Intermediate" },
  ],
  tools: [
    "Git/GitHub",
    "VS Code",
    "Eclipse",
    "Jupyter Notebook",
    "Linux",
  ],
}

const proficiencyColors: Record<string, string> = {
  "Advanced": "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  "Intermediate": "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
  "Familiar": "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30",
}

const certifications = [
  { name: "Business Analytics", issuer: "University of Colorado Boulder (Coursera)" },
  { name: "Strategy and Game Theory for Management", issuer: "IIM Ahmedabad (Coursera)" },
  { name: "ATS Functionality", issuer: "Keka Academy" },
  { name: "Cybersecurity Analyst", issuer: "TCS (Forage)" },
]

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/Coder130804", color: "hover:text-foreground" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/asom", color: "hover:text-blue-500" },
  { name: "Email", icon: Mail, href: "mailto:somarpita5@gmail.com", color: "hover:text-emerald-500" },
]

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/5 to-emerald-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wide text-muted-foreground bg-accent/50 rounded-full border border-border/50">
            Get to Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-80 flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border/50 rounded-2xl p-6 space-y-6">
                <div className="relative mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground">AS</span>
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-border/50 animate-spin-slow" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold">Arpita Som</h3>
                  <p className="text-muted-foreground text-sm mt-1">Software Developer</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>Bhubaneswar, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 flex-shrink-0" />
                    <span>KIIT University</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">somarpita5@gmail.com</span>
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-4 border-t border-border/50">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "p-2.5 rounded-full bg-accent/50 border border-border/50 text-muted-foreground transition-colors",
                        social.color
                      )}
                      whileHover={{ y: -2, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1"
          >
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    activeTab === tab.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent border border-border/50 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      I&apos;m a pre-final year Computer Science Engineering student at KIIT University, 
                      passionate about building efficient and scalable software solutions. My journey 
                      in tech has been driven by curiosity and a constant desire to learn.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With hands-on experience in Java, backend development, and web technologies, 
                      I&apos;ve contributed to building systems that streamline HR processes and enhance 
                      hiring efficiency. I bring strength in workflow optimization, effective communication, 
                      and task coordination.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Currently, I&apos;m focused on expanding my skills in distributed systems and 
                      exploring the intersection of AI and software engineering. When I&apos;m not coding, 
                      you&apos;ll find me mentoring peers and leading learning sessions at E-Labs, KIIT.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                    {[
                      { label: "CGPA", value: "8.83" },
                      { label: "Projects", value: "3" },
                      { label: "Certifications", value: "4+" },
                      { label: "Experience", value: "3 mo" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-4 rounded-xl bg-accent/30 border border-border/50"
                      >
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Proficiency Legend */}
                  <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-border/50">
                    <span className="text-xs text-muted-foreground">Proficiency:</span>
                    {Object.entries(proficiencyColors).map(([level, colors]) => (
                      <span
                        key={level}
                        className={cn("px-2 py-0.5 text-xs font-medium rounded border", colors)}
                      >
                        {level}
                      </span>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Code2 className="h-5 w-5 text-blue-500" />
                        <h4 className="font-medium">Programming Languages</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.languages.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group relative"
                          >
                            <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border/50 rounded-lg hover:border-blue-500/50 transition-colors">
                              <span className="text-sm font-medium text-foreground">{skill.name}</span>
                              <span className={cn("px-1.5 py-0.5 text-[10px] font-medium rounded border", proficiencyColors[skill.proficiency])}>
                                {skill.proficiency}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <ExternalLink className="h-5 w-5 text-emerald-500" />
                        <h4 className="font-medium">Web Technologies</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.web.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group relative"
                          >
                            <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border/50 rounded-lg hover:border-emerald-500/50 transition-colors">
                              <span className="text-sm font-medium text-foreground">{skill.name}</span>
                              <span className={cn("px-1.5 py-0.5 text-[10px] font-medium rounded border", proficiencyColors[skill.proficiency])}>
                                {skill.proficiency}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Database className="h-5 w-5 text-amber-500" />
                        <h4 className="font-medium">Databases</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.databases.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group relative"
                          >
                            <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border/50 rounded-lg hover:border-amber-500/50 transition-colors">
                              <span className="text-sm font-medium text-foreground">{skill.name}</span>
                              <span className={cn("px-1.5 py-0.5 text-[10px] font-medium rounded border", proficiencyColors[skill.proficiency])}>
                                {skill.proficiency}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Terminal className="h-5 w-5 text-purple-500" />
                        <h4 className="font-medium">Tools & Platforms</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skills.tools.map((tool, index) => (
                          <motion.span
                            key={tool}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-2 text-sm bg-card border border-border/50 rounded-lg text-foreground hover:border-purple-500/50 transition-colors"
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "certifications" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-4"
                >
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                      <div className="relative flex items-start gap-4 p-4 bg-card border border-border/50 rounded-xl hover:border-border transition-colors">
                        <div className="flex-shrink-0 p-2.5 bg-accent/50 rounded-lg">
                          <Award className="h-5 w-5 text-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
