"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Home } from "lucide-react"
import ProgressiveImage from "@/components/progressive-image"
import LazySection from "@/components/lazy-section"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Yaksha Abode - Gambheeram",
      location: "Gambheeram, Visakhapatnam",
      status: "Completed",
      category: "Residential",
      description: "A gated Community with contemporary design and urban aesthetic",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YdK4IYIyEwOCRVtoKYz8rM1jEVrFO4.png",
      features: ["Gated Community", "Contemporary Design", "Urban Aesthetic"],
    },
    {
      id: 2,
      title: "Adyssa Bheemli",
      location: "Bheemli, Visakhapatnam",
      status: "Ongoing",
      category: "Residential",
      description: "Luxury apartments with modern amenities and sea view",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BJlo5Gv0l9wJHQUyTM6TzGZotIvPZN.png",
      features: ["Sea View", "Luxury Amenities", "Modern Design"],
    },
    {
      id: 3,
      title: "Anand Nagar Township",
      location: "P.M.Palem, Visakhapatnam",
      status: "Completed",
      category: "Residential",
      description: "Our first mini township project with future infrastructure vision",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Mini Township", "Infrastructure Ready", "Family Homes"],
    },
    {
      id: 4,
      title: "Commercial Plaza",
      location: "Siripuram, Visakhapatnam",
      status: "Upcoming",
      category: "Commercial",
      description: "Modern commercial complex with retail and office spaces",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Retail Spaces", "Office Complex", "Modern Design"],
    },
    {
      id: 5,
      title: "Green Valley Residences",
      location: "Madhurawada, Visakhapatnam",
      status: "Ongoing",
      category: "Residential",
      description: "Eco-friendly residential project with green spaces",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Eco-Friendly", "Green Spaces", "Sustainable Living"],
    },
    {
      id: 6,
      title: "Tech Park Office Complex",
      location: "IT Corridor, Visakhapatnam",
      status: "Upcoming",
      category: "Commercial",
      description: "State-of-the-art office complex for IT companies",
      image: "/placeholder.svg?height=300&width=400",
      features: ["IT Ready", "Modern Facilities", "Tech Infrastructure"],
    },
  ]

  const categories = ["All", "Residential", "Commercial", "Ongoing", "Upcoming"]

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory || project.status === activeCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Ongoing":
        return "bg-blue-100 text-blue-800"
      case "Upcoming":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <LazySection className="bg-white py-16" animationClass="animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed, ongoing, and upcoming projects
          </p>
        </div>
      </LazySection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <LazySection className="flex flex-wrap justify-center gap-4 mb-12" animationClass="animate-fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "hover:bg-orange-50 hover:text-orange-500"
              }
            >
              {category}
            </Button>
          ))}
        </LazySection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <LazySection key={project.id} animationClass="animate-fade-in-up" threshold={0.1}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative h-48">
                  <ProgressiveImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={75}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </LazySection>
          ))}
        </div>

        {/* Featured Project */}
        <LazySection animationClass="animate-fade-in-up" threshold={0.2}>
          <section className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <ProgressiveImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BJlo5Gv0l9wJHQUyTM6TzGZotIvPZN.png"
                  alt="Featured Project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="bg-yellow-100 text-yellow-800 w-fit mb-4">Featured Project</Badge>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Adyssa Bheemli</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Visualizing the dimensions at which Vizag city is growing – Industrially, as a knowledge hub and as a
                  tourist place, the increasing demand of the rising population to break stress and entertain themselves
                  or to serve their need of holding functions like marriages is well recognized.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Home className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-sm text-gray-600">Luxury Apartments</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-sm text-gray-600">Ongoing Project</span>
                  </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 w-fit">Learn More</Button>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Call to Action */}
        <LazySection animationClass="animate-fade-in-up">
          <section className="bg-gray-100 rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Interested in our upcoming projects?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to learn more about investment opportunities and upcoming developments in
              Visakhapatnam.
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/enquire">Contact Us</Link>
            </Button>
          </section>
        </LazySection>
      </div>
    </div>
  )
}
