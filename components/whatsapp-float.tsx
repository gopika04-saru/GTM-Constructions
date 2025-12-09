import Link from "next/link"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/919885053510"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  )
}
