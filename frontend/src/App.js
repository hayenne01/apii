import './App.css';
import Navvbar from "./components/NavBar"
import {Route,Routes} from "react-router-dom"
import Home from './components/Home' 
import Card from './components/ContactCard'
import NotFound from './components/NotFound';
import UserDetails from './components/UserDetails';
function App() {
  return (
    <div className="App">
  <Navvbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contactlist' element={<Card/>} />
    <Route path='/userdetails/:id' element={<UserDetails/>} />
    <Route path='/*' element={<NotFound/>} />
  </Routes>
  
    </div>
  );
}

export default App;
