"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, Brain, Zap, Clock, MessageSquare, Heart, BookOpen } from "lucide-react"

export function TreatmentFocusSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const conditions = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Autism Spectrum Disorder (ASD)",
      shortDesc: "Supporting communication, behavior, and social connections",
      description:
        "Autism Spectrum Disorder affects how children communicate, behave, and connect with others. Every child with autism is unique, with their own strengths and challenges. With the right support and therapies, they can grow and thrive.",
      keyPoints: [
        "Individualized behavioral interventions",
        "Social skills development programs",
        "Communication enhancement strategies",
        "Sensory integration support",
      ],
      color: "primary",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "ADHD",
      shortDesc: "Managing attention, hyperactivity, and impulsivity",
      description:
        "Attention Deficit Hyperactivity Disorder can impact a child's ability to focus, sit still, and control impulses. Our comprehensive approach helps children develop coping strategies and improve their daily functioning.",
      keyPoints: [
        "Attention and focus training",
        "Behavioral management techniques",
        "Executive function skill building",
        "Parent and teacher collaboration",
      ],
      color: "secondary",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Developmental Delay",
      shortDesc: "Supporting overall growth and milestone achievement",
      description:
        "Developmental delays can affect various areas including motor skills, language, cognitive abilities, and social-emotional development. We provide targeted interventions to help children reach their developmental milestones.",
      keyPoints: [
        "Milestone-focused therapy plans",
        "Multi-disciplinary assessment",
        "Family-centered intervention",
        "Progress monitoring and adjustment",
      ],
      color: "accent",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Speech Delay",
      shortDesc: "Enhancing communication and language skills",
      description:
        "Speech and language delays can significantly impact a child's ability to communicate effectively. Our speech therapy programs are designed to improve articulation, language comprehension, and overall communication skills.",
      keyPoints: [
        "Articulation and pronunciation therapy",
        "Language comprehension building",
        "Alternative communication methods",
        "Parent coaching and home practice",
      ],
      color: "primary",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Epilepsy",
      shortDesc: "Comprehensive care for neurological wellness",
      description:
        "Children with epilepsy may face unique developmental and learning challenges. Our team provides specialized support to address both the medical and developmental aspects of epilepsy care.",
      keyPoints: [
        "Seizure management support",
        "Cognitive development assistance",
        "Safety and independence training",
        "Educational accommodation planning",
      ],
      color: "secondary",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning Disabilities",
      shortDesc: "Personalized educational support and strategies",
      description:
        "Learning disabilities can make it challenging for children to acquire academic skills at the expected pace. We develop individualized strategies to help children overcome learning barriers and succeed academically.",
      keyPoints: [
        "Learning style assessment",
        "Customized educational strategies",
        "Study skills development",
        "Academic confidence building",
      ],
      color: "accent",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        accent: "bg-primary",
      },
      secondary: {
        bg: "bg-secondary/10",
        text: "text-secondary",
        border: "border-secondary/20",
        accent: "bg-secondary",
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/20",
        accent: "bg-accent",
      },
    }
    return colorMap[color as keyof typeof colorMap]
  }

  return (
    <section id="treatment" className="py-20 bg-gradient-to-b from-background to-muted/20">
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
            Treatment <span className="text-primary">Focus Areas</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in supporting children with various developmental challenges, providing personalized care for
            each unique condition.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {conditions.map((condition, index) => {
            const isActive = activeAccordion === index
            const colors = getColorClasses(condition.color)

            return (
              <motion.div
                key={condition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`
                  border-2 rounded-2xl overflow-hidden transition-all duration-300
                  ${isActive ? `${colors.border} shadow-lg` : "border-border shadow-sm"}
                  ${isActive ? colors.bg : "bg-card"}
                `}
              >
                {/* Accordion Header */}
                <motion.button
                  onClick={() => setActiveAccordion(isActive ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                        ${isActive ? colors.accent : colors.bg}
                      `}
                    >
                      <div className={isActive ? "text-white" : colors.text}>{condition.icon}</div>
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold transition-colors duration-300 ${
                          isActive ? colors.text : "text-foreground"
                        }`}
                      >
                        {condition.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{condition.shortDesc}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`transition-colors duration-300 ${isActive ? colors.text : "text-muted-foreground"}`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </motion.button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-border/50 pt-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Description */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">About This Condition</h4>
                              <p className="text-muted-foreground leading-relaxed mb-4">{condition.description}</p>
                            </div>

                            {/* Key Points */}
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">Our Approach</h4>
                              <ul className="space-y-2">
                                {condition.keyPoints.map((point, pointIndex) => (
                                  <motion.li
                                    key={pointIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: pointIndex * 0.1 }}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className={`w-2 h-2 rounded-full mt-2 ${colors.accent}`}></div>
                                    <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="mt-6 pt-4 border-t border-border/50">
                            <div className="flex flex-col sm:flex-row gap-3">
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  const element = document.querySelector("#appointment")
                                  if (element) {
                                    element.scrollIntoView({ behavior: "smooth" })
                                  }
                                }}
                                className={`
                                  px-6 py-2 rounded-full font-medium transition-all duration-200
                                  ${colors.accent} text-white hover:opacity-90
                                `}
                              >
                                Schedule Assessment
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.open("tel:+919821070068")}
                                className={`
                                  px-6 py-2 rounded-full font-medium border-2 transition-all duration-200
                                  ${colors.border} ${colors.text} hover:${colors.bg}
                                `}
                              >
                                Discuss with Expert
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Not Sure Which Treatment is Right?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Every child is unique, and so are their needs. Our experienced team will conduct a comprehensive
              assessment to determine the best treatment approach for your child.
            </p>
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
              Get Professional Assessment
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
