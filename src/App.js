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
            <Route exact path="/" component={<Home />}></Route>
            <Route exact path="/contacts" component={<Contacts />}></Route>
            <Route exact path="/products" component={<Products />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
