import { useState } from "react"
import "../styles/navbar.css"
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Macrosoft
      </a>
      <button 
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    )
}