export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Next.js</p>
      </div>
    </footer>
  )
}