import './App.css';
import NavBar from './components/Navbar/NavBar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import { LogIn } from './components/LogIn';
import { MusicPlayer } from './components/MusicPlayer';
import UnauthorizedPage from './components/UnauthorizedPage';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<LogIn />}></Route>
            <Route exact path="/unauthorizedpage" element={<UnauthorizedPage />}></Route>

          </Routes>
          <MusicPlayer/>
        </BrowserRouter>        
    </div>
  );
}

export default App;
