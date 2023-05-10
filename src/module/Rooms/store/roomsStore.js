import {createContext} from "react";
import {useLocalObservable} from "mobx-react";


export const RoomStoreContext = createContext()

export const RoomStoreContextProvider = ({children}) => {
    const store = useLocalObservable(()=>({
        rooms: [
            { id:1 , date: null, comment: '', reserved: false},
            { id:2 , date: null, comment: '', reserved: false},
            { id:3 , date: null, comment: '', reserved: false},
            { id:4 , date: null, comment: '', reserved: false},
            { id:5 , date: null, comment: '', reserved: false},
            { id:6 , date: null, comment: '', reserved: false},
            { id:7 , date: null, comment: '', reserved: false},
            { id:8 , date: null, comment: '', reserved: false},
            { id:9 , date: null, comment: '', reserved: false},
            { id:10 , date: null, comment: '', reserved: false},
        ],
        getComment: id => {
            let room = store.rooms.find(elem => elem.id === id)
            return room.comment
        },
        addComment: (id,text) => {
            let room = store.rooms.find(elem => elem.id === id)
            room.comment = text
        },
        addDate: (id,date) => {
            let room = store.rooms.find(elem => elem.id === id)
            room.date = date
        },
        getDate: id => {
            let room = store.rooms.find(elem => elem.id === id)
            return room.date
        },
        deleteComment: id => {
            let room = store.rooms.find(elem => elem.id === id)
            room.comment = ''
        },
        reserveRoom:id => {
            let room = store.rooms.find(elem => elem.id === id)
            room.reserved = true
        },
        deleteReserve: id => {
            let room = store.rooms.find(elem => elem.id === id)
            room.comment = ''
            room.date = null
            room.reserved = false
        },
        get allRooms() {
            return store.rooms.length;
        },
        get reservedRooms() {
            return store.rooms.filter(room => room.reserved === true).length
        }
    }))


    return <RoomStoreContext.Provider value={store}>{children}</RoomStoreContext.Provider>
}




