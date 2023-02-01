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
        <Route path="/littlelemon-react-capstone/" element={<Main />}>
          <Route path="/littlelemon-react-capstone/reservations" element={<BookingPage />} />
          <Route path="/littlelemon-react-capstone/about" element={<About />} />
          <Route path="/littlelemon-react-capstone/menu" element={<Menu />} />
          <Route path="/littlelemon-react-capstone/order" element={<Order />} />
          <Route path="/littlelemon-react-capstone/login" element={<Login />} />
          <Route path='/littlelemon-react-capstone/confirmedbooking' element={<ConfirmedBooking/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
