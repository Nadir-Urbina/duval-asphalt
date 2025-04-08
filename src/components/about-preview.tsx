"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <Image src="/images/facility-aerial.jpeg" alt="Duval Asphalt Facility" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-primary text-black font-bold py-2 px-4 inline-block mb-2">Since 1970</div>
                <h3 className="text-2xl font-bold text-white">
                  More than 50 Years of Service is Your Guarantee of Quality
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Duval Asphalt</h2>
            <div className="h-1 w-20 bg-primary mb-8" />

            <p className="text-lg text-muted-foreground mb-6">
              For over half a century, the members of Duval Asphalt have combined extensive asphalt paving experience
              with the ongoing development of pavement technology to ensure the highest quality products and
              workmanship.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Today, Duval Asphalt continues to grow and remains on the cutting edge of pavement technology. We are
              proud to be Northeast Florida's leader in asphalt manufacturing and contracting with multiple
              state-of-the-art facilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-black font-bold">
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 hover:border-white/40">
                Watch Our Video
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

