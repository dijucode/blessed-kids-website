"use client"

import { motion } from "framer-motion"
import { Heart, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  const timelineItems = [
    {
      year: "2001",
      title: "GenLife",
      description: "Our healthcare journey began with a vision to improve lives through quality healthcare services.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "GenHealth",
      description: "Evolved into GenHealth, expanding our expertise and commitment to comprehensive healthcare.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Blessed Kids",
      description: "Today we continue as Blessed Kids, specializing in child therapy and developmental support.",
      icon: <Heart className="w-6 h-6" />,
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
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
            About <span className="text-primary">Blessed Kids</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Belief</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Blessed Kids, we believe every child is a gift—full of promise, potential, and purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We provide personalized care using evidence-based therapies in a safe, engaging, child-friendly
                environment. Our multidisciplinary approach ensures that each child receives the comprehensive support
                they need to thrive and reach their full potential.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-secondary/10 rounded-xl p-6 border border-secondary/20"
              >
                <Award className="w-8 h-8 text-secondary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Evidence-Based</h4>
                <p className="text-sm text-muted-foreground">Proven therapeutic approaches tailored for each child</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <Users className="w-8 h-8 text-accent mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Multidisciplinary</h4>
                <p className="text-sm text-muted-foreground">Comprehensive team of specialized therapists</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/diverse-children-in-colorful-therapy-room-with-the.jpg"
                alt="Children and therapists in a warm, welcoming therapy environment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-secondary-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-accent-foreground" />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Our Healthcare Journey</h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block"></div>

            <div className="space-y-12 md:space-y-16">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-left`}
                  >
                    <div className="bg-background rounded-xl p-6 shadow-md border border-border">
                      <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
                      <h4 className="text-xl font-semibold text-foreground mb-3">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                      <div className="text-primary-foreground">{item.icon}</div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
