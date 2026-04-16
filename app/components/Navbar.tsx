export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 
      bg-white/50 backdrop-blur-md border-b border-white/20 
      shadow-md sticky top-0 z-50 text-gray">
      <h1 className="text-xl font-bold">MetaChain</h1>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-purple-600">Home</a></li>
        <li><a href="#about" className="hover:text-purple-600">About</a></li>
        <li><a href="#partner" className="hover:text-purple-600">Partner</a></li>
      </ul>
    </nav>
  );
}