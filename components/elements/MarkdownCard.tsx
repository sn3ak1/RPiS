import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import RemarkMathPlugin from 'remark-math';
import rehypeKatex from 'rehype-katex'

export default function MarkdownCard({title, content}: {title: string, content: string}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="card" css={css`margin-bottom: 25px`}>
      <header className="card-header" onClick={() => {setOpen(!isOpen)}}>
        <p className="card-header-title">
          {title}
        </p>
        <span className="card-header-icon">
          <span className="icon">
            <i className={!isOpen ? "ri-arrow-right-s-line" : "ri-arrow-down-s-line"}></i>
          </span>
        </span>
      </header>
      
      {isOpen && 
        <div className="card-content" css={css`overflow: auto;`}>
          <div className="content">
            <ReactMarkdown
              remarkPlugins={[gfm, RemarkMathPlugin]}
              rehypePlugins={[rehypeKatex]}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      }
    </div>
  )
}