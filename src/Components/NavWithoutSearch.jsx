import React from 'react'
import BottomNav from './BottomNav'
import TopNavWithoutSearch from './TopNavWithoutSearch'

const NavWithoutSearch = () => {

  return (
    <nav>
      <TopNavWithoutSearch/>
      <BottomNav/>
    </nav>
  )
}

export default NavWithoutSearch
