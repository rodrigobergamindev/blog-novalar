
import styles from './styles.module.scss'
import Image from 'next/image'


export function SeeMore() {

    return (
        
        <section className={styles.container}>

            <h1>Veja também</h1>

            <div className={styles.content}>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image src="/images/see-more/nintendo.png" layout="fill" quality={100}/>
                    </div>

                    <h2>
                        Confira os jogos em promoção na Nintendo Switch
                    </h2>

                    <div className={styles.divisor}/>

                    <span>#Games #Promoção</span>
                
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image src="/images/see-more/celular.png" layout="fill" quality={100}/>
                    </div>

                    <h2>
                        Confira os jogos em promoção na Nintendo Switch
                    </h2>

                    <div className={styles.divisor}/>

                    <span>#Games #Promoção</span>
                
                </div>

                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image src="/images/see-more/promocao.png" layout="fill" quality={100}/>
                    </div>

                    <h2>
                        Confira os jogos em promoção na Nintendo Switch
                    </h2>

                    <div className={styles.divisor}/>

                    <span>#Games #Promoção</span>
                
                </div>

            </div>
        </section>
   
        
    )
}