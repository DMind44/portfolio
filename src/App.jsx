
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import ProjectSidebar from './components/ProjectSidebar'
import ProjectList from './components/ProjectList'

export default function App() {
  const [projectMetadata, setProjectMetadata] = useState([])

  useEffect(() => {
    const el = document.querySelector('.project');
    if (el) {
      const yOffset = -1; // force re-snapping just past 0
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      setTimeout(() => {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        <ProjectSidebar projects={projectMetadata} />
        <main>
          <ProjectList onProjectMetadata={setProjectMetadata} />
        </main>
      </div>
    </>
  )
}
