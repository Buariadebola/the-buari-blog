import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ToggleMenuContext } from '../Context/ToggleMenuProvider'
import { ThemeContext } from '../Context/ThemeProvider'
import { HiHome } from 'react-icons/hi2'
import { HiNewspaper } from 'react-icons/hi2'
import { HiInformationCircle } from 'react-icons/hi'
import { HiSun } from 'react-icons/hi2'
import { HiMoon } from 'react-icons/hi2'
import { IoSend } from 'react-icons/io5'
import { TiTimes } from 'react-icons/ti'
import AIicon from '../Images/renova AI logo.png'
import logo from '../Images/TBB inv logo.png'
import botpic from '../Images/Renova profile pic.png'
import userpic from '../Images/profile icon.png'
import { AISearchContext } from '../Context/AISearchProvider'

const MenuBar = () => {

  const {themeToggle, theme, clicked, handleColor} = useContext(ThemeContext)

  const { increaseMenubar, handleSearchBox, showSearch, setShowSearch } = useContext(ToggleMenuContext);

  const {onSent, recentPrompt, showResult, resultData, setInput, input} = useContext(AISearchContext);

  return (
    <div className={`menubar ${! increaseMenubar ? 'active' : ''}`}>
      <div className='menubar-logo'>
        <img src={logo} alt="" />
      </div>
      <div className="menu-options">
                {increaseMenubar ? (
          <li>
            <Link to="/"><HiHome style={{margin: '0', padding: '0', scale: '2'}}/></Link>
          </li>
        ) : (
          <li>
            <Link to="/"><span>Home</span><HiHome style={{marginLeft: '10px', padding: '0', scale: '1.2'}}/></Link>
          </li>
      )}
        {increaseMenubar ? (
        <li>
          <Link to="/news"><HiNewspaper style={{margin: '0', padding: '0', scale: '2'}}/></Link>
        </li>
        ) : (
          <li>
            <Link to="/news"><span>News</span><HiNewspaper style={{marginLeft: '10px', padding: '0', scale: '1.2'}}/></Link>
          </li>
      )}
        {increaseMenubar ? (
          <li>
            <Link to="/about"><HiInformationCircle style={{margin: '0', padding: '0', scale: '2'}}/></Link>
          </li>
        ) : (
          <li>
            <Link to="/about"><span>About</span><HiInformationCircle style={{marginLeft: '10px', padding: '0', scale: '1.2'}}/></Link>
          </li>
      )}
      <li>
        <div className="search">
        <div className={`search-box ${showSearch ? 'active' : ''}`}>
          <div className='search-display'>
          <div className="search-bar">
            <textarea type="text" placeholder='Send a message..' onChange={(e)=> setInput(e.target.value)} value={input} />
            <button><IoSend style={{scale: '2', color: 'black'}} onClick={()=> onSent()}/></button>
          </div>
          <div className="search-result">
            {showResult ? (
              <>
              <div className="chat">
                <img src={userpic} alt="" />
                <p className='input-text'>{recentPrompt}</p>
              </div>
              <div className="chat bot">
                <img src={botpic} alt="" />
                <p className='bot-text' dangerouslySetInnerHTML={{__html:resultData}}></p>
              </div>
              </>
            ) : (
              <div className="chat bot">
                <img src={botpic} alt="" />
                <p className='bot-text'>Hi, i am Renova AI, A text-based chatbot developed by Renova Codes. I'm designed to understand and generate human-like response based on the input i receive. You can ask me questions, seek information and even request assistance with various tasks. Let me know how i can help you!</p>
              </div>
            )
          }
          </div>
          <button className='remove-box' onClick={() => setShowSearch(false)}><TiTimes className='remove-icon'/></button>
          </div>
        </div>
          <button className='search-icon' onClick={handleSearchBox}><img src={AIicon} alt="" /></button>
          </div>
      </li>
        {increaseMenubar ? (
            <button className={`theme-button ${theme}`} onClick={themeToggle} onMouseDown={handleColor}>
        { clicked ? (
          <svg id="sun-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
        
        <svg id="moon-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        )
      }
      </button>
        ) : (
        <>
        <li><button className={`theme-btn ${theme}`} onClick={themeToggle} onMouseDown={handleColor}> Theme
            {clicked ? (
            <HiSun/>
        ) : (
          <HiMoon/>
        )
      }
        </button>
        </li>
        </>
      )
    }
      </div>
    </div>
  )
}

export default MenuBar
