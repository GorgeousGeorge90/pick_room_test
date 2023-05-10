import {useState} from 'react';


export const useInput = (initialValue) => {
    const [value,setValue] = useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    const resetValue = ()=> setValue('')

    return {value, onChange, resetValue}
}