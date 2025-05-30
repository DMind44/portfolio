import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ color: '#E3D095', fontWeight: 'bold', fontSize: '1.3rem' }}>
        David Mindlin – Technical Game Designer
      </div>
      <div className="nav-buttons">
        <button onClick={() => navigate('/')}>Projects</button>
        <button onClick={() => navigate('/about')}>About Me</button>
        <button onClick={() => window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank')}>
          Resume
        </button>
      </div>
    </header>
  )
}
