
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

    let scrolling = false

  const onKey = (e) => {
    if (scrolling) return

    const dir = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0
    if (dir === 0) return

    const sections = document.querySelectorAll('.project')
    const current = [...sections].findIndex((p) => {
      const rect = p.getBoundingClientRect()
      return rect.top >= 0 && rect.top < window.innerHeight
    })

    const next = Math.min(sections.length - 1, Math.max(0, current + dir))
    scrolling = true
    sections[next]?.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => (scrolling = false), 400) // adjust if needed
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
                <img key={i} src={`${import.meta.env.BASE_URL}icons/${t.toLowerCase()}.png`} alt={t} title={t} />
              ))}
            </div>
          </div>
          <p>{project.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacus eget arcu tincidunt dictum. Sed in posuere lorem.</p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            {project.images && project.images.map((img, i) => (
              <img key={i} src={`${import.meta.env.BASE_URL}${img.replace(/^\//, "")}`} alt={`screenshot ${i + 1}`} width="160" height="90" />
            ))}
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
