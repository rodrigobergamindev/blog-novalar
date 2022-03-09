
import styles from './styles.module.scss'
import Image from 'next/image'
import { SearchBox } from './SearchBox'
import Link from 'next/link'
import {useRouter} from 'next/router'


export function Nav() {

    const router = useRouter()

    return (
        <div className={styles.navContainer}>
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

                <Link href="/posts">
                            
                {
                                router.asPath === "/posts" || router.asPath === "/post" ? 
                                (
                                    <span className={styles.activeLink}>
                                        Eletrônicos
                                    </span>
                                ) 
                                : 
                                (
                                    <span>Eletrônicos</span>
                                )
                            }
                    
                    </Link>

                <Link href="/eletrodomesticos"><span>Eletrodomésticos</span></Link>

                <Link href="/moveis"><span>Móveis</span></Link>

                <Link href="/receitas"><span>Receitas e dicas</span></Link>

            
                <SearchBox/>

                
                    <button type="button" className={styles.buttonStore}>
                        Acesse nossa loja
                    </button> 
                

           </div>
        </div>
    )
}