import React, { useContext, useState } from 'react'
import menubtn from '../Images/menu1.png'
import { ToggleMenuContext } from '../Context/ToggleMenuProvider'
import { NewsSearchContext } from '../Context/NewsSearchProvider'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const MenuButton = () => {

    const { handleToggle } = useContext(ToggleMenuContext);
    const {handleKeywordChange, keyword} = useContext(NewsSearchContext);
    const [searchBar, setSearchBar] = useState(false);

    const handleSearchBar = () => {
      setSearchBar(!searchBar)
    }

  return (
    <div className='top-nav'>
      <h1>The Buari Blog</h1>
        <div className="search">
          <div className={`search-bar ${searchBar ? 'active' : ''}`}>
            <input type="text" placeholder='Search for news..' value={keyword} onChange={(e) => handleKeywordChange(e.target.value)}/>
          </div>
            <button className='search-btn' onClick={handleSearchBar}><FaMagnifyingGlass style={{color: 'black'}}/></button>
            Search...
            <button className='menu-button' onClick={handleToggle}><img src={menubtn} alt="" /></button>
        </div>
    </div>
  )
}

export default MenuButton
