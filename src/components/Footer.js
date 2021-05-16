/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="logo footer-logo">Blogr</div>
        <div className="menu menu-1">
          <a className="menu-title">Product</a>
          <div className="menu-links">
            <a>Overview</a>
            <a>Pricing</a>
            <a>Marketplace</a>
            <a>Features</a>
            <a>Integrations</a>
          </div>
        </div>
        <div className="menu menu-2">
          <a className="menu-title">Company</a>
          <div className="menu-links">
            <a>About</a>
            <a>Team</a>
            <a>Blog</a>
            <a>Careers</a>
          </div>
        </div>
        <div className="menu menu-3">
          <a className="menu-title">Connect</a>
          <div className="menu-links">
            <a>Contact</a>
            <a>Newsletter</a>
            <a>LinkdIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
