
import styles from './styles.module.scss'
import Image from 'next/image'
import { SearchBox } from './SearchBox'

export function Nav() {

    return (
        <div className={styles.navContainer}>
           <div className={styles.navContent}>

                <a>Home</a>

                <a>Eletrônicos</a>

                <a>Eletrodomésticos</a>

                <a>Móveis</a>

                <a>Receitas e dicas</a>

            
                <SearchBox/>

                <a>
                    <button type="button" className={styles.buttonStore}>
                        Acesse nossa loja
                    </button> 
                </a>

           </div>
        </div>
    )
}