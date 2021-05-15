import { useState } from 'react';

// components
import Accordion from './subcomponents/Accordion';

export default function Navbar() {
  let [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav((nav = !nav));
  };

  return (
    <header>
      <nav className="navbar">
        <div className="left-side">
          <div className="logo header-logo">Blogr</div>
          <div className="desktop-nav-links">
            <Accordion
              title="Product"
              links={[
                'Overview',
                'Pricing',
                'Marketplace',
                'Features',
                'Integrations',
              ]}
            />
            <Accordion
              title="Company"
              links={['About', 'Team', 'Blog', 'Careers']}
            />
            <Accordion
              title="Connect"
              links={['Contact', 'Newsletter', 'Linkdin']}
            />
          </div>
        </div>
        <div className={`${nav ? 'nav-active' : ''} secondary-nav-links`}>
          <div className="mobile-nav-links ">
            <Accordion
              title="Product"
              links={[
                'Overview',
                'Pricing',
                'Marketplace',
                'Features',
                'Integrations',
              ]}
            />
            <Accordion
              title="Company"
              links={['About', 'Team', 'Blog', 'Careers']}
            />
            <Accordion
              title="Connect"
              links={['Contact', 'Newsletter', 'Linkdin']}
            />
          </div>
          <div className="second-nav">
            <a href="/#" className="login-btn">
              Login
            </a>
            <a href="/#" className="singup-btn">
              Sing up
            </a>
          </div>
        </div>
        <div
          className={`${nav ? 'burger-active' : ''} burger`}
          onClick={toggleNav}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}
