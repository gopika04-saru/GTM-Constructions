import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-orange-400" />
            <h3 className="text-lg font-semibold mb-2">LOCATION</h3>
            <p className="text-gray-300">
              # 1-181, Guri Vari Street,
              <br />
              Mogalipuram, Subavaram mandel,
              <br />
              Visakhapatnam-531035
            </p>
          </div>

          <div className="text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-orange-400" />
            <h3 className="text-lg font-semibold mb-2">E-MAIL</h3>
            <p className="text-gray-300">ashokkumarguri6@gmail.com</p>
          </div>

          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-4 text-orange-400" />
            <h3 className="text-lg font-semibold mb-2">PHONE</h3>
            <p className="text-gray-300">9652903315</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-40 h-12">
              <Image src="/gtm-logo.png" alt="GTM Construction LTD" fill className="object-contain" />
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            GTM Construction occupies a place of pride among top builders in the city of Visakhapatnam. We are pioneers
            in setting standards in developing properties with visualization of future developments.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <Link href="#" className="bg-blue-600 p-2 rounded">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="bg-pink-600 p-2 rounded">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="bg-blue-800 p-2 rounded">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="bg-blue-400 p-2 rounded">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>

        <div className="text-center text-gray-400 text-sm">
          © 2021 GTM Construction LTD. All Rights Reserved. Designed and Developed by Shortcode Technologies
        </div>
      </div>
    </footer>
  )
}
