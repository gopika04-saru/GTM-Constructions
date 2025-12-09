import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Construction Tips for 2025",
      excerpt:
        "Discover the latest trends and best practices in modern construction that will shape the industry this year.",
      author: "Abhilash Team",
      date: "January 15, 2025",
      image: "/placeholder.svg?height=300&width=400",
      category: "Tips",
    },
    {
      id: 2,
      title: "Sustainable Building Materials: The Future of Construction",
      excerpt:
        "Learn about eco-friendly materials that are revolutionizing the construction industry and reducing environmental impact.",
      author: "Engineering Team",
      date: "January 10, 2025",
      image: "/placeholder.svg?height=300&width=400",
      category: "Residential",
    },
    {
      id: 3,
      title: "Smart Home Integration in Modern Apartments",
      excerpt:
        "Explore how smart technology is being integrated into residential projects to enhance living experiences.",
      author: "Design Team",
      date: "January 5, 2025",
      image: "/placeholder.svg?height=300&width=400",
      category: "Commercial",
    },
    {
      id: 4,
      title: "Real Estate Market Trends in Visakhapatnam",
      excerpt: "An in-depth analysis of the current real estate market conditions and future prospects in our region.",
      author: "Market Analyst",
      date: "December 28, 2024",
      image: "/placeholder.svg?height=300&width=400",
      category: "News",
    },
    {
      id: 5,
      title: "Quality Control in Construction Projects",
      excerpt: "Understanding the importance of quality control measures and how they ensure project success.",
      author: "Quality Team",
      date: "December 20, 2024",
      image: "/placeholder.svg?height=300&width=400",
      category: "Tips",
    },
    {
      id: 6,
      title: "The Rise of Gated Communities",
      excerpt: "Why gated communities are becoming increasingly popular and what benefits they offer to residents.",
      author: "Community Team",
      date: "December 15, 2024",
      image: "/placeholder.svg?height=300&width=400",
      category: "Residential",
    },
  ]

  const categories = ["All", "Residential", "Commercial", "Tips", "News"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-down">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about our latest projects, real estate trends, and construction tips
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Button variant="outline" className="w-full group bg-transparent">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="bg-purple-700 text-white hover:bg-purple-800">
                Load More Posts
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Search */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Search</h3>
              <div className="flex">
                <Input placeholder="Search articles..." className="rounded-r-none" />
                <Button className="rounded-l-none bg-purple-700 hover:bg-purple-800">Search</Button>
              </div>
            </Card>

            {/* Categories */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            {/* Recent Posts */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div
                    key={post.id}
                    className="flex space-x-3 animate-fade-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">{post.title}</h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-8">Get the latest updates on our projects and industry insights</p>
          <div className="flex max-w-md mx-auto">
            <Input placeholder="Enter your email" className="rounded-r-none" />
            <Button className="rounded-l-none bg-purple-700 hover:bg-purple-800">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
