import { useState, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function PostForm() {
    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [sellingPrice, setSellingPrice] = useState('')
    const [kmDriven, setKmDriven] = useState('')
    const { addCar } = useContext(DataContext)

    async function handleSubmit(e) {
        e.preventDefault()
        const newCar = await addCar(name, year, sellingPrice, kmDriven)
        setName('')
        setYear('')
        setSellingPrice('')
        setKmDriven('')
    }

return (
    <form onSubmit={handleSubmit}>
        <div>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Make and Model..." 
                onChange={(e) => setName(e.target.value)}
                value={name}
            /><br /><br />
        </div>
        <div>
            <input
                type="text" 
                name="year" 
                id="year" 
                placeholder="Year..."
                onChange={(e) => setYear(e.target.value)}
                value={year}
            /><br /><br />
        </div>
        <div>
            <input 
                type="text" 
                name="selling price" 
                id="selling price" 
                placeholder="Selling Price..."
                onChange={(e) => setSellingPrice(e.target.value)}
                value={sellingPrice}
            /><br /><br />
        </div>
        <div>
            <input 
            type="text" 
            name="km driven" 
            id="km driven" 
            placeholder="KM Driven..."
            onChange={(e) => setKmDriven(e.target.value)}
            value={kmDriven}
        /><br /><br />
        </div>
        <button>Add Car</button><br /><br />

    </form>
)

}