import './App.css';
import Home from './home';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from '../src/navbar/navbar.jsx';
import Works from './works/works';

function App() {
  return (
    <Router >
      <Home/>
    </Router>
  );
}

export default App;
