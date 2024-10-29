import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';
import '../styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <nav>
        <ul>
            <li><a href="#home">À propos</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
