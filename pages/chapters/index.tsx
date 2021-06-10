import { promises as fs } from 'fs'
import { InferGetStaticPropsType } from 'next'
import path from 'path'
import slug from 'limax';
import LinkCard from '../../components/elements/LinkCard';

export default function Chapters({chapters}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <p className="title">
        Zagadnienia
      </p>
     

      {chapters.map(chapter => {
        return (
          <LinkCard
            key={chapter.slug}
            title={chapter.name}
            subtitle={`/chapters/${chapter.slug}`}
            href={`/chapters/${chapter.slug}`}
          />
        )
      })}
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const dataDir = path.join(process.cwd(), 'data')
  const filenames = await fs.readdir(dataDir)

  const chapters = filenames.map((filename) => {
    const filePath = path.join(dataDir, filename)
    const parsed = path.parse(filename)
    return {
      name: parsed.name,
      filename: filename,
      slug: slug(parsed.name)
    }
  })

  return {
    props: {
      chapters
    }
  }
}