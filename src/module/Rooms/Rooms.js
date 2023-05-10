import RoomItem from "./components/RoomItem/RoomItem";
import styles from './Rooms.module.scss';
import {useContext} from "react";
import {RoomStoreContext} from "./store/roomsStore";
import {Observer} from "mobx-react-lite";


const Rooms = ({setActive}) => {
    const store = useContext(RoomStoreContext)

    return (<Observer>{() => <ul className={styles.rooms}>
        {
            store.rooms.map(room => <RoomItem key={room.id}
                                              setActive={setActive}
                                              {...room}/>)
        }
    </ul>}
    </Observer>)
}

export default Rooms