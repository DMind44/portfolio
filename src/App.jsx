import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProjectSidebar from './components/ProjectSidebar';
import ProjectList from './components/ProjectList';
import About from './components/About';

export default function App() {
  const [projectMetadata, setProjectMetadata] = useState([]);

  useEffect(() => {
    const el = document.querySelector('.project');
    if (el) {
      const yOffset = -1;
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
        <Routes>
          <Route
            path="/projects"
            element={
              <>
                <ProjectSidebar projects={projectMetadata} />
                <main>
                  <ProjectList onProjectMetadata={setProjectMetadata} />
                </main>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
