import { useState, useEffect } from 'react'


// ADDED POKEMON FOR PRACTICE


export default function Pokemon() {
    const [pokemonData, setPokemonData] = useState({})
    const[loadingState, setLoadingState] =useState("LOADING")
    const [pokemonId, setPokemonId] = useState(1)
    const [currSearch, setCurrSearch] = useState(1) 

    useEffect(() => {
        async function getPokemonData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            const data = await response.json()
            setPokemonData(data)
            setLoadingState("LOADED")
        }
        getPokemonData()
    }, [pokemonId])

    function incrementPokemonId(incrementor) {
        setPokemonId(pokemonId+incrementor)
        setCurrSearch(pokemonId+incrementor)
    }

    function handleSearch(e) {
        e.preventDefault()
        setPokemonId(currSearch)
    }

    return (
        <div>
            <h1>Pokemon (added for practice)</h1>
            <form onSubmit={(e) => handleSearch(e)}>
                <input 
                type="number" 
                name="id" 
                id="id" 
                min={1} 
                max={1010} 
                value={currSearch}
                onChange={(e) => setCurrSearch(parseInt(e.target.value))}/>
                <button>Search</button>
            </form>
            {
                (loadingState === "LOADING") ?
                <p>Loading...</p> :
                <div className="pokemon">
                    <img src={pokemonData.sprites.front_default} alt="" />
                    <h2>{pokemonData.name}</h2>
                    {
                        (pokemonId > 1) ?
                        <button onClick={() => incrementPokemonId(-1)}>Previous</button> :
                        <></>
                    }
                    <button onClick={() => incrementPokemonId(1)}>Next</button>

                </div>
            }
        </div>
    )
}