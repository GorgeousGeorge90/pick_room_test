import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import {useContext, useEffect, useState} from "react";
import {RoomStoreContext} from "../../../Rooms/store/roomsStore";




const MeetPicker = ({id}) => {
    const [date, setDate] = useState(null)
    const store = useContext(RoomStoreContext)

    useEffect(()=> {
        if (date) {
            store.addDate(id,date.toLocaleString())
        } else {
            store.addDate(id,null)
        }
    },[date])

    return (<div>
        <DateTimePicker value={date} onChange={setDate}/>
    </div>)
}

export default MeetPicker