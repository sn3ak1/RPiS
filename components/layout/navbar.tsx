import Link from "next/link";
import React, { useState } from "react";

function NavbarItem({text, href, icon, isActive}: {text: string, href: string, icon: string | null, isActive: boolean}) {
  return (
    <Link href={href}>
      <a className={`navbar-item ${icon ? 'with-icon' : ''} ${isActive ? 'is-active' : ''}`}>
        <span className="navbar-item-name icon-text">
          { icon && <span className="icon"><i className={icon}></i></span> }
          {text}
        </span>
      </a>
    </Link>
  )
}

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="section main-navbar">
        <div className="container">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <Link href="/">
                <a className="">
                  <div className="navbar-item pr-5 with-icon">
                    <span className="icon"><i className="ri-meteor-line"></i></span>
                    <span className="title is-5 icon-text">Fizykapp</span>
                    
                  </div>
                </a>
              </Link>
              {/* <a role="button" onClick={() => setMenuOpen(!menuOpen)} className={`navbar-burger burger ${menuOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navigation">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a> */}
            </div>

            <div id="navigation" className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
              <div className="navbar-start">
              </div>
              <div className="navbar-end">
                
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar;