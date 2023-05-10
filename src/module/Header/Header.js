import styles from './Header.module.scss';
import logo from './../../assets/img/logo.png';


const Header = () => {

    return (<header>
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt='logo'/>
            </div>
            <div className={styles.title}>
                <h2>RoomPicker</h2>
                <p>It's easy to reserve!</p>
            </div>
            <div className={styles.btn}>
            </div>
        </div>
    </header>)
}

export default Header