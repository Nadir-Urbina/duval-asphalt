"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Highway Resurfacing Project",
    image: "/images/road-project.png",
  },
  {
    id: 2,
    title: "Roll-Off Container Services",
    image: "/images/roll-off-truck.png",
  },
  {
    id: 3,
    title: "Asphalt Production Facility",
    image: "/images/facility-aerial.jpeg",
  },
  {
    id: 4,
    title: "Parking Lot Paving",
    image: "/images/gallery-4.jpg",
  },
  {
    id: 5,
    title: "Commercial Development",
    image: "/images/gallery-5.jpg",
  },
  {
    id: 6,
    title: "Residential Subdivision",
    image: "/images/gallery-6.jpg",
  },
]

export function ProjectsGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
            <div className="h-1 w-20 bg-primary mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our completed projects showcasing our expertise in asphalt paving, maintenance, and construction.
            </p>
          </div>
          <div className="flex space-x-2 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full border-white/20 hover:border-white/40"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full border-white/20 hover:border-white/40"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative min-w-[280px] md:min-w-[400px] snap-start snap-always group"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-black font-bold">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}

