"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navigation() {
  const pathname = usePathname()
  const [projectsDropdown, setProjectsDropdown] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    {
      href: "/projects",
      label: "PROJECTS",
      dropdown: [
        { href: "/projects", label: "All Projects" },
        { href: "/projects/ongoing", label: "Ongoing Projects" },
        { href: "/projects/completed", label: "Completed Projects" },
      ],
    },
    { href: "/blog", label: "BLOG" },
  ]

  return (
    <nav
      className={`bg-slate-800 shadow-sm border-b border-slate-700 transition-all duration-300 z-50 ${
        isScrolled ? "fixed top-0 left-0 right-0 shadow-xl backdrop-blur-sm bg-slate-800/95" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center space-x-4">
            {/* GTM Logo - Made Much Bigger and More Prominent */}
            <div className="relative w-64 h-20 hover:scale-105 transition-transform duration-300 p-2">
              <Image
                src="/gtm-logo.png"
                alt="GTM Construction LTD"
                fill
                className="object-contain drop-shadow-lg"
                priority
                sizes="(max-width: 768px) 200px, 256px"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.label === "PROJECTS") setProjectsDropdown(true)
                    }}
                    onMouseLeave={() => {
                      if (item.label === "PROJECTS") setProjectsDropdown(false)
                    }}
                  >
                    <button
                      className={`flex items-center text-base font-bold transition-colors hover:text-orange-400 ${
                        pathname.startsWith(item.href)
                          ? "text-orange-400 border-b-2 border-orange-400 pb-1"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>

                    {item.label === "PROJECTS" && projectsDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-600 rounded-md shadow-lg py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-slate-700 hover:text-orange-400"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-base font-bold transition-colors hover:text-orange-400 ${
                      pathname === item.href ? "text-orange-400 border-b-2 border-orange-400 pb-1" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-base"
            >
              <Link href="/enquire">ENQUIRE NOW</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
