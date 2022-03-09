
import styles from './styles.module.scss'
import Image from 'next/image'
import {BsChevronRight} from 'react-icons/bs'


export function HeaderPost() {

    return (
        
        <div className={styles.headerContainer}>
            
            <div className={styles.header}>
                <Image src="/images/mask-group/mask-group2x.png" layout="fill" quality={100}/>
            </div>
       

        <nav className={styles.postNav}>
               <a className={styles.prevLink}>Eletrônicos</a>
               <span><BsChevronRight color='#939393' size={10}/></span>
               <a className={styles.activeLink}>Galaxy S22 Ultra: o novo carro-chefe</a>
        </nav>
        
        </div>
        
    )
}