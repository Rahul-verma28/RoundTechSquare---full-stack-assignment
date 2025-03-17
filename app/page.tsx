// import Image from "next/image"
// import Link from "next/link"
// import { Facebook, Twitter, Linkedin, Instagram, Youtube, PinIcon as Pinterest } from "lucide-react"
// import PropertyCard from "@/components/Property-card"
// import ServiceCard from "@/components/Service-card"
// import NewsCard from "@/components/News-card"
// import ContactForm from "@/components/Contact-form"

import AboutSection from "@/components/About-section";
import ContactSection from "@/components/Contact-section";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero-section";
import NewsSection from "@/components/News-section";
import PropertiesSection from "@/components/Property-section";
import ServicesSection from "@/components/Service-section";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Top Social Bar */}
//       <div className="bg-gray-800 text-white">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex">
//             <Link href="#" className="p-4 border-r border-gray-700 hover:bg-gray-700">
//               <Facebook size={20} />
//               <span className="sr-only">Facebook</span>
//             </Link>
//             <Link href="#" className="p-4 border-r border-gray-700 hover:bg-gray-700">
//               <Twitter size={20} />
//               <span className="sr-only">Twitter</span>
//             </Link>
//             <Link href="#" className="p-4 border-r border-gray-700 hover:bg-gray-700">
//               <Linkedin size={20} />
//               <span className="sr-only">LinkedIn</span>
//             </Link>
//             <Link href="#" className="p-4 border-r border-gray-700 hover:bg-gray-700">
//               <Pinterest size={20} />
//               <span className="sr-only">Pinterest</span>
//             </Link>
//             <Link href="#" className="p-4 border-r border-gray-700 hover:bg-gray-700">
//               <Instagram size={20} />
//               <span className="sr-only">Instagram</span>
//             </Link>
//             <Link href="#" className="p-4 border-r border-gray-700 hover:bg-gray-700">
//               <Youtube size={20} />
//               <span className="sr-only">YouTube</span>
//             </Link>
//           </div>
//           <div className="hidden md:flex items-center">
//             <Link href="mailto:contact@krystelle.com" className="p-4 flex items-center">
//               <span className="ml-2">contact@krystelle.com</span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Header & Navigation */}
//       <header className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
//           <div className="flex items-center mb-4 md:mb-0">
//             <div className="mr-4">
//               <Image
//                 src="/logo.png"
//                 alt="Logo"
//                 width={50}
//                 height={50}
//                 className="h-12 w-12"
//               />
//             </div>
//             <div>
//               <h1 className="text-xl font-bold">KRYSTELLE ROMY</h1>
//               <p className="text-sm">RESIDENCE</p>
//             </div>
//           </div>
//           <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
//             <Link href="#" className="hover:text-blue-400 font-medium">
//               HOME
//             </Link>
//             <Link href="#" className="hover:text-blue-400 font-medium">
//               SELL
//             </Link>
//             <Link href="#" className="hover:text-blue-400 font-medium">
//               BUY
//             </Link>
//             <Link href="#" className="hover:text-blue-400 font-medium">
//               ACTIVE LISTINGS
//             </Link>
//             <Link href="#" className="hover:text-blue-400 font-medium">
//               CONTACT
//             </Link>
//             <Link href="#" className="hover:text-blue-400 font-medium">
//               BLOGS
//             </Link>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       {/* <img src="/home.png" alt="" /> */}
//       <section
//         className="relative bg-cover bg-center h-[600px] "
//         style={{
//           backgroundImage: "/home.png"
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
//         <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">FIND YOUR DREAM HOUSE</h1>
//           <p className="text-lg md:text-xl max-w-3xl mb-10">
//             We are recognized for exceeding client expectations and delivering great results through dedication, ease of
//             process, and extraordinary services to our worldwide clients.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 mb-10">
//             <Link
//               href="#"
//               className="px-6 py-3 border-2 border-white hover:bg-white hover:text-gray-800 transition-colors"
//             >
//               WHAT'S MY HOME WORTH
//             </Link>
//             <Link
//               href="#"
//               className="px-6 py-3 border-2 border-white hover:bg-white hover:text-gray-800 transition-colors"
//             >
//               WORK WITH KRYSTELLE
//             </Link>
//           </div>
//           <div className="w-full max-w-4xl flex flex-col sm:flex-row">
//             <input
//               type="text"
//               placeholder="Enter an address, city or neighborhood"
//               className="flex-grow p-4 text-gray-800 focus:outline-none"
//             />
//             <button className="bg-blue-600 text-white px-6 py-4 font-medium hover:bg-blue-700">SEARCH LISTINGS</button>
//           </div>
//         </div>
//       </section>

//       {/* Meet Krystelle Section */}
//       <section className="py-16 container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <Image
//               src="/lady.png"
//               alt="Krystelle Romy"
//               width={600}
//               height={600}
//               className="rounded-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">MEET KRYSTELLE ROMY</h2>
//             <p className="mb-6">
//               Helping you achieve your real estate goals is my top priority. When we work together, it is about YOU. I
//               listen to your needs, work diligently to achieve your objectives, and strive to always exceed your
//               expectations.
//             </p>
//             <p>
//               Krystelle's outcomes driven approach, uprightness, and genuineness have procured him top-maker status and
//               5-star surveys from his clients. He uses the most important innovation, custom advertising methodologies,
//               and top to bottom market information to acquire an edge over different specialists. Krystelle pays
//               attention to his clients' objectives, lays out a customized made arrangement, and imparts constantly
//               bringing about an astounding encounter beginning to end. He highly esteems his own assistance and
//               consideration regarding everything about... that trading land are presumably probably the most close to
//               home and huge occasions in their lives.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Properties Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="flex">
//             <div className="w-12 mr-8">
//               <div className="h-full flex items-center">
//                 <div className="transform -rotate-90 whitespace-nowrap text-lg font-semibold">PROPERTIES</div>
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-3xl md:text-4xl font-bold mb-12">
//                 EXPLORE THE LATEST PROPERTIES
//                 <br />
//                 AND SELECT YOUR HOME
//               </h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <PropertyCard
//                   title="Villa with Amazing View"
//                   price="$600,00,00"
//                   description="Beautiful, updated, ground level Co-op apartment in the desirable Bay..."
//                   bedrooms={4}
//                   bathrooms={3}
//                   image="/properties.png"
//                 />
//                 <PropertyCard
//                   title="Villa with Amazing View"
//                   price="$600,00,00"
//                   description="Beautiful, updated, ground level Co-op apartment in the desirable Bay..."
//                   bedrooms={4}
//                   bathrooms={3}
//                   image="/properties.png"
//                 />
//                 <PropertyCard
//                   title="Villa with Amazing View"
//                   price="$600,00,00"
//                   description="Beautiful, updated, ground level Co-op apartment in the desirable Bay..."
//                   bedrooms={4}
//                   bathrooms={3}
//                   image="/properties.png"
//                 />
//               </div>
//               <div className="flex justify-center mt-12">
//                 <button className="bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700">
//                   LOAD MORE LISTINGS
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="flex">
//             <div className="w-12 mr-8">
//               <div className="h-full flex items-center">
//                 <div className="transform -rotate-90 whitespace-nowrap text-lg font-semibold">SERVICES</div>
//               </div>
//             </div>
//             <div className="flex-1">
//               <h2 className="text-3xl md:text-4xl font-bold mb-12">
//                 EXCLUSIVE. COMMITTED. PROFESSIONAL
//                 <br />
//                 SERVICES WE CAN OFFER YOU
//               </h2>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <ServiceCard
//                   title="SELL YOUR HOME"
//                   description="We do a free evaluation to be sure you want to start selling"
//                   icon="home"
//                 />
//                 <ServiceCard
//                   title="BUY A HOME"
//                   description="We do a free evaluation to be sure you want to start selling"
//                   icon="house"
//                 />
//                 <ServiceCard
//                   title="HOME INSPECTION"
//                   description="We do a free evaluation to be sure you want to start selling"
//                   icon="key"
//                 />
//                 <ServiceCard
//                   title="PROPERTY MANAGEMENT"
//                   description="We do a free evaluation to be sure you want to start selling"
//                   icon="document"
//                 />
//                 <ServiceCard
//                   title="MARKET ANALYSIS"
//                   description="We do a free evaluation to be sure you want to start selling"
//                   icon="search"
//                 />
//                 <ServiceCard
//                   title="PRICE CONSULTATION"
//                   description="We do a free evaluation to be sure you want to start selling"
//                   icon="chart"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 bg-white rounded-lg overflow-hidden">
//             <div className="p-8 md:p-12">
//               <ContactForm />
//             </div>
//             <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
//               <h3 className="text-blue-600 font-medium mb-4">LET'S GRAB COFFEE</h3>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 GET IN TOUCH WITH ME TO PLAN
//                 <br />
//                 YOUR NEXT REAL ESTATE
//               </h2>
//               <p className="text-gray-600">
//                 Our experts and developers would love to contribute their expertise and insights and help you today.
//                 Contact us to help you plan your next transaction, either buying or selling a home.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* News Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-12">
//             THE MOST RECENT
//             <br />
//             LOCAL REAL ESTATE NEWS
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <NewsCard
//               title="Top 10 best appreciating condos in Las Vegas"
//               image="/news1.png"
//             />
//             <NewsCard
//               title="The top 5 most livable Las Vegas neighborhood"
//               image="/news2.png"
//             />
//             <NewsCard
//               title="In Las Vegas home prices have doubled in the...."
//               image="/news3.png"
//             />
//             <NewsCard
//               title="Las Vegas neighborhood where it's better...."
//               image="/news4.png"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-lg font-bold mb-4">About Us</h3>
//               <p className="text-gray-400">
//                 Krystelle Romy Residence is dedicated to providing exceptional real estate services to clients
//                 worldwide.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="text-gray-400 hover:text-white">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-400 hover:text-white">
//                     Properties
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-400 hover:text-white">
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-400 hover:text-white">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Contact Info</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>123 Real Estate Ave</li>
//                 <li>Las Vegas, NV 89123</li>
//                 <li>Phone: (555) 123-4567</li>
//                 <li>Email: contact@krystelle.com</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Follow Us</h3>
//               <div className="flex space-x-4">
//                 <Link href="#" className="text-gray-400 hover:text-white">
//                   <Facebook size={20} />
//                 </Link>
//                 <Link href="#" className="text-gray-400 hover:text-white">
//                   <Twitter size={20} />
//                 </Link>
//                 <Link href="#" className="text-gray-400 hover:text-white">
//                   <Instagram size={20} />
//                 </Link>
//                 <Link href="#" className="text-gray-400 hover:text-white">
//                   <Linkedin size={20} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} Krystelle Romy Residence. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <HeroSection/>
        <AboutSection />
        <PropertiesSection />
        <ServicesSection />
        <ContactSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}

