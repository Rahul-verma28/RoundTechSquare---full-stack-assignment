import Link from 'next/link'

export default function Footer() {
  return (
    <footer className=" bg-sky-50 py-12">
      <div className="container mx-auto px-4 md:px-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">KRYSTELLE ROMY GROUP</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-2">KRYSTELLE ROMY</h3>
              <p className="text-gray-700">DRE#01977487</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">EMAIL</h3>
              <p className="text-gray-700">krystelle@gmail.com</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">PHONE</h3>
              <p className="text-gray-700">(123) 456 7890</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">ADDRESS</h3>
              <p className="text-gray-700">
                1123 HERMOSA AVENUE, SUITE #210,<br />
                HERMOSA BEACH, CA 92804
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-gray-600 mb-8">
          <p>
            Krystelle Romy is a real estate agent licensed by the state of California affiliated with compass. Krystelle Romy is a real estate broker licensed by the state of California and abides by equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.
          </p>
        </div>
        
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">© 2023, KRYSTELLE. POWERED BY <Link href="#" className="text-blue-600 hover:underline">ROUNDTECHSQUARE</Link></p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">TERMS OF USE</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">PRIVACY POLICY</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
