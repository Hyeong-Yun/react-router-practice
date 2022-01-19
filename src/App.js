import './App.css';
import  {BrowserRouter as Router,  Routes, Route, Link} from 'react-router-dom'
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <nav>
        <Link to = "/"> Home </Link>
        <Link  to = "/about"> About </Link>
        <Link to = "/profile"> Profile </Link>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home />}>Home</Route>
        <Route path = "/about" element = {<About />}>About</Route>
        <Route path = "/profile" element = {<Profile />}>Profile</Route>
      </Routes>
    </Router>
  );
}

export default App;
