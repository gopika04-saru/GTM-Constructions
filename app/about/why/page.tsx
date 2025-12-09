import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Award, Lightbulb, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: <CheckCircle className="w-12 h-12 text-purple-700" />,
      title: "Better Choice and Price",
      description:
        "We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment.",
    },
    {
      icon: <Award className="w-12 h-12 text-purple-700" />,
      title: "High Return on Investment",
      description:
        "Our properties are strategically located in areas with high growth potential, ensuring excellent returns.",
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-700" />,
      title: "Located in Green Belt Zone",
      description:
        "All our projects are situated in environmentally friendly green belt areas for a healthier lifestyle.",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-700" />,
      title: "Value for Money",
      description:
        "Premium amenities and quality construction at affordable prices make our projects exceptional value.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-purple-700" />,
      title: "Luxury Living",
      description: "Experience world-class amenities and modern design that elevates your lifestyle.",
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-700" />,
      title: "Less Traffic and No Pollution",
      description: "Enjoy peaceful living away from city congestion while staying connected to urban conveniences.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-700 to-purple-900 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Why Choose Us"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Why Choose Us</h1>
          <p className="text-xl">Discover what makes Abhilash Constructions the preferred choice</p>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="space-y-4">
                  <div className="flex justify-center mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Join hundreds of satisfied customers who chose Abhilash Constructions for their dream homes
          </p>
          <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3">
            <Link href="/enquire">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
