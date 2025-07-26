import React, { useContext } from 'react'
import { NewsContext } from '../Context/NewsProvider';

const BottomNav = () => {

    const {handleChangeCategory, category} = useContext(NewsContext);

  return (
    <>
    <div className='bottom-nav'>
        <ul>
            <li><button className={`category-btn ${category === 'politics' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('politics')}>Politics</button></li>
            <li><button className={`category-btn ${category === 'business' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('business')}>Business</button></li>
            <li><button className={`category-btn ${category === 'sport' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('sport')}>Sport</button></li>
            <li><button className={`category-btn ${category === 'entertainment' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('entertainment')}>Entertainment</button></li>
            <li><button className={`category-btn ${category === 'technology' ? 'active-cat' : ''}`} onClick={() => handleChangeCategory('technology')}>Technology</button></li>
        </ul>
    </div>
    </>
  )
}

export default BottomNav
