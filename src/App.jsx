import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Studio from './pages/Studio';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/studio" element={<Studio/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
