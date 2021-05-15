import { useState, useEffect } from 'react';
// svg
import laptopMobile from '../assets/illustration-laptop-mobile.svg';
import laptopDesktop from '../assets/illustration-laptop-desktop.svg';

export default function Feature() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div id="feature">
      <div className="container">
        <div className="feature-display">
          <img
            src={windowWidth > 1023 ? laptopDesktop : laptopMobile}
            alt="feature"
          />
        </div>
        <div className="feature-desc">
          <div className="para para-1">
            <h2 className="para-title">Free, open, simple</h2>
            <p className="para-desc">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="para para-2">
            <h2 className="para-title">Powerful tooling</h2>
            <p className="para-desc">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
