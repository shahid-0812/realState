
import './App.css'
import { Navbar } from './Components/Navbar'
import { Collections } from './pages/Collections'
import { Contact } from './pages/Contact'
import { Explore } from './pages/Explore'
import { Home } from './pages/Home'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  
  console.log("App rendered");
  return (
    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/collections" element={<Collections/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
