"use client"

import { motion } from "framer-motion"
import { Brain, MessageCircle, Hand, GraduationCap, Activity } from "lucide-react"
import { useState } from "react"

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "ABA Therapy",
      subtitle: "Applied Behavior Analysis",
      description:
        "Evidence-based therapy that helps children with autism develop social, communication, and learning skills through positive reinforcement techniques.",
      color: "primary",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Speech Therapy",
      subtitle: "Communication Skills",
      description:
        "Comprehensive speech and language therapy to help children improve their communication abilities, articulation, and language comprehension.",
      color: "secondary",
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: "Occupational Therapy",
      subtitle: "Daily Living Skills",
      description:
        "Specialized therapy focused on developing fine motor skills, sensory processing, and daily living activities to promote independence.",
      color: "accent",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Special Education",
      subtitle: "Personalized Learning",
      description:
        "Individualized educational programs designed to meet each child's unique learning needs and help them achieve academic success.",
      color: "primary",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Physiotherapy",
      subtitle: "Movement & Coordination",
      description:
        "Physical therapy services to improve gross motor skills, balance, coordination, and overall physical development in children.",
      color: "secondary",
    },
  ]

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colorMap = {
      primary: {
        bg: isHovered ? "bg-primary" : "bg-primary/10",
        text: isHovered ? "text-primary-foreground" : "text-primary",
        border: "border-primary/20",
        icon: isHovered ? "bg-primary-foreground/20" : "bg-primary/20",
      },
      secondary: {
        bg: isHovered ? "bg-secondary" : "bg-secondary/10",
        text: isHovered ? "text-secondary-foreground" : "text-secondary",
        border: "border-secondary/20",
        icon: isHovered ? "bg-secondary-foreground/20" : "bg-secondary/20",
      },
      accent: {
        bg: isHovered ? "bg-accent" : "bg-accent/10",
        text: isHovered ? "text-accent-foreground" : "text-accent",
        border: "border-accent/20",
        icon: isHovered ? "bg-accent-foreground/20" : "bg-accent/20",
      },
    }
    return colorMap[color as keyof typeof colorMap]
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive therapeutic services designed to support your child's development and help them reach
            their full potential.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredCard === index
            const colors = getColorClasses(service.color, isHovered)

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative group cursor-pointer perspective-1000`}
              >
                <div
                  className={`
                    relative h-full p-8 rounded-2xl border-2 transition-all duration-500 transform-gpu
                    ${colors.bg} ${colors.border}
                    shadow-lg hover:shadow-2xl
                    ${isHovered ? "shadow-2xl" : ""}
                  `}
                >
                  {/* Icon */}
                  <motion.div
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300
                      ${colors.icon}
                    `}
                    animate={{
                      rotate: isHovered ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={colors.text}>{service.icon}</div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3
                        className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                          isHovered ? "text-current" : "text-foreground"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isHovered ? "text-current opacity-90" : colors.text
                        }`}
                      >
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description - slides in on hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className={`text-sm leading-relaxed pt-2 border-t transition-colors duration-300 ${
                          isHovered
                            ? "text-current opacity-90 border-current/20"
                            : "text-muted-foreground border-border"
                        }`}
                      >
                        {service.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-current"
                    initial={{ scale: 0 }}
                    animate={{ scale: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <div className="absolute top-4 right-4 w-20 h-20 border border-current rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border border-current rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our team of experienced therapists is here to support your child's journey. Contact us today to learn more
              about our services and schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#appointment")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-colors duration-200"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("tel:+919821070068")}
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-full font-semibold transition-all duration-200"
              >
                Call Us Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
