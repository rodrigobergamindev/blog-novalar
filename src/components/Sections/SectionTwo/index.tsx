
import styles from './styles.module.scss'
import Image from 'next/image'


export function SectionTwo() {

    return (
        
        <div className={styles.sectionTwo}>
            
            <Image src="/images/mask-group/banner3.png" layout="fill" quality={100}/>

            <div className={styles.sectionTwoContent}>
                <h2>Facebook Messenger vai alertar se alguém fizer captura de tela da conversa</h2>

                <span>#Tecnologia #Redes sociais</span>

            </div>
           
        </div>
   
        
    )
}