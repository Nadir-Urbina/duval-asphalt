"use client"

import { motion } from "framer-motion"
import { Truck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/road-project.png')] bg-cover bg-center opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-zinc-900/80 backdrop-blur-sm p-8 rounded-lg border border-zinc-800 group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0" />
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-lg mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/30 group-hover:rotate-6">
                <Truck className="h-8 w-8 text-primary group-hover:text-yellow-400 transition-all duration-500 group-hover:scale-110" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 transform group-hover:translate-x-1">Buy Asphalt Online</h2>
              <p className="text-lg text-muted-foreground mb-8 group-hover:text-foreground/80 transition-all duration-300 transform group-hover:translate-x-1">
                Purchase high-quality asphalt products directly from our online store. Fast delivery and competitive
                pricing for all your project needs.
              </p>
              <Button className="relative overflow-hidden bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-6 w-full sm:w-auto group-hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Shop Now
                  <Truck className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-lg border border-zinc-800 group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-lg mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
              <Phone className="h-8 w-8 text-primary group-hover:text-yellow-400 transition-colors duration-300" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">Request a Quote</h2>
            <p className="text-lg text-muted-foreground mb-8 group-hover:text-foreground/80 transition-colors duration-300">
              Need a custom solution for your project? Contact our team for a detailed quote tailored to your specific
              requirements.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-6 w-full sm:w-auto transform transition-transform duration-300 hover:scale-105">
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

