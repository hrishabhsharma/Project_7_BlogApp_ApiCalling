import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Cards.css'
import { ScrollToTop } from './HelpingFunction'

//       We use this component in Home Component
//       WE DO NOT USE THIS COMPONENT As cards in All Category
//       THIS IS NOT USEFUL
//       THIS IS SEPERATE COMPONENT FOR ALL CARDS IN PAGES

const Cards = ({
                      id,
                      type,
                      image,
                      heading,
                      subheading,
                      date,
                      genre,
                      count,
                      Toggle
                    }) => {  
  if(type === 'main'){
    return (
      <Link onClick={ScrollToTop} to={`/${genre}/${id}`} className={`All_Card ${Toggle}`}>
          <div className='All_Card_left_side'>
              <img src={image} alt='not found'/>
          </div>
          <div className='All_Card_right_side'>
              <p className='All_Card_Head'>{heading}</p>
              <p className='All_Card_Subhead'>{subheading}</p>
              <p className='All_Card_Foot'><span>{genre}</span> / {date}</p>
          </div>
      </Link>
    )
  }
  else{
    return (
      <Link onClick={ScrollToTop} to={`/${genre}/${id}`} className='Top_Card'>
          <div className='Top_Card_left_side'>
              <img src={image} alt='not found'/>
          </div>
          <div className='Top_Card_right_side'>
              <p className='Top_Card_Head'>{heading}</p>
              <p className='Top_Card_Foot'><span>{genre}</span> / {date}</p>
          </div>
          <div className='Top_Card_Count'>
            <p>{count}</p>
          </div>
      </Link>
    )
  }
}

export default Cards