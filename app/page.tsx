"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import ProgressiveImage from "@/components/progressive-image"
import HeroCarousel from "@/components/hero-carousel"
import LazySection from "@/components/lazy-section"

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const heroImages = [
    "https://abhilashconstructions.com/wp-content/uploads/2024/10/abode-banner-scaled.jpg",
    "https://abhilashconstructions.com/wp-content/uploads/2022/10/4.png",
    "https://abhilashconstructions.com/wp-content/uploads/2022/10/3.png",
    "https://abhilashconstructions.com/wp-content/uploads/2022/10/2-1-1.png",
    "https://abhilashconstructions.com/wp-content/uploads/2025/02/yaksha-pride-banner-scaled.jpg",
    "https://abhilashconstructions.com/wp-content/uploads/2022/10/5.png",
  ]

  const testimonials = [
    {
      id: 1,
      name: "G. MADHU SUDANA RAO",
      designation: "HEAD MASTER",
      location: "Palasa, Srikakulam",
      image: "https://i.pinimg.com/736x/f9/0f/1d/f90f1df7c39177df2e025ef9c7f1d668.jpg",
      content:
        "I am very happy with GTM Construction! I have purchased a three bed room flat in block B of Anand Arcade, Madhurawada. I have very satisfied with the service and construction quality. Its timely communication, its planning very nice to deal with them. Some problems were solved to our complete satisfaction. Especially I appreciate the GTM Construction Company and their staff for their efforts and helping nature towards customers. I would like to thank Mr. GTM & Ms. Divya for their gentle manner with flat owners. Thank you.",
    },
    {
      id: 2,
      name: "ASHOK KUMAR",
      designation: "SOFTWARE ENGINEER",
      location: "Visakhapatnam",
      image: "https://i.pinimg.com/1200x/32/bf/e0/32bfe05d00bec3f833a5f6dc26a7b47e.jpg",
      content:
        "Excellent construction quality and timely delivery. The team at GTM Construction is very professional and customer-oriented. Highly recommended for anyone looking for quality homes.",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Yaksha Abode - Gambheeram",
      description: "A gated Community with contemporary design and urban aesthetic",
      image: "https://i.pinimg.com/736x/77/10/2c/77102caaf0a13e0b680e3dbd9112bed2.jpg",
      sqft: "2.27 lakh sft",
      floors: "6",
      rooms: "2 & 3 BHK",
    },
    {
      id: 2,
      title: "Adyssa Bheemli",
      description: "Luxury apartments with modern amenities",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BJlo5Gv0l9wJHQUyTM6TzGZotIvPZN.png",
      sqft: "1.5 lakh sft",
      floors: "8",
      rooms: "1, 2 & 3 BHK",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={heroImages[currentImage]}
          alt="GTM Hero"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />

        {/* Arrows */}
        <button
          onClick={() => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-80 rounded-full p-2"
        >
          <ChevronLeft className="h-6 w-6 text-black" />
        </button>
        <button
          onClick={() => setCurrentImage((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-80 rounded-full p-2"
        >
          <ChevronRight className="h-6 w-6 text-black" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-3 h-3 rounded-full ${idx === currentImage ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </section>
      
      {/* CTA Buttons Section */}
      <LazySection className="py-12 bg-white" animationClass="animate-slide-in-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-bold"
            >
              <Link href="/projects/ongoing#top">ONGOING PROJECTS</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold"
            >
              <Link href="/about">ABOUT US</Link>
            </Button>
          </div>
        </div>
      </LazySection>

      {/* About Section with Default Image */}
      <LazySection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-top">
            <p className="text-gray-600 text-xl mb-4 font-medium tracking-wide">ABOUT US</p>
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
              <Button
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold"
              >
                <Link href="/about">Read more</Link>
              </Button>
            </div>

            <div className="relative animate-slide-in-right">
              <ProgressiveImage
                src="https://i.pinimg.com/736x/42/3f/ba/423fba557438587bf43ee85c973e0739.jpg"
                alt="Construction Excellence"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </div>
        </div>
      </LazySection>

      {/* Ongoing Projects Section with Default Image */}
      <LazySection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-5xl font-bold text-gray-800 animate-slide-in-top font-serif">
                Ongoing <span className="text-orange-500">Projects</span>
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed animate-slide-in-bottom font-light">
                With an unwavering vision of developing some of the finest residential projects in Visakhapatnam, we
                continue to build the best homes for our customers
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold">
                <Link href="/projects/ongoing">View Projects</Link>
              </Button>
            </div>

            <div className="relative animate-slide-in-right">
              <ProgressiveImage
                src="https://i.pinimg.com/736x/c9/46/ed/c946ede28bed200777805191f5a7ce5e.jpg"
                alt="Ongoing Projects"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </div>
        </div>
      </LazySection>

      {/* Our Projects Portfolio with Image Boxes */}
      <LazySection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-top">
            <p className="text-gray-600 text-xl mb-4 font-medium tracking-wide">PORTFOLIO</p>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-serif">
              Our <span className="text-orange-500">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <LazySection key={project.id} animationClass="animate-slide-in-bottom" threshold={0.2}>
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white">
                  <div className="relative h-80">
                    <ProgressiveImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-bold mb-4 text-gray-800 font-serif">{project.title}</h3>
                    <p className="text-lg mb-6 text-gray-600 font-light leading-relaxed">{project.description}</p>
                    <div className="grid grid-cols-3 gap-6 text-center mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-500 mb-1">Sq.ft</div>
                        <div className="text-sm font-medium text-gray-600">{project.sqft}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600 mb-1">Floors</div>
                        <div className="text-sm font-medium text-gray-600">{project.floors}</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-slate-600 mb-1">Room</div>
                        <div className="text-sm font-medium text-gray-600">{project.rooms}</div>
                      </div>
                    </div>
                    <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </LazySection>
            ))}
          </div>

          <div className="text-center mt-16 animate-slide-in-bottom">
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-bold"
            >
              <Link href="/projects/ongoing">EXPLORE ONGOING PROJECTS</Link>
            </Button>
          </div>
        </div>
      </LazySection>

      {/* Happy Customers / Testimonials */}
      <LazySection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-top">
            <p className="text-gray-600 text-xl mb-4 font-medium tracking-wide">HAPPY CUSTOMERS</p>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 font-serif">
              <span className="text-orange-500">Testimonials</span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto animate-slide-in-bottom">
            <Card className="p-12 shadow-xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="text-center">
                <div className="flex items-center justify-center mb-8">
                  <ProgressiveImage
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-orange-200"
                    quality={90}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-lg font-medium text-orange-500 mb-2">
                  {testimonials[currentTestimonial].designation}
                </p>
                <p className="text-gray-600 mb-8 font-light">{testimonials[currentTestimonial].location}</p>
                <p className="text-xl leading-relaxed mb-8 text-gray-700 font-light italic max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="flex justify-center space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-4 h-4 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-orange-500" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-8 h-8 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 hover:scale-110 transition-all"
            >
              <ChevronRight className="w-8 h-8 text-gray-600" />
            </button>
          </div>
        </div>
      </LazySection>
    </div>
  )
}
