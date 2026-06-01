import React, { useEffect, useState } from 'react'
import { projectService } from '../services/api'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectService.getAllProjects()
        setProjects(response.data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return <div className="text-center py-12">Cargando proyectos...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          {project.imageUrl && (
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
          )}
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="mb-4">
            <p className="text-sm font-semibold text-gray-700">Tecnologías:</p>
            <p className="text-sm text-gray-600">{project.technologies}</p>
          </div>
          <div className="flex gap-2">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Ver Proyecto
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
                GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
