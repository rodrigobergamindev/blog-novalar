
import styles from './styles.module.scss'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Link from 'next/link'


export function Footer() {

    const router = useRouter()

    return (
        
        <footer className={styles.footerContainer}>
            
        
                
                <div className={styles.logo}>
                    <Image src="/images/logo/1x.png" layout="fill" quality={100} priority/>
                </div>
                
              
                <div className={styles.navContent}>

                        <Link href="/">
                            {
                                router.asPath === "/" ? 
                                (
                                    <span className={styles.activeLink}>
                                        Home
                                    </span>
                                ) 
                                : 
                                (
                                    <span>Home</span>
                                )
                            }
                            </Link>

                        <Link href="/games">Games</Link>

                        <Link href="/tv">TV e vídeo</Link>

                        <Link href="/informatica">Informática</Link>

                        <Link href="/eletromesticos">Eletrodomésticos</Link>

                        <Link href="/celulares">Celulares</Link>

                    </div>

                <div className={styles.info}>
                    <span className={styles.url}>novalar.com.br</span>
                    <span className={styles.copyright}>2022. Todos os direitos reservados.</span>
                </div>
        </footer>
   
        
    )
}