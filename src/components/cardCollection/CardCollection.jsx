/**
 * Styles
 */
import './CardCollection.css';

/**
 * Components
 */
import Card from '../card/Card';

/**
* Data Base
*/
import hotelsData from '../../assets/scripts/data';

/**<div className="App">
      {products.map((item)=>{
        return <Card id={item.id}
        name= {item.name}
        description={item.description}
        usuario={item.usuario}
        picture={item.picture}
        productSort = {productSort}
        />
      }
      )}
    </div> 
    slug: 'campo-tinto',
    name: 'Campo Tinto',
    photo: './images/campo-tinto.jpg',
    description: 'Campo Tinto es una chacra de 25 hectáreas ubicada en el corazón de San Roque, en medio del ondulante Carmelo, una zona de chacras, viñedos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.',
    availabilityFrom: today.valueOf() + 2160000000, // 25 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    rooms: 4,
    city: 'Colonia',
    country: 'Uruguay',
    price: 1
    */


      
  function CardCollection({dataFiltered}) {
    console.log('dataFiltered desde card', dataFiltered)
    return (
      <div className="card-collection">
          {dataFiltered.map((item) => {
              return <Card 
                          key = {item.id}
                          slug = {item.slug}
                          name = {item.name}
                          photo = {item.photo}
                          description = {item.description}
                          availabilityFrom = {item.availabilityFrom}
                          availabilityTo = {item.availabilityTo}
                          rooms = {item.rooms}
                          city = {item.city}
                          country = {item.country}
                          price = {item.price}
                      />
              })}
      </div>
    );
  }

export default CardCollection;