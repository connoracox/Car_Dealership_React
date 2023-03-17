import { useState, useEffect, createContext, useContext } from 'react'
import { getFirestore, getDocs, collection, doc, getDoc, addDoc, collectionGroup, query } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cars, setCars] = useState([])
    const { user } = useContext(AuthContext)
    const db = getFirestore()
    console.log(cars)
    useEffect(() => {
        async function getCars() {
            const carQuery = query(collectionGroup(db, 'cars'))
            const querySnapshot = await getDocs(carQuery)
            const loadedCars = []
            querySnapshot.forEach((doc) => {
                console.log(doc.ref.parent.parent?.id)
                loadedCars.push({
                    id: doc.id,
                    uid: doc.ref.parent.parent?.id,
                    ...doc.data()
                })
            })
            setCars(loadedCars)
            // const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            // const data = await response.json()
            // setCars(data)
        }
        getCars()
    }, [])

    async function getCar(uid, id) {
        const docRef = doc(db, 'users', uid, 'cars', id)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
            throw new Error
        }

        return docSnap.data()
        // const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
        // const data = await response.json()
        // return data
    }

    async function getPokemonData(pokemonId) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        const data = await response.json()
        return data 
    }

    async function addCar(name, year, sellingPrice, kmDriven) {
        const newCar = {
            name,
            year,
            sellingPrice,
            kmDriven,
            username: user.displayName
        }

        const docRef = await addDoc(collection(db, 'users', user.uid, 'cars'), newCar)

        newCar.id = docRef.id

        setCars([
            newCar,
            ...cars
        ])

        return newCar
    }

    const value = {
        cars,
        getCar,
        getPokemonData,
        addCar 
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}