import { useState } from 'react'
import Counter from '../components/Counter'


export default function Inventory() {
    const [counters, setCounters] = useState([
        {
            title: 'Ferrari Counter',
            initialCount: 5
        },
        {
            title: 'Porsche Counter',
            initialCount: 15
        },
        {
            title: 'Tractor Counter',
            initialCount: 25
        },
        {
            title: 'Corvette Counter',
            initialCount: 50
        },
    ])


    return (
        <div className="App">
            {
                counters.map((counter) => <Counter title={counter.title} initialCount={counter.initialCount} />)
            }
        </div>
    );
}