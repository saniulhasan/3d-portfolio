"use client"

import { useState } from "react"

import { Menu, X } from "lucide-react"

function Menubar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="menubar">
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="/">AdrianH</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              <li>
                <a href="/" className={window.location.pathname === "/" ? "active" : ""}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className={window.location.pathname === "/about" ? "active" : ""}>
                  About
                </a>
              </li>
              <li>
                <a href="/work" className={window.location.pathname === "/work" ? "active" : ""}>
                  Work
                </a>
              </li>
              <li>
                <a href="/contact" className={window.location.pathname === "/contact" ? "active" : ""}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <ul>
              <li>
                <a href="/" className={window.location.pathname === "/" ? "active" : ""} onClick={toggleMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className={window.location.pathname === "/about" ? "active" : ""} onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="/work" className={window.location.pathname === "/work" ? "active" : ""} onClick={toggleMenu}>
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={window.location.pathname === "/contact" ? "active" : ""}
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
      
    </div>
  )
}

export default Menubar

