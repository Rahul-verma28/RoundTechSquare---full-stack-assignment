// import Link from "next/link"

// export default function HeroSection() {
//   return (
//     <section
//       className="relative bg-cover bg-center h-screen bg-[url(/hero.png)]"
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6">FIND YOUR DREAM HOUSE</h1>
//         <p className="text-lg md:text-xl max-w-3xl mb-10">
//           We are recognized for exceeding client expectations and delivering great results through dedication, ease of
//           process, and extraordinary services to our worldwide clients.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 mb-10">
//           <Link
//             href="#"
//             className="px-6 py-3 border-2 border-white hover:bg-white hover:text-gray-800 transition-colors"
//           >
//             WHAT'S MY HOME WORTH
//           </Link>
//           <Link
//             href="#"
//             className="px-6 py-3 border-2 border-white hover:bg-white hover:text-gray-800 transition-colors"
//           >
//             WORK WITH KRYSTELLE
//           </Link>
//         </div>
//         <div className="w-full max-w-4xl flex flex-col sm:flex-row">
//           <input
//             type="text"
//             placeholder="Enter an address, city or neighborhood"
//             className="flex-grow p-4 text-gray-800 focus:outline-none"
//           />
//           <button className="bg-blue-600 text-white px-6 py-4 font-medium hover:bg-blue-700">SEARCH LISTINGS</button>
//         </div>
//       </div>
//     </section>
//   )
// }

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center min-h-screen bg-[url(/hero.png)]">
      <div className="absolute inset-0 bg-black/60 bg-opacity-50 h-auto"></div>
      <div className="relative z-10">
        <div className=" text-white border md:px-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link href="#" className="p-5 border">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="p-5 border">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="p-5 border">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="p-5 border">
                <Instagram size={20} />
                <span className="sr-only">Pinterest</span>
              </Link>
              <Link href="#" className="p-5 border">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <Link
                href="mailto:contact@krystelle.com"
                className=" border-x p-4 flex items-center"
              >
                <span>contact@krystelle.com</span>
              </Link>
            </div>
          </div>
        </div>

        <header className=" text-white py-4 md:px-10">
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
              <Link href="#" className="hover:text-blue-400 font-medium">
                HOME
              </Link>
              <Link href="#" className="hover:text-blue-400 font-medium">
                SELL
              </Link>
              <Link href="#" className="hover:text-blue-400 font-medium">
                BUY
              </Link>
              <Link href="#" className="hover:text-blue-400 font-medium">
                ACTIVE LISTINGS
              </Link>
              <Link href="#" className="hover:text-blue-400 font-medium">
                CONTACT
              </Link>
              <Link href="#" className="hover:text-blue-400 font-medium">
                BLOGS
              </Link>
            </nav>
          </div>
        </header>
      </div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center text-white py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          FIND YOUR DREAM HOUSE
        </h1>
        <p className="text-base md:text-lg max-w-3xl mb-12 leading-relaxed">
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full max-w-xl justify-center">
          <Link
            href="#"
            className="px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-800 transition-colors text-sm font-semibold tracking-wide rounded-md"
          >
            WHAT&apos;S MY HOME WORTH
          </Link>
          <Link
            href="#"
            className="px-8 py-4 border-2 border-white hover:bg-white hover:text-gray-800 transition-colors text-sm font-semibold tracking-wide rounded-md"
          >
            WORK WITH KRYSTELLE
          </Link>
        </div>
        <div className="w-full max-w-4xl flex flex-col sm:flex-row shadow-lg gap-2 p-2 bg-gray-200 rounded-lg">
          <input
            type="text"
            placeholder="Enter an address, city or neighborhood"
            className="flex-grow p-5 text-gray-800 bg-white focus:outline-none text-base rounded-lg"
          />
          <button className="bg-blue-600 text-white px-8 py-5 font-semibold tracking-wide hover:bg-blue-700 transition-colors rounded-lg">
            SEARCH LISTINGS
          </button>
        </div>
      </div>
    </section>
  );
}
