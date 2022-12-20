import './App.css';
import NavBar from './components/Navbar/NavBar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/contacts" element={<Contacts />}></Route>
            <Route exact path="/products" element={<Products />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
