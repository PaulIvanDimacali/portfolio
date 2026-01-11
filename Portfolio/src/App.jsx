import { act, useState } from 'react'
import './App.css'

function App() {

  return (
    <>

    <Nav />
    <Hero />
    <Projects />
    <Skills />
    <Skill_list />

    </>
  )
}

function Nav() {
  return ( 
          <div className="nav">
        <a href = ""> About </a>
        <a href = ""> Skills </a>
        <a href = ""> Projects </a>
        <a href = ""> Contact </a>
      </div>
  )
}

function Hero() {
  return (
          <div className="hero">
        <h1>Paul's Portfolio</h1>
      </div>
  )
}

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
    </div>
  )
}

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
    </div>
  )
}

function Skill_list() {
  const [active, setActive] = useState(null);

  if (active) {
    console.log(active);
  }
  return (
    <div className="grid">
      <div className="skill-list">
        <button id="backend" className="square" onClick={() => setActive("backend")}></button>
          {active === "backend" && <div id="backend_tools" className="tools">bold</div>}
        </div>

        <div className="skill-list">
          <button id="webdev" className="square" onClick={() => setActive("webdev")}></button>
          {active === "webdev" && <div id="webdev_tools" className="tools">ni</div>}
        </div>

        <div className="skill-list">
          <button id="tools" className="square" onClick={() => setActive("tools")}></button>
          {active === "tools" && <div id="tools_tools" className="tools">wally</div>}
        </div>
      </div>
  )
}

export default App
