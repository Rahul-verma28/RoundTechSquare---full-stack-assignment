import ContactForm from "./Contact-form";

export default function ContactSection() {
  return (
    <section className="py-16 md:px-10" id="contact">
      <div className="container mx-auto px-4 ">
        <div className="grid md:grid-cols-2 gap-0 bg-sky-50 rounded-lg overflow-hidden shadow-md">
          <div className="p-4 md:p-10">
            <ContactForm />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-blue-600 font-medium mb-4">LET&apos;S GRAB COFFEE</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              GET IN TOUCH WITH ME TO PLAN
              <br />
              YOUR NEXT REAL ESTATE
            </h2>
            <p className="text-gray-600">
              Our experts and developers would love to contribute their expertise and insights and help you today.
              Contact us to help you plan your next transaction, either buying or selling a home.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

