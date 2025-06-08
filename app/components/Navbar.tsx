import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}