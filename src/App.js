import logo from './logo.svg';
import './App.css';
import './style.css'
import Nav from './components/Nav';
import { Routes,Route } from 'react-router-dom';
import BrowseInStore from './components/BrowseInStore';
import Menu from './components/Menu';
import Wholefoodsbody from './components/Wholefoodsbody';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Menu/>
      <Routes>
        <Route path="/browse-in-store" element={<BrowseInStore/>}></Route>
      </Routes>
      <Wholefoodsbody/>
      
    </div>
  );
}

export default App;
