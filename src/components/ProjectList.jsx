
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

    let scrolling = false;
    const onKey = (e) => {
      if (scrolling) return;

      const dir = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
      if (dir === 0) return;

      const sections = document.querySelectorAll('.project');
      const current = [...sections].findIndex((p) => {
        const rect = p.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
      });

      const next = Math.min(sections.length - 1, Math.max(0, current + dir));
      scrolling = true;
      sections[next]?.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => (scrolling = false), 400);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [])

  return (
    <section id="projects">
      {projects.map((project) => (
        <div className="project" key={project.id} id={project.id}>
          <h3>{project.title}</h3>
          <div style={{
            width: '100%',
            maxWidth: '700px',
            margin: '1rem auto',
            position: 'relative',
            paddingBottom: '56.25%' }}>
            <iframe style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '6px',
              border: 0
            }}
              src={project.youtube}
              title={project.title}
              style={{ width: '100%', height: '100%', borderRadius: '6px' }}
              loading="lazy"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      ))}
    </section>
  )
}
