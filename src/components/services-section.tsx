"use client"

import { motion } from "framer-motion"
import { Truck, Recycle, RouteIcon as Road, HardHat, Leaf, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Asphalt Manufacturing",
    description: "High-quality asphalt mixes for various applications",
  },
  {
    icon: <Road className="h-10 w-10 text-primary" />,
    title: "Asphalt Paving",
    description: "Professional paving services for commercial and residential projects",
  },
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: "Asphalt Sealcoat & Repair",
    description: "Maintenance and repair services to extend pavement life",
  },
  {
    icon: <Recycle className="h-10 w-10 text-primary" />,
    title: "Roll Off Containers",
    description: "Disposal solutions for clean asphalt and concrete",
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Sustainability",
    description: "Environmentally responsible practices and recycled materials",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Resources",
    description: "Educational materials and specifications for asphalt products",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Duval Asphalt provides comprehensive asphalt solutions with a focus on quality, reliability, and customer
            satisfaction.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-background/50 border-border hover:border-primary/50 hover:bg-background/60 transition-all duration-300 h-full group hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-400">{service.icon}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base group-hover:text-foreground/80 transition-colors duration-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

