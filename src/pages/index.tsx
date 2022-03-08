
import Head from 'next/head';
import { Highlights } from '../components/Sections/Highlights';
import { Populars } from '../components/Sections/Populars';
import { PopularsTwo } from '../components/Sections/PopularsTwo';
import { SectionOne } from '../components/Sections/SectionOne'
import { SectionTwo } from '../components/Sections/SectionTwo';


// Formas de fazer uma chamada API no Next
// Client-side
// Server-side
// Static Site Generation -> Home de um Blog, post de um Blog, Categoria ou produto em um ecommerce


export default function Home() {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>
    
    <main className="contentContainer">

    <SectionOne/>
    <Highlights/>
    <Populars/>
    <SectionTwo/>
    <PopularsTwo/>

    </main>
    </>
  )
}

