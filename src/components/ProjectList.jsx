
import React, { useEffect, useState } from 'react'

export default function ProjectList({ onProjectMetadata }) {
  const [projects, setProjects] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    const loadProjects = async () => {
      const modules = import.meta.glob('../projects/*.json')
      const loaded = await Promise.all(Object.values(modules).map(fn => fn()))
      const data = loaded.map(mod => mod.default)
      setProjects(data)

      // Pass clean metadata to sidebar
      if (onProjectMetadata) {
        const metadata = data.map((proj, index) => ({
          id: proj.id || `project-${index}`,
          title: proj.title,
          thumb: proj.thumbnail ?  `${import.meta.env.BASE_URL}${proj.thumbnail}`: `${import.meta.env.BASE_URL}${proj.images[0]}`,
          tech: proj.tech || []
        }))
        onProjectMetadata(metadata)
      }
    }

    loadProjects()
  }, [])

  return (
    <section id="projects">
      {projects.map((project, index) => (
        <div className="project" key={project.id || index} id={project.id || `project-${index}`}>
          <h1>{project.title}</h1>
          <p><em>{project.logline}</em></p>
          <p>{project.description}</p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <p style={{ margin: 0 }}><strong>Credits:</strong> {project.credits}</p>
            <div className="tech-icons">
              {project.tech?.map((t, i) => (
                <img
                  key={i}
                  src={`${import.meta.env.BASE_URL}icons/${t.toLowerCase()}.png`}
                  alt={t}
                  title={t}
                />
              ))}
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '1rem'
          }}>
            {project.images?.map((img, i) => (
              <img
                key={i}
                src={`${import.meta.env.BASE_URL}${img}`}
                alt={`preview ${i + 1}`}
                width="160"
                height="90"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}${img}`)}
              />
            ))}
          </div>
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
        </div>
      ))}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="enlarged" style={{
            maxWidth: '90%',
            maxHeight: '90%',
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(255,255,255,0.5)'
          }} />
        </div>
      )}
    </section>
  )
}
