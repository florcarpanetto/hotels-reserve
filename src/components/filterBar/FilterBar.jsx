/**
 * Styles
 */
import { countries } from '../../assets/scripts/countriesDB';
import Selector from '../selector/Selector';
import './FilterBar.css';

function FilterBar({handleFilter}) {

//console.log(handleFilter)
  return (
    <div className="Filter-bar">
      <input type="date" className="since" />
      <input type="date" className="untill" />
      
      <select name="" id="" className="countries">
        
      </select>
      Hola desde filterbar
    </div>
  );
}

export default FilterBar;