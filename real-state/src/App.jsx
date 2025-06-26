import './App.css'
import { Navbar } from './Components/Navbar'
import { Collections } from './pages/Collections'
import { Contact } from './pages/Contact'
import { Explore } from './pages/Explore'
import { Home } from './pages/Home'
import { Footer } from './Components/Footer'
import { Agents } from './pages/Agents'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { ForgetPassword } from './pages/ForgetPassword'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { SecurityNumber } from './pages/SecurityNumber'
import { NewPassword } from './pages/NewPassword'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

function AppContent() {
  const location = useLocation();
  const hideLayoutPaths = ['/login', '/forgot-password', '/security-number','/new-password'];
  const hideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/security-number" element={<SecurityNumber />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
