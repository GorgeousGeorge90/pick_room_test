import Button from "../../../../UI/Button/Button";
import {useContext} from "react";
import {RoomStoreContext} from "../../../Rooms/store/roomsStore";


const ReserveBtn = ({id,text,date}) => {
    const store = useContext(RoomStoreContext)

    const onClick = () => {
        store.reserveRoom(id)
    }


    return <Button value={'Reserve'}
                   onClick={onClick}
                   // disabled={disabled}

    />
}

export default ReserveBtn