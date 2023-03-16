import { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function Profile() {
    const { title } = useContext(DataContext)


    return (
        <div>
            <h1>Profile</h1>
            { title }
        </div>
    )
}