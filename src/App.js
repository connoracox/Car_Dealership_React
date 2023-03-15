import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { BrowserRouter, 
  Routes, 
  Route, 
  Link 
} from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'
import Pokemon from './views/Pokemon'
import CarSingle from './views/CarSingle'


function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/pokemon">Pokemon</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/car/:id" element={<CarSingle/>} />
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
