/**
 * Styles
 */
import './Card.css';

import moment from 'moment';
import 'moment/locale/es';

import pin from '../../assets/images/icons/pin.svg'
import bed from '../../assets/images/icons/bed.svg'

import Price from '../price/Price';


function Card(props) {
    
    const {slug, name, photo, description, availabilityFrom, availabilityTo, rooms, city, country, price, id} = props;
    

    return (
        <div className="card">
            <img src={photo.default} alt="foto hotel" className="hotel-photo" />
            <h2 className ="name"> {name} </h2>
            <div className="availability">{`Desde el ${moment(availabilityFrom).format('dddd')}, ${moment(availabilityFrom).format('LL')}`}</div>
            <div className="availability">{`Hasta el ${moment(availabilityTo).format('dddd')}, ${moment(availabilityTo).format('LL')}`}</div>
            <p className="description">{description}</p>
            <div className="location">
                <img src={pin} alt="icono ubicación" className= "icon-location" />
                <span>{city}, {country}</span> 
            </div>
            <div className="size-price">                
                <div className="hotel-size">
                    <img src={bed} alt="icono habitaciones" className= "icon-room" />
                    <span>{rooms} Habitaciones</span>
                </div> 
                <Price/>
            </div>
            <button className="reserve">Reservar</button>
            




        </div>
    );
}

export default Card; 