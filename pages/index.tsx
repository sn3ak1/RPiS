import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkCard from '../components/elements/LinkCard'


export default function Home() {
  return (
    <div>

        <LinkCard
          title="Zagadnienia"
          subtitle="Lista zagadnień i odpowiedzi"
          href="/chapters"
        />

        <LinkCard
          title="Nauka"
          subtitle="Jeszcze niedostępne"
        />

    </div>
  )
}
