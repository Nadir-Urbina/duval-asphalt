"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const affiliations = [
  {
    name: "National Asphalt Pavement Association",
    logo: "/images/affiliations/napa.jpg",
  },
  {
    name: "Asphalt Contractors Association of Florida",
    logo: "/images/affiliations/acaf.jpg",
  },
  {
    name: "First Coast Apartment Association",
    logo: "/images/affiliations/apartment-assn.jpg",
  },
  {
    name: "Florida Restaurant & Lodging Association",
    logo: "/images/affiliations/frla-logo.jpg",
  },
  {
    name: "International Facility Management Association",
    logo: "/images/affiliations/ifma.jpg",
  },
  {
    name: "NAIOP Commercial Real Estate Development Association",
    logo: "/images/affiliations/naiop.jpg",
  },
  {
    name: "Building Owners and Managers Association",
    logo: "/images/affiliations/boma.jpg",
  },
  {
    name: "Community Associations Institute",
    logo: "/images/affiliations/community-assn.jpg",
  },
  {
    name: "Northeast Florida Builders Association",
    logo: "/images/affiliations/nefba.jpg",
  },
  {
    name: "Institute of Real Estate Management",
    logo: "/images/affiliations/irem-2018.jpg",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ProfessionalAffiliations() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Affiliations</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Proudly associated with leading industry organizations to maintain the highest standards of quality and service.
          </p>
          <div className="h-1 w-20 bg-primary mt-6 mx-auto" />
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {affiliations.map((affiliation) => (
            <motion.div
              key={affiliation.name}
              variants={item}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative w-full h-24">
                <Image
                  src={affiliation.logo}
                  alt={affiliation.name}
                  fill
                  className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors duration-300">
                  {affiliation.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 