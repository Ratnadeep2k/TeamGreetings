
import './App.css'
import Hero from './components/Hero'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
