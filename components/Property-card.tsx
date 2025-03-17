import Image from "next/image"
import { Bed, Bath } from "lucide-react"

interface PropertyCardProps {
  title: string
  price: string
  description: string
  bedrooms: number
  bathrooms: number
  image: string
}

export default function PropertyCard({ title, price, description, bedrooms, bathrooms, image }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover h-20" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 mb-3">{price}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-start gap-6">
          <div className="flex items-center">
            <Bed className="mr-2 h-5 w-5 text-gray-500" />
            <span>{bedrooms} Bedroom</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-2 h-5 w-5 text-gray-500" />
            <span>{bathrooms} Bathroom</span>
          </div>
        </div>
      </div>
    </div>
  )
}

