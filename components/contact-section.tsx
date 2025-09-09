"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary/5 to-muted/20">
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
            Contact <span className="text-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions and support your family's journey. Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Visit Our Center</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A-244 First Floor Ambedkar Colony,
                    <br />
                    Near Andheria Mor, Opposite Chattarpur Metro Station,
                    <br />
                    New Delhi, 110074
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                </div>
                <p className="text-muted-foreground">+91 9821070068</p>
              </div>

              <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground">Email</h4>
                </div>
                <p className="text-muted-foreground">info@blessedkids.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground">Operating Hours</h4>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:bg-accent/80 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            <div className="h-full min-h-[500px] bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Find us easily at our convenient location near Chattarpur Metro Station
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/?q=A-244+First+Floor+Ambedkar+Colony+Near+Andheria+Mor+Opposite+Chattarpur+Metro+Station+New+Delhi+110074",
                    )
                  }
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                >
                  Open in Google Maps
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
