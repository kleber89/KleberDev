import { useState } from 'react'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-500">KleberDev Portfolio</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-4 py-2 rounded ${
                  currentPage === 'home' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => setCurrentPage('projects')}
                className={`px-4 py-2 rounded ${
                  currentPage === 'projects' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Proyectos
              </button>
              <button
                onClick={() => setCurrentPage('skills')}
                className={`px-4 py-2 rounded ${
                  currentPage === 'skills' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Habilidades
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentPage === 'home' && (
          <div className="text-center py-20">
            <h2 className="text-5xl font-bold mb-4">Bienvenido a Mi Portfolio</h2>
            <p className="text-xl text-gray-400 mb-8">
              Desarrollador Full Stack | Java | React | Cloud
            </p>
            <button
              onClick={() => setCurrentPage('projects')}
              className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Ver Mis Proyectos
            </button>
          </div>
        )}

        {currentPage === 'projects' && (
          <div>
            <h2 className="text-4xl font-bold mb-8">Mis Proyectos</h2>
            <Projects />
          </div>
        )}

        {currentPage === 'skills' && (
          <div>
            <h2 className="text-4xl font-bold mb-8">Mis Habilidades</h2>
            <Skills />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 KleberDev. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
