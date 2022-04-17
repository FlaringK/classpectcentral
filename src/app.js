import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages';
import ClasspectLoopup from './pages/lookup';
import RandSession from './pages/randomSession';
import Credits from './pages/credits';

const MainApp = (props) => {
  return ( 
    <Router>
    <Navbar />
    <Routes>
        <Route path='/classpectcentral/' element={<Home />} />
        <Route path='/classpectcentral/lookup' element={<ClasspectLoopup />} />
        <Route path='/classpectcentral/session' element={<RandSession />} />
        <Route path='/classpectcentral/credits' element={<Credits />} />
    </Routes>
    <Footer />
    </Router>
   );
}
 
export default MainApp;