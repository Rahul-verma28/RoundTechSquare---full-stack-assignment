import { Home, Building, Key, FileText, Search, BarChart } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-6">

        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          height={80}
          width={80}
        />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
