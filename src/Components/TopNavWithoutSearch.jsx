import React, { useContext } from 'react'
import menubtn from '../Images/menu1.png'
import { ToggleMenuContext } from '../Context/ToggleMenuProvider'

const TopNavWithoutSearch = () => {

    const {handleToggle} = useContext(ToggleMenuContext);
    
  return (
    <>
    <div className='top-nav'>
        <h1>The Buari Blog</h1>
        <div className="search">
            <button className='menu-button' onClick={handleToggle}><img src={menubtn} alt="" /></button>
        </div>
      </div>
    </>
  )
}

export default TopNavWithoutSearch
