import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import Hero from './components/Hero';
import About from './components/About';
import Login from './components/Login';
import Menu from './components/Menu';
import Order from './components/Order';
import Reservations from './components/Reservations';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <Nav/>
        <Hero/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
