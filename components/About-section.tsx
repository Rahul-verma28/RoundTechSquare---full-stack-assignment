import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 container mx-auto px-4 md:px-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/lady.png"
            alt="Krystelle Romy"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MEET KRYSTELLE ROMY</h2>
          <p className="mb-6">
            Helping you achieve your real estate goals is my top priority. When we work together, it is about YOU. I
            listen to your needs, work diligently to achieve your objectives, and strive to always exceed your
            expectations.
          </p>
          <p>
            Krystelle&apos;s outcomes driven approach, uprightness, and genuineness have procured him top-maker status and
            5-star surveys from his clients. He uses the most important innovation, custom advertising methodologies,
            and top to bottom market information to acquire an edge over different specialists. Krystelle pays attention
            to his clients&apos; objectives, lays out a customized made arrangement, and imparts constantly bringing about an
            astounding encounter beginning to end. He highly esteems his own assistance and consideration regarding
            everything about... that trading land are presumably probably the most close to home and huge occasions in
            their lives.
          </p>
        </div>
      </div>
    </section>
  )
}

