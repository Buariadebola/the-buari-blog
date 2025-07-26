import React from 'react'
import img from '../Images/the buari blog .jpg'

const PostCard = ({urlToImage, title, publishedAt, author, source}) => {
  return (
    <div className='post'>
      <img src={urlToImage || img} alt="" />
      <div className="post-content">
        <p className='post-title'>{title}</p>
        <p className='post-time'>{publishedAt}</p>
        <p className='post-author'>{author}</p>
        <p className='post-source'>{source}</p>
      </div>
    </div>
  )
}

export default PostCard
