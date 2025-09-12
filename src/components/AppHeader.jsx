import React, { useState } from "react";
import "./styles/AppHeader.css";

function AppHeader({ title= "manish", summary="completed" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="app-header">
      <img src="/logo.png" alt="react image" className="logo" />
      <h1>{title}</h1>

      <p className="summary">
        Completed: {summary.completed}/{summary.total}
      </p>

      {/* Logo */}
      

      {/* Hamburger Button */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      )}
    </header>
  );
}

export default AppHeader;
