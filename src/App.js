import logo from './logo.svg';
import './App.css';
import { useContext } from 'react'
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
import { AuthContext } from './contexts/AuthProvider';


function App() {
  const { login, user, logout } = useContext(AuthContext)

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
    <div>
    {
        (!user.loggedIn) ?
        <button onClick={ login }>Login</button>
        :
        <div>
          <p>Current User: {user.displayName}</p>
          <button onClick={ logout }>Logout</button>
        </div>       
      }
    </div>

    <Routes>
      <Route path="/car/:uid/:id" element={<CarSingle/>} />
      <Route path="/" element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
