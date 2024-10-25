import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo3.png';
import '../styles/header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="Logo" /></Link>
      <nav>
        <NavLink to="/">À propos</NavLink>
        <NavLink to="/projects">Projets</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
