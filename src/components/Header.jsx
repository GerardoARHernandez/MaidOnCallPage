

const Header = () => {
  return (
    <header className="bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">Maid on Call</div>
          <nav className="space-x-6 text-xl">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600">
              Cleaning Services
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600">
              Blog
            </a>
            <a href="#certificates" className="text-gray-700 hover:text-blue-600">
              Gift Certificates
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Book Appointment
          </button>
        </div>
      </header>
  )
}

export default Header