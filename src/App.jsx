import { useState } from 'react'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import Womenwellness from './pages/Women_wellness/Womenwellness'
import WomenHero from './pages/Women_wellness/components/WomenHero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Womenwellness/>
    <Footer/>
    </>
  )
}

export default App
