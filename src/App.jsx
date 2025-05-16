
import React from 'react'
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import ProjectSidebar from './components/ProjectSidebar'

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <ProjectSidebar />
        <main>
          <ProjectList />
        </main>
      </div>
    </div>
  )
}
