
import styles from './styles.module.scss'
import Image from 'next/image'
import {useRouter} from 'next/router'


export function Populars() {

    const router = useRouter()

    return (
        
        <section className={styles.pContainer}>

            <div className={styles.pContent}>

                <div className={styles.pSection}>
                    
                    {
                        router.asPath.includes('posts') ? 
                        
                        (
                            <div className={styles.popularTopics}>

                            <div className={styles.popularMain}>
    
                            <Image src="/images/sections/smarttv.jpg" layout="fill" quality={100} priority/>
    
                        <div className={styles.popularMainTitle}>
                            <h2>Como escolher sua nova Smart TV</h2>
    
                            <span>#Tecnologia #TV e vídeo</span>
                         </div>
    
                            </div>
                        
                        <div className={styles.topics}>
    
                            <h2>Os melhores filmes de aventura dos últimos 10 anos</h2>
                            <span>#Tecnologia #TV e vídeo</span>
                        
                        </div>
    
                        <div className={styles.divisor}/>
    
                        <div className={styles.topics}>
    
                            <h2>Comemorando o dia do Orgulho Geek!</h2>
                            <span>#Tecnologia #TV e vídeo</span>
                        
                        </div>
    
                        </div>

                        ) 
                        : (
                            <>
                             <div className={styles.title}>
                    <h1>
                        Eletrônicos
                    </h1>

                    <span>Mais populares</span>
                    <div className={styles.divisor}/>
                    </div>

                    <div className={styles.popularTopics}>

                        <div className={styles.popularMain}>

                        <Image src="/images/sections/smarttv.jpg" layout="fill" quality={100} priority/>

                    <div className={styles.popularMainTitle}>
                        <h2>Como escolher sua nova Smart TV</h2>

                        <span>#Tecnologia #TV e vídeo</span>
                     </div>

                        </div>
                    
                    <div className={styles.topics}>

                        <h2>Os melhores filmes de aventura dos últimos 10 anos</h2>
                        <span>#Tecnologia #TV e vídeo</span>
                    
                    </div>

                    <div className={styles.divisor}/>

                    <div className={styles.topics}>

                        <h2>Comemorando o dia do Orgulho Geek!</h2>
                        <span>#Tecnologia #TV e vídeo</span>
                    
                    </div>

                    </div>
                            </>
                        )
                    }
                </div>

         


                <div className={styles.pSection}>

                    {
                        router.asPath.includes('posts') ? 
                        (
                            <div className={styles.popularTopics}>

                            <div className={styles.popularMain}>
    
                            <Image src="/images/sections/lavaeseca.jpg" layout="fill" quality={100}/>
    
                        <div className={styles.popularMainTitle}>
                            <h2>Lava e seca: vale a pena comprar?</h2>
    
                            <span>#Eletrodomésticos #dicas</span>
                        </div>
    
                            </div>
                        
                        <div className={styles.topics}>
    
                            <h2>Como escolher um bom aspirador de pó no caso de ter pets em casa</h2>
                            <span>#Eletrodomésticos</span>
                        
                        </div>
    
                        <div className={styles.divisor}/>
    
                        <div className={styles.topics}>
    
                            <h2>Diferenças entre lareiras para aquecer seu lar</h2>
                            <span>#Eletrodomésticos</span>
                        
                        </div>
    
                        </div>

                        ) : (
                        
                            <>
                                 <div className={styles.title}>
                    <h1>
                        Eletrodomésticos
                    </h1>

                    <span>Mais populares</span>
                    <div className={styles.divisor}/>
                    </div>
                    

                    <div className={styles.popularTopics}>

                        <div className={styles.popularMain}>

                        <Image src="/images/sections/lavaeseca.jpg" layout="fill" quality={100}/>

                    <div className={styles.popularMainTitle}>
                        <h2>Lava e seca: vale a pena comprar?</h2>

                        <span>#Eletrodomésticos #dicas</span>
                    </div>

                        </div>
                    
                    <div className={styles.topics}>

                        <h2>Como escolher um bom aspirador de pó no caso de ter pets em casa</h2>
                        <span>#Eletrodomésticos</span>
                    
                    </div>

                    <div className={styles.divisor}/>

                    <div className={styles.topics}>

                        <h2>Diferenças entre lareiras para aquecer seu lar</h2>
                        <span>#Eletrodomésticos</span>
                    
                    </div>

                    </div>
                            </>

                        )
                    }

                </div>


            </div>
        </section>
   
        
    )
}