import {useInput} from "../../../../utils&hooks/useInput";
import {useState} from "react";
import {Observer} from "mobx-react-lite";
import styles from './RoomItem.module.scss';
import DataBlock from "../../../DataBlock/DataBlock";
import BaseBlock from "../../../../components/BaseBlock/BaseBlock";
import ReservedBlock from "../../../ReservedBlock/ReservedBlock";


const RoomItem = ({id, reserved, setActive}) => {
    const comment = useInput('')
    const [editRoom,setEditRoom] = useState(false)


    if (reserved) {
        return (<Observer>{() => <li className={styles.room_item}>
            <ReservedBlock id={id} setActive={setActive}/>
        </li>
        }</Observer>)
    }


    return (<Observer>{() =>
        <li className={styles.room_item}>
            {
                !editRoom ? <BaseBlock id={id}
                                       onClick={() => setEditRoom(true)}
                    />:
                    <DataBlock id={id}
                               onClick={() => setEditRoom(false)}
                               value={comment}
                    />
            }
        </li>}
    </Observer>)
}

export default RoomItem