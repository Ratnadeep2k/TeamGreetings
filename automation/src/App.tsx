
import './App.css'
import Hero from './components/Hero'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { User } from './components/User'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/user' element={<User/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
