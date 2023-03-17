import { Link } from 'react-router-dom'

export default function Car(props) {
    return (
        <div className="car">
            <h3>Car: {props.car.name}</h3>
            <p>Year: {props.car.year}</p>
            <p>Selling Price: {props.car.sellingPrice}</p>
            <p>KM Driven: {props.car.kmDriven}</p>
            {
                (props.hideLink) ?
                <></> :
                <Link to={`/car/${props.car.uid}/${props.car.id}`}>Read More</Link>
            }
            <br /><br /><br />
        </div>
    )
}