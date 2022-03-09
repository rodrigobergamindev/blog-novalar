
import styles from './styles.module.scss'
import Image from 'next/image'


export function Footer() {

    return (
        
        <footer className={styles.footerContainer}>
            
        
                
                <div className={styles.logo}>
                    <Image src="/images/logo/1x.png" layout="fill" quality={100}/>
                </div>
                
              
                <div className={styles.navContent}>

                        <a>Home</a>

                        <a>Games</a>

                        <a>TV e vídeo</a>

                        <a>Informática</a>

                        <a>Eletrodomésticos</a>

                        <a>Celulares</a>

                    </div>

                <div className={styles.info}>
                    <span className={styles.url}>novalar.com.br</span>
                    <span className={styles.copyright}>2022. Todos os direitos reservados.</span>
                </div>
        </footer>
   
        
    )
}