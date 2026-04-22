"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    type: "work",
    title: "Innovation & Development Intern",
    company: "Tata Steel Foundation",
    location: "Hybrid",
    duration: "June 2025 - August 2025",
    description: [
      "Developed understanding of recruitment workflows, data processing and candidate screening using an Applicant Tracking System (ATS)",
      "Built HireSmart, a full-stack ATS web application using React, Node.js, Express, and MongoDB",
      "Implemented user authentication modules (login/signup) and form handling using GET/POST methods",
    ],
  },
  {
    type: "work",
    title: "Java Team Lead",
    company: "E-Labs, Student Society KIIT",
    location: "KIIT",
    duration: "November 2025 - Present",
    description: [
      "Managed event coordination and execution for Java-related workshops and hackathons",
      "Mentored peers and led structured learning sessions to enhance collaborative skill development",
      "Facilitated knowledge sharing and hands-on coding sessions for junior members",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Technology (Computer Science Engineering)",
    institution: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    duration: "2023 - Present",
    grade: "CGPA: 8.83",
  },
  {
    degree: "Senior School Certificate Examination (ISC | XII PCM)",
    institution: "Loyola School, Jamshedpur",
    duration: "2022",
    grade: "Percentage: 93%",
  },
  {
    degree: "All India Secondary School Examination (ICSE | X)",
    institution: "Loyola School, Jamshedpur",
    duration: "2020",
    grade: "Percentage: 91%",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden bg-accent/20">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-blue-500/10 to-cyan-500/10 blur-3xl"
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
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative">
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/50 via-border to-transparent" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-blue-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                      <div className="relative bg-card border border-border/50 rounded-xl p-5 hover:border-border transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-semibold text-foreground">{exp.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{exp.company}</span>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-blue-500/10 text-blue-500 dark:text-blue-400 rounded-full">
                            <Calendar className="h-3 w-3" />
                            {exp.duration}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>

                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <GraduationCap className="h-5 w-5 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="relative">
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-emerald-500/50 via-border to-transparent" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-emerald-500 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                      <div className="relative bg-card border border-border/50 rounded-xl p-5 hover:border-border transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 rounded-full">
                            <Calendar className="h-3 w-3" />
                            {edu.duration}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-accent/50 text-foreground rounded-md">
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
