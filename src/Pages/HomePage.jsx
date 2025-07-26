import React, { useContext, useState } from 'react'
import Footer from '../Components/Footer';
import HighlightCard from '../Components/HighlightCard';
import BreakingNews from '../Components/BreakingNews';
import NavWithoutSearch from '../Components/NavWithoutSearch';
import { NewsContext } from '../Context/NewsProvider';
import { FaExclamationTriangle } from 'react-icons/fa';
import HighlightLoader from '../Loaders/HighlightLoader';
import FullView from '../Components/FullView';

const HomePage = () => {

  const {news, loading} = useContext(NewsContext);
  const [selectedArticle, setSelectedArticle] = useState(null)

  return (
    <div className='homepage'>
      <NavWithoutSearch/>
      <BreakingNews/>
      <section className='highlight-section'>
        <h4>Highlights</h4>
        <hr />
        <div className="highlight-content">
          <FullView  article={selectedArticle}/>
          <div className="highlights">
            {loading ? (
              <HighlightLoader />
            ) : news && news.length > 0 ? (
              news.slice(0, 100).map((article, index) => (
                <HighlightCard
                  key={index}
                  urlToImage={article.urlToImage}
                  title={article.title}
                  publishedAt={new Date(article.publishedAt).toLocaleString()}
                  onClick={() => setSelectedArticle(article)}
                />
              ))
            ) : (
              <div className='error-msg'>
                <p><FaExclamationTriangle/> Failed to fetch highlight</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default HomePage
