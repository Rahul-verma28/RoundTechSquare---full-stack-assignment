import NewsCard from "./News-card";

export default function NewsSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          THE MOST RECENT
          <br />
          LOCAL REAL ESTATE NEWS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <NewsCard
            title="Top 10 best appreciating condos in Las Vegas"
            image="/news1.png"
          />
          <NewsCard
            title="The top 5 most livable Las Vegas neighborhood"
            image="/news2.png"
          />
          <NewsCard
            title="In Las Vegas home prices have doubled in the...."
            image="/news3.png"
          />
          <NewsCard
            title="Las Vegas neighborhood where it's better...."
            image="/news4.png"
          />
        </div>
      </div>
    </section>
  )
}

