"use client"

import { motion } from "framer-motion"
import { Heart, Users, Shield, Smile, Home, TrendingUp, Award, MapPin } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Care",
      description: "Individualized therapy plans tailored to each child's unique needs and goals",
      color: "primary",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Skilled & Experienced Team",
      description: "Experts in child development with years of specialized training and experience",
      color: "secondary",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comprehensive Support",
      description: "Holistic approach covering communication, learning, and life skills development",
      color: "accent",
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Child-Friendly Approach",
      description: "Fun and engaging methods that make therapy enjoyable and effective",
      color: "primary",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Nurturing Environment",
      description: "Secure, welcoming spaces designed specifically for children's comfort and growth",
      color: "secondary",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Ongoing Progress Tracking",
      description: "Regular assessments and detailed progress reports to monitor your child's development",
      color: "accent",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassionate Care",
      description: "A warm, encouraging atmosphere where every child feels valued and supported",
      color: "primary",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "bg-primary/10",
        text: "text-primary",
        border: "border-primary/20",
        icon: "bg-primary",
      },
      secondary: {
        bg: "bg-secondary/10",
        text: "text-secondary",
        border: "border-secondary/20",
        icon: "bg-secondary",
      },
      accent: {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/20",
        icon: "bg-accent",
      },
    }
    return colorMap[color as keyof typeof colorMap]
  }

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-muted/20 to-background">
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
            Why Choose <span className="text-primary">Blessed Kids</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're committed to providing exceptional care that makes a real difference in your child's life and your
            family's journey.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const colors = getColorClasses(reason.color)

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className={`
                  group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  ${colors.bg} ${colors.border} hover:shadow-xl
                  bg-card hover:${colors.bg}
                `}
              >
                {/* Icon */}
                <motion.div
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300
                    ${colors.icon} group-hover:scale-110
                  `}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">{reason.icon}</div>
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 text-foreground group-hover:${colors.text}`}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-current opacity-10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border border-current opacity-20 rounded-full"></div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Services Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-border"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Icon and Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Home className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Flexible Service Options</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We also offer <span className="font-semibold text-primary">home sessions</span> and{" "}
                <span className="font-semibold text-secondary">outdoor activities</span> to enhance children's skills
                and confidence in real-world environments.
              </p>
            </div>

            {/* Features */}
            <div className="flex-1 grid sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-primary/10 rounded-xl p-6 border border-primary/20"
              >
                <Home className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Home Sessions</h4>
                <p className="text-sm text-muted-foreground">Therapy in your child's familiar environment</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-secondary/10 rounded-xl p-6 border border-secondary/20"
              >
                <MapPin className="w-8 h-8 text-secondary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Outdoor Activities</h4>
                <p className="text-sm text-muted-foreground">Real-world skill building and confidence</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Child's Journey?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join hundreds of families who have chosen Blessed Kids for their child's developmental needs. Let's work
              together to unlock your child's potential.
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
                Book Your Consultation
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
