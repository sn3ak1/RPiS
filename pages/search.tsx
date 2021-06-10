import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { promises as fs } from 'fs'
import { InferGetStaticPropsType } from 'next'
import path from 'path'
import slug from 'limax'
import Fuse from 'fuse.js'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

const fuseOptions = {
  includeScore: true,
  minMatchCharLength: 2,
  keys: ['title', 'chapter.name']
}


export default function Search({titles}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [query, setQuery] = useState('')
  const fuse = useMemo(() => new Fuse(titles, fuseOptions), [titles])
  const [result, setResult] = useState(null)

  useEffect(() => {
    const res = fuse.search(query);
    setResult(res);
  }, [query])

  return (
    <div>

      {/* <h1 className="title">Szukaj</h1> */}
      
      <div className="field" css={css`margin-bottom: 20px`}>
        <div className="control">
            <p className="control is-expanded has-icons-right">
              <input className="input is-rounded" value={query} onChange={(ev) => setQuery(ev.target.value)} type="search" placeholder="Szukaj..."/>
              <span className="icon is-small is-right"><i className="ri-search-line"></i></span>
            </p>
        </div>
      </div>

      <div>
      {result && result.map(res => {
        return <div key={res.refIndex}>
          <Link href={{
            pathname: `/chapters/${res.item.chapter.slug}/`,
            query: {q: res.item.title}
          }}>
            <div className="box is-clickable" css={css`margin: 5px 8px;`}>
              <p className="title is-6">{res.item.title}</p>
              <p className="subtitle is-6">{res.item.chapter.name}</p>
            </div>
          </Link>
        </div>
      })}
      </div>
      
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  const dataDir = path.join(process.cwd(), 'data')
  const filenames = await fs.readdir(dataDir)
  const arr = filenames.map(async filename => {
    const contents = await fs.readFile(path.join(dataDir, filename), 'utf8')
    const titles = contents.match(/^# .+/gm).map(el => {
      const chname = path.parse(filename).name
      return {
        title: el.slice(2),
        chapter: {
          name: chname,
          slug: slug(chname)
        }
      }
    })
    
    return titles
  })

  return {
    props: {
      titles: (await Promise.all(arr)).flat()
    }
  }
}
