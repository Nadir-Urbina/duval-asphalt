"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/images/facility-aerial.jpeg",
    title: "State-of-the-Art Facilities",
    subtitle: "Advanced Technology",
    description:
      "Northeast Florida's leader in asphalt manufacturing and contracting with multiple state-of-the-art facilities.",
  },
  {
    id: 2,
    image: "/images/roll-off-truck.png",
    title: "Roll-Off Container Services",
    subtitle: "Flexible Scheduling",
    description: "Clean asphalt and concrete disposal solutions with quick turnaround times.",
  },
  {
    id: 3,
    image: "/images/road-project.png",
    title: "Quality Asphalt Products",
    subtitle: "For Over 50 Years",
    description: "Ensuring the highest quality products and workmanship for all your paving needs.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative h-full w-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="h-2 w-20 bg-primary mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slides[currentSlide].title}</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">{slides[currentSlide].subtitle}</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">{slides[currentSlide].description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-6">
                Buy Asphalt Online
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Request a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

