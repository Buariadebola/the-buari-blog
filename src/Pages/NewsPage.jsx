import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import NewsCard from '../Components/NewsCard'
import { FaExclamationTriangle } from 'react-icons/fa';
import { NewsContext } from '../Context/NewsProvider'
import NewsPageLoader from '../Loaders/NewsPageLoader'
import { NewsSearchContext } from '../Context/NewsSearchProvider'

const NewsPage = () => {

  const {news, loading} = useContext(NewsContext);
  const {searchNews} = useContext(NewsSearchContext);

  return (
    <div className='news-page'>
      <Navbar/>
        {loading ? (
          <NewsPageLoader/>
        ) : searchNews.length > 0 ? (
           <div className="newspage-content">
              {searchNews.map((article, index) => (
              <NewsCard
                key={index}
                urlToImage={article.urlToImage}
                title={article.title}
                publishedAt={new Date(article.publishedAt).toLocaleString()}
                author={article.author}
                source={article.source.name}
                description={article.description}
                url={article.url}
              />
              ))}
              </div>
        ) : news.length > 0 ? (
            <div className="newspage-content">
              {news.map((article, index) => (
              <NewsCard
                key={index}
                urlToImage={article.urlToImage}
                title={article.title}
                publishedAt={new Date(article.publishedAt).toLocaleString()}
                author={article.author}
                source={article.source.name}
                description={article.description}
                url={article.url}
              />
              ))}
              </div>
          ) : (
            <div className='error-msg' style={{maxWidth: '50vw', marginTop: '30vh'}}>
              <p><FaExclamationTriangle/> Failed to fetch News</p>
            </div>
          )}
    </div>
  )
}

export default NewsPage
