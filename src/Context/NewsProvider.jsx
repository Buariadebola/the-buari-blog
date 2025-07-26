import React, { createContext, useEffect, useState } from 'react'

const NewsContext = createContext();

const NewsProvider = ({children}) => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('politics');
  const apiKey = 'fb74b71e4f974376a304f5f847332c06';
  
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try{
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`);
        const data = await response.json();
        setNews(Array.isArray(data.articles) ? data.articles : []);
      } catch (error) {
        setError('Failed to fetch News');
      } finally {
        setLoading(false)
      }
    }
    fetchNews();
  }, [category])

    const handleChangeCategory = (newCategory) => {
    setCategory(newCategory);
  }

  return (
    <NewsContext.Provider value={{ error, loading, news, handleChangeCategory, category}}>
      {children}
    </NewsContext.Provider>
  )
}

export { NewsProvider, NewsContext }

