import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/NavbarMain.jsx';
import Main from './components/Main.jsx';
import Section from './components/Section.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarMain/>
      <Main />
     <Section/>
    </>
  )
}

export default App
