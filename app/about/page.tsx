"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"
import ProgressiveImage from "@/components/progressive-image"
import LazySection from "@/components/lazy-section"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "GTM Kumar",
      position: "Founder & Managing Director",
      image: "/placeholder.svg?height=160&width=160&text=CEO",
      description: "With over 20 years of experience in construction and real estate development.",
    },
    {
      id: 2,
      name: "Divya GTM",
      position: "Executive Director",
      image: "/placeholder.svg?height=160&width=160&text=Director",
      description: "Specializes in project management and customer relations.",
    },
    {
      id: 3,
      name: "Rajesh Sharma",
      position: "Chief Architect",
      image: "/placeholder.svg?height=160&width=160&text=Architect",
      description: "Award-winning architect with expertise in modern residential design.",
    },
    {
      id: 4,
      name: "Priya Nair",
      position: "Head of Operations",
      image: "/placeholder.svg?height=160&width=160&text=Operations",
      description: "Ensures smooth execution of all construction projects.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-10 h-10 text-orange-500" />,
      title: "Quality Construction",
      description:
        "We use only the finest materials and employ skilled craftsmen to ensure superior quality in every project.",
    },
    {
      icon: <Shield className="w-10 h-10 text-emerald-600" />,
      title: "Timely Delivery",
      description: "Our projects are completed on schedule with no compromise on quality or safety standards.",
    },
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: "Customer Satisfaction",
      description:
        "We prioritize customer needs and maintain transparent communication throughout the project lifecycle.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-emerald-600" />,
      title: "Innovation",
      description: "We incorporate the latest construction technologies and sustainable building practices.",
    },
  ]

  return (
    <div className="min-h-screen pt-24 font-sans">
      {/* Hero Section */}
      <LazySection className="relative h-96 bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-center">
        <div className="absolute inset-0">
          <ProgressiveImage
            src="/placeholder.svg?height=400&width=1200&text=About+GTM+Construction"
            alt="About GTM Construction"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white animate-slide-in-top">
          <h1 className="text-6xl font-bold mb-6 font-serif">About GTM Construction</h1>
          <p className="text-2xl font-light">Committed to quality and excellence in every brick</p>
        </div>
      </LazySection>

      {/* Main About Content */}
      <LazySection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-top">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-serif leading-tight">
              Enabling everyone to fulfil the <span className="text-orange-500">dream of owning a house</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <p className="text-gray-700 text-xl leading-relaxed font-light">
                GTM Construction occupies a place of pride among the top builders in the city of Visakhapatnam. We are
                pioneers in setting standards in developing properties with visualization of future developments.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-light">
                Our mini township "ANAND NAGAR" in P.M.Palem was the first project in the suburbs with future
                visualization of IT & Infrastructure developments way back in the year 2003 which set path for such kind
                of developments at Madhurawada.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-slide-in-bottom">
                  <div className="text-4xl font-bold text-orange-500 mb-2 font-serif">15+</div>
                  <div className="text-gray-600 font-medium">Years of Experience</div>
                </div>
                <div
                  className="text-center p-6 bg-white rounded-xl shadow-lg animate-slide-in-bottom"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="text-4xl font-bold text-emerald-600 mb-2 font-serif">25+</div>
                  <div className="text-gray-600 font-medium">Projects Delivered</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <ProgressiveImage
                src="/placeholder.svg?height=500&width=600&text=Construction+Excellence"
                alt="Construction Excellence"
                width={600}
                height={500}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </LazySection>

      {/* Vision & Mission */}
      <LazySection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-10 shadow-xl animate-slide-in-left bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Award className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 font-serif">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  To deliver top-quality construction services with transparency and innovation, ensuring every project
                  exceeds client expectations while maintaining the highest standards of craftsmanship and integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="p-10 shadow-xl animate-slide-in-right bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Lightbulb className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6 font-serif">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light">
                  To be the leading construction company in Andhra Pradesh, recognized for our innovative designs,
                  sustainable practices, and commitment to creating communities that enhance the quality of life for
                  residents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </LazySection>

      {/* Why Choose Us */}
      <LazySection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-top">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-serif">Why Choose Us</h2>
            <p className="text-gray-600 text-xl font-light">
              The reasons that make us stand out in the construction industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="p-8 shadow-xl hover:shadow-2xl transition-shadow animate-slide-in-bottom bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="flex items-start space-x-6">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">{item.title}</h4>
                    <p className="text-gray-600 text-lg font-light leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Team Section */}
      <LazySection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-top">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-serif">Meet Our Team</h2>
            <p className="text-gray-600 text-xl font-light">The dedicated professionals behind our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="text-center animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-8">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-orange-200 shadow-xl">
                    <ProgressiveImage
                      src={member.image}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-serif">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-4 text-lg">{member.position}</p>
                <p className="text-gray-600 text-base font-light leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Call to Action */}
      <LazySection className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-in-bottom">
          <h2 className="text-5xl font-bold text-white mb-6 font-serif">Looking to build with us?</h2>
          <p className="text-gray-300 text-xl mb-10 font-light">
            Get in touch with our team to discuss your next construction project
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-lg font-semibold"
          >
            <Link href="/enquire">Contact Us</Link>
          </Button>
        </div>
      </LazySection>
    </div>
  )
}
