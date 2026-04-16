export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center px-6 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/metaverse-concept-collage-design.jpg')" }}
    >
       {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        
        {/* Badge */}
        <p className="text-sm uppercase tracking-widest text-purple-200 mb-4">
          Next-Gen Web3 Ecosystem
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Metaverse & Blockchain
          <br />
          The Future of Digital Ownership
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Step into a decentralized virtual world where identity, assets, and experiences are owned by you.  
          Powered by blockchain, secured by cryptography, and built for the next generation internet.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button className="bg-white text-purple-700 px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
            Get Started
          </button>
          <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-purple-700 transition">
            Explore Ecosystem
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-200">
          <div>
            <p className="font-semibold text-white">🔗 Decentralized</p>
            <p>Full ownership of digital assets</p>
          </div>

          <div>
            <p className="font-semibold text-white">🌐 Metaverse Ready</p>
            <p>Immersive virtual experiences</p>
          </div>

          <div>
            <p className="font-semibold text-white">🔒 Secure</p>
            <p>Blockchain-powered transparency</p>
          </div>
        </div>

      </div>
    </section>
  );
}