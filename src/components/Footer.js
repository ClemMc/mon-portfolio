import '../styles/footer.scss'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section menu">
            <h3>Menu</h3>
            <ul>
              <li><a href="#home">À propos</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section social">
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-metral-charvet-109543264/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/ClemMc" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/clem_mc21/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Clément Metral. Tous droits réservés.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  