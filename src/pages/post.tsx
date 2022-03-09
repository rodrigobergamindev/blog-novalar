
import Head from 'next/head';
import { Content } from '../components/Sections/Post/Content';
import { HeaderPost } from '../components/Sections/Post/Header';
import { SeeMore } from '../components/Sections/Post/SeeMore';



// Formas de fazer uma chamada API no Next
// Client-side
// Server-side
// Static Site Generation -> Home de um Blog, post de um Blog, Categoria ou produto em um ecommerce


export default function Post() {
  return (
    <>
    <Head>
      <title>Home | Post - Blog Novalar</title>
    </Head>
    
    <main className="contentContainer">

    <HeaderPost/>
    <Content/>
    <SeeMore/>

    </main>
    </>
  )
}

