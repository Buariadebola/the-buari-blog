import React, { createContext, useState, useEffect } from 'react'

const NewsSearchContext = createContext();

const NewsSearchProvider = ({children}) => {

    const [searchNews, setSearchNews] = useState([]);
      const [keyword, setKeyword] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const apiKey = 'fb74b71e4f974376a304f5f847332c06';
    
      useEffect(() => {
        const fetchNews = async () => {
          setLoading(true);
          try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`);
          const data = await response.json();
          setSearchNews(Array.isArray(data.articles) ? data.articles : []);
          } catch (error) {
            setError('failed to fetch Articles');
          } finally {
            setLoading(false);
          }
        }
        fetchNews();
      }, [keyword])
    
      const handleKeywordChange = (newKeyword) => {
        setKeyword(newKeyword);
      }

  return (
    <NewsSearchContext.Provider value={{error, searchNews, loading, handleKeywordChange, keyword}}>
        {children}
    </NewsSearchContext.Provider>
  )
}

export { NewsSearchProvider, NewsSearchContext }
