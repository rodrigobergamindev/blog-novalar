
import styles from './styles.module.scss'
import Image from 'next/image'


export function Highlights() {

    

    return (
        
        <section className={styles.hlContainer}>

            <div className={styles.hlContent}>

                <div className={styles.hlMain}>

                    <Image src="/images/sections/cook.png" layout="fill" quality={100} priority/>

                    <div className={styles.hlMainTitle}>
                        <h2>Como deixar sua cozinha visualmente mais limpa</h2>

                        <span>#Eletrodomésticos #Interiores</span>
                    </div>

                </div>


                <div className={styles.hlSecondary}>

                    <div className={styles.card}>
                        <Image src="/images/sections/nintendo.png" layout="fill" quality={100} priority/>

                        <div className={styles.cardTitle}>
                            <h2>Confira os jogos em promoção na Nintendo Switch</h2>

                            <span>#Games #Promoção</span>

                        </div>
                    
                    </div>


                    <div className={styles.card}>
                        <Image src="/images/sections/drone.png" layout="fill" quality={100} priority/>

                        <div className={styles.cardTitle}>
                            <h2>Melhores microsds para colocar em seu drone</h2>

                            <span>#Tecnologia</span>

                        </div>
                    </div>

                </div>

            </div>
        </section>
   
        
    )
}