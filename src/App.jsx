
import React from 'react'
import Header from './components/Header'
import ProjectSidebar from './components/ProjectSidebar'
import ProjectList from './components/ProjectList'

export default function App() {
  return (
    <>
      <Header />
      <div className="content">
        <ProjectSidebar />
        <main>
          <ProjectList />
        </main>
      </div>
    </>
  )
}
