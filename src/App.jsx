import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookEvent from './pages/BookEvent';
import MyBookings from "./pages/MyBookings";

import CityDetail from './components/CityDetail.jsx';
import CitySlider from './components/CitySlider.jsx';
import CategoryDropdown from './components/CategoryDropdown.jsx';
import SeprateCatogary from './components/SeprateCatogary.jsx';

import EventDetails from './pages/EventDetails.jsx';

import Home from './pages/Home';
import StartPlanning from './pages/StartPlanning.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import EventListPage from './pages/EventListPage.jsx';

function App() {
  return (
    <Router>


      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookevent" element={<BookEvent />} />
        <Route path="/mybooking" element={<MyBookings />} />
        <Route path="/citiesevents" element={<CitySlider />} />
        <Route path="/city/:cityName" element={<CityDetail />} />
        <Route path="/catogary" element={<CategoryDropdown />} />
        <Route path="/bookeventPc" element={<StartPlanning />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/events/:city/:eventTitle" element={<EventDetails />} />
        <Route path="/events" element={<EventListPage />} />



        <Route path="/category/:categoryName" element={<SeprateCatogary />} />


      </Routes>


    </Router >
  );
}

export default App;
