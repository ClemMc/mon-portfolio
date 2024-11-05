import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <Home />
    <Footer />
  </Router>
);

export default App;
