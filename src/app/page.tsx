import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          ¡Hola! Soy Developer
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Desarrollador Full Stack especializado en React, Next.js y TypeScript.
          Creando experiencias web modernas y funcionales.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link 
            href="/skills"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Habilidades
          </Link>
        </div>
      </div>
    </div>
  );
}