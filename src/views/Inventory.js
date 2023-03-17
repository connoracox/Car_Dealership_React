import { useEffect, useState, useContext } from 'react';
import Car from '../components/Car'
import { DataContext } from '../contexts/DataProvider'
import CarForm from '../components/CarForm';
import { AuthContext } from '../contexts/AuthProvider'


export default function Inventory() {
    const { cars } = useContext(DataContext)
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>Inventory</h1>
            {
                (user.loggedIn) ?
                <CarForm />
                :
                <></>
            }
            { cars.map((car) => <Car car={car} key={car.id} />) }
        </div>
    )
}