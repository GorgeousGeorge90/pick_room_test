import './Button.scss';


const Button = ({value, onClick,disabled}) => {

    return (<button className={disabled ? 'btn disabled': 'btn'}
                    onClick={onClick}
                    disabled={disabled}
        >{value}</button>
    )
}

export default Button