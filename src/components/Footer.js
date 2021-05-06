export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="logo footer-logo">Blogr</div>
        <div className="menu menu-1">
          <a href="#" className="menu-title">
            Product
          </a>
          <div className="menu-links">
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
          </div>
        </div>
        <div className="menu menu-2">
          <a className="menu-title" href="#">
            Company
          </a>
          <div className="menu-links">
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div className="menu menu-3">
          <a className="menu-title" href="#">
            Connect
          </a>
          <div className="menu-links">
            <a href="#">Contact</a>
            <a href="#">Newsletter</a>
            <a href="#">LinkdIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
