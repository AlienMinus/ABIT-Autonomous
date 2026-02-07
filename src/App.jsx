import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NotFound from './NotFound';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
