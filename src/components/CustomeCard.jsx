import "../assets/styles/CustomCard.css"
import {Link} from "react-router-dom";
import Arrow from "../assets/carrow.svg"


const CustomeCard = ({key,shoesUrl,shoesTitle,shoesCost,to}) => {
  return (
    <div key={key} className='card-container'>
    <img className='card-img' src={shoesUrl} loading='lazy'/>
    <p className='shoes-title'>{shoesTitle}</p>

    <div className="price-btn">
    <p className='shoes-title'> ₹ {shoesCost}</p>
    <Link className="view-btn" to={to}>
    <img src={Arrow}/>
    </Link>

    </div>
    
    
    </div>
  )
}

export default CustomeCard