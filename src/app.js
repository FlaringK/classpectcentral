import Navbar from './components/navbar';
import Home from './pages';
import ClasspectLoopup from './pages/lookup';
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Footer from './components/footer';
import RandSession from './pages/randomSession';

const MainApp = (props) => {
  return ( 
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lookup' element={<ClasspectLoopup />} />
        <Route path='/session' element={<RandSession />} />
    </Routes>
    <Footer />
    </Router>
   );
}
 
export default MainApp;