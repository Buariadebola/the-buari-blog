
import './App.css';
import MenuBar from './Components/MenuBar';
import { ThemeProvider } from './Context/ThemeProvider';
import { ToggleMenuProvider } from './Context/ToggleMenuProvider';
import HomePage from './Pages/HomePage';
import NewsPage from './Pages/NewsPage';
import Contact from './Pages/Contact';
import About from './Pages/About'
import { ArticleProvider } from './Context/ArticleProvider';
import { NewsProvider } from './Context/NewsProvider';
import { NewsSearchProvider } from './Context/NewsSearchProvider';
import { AISearchProvider } from './Context/AISearchProvider';
import { Route, Routes } from 'react-router';


function App() {
  return (
    <>
    <ThemeProvider>
      <NewsSearchProvider>
        <AISearchProvider>
          <NewsProvider>
        <ArticleProvider>
        <ToggleMenuProvider>
            <MenuBar/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/news' element={<NewsPage/>} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
                
    </ToggleMenuProvider>
      </ArticleProvider>
      </NewsProvider>
        </AISearchProvider>
      </NewsSearchProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
