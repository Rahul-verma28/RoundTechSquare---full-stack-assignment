import PropertyCard from "./Property-card";

export default function PropertiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex">
          <div className="w-12 mr-8 hidden md:block">
            <div className="h-full flex items-start">
              <div className="transform -rotate-90 whitespace-nowrap text-lg font-semibold mt-10">
                PROPERTIES
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              EXPLORE THE LATEST PROPERTIES
              <br />
              AND SELECT YOUR HOME
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PropertyCard
                title="Villa with Amazing View"
                price="$600,00,00"
                description="Beautiful, updated, ground level Co-op apartment in the desirable Bay..."
                bedrooms={4}
                bathrooms={3}
                image="/properties.png"
              />
              <PropertyCard
                title="Villa with Amazing View"
                price="$600,00,00"
                description="Beautiful, updated, ground level Co-op apartment in the desirable Bay..."
                bedrooms={4}
                bathrooms={3}
                image="/properties.png"
              />
              <PropertyCard
                title="Villa with Amazing View"
                price="$600,00,00"
                description="Beautiful, updated, ground level Co-op apartment in the desirable Bay..."
                bedrooms={4}
                bathrooms={3}
                image="/properties.png"
              />
            </div>
            <div className="flex justify-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-4 font-medium hover:bg-blue-700 rounded-md">
                LOAD MORE LISTINGS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
