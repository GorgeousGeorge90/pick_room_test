import Button from "../../../../UI/Button/Button";
import {useContext} from "react";
import {RoomStoreContext} from "../../../Rooms/store/roomsStore";


const ReserveBtn = ({id}) => {
    const store = useContext(RoomStoreContext)
    const text = store.getComment(id)
    const date = store.getDate(id)

    const onClick = () => {
        store.reserveRoom(id)
    }


    return <Button value={'Reserve'}
                   onClick={onClick}
                   disabled={!text && !date}

    />
}

export default ReserveBtn