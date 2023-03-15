import { Link } from 'react-router-dom'

export default function Car(props) {
    return (
        <div className="car">
            <p>Car: {props.car.name}</p>
            <p>Year: {props.car.year}</p>
            <p>Selling Price: {props.car.selling_price}</p>
            <p>KM Driven: {props.car.km_driven}</p>
            {
                (props.hidelink) ?
                <></> :
                <Link to={`/car/${props.car.id}`}>Read More</Link>
            }
            <br /><br /><br />
        </div>
    )
}