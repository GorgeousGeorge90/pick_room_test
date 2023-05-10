import './ModalOne.scss';

const ModalOne = ({active, setActive, children})=> {

    return <div className={active ?' modal__one active': 'modal__one'} onClick={()=>setActive(false)}>
        <div className={'modal__content'} onClick={e=> e.stopPropagation()}>
            {children}
        </div>
    </div>
}

export default ModalOne