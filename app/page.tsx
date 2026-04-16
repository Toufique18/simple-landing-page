import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Partner from "./components/Partner";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}

      <Hero />
     

      {/* About Section */}
      <About />

      {/* Partner Section */}
      <Partner/>

      <Footer />
    </main>
  );
}
