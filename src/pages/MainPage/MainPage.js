import styles from './MainPage.module.scss';
import MainForm from "../../module/MainForm/MainForm";


const mainPage = () => {

    return (<div className={styles.main}>
        <div className={styles.container}>
            <MainForm/>
        </div>
    </div>)
}

export default mainPage