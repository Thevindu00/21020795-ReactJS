import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <a className="navbar-item">thevindu@gmail.com</a>
          </div>
        </div>
        <div className="navbar-end">
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/about" className="navbar-item">
            About
          </a>
          <a href="/education" className="navbar-item">
            Education
          </a>
          <a href="/contact" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
