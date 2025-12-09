import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Abhilash Kumar",
      position: "Founder & Managing Director",
      image: "https://i.pinimg.com/1200x/8a/a0/88/8aa0881294cdb6a03a92b94f165eb23c.jpg",
      description:
        "With over 20 years of experience in construction and real estate development, Abhilash has been the visionary behind our company's growth and success.",
      email: "abhilash@abhilashconstructions.com",
      phone: "+91 9885053510",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Divya Abhilash",
      position: "Executive Director",
      image: "https://i.pinimg.com/1200x/09/8d/b6/098db6712b7fce8c7b2c39e57deda4ee.jpg",
      description:
        "Specializes in project management and customer relations, ensuring every client receives personalized attention and exceptional service.",
      email: "divya@abhilashconstructions.com",
      phone: "+91 9885053511",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Rajesh Sharma",
      position: "Chief Architect",
      image: "https://i.pinimg.com/736x/c7/96/81/c79681034c0af2f12c27965460fe0c9d.jpg",
      description:
        "Award-winning architect with expertise in modern residential design and sustainable construction practices.",
      email: "rajesh@abhilashconstructions.com",
      phone: "+91 9885053512",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Priya Nair",
      position: "Head of Operations",
      image: "https://i.pinimg.com/736x/80/c5/c4/80c5c4e9dd6f06ea98df53f198f3d95f.jpg",
      description:
        "Ensures smooth execution of all construction projects with her exceptional organizational skills and attention to detail.",
      email: "priya@abhilashconstructions.com",
      phone: "+91 9885053513",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Suresh Kumar",
      position: "Site Engineer",
      image: "https://i.pinimg.com/736x/de/85/f8/de85f8f007dc13ddb490a2a994458eb0.jpg",
      description:
        "Experienced site engineer who oversees construction quality and ensures all projects meet our high standards.",
      email: "suresh@abhilashconstructions.com",
      phone: "+91 9885053514",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Meera Reddy",
      position: "Interior Designer",
      image: "https://i.pinimg.com/736x/61/4e/cc/614ecc32063b0a489e6f1f60fdbf9c63.jpg",
      description:
        "Creative interior designer who brings aesthetic excellence to our residential and commercial projects.",
      email: "meera@abhilashconstructions.com",
      phone: "+91 9885053515",
      linkedin: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=400&width=1200" alt="Our Team" fill className="object-cover opacity-30" />
        </div>
        <div className="relative z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl">The dedicated professionals behind our success</p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the experienced professionals who bring expertise, dedication, and innovation to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="w-full h-64 relative overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="p-6 text-center">
                    <div className="relative -mt-16 mb-4">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-purple-700 font-semibold mb-4">{member.position}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.description}</p>

                    <div className="flex justify-center space-x-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-purple-700 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a href={`tel:${member.phone}`} className="text-gray-400 hover:text-purple-700 transition-colors">
                        <Phone className="w-5 h-5" />
                      </a>
                      <a href={member.linkedin} className="text-gray-400 hover:text-purple-700 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Want to Work With Our Team?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Get in touch with our experienced professionals to discuss your construction needs
          </p>
          <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3">
            <Link href="/enquire">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
