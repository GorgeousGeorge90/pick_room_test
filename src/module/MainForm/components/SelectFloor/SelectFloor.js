import Floors from "../../../Floors/Floors/Floors";
import Modal from "../../../../components/Modal/Modal";
import {useState} from "react";
import Button from "../../../../UI/Button/Button";


const SelectFloor = () => {
    const [active, setActive] = useState(false)


    return (<>
        <Button value={'Pick Floor'}
                onClick={() => setActive(true)}
        />
        <Modal active={active} setActive={() => setActive(false)}>
            <Floors setActive={setActive}/>
        </Modal>
    </>)
}

export default SelectFloor