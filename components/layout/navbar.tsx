import Link from "next/link";
import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

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
                  <div className="is-clickable navbar-item pr-5 with-icon">
                    <span className="icon"><i className="ri-meteor-line"></i></span>
                    <span className="title is-5 icon-text">RPiS</span>
                  </div>
              </Link>
              
              <div className="is-flex-grow-5 is-clearfix">
                <Link href="/search">
                  <div className="is-clickable navbar-item pr-5 is-pulled-right with-icon" css={css`height: 52px;`}>
                    <span className="icon"><i className="ri-search-line"></i></span>
                  </div>
                </Link>
              </div>

            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar;