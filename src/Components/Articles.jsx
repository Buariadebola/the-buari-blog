import React, { useContext } from 'react'
import HomePostCard from '../Components/HomePostCard'
import { articleContext } from '../Context/ArticleProvider'
import HomeLoaderAni from '../Loaders/HomeLoaderAni';

const Articles = () => {

  const {loading, posts, error} = useContext(articleContext);

  return (
    <>
    <section className='articles'>
        <h4>Sport News</h4>
        <div className="post-section">
          {loading ? (
            <HomeLoaderAni/>
          ) : posts.length > 0 ? (
            posts.slice(0, 5).map((article, index) => (
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
                {error && <p> {error}</p>}     
              </div>
            )}
        </div>
      </section>
    </>
  )
}

export default Articles
