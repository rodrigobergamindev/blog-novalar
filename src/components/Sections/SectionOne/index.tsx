
import styles from './styles.module.scss'
import Image from 'next/image'


export function SectionOne() {

    return (
        
        <div className={styles.sectionOne}>
            
            <Image src="/images/mask-group/mask-group2x.png" layout="fill" quality={100}/>

            <div className={styles.sectionOneContent}>
                <h2>Galaxy S22 Ultra: o novo carro-chefe</h2>

                <span>#Telefones e celulares #Tecnologia</span>

            </div>
           
        </div>
   
        
    )
}