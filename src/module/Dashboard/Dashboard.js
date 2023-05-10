import {useContext} from "react";
import {RoomStoreContext} from "../Rooms/store/roomsStore";
import {Observer} from "mobx-react-lite";
import styles from './Dashboard.module.scss';


const Dashboard = () => {
    const store = useContext(RoomStoreContext)

    return (<Observer>{() => <div className={styles.container}>
        <span>AllRooms:{store.allRooms}</span>
        <span>ReservedRooms:{store.reservedRooms}</span>
    </div>}
    </Observer>)
}

export default Dashboard