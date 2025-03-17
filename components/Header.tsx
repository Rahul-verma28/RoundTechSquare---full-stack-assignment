import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Header() {
  return (
    <>
      {/* Top Social Bar */}
      <div className=" text-white border z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex">
            <Link href="#" className="p-4 border">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="p-4 border">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="p-4 border">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="p-4 border">
              <Instagram size={20} />
              <span className="sr-only">Pinterest</span>
            </Link>
            <Link href="#" className="p-4 border">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="p-4 border">
              <Youtube size={20} />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="mailto:contact@krystelle.com" className="border p-4 flex items-center">
              <span className="ml-2">contact@krystelle.com</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Header & Navigation */}
      <header className=" text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-4">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={50} 
                height={50} 
                className="h-12 w-12"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">KRYSTELLE ROMY</h1>
              <p className="text-sm">RESIDENCE</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="#" className="hover:text-blue-400 font-medium">HOME</Link>
            <Link href="#" className="hover:text-blue-400 font-medium">SELL</Link>
            <Link href="#" className="hover:text-blue-400 font-medium">BUY</Link>
            <Link href="#" className="hover:text-blue-400 font-medium">ACTIVE LISTINGS</Link>
            <Link href="#" className="hover:text-blue-400 font-medium">CONTACT</Link>
            <Link href="#" className="hover:text-blue-400 font-medium">BLOGS</Link>
          </nav>
        </div>
      </header>
    </>
  )
}
