"use client"

import gsap from "gsap"
import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Center, OrbitControls } from "@react-three/drei"

import { myProjects } from "../constants/index.jsx"

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const projectCount = myProjects.length

  const handleNavigation = (direction) => {
    if (isAnimating) return // Prevent navigation during animation

    setIsAnimating(true)

    // First animate out the current content
    gsap.to(".projects-animated-text", {
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
      onComplete: () => {
        // Update the index after fade out
        setSelectedProjectIndex((prevIndex) => {
          if (direction === "previous") {
            return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
          } else {
            return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
          }
        })
      },
    })
  }

  // This effect will run when selectedProjectIndex changes
  useEffect(() => {
    // Animate in the new content
    gsap.fromTo(
      ".projects-animated-text",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.inOut",
        onComplete: () => setIsAnimating(false),
      },
    )
  }, [selectedProjectIndex])

  const currentProject = myProjects[selectedProjectIndex]

  return (
    <section className="projects-section">
      <p className="projects-heading">My Selected Work</p>

      <div className="projects-grid">
        <div className="projects-info-container">
          <div className="projects-spotlight-container">
            <img
              src={currentProject.spotlight || "/placeholder.svg"}
              alt="spotlight"
              className="projects-spotlight-image"
            />
          </div>

          <div className="projects-logo-container" style={currentProject.logoStyle}>
            <img className="projects-logo" src={currentProject.logo || "/placeholder.svg"} alt="logo" />
          </div>

          <div className="projects-content">
            <p className="projects-title projects-animated-text">{currentProject.title}</p>
            <p className="projects-desc projects-animated-text">{currentProject.desc}</p>
            <p className="projects-subdesc projects-animated-text">{currentProject.subdesc}</p>
          </div>

          <div className="projects-footer">
            <div className="projects-tags">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="projects-tech-logo">
                  <img src={tag.path || "/placeholder.svg"} alt={tag.name} />
                </div>
              ))}
            </div>

            <a className="projects-link" href={currentProject.href} target="_blank" rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="projects-arrow" />
            </a>
          </div>

          <div className="projects-navigation">
            <button className="projects-nav-btn" onClick={() => handleNavigation("previous")} disabled={isAnimating}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="projects-nav-btn" onClick={() => handleNavigation("next")} disabled={isAnimating}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="projects-right-arrow" />
            </button>
          </div>
        </div>

        <div className="projects-canvas-container">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>{/* Your 3D model would go here */}</Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Projects

