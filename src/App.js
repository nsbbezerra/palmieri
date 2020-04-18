import React from 'react';
import MenuApp from './components/menu';
import Footer from './components/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoutesApp from './routes/index';

function App() {
  return (
    <Router>
      <MenuApp />
      <RoutesApp />
      <Footer />
    </Router>
  );
}

export default App;
