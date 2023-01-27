import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import ConfirmedBooking from './components/ConfirmedBooking';
import About from './components/About';
import Login from './components/Login';
import Menu from './components/Menu';
import Order from './components/Order';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import BookingPage from './components/BookingPage';



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="reservations" element={<BookingPage />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order" element={<Order />} />
          <Route path="login" element={<Login />} />
          <Route path='confirmedbooking' element={<ConfirmedBooking/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
