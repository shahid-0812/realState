
import './App.css'
import { Navbar } from './Components/Navbar'
import { Collections } from './pages/Collections'
import { Contact } from './pages/Contact'
import { Explore } from './pages/Explore'
import { Home } from './pages/Home'
import { Footer } from './Components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  console.log("App rendered");
  return (
    <>


      <Router>
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </div>
</Router>

    </>
  )
}

export default App
