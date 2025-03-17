import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface NewsCardProps {
  title: string
  image: string
}

export default function NewsCard({ title, image }: NewsCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="relative h-[400px]">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <Link href="#" className="flex items-center text-sm hover:underline">
            Continue reading <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

