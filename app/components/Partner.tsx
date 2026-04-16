export default function Partner() {
  const partners = [
    {
      name: "Ethereum",
      logo: "/partners/ethereum.png",
    },
    {
      name: "Polygon",
      logo: "/partners/polygon.png",
    },
    {
      name: "Solana",
      logo: "/partners/solana.png",
    },
    {
      name: "Binance",
      logo: "/partners/binance.png",
    },
    {
      name: "Avalanche",
      logo: "/partners/avalanche.png",
    },
    {
      name: "Chainlink",
      logo: "/partners/chainlink.png",
    },
  ];

  return (
    <section id="partner" className="px-6 py-24 bg-gray-50 text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">
        Trusted Web3 Partners
      </h2>

      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        We collaborate with leading blockchain ecosystems powering the future of decentralized applications and digital economies.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="group bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-12 h-12 object-contain group-hover:scale-110 transition"
              />
            </div>

            {/* Name */}
            <p className="font-semibold text-gray-700 group-hover:text-purple-600 transition">
              {partner.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}