import "../assets/styles/CustomCard.css"


const CustomeCard = ({shoesUrl,shoesTitle,shoesCost}) => {
  return (
    <div className='card-container'>
    <img className='card-img' src={shoesUrl} loading='lazy'/>
    <p className='shoes-title'>{shoesTitle}</p>
    <p className='shoes-title'> ₹ {shoesCost}</p>
    
    </div>
  )
}

export default CustomeCard