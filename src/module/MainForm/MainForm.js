import styles from './MainForm.module.scss';
import Button from "../../UI/Button/Button";
import {useContext} from "react";
import {MainFormStoreContext} from "./store/mainFormStore/mainFormStore";
import {Observer} from "mobx-react-lite";
import SelectTower from "./components/SelectTower/SelectTower";
import SelectFloor from "./components/SelectFloor/SelectFloor";
import SelectRoom from "./components/SelectRoom/SelectRoom";


const MainForm = () => {
    const store = useContext(MainFormStoreContext)


    return (<Observer>{()=><div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>PickRoomForm</h3>
            </div>
            <hr/>
            <div className={styles.btn}>
                <SelectTower/>
                <SelectFloor/>
                <SelectRoom disabled={!store.finalPlace.floor}/>
            </div>
            <div className={styles.result}>
                <h3>Reserved room:</h3>
                <p>Tower:{store.finalPlace.tower ? store.finalPlace.tower.name: <span>not selected</span>}</p>
                <p>Floor:{store.finalPlace.floor ? store.finalPlace.floor: <span>not selected</span>}</p>
                <p>Room:{store.finalPlace.room ? store.finalPlace.room.id: <span>not selected</span>}</p>
                <p>Date:{store.finalPlace.room ? store.finalPlace.room.date: <span>not selected</span>}</p>
                <p>Comment:{store.finalPlace.room ? store.finalPlace.room.comment: <span>not selected</span>}</p>
            </div>
            <div className={styles.data_btn}>
                <Button value={'GetConsole'}
                        onClick={()=>store.getFinalRoom()}
                        disabled={store.finalPlace.room === null}
                />
                <Button value={'Reset'}
                        onClick={()=>store.resetReserve()}
                />
            </div>
        </div>
    </div>}
    </Observer>)
}

export default MainForm