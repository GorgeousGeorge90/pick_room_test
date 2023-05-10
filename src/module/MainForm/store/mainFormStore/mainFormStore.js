import {createContext, useContext} from "react";
import {useLocalObservable} from "mobx-react";
import {RoomStoreContext} from "../../../Rooms/store/roomsStore";


export const MainFormStoreContext = createContext()


export const MainFormStoreContextProvider = ({children}) => {
    const roomsStore= useContext(RoomStoreContext)
    const floors = {}
    for ( let i = 3; i < 28; i++) {
        floors[i] = roomsStore.rooms
    }
    const store = useLocalObservable(()=> ({
        towers:[
            { name: 'A' , floors},
            { name: 'B' , floors},
        ],
        finalPlace: { tower: null, floor: null, room: null},

        selectTower: name => {
            store.finalPlace.tower = store.towers.find(tower => tower.name === name)
        },

        selectFloor: number => {
            if (store.finalPlace.tower) {
                for (let key in store.finalPlace.tower.floors) {
                    if (number === Number(key)) {
                        store.finalPlace.floor = number
                    }
                }
            }
        },

        selectRoom: id => {
            if (store.finalPlace.tower && store.finalPlace.floor) {
                let key = store.finalPlace.floor
                let rooms = store.finalPlace.tower.floors[key]
                let room = rooms.find(room => room.id === id)
                if (room.reserved) {
                    store.finalPlace.room = room
                }
            }
        },

        getFinalRoom: ()=> {
            if (store.finalPlace.tower && store.finalPlace.floor && store.finalPlace.room) {
                let result = {
                    Tower: store.finalPlace.tower.name,
                    Floor: store.finalPlace.floor,
                    Room: store.finalPlace.room.id,
                    Date: store.finalPlace.room.date,
                    Comment: store.finalPlace.room.comment,
                }
                console.log(JSON.stringify(result))
            }
        },

        resetReserve: () => {
            store.finalPlace.room = null
            store.finalPlace.floor = null
            store.finalPlace.tower = null
        }
    }))

    return <MainFormStoreContext.Provider value={store}>{children}</MainFormStoreContext.Provider>
}