
import styles from './styles.module.scss'
import {GrSearch} from 'react-icons/gr'

export function SearchBox() {

    return (
        <div className={styles.searchBox}>         
            <input type="text" className={styles.searchTerm} placeholder="Digite o que procura"/>
            <button type="button" className={styles.buttonSearch}> <GrSearch/></button>
        </div>
    )
}