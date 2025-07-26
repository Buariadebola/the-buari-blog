import React from 'react'
import img from '../Images/the buari blog .jpg'

const FullView = ({article}) => {
    if (!article) {
        return (
           <div className="full-view">
            <img src={img} alt="" />
            <h2>Select a highlight to view details</h2>
        </div> 
        )
    }
  return (
    <>
    <div className="full-view">
        <img src={article.urlToImage || img} alt="" />
        <h2>{article.title}</h2>
        <p className='full-description'>{article.description}</p>
        <p className='full-date'>{article.publishedAt}</p>
        <p className='full-author'>{article.author}</p>
    </div>
    </>
  )
}

export default FullView
