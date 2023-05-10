import {useContext} from "react";
import {MainFormStoreContext} from "../MainForm/store/mainFormStore/mainFormStore";
import styles from './Towers.module.scss';


const Towers = ({setActive}) => {
    const store = useContext(MainFormStoreContext)

    return (<ul className={styles.towers}>
        {
            store.towers.map(tower => <li key={tower.name} onClick={()=> {
                store.selectTower(tower.name)
                setActive(false)
            }}>{tower.name}</li>)
        }
    </ul>)
}

export default Towers