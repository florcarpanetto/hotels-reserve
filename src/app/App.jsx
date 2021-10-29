
/**
 * Styles
 */
import './App.css';

/**
 * Components
 */
import Header from '../components/header/Header';
import FilterBar from '../components/filterBar/FilterBar';
import CardCollection from '../components/cardCollection/CardCollection';
import hotelsData from '../assets/scripts/data';
import { useState } from 'react';
import { countries } from '../assets/scripts/countriesDB';
import Selector from '../components/selector/Selector';
import { prices } from '../assets/scripts/pricesDB';
import { size } from '../assets/scripts/sizeDB';


function App() {
  const [dataFiltered, setDataFiltered] = useState(hotelsData);
  console.log('dataFiltered', dataFiltered);
  

  
  const handleFilter = ((selected)=>{
    console.log('selected ',selected)
    const { type, nameShowed, name, id } = selected
    console.log('type', type)
    const hotelsFiltered = hotelsData.filter((hotel)=> console.log('hotel[type]',hotel[type]))
    console.log('hotelsFiltered', hotelsFiltered)
    /* currentHotelsUpdate(dataFiltered);  */
    setDataFiltered(id === 1 ? hotelsData : hotelsFiltered);
    
  })

  /*const handleFilter = (selected) => {
    const { type, value, id } = selected;
    console.log("@type", type);
    console.log("@value", value);
    console.log(selected);
    const hotelsFilter = hotelsData.filter(
      (hotel) => hotel[type].toString() === value
    );
    setDataFiltered(0 === id ? hotelsData : hotelsFilter);
  };*/

  

  return (
    <div className="app">
      <Header/> 

      <FilterBar />
      <Selector data={countries} handleFilter={handleFilter} />
      <Selector data={prices} handleFilter={handleFilter} />
      <Selector data={size} handleFilter={handleFilter} />
      <CardCollection dataFiltered={dataFiltered} />

        
      

    </div>
  );
}

export default App;
