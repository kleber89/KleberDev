import React, { useEffect, useState } from 'react'
import { skillService } from '../services/api'

export default function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await skillService.getAllSkills()
        setSkills(response.data)
      } catch (error) {
        console.error('Error fetching skills:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  if (loading) {
    return <div className="text-center py-12">Cargando habilidades...</div>
  }

  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Otros'
    if (!acc[category]) acc[category] = []
    acc[category].push(skill)
    return acc
  }, {})

  return (
    <div className="space-y-8">
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category}>
          <h3 className="text-2xl font-bold mb-4 text-blue-600">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {categorySkills.map((skill) => (
              <div key={skill.id} className="bg-blue-100 px-4 py-2 rounded-lg">
                <p className="font-semibold text-gray-800">{skill.name}</p>
                {skill.proficiencyLevel && (
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-20 bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(skill.proficiencyLevel / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600">{skill.proficiencyLevel}/5</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
