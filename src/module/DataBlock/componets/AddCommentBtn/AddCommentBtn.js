import Button from "../../../../UI/Button/Button";
import {useContext} from "react";
import {RoomStoreContext} from "../../../Rooms/store/roomsStore";


const AddCommentBtn = ({id, comment}) => {
    const store = useContext(RoomStoreContext)

    const onClick = ()=> {
        store.addComment(id,comment.value)
        comment.resetValue()
    }

    return <Button onClick={onClick}
                   value={'+'}
    />
}

export default AddCommentBtn