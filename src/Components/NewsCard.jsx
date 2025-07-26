import React from 'react'
import img from '../Images/the buari blog .jpg'

const NewsCard = ({urlToImage, author, title, publishedAt, description, source, url}) => {
  return (
    <div className='news-card'>
      <img src={urlToImage || img} alt="" />
      <h2 className='news-title'>{title}</h2>
      <p className='news-description'>{description} <a href={url}>Read more..</a></p>
      <p className='news-date'>{publishedAt}</p>
      <p className='news-author'>{author}</p>
      <p className='news-source'>{source}</p>
    </div>
  )
}

export default NewsCard
