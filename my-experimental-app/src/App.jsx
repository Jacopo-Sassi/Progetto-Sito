import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHero from './components/CardHero.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CardHero />
    </>
  )
}

export default App
