import React, { createContext, useEffect, useState } from 'react'

const articleContext = createContext();

const ArticleProvider = ({children}) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(``);
      const data = await response.json();
      setPosts(Array.isArray(data.articles) ? data.articles : []);
      } catch (error) {
        setError('failed to fetch Articles');
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [])


  return (
    <articleContext.Provider value={{error, posts, loading}}>
      {children}
    </articleContext.Provider>
  )
}

export { ArticleProvider, articleContext }
