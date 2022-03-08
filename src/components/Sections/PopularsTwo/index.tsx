
import styles from './styles.module.scss'
import Image from 'next/image'


export function PopularsTwo() {

    return (
        
        <section className={styles.pContainer}>

            <div className={styles.pContent}>

              <div className={styles.pSection}>

                <div className={styles.title}>
                    <h1>
                        Receitas e dicas
                    </h1>

                    <span>Mais populares</span>
                    <div className={styles.divisor}/>
                    </div>

                    <div className={styles.popularTopics}>

                        <div className={styles.popularMain}>

                        <Image src="/images/sections/pizza.jpg" layout="fill" quality={100}/>

                    <div className={styles.popularMainTitle}>
                        <h2>Pizza caseira com rúcula e beterraba</h2>

                        <span>#Receitas e dicas #Pizza</span>
                     </div>

                        </div>
                    
                    <div className={styles.topics}>

                        <h2>Receita e alho com abacaxi: pode parecer estranho, mas está em alta</h2>
                        <span>#Receitas e dicas</span>
                    
                    </div>

                    <div className={styles.divisor}/>

                    <div className={styles.topics}>

                        <h2>Receitas mais feitas em 2021</h2>
                        <span>#Receitas e dicas</span>
                    
                    </div>

                    </div>

                </div>

                <div className={styles.pSection}>

                <div className={styles.title}>
    <h1>
        Móveis
    </h1>

    <span>Mais populares</span>
    <div className={styles.divisor}/>
    </div>
    

    <div className={styles.popularTopics}>

        <div className={styles.popularMain}>

        <Image src="/images/sections/sofa.jpg" layout="fill" quality={100}/>

    <div className={styles.popularMainTitle}>
        <h2>Estampa cinza com elementos coloridos</h2>

        <span>#Móveis #Dicas</span>
     </div>

        </div>
    
    <div className={styles.topics}>

        <h2>Como escolher uma boa luminária</h2>
        <span>#Móveis #Dicas</span>
    
    </div>

    <div className={styles.divisor}/>

    <div className={styles.topics}>

        <h2>Piso laminado Duraflor vale a pena?</h2>
        <span>#Móveis #Dicas</span>
    
    </div>

    </div>

         </div>

            </div>
        </section>
   
        
    )
}