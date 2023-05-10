import Button from "../../../../UI/Button/Button";
import {useState} from "react";
import Towers from "../../../Towers/Towers";
import Modal from "../../../../components/Modal/Modal";


const SelectTower = () => {
    const [active, setActive] = useState(false)


    return (<>
        <Button value={'Pick Tower'}
            onClick={()=>setActive(true)}
        />
        <Modal active={active} setActive={()=>setActive(false)}>
            <Towers setActive={setActive}/>
        </Modal>
        </>)
}

export default SelectTower