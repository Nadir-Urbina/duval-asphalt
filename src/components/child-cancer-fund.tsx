"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ChildCancerFund() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary italic text-center md:text-left leading-tight">
                Duval Asphalt is Proudly Partnered with the Child Cancer Fund
              </h2>
              <p className="mt-6 text-white/60 text-lg max-w-2xl">
                Together, we're making a difference in the lives of children and families affected by cancer in our community.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-72 md:w-80 lg:w-96 aspect-[2/1]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl" />
              <div className="relative bg-white rounded-xl p-6 h-full">
                <Image
                  src="/images/child-cancer-fund.jpg"
                  alt="Child Cancer Fund"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 