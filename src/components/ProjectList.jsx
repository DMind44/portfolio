
import React, { useEffect, useState } from 'react'

export default function ProjectList() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const loadProjects = async () => {
      const modules = import.meta.glob('../projects/*.json')
      const loaded = await Promise.all(
        Object.values(modules).map(fn => fn())
      )
      setProjects(loaded.map(mod => mod.default))
    }

    loadProjects()
  }, [])

  return (
    <section id="projects">
      {projects.map((project, index) => (
        <div className="project" key={project.id || index} id={project.id}>
          <h3>{project.title}</h3>
<p><em>{project.logline}</em></p>
          <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap'
}}>
  <p style={{ margin: 0 }}><strong>Credits:</strong> {project.credits}</p>
  <div className="tech-icons">
    {project.tech?.map((t, i) => (
      <img key={i} src={`${import.meta.env.BASE_URL}icons/${t.toLowerCase()}.png`} alt={t} title={t} />
    ))}
  </div>
</div>
          <div className="tech-icons">
            {project.tech?.map((t, i) => (
              <img key={i} src={`${import.meta.env.BASE_URL}icons/${t.toLowerCase()}.png`} alt={t} />
            ))}
          </div>
          <p>{project.description}</p>
          <div style={{
              width: '100%',
              maxWidth: '700px',
              margin: '1rem auto',
              aspectRatio: '16 / 9'
            }}>
            <iframe
              src={project.youtube}
              title={project.title}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '6px',
                border: 0
              }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.images?.map((img, i) => (
              <img key={i} src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`} alt={`preview ${i + 1}`} width="160" height="90" />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
