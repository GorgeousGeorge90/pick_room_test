import styles from "./BaseBlock.module.scss";

const BaseBlock = ({id,onClick}) => {

    return (<div className={styles.container}
                 onClick={onClick}>
                <p>Room {id}</p>
    </div>)
}

export default BaseBlock