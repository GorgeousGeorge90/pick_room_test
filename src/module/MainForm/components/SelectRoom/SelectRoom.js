import {useState} from "react";
import Button from "../../../../UI/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import Rooms from "../../../Rooms/Rooms";


const SelectRoom = ({disabled}) => {
    const [active, setActive] = useState(false)


    return (<>
        <Button value={'Pick Room'}
                onClick={() => setActive(true)}
                disabled={disabled}
        />
        <Modal active={active} setActive={() => setActive(false)}>
            <Rooms setActive={setActive}/>
        </Modal>
    </>)
}

export default SelectRoom
