import styles from './DataBlock.module.scss';
import BaseInput from "../../components/BaseInput/BaseInput";
import {Observer} from "mobx-react-lite";
import {useContext} from "react";
import {RoomStoreContext} from "../Rooms/store/roomsStore";
import AddCommentBtn from "./componets/AddCommentBtn/AddCommentBtn";
import ReserveBtn from "./componets/ReserveBtn/ReserveBtn";
import DeleteCommentBtn from "./componets/DeleteCommentBtn/DeleteCommentBtn";
import DeleteReserveBtn from "../../components/DeleteReserveBtn/DeleteReserveBtn";
import MeetPicker from "./componets/MeetPicker/MeetPicker";



const DataBlock = ({id, value, onClick})=> {
    const store = useContext(RoomStoreContext)
    const text = store.getComment(id)
    const date = store.getDate(id)


    return (<Observer>{() => <div className={styles.block}>
            <div className={styles.container}>
                <div className={styles.close} onClick={onClick}>
                    X
                </div>
                <div className={styles.date}>
                    <MeetPicker id={id}/>
                </div>
                <div className={styles.comment}>
                    <BaseInput placeholder={'Comment...'} value={value}/>
                    <AddCommentBtn id={id} comment={value}/>
                    <DeleteCommentBtn id={id}/>
                </div>
                <div className={styles.reserve}>
                    <ReserveBtn id={id}/>
                    <DeleteReserveBtn id={id}/>
                </div>
            </div>
        </div>}
        </Observer>
    )
    }

export default DataBlock