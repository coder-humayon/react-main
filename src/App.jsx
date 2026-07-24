import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './header/Header'
import Bannar from './banner/Bannar'
import Iphone14 from './Iphone14'
import Watch from './Watch'
import Apple from './Apple'
import Sliders from './AppleSlider'
import AppleSlider from './AppleSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Bannar/>
      <Iphone14/>
      <Watch/>
      <Apple/>
      <AppleSlider/>
    </>
  )
}

export default App
