"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, CheckCircle } from "lucide-react"

export default function OngoingProjectsPage() {
  const ongoingProjects = [
    {
      id: 1,
      title: "Adyssa Bheemli",
      location: "Bheemli, Visakhapatnam",
      description:
        "Visualizing the dimensions at which Vizag city is growing – Industrially, as a knowledge hub and as a tourist place, the increasing demand of the rising population to break stress and entertain themselves or to serve their need of holding functions like marriages is well recognized.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BJlo5Gv0l9wJHQUyTM6TzGZotIvPZN.png",
      features: [
        "Luxury One Bedroom Appartments",
        "Roof Top Infinity Pool with Sea view",
        "Grand Designer Lobby",
        "24Hr Security System with CCTV",
        "Banquet Hall",
        "Generator backup for Common Areas",
        "Banquets",
        "Spa",
        "Restaurants",
      ],
      status: "Ongoing",
      completionDate: "December 2025",
    },
    {
      id: 2,
      title: "Green Valley Residences",
      location: "Madhurawada, Visakhapatnam",
      description:
        "An eco-friendly residential project designed with sustainable living in mind, featuring green spaces and modern amenities for comfortable family living.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "2 & 3 BHK Apartments",
        "Eco-friendly Design",
        "Children's Play Area",
        "Landscaped Gardens",
        "Gymnasium",
        "Community Hall",
        "24/7 Security",
        "Power Backup",
      ],
      status: "Ongoing",
      completionDate: "March 2026",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        id="top"
        className="relative h-64 bg-gradient-to-r from-purple-700 to-purple-900 flex items-center justify-center"
      >
        <div className="text-center text-white animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ongoing Projects</h1>
          <p className="text-xl">Discover our current developments in progress</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {ongoingProjects.map((project, index) => (
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
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white">{project.status}</Badge>
                  </div>
                </div>

                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} animate-fade-in-right`}
                >
                  <div>
                    <p className="text-purple-700 font-semibold mb-2">ONGOING PROJECT</p>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h2>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-6">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Expected Completion: {project.completionDate}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-gray-800 hover:bg-gray-900 text-white mt-6">Enquire Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Interested in Our Ongoing Projects?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us to learn more about investment opportunities and booking details
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
              <Link href="/enquire">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
