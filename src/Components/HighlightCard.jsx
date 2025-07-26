import React from 'react'
import img from '../Images/the buari blog .jpg'

const HighlightCard = ({urlToImage, title, publishedAt, onClick}) => {
  return (
    <>
    <div className="highlight-card" onClick={onClick} style={{cursor: 'pointer'}}>
        <img src={urlToImage || img} alt="" />
        <p className='highlight-title'>{title}</p>
        <p className='highlight-date'>{publishedAt}</p>
    </div>
    </>
  )
}

export default HighlightCard
