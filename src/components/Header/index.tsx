
import styles from './styles.module.scss'
import Image from 'next/image'
import { Nav } from '../Navigation'

export function Header() {



    return (
        <>
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>

            <div className={styles.logo}>
               
            <Image src="/images/logo/2x.png" alt="logo blog novalar" layout="fill" quality={100} priority/>
                
            </div>

                <div className={styles.searchBox}>
                   
                    <input type="text" className={styles.searchTerm} placeholder="O que você está procurando?"/>
                    <button type="button" className={styles.buttonSearch}>Buscar</button>
                </div>

            </div>


        </header>

        <Nav/>
        </>
    )
}