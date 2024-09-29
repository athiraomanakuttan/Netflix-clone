import './TitleCards.css'
import cardData from '../../assets/cards/Cards_data.tsx'

const TitleCards = () => {
  return (
    <div className='Title-cards m-4'>
      <h2 className='mb-3'>Popular on Netflix</h2>
      <div className='cart-list' >
          {
            cardData.map((card,index)=>{
              return(
                <div className='card' key={index}>
                  <img src={card.image} alt="card image" className='card-img' />
                  <p>{card.name}</p>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default TitleCards
