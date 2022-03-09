
import styles from './styles.module.scss'
import Image from 'next/image'
import {BsChevronRight} from 'react-icons/bs'
import Link from 'next/link'


export function HeaderPosts() {

    return (
        
        <div className={styles.headerContainer}>

        <nav className={styles.postNav}>
               <a className={styles.prevLink}>Home</a>
               <span><BsChevronRight color='#939393' size={10}/></span>
               <a className={styles.activeLink}>Eletrônicos</a>
        </nav>

            <h1>Eletrônicos</h1>
            
            <div className={styles.header}>
            <Image src="/images/mask-group/mask-group2x.png" layout="fill" quality={100}/>

                <Link href="/post">
                <div className={styles.sectionOneContent}>
                <h2>Galaxy S22 Ultra: o novo carro-chefe</h2>

                <span>#Telefones e celulares #Tecnologia</span>

                 </div>
                 </Link>
            </div>
       

        
        
        </div>
        
    )
}

