"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Home } from "lucide-react"

export default function CompletedProjectsPage() {
  const completedProjects = [
    {
      id: 1,
      title: "Yaksha Abode - Gambheeram",
      location: "Gambheeram, Visakhapatnam",
      description:
        "A premium gated community with contemporary design and urban aesthetic. This project features modern apartments with world-class amenities and has been successfully delivered to happy families.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YdK4IYIyEwOCRVtoKYz8rM1jEVrFO4.png",
      completedYear: "2023",
      units: "120 Apartments",
      type: "Residential",
    },
    {
      id: 2,
      title: "Anand Nagar Township",
      location: "P.M.Palem, Visakhapatnam",
      description:
        "Our pioneering mini township project that set the standard for suburban development with future infrastructure vision. This was our first project in the suburbs back in 2003.",
      image: "/placeholder.svg?height=400&width=600",
      completedYear: "2005",
      units: "200 Plots",
      type: "Township",
    },
    {
      id: 3,
      title: "Anand Arcade",
      location: "Madhurawada, Visakhapatnam",
      description:
        "A successful residential complex that provided quality homes to numerous families. Known for its excellent construction quality and timely delivery.",
      image: "/placeholder.svg?height=400&width=600",
      completedYear: "2018",
      units: "80 Apartments",
      type: "Residential",
    },
  ]

  const recentProjects = [
    { name: "Yaksha Abode - Gambheeram", year: "2023", type: "Residential" },
    { name: "Sunrise Apartments", year: "2022", type: "Residential" },
    { name: "Golden Heights", year: "2021", type: "Commercial" },
    { name: "Green Park Residency", year: "2020", type: "Residential" },
  ]

  const previousProjects = [
    { name: "Anand Arcade", year: "2018", type: "Residential" },
    { name: "Silver Towers", year: "2015", type: "Commercial" },
    { name: "Palm Grove", year: "2012", type: "Residential" },
    { name: "City Center Plaza", year: "2010", type: "Commercial" },
    { name: "Anand Nagar Township", year: "2005", type: "Township" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-green-700 to-green-900 flex items-center justify-center">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Completed Projects</h1>
          <p className="text-xl">Our legacy of successful developments and satisfied customers</p>
        </div>
      </section>

      {/* Featured Completed Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Completed Projects</h2>
            <p className="text-gray-600 text-lg">
              Showcasing our successful developments that have created happy communities
            </p>
          </div>

          <div className="space-y-16">
            {completedProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} animate-fade-in-left`}>
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg w-full"
                    />
                    <Badge className="absolute top-4 right-4 bg-green-600 text-white">Completed</Badge>
                  </div>
                </div>

                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} animate-fade-in-right`}
                >
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h2>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Completed: {project.completedYear}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-6">
                      <Home className="w-5 h-5 mr-2" />
                      <span>
                        {project.units} • {project.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    View Project Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Lists */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-down">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Previous <span className="text-yellow-600">Projects</span>
            </h2>
          </div>

          {/* Previous Projects Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="animate-fade-in-left">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q3IhAxNGvzmH2PoZyJERlprBCG2bcE.png"
                    alt="Ashwin Enclave II"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Ashwin Enclave II - Akkayyapalem</h3>
                  <p className="text-gray-600">Completed 2019</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q3IhAxNGvzmH2PoZyJERlprBCG2bcE.png"
                    alt="Bhavana Enclave II"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Bhavana Enclave II - Maharanipeta</h3>
                  <p className="text-gray-600">Completed 2018</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q3IhAxNGvzmH2PoZyJERlprBCG2bcE.png"
                    alt="Keerthana Enclave II"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Keerthana Enclave II - Kirlampudi Layout</h3>
                  <p className="text-gray-600">Completed 2017</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in-left" style={{ animationDelay: "0.3s" }}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q3IhAxNGvzmH2PoZyJERlprBCG2bcE.png"
                    alt="Previous Project 4"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Sunrise Apartments - Madhurawada</h3>
                  <p className="text-gray-600">Completed 2016</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q3IhAxNGvzmH2PoZyJERlprBCG2bcE.png"
                    alt="Previous Project 5"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Golden Heights - Siripuram</h3>
                  <p className="text-gray-600">Completed 2015</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in-right" style={{ animationDelay: "0.5s" }}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q3IhAxNGvzmH2PoZyJERlprBCG2bcE.png"
                    alt="Previous Project 6"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Green Park Residency - Gajuwaka</h3>
                  <p className="text-gray-600">Completed 2014</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Recent Projects List */}
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Projects</h3>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-800">{project.name}</h4>
                          <p className="text-sm text-gray-600">{project.type}</p>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {project.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Previous Projects List */}
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Earlier Projects</h3>
              <div className="space-y-4">
                {previousProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-800">{project.name}</h4>
                          <p className="text-sm text-gray-600">{project.type}</p>
                        </div>
                        <Badge variant="outline" className="text-gray-600 border-gray-600">
                          {project.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Start Your Dream Project?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Join our list of satisfied customers and let us build your dream home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
              <Link href="/enquire">Start Your Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects/ongoing">View Ongoing Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
