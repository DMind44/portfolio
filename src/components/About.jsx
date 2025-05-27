
import React from "react";
import "./About.css";
import headshot from "../assets/images/headshotphoto.png";

export default function About() {
  return (
    <div className="about-container">
      <img src={headshot} alt="David Mindlin Headshot" className="about-headshot" />
      <h1>Hello, I’m David Mindlin</h1>
      <p>I’m a Los Angeles-based game developer and programmer.</p>
      <p>I’ve always been passionate about games and technology. I majored in computer science at Harvey Mudd College, and am currently pursuing my Master of Science in Game Design at USC School of Cinematic Arts. I have 3+ years of experience working in the tech industry, at Meta and Datadog. I am currently looking to work on a systems heavy game, and design unique and fun player experiences within those systems.</p>
      <p>I have been an avid gamer since childhood, starting with Pokemon Emerald on the Game Boy Advance. I currently am a huge fan of puzzle and Roguelike games, with some of my favorites being Slay the Spire, Balatro, Blue Prince, and Baba is You. I also love competitive online games, such as League of Legends and Valorant.</p>
      <p>I’m interested in many areas of game development, including design, user experience, playtesting and usability, and technical development.</p>
    </div>
  );
}
