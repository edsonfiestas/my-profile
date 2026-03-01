import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Mi Portfolio
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="/skills" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Habilidades
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};