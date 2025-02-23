
import '../components/CustomCard.css'


const CustomeCard = ({shoesUrl,shoesTitle}) => {
  return (
    <div className='card-container'>
    <img className='card-img' src={shoesUrl} loading='lazy'/>
    <p className='shoes-title'>{shoesTitle}</p>
    
    </div>
  )
}

export default CustomeCard