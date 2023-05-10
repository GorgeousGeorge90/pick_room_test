import Button from "../../../../UI/Button/Button";
import {useContext} from "react";
import {RoomStoreContext} from "../../../Rooms/store/roomsStore";


const DeleteCommentBtn = ({id}) => {
    const store = useContext(RoomStoreContext)

    const onClick = () => {
        store.deleteComment(id)
    }

    return <Button onClick={onClick}
                   value={'-'}
    />
}

export default DeleteCommentBtn