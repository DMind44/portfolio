
import React, { useEffect, useState, useRef } from 'react';

export default function ProjectSidebar({ projects }) {
  const [activeProject, setActiveProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!projects || projects.length === 0) return;

    requestAnimationFrame(() => {
      const firstVisible = [...document.querySelectorAll('.project')].find(el => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
      });
      if (firstVisible) {
        console.log("Initial load: setting active project to", firstVisible.id);
        setActiveProject(firstVisible.id);
      }
    });
  }, [projects]);

  useEffect(() => {
    if (!projects || projects.length === 0) return;

    const sections = document.querySelectorAll('.project');
    if (!sections.length) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting && entry.intersectionRatio > 0.6);
        if (visible) {
          const projectId = visible.target.id;
          console.log("Observer fired: visible project =", projectId);
          setActiveProject(projectId);
        }
      },
      {
        threshold: [0.6],
      }
    );

    sections.forEach(section => observerRef.current.observe(section));
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [projects]);

  if (!projects || projects.length === 0) return null;

  return (
    <>
      {!isOpen && (
        <button className="sidebar-toggle" onClick={() => setIsOpen(true)}>
          Projects
        </button>
      )}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <button
            className="sidebar-toggle inside"
            onClick={() => setIsOpen(false)}
          >
            Close Projects
          </button>
        )}
        {projects.map((proj, i) => (
          <img
            key={i}
            src={proj.thumb}
            onClick={() => {
              const el = document.getElementById(proj.id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                console.log("Clicked thumbnail:", proj.id);
                setActiveProject(proj.id);
              }
              setIsOpen(false);
            }}
            className={activeProject === proj.id ? 'active' : 'inactive'}
            alt={proj.title}
            title={proj.title}
          />
        ))}
      </div>
    </>
  );
}
