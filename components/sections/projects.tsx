"use client"

import { motion } from "framer-motion"
import { Github, Layers, Brain, Code2 } from "lucide-react"

const projects = [
  {
    title: "HireSmart",
    description:
      "A full-stack Applicant Tracking System (ATS) designed to support HR teams by automating candidate screening interactions and optimizing recruitment workflows.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    icon: Layers,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Candidate registration & screening workflows",
      "User authentication (login/signup)",
      "Form handling with GET/POST methods",
      "Automated initial candidate interactions",
    ],
  },
  {
    title: "Explainable AI on Myocardial Infarction",
    description:
      "An explainable machine learning model to predict myocardial infarction risk using clinical data and ensemble models, delivering interpretable, healthcare-focused insights.",
    technologies: ["Python", "XGBoost", "LightGBM", "scikit-learn"],
    icon: Brain,
    color: "from-emerald-500 to-teal-500",
    features: [
      "Ensemble models (XGBoost, LightGBM)",
      "Synthetic data engineering",
      "Model evaluation (ROC-AUC, F1-score)",
      "Feature importance techniques",
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl"
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
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wide text-muted-foreground bg-accent/50 rounded-full border border-border/50">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A selection of projects that highlight my approach to building efficient,
             scalable and user-centric applications across full-stack and AI domains.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              <div className={`absolute -inset-px bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-sm`} />
              
              <div className="relative bg-card border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-border transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-0.5`}>
                      <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                        <project.icon className="h-6 w-6 text-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-accent/50 border border-border/50 rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/50 border border-border/50 rounded-lg text-sm text-muted-foreground">
                        <Github className="h-4 w-4" />
                        <span>Available on GitHub</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 p-4 bg-accent/30 border border-border/50 rounded-xl">
            <Code2 className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              More projects available on{" "}
              <a
                href="https://github.com/Coder130804"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:underline"
              >
                GitHub
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
