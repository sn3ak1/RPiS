import { useRouter } from 'next/router'
import { promises as fs } from 'fs'
import { InferGetStaticPropsType } from 'next'
import path from 'path'
import slug from 'limax'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useEffect, useRef, useState } from 'react'
import MarkdownCard from '../../components/elements/MarkdownCard'

export default function Chapter({chapter}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {query: {slug, q}} = useRouter();
  const scrollTargetRef = useRef(null)

  return (
    <>
      <h1 className="title">{chapter.name}</h1>
      <hr></hr>
      {chapter.parts.map((part, index) => {
        return <MarkdownCard title={part.title} content={part.content} key={index} open={part.title === q} />
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