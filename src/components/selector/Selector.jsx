import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

/**
 * Styles
 */
import './Selector.css';


function Selector(props) {
    const { data, handleFilter, type, id } = props;
    console.log('data ', data)
    
    const {currentOption, setCurrentOption} = useContext(AppContext)

    const handleSelect = ((e) => {
        const currentType = data.find((item) => e.target.value === item.name );
        console.log('evento ',e.target.value)
        //const currentType = data.find((item) => e.target.value === item.name);
        console.log('currentType', currentType)
        setCurrentOption(e.target.value);
        handleFilter(currentType);
        
    })


return (
    <select value={currentOption} className="select" onChange={handleSelect}  >
        {
            data.map((option) => <option key={id} type={option.type} value={option.name}>{option.nameShowed}</option>)
        }
    </select>
);

}
export default Selector;
