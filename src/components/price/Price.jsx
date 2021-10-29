/**
 * Styles
 */
import './Price.css';

import dollar from '../../assets/images/icons/dollar-sign-solid.svg'
import DollarIcon from '../dollarIcon/DollarIcon'

function Price() {
    return (
    <div className="price"> 
    <img src={dollar} alt="" className="dollar" />

    
    </div>
    );
}

//<DollarIcon/>

export default Price;