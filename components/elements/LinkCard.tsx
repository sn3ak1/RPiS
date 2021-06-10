import Link from "next/link";
import React from "react";
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

type props = {
  title: string;
  subtitle?: string;
  href?: string;
  disabled?: boolean;
}

export default function LinkCard({title, subtitle, href, disabled = false}: props) {
  return (
    <div className={`card ${href ? "is-clickable" : ""}`} css={css`margin-bottom: 20px;`}>
      <div className="card-content">
        <div className="content">
          {href && 
            <Link href={href}>
              <div className="has-text-centered" css={css`justify-content: center; align-items: center;`}>
                <h1 className="title is-4">{title}</h1>
                <p>{subtitle}</p>
              </div>
            </Link>
          }
          {
            (!href || disabled) && 
            <div className="has-text-centered has-text-grey">
              <h1 className="title is-4 has-text-grey">{title}</h1>
              <p>{subtitle}</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}