
import React, { useEffect, useState } from 'react'

export default function ProjectSidebar({ projects }) {
  const [activeProject, setActiveProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveProject(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    const sections = document.querySelectorAll('.project');
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  if (!projects || projects.length === 0) return null;

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Projects' : 'Projects'}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {projects.map((proj, i) => (
          <img
            key={i}
            src={proj.thumb}
            onClick={() => {
              const el = document.getElementById(proj.id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveProject(proj.id);
              }
              setIsOpen(false);
            }}
            className={activeProject === proj.id ? 'active' : ''}
            alt={proj.title}
            title={proj.title}
          />
        ))}
      </div>
    </>
  );
}
