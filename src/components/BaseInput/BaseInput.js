import styles from './BaseInput.module.scss';

const BaseInput = ({value, placeholder}) => {

    return (<input className={styles.input}
                   type='text'
                   placeholder={placeholder}
                   {...value}
        />
    )
}

export default BaseInput