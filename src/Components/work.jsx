"use client"

import { useState } from "react"
import "./experience-section.css"

const ExperienceSection = () => {
  // Experience data in array format
  const experiences = [
    {
      id: 1,
      company: "Framer",
      logo: "/framer-logo.svg", // Replace with actual logo path
      role: "Lead Web Developer",
      period: "2022 - Present",
      description:
        "Enhanced Framer's interactive design platform by building and optimizing prototyping tools, empowering designers to create high-fidelity experiences and bridging the gap between design and development.",
    },
    {
      id: 2,
      company: "Figma",
      logo: "/figma-logo.svg", // Replace with actual logo path
      role: "Web Developer",
      period: "2020 - 2022",
      description:
        "Improved Figma's real-time design collaboration tool by developing new components and refining existing features, enhancing workflow efficiency and creativity for design teams worldwide.",
    },
  ]

  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className="experience-container">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className={`experience-item ${hoveredItem === exp.id ? "hovered" : ""}`}
          onMouseEnter={() => setHoveredItem(exp.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="logo-container">
            <div className="logo-wrapper">
              {exp.company === "Framer" ? (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="4" fill="#1A1A1A" />
                  <path d="M14 14V20H20V14H26V20H20V26L14 20V26H8V14H14Z" fill="white" />
                </svg>
              ) : (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#1A1A1A" />
                  <circle cx="20" cy="15" r="3" fill="#FF5E5E" />
                  <circle cx="15" cy="25" r="3" fill="#A259FF" />
                  <circle cx="25" cy="25" r="3" fill="#19BCFE" />
                </svg>
              )}
            </div>
            <div className="vertical-line"></div>
          </div>
          <div className="content">
            <div className="header">
              <h3 className="company">{exp.company}</h3>
              <p className="role-period">
                {exp.role} — {exp.period}
              </p>
            </div>
            <p className="description">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExperienceSection

