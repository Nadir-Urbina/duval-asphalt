"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const newsItems = [
  {
    id: 1,
    title: "Team Members Complete Year-Long Leadership Training",
    excerpt:
      "Over the past year members of our Duval Asphalt team participated in the Crestcom Leadership Training facilitated by Tony Davis.",
    date: "March 15, 2023",
    image: "/images/01-Crestcom2-1.jpg",
    category: "Company News",
  },
  {
    id: 2,
    title: "Congressman Aaron Bean Tours Duval Asphalt's Production Facility",
    excerpt:
      "The teams at Duval Asphalt Products, Inc. and Asphalt Testing Solutions & Engineering, LLC recently hosted Congressman Aaron Bean.",
    date: "February 8, 2023",
    image: "/images/congressmaVisit.jpg",
    category: "Industry News",
  },
  {
    id: 3,
    title: "Duval Asphalt Donates Grading & Paving Services to Pine Castle",
    excerpt: "Duval Asphalt is committed to providing support and services to organizations in our community.",
    date: "January 22, 2023",
    image: "/images/employeeTraining.jpg",
    category: "Community",
  },
]

const projects = [
  {
    id: 1,
    title: "SR 200 (A1A) Resurfacing Project",
    location: "Nassau County, Florida",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "JIA Airport Runway Rehabilitation",
    location: "Jacksonville, Florida",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "I-95 Emergency Repairs",
    location: "Duval County, Florida",
    image: "/images/project-3.jpg",
  },
]

export function NewsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="news" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
              <div className="h-1 w-20 bg-primary mb-6" />
            </div>
            <TabsList className="bg-background/50 border border-border">
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="news" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {newsItems.map((item) => (
                <Card key={item.id} className="bg-background border-border overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold py-1 px-2">
                      {item.category}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardDescription className="text-muted-foreground">{item.date}</CardDescription>
                    <CardTitle className="text-xl line-clamp-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="projects" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <Card key={project.id} className="bg-background border-border overflow-hidden h-full">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.location}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            View All News & Projects <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

