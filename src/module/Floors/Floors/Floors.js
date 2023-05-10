import {useContext} from "react";
import {MainFormStoreContext} from "../../MainForm/store/mainFormStore/mainFormStore";
import styles from './Floors.module.scss';


const Floors = ({setActive})=> {
    const store = useContext(MainFormStoreContext)
   if (!store.finalPlace.tower)
       return null

    const items = Object.keys(store.finalPlace.tower.floors)

    return (<ul className={styles.floors}>
        {
            items.map(item => <li key={item}
                                  onClick={()=> {
                                      store.selectFloor(+item)
                                      setActive(false)
                                  }}
            >{item}</li>)
        }
    </ul>)
}

export default Floors