
import React, { useEffect, useState } from 'react'

export default function ProjectSidebar() {
  const [projects, setProjects] = useState([])
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const load = async () => {
      const modules = import.meta.glob('../projects/*.json')
      const loaded = await Promise.all(Object.values(modules).map(m => m()))
      setProjects(loaded)
    }
    load()

    const onScroll = () => {
      const sections = document.querySelectorAll('.project')
      let closest = null
      let closestDist = Infinity
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const dist = Math.abs(rect.top)
        if (dist < closestDist) {
          closestDist = dist
          closest = section.id
        }
      })
      setActiveId(closest)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <aside className="sidebar">
      {projects.map((p) => (
        <img
          key={p.id}
          src={`/src/assets/images/${p.images[0]}`}
          alt={p.title}
          onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            border: p.id === activeId ? '2px solid white' : '2px solid transparent'
          }}
        />
      ))}
    </aside>
  )
}
