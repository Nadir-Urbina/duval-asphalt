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
            className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-lg border border-zinc-800"
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-lg mb-6">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Buy Asphalt Online</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Purchase high-quality asphalt products directly from our online store. Fast delivery and competitive
              pricing for all your project needs.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-6 w-full sm:w-auto">
              Shop Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-lg border border-zinc-800"
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-lg mb-6">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Request a Quote</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Need a custom solution for your project? Contact our team for a detailed quote tailored to your specific
              requirements.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-6 w-full sm:w-auto">
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

