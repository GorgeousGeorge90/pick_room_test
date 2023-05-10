import Button from "../../UI/Button/Button";
import {useContext} from "react";
import {RoomStoreContext} from "../../module/Rooms/store/roomsStore";



const DeleteReserveBtn = ({id}) => {
    const store = useContext(RoomStoreContext)

    const onClick = () => {
        store.deleteReserve(id)
    }

    return (<Button value={'Cancel'}
                onClick={onClick}
        />)
}

export default DeleteReserveBtn