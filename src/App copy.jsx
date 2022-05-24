import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Studio from './pages/Studio';
import background from './images/electric.jpg';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/studio" element={<Studio/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    {/* <div className='min-h-screen bg-cover bg-center sm:bg-center md:bg-center' style={{ backgroundImage: `url(${background})` }}>
</div> */}
    </>
  );
}

export default App;
