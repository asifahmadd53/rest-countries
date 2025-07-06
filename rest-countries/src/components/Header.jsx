import React, { useContext } from 'react'
import { darkMoon, lightMoon } from '../constants/icons'
import ThemeContext from '../context/ThemeContext' // Make sure the import path is correct

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className='px-6 md:px-12 lg:px-16 xl:px-20 flex justify-between items-center p-4 lg:p-5 px-4  bg-background text-foreground shadow-md'>
      <h1 className='text-lg font-semibold '>Where in the world?</h1>
      <div>
        <button
          onClick={toggleTheme}
          className='flex items-center gap-2 border border-gray-300 p-1 px-2 rounded-sm'
        >
          <img src={theme === 'light' ? lightMoon : darkMoon} alt="theme icon" />
          Dark Mode
        </button>
      </div>
    </header>
  )
}

export default Header
