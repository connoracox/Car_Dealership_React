import { useState, useEffect, createContext, useContext } from 'react'
import { getFirestore, getDocs, collection, doc, getDoc } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cars, setCars] = useState([])
    const db = getFirestore()
    console.log(cars)
    useEffect(() => {
        async function getCars() {
            const querySnapshot = await getDocs(collection(db, 'cars'))
            const loadedCars = []
            querySnapshot.forEach((doc) => {
                loadedCars.push({
                    id: doc.id,
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

    async function getCar(id) {
        const docRef = doc(db, 'cars', id)
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

    const value = {
        cars,
        getCar,
        getPokemonData
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}