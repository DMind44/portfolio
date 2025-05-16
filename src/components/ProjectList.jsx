
import React, { useEffect, useState } from 'react'

export default function ProjectList() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const loadProjects = async () => {
      const modules = import.meta.glob('../projects/*.json')
      const loaded = await Promise.all(
        Object.values(modules).map(loader => loader())
      )
      setProjects(loaded)
    }

    loadProjects()

    const onKey = (e) => {
      const dir = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0
      if (dir !== 0) {
        const sections = document.querySelectorAll('.project')
        const visible = Array.from(sections).findIndex(p => {
          const rect = p.getBoundingClientRect()
          return rect.top >= 0 && rect.bottom <= window.innerHeight + 100
        })
        const next = Math.min(sections.length - 1, Math.max(0, visible + dir))
        sections[next]?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="projects">
      <h2 style={{ textAlign: 'center' }}>My Projects</h2>
      {projects.map((project) => (
        <div className="project" key={project.id} id={project.id}>
          <h3>{project.title}</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p><strong>Credits:</strong> {project.credits}</p>
            <div className="tech-icons">
              {project.tech.map((t, i) => (
                <img key={i} src={`/src/assets/icons/${t.toLowerCase()}.png`} alt={t} title={t} />
              ))}
            </div>
          </div>
          <p>{project.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacus eget arcu tincidunt dictum. Sed in posuere lorem.</p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <img src="/src/assets/images/placeholder1.png" alt="placeholder 1" width="160" height="90" />
            <img src="/src/assets/images/placeholder2.png" alt="placeholder 2" width="160" height="90" />
            <img src="/src/assets/images/placeholder3.png" alt="placeholder 3" width="160" height="90" />
          </div>
          {project.youtube && (
            <div style={{
              aspectRatio: '16 / 9',
              width: '100%',
              maxWidth: '700px',
              margin: '1rem auto 0'
            }}>
              <iframe
                src={project.youtube}
                title={project.title}
                style={{ width: '100%', height: '100%', borderRadius: '6px' }}
                loading="lazy"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
