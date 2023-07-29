import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import NotePage from './pages/NotePage'


function App() {

  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path = '/NotePage' element = {<NotePage/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
