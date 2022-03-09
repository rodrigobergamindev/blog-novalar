
import styles from './styles.module.scss'
import Image from 'next/image'



export function Content() {

    return (
        
        <div className={styles.container}>
         
         <div className={styles.post}>
             
            <div className={styles.title}>
                <h1>Galaxy S22 Ultra: o novo carro-chefe</h1>
                <h3>Por Rodrigo Lima, 28/03/2022</h3>
            </div>

            <p>
            O iPhone 13 chegou ao Brasil na última sexta-feira (22) e, sempre que um novo aparelho da Apple é lançado, 
            os fãs da marca se sentem tentados a trocar de smartphone. Mas vale a pena investir no lançamento ou aproveitar 
            a consequente queda de preço do iPhone 12, lançado em 2020? É o que vamos responder no comparativo de ficha técnica de hoje.
            </p>

            <div className={styles.imagePost}>
                <Image src="/images/post/banner-post.png" layout="fill" quality={100}/>
            </div>

            <p>
            O preço, sem dúvida, é um fator importante. O iPhone 13 começa em R$ 7.599 em sua versão de 128 GB. 
            Porém, apesar de ter tido poucas mudanças em termos de visual, 
            o celular de 2021 da Apple ganhou novo processador, melhor bateria e novo conjunto de câmeras. Por outro lado, 
            a linha iPhone 12 ainda continua deixando muito celular intermediário comendo poeira. Seu desempenho ainda é muito bom.
            </p>


            <h2>Qual a diferença, então?</h2>

            <p>
            Se você pegasse dois objetos na mão, você conseguiria sentir a diferença de 10 gramas entre eles? 
            A não ser que você seja uma balança de precisão humana, a resposta é provavelmente: não. Pois essa é a principal diferença entre o 
            iPhone 12 e o 13 quando falamos de peso de dimensões. Aqui, nem vou considerar que o novo smartphone é 0,3 mm mais espesso do que o anterior — mais uma vez, 
            é o tipo de coisa que só se saberia medindo com uma régua bastante precisa. 
            A construção de ambos os aparelhos é exatamente a mesma, com vidro resistente à riscos na frente (Gorilla Glass), 
            traseira do mesmo material e corpo de alumínio. Ambos são resistentes à água, com certificação IP68.
            </p>

            <div className={styles.imagePost}>
                <Image src="/images/post/post-image.png" layout="fill" quality={100}/>
            </div>
            
        </div>

        <aside className={styles.asideLinks}>

            <h3>Mais de Celulares</h3>

            <div className={styles.topic}>

                <div className={styles.topicImage}>
                    <Image src="/images/post/aside/topic1-aside.png" layout="fill" quality={100}/>
                </div>

                <span>
                    Conheça os melhores celulares Samsung de 2022
                </span>

            </div>

            <div className={styles.topic}>

                <div className={styles.topicImage}>
                    <Image src="/images/post/aside/topic2-aside.png" layout="fill" quality={100}/>
                </div>

                <span>
                O que fazer quando seu celular explode?
                </span>

            </div>

            <div className={styles.topic}>

                <div className={styles.topicImage}>
                    <Image src="/images/post/aside/topic3-aside.png" layout="fill" quality={100}/>
                </div>

                <span>
                Samsung Galaxy ou Motorola G?
                </span>

            </div>


            <div className={styles.tags}>
                <h3>Tags</h3>

                <span>
                #Informática 
                #Dicas #Celulares #Tecnologia #Apple #Telefones #Tendência
                </span>
            </div>

        </aside>
        
        </div>
        
    )
}