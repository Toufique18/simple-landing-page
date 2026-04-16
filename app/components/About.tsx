"use client";

import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState<'metaverse' | 'blockchain'>('metaverse');

  return (
    <section id="about" className="px-6 py-28 bg-gray-50">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl text-black md:text-5xl font-bold mb-6">
          The Future of Virtual Reality
        </h2>
        <p className="text-lg text-gray-600">
          Explore how Metaverse and Blockchain are reshaping the internet into a decentralized digital world.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="bg-white shadow-md rounded-2xl p-2 flex gap-2">
          <button
            onClick={() => setActiveTab('metaverse')}
            className={`px-6 py-2 rounded-xl font-medium transition ${activeTab === 'metaverse' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Metaverse
          </button>
          <button
            onClick={() => setActiveTab('blockchain')}
            className={`px-6 py-2 rounded-xl font-medium transition ${activeTab === 'blockchain' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Blockchain
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {activeTab === 'metaverse' ? (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl text-black font-semibold mb-4">🌐 What is the Metaverse?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The metaverse is a persistent 3D digital universe where users interact in real-time through avatars, virtual environments, and immersive experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It combines VR, AR, and real-time rendering to create digital worlds for gaming, socializing, education, and business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h4 className="text-xl text-black font-semibold mb-4">🚀 Metaverse Highlights</h4>
              <ul className="space-y-3 text-gray-600">
                <li>✔ Immersive 3D environments</li>
                <li>✔ Social virtual interaction</li>
                <li>✔ Digital economies & assets</li>
                <li>✔ VR & AR integration</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl text-black font-semibold mb-4">🔗 What is Blockchain?</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Blockchain is a decentralized ledger technology that records transactions securely across a distributed network.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It powers cryptocurrencies, NFTs, and Web3 applications, enabling trustless and transparent systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border">
              <h4 className="text-xl text-black font-semibold mb-4">🔐 Blockchain Benefits</h4>
              <ul className="space-y-3 text-gray-600">
                <li>✔ Decentralized ownership</li>
                <li>✔ Secure transactions</li>
                <li>✔ Smart contracts automation</li>
                <li>✔ Transparent systems</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Footer highlight */}
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <p className="text-gray-600">
          Together, Metaverse and Blockchain are building a new decentralized internet where users own their identity, assets, and experiences.
        </p>
      </div>
    </section>
  );
}