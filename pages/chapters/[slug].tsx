import { useRouter } from 'next/router'
import { promises as fs } from 'fs'
import { InferGetStaticPropsType } from 'next'
import path from 'path'
import slug from 'limax'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import RemarkMathPlugin from 'remark-math';
import rehypeKatex from 'rehype-katex'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import { useState } from 'react'

function MarkdownCard({title, content}: {title: string, content: string}) {
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
        <div className="card-content">
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

export default function Chapter({chapter}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {query: {slug}} = useRouter();

  return (
    <>
      <h1 className="title">{chapter.name}</h1>
      <hr></hr>
      {chapter.parts.map((part, index) => {
        return <MarkdownCard title={part.title} content={part.content} key={index} />
      })}
      
    </>
  )
}

export const getStaticPaths = async () => {
  const dataDir = path.join(process.cwd(), 'data')
  const filenames = await fs.readdir(dataDir)
  const slugs = filenames.map(name => slug(path.parse(name).name))

  const paths = slugs.map(slug => {
    return {
      params: {
        slug: slug
      }
    }
  })

  return {
    paths, fallback: false,
  }
}


export const getStaticProps = async (ctx) => {
  const dataDir = path.join(process.cwd(), 'data')
  const filenames = await fs.readdir(dataDir)
  const file = filenames.find(name => slug(path.parse(name).name) === ctx.params.slug)
  const contents = await fs.readFile(path.join(dataDir, file), 'utf8');

  const parts = contents.split('# ').map(ch => {
    const a = ch.split('\n');
    return {
      title: a.shift().trim(),
      content: a.join('\n').trim(),
    }
  })
  
  parts.shift();

  return {
    props: {
      chapter: {
        name: path.parse(file).name,
        parts
      }
    }
  }
}