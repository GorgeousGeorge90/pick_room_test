import {useState} from "react";
import Button from "../../../../UI/Button/Button";
import Rooms from "../../../Rooms/Rooms";
import ModalOne from "../../../../components/ModalOne/ModalOne";


const SelectRoom = ({disabled}) => {
    const [active, setActive] = useState(false)


    return (<>
        <Button value={'Pick Room'}
                onClick={() => setActive(true)}
                disabled={disabled}
        />
        <ModalOne active={active} setActive={() => setActive(false)}>
            <Rooms setActive={setActive}/>
        </ModalOne>
    </>)
}

export default SelectRoom
