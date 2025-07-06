import React from 'react'
import Header from './components/Header'
import Home from './screens/Home'
import { Route, Routes } from 'react-router'
import CountryPage from './screens/CountryPage'

const App = () => { 
    
  return (
    <>

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/country-page/:id' element={<CountryPage/>}/>
      </Routes>

    </>
  )
}

export default App
