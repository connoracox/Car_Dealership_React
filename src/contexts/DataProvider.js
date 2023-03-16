import { useState, useEffect, createContext, useContext } from 'react'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cars, setCars] = useState([])
    console.log(cars)
    useEffect(() => {
        async function getCars() {
            const response = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            const data = await response.json()
            setCars(data)
        }
        getCars()
    }, [])

    async function getCar(id) {
        const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
        const data = await response.json()
        return data
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