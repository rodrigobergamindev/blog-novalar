
import Head from 'next/head';
import { Highlights } from '../components/Sections/Highlights';
import { Populars } from '../components/Sections/Populars';
import { PopularsTwo } from '../components/Sections/PopularsTwo';

import { HeaderPosts } from '../components/Sections/Posts/Header';



// Formas de fazer uma chamada API no Next
// Client-side
// Server-side
// Static Site Generation -> Home de um Blog, post de um Blog, Categoria ou produto em um ecommerce


export default function Posts() {
  return (
    <>
    <Head>
      <title>Home | Post - Blog Novalar</title>
    </Head>
    
    <main className="contentContainer">

    <HeaderPosts/>
    <Highlights/>
    <Populars/>
    <PopularsTwo/>

    </main>
    </>
  )
}

