import ServiceCard from "./Service-card";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-linear-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex">
          <div className="w-12 mr-8 hidden md:block">
            <div className="h-full flex items-start">
              <div className="transform -rotate-90 whitespace-nowrap text-lg font-semibold mt-8">
                SERVICES
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              EXCLUSIVE. COMMITTED. PROFESSIONAL
              <br />
              SERVICES WE CAN OFFER YOU
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="SELL YOUR HOME"
                description="We do a free evaluation to be sure you want to start selling"
                image="/home.png"
              />
              <ServiceCard
                title="BUY A HOME"
                description="We do a free evaluation to be sure you want to start selling"
                image="/house.png"
              />
              <ServiceCard
                title="HOME INSPECTION"
                description="We do a free evaluation to be sure you want to start selling"
                image="/key.png"
              />
              <ServiceCard
                title="PROPERTY MANAGEMENT"
                description="We do a free evaluation to be sure you want to start selling"
                image="/service.png"
              />
              <ServiceCard
                title="MARKET ANALYSIS"
                description="We do a free evaluation to be sure you want to start selling"
                image="/search.png"
              />
              <ServiceCard
                title="PRICE CONSULTATION"
                description="We do a free evaluation to be sure you want to start selling"
                image="/home.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
