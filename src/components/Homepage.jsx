import React from "react";
import "./Homepage.css"; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate();
    return (
        <div className="section-container">
            <section className="section section1">
                <h2>Projects</h2>
                <button onClick={() => navigate('/projects')}>
                    View Projects
                </button>
            </section>
            <section className="section section2">
                <h2>More About Me</h2>
                <button onClick={() => navigate('/about')}>
                    View Bio
                </button>
            </section>
            <section className="section section3">
                <h2>My Other Sites</h2>
                <div className="links">
                    <a href="https://github.com/dmind44" target="_blank" rel="noopener noreferrer">
                        <button>
                            Github
                        </button>
                    </a>
                    <a href="https://linkedin.com/in/david-mindlin" target="_blank" rel="noopener noreferrer">
                        <button>
                            LinkedIn
                        </button>
                    </a>
                    <a href="https://david064.itch.io/" target="_blank" rel="noopener noreferrer">
                        <button>
                            Itch.io
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
}