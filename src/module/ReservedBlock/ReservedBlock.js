import styles from './ReservedBlock.module.scss';
import DeleteReserveBtn from "../../components/DeleteReserveBtn/DeleteReserveBtn";
import {useContext} from "react";
import {MainFormStoreContext} from "../MainForm/store/mainFormStore/mainFormStore";


const ReservedBlock = ({id, setActive}) => {
    const store = useContext(MainFormStoreContext)

    return (<div className={styles.container} onClick={() => {
        store.selectRoom(id)
        setActive(false)
    }}>
        <div className={styles.info}>
            <p>Room {id}</p>
            <p style={{color: 'red', fontWeight: 'bolder'}}>reserved</p>
        </div>
        <div className={styles.btn} onClick={e => e.stopPropagation()}>
            <DeleteReserveBtn id={id}/>
        </div>
    </div>)
}

export default ReservedBlock