import React, { useContext } from 'react'
import { NewsContext } from '../Context/NewsProvider'
import HomePostCard from '../Components/HomePostCard'
import HomeLoaderAni from '../Loaders/HomeLoaderAni';
import { FaExclamationTriangle } from 'react-icons/fa';

const BreakingNews = () => {

  const {loading, news, error} = useContext(NewsContext);

  return (
    
    <>
    <section className='breaking-news'>
        <h4>Breaking News</h4>
        <div className="post-section">
           {loading ? (
              <HomeLoaderAni/>
            ) : news.length > 0 ? (
              news.slice(0, 5).map((article, index) => (
                <HomePostCard
                  key={index}
                  urlToImage={article.urlToImage}
                  title={article.title}
                  publishedAt={new Date(article.publishedAt).toLocaleString()}
                  author={article.author}
                  source={article.source.name}
                />
              ))
              ) : (
                <div className='error-msg'>
                  {error && <p><FaExclamationTriangle/> {error}</p>}     
                </div>
              )}
        </div>
      </section>
    </>
  )
}

export default BreakingNews
