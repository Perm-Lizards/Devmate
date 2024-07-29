import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <p>© 2024 Devmate team</p>
      </div>
      <div className="footer-links">
        <a href="/contact">
          <p>Contact</p>
        </a>
        <a href="/terms">
          <p>Terms</p>
        </a>
      </div>
      <div className="hidden-corp-name">
        <p>© 2024 Devmate team</p>
      </div>
    </div>
  );
};

export default Footer;
